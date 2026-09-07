import { useState } from 'react'
import { BaseEdge, EdgeLabelRenderer, getBezierPath, useReactFlow } from '@xyflow/react'

export default function CordEdge({ id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, data, markerEnd, selected }) {
  const { setEdges } = useReactFlow()
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX, sourceY, sourcePosition, targetX, targetY, targetPosition,
    curvature: 0.35,
  })
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(data?.label || '')

  const commit = () => {
    setEdges((eds) => eds.map((e) => (e.id === id ? { ...e, data: { ...e.data, label: draft.trim() } } : e)))
    setEditing(false)
  }

  const label = data?.label || ''

  return (
    <>
      {/* strato glow (solo se linea impegnata, via className is-live sul gruppo edge) */}
      <path className="cord-glow" d={edgePath} fill="none" />
      <path className="cord-base" d={edgePath} fill="none" markerEnd={markerEnd} />
      <path className="cord-braid" d={edgePath} fill="none" />
      {/* path invisibile spesso per il click */}
      <BaseEdge id={id} path={edgePath} style={{ stroke: 'transparent', strokeWidth: 18 }} />

      <EdgeLabelRenderer>
        <div
          className="nodrag nopan"
          style={{
            position: 'absolute',
            transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
            pointerEvents: 'all',
          }}
          onDoubleClick={(e) => { e.stopPropagation(); setDraft(label); setEditing(true) }}
        >
          {editing ? (
            <input
              className="cord-tag-input"
              autoFocus
              value={draft}
              placeholder="risposta"
              onChange={(e) => setDraft(e.target.value)}
              onBlur={commit}
              onKeyDown={(e) => { if (e.key === 'Enter') commit(); if (e.key === 'Escape') setEditing(false) }}
            />
          ) : (
            (label || selected) && (
              <span className={`cord-tag ${label ? '' : 'empty'}`} title="Doppio-click per l'etichetta">
                {label || '—'}
              </span>
            )
          )}
        </div>
      </EdgeLabelRenderer>
    </>
  )
}
