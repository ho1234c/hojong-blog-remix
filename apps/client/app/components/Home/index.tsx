import type { LinksFunction } from "@remix-run/node";
import type { PostMeta } from "~/types";
import stylesUrl from "./styles.css";
import { Link } from "@remix-run/react";
import { formatDate } from "~/utils/date";

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
        const parsedDate = formatDate(post.created_at);

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
