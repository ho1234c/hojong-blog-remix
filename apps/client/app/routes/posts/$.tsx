import theme from "shiki/themes/monokai.json";
import { remarkCodeHike } from "@code-hike/mdx";
import { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import fs from "fs";
import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import path from "path";
import { json } from "@remix-run/node";
import { bundleMDX } from "~/utils/mdx.server";

type LoaderData = {
  frontmatter: any;
  code: string;
};

export const loader: LoaderFunction = async ({ params, request }) => {
  const slug = params["*"];
  if (!slug) throw new Response("Not found", { status: 404 });

  const post = await getPost(slug);

  if (post) {
    return json(post);
  }

  throw new Response("Not found", { status: 404 });
};

async function getPost(slug: string) {
  const source = await fs.promises.readFile(
    path.join(`${__dirname}/../../posts`, slug + ".mdx"),
    "utf-8"
  );

  const post = await bundleMDX({
    source,
    mdxOptions(options, frontmatter) {
      // this is the recommended way to add custom remark/rehype plugins:
      // The syntax might look weird, but it protects you in case we add/remove
      // plugins in the future.
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        [remarkCodeHike, { theme }],
      ];
      //   options.rehypePlugins = [
      //     ...(options.rehypePlugins ?? []),
      //     myRehypePlugin,
      //   ];

      return options;
    },
  });

  return post;
}

export default function Post() {
  const { code, frontmatter } = useLoaderData<LoaderData>();
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
      <header>
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.description}</p>
      </header>
      <main>
        <Component />
      </main>
    </>
  );
}
