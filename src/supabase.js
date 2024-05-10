import { createClient } from "@supabase/supabase-js";

const supabaseUrl = BLUPRINT_SUPABASE_URL;
const supabaseKey = process.env.BLUPRINT_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
