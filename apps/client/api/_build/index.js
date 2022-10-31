var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: !0 });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 == "object" || typeof module2 == "function")
    for (let key of __getOwnPropNames(module2))
      !__hasOwnProp.call(target, key) && (copyDefault || key !== "default") && __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  return target;
}, __toESM = (module2, isNodeMode) => __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: !0 } : { value: module2, enumerable: !0 })), module2), __toCommonJS = /* @__PURE__ */ ((cache) => (module2, temp) => cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp))(typeof WeakMap != "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});

// ../../node_modules/@remix-run/dev/dist/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_server = require("react-dom/server"), import_react = require("@remix-run/react"), import_node = require("@remix-run/node"), import_isbot = __toESM(require("isbot")), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let callbackName = (0, import_isbot.default)(request.headers.get("user-agent")) ? "onAllReady" : "onShellReady";
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
      context: remixContext,
      url: request.url
    }), {
      [callbackName]() {
        let body = new import_stream.PassThrough();
        responseHeaders.set("Content-Type", "text/html"), resolve(new import_node.Response(body, {
          status: didError ? 500 : responseStatusCode,
          headers: responseHeaders
        })), pipe(body);
      },
      onShellError(err) {
        reject(err);
      },
      onError(error) {
        didError = !0, console.error(error);
      }
    });
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});

// ../../node_modules/@code-hike/mdx/dist/index.css
var dist_default = "/build/_assets/index-FWPWIFIS.css";

// app/root.tsx
var import_react2 = require("@remix-run/react"), meta = () => ({
  charset: "utf-8",
  title: "hojong blog",
  viewport: "width=device-width,initial-scale=1"
}), links = () => [
  { rel: "stylesheet", href: dist_default }
];
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "kr"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react2.Meta, null), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react2.Outlet, null), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}

// app/routes/posts/$.tsx
var __exports = {};
__export(__exports, {
  default: () => Post,
  loader: () => loader
});
var import_monokai = __toESM(require("shiki/themes/monokai.json")), import_mdx = require("@code-hike/mdx"), import_react3 = require("@remix-run/react"), import_fs = __toESM(require("fs")), import_react4 = require("react"), import_client = require("mdx-bundler/client"), import_path = __toESM(require("path")), import_node2 = require("@remix-run/node");

// app/utils/mdx.server.ts
var import_mdx_bundler = require("mdx-bundler");

// app/routes/posts/$.tsx
var loader = async ({ params, request }) => {
  let slug = params["*"];
  if (!slug)
    throw new Response("Not found", { status: 404 });
  let post = await getPost(slug);
  if (post)
    return (0, import_node2.json)(post);
  throw new Response("Not found", { status: 404 });
};
async function getPost(slug) {
  let source = await import_fs.default.promises.readFile(import_path.default.join(`${__dirname}/../../posts`, slug + ".mdx"), "utf-8");
  return await (0, import_mdx_bundler.bundleMDX)({
    source,
    mdxOptions(options, frontmatter) {
      return options.remarkPlugins = [
        ...options.remarkPlugins ?? [],
        [import_mdx.remarkCodeHike, { theme: import_monokai.default }]
      ], options;
    }
  });
}
function Post() {
  let { code, frontmatter } = (0, import_react3.useLoaderData)(), Component = (0, import_react4.useMemo)(() => (0, import_client.getMDXComponent)(code), [code]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("h1", null, frontmatter.title), /* @__PURE__ */ React.createElement("p", null, frontmatter.description)), /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(Component, null)));
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  getPosts: () => getPosts,
  loader: () => loader2
});
var import_node3 = require("@remix-run/node"), import_react5 = require("@remix-run/react"), import_front_matter = __toESM(require("front-matter")), import_fs2 = __toESM(require("fs")), import_path2 = __toESM(require("path")), import_react6 = require("@remix-run/react");
async function getPosts() {
  let postsPath = await import_fs2.default.promises.readdir(`${__dirname}/../../posts`, {
    withFileTypes: !0
  }), posts = await Promise.all(postsPath.map(async (dirent) => {
    let file = await import_fs2.default.promises.readFile(import_path2.default.join(`${__dirname}/../../posts`, dirent.name)), { attributes } = (0, import_front_matter.default)(file.toString());
    return {
      slug: dirent.name.replace(/\.mdx/, ""),
      title: attributes.title
    };
  }));
  return (0, import_node3.json)({ posts });
}
var loader2 = async () => getPosts();
function Index() {
  let { posts } = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, posts.map((post, idx) => /* @__PURE__ */ React.createElement("div", {
    key: idx
  }, /* @__PURE__ */ React.createElement(import_react6.Link, {
    to: `/posts/${post.slug}`
  }, post.title))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "4201066e", entry: { module: "/build/entry.client-V3RCM22G.js", imports: ["/build/_shared/chunk-5BZWRA72.js", "/build/_shared/chunk-CHECYWC4.js", "/build/_shared/chunk-25LKBTXO.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-37NN2IER.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-DNTCQLXP.js", imports: ["/build/_shared/chunk-OGEZ545I.js", "/build/_shared/chunk-YZXM5PPS.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts/$": { id: "routes/posts/$", parentId: "root", path: "posts/*", index: void 0, caseSensitive: void 0, module: "/build/routes/posts/$-O47GZTAG.js", imports: ["/build/_shared/chunk-OGEZ545I.js", "/build/_shared/chunk-YZXM5PPS.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-4201066E.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/posts/$": {
    id: "routes/posts/$",
    parentId: "root",
    path: "posts/*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
