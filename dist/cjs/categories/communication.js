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
var communication_exports = {};
__export(communication_exports, {
  AtSign: () => import_at_sign.AtSign,
  Bell: () => import_bell.Bell,
  BellCheck: () => import_bell_check.BellCheck,
  BellDot: () => import_bell_dot.BellDot,
  BellElectric: () => import_bell_electric.BellElectric,
  BellMinus: () => import_bell_minus.BellMinus,
  BellOff: () => import_bell_off.BellOff,
  BellPlus: () => import_bell_plus.BellPlus,
  Contact: () => import_contact.Contact,
  ContactRound: () => import_contact_round.ContactRound,
  Forward: () => import_forward.Forward,
  Headset: () => import_headset.Headset,
  Inbox: () => import_inbox.Inbox,
  Languages: () => import_languages.Languages,
  Mail: () => import_mail.Mail,
  MailBadge: () => import_mail_badge.MailBadge,
  MailCheck: () => import_mail_check.MailCheck,
  MailClock: () => import_mail_clock.MailClock,
  MailDot: () => import_mail_dot.MailDot,
  MailMinus: () => import_mail_minus.MailMinus,
  MailPen: () => import_mail_pen.MailPen,
  MailPlus: () => import_mail_plus.MailPlus,
  MailQuestionMark: () => import_mail_question_mark.MailQuestionMark,
  MailSearch: () => import_mail_search.MailSearch,
  MailX: () => import_mail_x.MailX,
  Mailbox: () => import_mailbox.Mailbox,
  Mails: () => import_mails.Mails,
  Megaphone: () => import_megaphone.Megaphone,
  MegaphoneOff: () => import_megaphone_off.MegaphoneOff,
  MessageCircle: () => import_message_circle.MessageCircle,
  MessageCircleDashedCheck: () => import_message_circle_dashed_check.MessageCircleDashedCheck,
  MessageCircleOff: () => import_message_circle_off.MessageCircleOff,
  MessageCircleText: () => import_message_circle_text.MessageCircleText,
  MessageCircleX: () => import_message_circle_x.MessageCircleX,
  MessageSquare: () => import_message_square.MessageSquare,
  MessageSquareDiff: () => import_message_square_diff.MessageSquareDiff,
  MessageSquareLock: () => import_message_square_lock.MessageSquareLock,
  MessageSquareOff: () => import_message_square_off.MessageSquareOff,
  MessageSquareX: () => import_message_square_x.MessageSquareX,
  MessagesSquare: () => import_messages_square.MessagesSquare,
  Newspaper: () => import_newspaper.Newspaper,
  Phone: () => import_phone.Phone,
  PhoneLog: () => import_phone_log.PhoneLog,
  PhoneOff: () => import_phone_off.PhoneOff,
  Quote: () => import_quote.Quote,
  Radio: () => import_radio.Radio,
  RadioOff: () => import_radio_off.RadioOff,
  Reply: () => import_reply.Reply,
  Rss: () => import_rss.Rss,
  Satellite: () => import_satellite.Satellite,
  SatelliteDish: () => import_satellite_dish.SatelliteDish,
  Send: () => import_send.Send,
  SendToBack: () => import_send_to_back.SendToBack,
  Share: () => import_share.Share,
  Share2: () => import_share_2.Share2,
  Smartphone: () => import_smartphone.Smartphone,
  Speech: () => import_speech.Speech,
  Vibrate: () => import_vibrate.Vibrate,
  Voicemail: () => import_voicemail.Voicemail
});
module.exports = __toCommonJS(communication_exports);
var import_at_sign = require("../icons/at-sign.js");
var import_bell = require("../icons/bell.js");
var import_bell_check = require("../icons/bell-check.js");
var import_bell_dot = require("../icons/bell-dot.js");
var import_bell_electric = require("../icons/bell-electric.js");
var import_bell_minus = require("../icons/bell-minus.js");
var import_bell_off = require("../icons/bell-off.js");
var import_bell_plus = require("../icons/bell-plus.js");
var import_contact = require("../icons/contact.js");
var import_contact_round = require("../icons/contact-round.js");
var import_forward = require("../icons/forward.js");
var import_headset = require("../icons/headset.js");
var import_inbox = require("../icons/inbox.js");
var import_languages = require("../icons/languages.js");
var import_mail = require("../icons/mail.js");
var import_mail_badge = require("../icons/mail-badge.js");
var import_mail_check = require("../icons/mail-check.js");
var import_mail_clock = require("../icons/mail-clock.js");
var import_mail_dot = require("../icons/mail-dot.js");
var import_mail_minus = require("../icons/mail-minus.js");
var import_mail_pen = require("../icons/mail-pen.js");
var import_mail_plus = require("../icons/mail-plus.js");
var import_mail_question_mark = require("../icons/mail-question-mark.js");
var import_mail_search = require("../icons/mail-search.js");
var import_mail_x = require("../icons/mail-x.js");
var import_mailbox = require("../icons/mailbox.js");
var import_mails = require("../icons/mails.js");
var import_megaphone = require("../icons/megaphone.js");
var import_megaphone_off = require("../icons/megaphone-off.js");
var import_message_circle = require("../icons/message-circle.js");
var import_message_circle_dashed_check = require("../icons/message-circle-dashed-check.js");
var import_message_circle_off = require("../icons/message-circle-off.js");
var import_message_circle_text = require("../icons/message-circle-text.js");
var import_message_circle_x = require("../icons/message-circle-x.js");
var import_message_square = require("../icons/message-square.js");
var import_message_square_diff = require("../icons/message-square-diff.js");
var import_message_square_lock = require("../icons/message-square-lock.js");
var import_message_square_off = require("../icons/message-square-off.js");
var import_message_square_x = require("../icons/message-square-x.js");
var import_messages_square = require("../icons/messages-square.js");
var import_newspaper = require("../icons/newspaper.js");
var import_phone = require("../icons/phone.js");
var import_phone_log = require("../icons/phone-log.js");
var import_phone_off = require("../icons/phone-off.js");
var import_quote = require("../icons/quote.js");
var import_radio = require("../icons/radio.js");
var import_radio_off = require("../icons/radio-off.js");
var import_reply = require("../icons/reply.js");
var import_rss = require("../icons/rss.js");
var import_satellite = require("../icons/satellite.js");
var import_satellite_dish = require("../icons/satellite-dish.js");
var import_send = require("../icons/send.js");
var import_send_to_back = require("../icons/send-to-back.js");
var import_share = require("../icons/share.js");
var import_share_2 = require("../icons/share-2.js");
var import_smartphone = require("../icons/smartphone.js");
var import_speech = require("../icons/speech.js");
var import_vibrate = require("../icons/vibrate.js");
var import_voicemail = require("../icons/voicemail.js");
