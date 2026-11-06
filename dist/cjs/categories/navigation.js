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
var navigation_exports = {};
__export(navigation_exports, {
  Compass: () => import_compass.Compass,
  Earth: () => import_earth.Earth,
  EarthLock: () => import_earth_lock.EarthLock,
  ExternalLink: () => import_external_link.ExternalLink,
  Globe: () => import_globe.Globe,
  GlobeBan: () => import_globe_ban.GlobeBan,
  GlobeCheck: () => import_globe_check.GlobeCheck,
  GlobeCode: () => import_globe_code.GlobeCode,
  GlobeLock: () => import_globe_lock.GlobeLock,
  GlobeOff: () => import_globe_off.GlobeOff,
  GlobePlus: () => import_globe_plus.GlobePlus,
  GlobeX: () => import_globe_x.GlobeX,
  Home: () => import_house.Home,
  HouseCog: () => import_house_cog.HouseCog,
  HousePlug: () => import_house_plug.HousePlug,
  HousePlus: () => import_house_plus.HousePlus,
  HouseWifi: () => import_house_wifi.HouseWifi,
  Locate: () => import_locate.Locate,
  LocateFixed: () => import_locate_fixed.LocateFixed,
  LocateOff: () => import_locate_off.LocateOff,
  LogOut: () => import_log_out.LogOut,
  Map: () => import_map.Map,
  MapPin: () => import_map_pin.MapPin,
  MapPinHouse: () => import_map_pin_house.MapPinHouse,
  MapPinOff: () => import_map_pin_off.MapPinOff,
  MapPinPen: () => import_map_pin_pen.MapPinPen,
  MapPinPlusInside: () => import_map_pin_plus_inside.MapPinPlusInside,
  MapPinSearch: () => import_map_pin_search.MapPinSearch,
  MapPinX: () => import_map_pin_x.MapPinX,
  MapPinXInside: () => import_map_pin_x_inside.MapPinXInside,
  Milestone: () => import_milestone.Milestone,
  Navigation: () => import_navigation.Navigation,
  Navigation2: () => import_navigation_2.Navigation2,
  Navigation2Off: () => import_navigation_2_off.Navigation2Off,
  NavigationOff: () => import_navigation_off.NavigationOff,
  Route: () => import_route.Route,
  RouteOff: () => import_route_off.RouteOff,
  Signpost: () => import_signpost.Signpost,
  SignpostBig: () => import_signpost_big.SignpostBig,
  Waypoints: () => import_waypoints.Waypoints
});
module.exports = __toCommonJS(navigation_exports);
var import_compass = require("../icons/compass.js");
var import_earth = require("../icons/earth.js");
var import_earth_lock = require("../icons/earth-lock.js");
var import_external_link = require("../icons/external-link.js");
var import_globe = require("../icons/globe.js");
var import_globe_ban = require("../icons/globe-ban.js");
var import_globe_check = require("../icons/globe-check.js");
var import_globe_code = require("../icons/globe-code.js");
var import_globe_lock = require("../icons/globe-lock.js");
var import_globe_off = require("../icons/globe-off.js");
var import_globe_plus = require("../icons/globe-plus.js");
var import_globe_x = require("../icons/globe-x.js");
var import_house = require("../icons/house.js");
var import_house_cog = require("../icons/house-cog.js");
var import_house_plug = require("../icons/house-plug.js");
var import_house_plus = require("../icons/house-plus.js");
var import_house_wifi = require("../icons/house-wifi.js");
var import_locate = require("../icons/locate.js");
var import_locate_fixed = require("../icons/locate-fixed.js");
var import_locate_off = require("../icons/locate-off.js");
var import_log_out = require("../icons/log-out.js");
var import_map = require("../icons/map.js");
var import_map_pin = require("../icons/map-pin.js");
var import_map_pin_house = require("../icons/map-pin-house.js");
var import_map_pin_off = require("../icons/map-pin-off.js");
var import_map_pin_pen = require("../icons/map-pin-pen.js");
var import_map_pin_plus_inside = require("../icons/map-pin-plus-inside.js");
var import_map_pin_search = require("../icons/map-pin-search.js");
var import_map_pin_x = require("../icons/map-pin-x.js");
var import_map_pin_x_inside = require("../icons/map-pin-x-inside.js");
var import_milestone = require("../icons/milestone.js");
var import_navigation = require("../icons/navigation.js");
var import_navigation_2 = require("../icons/navigation-2.js");
var import_navigation_2_off = require("../icons/navigation-2-off.js");
var import_navigation_off = require("../icons/navigation-off.js");
var import_route = require("../icons/route.js");
var import_route_off = require("../icons/route-off.js");
var import_signpost = require("../icons/signpost.js");
var import_signpost_big = require("../icons/signpost-big.js");
var import_waypoints = require("../icons/waypoints.js");
