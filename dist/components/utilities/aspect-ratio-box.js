"use client"
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var aspect_ratio_box_exports = {};
__export(aspect_ratio_box_exports, {
  ASPECT_RATIOS: () => ASPECT_RATIOS,
  AspectRatioBox: () => AspectRatioBox,
  AspectRatioIframe: () => AspectRatioIframe,
  AspectRatioImage: () => AspectRatioImage,
  AspectRatioVideo: () => AspectRatioVideo
});
module.exports = __toCommonJS(aspect_ratio_box_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"));
var import_class_variance_authority = require("class-variance-authority");
var import_utils = require("../../lib/utils");
const ASPECT_RATIOS = {
  square: "1/1",
  video: "16/9",
  widescreen: "21/9",
  cinema: "2.39/1",
  portrait: "3/4",
  golden: "1.618/1",
  post: "4/5",
  story: "9/16"
};
const aspectRatioBoxVariants = (0, import_class_variance_authority.cva)(
  "relative w-full overflow-hidden",
  {
    variants: {
      variant: {
        default: "",
        bordered: "border border-border rounded-md",
        rounded: "rounded-lg",
        card: "border border-border rounded-lg shadow-sm",
        glass: "glass rounded-lg",
        neon: "neon-border rounded-lg"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const AspectRatioBox = React.forwardRef(
  ({
    className,
    variant = "default",
    ratio,
    children,
    objectFit = "cover",
    ...props
  }, ref) => {
    const resolvedRatio = React.useMemo(() => {
      if (typeof ratio === "string" && ratio in ASPECT_RATIOS) {
        return ASPECT_RATIOS[ratio];
      }
      return ratio;
    }, [ratio]);
    const paddingBottom = React.useMemo(() => {
      const [width, height] = resolvedRatio.split("/").map(Number);
      return `${height / width * 100}%`;
    }, [resolvedRatio]);
    const objectFitClasses = {
      cover: "absolute inset-0 w-full h-full object-cover",
      contain: "absolute inset-0 w-full h-full object-contain",
      fill: "absolute inset-0 w-full h-full"
    };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        ref,
        className: (0, import_utils.cn)(aspectRatioBoxVariants({ variant }), className),
        style: { paddingBottom },
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0", children: React.isValidElement(children) ? React.cloneElement(children, {
          className: (0, import_utils.cn)(
            objectFitClasses[objectFit],
            children.props.className
          )
        }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: (0, import_utils.cn)(objectFitClasses[objectFit]), children }) })
      }
    );
  }
);
AspectRatioBox.displayName = "AspectRatioBox";
const AspectRatioImage = React.forwardRef(
  ({
    className,
    ratio = "square",
    variant = "default",
    src,
    alt,
    ...props
  }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AspectRatioBox, { ratio, variant, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "img",
      {
        ref,
        src,
        alt,
        className: "w-full h-full object-cover",
        ...props
      }
    ) });
  }
);
AspectRatioImage.displayName = "AspectRatioImage";
const AspectRatioVideo = React.forwardRef(
  ({
    className,
    ratio = "video",
    variant = "default",
    ...props
  }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AspectRatioBox, { ratio, variant, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "video",
      {
        ref,
        className: "w-full h-full object-cover",
        ...props
      }
    ) });
  }
);
AspectRatioVideo.displayName = "AspectRatioVideo";
const AspectRatioIframe = React.forwardRef(
  ({
    className,
    ratio = "video",
    variant = "default",
    ...props
  }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AspectRatioBox, { ratio, variant, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "iframe",
      {
        ref,
        className: "w-full h-full",
        ...props
      }
    ) });
  }
);
AspectRatioIframe.displayName = "AspectRatioIframe";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ASPECT_RATIOS,
  AspectRatioBox,
  AspectRatioIframe,
  AspectRatioImage,
  AspectRatioVideo
});
//# sourceMappingURL=aspect-ratio-box.js.map