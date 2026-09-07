import { useEffect, useRef, useState, useCallback } from 'react'
import { saveFlow } from '../lib/db'

// Autosave con debounce (~800ms). status: 'idle' | 'saving' | 'saved'
export function useFlowPersistence(flowId, delay = 800) {
  const [status, setStatus] = useState('idle')
  const timer = useRef(null)
  const savedTimer = useRef(null)

  const scheduleSave = useCallback((patch) => {
    if (!flowId) return
    setStatus('saving')
    clearTimeout(timer.current)
    timer.current = setTimeout(async () => {
      await saveFlow(flowId, patch)
      setStatus('saved')
      clearTimeout(savedTimer.current)
      savedTimer.current = setTimeout(() => setStatus('idle'), 1600)
    }, delay)
  }, [flowId, delay])

  useEffect(() => () => { clearTimeout(timer.current); clearTimeout(savedTimer.current) }, [])

  return { status, scheduleSave }
}
