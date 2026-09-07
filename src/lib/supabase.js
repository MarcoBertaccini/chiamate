import { createClient } from '@supabase/supabase-js'

// Progetto Supabase dedicato "chiamate" (org Berta's Org, eu-west-1).
// La publishable key e' pubblica per design (finisce nel bundle client).
export const SUPABASE_URL = 'https://fuabyzevydmphrhnzsms.supabase.co'
export const SUPABASE_KEY = 'sb_publishable_dGYH3S8pzRtS3aLvMJBL1Q_yjQWOhd5'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: { persistSession: false },
})
