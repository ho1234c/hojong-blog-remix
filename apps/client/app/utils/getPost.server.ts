import { supabase } from "~/utils/supabaseClient.server";
import { marked } from "marked";
import loadLanguages from "prismjs/components/";
import prism from "prismjs";

loadLanguages(["bash", "css", "ts", "js", "html", "jsx", "tsx"]);

const renderer = new marked.Renderer();
renderer.code = function (code, lang, escaped) {
  if (!lang) {
    return `<pre><code>${code}</code></pre>`;
  }

  code = prism.highlight(code, prism.languages[lang], lang);

  const langClass = "language-" + lang;
  return `<pre class="${langClass}"><code class="${langClass}">${code}</code></pre>`;
};

export async function getPost(slug: string) {
  marked.setOptions({
    renderer,
    highlight: function (code, lang) {
      try {
        return prism.highlight(code, prism.languages[lang], lang);
      } catch {
        return code;
      }
    },
  });
  const { data: rawPost } = await supabase
    .from("posts")
    .select("title,created_at,content,slug")
    .eq("slug", slug)
    .single();

  const postHtml = marked.parse(rawPost?.content);
  const title = rawPost?.title;
  const createdAt = rawPost?.created_at;

  return { title, postHtml, createdAt };
}
