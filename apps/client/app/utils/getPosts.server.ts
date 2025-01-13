import { json } from "@remix-run/node";
import { supabase } from "~/utils/supabaseClient.server";

export async function getPosts() {
  const includeDraft = process.env.NODE_ENV === "development";
  const query = supabase
    .from("posts")
    .select("title,created_at,slug")
    .order("created_at", { ascending: false })

  const { data, error } = includeDraft
    ? await query
    : await query.eq("draft", false);

  if (error) {
    throw new Error(error.message);
  }

  return json({
    posts: data,
  });
}
