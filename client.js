import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// Initialize Supabase client
const supabaseUrl = 'https://vwoijfuonndlllrammir.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3b2lqZnVvbm5kbGxscmFtbWlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMwODY1MjMsImV4cCI6MjA0ODY2MjUyM30.1BuRaaoP57Ou0XNR3BbwuKrOxvTdpWJ9aRs6otIhTKA';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;