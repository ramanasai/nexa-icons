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
var security_exports = {};
__export(security_exports, {
  Ban: () => import_ban.Ban,
  Biohazard: () => import_biohazard.Biohazard,
  BookKey: () => import_book_key.BookKey,
  BrickWallFire: () => import_brick_wall_fire.BrickWallFire,
  BrickWallShield: () => import_brick_wall_shield.BrickWallShield,
  EarthLock: () => import_earth_lock.EarthLock,
  Eye: () => import_eye.Eye,
  EyeClosed: () => import_eye_closed.EyeClosed,
  EyeDashed: () => import_eye_dashed.EyeDashed,
  EyeOff: () => import_eye_off.EyeOff,
  FileKey: () => import_file_key.FileKey,
  FileLock: () => import_file_lock.FileLock,
  Fingerprint: () => import_fingerprint_pattern.Fingerprint,
  Gavel: () => import_gavel.Gavel,
  GlobeLock: () => import_globe_lock.GlobeLock,
  IdCard: () => import_id_card.IdCard,
  Key: () => import_key.Key,
  KeyRound: () => import_key_round.KeyRound,
  KeySquare: () => import_key_square.KeySquare,
  LifeBuoy: () => import_life_buoy.LifeBuoy,
  Lock: () => import_lock.Lock,
  LockKeyhole: () => import_lock_keyhole.LockKeyhole,
  LockKeyholeOpen: () => import_lock_keyhole_open.LockKeyholeOpen,
  LockOpen: () => import_lock_open.LockOpen,
  Passport: () => import_passport.Passport,
  Radiation: () => import_radiation.Radiation,
  ResidencePermit: () => import_residence_permit.ResidencePermit,
  Scale: () => import_scale.Scale,
  ScanEye: () => import_scan_eye.ScanEye,
  ScanFace: () => import_scan_face.ScanFace,
  Shield: () => import_shield.Shield,
  ShieldAlert: () => import_shield_exclamation_point.ShieldAlert,
  ShieldBan: () => import_shield_ban.ShieldBan,
  ShieldCheck: () => import_shield_check.ShieldCheck,
  ShieldCog: () => import_shield_cog.ShieldCog,
  ShieldEllipsis: () => import_shield_ellipsis.ShieldEllipsis,
  ShieldHalf: () => import_shield_half.ShieldHalf,
  ShieldMinus: () => import_shield_minus.ShieldMinus,
  ShieldOff: () => import_shield_off.ShieldOff,
  ShieldPlus: () => import_shield_plus.ShieldPlus,
  ShieldQuestionMark: () => import_shield_question_mark.ShieldQuestionMark,
  ShieldX: () => import_shield_x.ShieldX,
  Siren: () => import_siren.Siren,
  SirenOff: () => import_siren_off.SirenOff,
  Vault: () => import_vault.Vault,
  VenetianMask: () => import_venetian_mask.VenetianMask,
  Visa: () => import_visa.Visa
});
module.exports = __toCommonJS(security_exports);
var import_ban = require("../icons/ban.js");
var import_biohazard = require("../icons/biohazard.js");
var import_book_key = require("../icons/book-key.js");
var import_brick_wall_fire = require("../icons/brick-wall-fire.js");
var import_brick_wall_shield = require("../icons/brick-wall-shield.js");
var import_earth_lock = require("../icons/earth-lock.js");
var import_eye = require("../icons/eye.js");
var import_eye_closed = require("../icons/eye-closed.js");
var import_eye_dashed = require("../icons/eye-dashed.js");
var import_eye_off = require("../icons/eye-off.js");
var import_file_key = require("../icons/file-key.js");
var import_file_lock = require("../icons/file-lock.js");
var import_fingerprint_pattern = require("../icons/fingerprint-pattern.js");
var import_gavel = require("../icons/gavel.js");
var import_globe_lock = require("../icons/globe-lock.js");
var import_id_card = require("../icons/id-card.js");
var import_key = require("../icons/key.js");
var import_key_round = require("../icons/key-round.js");
var import_key_square = require("../icons/key-square.js");
var import_life_buoy = require("../icons/life-buoy.js");
var import_lock = require("../icons/lock.js");
var import_lock_keyhole = require("../icons/lock-keyhole.js");
var import_lock_keyhole_open = require("../icons/lock-keyhole-open.js");
var import_lock_open = require("../icons/lock-open.js");
var import_passport = require("../icons/passport.js");
var import_radiation = require("../icons/radiation.js");
var import_residence_permit = require("../icons/residence-permit.js");
var import_scale = require("../icons/scale.js");
var import_scan_eye = require("../icons/scan-eye.js");
var import_scan_face = require("../icons/scan-face.js");
var import_shield = require("../icons/shield.js");
var import_shield_exclamation_point = require("../icons/shield-exclamation-point.js");
var import_shield_ban = require("../icons/shield-ban.js");
var import_shield_check = require("../icons/shield-check.js");
var import_shield_cog = require("../icons/shield-cog.js");
var import_shield_ellipsis = require("../icons/shield-ellipsis.js");
var import_shield_half = require("../icons/shield-half.js");
var import_shield_minus = require("../icons/shield-minus.js");
var import_shield_off = require("../icons/shield-off.js");
var import_shield_plus = require("../icons/shield-plus.js");
var import_shield_question_mark = require("../icons/shield-question-mark.js");
var import_shield_x = require("../icons/shield-x.js");
var import_siren = require("../icons/siren.js");
var import_siren_off = require("../icons/siren-off.js");
var import_vault = require("../icons/vault.js");
var import_venetian_mask = require("../icons/venetian-mask.js");
var import_visa = require("../icons/visa.js");
