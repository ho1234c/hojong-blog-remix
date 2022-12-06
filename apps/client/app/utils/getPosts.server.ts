import { json } from "@remix-run/node";
import { supabase } from "~/utils/supabaseClient.server";

export async function getPosts() {
  const { data, error } = await supabase
    .from("posts")
    .select("title,created_at,slug")
    .order("created_at", { ascending: false })
    .eq("draft", false);

  if (error) {
    throw new Error(error.message);
  }

  return json({
    posts: data,
  });
}
