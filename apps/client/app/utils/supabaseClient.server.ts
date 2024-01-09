import { createClient } from "@supabase/supabase-js";
import type { Database } from "../../types/database.types";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY ?? "";

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
