import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://hotsyvamnptnayhthhdq.supabase.co";
const supabaseKey = process.env.REACT_APP_API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

console.log(supabaseKey);
console.log(supabaseUrl);
export default supabase;
