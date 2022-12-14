import type { LinksFunction } from "@remix-run/node";
import type { PostMeta } from "~/types";
import stylesUrl from "./styles.css";
import dayjs from "dayjs";
import { Link } from "@remix-run/react";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};
export interface Props {
  posts: PostMeta[];
}

export const Home: React.FC<Props> = ({ posts }) => {
  return (
    <section className="post_list">
      {posts.map((post, idx) => {
        const parsedDate = dayjs(post.created_at).format("MMM DD. YYYY");

        return (
          <Link to={`/posts/${post.slug}`} className="post" key={idx}>
            <div className="title">{post.title}</div>
            <div className="date">{parsedDate}</div>
          </Link>
        );
      })}
    </section>
  );
};
