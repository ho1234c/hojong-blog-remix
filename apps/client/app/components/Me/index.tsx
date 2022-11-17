import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "./styles.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export const Me: React.FC = () => {
  return <div className="wrapper"></div>;
};
