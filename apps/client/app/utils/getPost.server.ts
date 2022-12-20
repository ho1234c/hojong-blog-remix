import theme from "shiki/themes/monokai.json";
import { remarkCodeHike } from "@code-hike/mdx";
import { bundleMDX } from "~/utils/mdx.server";
import { supabase } from "~/utils/supabaseClient.server";

export async function getPost(slug: string) {
  let { data: rawPost } = await supabase
    .from("posts")
    .select("title,created_at,content,slug")
    .eq("slug", slug)
    .single();

  const post = await bundleMDX({
    source: rawPost?.content,
    mdxOptions(options, frontmatter) {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        // [remarkCodeHike, { theme }],
      ];

      return options;
    },
  });

  return post;
}
