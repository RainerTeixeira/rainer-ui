"use client"
import { jsx, jsxs } from "react/jsx-runtime";
import { SECTION_CLASSES } from "../../lib/utils";
function PageHeader({ title, description, children }) {
  return (
    /**
     * Container principal do header
     *
     * Utiliza SECTION_CLASSES.container para padding e layout responsivos
     * - relative z-10: fica acima de backgrounds e partículas
     */
    /* @__PURE__ */ jsx("div", { className: `${SECTION_CLASSES.container} relative z-10`, children: /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      children && /* @__PURE__ */ jsx("div", { className: "relative mb-8", children }),
      /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-4xl font-bold mb-4 text-foreground dark:text-cyan-200 dark:font-mono dark:tracking-wider", children: title }),
      /* @__PURE__ */ jsx("div", { className: "w-24 h-1 bg-linear-to-r from-primary to-primary dark:from-cyan-400 dark:to-purple-400 mx-auto mb-6" }),
      description && /* @__PURE__ */ jsx("p", { className: "text-muted-foreground dark:text-gray-300 text-lg max-w-2xl mx-auto dark:font-mono px-2", children: description })
    ] }) })
  );
}
export {
  PageHeader
};
//# sourceMappingURL=PageHeader.mjs.map