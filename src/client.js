import { createClient } from '@supabase/supabase-js'
const URL = 'https://hqlyvspjiykwooidmaeb.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhxbHl2c3BqaXlrd29vaWRtYWViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIyMjIwNzEsImV4cCI6MjA3Nzc5ODA3MX0.LL7vo-Y9M0Xw12c3THu_Uwp1bqYWjiLclhiiMaGqqhE'
export const supabase = createClient(URL, API_KEY)
