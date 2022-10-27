import { LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import parseFrontMatter from "front-matter";
import fs from "fs";
import path from "path";
import { Post } from "~/types";
import { Link } from "@remix-run/react";

type LoaderData = {
  posts: Post[];
};

export async function getPosts() {
  const postsPath = await fs.promises.readdir(`${__dirname}/../../posts`, {
    withFileTypes: true,
  });

  const posts = await Promise.all(
    postsPath.map(async (dirent) => {
      const file = await fs.promises.readFile(
        path.join(`${__dirname}/../../posts`, dirent.name)
      );

      const { attributes } = parseFrontMatter<{
        title: string;
        description: string;
        date: string;
      }>(file.toString());

      return {
        slug: dirent.name.replace(/\.mdx/, ""),
        title: attributes.title,
      };
    })
  );

  return json({ posts });
}

export const loader: LoaderFunction = async () => {
  return getPosts();
};

export default function Index() {
  const { posts } = useLoaderData<LoaderData>();

  return (
    <div>
      {posts.map((post, idx) => {
        return (
          <div key={idx}>
            <Link to={`/posts/${post.slug}`}>{post.title}</Link>
          </div>
        );
      })}
    </div>
  );
}
