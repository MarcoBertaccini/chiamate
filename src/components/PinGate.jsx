import { useState, useEffect, useCallback } from 'react'
import { ZenithMark, IconBackspace } from './icons'

const PIN = '1234' // TODO: personalizzabile dopo il deploy

export default function PinGate({ onUnlock }) {
  const [pin, setPin] = useState('')
  const [err, setErr] = useState(false)

  const submit = useCallback((value) => {
    if (value === PIN) {
      try { localStorage.setItem('chiamate.unlocked', '1') } catch { /* private mode */ }
      onUnlock()
    } else {
      setErr(true)
      setTimeout(() => { setErr(false); setPin('') }, 500)
    }
  }, [onUnlock])

  const push = useCallback((d) => {
    setErr(false)
    setPin((p) => {
      if (p.length >= 4) return p
      const next = p + d
      if (next.length === 4) setTimeout(() => submit(next), 120)
      return next
    })
  }, [submit])

  const back = useCallback(() => { setErr(false); setPin((p) => p.slice(0, -1)) }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key >= '0' && e.key <= '9') push(e.key)
      else if (e.key === 'Backspace') back()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [push, back])

  return (
    <div className="gate">
      <div className="gate__panel">
        <ZenithMark className="gate__mark" />
        <div className="gate__studio">Zenith Studio</div>
        <div className="gate__title">Centralino</div>
        <div className="gate__sub">Inserisci il PIN per collegarti alla linea</div>

        <div className="gate__pins">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className={`gate__pin ${pin[i] ? 'filled' : ''} ${err ? 'err' : ''}`}>
              {pin[i] ? '•' : ''}
            </div>
          ))}
        </div>
        <div className={`gate__msg ${err ? 'err' : ''}`}>{err ? 'PIN errato — riprova' : ' '}</div>

        <div className="keypad">
          {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((d) => (
            <button key={d} className="keypad__key" onClick={() => push(d)}>{d}</button>
          ))}
          <span />
          <button className="keypad__key" onClick={() => push('0')}>0</button>
          <button className="keypad__key keypad__key--fn" onClick={back} aria-label="Cancella"><IconBackspace /></button>
        </div>
      </div>
    </div>
  )
}
