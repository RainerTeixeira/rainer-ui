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
var social_exports = {};
__export(social_exports, {
  ActionButton: () => import_action_button.ActionButton,
  ActionButtonVariants: () => import_action_button.ActionButtonVariants,
  BookmarkButton: () => import_bookmark_button.BookmarkButton,
  ContentCard: () => import_content_card.ContentCard,
  ContentCardVariants: () => import_content_card.ContentCardVariants,
  LikeButton: () => import_like_button.LikeButton,
  ReadingTime: () => import_reading_time.ReadingTime,
  ShareButton: () => import_share_button.ShareButton,
  ShareMenu: () => import_share_menu.ShareMenu,
  ShareMenuVariants: () => import_share_menu.ShareMenuVariants
});
module.exports = __toCommonJS(social_exports);
var import_like_button = require("./like-button");
var import_share_button = require("./share-button");
var import_bookmark_button = require("./bookmark-button");
var import_reading_time = require("./reading-time");
var import_action_button = require("./action-button");
var import_share_menu = require("./share-menu");
var import_content_card = require("./content-card");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ActionButton,
  ActionButtonVariants,
  BookmarkButton,
  ContentCard,
  ContentCardVariants,
  LikeButton,
  ReadingTime,
  ShareButton,
  ShareMenu,
  ShareMenuVariants
});
//# sourceMappingURL=index.js.map