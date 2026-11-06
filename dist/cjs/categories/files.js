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
var files_exports = {};
__export(files_exports, {
  Archive: () => import_archive.Archive,
  ArchiveX: () => import_archive_x.ArchiveX,
  BookCopy: () => import_book_copy.BookCopy,
  BookUser: () => import_book_user.BookUser,
  Certificate: () => import_certificate.Certificate,
  Clipboard: () => import_clipboard.Clipboard,
  ClipboardCheck: () => import_clipboard_check.ClipboardCheck,
  ClipboardClock: () => import_clipboard_clock.ClipboardClock,
  ClipboardMinus: () => import_clipboard_minus.ClipboardMinus,
  ClipboardPen: () => import_clipboard_pen.ClipboardPen,
  ClipboardPenLine: () => import_clipboard_pen_line.ClipboardPenLine,
  ClipboardPlus: () => import_clipboard_plus.ClipboardPlus,
  ClipboardType: () => import_clipboard_type.ClipboardType,
  ClipboardX: () => import_clipboard_x.ClipboardX,
  Copy: () => import_copy.Copy,
  CoverLetter: () => import_cover_letter.CoverLetter,
  Download: () => import_download.Download,
  File: () => import_file.File,
  FileBox: () => import_file_box.FileBox,
  FileClock: () => import_file_clock.FileClock,
  FileDatabase: () => import_file_database.FileDatabase,
  FileKey: () => import_file_key.FileKey,
  FilePen: () => import_file_pen.FilePen,
  FilePenLine: () => import_file_pen_line.FilePenLine,
  FileScan: () => import_file_scan.FileScan,
  FileSearch: () => import_file_search.FileSearch,
  FileSearchCorner: () => import_file_search_corner.FileSearchCorner,
  FileSpreadsheet: () => import_file_spreadsheet.FileSpreadsheet,
  FileText: () => import_file_text.FileText,
  FileUp: () => import_file_up.FileUp,
  Files: () => import_files.Files,
  Folder: () => import_folder.Folder,
  FolderCog: () => import_folder_cog.FolderCog,
  FolderDot: () => import_folder_dot.FolderDot,
  FolderGit2: () => import_folder_git_2.FolderGit2,
  FolderKanban: () => import_folder_kanban.FolderKanban,
  FolderKey: () => import_folder_key.FolderKey,
  FolderOpen: () => import_folder_open.FolderOpen,
  FolderPen: () => import_folder_pen.FolderPen,
  FolderSearch: () => import_folder_search.FolderSearch,
  FolderSync: () => import_folder_sync.FolderSync,
  FolderUsers: () => import_folder_users.FolderUsers,
  HardDrive: () => import_hard_drive.HardDrive,
  HardDriveDownload: () => import_hard_drive_download.HardDriveDownload,
  HardDriveUpload: () => import_hard_drive_upload.HardDriveUpload,
  Inbox: () => import_inbox.Inbox,
  NotepadText: () => import_notepad_text.NotepadText,
  NotepadTextDashed: () => import_notepad_text_dashed.NotepadTextDashed,
  Package: () => import_package.Package,
  Paperclip: () => import_paperclip.Paperclip,
  Printer: () => import_printer.Printer,
  Resume: () => import_resume.Resume,
  Save: () => import_save.Save,
  SaveCheck: () => import_save_check.SaveCheck,
  SaveOff: () => import_save_off.SaveOff,
  SavePen: () => import_save_pen.SavePen,
  SavePlus: () => import_save_plus.SavePlus,
  Scroll: () => import_scroll.Scroll,
  ScrollText: () => import_scroll_text.ScrollText,
  StickyNote: () => import_sticky_note.StickyNote,
  StickyNoteCheck: () => import_sticky_note_check.StickyNoteCheck,
  StickyNoteMinus: () => import_sticky_note_minus.StickyNoteMinus,
  StickyNoteOff: () => import_sticky_note_off.StickyNoteOff,
  StickyNotePlus: () => import_sticky_note_plus.StickyNotePlus,
  StickyNoteX: () => import_sticky_note_x.StickyNoteX,
  Transcript: () => import_transcript.Transcript,
  Trash2: () => import_trash.Trash2,
  Upload: () => import_upload.Upload,
  UploadCloud: () => import_cloud_upload.UploadCloud
});
module.exports = __toCommonJS(files_exports);
var import_archive = require("../icons/archive.js");
var import_archive_x = require("../icons/archive-x.js");
var import_book_copy = require("../icons/book-copy.js");
var import_book_user = require("../icons/book-user.js");
var import_certificate = require("../icons/certificate.js");
var import_clipboard = require("../icons/clipboard.js");
var import_clipboard_check = require("../icons/clipboard-check.js");
var import_clipboard_clock = require("../icons/clipboard-clock.js");
var import_clipboard_minus = require("../icons/clipboard-minus.js");
var import_clipboard_pen = require("../icons/clipboard-pen.js");
var import_clipboard_pen_line = require("../icons/clipboard-pen-line.js");
var import_clipboard_plus = require("../icons/clipboard-plus.js");
var import_clipboard_type = require("../icons/clipboard-type.js");
var import_clipboard_x = require("../icons/clipboard-x.js");
var import_copy = require("../icons/copy.js");
var import_cover_letter = require("../icons/cover-letter.js");
var import_download = require("../icons/download.js");
var import_file = require("../icons/file.js");
var import_file_box = require("../icons/file-box.js");
var import_file_clock = require("../icons/file-clock.js");
var import_file_database = require("../icons/file-database.js");
var import_file_key = require("../icons/file-key.js");
var import_file_pen = require("../icons/file-pen.js");
var import_file_pen_line = require("../icons/file-pen-line.js");
var import_file_scan = require("../icons/file-scan.js");
var import_file_search = require("../icons/file-search.js");
var import_file_search_corner = require("../icons/file-search-corner.js");
var import_file_spreadsheet = require("../icons/file-spreadsheet.js");
var import_file_text = require("../icons/file-text.js");
var import_file_up = require("../icons/file-up.js");
var import_files = require("../icons/files.js");
var import_folder = require("../icons/folder.js");
var import_folder_cog = require("../icons/folder-cog.js");
var import_folder_dot = require("../icons/folder-dot.js");
var import_folder_git_2 = require("../icons/folder-git-2.js");
var import_folder_kanban = require("../icons/folder-kanban.js");
var import_folder_key = require("../icons/folder-key.js");
var import_folder_open = require("../icons/folder-open.js");
var import_folder_pen = require("../icons/folder-pen.js");
var import_folder_search = require("../icons/folder-search.js");
var import_folder_sync = require("../icons/folder-sync.js");
var import_folder_users = require("../icons/folder-users.js");
var import_hard_drive = require("../icons/hard-drive.js");
var import_hard_drive_download = require("../icons/hard-drive-download.js");
var import_hard_drive_upload = require("../icons/hard-drive-upload.js");
var import_inbox = require("../icons/inbox.js");
var import_notepad_text = require("../icons/notepad-text.js");
var import_notepad_text_dashed = require("../icons/notepad-text-dashed.js");
var import_package = require("../icons/package.js");
var import_paperclip = require("../icons/paperclip.js");
var import_printer = require("../icons/printer.js");
var import_resume = require("../icons/resume.js");
var import_save = require("../icons/save.js");
var import_save_check = require("../icons/save-check.js");
var import_save_off = require("../icons/save-off.js");
var import_save_pen = require("../icons/save-pen.js");
var import_save_plus = require("../icons/save-plus.js");
var import_scroll = require("../icons/scroll.js");
var import_scroll_text = require("../icons/scroll-text.js");
var import_sticky_note = require("../icons/sticky-note.js");
var import_sticky_note_check = require("../icons/sticky-note-check.js");
var import_sticky_note_minus = require("../icons/sticky-note-minus.js");
var import_sticky_note_off = require("../icons/sticky-note-off.js");
var import_sticky_note_plus = require("../icons/sticky-note-plus.js");
var import_sticky_note_x = require("../icons/sticky-note-x.js");
var import_transcript = require("../icons/transcript.js");
var import_trash = require("../icons/trash.js");
var import_upload = require("../icons/upload.js");
var import_cloud_upload = require("../icons/cloud-upload.js");
