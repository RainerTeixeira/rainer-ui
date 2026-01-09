"use client"
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var PageHeader_exports = {};
__export(PageHeader_exports, {
  PageHeader: () => PageHeader
});
module.exports = __toCommonJS(PageHeader_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_utils = require("../../lib/utils");
function PageHeader({ title, description, children }) {
  return (
    /**
     * Container principal do header
     *
     * Utiliza SECTION_CLASSES.container para padding e layout responsivos
     * - relative z-10: fica acima de backgrounds e partículas
     */
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `${import_utils.SECTION_CLASSES.container} relative z-10`, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "text-center mb-12", children: [
      children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "relative mb-8", children }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { className: "text-3xl md:text-4xl font-bold mb-4 text-foreground dark:text-cyan-200 dark:font-mono dark:tracking-wider", children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-24 h-1 bg-linear-to-r from-primary to-primary dark:from-cyan-400 dark:to-purple-400 mx-auto mb-6" }),
      description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-muted-foreground dark:text-gray-300 text-lg max-w-2xl mx-auto dark:font-mono px-2", children: description })
    ] }) })
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PageHeader
});
//# sourceMappingURL=PageHeader.js.map