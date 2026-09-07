// Tipi di nodo pensati per la chiamata a freddo (mondo "centralino")
export const KINDS = {
  apertura: {
    label: 'Apertura',
    lamp: 'var(--lamp-apertura)',
    placeholder: 'Buongiorno, sono Marco di Zenith Studio…',
    defaultTitle: 'Aggancio',
  },
  copy: {
    label: 'Battuta',
    lamp: 'var(--lamp-copy)',
    placeholder: 'La battuta da dire…',
    defaultTitle: 'Copy',
  },
  decisione: {
    label: 'Decisione',
    lamp: 'var(--lamp-decisione)',
    placeholder: 'Cosa risponde il cliente?',
    defaultTitle: 'Bivio',
  },
  obiezione: {
    label: 'Obiezione',
    lamp: 'var(--lamp-obiezione)',
    placeholder: '"Non mi interessa" → la tua risposta…',
    defaultTitle: 'Obiezione',
  },
  chiusura: {
    label: 'Chiusura',
    lamp: 'var(--lamp-chiusura)',
    placeholder: 'Le fisso un appuntamento per…',
    defaultTitle: 'Chiusura',
  },
}

export const KIND_ORDER = ['apertura', 'copy', 'decisione', 'obiezione', 'chiusura']
