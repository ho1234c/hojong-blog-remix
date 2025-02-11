import { cssBundleHref } from "@remix-run/css-bundle";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@vercel/remix";
import { Header } from "~/components/Header";

import "./styles/global.css";
import "./styles/layout.css";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  {
    rel: "icon",
    href: "/favicon.png",
    type: "image/png",
  },
];

export default function App() {
  return (
    <html lang="kr">
      <head>
        <meta charSet="utf-8" />
        <meta title="hojong blog" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
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
