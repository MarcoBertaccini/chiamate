// Persistenza flussi su Supabase (tabella public.flows).
// Interfaccia stabile: listFlows / loadFlow / createFlow / saveFlow / deleteFlow.
import { supabase } from './supabase'

const EMPTY = { nodes: [], edges: [], viewport: { x: 0, y: 0, zoom: 1 } }

export async function listFlows() {
  const { data, error } = await supabase
    .from('flows')
    .select('id, name, updated_at')
    .order('updated_at', { ascending: false })
  if (error) { console.warn('listFlows', error.message); return [] }
  return data || []
}

export async function loadFlow(id) {
  const { data, error } = await supabase
    .from('flows')
    .select('id, name, data')
    .eq('id', id)
    .single()
  if (error) { console.warn('loadFlow', error.message); return null }
  return data
}

export async function createFlow(name = 'Nuovo script') {
  const { data, error } = await supabase
    .from('flows')
    .insert({ name, data: EMPTY })
    .select('id, name, data')
    .single()
  if (error) { console.warn('createFlow', error.message); return null }
  return data
}

export async function saveFlow(id, patch) {
  const row = { ...patch, updated_at: new Date().toISOString() }
  const { error } = await supabase.from('flows').update(row).eq('id', id)
  if (error) console.warn('saveFlow', error.message)
}

export async function deleteFlow(id) {
  const { error } = await supabase.from('flows').delete().eq('id', id)
  if (error) console.warn('deleteFlow', error.message)
}
