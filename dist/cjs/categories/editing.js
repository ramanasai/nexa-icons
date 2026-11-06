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
var editing_exports = {};
__export(editing_exports, {
  ALargeSmall: () => import_a_large_small.ALargeSmall,
  AlignEndHorizontal: () => import_align_end_horizontal.AlignEndHorizontal,
  AlignEndVertical: () => import_align_end_vertical.AlignEndVertical,
  AlignHorizontalSpaceBetween: () => import_align_horizontal_space_between.AlignHorizontalSpaceBetween,
  AlignStartHorizontal: () => import_align_start_horizontal.AlignStartHorizontal,
  AlignStartVertical: () => import_align_start_vertical.AlignStartVertical,
  AlignVerticalSpaceBetween: () => import_align_vertical_space_between.AlignVerticalSpaceBetween,
  Baseline: () => import_baseline.Baseline,
  Bold: () => import_letter_b.Bold,
  CaseLower: () => import_case_lower.CaseLower,
  CopyCheck: () => import_copy_check.CopyCheck,
  CopySlash: () => import_copy_slash.CopySlash,
  CopyX: () => import_copy_x.CopyX,
  Eraser: () => import_eraser.Eraser,
  Heading1: () => import_heading_1.Heading1,
  Heading2: () => import_heading_2.Heading2,
  Heading3: () => import_heading_3.Heading3,
  Heading4: () => import_heading_4.Heading4,
  Heading5: () => import_heading_5.Heading5,
  Heading6: () => import_heading_6.Heading6,
  Highlighter: () => import_highlighter.Highlighter,
  Italic: () => import_italic.Italic,
  Ligature: () => import_ligature.Ligature,
  List: () => import_list.List,
  ListCheck: () => import_list_check.ListCheck,
  ListChecks: () => import_list_checks.ListChecks,
  ListChevronsDownUp: () => import_list_chevrons_down_up.ListChevronsDownUp,
  ListChevronsUpDown: () => import_list_chevrons_up_down.ListChevronsUpDown,
  ListClock: () => import_list_clock.ListClock,
  ListCollapse: () => import_list_collapse.ListCollapse,
  ListOrdered: () => import_list_ordered.ListOrdered,
  ListSortAscending: () => import_list_sort_ascending.ListSortAscending,
  ListSortDescending: () => import_list_sort_descending.ListSortDescending,
  ListX: () => import_list_x.ListX,
  MailPen: () => import_mail_pen.MailPen,
  Pen: () => import_pen.Pen,
  PenLine: () => import_pen_line.PenLine,
  PenOff: () => import_pen_off.PenOff,
  PenSquare: () => import_square_pen.PenSquare,
  Pencil: () => import_pencil.Pencil,
  PencilLine: () => import_pencil_line.PencilLine,
  PencilOff: () => import_pencil_off.PencilOff,
  PencilSparkles: () => import_pencil_sparkles.PencilSparkles,
  Pilcrow: () => import_pilcrow.Pilcrow,
  Quote: () => import_quote.Quote,
  RemoveFormatting: () => import_remove_formatting.RemoveFormatting,
  Scissors: () => import_scissors.Scissors,
  SpellCheck: () => import_spell_check.SpellCheck,
  SpellCheck2: () => import_spell_check_2.SpellCheck2,
  Strikethrough: () => import_strikethrough.Strikethrough,
  Subscript: () => import_subscript.Subscript,
  Superscript: () => import_superscript.Superscript,
  Tag: () => import_tag.Tag,
  TextAlignStart: () => import_text_align_start.TextAlignStart,
  TextCursor: () => import_text_cursor.TextCursor,
  TextInitial: () => import_text_initial.TextInitial,
  TextSearch: () => import_text_search.TextSearch,
  TextWrap: () => import_text_wrap.TextWrap,
  Type: () => import_type.Type,
  TypeOutline: () => import_type_outline.TypeOutline,
  Underline: () => import_underline.Underline,
  UserPen: () => import_user_pen.UserPen,
  UserRoundPen: () => import_user_round_pen.UserRoundPen,
  WholeWord: () => import_whole_word.WholeWord,
  WifiPen: () => import_wifi_pen.WifiPen
});
module.exports = __toCommonJS(editing_exports);
var import_a_large_small = require("../icons/a-large-small.js");
var import_align_end_horizontal = require("../icons/align-end-horizontal.js");
var import_align_end_vertical = require("../icons/align-end-vertical.js");
var import_align_horizontal_space_between = require("../icons/align-horizontal-space-between.js");
var import_align_start_horizontal = require("../icons/align-start-horizontal.js");
var import_align_start_vertical = require("../icons/align-start-vertical.js");
var import_align_vertical_space_between = require("../icons/align-vertical-space-between.js");
var import_baseline = require("../icons/baseline.js");
var import_letter_b = require("../icons/letter-b.js");
var import_case_lower = require("../icons/case-lower.js");
var import_copy_check = require("../icons/copy-check.js");
var import_copy_slash = require("../icons/copy-slash.js");
var import_copy_x = require("../icons/copy-x.js");
var import_eraser = require("../icons/eraser.js");
var import_heading_1 = require("../icons/heading-1.js");
var import_heading_2 = require("../icons/heading-2.js");
var import_heading_3 = require("../icons/heading-3.js");
var import_heading_4 = require("../icons/heading-4.js");
var import_heading_5 = require("../icons/heading-5.js");
var import_heading_6 = require("../icons/heading-6.js");
var import_highlighter = require("../icons/highlighter.js");
var import_italic = require("../icons/italic.js");
var import_ligature = require("../icons/ligature.js");
var import_list = require("../icons/list.js");
var import_list_check = require("../icons/list-check.js");
var import_list_checks = require("../icons/list-checks.js");
var import_list_chevrons_down_up = require("../icons/list-chevrons-down-up.js");
var import_list_chevrons_up_down = require("../icons/list-chevrons-up-down.js");
var import_list_clock = require("../icons/list-clock.js");
var import_list_collapse = require("../icons/list-collapse.js");
var import_list_ordered = require("../icons/list-ordered.js");
var import_list_sort_ascending = require("../icons/list-sort-ascending.js");
var import_list_sort_descending = require("../icons/list-sort-descending.js");
var import_list_x = require("../icons/list-x.js");
var import_mail_pen = require("../icons/mail-pen.js");
var import_pen = require("../icons/pen.js");
var import_pen_line = require("../icons/pen-line.js");
var import_pen_off = require("../icons/pen-off.js");
var import_square_pen = require("../icons/square-pen.js");
var import_pencil = require("../icons/pencil.js");
var import_pencil_line = require("../icons/pencil-line.js");
var import_pencil_off = require("../icons/pencil-off.js");
var import_pencil_sparkles = require("../icons/pencil-sparkles.js");
var import_pilcrow = require("../icons/pilcrow.js");
var import_quote = require("../icons/quote.js");
var import_remove_formatting = require("../icons/remove-formatting.js");
var import_scissors = require("../icons/scissors.js");
var import_spell_check = require("../icons/spell-check.js");
var import_spell_check_2 = require("../icons/spell-check-2.js");
var import_strikethrough = require("../icons/strikethrough.js");
var import_subscript = require("../icons/subscript.js");
var import_superscript = require("../icons/superscript.js");
var import_tag = require("../icons/tag.js");
var import_text_align_start = require("../icons/text-align-start.js");
var import_text_cursor = require("../icons/text-cursor.js");
var import_text_initial = require("../icons/text-initial.js");
var import_text_search = require("../icons/text-search.js");
var import_text_wrap = require("../icons/text-wrap.js");
var import_type = require("../icons/type.js");
var import_type_outline = require("../icons/type-outline.js");
var import_underline = require("../icons/underline.js");
var import_user_pen = require("../icons/user-pen.js");
var import_user_round_pen = require("../icons/user-round-pen.js");
var import_whole_word = require("../icons/whole-word.js");
var import_wifi_pen = require("../icons/wifi-pen.js");
