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
var effects_exports = {};
__export(effects_exports, {
  CelestialBackground: () => import_CelestialBackground.CelestialBackground,
  FloatingGrid: () => import_FloatingGrid.FloatingGrid,
  MatrixBackground: () => import_MatrixBackground.MatrixBackground,
  ParticlesEffect: () => import_ParticlesEffect.ParticlesEffect,
  StarsBackground: () => import_StarsBackground.StarsBackground
});
module.exports = __toCommonJS(effects_exports);
var import_CelestialBackground = require("./CelestialBackground");
var import_FloatingGrid = require("./FloatingGrid");
var import_MatrixBackground = require("./MatrixBackground");
var import_StarsBackground = require("./StarsBackground");
var import_ParticlesEffect = require("./ParticlesEffect");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CelestialBackground,
  FloatingGrid,
  MatrixBackground,
  ParticlesEffect,
  StarsBackground
});
//# sourceMappingURL=index.js.map