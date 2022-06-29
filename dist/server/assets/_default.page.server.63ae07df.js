import React from "react";
import { renderToStream } from "react-streaming/server";
import { escapeInject } from "vite-plugin-ssr";
import { a as jsx, j as jsxs } from "./chunk-2839ff2c.js";
import "react/jsx-runtime";
const PageLayout$1 = /* @__PURE__ */ (() => "/* This CSS is common to all pages */\n\nbody {\n  margin: 0;\n  font-family: sans-serif;\n}\n* {\n  box-sizing: border-box;\n}\na {\n  text-decoration: none;\n}\n\n.navitem {\n  padding: 3px;\n}\n")();
function PageLayout({
  children
}) {
  return /* @__PURE__ */ jsx(React.StrictMode, {
    children: /* @__PURE__ */ jsxs(Layout, {
      children: [/* @__PURE__ */ jsxs(Sidebar, {
        children: [/* @__PURE__ */ jsx("a", {
          className: "navitem",
          href: "/",
          children: "Home"
        }), /* @__PURE__ */ jsx("a", {
          className: "navitem",
          href: "/about",
          children: "About"
        })]
      }), /* @__PURE__ */ jsx(Content, {
        children
      })]
    })
  });
}
function Layout({
  children
}) {
  return /* @__PURE__ */ jsx("div", {
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
  return /* @__PURE__ */ jsx("div", {
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
  return /* @__PURE__ */ jsx("div", {
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
  const stream = await renderToStream(/* @__PURE__ */ jsx(PageLayout, {
    children: /* @__PURE__ */ jsx(Page, {
      ...pageProps
    })
  }), {
    userAgent
  });
  return escapeInject`<!DOCTYPE html>
    <html>
      <body>
        <div id="page-view">${stream}</div>
      </body>
    </html>`;
}
export {
  passToClient,
  render
};
