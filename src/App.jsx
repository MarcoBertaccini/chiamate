import { useState, useEffect, useCallback, useRef } from 'react'
import { ReactFlowProvider } from '@xyflow/react'
import Editor from './components/Editor'
import PinGate from './components/PinGate'
import { IconClose, IconTrash, IconNew } from './components/icons'
import { listFlows, loadFlow, createFlow, deleteFlow, saveFlow } from './lib/db'
import { seedFlow } from './lib/seed'

export default function App() {
  const [unlocked, setUnlocked] = useState(() => {
    try { return localStorage.getItem('chiamate.unlocked') === '1' } catch { return false }
  })
  const [flows, setFlows] = useState([])
  const [current, setCurrent] = useState(null) // {id,name,data}
  const [sheet, setSheet] = useState(false)
  const [toastMsg, setToastMsg] = useState('')
  const toastTimer = useRef(null)

  const toast = useCallback((m) => {
    setToastMsg(m); clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setToastMsg(''), 2200)
  }, [])

  const refreshList = useCallback(async () => setFlows(await listFlows()), [])

  // Boot: dopo lo sblocco, carica (o semina) il primo flusso — una sola volta
  const booted = useRef(false)
  useEffect(() => {
    if (!unlocked || current || booted.current) return
    booted.current = true
    ;(async () => {
      const list = await listFlows()
      if (list.length === 0) {
        const f = await createFlow('Chiamata a freddo · demo')
        await saveFlow(f.id, { data: seedFlow() })
        setCurrent(await loadFlow(f.id))
      } else {
        setCurrent(await loadFlow(list[0].id))
      }
      await refreshList()
    })()
  }, [unlocked, current, refreshList])

  const openFlow = useCallback(async (id) => {
    setCurrent(await loadFlow(id)); setSheet(false)
  }, [])

  const newFlow = useCallback(async () => {
    const f = await createFlow('Nuovo script')
    setCurrent(await loadFlow(f.id))
    await refreshList()
    toast('Nuovo script creato')
  }, [refreshList, toast])

  const removeFlow = useCallback(async (id) => {
    await deleteFlow(id)
    const list = await listFlows()
    setFlows(list)
    if (current?.id === id) {
      if (list.length) setCurrent(await loadFlow(list[0].id))
      else { const f = await createFlow('Nuovo script'); setCurrent(await loadFlow(f.id)); await refreshList() }
    }
    toast('Script eliminato')
  }, [current, refreshList, toast])

  const rename = useCallback((name) => {
    setCurrent((c) => (c ? { ...c, name } : c))
    if (current?.id) saveFlow(current.id, { name })
  }, [current])

  const lock = useCallback(() => {
    try { localStorage.removeItem('chiamate.unlocked') } catch { /* ignore */ }
    setUnlocked(false); setCurrent(null)
  }, [])

  if (!unlocked) return <PinGate onUnlock={() => setUnlocked(true)} />
  if (!current) return <div className="panel-ground" />

  return (
    <ReactFlowProvider>
      <Editor
        key={current.id}
        flow={current}
        onRename={rename}
        onNew={newFlow}
        onOpenList={async () => { await refreshList(); setSheet(true) }}
        onLock={lock}
        toast={toast}
      />

      {sheet && (
        <div className="sheet-backdrop" onClick={() => setSheet(false)}>
          <div className="sheet" onClick={(e) => e.stopPropagation()}>
            <div className="sheet__head">
              <span className="sheet__title">I tuoi script</span>
              <button className="knob knob--ghost" onClick={() => { setSheet(false); newFlow() }}><IconNew /> Nuovo</button>
              <button className="flow-row__del" onClick={() => setSheet(false)} aria-label="Chiudi"><IconClose /></button>
            </div>
            <div className="sheet__list">
              {flows.map((f) => (
                <div key={f.id} className={`flow-row ${f.id === current.id ? 'active' : ''}`} onClick={() => openFlow(f.id)}>
                  <span className="flow-row__name">{f.name}</span>
                  <span className="flow-row__meta">{fmt(f.updated_at)}</span>
                  <button className="flow-row__del" onClick={(e) => { e.stopPropagation(); removeFlow(f.id) }} aria-label="Elimina"><IconTrash /></button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {toastMsg && <div className="toast">{toastMsg}</div>}
    </ReactFlowProvider>
  )
}

function fmt(iso) {
  if (!iso) return ''
  const d = new Date(iso)
  return d.toLocaleDateString('it-IT', { day: '2-digit', month: 'short' }) + ' ' + d.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' })
}
