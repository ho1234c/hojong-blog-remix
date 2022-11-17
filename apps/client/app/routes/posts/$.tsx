import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { json } from "@remix-run/node";
import { Post, links as postLinks } from "~/components/Post";
import type { PostMeta } from "~/types";
import { getPost } from "~/utils/getPost.server";

export const links: LinksFunction = () => {
  return [...postLinks()];
};

type LoaderData = {
  frontmatter: PostMeta;
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

export default function PostPage() {
  const { code, frontmatter } = useLoaderData<LoaderData>();
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <Post title={frontmatter.title}>
      <Component />
    </Post>
  );
}
