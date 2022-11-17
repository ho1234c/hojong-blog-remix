import theme from "shiki/themes/monokai.json";
import { remarkCodeHike } from "@code-hike/mdx";
import fs from "fs";
import path from "path";
import { bundleMDX } from "~/utils/mdx.server";

const POSTS_PATH = path.join(process.cwd(), "app", "posts");

export async function getPost(slug: string) {
  const source = await fs.promises.readFile(
    path.join(POSTS_PATH, slug + ".mdx"),
    "utf-8"
  );

  const post = await bundleMDX({
    source,
    mdxOptions(options, frontmatter) {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        [remarkCodeHike, { theme }],
      ];

      return options;
    },
  });

  return post;
}
