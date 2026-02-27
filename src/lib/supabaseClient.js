import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// CHECK THIS LINE: It must start with 'export const'
export const supabase = createClient(supabaseUrl, supabaseAnonKey)