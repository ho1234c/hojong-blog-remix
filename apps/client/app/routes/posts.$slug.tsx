import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import { type MetaFunction, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { Post, links as postLinks } from "~/components/Post";
import { getPost } from "~/utils/getPost.server";

export const links: LinksFunction = () => {
  return [...postLinks()];
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    { title: data?.title },
    { property: "og:type", content: "article" },
    { property: "og:site_name", content: "hojong blog" },
  ];
};

type LoaderData = {
  postHtml: string;
  title: string;
  createdAt: string;
};

export async function loader({ params, request }: LoaderFunctionArgs) {
  const slug = params.slug;
  if (!slug) throw new Response("Not found", { status: 404 });

  const data = await getPost(slug);

  if (data) {
    return json(data);
  }

  throw new Response("Not found", { status: 404 });
}

export default function () {
  const { postHtml, title, createdAt } = useLoaderData<LoaderData>();

  return <Post title={title} html={postHtml} date={createdAt} />;
}
