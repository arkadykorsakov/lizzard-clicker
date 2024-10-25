import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://qmzgaqyenzjpifhlvifr.supabase.co'
const SUPABASE_API_KEY = import.meta.env.VITE_SUPABASE_KEY

const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY)
export default supabase