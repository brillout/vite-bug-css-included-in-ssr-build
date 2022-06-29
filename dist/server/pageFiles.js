"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const exportNames = ["render"];
var __vite_glob_next_3_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames
}, Symbol.toStringTag, { value: "Module" }));
const pageFilesLazy = {};
const pageFilesEager = {};
const pageFilesExportNamesLazy = {};
const pageFilesExportNamesEager = {};
const neverLoaded = {};
const isGeneratedFile = true;
const pageFilesLazyIsomorph1 = {
  "/pages/about/index.page.jsx": () => Promise.resolve().then(function() {
    return require("./assets/about.page.335540e3.js");
  }),
  "/pages/index/index.page.jsx": () => Promise.resolve().then(function() {
    return require("./assets/index.page.21287e93.js");
  })
};
const pageFilesLazyIsomorph = { ...pageFilesLazyIsomorph1 };
pageFilesLazy[".page"] = pageFilesLazyIsomorph;
const pageFilesEagerRoute1 = {};
const pageFilesEagerRoute = { ...pageFilesEagerRoute1 };
pageFilesEager[".page.route"] = pageFilesEagerRoute;
const pageFilesLazyServer1 = {
  "/renderer/_default.page.server.jsx": () => Promise.resolve().then(function() {
    return require("./assets/_default.page.server.96d10528.js");
  })
};
const pageFilesLazyServer = { ...pageFilesLazyServer1 };
pageFilesLazy[".page.server"] = pageFilesLazyServer;
const pageFilesExportNamesEagerClient1 = {
  "/renderer/_default.page.client.jsx": __vite_glob_next_3_0
};
const pageFilesExportNamesEagerClient = { ...pageFilesExportNamesEagerClient1 };
pageFilesExportNamesEager[".page.client"] = pageFilesExportNamesEagerClient;
exports.isGeneratedFile = isGeneratedFile;
exports.neverLoaded = neverLoaded;
exports.pageFilesEager = pageFilesEager;
exports.pageFilesExportNamesEager = pageFilesExportNamesEager;
exports.pageFilesExportNamesLazy = pageFilesExportNamesLazy;
exports.pageFilesLazy = pageFilesLazy;
