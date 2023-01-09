import type { FC } from "react";
import stylesUrl from "./styles.css";
import prismStyles from "prismjs/themes/prism.min.css";
import prismStylesTheme from "prismjs/themes/prism-tomorrow.min.css";
import markdownStylesUrl from "./markdown.css";
import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: prismStylesTheme },
    { rel: "stylesheet", href: stylesUrl },
    { rel: "stylesheet", href: markdownStylesUrl },
  ];
};

export interface Props {
  title: string;
  html: string;
}

export const Post: FC<Props> = ({ title, html }) => {
  return (
    <div className="wrapper">
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};
