import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const key = import.meta.env.VITE_SUPABASE_ANON_KEY

// If env vars aren't set yet, the app still runs using mock data (see src/data/mockData.js)
export const supabaseEnabled = Boolean(url && key)

export const supabase = supabaseEnabled ? createClient(url, key) : null
