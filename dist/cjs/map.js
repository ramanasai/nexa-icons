"use strict";
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
var map_exports = {};
__export(map_exports, {
  NEXA_MAP: () => NEXA_MAP
});
module.exports = __toCommonJS(map_exports);
const NEXA_MAP = {
  jobs: "Briefcase",
  searchJobs: "Search",
  recommendations: "Sparkles",
  saved: "Bookmark",
  applied: "Send",
  company: "Building2",
  location: "MapPin",
  remote: "Globe",
  salary: "DollarSign",
  experience: "GraduationCap",
  categories: "Layers",
  alerts: "Bell",
  email: "Mail",
  pro: "Crown",
  profile: "User",
  admin: "ShieldCheck",
  settings: "Settings",
  resume: "FileText",
  upload: "Upload",
  sync: "RefreshCw",
  api: "Plug",
  external: "ArrowUpRight",
  signOut: "LogOut"
};
