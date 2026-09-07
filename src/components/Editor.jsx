import { useCallback, useMemo, useState, useRef, useEffect } from 'react'
import {
  ReactFlow, MiniMap, Background, BackgroundVariant,
  useNodesState, useEdgesState, addEdge, useReactFlow,
  MarkerType, useOnSelectionChange,
} from '@xyflow/react'
import ScriptNode from './nodes/ScriptNode'
import CordEdge from './CordEdge'
import { KINDS, KIND_ORDER } from '../lib/kinds'
import { useFlowPersistence } from '../hooks/useFlowPersistence'
import {
  IconPlus, IconMinus, IconFit, IconList, IconNew,
  IconDownload, IconUpload, IconLock, ZenithMark,
} from './icons'

const nodeTypes = { script: ScriptNode }
const edgeTypes = { cord: CordEdge }
const MARKER = { type: MarkerType.ArrowClosed, width: 15, height: 15, color: '#2b2620' }

let idc = 0
const nid = () => `n_${Date.now().toString(36)}_${(idc++).toString(36)}`

export default function Editor({ flow, onRename, onNew, onOpenList, onLock, toast }) {
  const rfWrap = useRef(null)
  const rf = useReactFlow()
  const [nodes, setNodes, onNodesChange] = useNodesState(flow.data?.nodes || [])
  const [edges, setEdges, onEdgesChange] = useEdgesState(flow.data?.edges || [])
  const [selectedIds, setSelectedIds] = useState(new Set())
  const { status, scheduleSave } = useFlowPersistence(flow.id)
  const fileRef = useRef(null)

  // Autosave su ogni cambiamento (dopo il primo mount)
  const mounted = useRef(false)
  useEffect(() => {
    if (!mounted.current) { mounted.current = true; return }
    scheduleSave({ data: { nodes, edges, viewport: rf.getViewport() } })
  }, [nodes, edges]) // eslint-disable-line react-hooks/exhaustive-deps

  useOnSelectionChange({
    onChange: ({ nodes: sel }) => setSelectedIds(new Set(sel.map((n) => n.id))),
  })

  // "Traccia ramo": i cavi a valle dei nodi selezionati si illuminano (linea impegnata)
  const liveEdgeIds = useMemo(() => {
    if (!selectedIds.size) return new Set()
    const out = new Map()
    edges.forEach((e) => { if (!out.has(e.source)) out.set(e.source, []); out.get(e.source).push(e) })
    const live = new Set(); const seen = new Set(); const queue = [...selectedIds]
    while (queue.length) {
      const n = queue.shift(); if (seen.has(n)) continue; seen.add(n)
      ;(out.get(n) || []).forEach((e) => { live.add(e.id); queue.push(e.target) })
    }
    return live
  }, [selectedIds, edges])

  const styledEdges = useMemo(
    () => edges.map((e) => ({ ...e, type: 'cord', markerEnd: MARKER, className: liveEdgeIds.has(e.id) ? 'is-live' : '' })),
    [edges, liveEdgeIds],
  )

  const onConnect = useCallback(
    (c) => setEdges((eds) => addEdge({ ...c, type: 'cord', data: { label: '' }, markerEnd: MARKER }, eds)),
    [setEdges],
  )

  const addNode = useCallback((kind) => {
    const el = rfWrap.current
    const rect = el ? el.getBoundingClientRect() : { width: window.innerWidth, height: window.innerHeight }
    const pos = rf.screenToFlowPosition({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 })
    const jitter = () => (Math.random() - 0.5) * 40
    const next = { id: nid(), type: 'script', position: { x: pos.x - 120 + jitter(), y: pos.y - 40 + jitter() },
      data: { kind, title: '', copy: '', no: nodes.length + 1 } }
    setNodes((ns) => ns.concat(next))
  }, [rf, nodes.length, setNodes])

  // Scorciatoie tastiera (portatile)
  useEffect(() => {
    const onKey = (e) => {
      const t = e.target
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return
      if (e.key === 'f' || e.key === 'F') { rf.fitView({ duration: 300, padding: 0.2 }); }
      else if (e.key === '+' || e.key === '=') { rf.zoomIn({ duration: 150 }) }
      else if (e.key === '-' || e.key === '_') { rf.zoomOut({ duration: 150 }) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [rf])

  const exportJSON = () => {
    const payload = { name: flow.name, data: { nodes, edges, viewport: rf.getViewport() } }
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = `${flow.name.replace(/[^\w\-]+/g, '_') || 'script'}.chiamate.json`
    a.click()
    URL.revokeObjectURL(a.href)
    toast('Script esportato')
  }
  const importJSON = (e) => {
    const file = e.target.files?.[0]; if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      try {
        const p = JSON.parse(reader.result)
        setNodes(p.data?.nodes || [])
        setEdges(p.data?.edges || [])
        if (p.name) onRename(p.name)
        setTimeout(() => rf.fitView({ duration: 300, padding: 0.2 }), 60)
        toast('Script importato')
      } catch { toast('File non valido') }
    }
    reader.readAsText(file)
    e.target.value = ''
  }

  const isEmpty = nodes.length === 0

  return (
    <div style={{ position: 'fixed', inset: 0 }}>
      <div className="panel-ground" />

      {/* Cartiglio */}
      <header className="rail-top">
        <div className="rail-top__brand">
          <ZenithMark className="rail-top__mark" />
          <div className="rail-top__wordmark">
            <span className="rail-top__studio">Zenith Studio</span>
            <span className="rail-top__app">Centralino</span>
          </div>
        </div>
        <div className="rail-top__flow">
          <input
            className="rail-top__flowname"
            value={flow.name}
            onChange={(e) => onRename(e.target.value)}
            aria-label="Nome dello script"
          />
          <span className={`rail-top__save ${status === 'saving' ? 'saving' : ''}`}>
            <span className="dot" />
            {status === 'saving' ? 'salvo…' : status === 'saved' ? 'salvato' : 'in linea'}
          </span>
        </div>
        <div className="rail-top__actions">
          <button className="knob knob--ghost" onClick={onOpenList}><IconList /> <span className="btn-t">Script</span></button>
          <button className="knob knob--ghost" onClick={onNew}><IconNew /> <span className="btn-t">Nuovo</span></button>
          <button className="knob knob--ghost" onClick={exportJSON} title="Esporta JSON"><IconDownload /></button>
          <button className="knob knob--ghost" onClick={() => fileRef.current?.click()} title="Importa JSON"><IconUpload /></button>
          <button className="knob knob--ghost" onClick={onLock} title="Blocca"><IconLock /></button>
          <input ref={fileRef} type="file" accept="application/json,.json" onChange={importJSON} style={{ display: 'none' }} />
        </div>
      </header>

      {/* Rastrelliera tipi-nodo */}
      <nav className="rack" aria-label="Aggiungi nodo">
        <div className="rack__label">Jack</div>
        {KIND_ORDER.map((k) => (
          <button key={k} className="jackplate" style={{ '--lamp': KINDS[k].lamp }} onClick={() => addNode(k)}>
            <span className="jackplate__lamp" />
            <span className="jackplate__name">{KINDS[k].label}</span>
          </button>
        ))}
        <div className="rack__hint">Tocca per aggiungere.<br />Trascina dai jack per collegare.<br />F = adatta · +/− = zoom</div>
      </nav>

      <div className="rf-holder" ref={rfWrap}>
      <ReactFlow
        nodes={nodes}
        edges={styledEdges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onMoveEnd={(_, vp) => scheduleSave({ data: { nodes, edges, viewport: vp } })}
        minZoom={0.2}
        maxZoom={2.5}
        proOptions={{ hideAttribution: true }}
        fitView
        fitViewOptions={{ padding: 0.2, maxZoom: 1 }}
        deleteKeyCode={['Delete', 'Backspace']}
        panOnScroll
        selectionOnDrag
        panOnDrag={[1, 2]}
      >
        <Background variant={BackgroundVariant.Lines} gap={0} color="transparent" />
        <MiniMap
          pannable zoomable
          nodeColor={(n) => getComputedLamp(n.data?.kind)}
          nodeStrokeColor="#5a4718"
          maskColor="rgba(20,16,10,.6)"
          style={{ width: 168, height: 108 }}
        />
      </ReactFlow>
      </div>

      {/* Strumenti ottone */}
      <div className="instruments">
        <div className="inst-strip">
          <button className="inst-btn" onClick={() => rf.zoomIn({ duration: 150 })} title="Zoom +"><IconPlus /></button>
          <button className="inst-btn" onClick={() => rf.zoomOut({ duration: 150 })} title="Zoom −"><IconMinus /></button>
          <button className="inst-btn" onClick={() => rf.fitView({ duration: 300, padding: 0.2 })} title="Adatta (F)"><IconFit /></button>
        </div>
      </div>

      {isEmpty && (
        <div className="empty">
          <div className="empty__inner">
            <div className="empty__title">Quadro vuoto</div>
            <div className="empty__sub">Innesta il primo jack dalla rastrelliera per aprire la chiamata.</div>
          </div>
        </div>
      )}
    </div>
  )
}

// colore lampada risolto per la minimap (che non eredita le CSS var sui path)
const LAMP_HEX = {
  apertura: '#4f9d67', copy: '#b78f3f', decisione: '#3f7bb0', obiezione: '#e0892a', chiusura: '#c6462e',
}
function getComputedLamp(kind) { return LAMP_HEX[kind] || '#b78f3f' }
