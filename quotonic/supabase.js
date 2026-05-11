import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://yyioyfmoikhngefpazda.supabase.co'
const supabaseKey = 'sb_publishable_lyk9c2qbT9Yr2YvvhsF6_A_4c8vKr9J'

export const supabase = createClient(supabaseUrl, supabaseKey)