import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://rduvfdwubraehqqwiupe.supabase.co";
const SUPABASE_KEY = "sb_publishable_Qq4GuY7BqdnKgE9L1nP6Ng_Ha24s73C";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
