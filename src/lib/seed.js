// Flusso dimostrativo di una chiamata a freddo (copy PLACEHOLDER, da sostituire coi tuoi reali)
export function seedFlow() {
  const N = (id, kind, no, x, y, title, copy) => ({
    id, type: 'script', position: { x, y }, data: { kind, no, title, copy },
  })
  const E = (id, source, target, sourceHandle, label) => ({
    id, source, target, sourceHandle, targetHandle: 't', type: 'cord', data: { label },
  })

  const nodes = [
    N('s1', 'apertura', 1, 40, 0, 'Aggancio',
      'Buongiorno, sono Marco di Zenith Studio. La chiamo per il sito della sua attività — mi dà trenta secondi?'),
    N('s2', 'decisione', 2, 70, 210, 'Ha tempo?', 'Come risponde?'),
    N('s3', 'obiezione', 3, -230, 400, '«Non mi interessa»',
      'Capisco, me lo dicono spesso — poi però quando vedono quanti contatti perdono cambiano idea. Le rubo solo un dato.'),
    N('s4', 'copy', 4, 330, 400, 'Gancio valore',
      'Le preparo un check gratuito del sito: in due minuti vede dove sta perdendo clienti.'),
    N('s5', 'chiusura', 5, 120, 610, 'Appuntamento',
      'Le va bene giovedì alle 15 per guardarlo insieme, senza impegno?'),
  ]

  const edges = [
    E('e1', 's1', 's2', 'b', ''),
    E('e2', 's2', 's3', 'l', 'freddo'),
    E('e3', 's2', 's4', 'r', 'curioso'),
    E('e4', 's3', 's4', 'b', 'riaggancio'),
    E('e5', 's4', 's5', 'b', 'interessato'),
  ]

  return { nodes, edges, viewport: { x: 380, y: 70, zoom: 0.85 } }
}
