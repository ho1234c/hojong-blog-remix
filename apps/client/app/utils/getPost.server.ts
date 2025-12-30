import { supabase } from "~/utils/supabaseClient.server";
import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import loadLanguages from "prismjs/components/";
import prism from "prismjs";

loadLanguages(["bash", "css", "ts", "js", "html", "jsx", "tsx"]);

const marked = new Marked(
  markedHighlight({
    highlight: function (code, lang) {
      try {
        return prism.highlight(code, prism.languages[lang], lang);
      } catch {
        return code;
      }
    },
  })
);

const renderer = new marked.Renderer();
renderer.code = function (code, lang, escaped) {
  if (!lang) {
    return `<pre><code>${code}</code></pre>`;
  }

  const langClass = "language-" + lang;
  return `<pre class="${langClass}"><code class="${langClass}">${code}</code></pre>`;
};

export async function getPost(slug: string) {
  marked.setOptions({
    renderer,
  });

  const { data: rawPost } = await supabase
    .from("posts")
    .select("title,created_at,content,slug,og_image")
    .eq("slug", slug)
    .single();

  const postHtml = marked.parse(rawPost?.content ?? "");
  const title = rawPost?.title;
  const createdAt = rawPost?.created_at;
  const ogImage = rawPost?.og_image;

  return { title, postHtml, createdAt, ogImage };
}
