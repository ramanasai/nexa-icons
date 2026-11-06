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
var travel_exports = {};
__export(travel_exports, {
  Anchor: () => import_anchor.Anchor,
  Bike: () => import_bike.Bike,
  Bus: () => import_bus.Bus,
  Car: () => import_car.Car,
  CarBattery: () => import_car_battery.CarBattery,
  Caravan: () => import_caravan.Caravan,
  Compass: () => import_compass.Compass,
  Fuel: () => import_fuel.Fuel,
  Hotel: () => import_hotel.Hotel,
  Luggage: () => import_luggage.Luggage,
  MapPinCheck: () => import_map_pin_check.MapPinCheck,
  MapPinHouse: () => import_map_pin_house.MapPinHouse,
  MapPinOff: () => import_map_pin_off.MapPinOff,
  MapPinPlusInside: () => import_map_pin_plus_inside.MapPinPlusInside,
  MapPinSearch: () => import_map_pin_search.MapPinSearch,
  MapPinX: () => import_map_pin_x.MapPinX,
  MapPinXInside: () => import_map_pin_x_inside.MapPinXInside,
  Mountain: () => import_mountain.Mountain,
  MountainSnow: () => import_mountain_snow.MountainSnow,
  ParkingMeter: () => import_parking_meter.ParkingMeter,
  Plane: () => import_plane.Plane,
  PlaneLanding: () => import_plane_landing.PlaneLanding,
  Road: () => import_road.Road,
  Rocket: () => import_rocket.Rocket,
  Route: () => import_route.Route,
  RouteOff: () => import_route_off.RouteOff,
  Sailboat: () => import_sailboat.Sailboat,
  Scooter: () => import_scooter.Scooter,
  Ship: () => import_ship.Ship,
  ShipCargo: () => import_ship_cargo.ShipCargo,
  ShipWheel: () => import_ship_wheel.ShipWheel,
  Tent: () => import_tent.Tent,
  TentTree: () => import_tent_tree.TentTree,
  Ticket: () => import_ticket.Ticket,
  TicketCheck: () => import_ticket_check.TicketCheck,
  TicketMinus: () => import_ticket_minus.TicketMinus,
  TicketPercent: () => import_ticket_percent.TicketPercent,
  TicketPlus: () => import_ticket_plus.TicketPlus,
  TicketSlash: () => import_ticket_slash.TicketSlash,
  TicketX: () => import_ticket_x.TicketX,
  Tickets: () => import_tickets.Tickets,
  TicketsPlane: () => import_tickets_plane.TicketsPlane,
  TrafficCone: () => import_traffic_cone.TrafficCone,
  TrainFront: () => import_train_front.TrainFront,
  TramFront: () => import_tram_front.TramFront,
  Truck: () => import_truck.Truck,
  TruckElectric: () => import_truck_electric.TruckElectric,
  Umbrella: () => import_umbrella.Umbrella
});
module.exports = __toCommonJS(travel_exports);
var import_anchor = require("../icons/anchor.js");
var import_bike = require("../icons/bike.js");
var import_bus = require("../icons/bus.js");
var import_car = require("../icons/car.js");
var import_car_battery = require("../icons/car-battery.js");
var import_caravan = require("../icons/caravan.js");
var import_compass = require("../icons/compass.js");
var import_fuel = require("../icons/fuel.js");
var import_hotel = require("../icons/hotel.js");
var import_luggage = require("../icons/luggage.js");
var import_map_pin_check = require("../icons/map-pin-check.js");
var import_map_pin_house = require("../icons/map-pin-house.js");
var import_map_pin_off = require("../icons/map-pin-off.js");
var import_map_pin_plus_inside = require("../icons/map-pin-plus-inside.js");
var import_map_pin_search = require("../icons/map-pin-search.js");
var import_map_pin_x = require("../icons/map-pin-x.js");
var import_map_pin_x_inside = require("../icons/map-pin-x-inside.js");
var import_mountain = require("../icons/mountain.js");
var import_mountain_snow = require("../icons/mountain-snow.js");
var import_parking_meter = require("../icons/parking-meter.js");
var import_plane = require("../icons/plane.js");
var import_plane_landing = require("../icons/plane-landing.js");
var import_road = require("../icons/road.js");
var import_rocket = require("../icons/rocket.js");
var import_route = require("../icons/route.js");
var import_route_off = require("../icons/route-off.js");
var import_sailboat = require("../icons/sailboat.js");
var import_scooter = require("../icons/scooter.js");
var import_ship = require("../icons/ship.js");
var import_ship_cargo = require("../icons/ship-cargo.js");
var import_ship_wheel = require("../icons/ship-wheel.js");
var import_tent = require("../icons/tent.js");
var import_tent_tree = require("../icons/tent-tree.js");
var import_ticket = require("../icons/ticket.js");
var import_ticket_check = require("../icons/ticket-check.js");
var import_ticket_minus = require("../icons/ticket-minus.js");
var import_ticket_percent = require("../icons/ticket-percent.js");
var import_ticket_plus = require("../icons/ticket-plus.js");
var import_ticket_slash = require("../icons/ticket-slash.js");
var import_ticket_x = require("../icons/ticket-x.js");
var import_tickets = require("../icons/tickets.js");
var import_tickets_plane = require("../icons/tickets-plane.js");
var import_traffic_cone = require("../icons/traffic-cone.js");
var import_train_front = require("../icons/train-front.js");
var import_tram_front = require("../icons/tram-front.js");
var import_truck = require("../icons/truck.js");
var import_truck_electric = require("../icons/truck-electric.js");
var import_umbrella = require("../icons/umbrella.js");
