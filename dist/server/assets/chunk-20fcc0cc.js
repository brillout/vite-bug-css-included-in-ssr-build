if (process.env.NODE_ENV === "production") {
  module.exports = require("./cjs/react-jsx-runtime.production.min.js");
} else {
  module.exports = require("./cjs/react-jsx-runtime.development.js");
}
const jsx = void 0;
const jsxs = void 0;
const Fragment = void 0;
export {
  Fragment as F,
  jsx as a,
  jsxs as j
};
