```js
git clone git@github.com:brillout/vite-bug-css-included-in-ssr-build
git checkout vite-3
cd vite-bug-css-included-in-ssr-build/
pnpm install
pnpm run build
```

Same as single line (copy-paste me):

```js
git clone git@github.com:brillout/vite-bug-css-included-in-ssr-build && cd vite-bug-css-included-in-ssr-build/ && git checkout vite-3 && pnpm install && pnpm run build
```

```
$ cd dist/ && grep -r green
dist/client/assets/pages/about/index.page.2cede823.css:h1,p{color:green}
dist/server/assets/about.page.335540e3.js:var index = /* @__PURE__ */ (() => "h1,\np {\n  color: green;\n}\n")();
```
