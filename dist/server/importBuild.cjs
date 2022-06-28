const { setDistEntries } = require('../../node_modules/.pnpm/vite-plugin-ssr@0.4.0-beta.42_vite@3.0.0-beta.5/node_modules/vite-plugin-ssr/dist/cjs/node/plugin/plugins/distEntries/loadDistEntries.js');
setDistEntries({
  pageFiles: () => import('./pageFiles.js'),
  clientManifest: () => require('../client/manifest.json'),
  pluginManifest: () => require('../client/vite-plugin-ssr.json'),
});
