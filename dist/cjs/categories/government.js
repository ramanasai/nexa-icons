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
var government_exports = {};
__export(government_exports, {
  FlagIreland: () => import_flag_ireland.FlagIreland,
  Passport: () => import_passport.Passport,
  ResidencePermit: () => import_residence_permit.ResidencePermit,
  Sponsor: () => import_sponsor.Sponsor,
  Stamp: () => import_stamp.Stamp,
  Visa: () => import_visa.Visa,
  VisaStamp: () => import_visa_stamp.VisaStamp
});
module.exports = __toCommonJS(government_exports);
var import_flag_ireland = require("../icons/flag-ireland.js");
var import_passport = require("../icons/passport.js");
var import_residence_permit = require("../icons/residence-permit.js");
var import_sponsor = require("../icons/sponsor.js");
var import_stamp = require("../icons/stamp.js");
var import_visa = require("../icons/visa.js");
var import_visa_stamp = require("../icons/visa-stamp.js");
