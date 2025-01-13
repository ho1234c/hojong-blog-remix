import type { FC } from "react";
import stylesUrl from "./styles.css";
import prismStylesTheme from "prismjs/themes/prism-tomorrow.min.css";
import markdownStylesUrl from "./markdown.css";
import type { LinksFunction } from "@remix-run/node";
import { formatDate } from "~/utils/date";

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
  date: string;
}

export const Post: FC<Props> = ({ title, html, date }) => {
  return (
    <div className="wrapper">
      <h2>{title}</h2>
      <div className="date">{formatDate(date)}</div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};
