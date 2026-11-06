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
var health_exports = {};
__export(health_exports, {
  Accessibility: () => import_accessibility.Accessibility,
  Activity: () => import_activity.Activity,
  Ambulance: () => import_ambulance.Ambulance,
  Baby: () => import_baby.Baby,
  Bandage: () => import_bandage.Bandage,
  BicepsFlexed: () => import_biceps_flexed.BicepsFlexed,
  Biohazard: () => import_biohazard.Biohazard,
  Bone: () => import_bone.Bone,
  BoneFracture: () => import_bone_fracture.BoneFracture,
  Brain: () => import_brain.Brain,
  BrainCircuit: () => import_brain_circuit.BrainCircuit,
  BrainCog: () => import_brain_cog.BrainCog,
  BrainOff: () => import_brain_off.BrainOff,
  BriefcaseMedical: () => import_briefcase_medical.BriefcaseMedical,
  Cigarette: () => import_cigarette.Cigarette,
  CigaretteOff: () => import_cigarette_off.CigaretteOff,
  Dna: () => import_dna.Dna,
  DnaOff: () => import_dna_off.DnaOff,
  Dumbbell: () => import_dumbbell.Dumbbell,
  Ear: () => import_ear.Ear,
  EarOff: () => import_ear_off.EarOff,
  FlaskConical: () => import_flask_conical.FlaskConical,
  FlaskConicalOff: () => import_flask_conical_off.FlaskConicalOff,
  Footprints: () => import_footprints.Footprints,
  Heart: () => import_heart.Heart,
  HeartHandshake: () => import_heart_handshake.HeartHandshake,
  HeartOff: () => import_heart_off.HeartOff,
  HeartPlus: () => import_heart_plus.HeartPlus,
  HeartPulse: () => import_heart_pulse.HeartPulse,
  HeartX: () => import_heart_x.HeartX,
  Hospital: () => import_hospital.Hospital,
  Microscope: () => import_microscope.Microscope,
  MonitorActivity: () => import_monitor_activity.MonitorActivity,
  PersonStanding: () => import_person_standing.PersonStanding,
  Pill: () => import_pill.Pill,
  PillBottle: () => import_pill_bottle.PillBottle,
  Radiation: () => import_radiation.Radiation,
  ScanHeart: () => import_scan_heart.ScanHeart,
  SquareActivity: () => import_square_activity.SquareActivity,
  Stethoscope: () => import_stethoscope.Stethoscope,
  Syringe: () => import_syringe.Syringe,
  Tablets: () => import_tablets.Tablets,
  TestTube: () => import_test_tube.TestTube,
  Thermometer: () => import_thermometer.Thermometer,
  ThermometerSnowflake: () => import_thermometer_snowflake.ThermometerSnowflake
});
module.exports = __toCommonJS(health_exports);
var import_accessibility = require("../icons/accessibility.js");
var import_activity = require("../icons/activity.js");
var import_ambulance = require("../icons/ambulance.js");
var import_baby = require("../icons/baby.js");
var import_bandage = require("../icons/bandage.js");
var import_biceps_flexed = require("../icons/biceps-flexed.js");
var import_biohazard = require("../icons/biohazard.js");
var import_bone = require("../icons/bone.js");
var import_bone_fracture = require("../icons/bone-fracture.js");
var import_brain = require("../icons/brain.js");
var import_brain_circuit = require("../icons/brain-circuit.js");
var import_brain_cog = require("../icons/brain-cog.js");
var import_brain_off = require("../icons/brain-off.js");
var import_briefcase_medical = require("../icons/briefcase-medical.js");
var import_cigarette = require("../icons/cigarette.js");
var import_cigarette_off = require("../icons/cigarette-off.js");
var import_dna = require("../icons/dna.js");
var import_dna_off = require("../icons/dna-off.js");
var import_dumbbell = require("../icons/dumbbell.js");
var import_ear = require("../icons/ear.js");
var import_ear_off = require("../icons/ear-off.js");
var import_flask_conical = require("../icons/flask-conical.js");
var import_flask_conical_off = require("../icons/flask-conical-off.js");
var import_footprints = require("../icons/footprints.js");
var import_heart = require("../icons/heart.js");
var import_heart_handshake = require("../icons/heart-handshake.js");
var import_heart_off = require("../icons/heart-off.js");
var import_heart_plus = require("../icons/heart-plus.js");
var import_heart_pulse = require("../icons/heart-pulse.js");
var import_heart_x = require("../icons/heart-x.js");
var import_hospital = require("../icons/hospital.js");
var import_microscope = require("../icons/microscope.js");
var import_monitor_activity = require("../icons/monitor-activity.js");
var import_person_standing = require("../icons/person-standing.js");
var import_pill = require("../icons/pill.js");
var import_pill_bottle = require("../icons/pill-bottle.js");
var import_radiation = require("../icons/radiation.js");
var import_scan_heart = require("../icons/scan-heart.js");
var import_square_activity = require("../icons/square-activity.js");
var import_stethoscope = require("../icons/stethoscope.js");
var import_syringe = require("../icons/syringe.js");
var import_tablets = require("../icons/tablets.js");
var import_test_tube = require("../icons/test-tube.js");
var import_thermometer = require("../icons/thermometer.js");
var import_thermometer_snowflake = require("../icons/thermometer-snowflake.js");
