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
var devices_exports = {};
__export(devices_exports, {
  Battery: () => import_battery.Battery,
  BatteryPlus: () => import_battery_plus.BatteryPlus,
  Bluetooth: () => import_bluetooth.Bluetooth,
  BluetoothOff: () => import_bluetooth_off.BluetoothOff,
  Cable: () => import_cable.Cable,
  Cpu: () => import_cpu.Cpu,
  CpuAi: () => import_cpu_ai.CpuAi,
  EthernetPort: () => import_ethernet_port.EthernetPort,
  HardDrive: () => import_hard_drive.HardDrive,
  HardDriveDownload: () => import_hard_drive_download.HardDriveDownload,
  HardDriveUpload: () => import_hard_drive_upload.HardDriveUpload,
  Keyboard: () => import_keyboard.Keyboard,
  KeyboardMusic: () => import_keyboard_music.KeyboardMusic,
  KeyboardOff: () => import_keyboard_off.KeyboardOff,
  Laptop: () => import_laptop.Laptop,
  MemoryStick: () => import_memory_stick.MemoryStick,
  Monitor: () => import_monitor.Monitor,
  MonitorActivity: () => import_monitor_activity.MonitorActivity,
  MonitorCheck: () => import_monitor_check.MonitorCheck,
  MonitorCog: () => import_monitor_cog.MonitorCog,
  MonitorDot: () => import_monitor_dot.MonitorDot,
  MonitorOff: () => import_monitor_off.MonitorOff,
  MonitorPc: () => import_monitor_pc.MonitorPc,
  MonitorPlay: () => import_monitor_play.MonitorPlay,
  MonitorSmartphone: () => import_monitor_smartphone.MonitorSmartphone,
  MonitorX: () => import_monitor_x.MonitorX,
  Mouse: () => import_mouse.Mouse,
  MouseOff: () => import_mouse_off.MouseOff,
  MousePointer2Off: () => import_mouse_pointer_2_off.MousePointer2Off,
  Plug: () => import_plug.Plug,
  Plug2: () => import_plug_2.Plug2,
  PlugZap: () => import_plug_zap.PlugZap,
  Power: () => import_power.Power,
  PowerOff: () => import_power_off.PowerOff,
  Printer: () => import_printer.Printer,
  Printer3D: () => import_printer_3d.Printer3D,
  PrinterCheck: () => import_printer_check.PrinterCheck,
  PrinterX: () => import_printer_x.PrinterX,
  Projector: () => import_projector.Projector,
  Radar: () => import_radar.Radar,
  Router: () => import_router.Router,
  Server: () => import_server.Server,
  ServerCog: () => import_server_cog.ServerCog,
  ServerNas: () => import_server_nas.ServerNas,
  ServerOff: () => import_server_off.ServerOff,
  ServerPlus: () => import_server_plus.ServerPlus,
  Smartphone: () => import_smartphone.Smartphone,
  SmartphoneCharging: () => import_smartphone_charging.SmartphoneCharging,
  SmartphoneNfc: () => import_smartphone_nfc.SmartphoneNfc,
  SmartphoneUserRound: () => import_smartphone_user_round.SmartphoneUserRound,
  Speaker: () => import_speaker.Speaker,
  Tablet: () => import_tablet.Tablet,
  TabletSmartphone: () => import_tablet_smartphone.TabletSmartphone,
  Usb: () => import_usb.Usb,
  UsbCPort: () => import_usb_c_port.UsbCPort,
  Vibrate: () => import_vibrate.Vibrate,
  Watch: () => import_watch.Watch,
  Wifi: () => import_wifi.Wifi,
  WifiCog: () => import_wifi_cog.WifiCog,
  WifiLock: () => import_wifi_lock.WifiLock,
  WifiOff: () => import_wifi_off.WifiOff,
  WifiPen: () => import_wifi_pen.WifiPen,
  WifiSync: () => import_wifi_sync.WifiSync
});
module.exports = __toCommonJS(devices_exports);
var import_battery = require("../icons/battery.js");
var import_battery_plus = require("../icons/battery-plus.js");
var import_bluetooth = require("../icons/bluetooth.js");
var import_bluetooth_off = require("../icons/bluetooth-off.js");
var import_cable = require("../icons/cable.js");
var import_cpu = require("../icons/cpu.js");
var import_cpu_ai = require("../icons/cpu-ai.js");
var import_ethernet_port = require("../icons/ethernet-port.js");
var import_hard_drive = require("../icons/hard-drive.js");
var import_hard_drive_download = require("../icons/hard-drive-download.js");
var import_hard_drive_upload = require("../icons/hard-drive-upload.js");
var import_keyboard = require("../icons/keyboard.js");
var import_keyboard_music = require("../icons/keyboard-music.js");
var import_keyboard_off = require("../icons/keyboard-off.js");
var import_laptop = require("../icons/laptop.js");
var import_memory_stick = require("../icons/memory-stick.js");
var import_monitor = require("../icons/monitor.js");
var import_monitor_activity = require("../icons/monitor-activity.js");
var import_monitor_check = require("../icons/monitor-check.js");
var import_monitor_cog = require("../icons/monitor-cog.js");
var import_monitor_dot = require("../icons/monitor-dot.js");
var import_monitor_off = require("../icons/monitor-off.js");
var import_monitor_pc = require("../icons/monitor-pc.js");
var import_monitor_play = require("../icons/monitor-play.js");
var import_monitor_smartphone = require("../icons/monitor-smartphone.js");
var import_monitor_x = require("../icons/monitor-x.js");
var import_mouse = require("../icons/mouse.js");
var import_mouse_off = require("../icons/mouse-off.js");
var import_mouse_pointer_2_off = require("../icons/mouse-pointer-2-off.js");
var import_plug = require("../icons/plug.js");
var import_plug_2 = require("../icons/plug-2.js");
var import_plug_zap = require("../icons/plug-zap.js");
var import_power = require("../icons/power.js");
var import_power_off = require("../icons/power-off.js");
var import_printer = require("../icons/printer.js");
var import_printer_3d = require("../icons/printer-3d.js");
var import_printer_check = require("../icons/printer-check.js");
var import_printer_x = require("../icons/printer-x.js");
var import_projector = require("../icons/projector.js");
var import_radar = require("../icons/radar.js");
var import_router = require("../icons/router.js");
var import_server = require("../icons/server.js");
var import_server_cog = require("../icons/server-cog.js");
var import_server_nas = require("../icons/server-nas.js");
var import_server_off = require("../icons/server-off.js");
var import_server_plus = require("../icons/server-plus.js");
var import_smartphone = require("../icons/smartphone.js");
var import_smartphone_charging = require("../icons/smartphone-charging.js");
var import_smartphone_nfc = require("../icons/smartphone-nfc.js");
var import_smartphone_user_round = require("../icons/smartphone-user-round.js");
var import_speaker = require("../icons/speaker.js");
var import_tablet = require("../icons/tablet.js");
var import_tablet_smartphone = require("../icons/tablet-smartphone.js");
var import_usb = require("../icons/usb.js");
var import_usb_c_port = require("../icons/usb-c-port.js");
var import_vibrate = require("../icons/vibrate.js");
var import_watch = require("../icons/watch.js");
var import_wifi = require("../icons/wifi.js");
var import_wifi_cog = require("../icons/wifi-cog.js");
var import_wifi_lock = require("../icons/wifi-lock.js");
var import_wifi_off = require("../icons/wifi-off.js");
var import_wifi_pen = require("../icons/wifi-pen.js");
var import_wifi_sync = require("../icons/wifi-sync.js");
