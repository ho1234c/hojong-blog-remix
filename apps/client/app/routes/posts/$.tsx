import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { Post, links as postLinks } from "~/components/Post";
import { getPost } from "~/utils/getPost.server";

export const links: LinksFunction = () => {
  return [...postLinks()];
};

type LoaderData = {
  postHtml: string;
  title: string;
  createdAt: string;
};

export const loader: LoaderFunction = async ({ params, request }) => {
  const slug = params["*"];
  if (!slug) throw new Response("Not found", { status: 404 });

  const data = await getPost(slug);

  if (data) {
    return json(data);
  }

  throw new Response("Not found", { status: 404 });
};

export default function PostPage() {
  const { postHtml, title, createdAt } = useLoaderData<LoaderData>();

  return <Post title={title} html={postHtml} />;
}
