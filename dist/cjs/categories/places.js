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
var places_exports = {};
__export(places_exports, {
  BrickWall: () => import_brick_wall.BrickWall,
  BrickWallFire: () => import_brick_wall_fire.BrickWallFire,
  BrickWallShield: () => import_brick_wall_shield.BrickWallShield,
  Briefcase: () => import_briefcase.Briefcase,
  BriefcaseBusiness: () => import_briefcase_business.BriefcaseBusiness,
  BriefcaseConveyorBelt: () => import_briefcase_conveyor_belt.BriefcaseConveyorBelt,
  BriefcaseMedical: () => import_briefcase_medical.BriefcaseMedical,
  BriefcasePlus: () => import_briefcase_plus.BriefcasePlus,
  Building: () => import_building.Building,
  Building2: () => import_building_complex.Building2,
  BuildingComplexPlus: () => import_building_complex_plus.BuildingComplexPlus,
  Castle: () => import_castle.Castle,
  Church: () => import_church.Church,
  Dam: () => import_dam.Dam,
  DoorClosed: () => import_door_closed.DoorClosed,
  DoorClosedCog: () => import_door_closed_cog.DoorClosedCog,
  DoorClosedLocked: () => import_door_closed_locked.DoorClosedLocked,
  DoorClosedPackage: () => import_door_closed_package.DoorClosedPackage,
  DoorOpen: () => import_door_open.DoorOpen,
  Earth: () => import_earth.Earth,
  Factory: () => import_factory.Factory,
  Fence: () => import_fence.Fence,
  Globe: () => import_globe.Globe,
  GlobeBan: () => import_globe_ban.GlobeBan,
  GlobeCheck: () => import_globe_check.GlobeCheck,
  GlobeCode: () => import_globe_code.GlobeCode,
  GlobeOff: () => import_globe_off.GlobeOff,
  GlobePlus: () => import_globe_plus.GlobePlus,
  GlobeX: () => import_globe_x.GlobeX,
  Home: () => import_house.Home,
  Hospital: () => import_hospital.Hospital,
  Hotel: () => import_hotel.Hotel,
  HouseCog: () => import_house_cog.HouseCog,
  HouseHeart: () => import_house_heart.HouseHeart,
  HousePlug: () => import_house_plug.HousePlug,
  HousePlus: () => import_house_plus.HousePlus,
  HouseWifi: () => import_house_wifi.HouseWifi,
  Landmark: () => import_landmark.Landmark,
  Map: () => import_map.Map,
  MapPin: () => import_map_pin.MapPin,
  MapPinCheck: () => import_map_pin_check.MapPinCheck,
  MapPinPen: () => import_map_pin_pen.MapPinPen,
  Mountain: () => import_mountain.Mountain,
  MountainSnow: () => import_mountain_snow.MountainSnow,
  Pin: () => import_pin.Pin,
  School: () => import_school.School,
  SolarPanel: () => import_solar_panel.SolarPanel,
  Store: () => import_store.Store,
  Tent: () => import_tent.Tent,
  TentTree: () => import_tent_tree.TentTree,
  TreeDeciduous: () => import_tree_deciduous.TreeDeciduous,
  TreePalm: () => import_tree_palm.TreePalm,
  TreePine: () => import_tree_pine.TreePine,
  Trees: () => import_trees.Trees,
  UtilityPole: () => import_utility_pole.UtilityPole,
  Warehouse: () => import_warehouse.Warehouse
});
module.exports = __toCommonJS(places_exports);
var import_brick_wall = require("../icons/brick-wall.js");
var import_brick_wall_fire = require("../icons/brick-wall-fire.js");
var import_brick_wall_shield = require("../icons/brick-wall-shield.js");
var import_briefcase = require("../icons/briefcase.js");
var import_briefcase_business = require("../icons/briefcase-business.js");
var import_briefcase_conveyor_belt = require("../icons/briefcase-conveyor-belt.js");
var import_briefcase_medical = require("../icons/briefcase-medical.js");
var import_briefcase_plus = require("../icons/briefcase-plus.js");
var import_building = require("../icons/building.js");
var import_building_complex = require("../icons/building-complex.js");
var import_building_complex_plus = require("../icons/building-complex-plus.js");
var import_castle = require("../icons/castle.js");
var import_church = require("../icons/church.js");
var import_dam = require("../icons/dam.js");
var import_door_closed = require("../icons/door-closed.js");
var import_door_closed_cog = require("../icons/door-closed-cog.js");
var import_door_closed_locked = require("../icons/door-closed-locked.js");
var import_door_closed_package = require("../icons/door-closed-package.js");
var import_door_open = require("../icons/door-open.js");
var import_earth = require("../icons/earth.js");
var import_factory = require("../icons/factory.js");
var import_fence = require("../icons/fence.js");
var import_globe = require("../icons/globe.js");
var import_globe_ban = require("../icons/globe-ban.js");
var import_globe_check = require("../icons/globe-check.js");
var import_globe_code = require("../icons/globe-code.js");
var import_globe_off = require("../icons/globe-off.js");
var import_globe_plus = require("../icons/globe-plus.js");
var import_globe_x = require("../icons/globe-x.js");
var import_house = require("../icons/house.js");
var import_hospital = require("../icons/hospital.js");
var import_hotel = require("../icons/hotel.js");
var import_house_cog = require("../icons/house-cog.js");
var import_house_heart = require("../icons/house-heart.js");
var import_house_plug = require("../icons/house-plug.js");
var import_house_plus = require("../icons/house-plus.js");
var import_house_wifi = require("../icons/house-wifi.js");
var import_landmark = require("../icons/landmark.js");
var import_map = require("../icons/map.js");
var import_map_pin = require("../icons/map-pin.js");
var import_map_pin_check = require("../icons/map-pin-check.js");
var import_map_pin_pen = require("../icons/map-pin-pen.js");
var import_mountain = require("../icons/mountain.js");
var import_mountain_snow = require("../icons/mountain-snow.js");
var import_pin = require("../icons/pin.js");
var import_school = require("../icons/school.js");
var import_solar_panel = require("../icons/solar-panel.js");
var import_store = require("../icons/store.js");
var import_tent = require("../icons/tent.js");
var import_tent_tree = require("../icons/tent-tree.js");
var import_tree_deciduous = require("../icons/tree-deciduous.js");
var import_tree_palm = require("../icons/tree-palm.js");
var import_tree_pine = require("../icons/tree-pine.js");
var import_trees = require("../icons/trees.js");
var import_utility_pole = require("../icons/utility-pole.js");
var import_warehouse = require("../icons/warehouse.js");
