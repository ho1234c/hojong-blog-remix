import type { PostMeta } from "~/types";
import { json } from "@remix-run/node";
import parseFrontMatter from "front-matter";
import fs from "fs";
import path from "path";
import dayjs from "dayjs";

const POSTS_PATH = path.join(process.cwd(), "app", "posts");

export async function getPosts() {
  const testPath = await fs.promises.readdir(path.join(process.cwd(), "apps"), {
    withFileTypes: true,
  });
  console.log({ testPath });

  const postsPath = await fs.promises.readdir(POSTS_PATH, {
    withFileTypes: true,
  });

  const posts = await Promise.all(
    postsPath.map(async (post) => {
      const file = await fs.promises.readFile(path.join(POSTS_PATH, post.name));

      const { attributes } = parseFrontMatter<PostMeta>(file.toString());

      return {
        ...attributes,
        slug: post.name.replace(/\.mdx/, ""),
      };
    })
  );

  return json({
    posts: posts.filter((p) => !checkIsDraft(p)).sort(compareDate),
  });
}

function compareDate(a: PostMeta, b: PostMeta) {
  return dayjs(b.date).valueOf() - dayjs(a.date).valueOf();
}

function checkIsDraft(post: PostMeta) {
  return !!post.draft;
}
