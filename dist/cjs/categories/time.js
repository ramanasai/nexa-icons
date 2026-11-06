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
var time_exports = {};
__export(time_exports, {
  AlarmClock: () => import_alarm_clock.AlarmClock,
  AlarmClockCheck: () => import_alarm_clock_check.AlarmClockCheck,
  AlarmClockMinus: () => import_alarm_clock_minus.AlarmClockMinus,
  AlarmClockOff: () => import_alarm_clock_off.AlarmClockOff,
  AlarmClockPlus: () => import_alarm_clock_plus.AlarmClockPlus,
  Calendar: () => import_calendar.Calendar,
  Calendar1: () => import_calendar_1.Calendar1,
  CalendarArrowDown: () => import_calendar_arrow_down.CalendarArrowDown,
  CalendarArrowRight: () => import_calendar_arrow_right.CalendarArrowRight,
  CalendarArrowUp: () => import_calendar_arrow_up.CalendarArrowUp,
  CalendarChevronsLeft: () => import_calendar_chevrons_left.CalendarChevronsLeft,
  CalendarClock: () => import_calendar_clock.CalendarClock,
  CalendarCog: () => import_calendar_cog.CalendarCog,
  CalendarDays: () => import_calendar_days.CalendarDays,
  CalendarOff: () => import_calendar_off.CalendarOff,
  CalendarSearch: () => import_calendar_search.CalendarSearch,
  CalendarSync: () => import_calendar_sync.CalendarSync,
  CalendarX: () => import_calendar_x.CalendarX,
  Clock: () => import_clock.Clock,
  Clock1: () => import_clock_1.Clock1,
  Clock10: () => import_clock_10.Clock10,
  Clock11: () => import_clock_11.Clock11,
  Clock12: () => import_clock_12.Clock12,
  ClockArrowDown: () => import_clock_arrow_down.ClockArrowDown,
  ClockArrowUp: () => import_clock_arrow_up.ClockArrowUp,
  ClockCheck: () => import_clock_check.ClockCheck,
  ClockExclamationPoint: () => import_clock_exclamation_point.ClockExclamationPoint,
  ClockPlus: () => import_clock_plus.ClockPlus,
  FileClock: () => import_file_clock.FileClock,
  History: () => import_rotate_ccw_clock.History,
  Hourglass: () => import_hourglass.Hourglass,
  HourglassCog: () => import_hourglass_cog.HourglassCog,
  Timer: () => import_timer.Timer,
  TimerOff: () => import_timer_off.TimerOff,
  TimerReset: () => import_timer_reset.TimerReset,
  Watch: () => import_watch.Watch
});
module.exports = __toCommonJS(time_exports);
var import_alarm_clock = require("../icons/alarm-clock.js");
var import_alarm_clock_check = require("../icons/alarm-clock-check.js");
var import_alarm_clock_minus = require("../icons/alarm-clock-minus.js");
var import_alarm_clock_off = require("../icons/alarm-clock-off.js");
var import_alarm_clock_plus = require("../icons/alarm-clock-plus.js");
var import_calendar = require("../icons/calendar.js");
var import_calendar_1 = require("../icons/calendar-1.js");
var import_calendar_arrow_down = require("../icons/calendar-arrow-down.js");
var import_calendar_arrow_right = require("../icons/calendar-arrow-right.js");
var import_calendar_arrow_up = require("../icons/calendar-arrow-up.js");
var import_calendar_chevrons_left = require("../icons/calendar-chevrons-left.js");
var import_calendar_clock = require("../icons/calendar-clock.js");
var import_calendar_cog = require("../icons/calendar-cog.js");
var import_calendar_days = require("../icons/calendar-days.js");
var import_calendar_off = require("../icons/calendar-off.js");
var import_calendar_search = require("../icons/calendar-search.js");
var import_calendar_sync = require("../icons/calendar-sync.js");
var import_calendar_x = require("../icons/calendar-x.js");
var import_clock = require("../icons/clock.js");
var import_clock_1 = require("../icons/clock-1.js");
var import_clock_10 = require("../icons/clock-10.js");
var import_clock_11 = require("../icons/clock-11.js");
var import_clock_12 = require("../icons/clock-12.js");
var import_clock_arrow_down = require("../icons/clock-arrow-down.js");
var import_clock_arrow_up = require("../icons/clock-arrow-up.js");
var import_clock_check = require("../icons/clock-check.js");
var import_clock_exclamation_point = require("../icons/clock-exclamation-point.js");
var import_clock_plus = require("../icons/clock-plus.js");
var import_file_clock = require("../icons/file-clock.js");
var import_rotate_ccw_clock = require("../icons/rotate-ccw-clock.js");
var import_hourglass = require("../icons/hourglass.js");
var import_hourglass_cog = require("../icons/hourglass-cog.js");
var import_timer = require("../icons/timer.js");
var import_timer_off = require("../icons/timer-off.js");
var import_timer_reset = require("../icons/timer-reset.js");
var import_watch = require("../icons/watch.js");
