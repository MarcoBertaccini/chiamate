import { useState, useRef, useEffect } from 'react'
import { Handle, Position, useReactFlow } from '@xyflow/react'
import { KINDS } from '../../lib/kinds'

export default function ScriptNode({ id, data, selected }) {
  const { updateNodeData } = useReactFlow()
  const kind = KINDS[data.kind] || KINDS.copy
  const [editing, setEditing] = useState(false)
  const [draftTitle, setDraftTitle] = useState(data.title || '')
  const [draftCopy, setDraftCopy] = useState(data.copy || '')
  const copyRef = useRef(null)

  useEffect(() => {
    if (editing && copyRef.current) {
      copyRef.current.style.height = 'auto'
      copyRef.current.style.height = copyRef.current.scrollHeight + 'px'
      copyRef.current.focus()
    }
  }, [editing])

  const open = () => {
    setDraftTitle(data.title || '')
    setDraftCopy(data.copy || '')
    setEditing(true)
  }
  const commit = () => {
    updateNodeData(id, { title: draftTitle.trim(), copy: draftCopy.trim() })
    setEditing(false)
  }
  const cancel = () => setEditing(false)

  const isDecision = data.kind === 'decisione'

  return (
    <div
      className={`plate ${isDecision ? 'plate--decisione' : ''}`}
      style={{ '--lamp': kind.lamp }}
      onDoubleClick={(e) => { e.stopPropagation(); if (!editing) open() }}
    >
      <Handle type="target" position={Position.Top} id="t" />

      <div className="plate__header">
        <span className="plate__lamp" />
        <span className="plate__type">{kind.label}</span>
        {data.no != null && <span className="plate__no">L{String(data.no).padStart(2, '0')}</span>}
      </div>

      <div className="plate__body">
        {editing ? (
          <>
            <input
              className="plate__title-edit nodrag"
              value={draftTitle}
              placeholder={kind.defaultTitle}
              onChange={(e) => setDraftTitle(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Escape') cancel() }}
            />
            <textarea
              ref={copyRef}
              className="plate__edit nodrag"
              value={draftCopy}
              placeholder={kind.placeholder}
              onChange={(e) => {
                setDraftCopy(e.target.value)
                e.target.style.height = 'auto'
                e.target.style.height = e.target.scrollHeight + 'px'
              }}
              onKeyDown={(e) => {
                if (e.key === 'Escape') cancel()
                if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) commit()
              }}
              onBlur={commit}
              rows={3}
            />
          </>
        ) : (
          <>
            {data.title && <div className="plate__title">{data.title}</div>}
            <div className={`plate__copy ${data.copy ? 'has-text' : ''}`}>{data.copy || ''}</div>
          </>
        )}
      </div>

      {isDecision ? (
        <>
          <Handle type="source" position={Position.Left} id="l" />
          <Handle type="source" position={Position.Bottom} id="b" />
          <Handle type="source" position={Position.Right} id="r" />
        </>
      ) : (
        <Handle type="source" position={Position.Bottom} id="b" />
      )}
    </div>
  )
}
