# Bug reproduction: CSS is inlcuded in SSR builds

CSS is included in SSR builds, which is unexpected: CSS is useless on the server-side. (You can actually see that the CSS included in the SSR build is unused.)

This reproduction uses Vite 2 but it also happens with Vite 3 (see [branch `vite-3`](https://github.com/brillout/vite-bug-css-included-in-ssr-build/tree/vite-3)).

```js
git clone git@github.com:brillout/vite-bug-css-included-in-ssr-build
cd vite-bug-css-included-in-ssr-build/
pnpm install
pnpm run build
```

Same as single line (copy-paste me):

```js
git clone git@github.com:brillout/vite-bug-css-included-in-ssr-build && cd vite-bug-css-included-in-ssr-build/ && pnpm install && pnpm run build
```

Now observe, e.g. with `cd dist/ && grep -r green`,  how the CSS is included in the builds:

```
$ cd dist/ && grep -r green
dist/client/assets/pages/about/index.page.2cede823.css:h1,p{color:green}
dist/server/assets/about.page.335540e3.js:var index = /* @__PURE__ */ (() => "h1,\np {\n  color: green;\n}\n")();
```

That the CSS is included in `dist/client/` is expected.

That the CSS is included in `dist/server/` is unexpected. If you inspect the file that includes it, you'll see that the CSS is unused.
