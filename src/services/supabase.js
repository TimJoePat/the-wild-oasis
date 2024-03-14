import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ssazhquyvvgnsqnzfscv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzYXpocXV5dnZnbnNxbnpmc2N2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAyODYzMjQsImV4cCI6MjAyNTg2MjMyNH0.spcII9VNrTaZw2HPdQ4TX6e2nxJm97HTnK2PydMkIDU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
