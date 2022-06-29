"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var React = require("react");
var jsxRuntime = require("react/jsx-runtime");
function Counter() {
  const [count, setCount] = React.useState(0);
  return /* @__PURE__ */ jsxRuntime.jsxs("button", {
    type: "button",
    onClick: () => setCount((count2) => count2 + 1),
    children: ["Counter ", count]
  });
}
function Page() {
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [/* @__PURE__ */ jsxRuntime.jsx("h1", {
      children: "Welcome"
    }), "This page is:", /* @__PURE__ */ jsxRuntime.jsxs("ul", {
      children: [/* @__PURE__ */ jsxRuntime.jsx("li", {
        children: "Rendered to HTML."
      }), /* @__PURE__ */ jsxRuntime.jsxs("li", {
        children: ["Interactive. ", /* @__PURE__ */ jsxRuntime.jsx(Counter, {})]
      })]
    })]
  });
}
exports.Page = Page;
