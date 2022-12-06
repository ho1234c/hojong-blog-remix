import type { LoaderFunction, LinksFunction } from "@remix-run/node";
import type { PostMeta } from "~/types";
import { useLoaderData } from "@remix-run/react";
import { Home, links as homeLinks } from "~/components/Home";
import { getPosts } from "~/utils/getPosts.server";
import { supabase } from "~/utils/supabaseClient.server";

type LoaderData = {
  posts: PostMeta[];
};

export const links: LinksFunction = () => {
  return [...homeLinks()];
};

export const loader: LoaderFunction = async () => {
  return await getPosts();
};

export default function Index() {
  const { posts } = useLoaderData<LoaderData>();

  return <Home posts={posts} />;
}
