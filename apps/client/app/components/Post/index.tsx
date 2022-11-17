import type { PropsWithChildren } from "react";
import stylesUrl from "./styles.css";
import markdownStylesUrl from "./markdown.css";
import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: stylesUrl },
    { rel: "stylesheet", href: markdownStylesUrl },
  ];
};

export interface Props extends PropsWithChildren {
  title: string;
}

export const Post: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="wrapper">
      <h2>{title}</h2>
      {children}
    </div>
  );
};
