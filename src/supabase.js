import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qrzyfunludqftyhhorhz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFyenlmdW5sdWRxZnR5aGhvcmh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc3Mjg5NzgsImV4cCI6MjAxMzMwNDk3OH0.OAagQSpem8r1rti12lDfsvMPtm7g4ueof3A57rBC28Q";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
