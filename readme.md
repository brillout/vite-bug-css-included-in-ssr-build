Note:
 - The [client-side build](./dist/client/) has CSS.
 - The [server-side build](./dist/server/) has no CSS.

```bash
vite v3.0.0-beta.5 building for production...
✓ 107 modules transformed.
dist/client/vite-plugin-ssr.json                               0.09 KiB
dist/client/manifest.json                                      2.44 KiB
dist/client/assets/pages/about/index.page.edd0cf6d.js          0.21 KiB / gzip: 0.18 KiB
dist/client/assets/pages/index/index.page.ed0db00a.js          0.44 KiB / gzip: 0.29 KiB
dist/client/assets/entry-client-routing.82ca4710.js            25.23 KiB / gzip: 8.68 KiB
dist/client/assets/entry-server-routing.f1d509a0.js            1.27 KiB / gzip: 0.69 KiB
dist/client/assets/chunk-b0c1fee3.js                           7.16 KiB / gzip: 2.80 KiB
dist/client/assets/chunk-0403354a.js                           17.37 KiB / gzip: 6.28 KiB
dist/client/assets/chunk-b5c2aafb.js                           0.03 KiB / gzip: 0.04 KiB
# CSS here
dist/client/assets/PageLayout.dad88554.css                     0.10 KiB / gzip: 0.11 KiB
# Also here
dist/client/assets/index.page.20d454e1.css                     0.02 KiB / gzip: 0.04 KiB
dist/client/assets/renderer/_default.page.client.85850453.js   133.67 KiB / gzip: 43.06 KiB

# No CSS down here
vite v3.0.0-beta.5 building SSR bundle for production...
✓ 12 modules transformed.
dist/server/package.json                              0.02 KiB
dist/server/importBuild.cjs                           0.38 KiB
dist/server/pageFiles.js                              1.45 KiB
dist/server/importBuild.js                            0.22 KiB
dist/server/assets/about.page.c5f4b403.js             0.39 KiB
dist/server/assets/chunk-20fcc0cc.js                  0.31 KiB
dist/server/assets/index.page.7870f617.js             0.73 KiB
dist/server/assets/_default.page.server.f4a92c52.js   2.08 KiB
```

Now, note:
 - The file [/pages/about/index.page.jsx](./pages/about/index.page.jsx) imports some CSS.
 - This file is isomorphic (executed in the browser as well as on the server-side).

Means: The CSS import of that file is ignored when Vite bundles for the server-side; the CSS is only included in the client-side build.

It's the same thing for dev.

Thus, on a high-level, Fatih's PR makes sense. (I can't say though if the PR's approach to achieve its goal has no breaking side-effects. But, on a high-level, his PR doesn't cause any problems and is a good thing.)
