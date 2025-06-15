import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://rpiwgwbtrzexxhyglods.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwaXdnd2J0cnpleHhoeWdsb2RzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5ODY1NzgsImV4cCI6MjA2NTU2MjU3OH0.guRyY-fEiXYfSefePhZU6WdSeOpdTU40ZtajQNWgHK0'
);
