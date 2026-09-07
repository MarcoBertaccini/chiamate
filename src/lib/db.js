// Persistenza flussi. Interfaccia stabile; backend attuale = localStorage.
// In Fase 3 il backend diventa Supabase senza cambiare i chiamanti.

const KEY = 'chiamate.flows.v1'
const uid = () => (crypto.randomUUID ? crypto.randomUUID() : 'f_' + Date.now() + Math.random().toString(16).slice(2))
const EMPTY = { nodes: [], edges: [], viewport: { x: 0, y: 0, zoom: 1 } }

function readAll() {
  try { return JSON.parse(localStorage.getItem(KEY)) || {} } catch { return {} }
}
function writeAll(all) {
  try { localStorage.setItem(KEY, JSON.stringify(all)) } catch (e) { console.warn('persist fallita', e) }
}

export async function listFlows() {
  const all = readAll()
  return Object.values(all)
    .map(({ id, name, updated_at }) => ({ id, name, updated_at }))
    .sort((a, b) => (b.updated_at || '').localeCompare(a.updated_at || ''))
}

export async function loadFlow(id) {
  const all = readAll()
  return all[id] || null
}

export async function createFlow(name = 'Nuovo script') {
  const all = readAll()
  const flow = { id: uid(), name, data: EMPTY, updated_at: new Date().toISOString() }
  all[flow.id] = flow
  writeAll(all)
  return flow
}

export async function saveFlow(id, patch) {
  const all = readAll()
  const cur = all[id]
  if (!cur) return
  all[id] = { ...cur, ...patch, updated_at: new Date().toISOString() }
  writeAll(all)
}

export async function deleteFlow(id) {
  const all = readAll()
  delete all[id]
  writeAll(all)
}
