import type { LoaderFunction, LinksFunction } from "@remix-run/node";
import type { EnhancedPostMeta } from "~/types";
import { useLoaderData } from "@remix-run/react";
import { Home, links as homeLinks } from "~/components/Home";
import { getPosts } from "~/utils/getPosts.server";

type LoaderData = {
  posts: EnhancedPostMeta[];
};

export const links: LinksFunction = () => {
  return [...homeLinks()];
};

export const loader: LoaderFunction = async () => {
  return getPosts();
};

export default function Index() {
  const { posts } = useLoaderData<LoaderData>();

  return <Home posts={posts} />;
}
