import type { MetaFunction, LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Header, { links as HeaderLinks } from "~/components/Header";
import globalStylesUrl from "./styles/global.css";
import layoutStylesUrl from "./styles/layout.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "hojong blog",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: globalStylesUrl },
  { rel: "stylesheet", href: layoutStylesUrl },
  ...HeaderLinks(),
];

export default function App() {
  return (
    <html lang="kr">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header siteTitle={"hojong blog"} />
        <main>
          <Outlet />
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
