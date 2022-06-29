"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var React = require("react");
var server = require("react-streaming/server");
var vitePluginSsr = require("vite-plugin-ssr");
var jsxRuntime = require("react/jsx-runtime");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var React__default = /* @__PURE__ */ _interopDefaultLegacy(React);
var PageLayout$1 = /* @__PURE__ */ (() => "/* This CSS is common to all pages */\n\nbody {\n  margin: 0;\n  font-family: sans-serif;\n}\n* {\n  box-sizing: border-box;\n}\na {\n  text-decoration: none;\n}\n\n.navitem {\n  padding: 3px;\n}\n")();
function PageLayout({
  children
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(React__default["default"].StrictMode, {
    children: /* @__PURE__ */ jsxRuntime.jsxs(Layout, {
      children: [/* @__PURE__ */ jsxRuntime.jsxs(Sidebar, {
        children: [/* @__PURE__ */ jsxRuntime.jsx("a", {
          className: "navitem",
          href: "/",
          children: "Home"
        }), /* @__PURE__ */ jsxRuntime.jsx("a", {
          className: "navitem",
          href: "/about",
          children: "About"
        })]
      }), /* @__PURE__ */ jsxRuntime.jsx(Content, {
        children
      })]
    })
  });
}
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxRuntime.jsx("div", {
    style: {
      display: "flex",
      maxWidth: 900,
      margin: "auto"
    },
    children
  });
}
function Sidebar({
  children
}) {
  return /* @__PURE__ */ jsxRuntime.jsx("div", {
    style: {
      padding: 20,
      paddingTop: 42,
      flexShrink: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      lineHeight: "1.8em"
    },
    children
  });
}
function Content({
  children
}) {
  return /* @__PURE__ */ jsxRuntime.jsx("div", {
    style: {
      padding: 20,
      paddingBottom: 50,
      borderLeft: "2px solid #eee",
      minHeight: "100vh"
    },
    children
  });
}
const passToClient = ["pageProps"];
async function render(pageContext) {
  const {
    Page,
    pageProps,
    userAgent
  } = pageContext;
  const stream = await server.renderToStream(/* @__PURE__ */ jsxRuntime.jsx(PageLayout, {
    children: /* @__PURE__ */ jsxRuntime.jsx(Page, {
      ...pageProps
    })
  }), {
    userAgent
  });
  return vitePluginSsr.escapeInject`<!DOCTYPE html>
    <html>
      <body>
        <div id="page-view">${stream}</div>
      </body>
    </html>`;
}
exports.passToClient = passToClient;
exports.render = render;
