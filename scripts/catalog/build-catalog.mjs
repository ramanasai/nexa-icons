#!/usr/bin/env node
/**
 * Catalog expansion + categorisation for the Nexa Icons catalog.
 *
 *   node scripts/catalog/build-catalog.mjs          # writes raw/catalog-names.txt + data/categories.json
 *   CATALOG_DEBUG=1 node scripts/catalog/build-catalog.mjs
 *
 * Inputs
 *   /tmp/lucide-src/package/icon-nodes.json        canonical Lucide 1.70 geometry
 *   /tmp/lucide-src/package/tags.json              Lucide search tags
 *   /tmp/lucide-src/react/.../lucide-react.mjs     PascalCase export map
 *   raw/requested-names.txt                        the 168 originally requested names
 *   data/icons.json                                current 166-icon dataset (read-only)
 *
 * Outputs (only files this script writes)
 *   raw/catalog-names.txt                          PascalCase names, originals first
 *   data/categories.json                           {version,total,categories,iconCategories,uncategorized}
 *
 * It never modifies data/icons.json, data/swaps.json, src/, js/, go/, rust/,
 * gallery/, docs/, tests or package files.
 *
 * Selection heuristic (deterministic, no randomness):
 *   1. all 166 unique originals (from the 168 requested names; XIcon===X and
 *      TriangleAlert===AlertTriangle merged) are included first with curated
 *      categories;
 *   2. candidates = canonical Lucide 1.70 icons not already represented,
 *      de-duplicated by geometry/name and filtered for brand, creature and
 *      novelty icons;
 *   3. candidates are ranked by Lucide tag richness and balanced across 24
 *      categories to ~30 primary icons each (~650 total);
 *   4. a second "genuinely cross-cutting" category is added where keyword rules
 *      match and the category still has room (max 2 for most, 3 only curated).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const p = (...parts) => path.join(ROOT, ...parts);
const readJson = (file) => JSON.parse(fs.readFileSync(file, "utf8"));

const LUCIDE_ROOT = process.env.LUCIDE_SRC || "/tmp/lucide-src";
const NODES_FILE = path.join(LUCIDE_ROOT, "package/icon-nodes.json");
const TAGS_FILE = path.join(LUCIDE_ROOT, "package/tags.json");
const REACT_MAP_FILE = path.join(LUCIDE_ROOT, "react/package/dist/esm/lucide-react.mjs");

const TARGET_TOTAL = 1000; // expanded catalog
const MIN_TOTAL = 920;
const MAX_TOTAL = 1100;
const TARGET_PER_CATEGORY = 42; // 24 categories -> ~1000 primary slots
const MIN_PER_CATEGORY = 28;
const MAX_PER_CATEGORY = 65;

/* ------------------------------------------------------------------------- */
/* Categories                                                                */
/* ------------------------------------------------------------------------- */

/**
 * Ordered categories. `tokens` match kebab segments as exact/prefix/suffix/
 * infix tokens ("arrow" matches arrow-left; "map-pin" matches map-pin-off).
 * `exact` holds whole kebab ids whose single word (circle, square, ...) would
 * otherwise collide with compound icon names.
 */
const CATEGORIES = [
  {
    id: "places",
    label: "Places & Work",
    description: "Buildings, venues, offices, locations and work-related places.",
    tokens: ["building", "house", "store", "shop", "hotel", "hospital", "school", "church", "factory", "warehouse", "landmark", "bank", "pharmacy", "castle", "tent", "campground", "mountain", "tree", "trees", "tree-deciduous", "tree-pine", "palm-tree", "tree-palm", "city", "office", "apartment", "briefcase", "brick-wall", "fence", "dam", "utility-pole", "power-plant", "solar-panel", "wind-turbine", "map", "map-pin", "globe", "earth", "compass", "door-open", "door-closed", "container"],
  },
  {
    id: "finance",
    label: "Finance & Money",
    description: "Currency, payments, banking, invoices, pricing and financial data.",
    tokens: ["dollar-sign", "euro", "pound-sterling", "yen", "indian-rupee", "ruble", "swiss-franc", "franc", "banknote", "coins", "circle-dollar-sign", "badge-dollar-sign", "badge-euro", "badge-japanese-yen", "badge-pound-sterling", "badge-indian-rupee", "badge-russian-ruble", "badge-swiss-franc", "circle-euro", "circle-pound-sterling", "circle-japanese-yen", "circle-indian-rupee", "circle-russian-ruble", "circle-swiss-franc", "hand-coins", "wallet", "wallet-cards", "wallet-minimal", "credit-card", "debit-card", "receipt", "receipt-text", "piggy-bank", "landmark", "calculator", "percent", "badge-percent", "circle-percent", "file-invoice", "vault", "safe", "scale", "currency", "money", "cash", "payment", "invoice", "tax", "bank"],
  },
  {
    id: "health",
    label: "Health & Wellness",
    description: "Medical care, wellbeing, fitness, accessibility and body-related icons.",
    tokens: ["heart", "stethoscope", "pill", "tablets", "syringe", "thermometer", "activity", "brain", "bone", "microscope", "dna", "lungs", "ambulance", "hospital", "first-aid", "bandage", "vitamin", "dumbbell", "biceps-flexed", "accessibility", "person-standing", "baby", "footprints", "briefcase-medical", "scan-heart", "monitor-activity", "square-activity", "calendar-heart", "ear", "test-tube", "flask-conical", "medical", "health", "pulse", "doctor", "nurse", "radiation", "biohazard", "cigarette", "cigarette-off"],
  },
  {
    id: "food",
    label: "Food & Drink",
    description: "Meals, drinks, kitchen and restaurant icons.",
    tokens: ["coffee", "pizza", "cake", "utensils", "chef-hat", "wine", "beer", "ice-cream", "croissant", "hamburger", "sandwich", "salad", "soup", "candy", "cookie", "drumstick", "egg", "carrot", "citrus", "grape", "banana", "cherry", "dessert", "milk", "bottle", "cup-soda", "donut", "popcorn", "pretzel", "vegan", "vegetarian", "wheat", "ham", "beef", "chicken", "food", "drink", "kitchen", "cooking", "restaurant", "menu", "takeout", "refrigerator", "microwave", "blender", "martini", "hand-platter"],
  },
  {
    id: "weather",
    label: "Weather & Nature",
    description: "Sun, moon, clouds, precipitation, wind, plants and temperature.",
    tokens: ["sun", "sunrise", "sunset", "moon", "cloud", "rainbow", "snowflake", "wind", "thermometer", "umbrella", "droplet", "droplets", "tornado", "haze", "fog", "eclipse", "meteor", "waves", "leaf", "clover", "flower", "sprout"],
  },
  {
    id: "education",
    label: "Education & Learning",
    description: "School, books, study, science and presentation icons.",
    tokens: ["graduation-cap", "book", "books", "library", "notebook", "school", "backpack", "presentation", "microscope", "flask", "atom", "orbit", "ruler", "pencil-ruler", "student", "teacher", "university", "academic", "learn", "study", "education", "scroll-text", "telescope", "drafting-compass"],
  },
  {
    id: "travel",
    label: "Travel & Transport",
    description: "Vehicles, routes, trips, tickets and travel luggage.",
    tokens: ["plane", "car", "caravan", "bus", "train", "tram", "bike", "bicycle", "ship", "boat", "sailboat", "ferry", "anchor", "fuel", "truck", "luggage", "suitcase", "rocket", "tent", "campground", "parking", "ticket", "tickets", "scooter", "wheelchair", "traffic-cone", "road", "route", "compass", "map", "mountain", "hotel"],
  },
  {
    id: "commerce",
    label: "Shopping & Commerce",
    description: "Shopping, products, orders, delivery, tags, discounts and gifts.",
    tokens: ["shopping-cart", "shopping-bag", "shopping-basket", "store", "shop", "tag", "tags", "percent", "gift", "package", "truck", "packages", "receipt", "credit-card", "debit-card", "barcode", "qr-code", "scan-barcode", "scan-qr-code", "market", "sale", "price", "discount", "delivery", "shipping", "order", "checkout", "banknote", "coins", "hand-coins", "wallet", "piggy-bank", "factory", "warehouse", "container", "scan-line"],
  },
  {
    id: "security",
    label: "Security & Privacy",
    description: "Locks, keys, shields, authentication, scanning and protection.",
    tokens: ["lock", "unlock", "key", "key-round", "shield", "fingerprint", "scan-face", "scan-eye", "eye", "eye-off", "eye-closed", "siren", "guard", "police", "privacy", "secure", "password", "auth", "access", "user-shield", "file-lock", "file-key", "vault", "safe", "radiation", "biohazard", "venetian-mask", "gavel", "lock-open", "key-square", "book-lock", "book-key", "globe-lock", "earth-lock", "brick-wall-shield", "brick-wall-fire", "rotate-ccw-key", "user-key", "user-lock", "user-round-key", "shield-user"],
  },
  {
    id: "communication",
    label: "Communication",
    description: "Mail, messages, phone, notifications, contacts and sharing.",
    tokens: ["mail", "mails", "mailbox", "message", "messages-square", "phone", "send", "bell", "megaphone", "inbox", "at-sign", "rss", "headset", "voicemail", "speech", "chat", "comment", "reply", "forward", "share", "share-2", "contact", "contact-round", "satellite", "podcast", "radio"],
  },
  {
    id: "media",
    label: "Media & Camera",
    description: "Audio, video, images, playback and recording.",
    tokens: ["play", "pause", "stop-circle", "skip-back", "skip-forward", "rewind", "fast-forward", "volume", "music", "film", "video", "clapperboard", "camera", "image", "images", "mic", "headphones", "radio", "tv", "podcast", "audio", "speaker", "disc", "aperture", "webcam", "photo", "movie", "airplay", "cast", "subtitles", "captions", "list-music", "circle-play", "circle-pause", "circle-stop", "boombox", "book-audio", "book-headphones"],
  },
  {
    id: "files",
    label: "Files & Folders",
    description: "Documents, folders, archives, attachments and file operations.",
    tokens: ["file", "files", "folder", "paperclip", "archive", "clipboard", "save", "hard-drive", "scroll", "sticky-note", "notepad-text"],
  },
  {
    id: "data",
    label: "Data & Analytics",
    description: "Charts, graphs, metrics, databases, tables and reports.",
    tokens: ["chart", "trending", "gauge", "database", "table", "network", "workflow", "binary", "sigma", "target", "crosshair", "scan-line", "scan-box", "scan-search", "scan-square", "scan-text", "radar", "square-chart-gantt"],
  },
  {
    id: "devices",
    label: "Devices & Hardware",
    description: "Phones, computers, peripherals, power, connectivity and hardware.",
    tokens: ["smartphone", "monitor", "laptop", "tablet", "mouse", "mouse-pointer", "keyboard", "printer", "hard-drive", "cpu", "memory-stick", "battery", "plug", "power", "wifi", "bluetooth", "usb", "ethernet-port", "cable", "router", "server", "disc-drive", "scanner", "projector", "remote", "radio-receiver", "monitor-cloud"],
  },
  {
    id: "development",
    label: "Development",
    description: "Code, terminals, Git, APIs, containers and developer tooling.",
    tokens: ["code", "terminal", "command", "git", "bug", "braces", "brackets", "regex", "workflow", "network", "server", "container", "boxes", "box", "puzzle", "webhook", "scan-code", "variable", "binary", "cpu", "blocks", "component", "qr-code"],
  },
  {
    id: "editing",
    label: "Editing & Text",
    description: "Writing, formatting, text lists, selection and clipboard editing.",
    tokens: ["pencil", "pen", "pen-tool", "square-pen", "edit", "text-cursor", "type", "bold", "italic", "underline", "strikethrough", "align", "list", "indent", "wrap-text", "scissors", "clipboard", "copy", "paste", "eraser", "highlighter", "notebook-pen", "heading", "quote", "pilcrow", "case", "baseline", "remove-formatting", "spell-check", "book-open-check", "file-pen", "text", "a-large-small", "letter-text", "ligature", "subscript", "superscript", "whole-word"],
  },
  {
    id: "design",
    label: "Design & Shapes",
    description: "Colour, drawing, typography, shapes, layers and vector tools.",
    tokens: ["palette", "paintbrush", "paint-bucket", "brush", "shapes", "layers", "component", "crop", "pipette", "swatch-book", "swatches", "blend", "contrast", "spline", "frame", "stamp", "wand", "ruler", "move-3d", "rotate-3d", "scale-3d", "axis-3d", "box-select", "lasso", "vector-square", "bezier", "drafting-compass", "squircle", "rectangle-horizontal", "rectangle-vertical", "cylinder", "cone", "cuboid", "pyramid", "torus", "tangent", "signature", "loader-pinwheel"],
    exact: ["circle", "square", "triangle", "hexagon", "octagon", "diamond", "group", "ungroup", "sparkles", "star"],
  },
  {
    id: "time",
    label: "Time & Calendar",
    description: "Clocks, timers, calendars, schedules and history.",
    tokens: ["clock", "timer", "alarm-clock", "calendar", "history", "hourglass", "watch", "stopwatch", "time", "schedule", "deadline", "duration", "date", "day", "month", "year", "badge-clock"],
  },
  {
    id: "people",
    label: "People & Users",
    description: "People, accounts, teams, contacts and reactions.",
    tokens: ["user", "users", "contact", "person-standing", "accessibility", "baby", "footprints", "smile", "frown", "meh", "angry", "annoyed", "laugh", "hand", "thumbs-up", "thumbs-down", "heart-handshake", "id-card", "group", "family", "people", "scan-face", "venetian-mask"],
  },
  {
    id: "navigation",
    label: "Navigation & Maps",
    description: "Maps, routes, wayfinding, location and home navigation.",
    tokens: ["compass", "navigation", "navigate", "route", "signpost", "milestone", "waypoints", "locate", "map", "globe", "earth", "home", "house", "external-link"],
  },
  {
    id: "layout",
    label: "Layout & UI",
    description: "Panels, grids, columns, sidebars, sizing and view controls.",
    tokens: ["layout", "columns", "rows", "panel", "panels", "sidebar", "split", "maximize", "minimize", "expand", "contract", "fullscreen", "grid", "kanban", "kanban", "gallery-thumbnails", "gallery-horizontal", "gallery-vertical", "between-horizontal", "between-vertical", "stretch-horizontal", "stretch-vertical", "shrink", "scaling", "ratio", "separator"],
  },
  {
    id: "status",
    label: "Status & Feedback",
    description: "Success, warning, errors, loading, badges, flags and signals.",
    tokens: ["alert", "info", "circle-alert", "triangle-alert", "circle-check", "circle-x", "circle-question", "circle-help", "octagon-alert", "octagon-x", "square-alert", "square-check", "square-x", "badge-check", "badge-alert", "badge-x", "badge-question-mark", "badge-info", "badge-help", "badge-plus", "badge-minus", "ban", "loader", "flag", "signal", "award", "trophy", "medal", "crown", "verified", "zap"],
  },
  {
    id: "actions",
    label: "Actions & Controls",
    description: "Common UI actions: create, search, copy, delete, save, share, filter.",
    tokens: ["plus", "minus", "check", "x", "search", "copy", "trash", "edit", "save", "download", "upload", "share", "filter", "funnel", "sort", "pin", "zoom-in", "zoom-out", "settings", "sliders", "toggle", "power", "link", "unlink", "external-link", "grab", "hand", "pointer", "ellipsis", "more-horizontal", "more-vertical", "grip", "loader", "circle-dashed", "ban", "eye", "bookmark", "star", "heart", "thumbs-up", "thumbs-down", "scan", "circle-slash", "circle-off", "refresh", "rotate", "undo", "redo", "repeat", "shuffle", "x-line", "square-dashed"],
  },
  {
    id: "arrows",
    label: "Arrows & Direction",
    description: "Directional arrows, chevrons, corners and move/rotate controls.",
    tokens: ["arrow", "chevron", "chevrons", "move", "corner-down", "corner-left", "corner-right", "corner-up", "iteration-ccw", "iteration-cw", "undo", "redo", "refresh", "rotate", "repeat", "shuffle", "trending", "external-link", "maximize", "minimize", "expand", "contract", "fullscreen", "flip", "axis-3d", "scaling", "stretch", "shrink", "circle-chevrons", "square-chevron", "square-chevrons", "circle-chevron"],
  },
];

// Specific categories first: generic catch-alls (places, actions) go last so a
// shield/firewall icon is security, a hospital is health, a store is commerce.
const PREFERRED_ORDER = [
  "health", "finance", "food", "weather", "education", "travel", "commerce", "security",
  "communication", "media", "files", "data", "devices", "development", "editing", "design",
  "time", "people", "navigation", "layout", "status", "actions", "arrows", "places",
];
CATEGORIES.sort((a, b) => PREFERRED_ORDER.indexOf(a.id) - PREFERRED_ORDER.indexOf(b.id));
const categoryById = new Map(CATEGORIES.map((category) => [category.id, category]));
const categoryOrder = new Map(CATEGORIES.map((category, index) => [category.id, index]));

/* ------------------------------------------------------------------------- */
/* Curated categorisation                                                    */
/* ------------------------------------------------------------------------- */

/** Explicit categories for all 166 originals (1-3 ids each; 2 is the norm). */
const ORIGINAL_CATEGORIES = {
  Activity: ["health", "data"],
  AlertCircle: ["status"],
  AlertTriangle: ["status"],
  Archive: ["files"],
  ArrowDown: ["arrows"],
  ArrowDownRight: ["arrows"],
  ArrowLeft: ["arrows"],
  ArrowRight: ["arrows"],
  ArrowUp: ["arrows"],
  ArrowUpDown: ["arrows"],
  ArrowUpRight: ["arrows"],
  AtSign: ["communication", "people"],
  Award: ["status", "people"],
  BadgeCheck: ["status", "people"],
  Ban: ["status", "security"],
  BarChart2: ["data"],
  BarChart3: ["data"],
  Bell: ["communication", "status"],
  Bold: ["editing", "design"],
  BookUser: ["people", "files"],
  Bookmark: ["actions"],
  Briefcase: ["places", "commerce"],
  Building: ["places"],
  Building2: ["places"],
  Calendar: ["time"],
  CalendarClock: ["time", "data"],
  CalendarDays: ["time"],
  CalendarSync: ["time", "development"],
  Camera: ["media", "design"],
  ChartLine: ["data"],
  Check: ["actions", "status"],
  CheckCircle: ["status"],
  CheckCircle2: ["status"],
  CheckSquare: ["status"],
  ChevronDown: ["arrows"],
  ChevronLeft: ["arrows"],
  ChevronRight: ["arrows"],
  ChevronUp: ["arrows"],
  ChevronsLeftRight: ["arrows"],
  ChevronsUpDown: ["arrows"],
  Circle: ["design"],
  Clock: ["time"],
  Code: ["development"],
  Copy: ["files", "actions"],
  Crown: ["status", "people"],
  DollarSign: ["finance"],
  Download: ["files"],
  ExternalLink: ["navigation", "actions"],
  Eye: ["security"],
  EyeOff: ["security"],
  FileClock: ["files", "time"],
  FileSearch: ["files"],
  FileSpreadsheet: ["files", "data"],
  FileText: ["files"],
  FileUp: ["files"],
  Filter: ["actions"],
  Fingerprint: ["security"],
  Flame: ["status", "weather"],
  FolderGit2: ["files", "development"],
  FolderOpen: ["files"],
  Gauge: ["data", "status"],
  Gift: ["commerce", "status"],
  Globe: ["navigation", "places"],
  GraduationCap: ["education"],
  Grid3x3: ["layout", "design"],
  Hand: ["people"],
  Heading2: ["editing", "design"],
  Heart: ["health"],
  HeartOff: ["health"],
  History: ["time", "data"],
  Home: ["navigation", "places"],
  ImageIcon: ["media", "design"],
  ImagePlus: ["media"],
  Inbox: ["communication", "files"],
  Info: ["status"],
  Italic: ["editing", "design"],
  Key: ["security"],
  KeyRound: ["security"],
  Languages: ["communication", "education"],
  Layers: ["design", "layout"],
  LayoutDashboard: ["layout", "data"],
  LayoutGrid: ["layout"],
  LifeBuoy: ["status", "security"],
  Link2: ["actions"],
  LinkIcon: ["actions"],
  List: ["editing", "layout"],
  ListOrdered: ["editing"],
  Loader2: ["status", "development"],
  Lock: ["security"],
  LogOut: ["navigation", "actions"],
  Magnet: ["development", "actions"],
  Mail: ["communication"],
  MailCheck: ["communication", "status"],
  MailPlus: ["communication"],
  MapPin: ["places", "navigation"],
  MessageSquare: ["communication"],
  Minus: ["actions"],
  Monitor: ["devices"],
  Moon: ["weather", "design"],
  MoonStar: ["weather", "status"],
  MoreHorizontal: ["actions"],
  MoreVertical: ["actions"],
  MoveHorizontal: ["arrows"],
  Newspaper: ["media", "communication"],
  Palette: ["design"],
  PanelLeftClose: ["layout"],
  PanelLeftOpen: ["layout"],
  Paperclip: ["files"],
  PenSquare: ["editing", "design"],
  Pencil: ["editing"],
  PencilLine: ["editing", "design"],
  Percent: ["finance", "commerce"],
  Pin: ["places", "actions"],
  Plane: ["travel"],
  Plug: ["devices"],
  Plus: ["actions"],
  PlusCircle: ["actions"],
  Power: ["devices", "actions"],
  Quote: ["editing", "communication"],
  Radar: ["data", "devices"],
  Radio: ["media", "communication"],
  RefreshCw: ["arrows", "actions"],
  Repeat: ["arrows"],
  Rocket: ["travel", "development"],
  RotateCcw: ["arrows"],
  Rss: ["media", "communication"],
  ScrollText: ["files", "education"],
  Search: ["actions"],
  Send: ["communication", "actions"],
  Settings: ["actions", "development"],
  Share2: ["communication", "actions"],
  Shield: ["security"],
  ShieldAlert: ["security", "status"],
  ShieldCheck: ["security", "status"],
  SlidersHorizontal: ["actions", "layout"],
  Smartphone: ["devices", "communication"],
  Sparkles: ["design", "status"],
  Square: ["design", "layout"],
  Star: ["actions"],
  StickyNote: ["files"],
  Strikethrough: ["editing", "design"],
  Sun: ["weather", "design"],
  Tag: ["commerce", "editing"],
  Target: ["data", "actions"],
  ThumbsUp: ["people", "status"],
  Timer: ["time"],
  Trash2: ["files", "actions"],
  TrendingDown: ["data", "arrows"],
  TrendingUp: ["data", "arrows"],
  Trophy: ["status", "people"],
  Underline: ["editing", "design"],
  Undo2: ["actions", "arrows"],
  Upload: ["files"],
  UploadCloud: ["files"],
  User: ["people"],
  UserCheck: ["people", "status"],
  UserMinus: ["people"],
  UserPlus: ["people"],
  Users: ["people"],
  Vibrate: ["devices", "communication"],
  Video: ["media"],
  Wand2: ["design"],
  Wrench: ["development", "actions"],
  X: ["actions"],
  XCircle: ["status"],
  Zap: ["status", "development"],
};

/** Small curated map for new icons where keyword matching alone is misleading. */
const NEW_OVERRIDES = {
  Handshake: ["people", "commerce"],
  Server: ["devices", "development"],
  Workflow: ["development", "data"],
  Database: ["data", "development"],
  Presentation: ["education", "data"],
  Package: ["commerce", "files"],
  Receipt: ["finance", "commerce"],
  Wallet: ["finance", "commerce"],
  CreditCard: ["finance", "commerce"],
  Percent: ["finance", "commerce"],
  ShieldCheck: ["security", "status"],
  ShoppingBag: ["commerce"],
  ShoppingBasket: ["commerce"],
  Truck: ["commerce", "travel"],
  Umbrella: ["weather", "travel"],
  AlarmClock: ["time"],
  TrainFront: ["travel"],
  BusFront: ["travel"],
  PlaneTakeoff: ["travel"],
  PlaneLanding: ["travel"],
  Fuel: ["travel", "commerce"],
  Landmark: ["finance", "places"],
  Map: ["navigation", "places"],
  Navigation: ["navigation"],
  Route: ["navigation", "travel"],
  Compass: ["navigation", "travel"],
  Printer: ["devices", "files"],
  Projector: ["devices", "media"],
  Speaker: ["media", "devices"],
  HardDrive: ["devices", "files"],
  Watch: ["time", "devices"],
  Microscope: ["education", "health"],
  FlaskConical: ["education", "health"],
  TestTube: ["education", "health"],
  Dna: ["health", "education"],
  Brain: ["health", "education"],
  HeartPulse: ["health", "status"],
  Stethoscope: ["health"],
  Syringe: ["health"],
  Pill: ["health"],
  Thermometer: ["health", "weather"],
  Siren: ["security", "status"],
  ScanFace: ["security", "people"],
  IdCard: ["people", "security"],
  Gavel: ["security", "status"],
  Scale: ["finance", "security"],
  Factory: ["places", "commerce"],
  Warehouse: ["places", "commerce"],
  Store: ["commerce", "places"],
  Hotel: ["travel", "places"],
  ChefHat: ["food"],
  Coffee: ["food"],
  Utensils: ["food"],
  PaintBucket: ["design"],
  PenTool: ["design", "editing"],
  Brush: ["design"],
  Component: ["design", "development"],
  Blocks: ["layout", "development"],
  Webhook: ["development"],
  Cpu: ["devices", "development"],
  Smartphone: ["devices", "communication"],
  Tablet: ["devices"],
  Laptop: ["devices"],
  Monitor: ["devices"],
  Keyboard: ["devices"],
  Mouse: ["devices"],
  Battery: ["devices", "status"],
  Wifi: ["devices", "status"],
  Usb: ["devices"],
  PackageOpen: ["commerce", "files"],
  CloudBackup: ["files", "data"],
  CloudDownload: ["files"],
  CloudUpload: ["files"],
  CloudCog: ["devices", "development"],
  CloudOff: ["devices", "status"],
  CloudAlert: ["status", "weather"],
  CloudCheck: ["status", "weather"],
  Watch: ["time", "devices"],
  Banknote: ["finance"],
  BoxSelect: ["design"],
  ServerCog: ["devices", "development"],
  HeartHandshake: ["people", "health"],
  CloudSync: ["files", "data"],
  MonitorCloud: ["devices", "data"],
  BookHeart: ["education", "status"],
  BookCopy: ["education", "files"],
  BookOpenCheck: ["education", "status"],
  BookOpenText: ["education"],
  BookText: ["education"],
  BookType: ["education", "editing"],
  BookAudio: ["education", "media"],
  BookHeadphones: ["education", "media"],
  BookImage: ["education", "media"],
  FileHeart: ["files", "status"],
  FolderHeart: ["files", "status"],
  MessageCircleHeart: ["communication", "status"],
  MessageSquareHeart: ["communication", "status"],
  HouseHeart: ["places", "status"],
  CalendarHeart: ["time", "status"],
  BoomBox: ["media"],
  MonitorActivity: ["devices", "health"],
  SquareActivity: ["health"],
  RotateCcwKey: ["security"],
  ShieldHouse: ["security", "places"],
  EarthLock: ["security", "navigation"],
  GlobeLock: ["security", "navigation"],
  UserGroup: ["people"],
  UserRoundGroup: ["people"],
  UserPen: ["people", "editing"],
  UserRoundPen: ["people", "editing"],
  MailPen: ["communication", "editing"],
  MapPinPen: ["navigation", "places"],
  WifiPen: ["devices", "editing"],
  ScanHeart: ["health"],
  SoapDispenserDroplet: ["health"],
};

/** Whole-kebab exclusions: brand logos, creatures and novelty/pure-fun icons. */
const EXCLUDED_EXACT = new Set([
  "apple", "bitcoin", "chrome", "github", "gitlab", "twitter", "facebook", "instagram",
  "linkedin", "youtube", "twitch", "slack", "figma", "firefox", "safari", "opera", "edge",
  "discord", "whatsapp", "telegram", "tiktok", "spotify", "windows", "android", "linux",
  "nvidia", "vercel", "npm", "docker", "kubernetes", "wordpress", "dribbble", "behance",
  "pinterest", "reddit", "snapchat", "paypal", "stripe", "amazon", "google", "microsoft",
  "meta", "netflix", "openai", "claude", "copilot", "gemini", "brave", "tor", "proton",
  "signal", "messenger", "zoom", "teams", "skype", "trello", "jira", "notion", "linear",
  "netlify", "cloudflare", "aws", "gcp", "azure",
]);
const EXCLUDED_TOKENS = [
  "cat", "dog", "bird", "birdhouse", "turtle", "snail", "squirrel", "rabbit", "rat", "pig",
  "shrimp", "worm", "ghost", "skull", "alien", "dice", "dices", "clown", "party-popper",
  "fishing-hook", "fishing-rod", "gamepad", "gamepad-directional", "joystick", "paw-print",
  "crab", "octopus", "whale", "dolphin", "frog",
];

/* ------------------------------------------------------------------------- */
/* Helpers                                                                   */
/* ------------------------------------------------------------------------- */

const pascal = (kebab) =>
  kebab
    .split("-")
    .filter(Boolean)
    .map((part) =>
      /^\d+[a-z]$/.test(part) ? part.slice(0, -1) + part.slice(-1).toUpperCase() : part[0].toUpperCase() + part.slice(1)
    )
    .join("");

const compact = (value) => String(value).toLowerCase().replace(/[\s_-]+/g, "");
const isSorted = (arr) => arr.every((value, index) => index === 0 || String(arr[index - 1]) <= String(value));

/**
 * Root-first matching: a token matches when the kebab id *is* the token or
 * *starts with* it. Suffix/infix matching is deliberately not used — it made
 * "file-heart" a health icon and "user-group" a design icon. Genuinely compound
 * names are listed with their full prefix (e.g. "shopping-cart").
 */
function matchesToken(kebab, tokens) {
  for (const token of tokens) {
    if (kebab === token) return true;
    if (kebab.startsWith(`${token}-`)) return true;
  }
  return false;
}

const VARIANT_SUFFIX = /-(off|on|x|check|check-big|check-inside|plus|minus|arrow-up|arrow-down|arrow-left|arrow-right|alert|question-mark|slash|ban|dashed|dashed-check|dot|exclamation-point|exclamation|search|heart|star|user|pen|lock|key|cloud|code|clock|play|pause|stop|up|down|left|right|2|3|4)$/;
const rootOf = (kebab) => kebab.split("-")[0];
/** Base/root icons get a bonus so "Wallet" beats "WalletCards" and "File" beats "FileAxis3D". */
function familyBonus(kebab, rootBases) {
  const root = rootOf(kebab);
  if (kebab === root) return 55;
  const base = rootBases.get(root);
  if (base && kebab === base) return 22;
  return 0;
}
function scoreCandidate(kebab, iconTags, rootBases) {
  const segments = kebab.split("-").length;
  const variantPenalty = VARIANT_SUFFIX.test(kebab) ? 38 : 0;
  return (
    iconTags.length * 5 -
    (segments - 1) * 20 -
    Math.max(0, kebab.length - 16) * 0.8 -
    variantPenalty +
    (rootBases ? familyBonus(kebab, rootBases) : 0)
  );
}

function matchedCategories(kebab) {
  return CATEGORIES.filter(
    (category) =>
      matchesToken(kebab, category.tokens) ||
      (category.exact && category.exact.includes(kebab))
  ).map((category) => category.id);
}

function validateCategoryIds(ids, label) {
  const unknown = ids.filter((id) => !categoryById.has(id));
  if (unknown.length) throw new Error(`${label}: unknown category ids ${unknown.join(", ")}`);
  if (ids.length < 1 || ids.length > 3) throw new Error(`${label}: expected 1-3 categories, got ${ids.length}`);
  return ids;
}

function loadExportMap() {
  const source = fs.readFileSync(REACT_MAP_FILE, "utf8");
  const map = new Map();
  const re = /export \{([^}]+)\} from '\.\/icons\/([^']+)\.mjs';/g;
  for (const match of source.matchAll(re)) {
    const names = match[1].split(",").map((part) => part.trim().replace(/^default as /, ""));
    if (names.length) map.set(match[2], names);
  }
  return map;
}

/* ------------------------------------------------------------------------- */
/* Inputs                                                                    */
/* ------------------------------------------------------------------------- */

const failures = [];
const fail = (message) => failures.push(message);

for (const file of [NODES_FILE, TAGS_FILE, REACT_MAP_FILE]) {
  if (!fs.existsSync(file)) fail(`missing Lucide source file: ${file} (set LUCIDE_SRC)`);
}
if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

const nodes = readJson(NODES_FILE);
const tags = readJson(TAGS_FILE);
const exportMap = loadExportMap();
const dataset = readJson(p("data/icons.json"));
const requested = fs
  .readFileSync(p("raw/requested-names.txt"), "utf8")
  .split("\n")
  .map((line) => line.trim())
  .filter(Boolean);

/* Resolve the 168 requested names to canonical dataset display names.
 *
 * raw/resolved.json is the source snapshot of the original resolution (it
 * still names XIcon/TriangleAlert); the generated dataset has already merged
 * those into X/AlertTriangle. Raw is read-only for this script. */
const RESOLVED_FILE = p("raw/resolved.json");
let resolvedEntries = [];
if (fs.existsSync(RESOLVED_FILE)) {
  const resolved = readJson(RESOLVED_FILE);
  if (Array.isArray(resolved.resolved)) resolvedEntries = resolved.resolved;
}
const DEDUPE_DISPLAY = { XIcon: "X", TriangleAlert: "AlertTriangle" };
const requestedIcons = [];
for (const [index, name] of requested.entries()) {
  const entry =
    resolvedEntries[index] && resolvedEntries[index].name === name
      ? resolvedEntries[index]
      : resolvedEntries.find((item) => item.name === name);
  let kebab = entry?.kebab;
  let displayName = entry?.name;
  if (!kebab) {
    const found = dataset.icons.find(
      (icon) =>
        compact(icon.name) === compact(name) ||
        compact(icon.kebab) === compact(name) ||
        icon.aliases.some((alias) => compact(alias) === compact(name))
    );
    if (!found) {
      fail(`requested name cannot be resolved: ${name}`);
      continue;
    }
    kebab = found.kebab;
    displayName = found.name;
  }
  const datasetIcon = dataset.icons.find((icon) => icon.kebab === kebab);
  const canonicalName = datasetIcon?.name || DEDUPE_DISPLAY[displayName] || displayName;
  requestedIcons.push({ requested: name, icon: { name: canonicalName, kebab } });
}
const originalNames = [...new Set(requestedIcons.map((entry) => entry.icon.name))];
if (originalNames.length !== 166) fail(`expected 166 unique originals, got ${originalNames.length}`);

/**
 * The generated dataset (data/icons.json) can already contain an older,
 * expanded catalog when this script runs again. The catalog generator is
 * therefore anchored on raw/requested-names.txt + Lucide 1.70 only: the 168
 * requested names define the 166 originals, and everything else is re-selected
 * deterministically from Lucide. Re-running is idempotent even after the Lead
 * has regenerated data/icons.json from a previous catalog.
 */
const originalIcons = [];
const seenOriginal = new Set();
for (const entry of requestedIcons) {
  const name = entry.icon.name;
  if (seenOriginal.has(name)) continue;
  seenOriginal.add(name);
  const kebab = entry.icon.kebab;
  if (!nodes[kebab]) {
    fail(`original "${name}" (${kebab}) has no Lucide 1.70 geometry`);
    continue;
  }
  originalIcons.push({
    name,
    kebab,
    tags: tags[kebab] || [],
    nodes: nodes[kebab],
    categories: ORIGINAL_CATEGORIES[name],
    original: true,
  });
}
if (originalIcons.length !== 166) fail(`expected 166 original icon records, got ${originalIcons.length}`);

/* Every original must have an explicit, valid category list; no extras. */
const datasetNames = new Set(originalIcons.map((icon) => icon.name));
for (const name of datasetNames) {
  if (!ORIGINAL_CATEGORIES[name]) fail(`missing ORIGINAL_CATEGORIES entry for ${name}`);
}
for (const name of Object.keys(ORIGINAL_CATEGORIES)) {
  if (!datasetNames.has(name)) fail(`ORIGINAL_CATEGORIES has an entry not in the original 166: ${name}`);
  try {
    validateCategoryIds(ORIGINAL_CATEGORIES[name], name);
  } catch (error) {
    fail(error.message);
  }
}

/* ------------------------------------------------------------------------- */
/* Candidate pool                                                            */
/* ------------------------------------------------------------------------- */

const existingGeo = new Map(originalIcons.map((icon) => [JSON.stringify(icon.nodes), icon.name]));
const existingNames = new Set(originalIcons.map((icon) => compact(icon.name)));
const usedKebabs = new Set(originalIcons.map((icon) => icon.kebab));

const candidates = [];
const skipped = { represented: 0, duplicateGlyph: 0, nameCollision: 0, excluded: 0, noCategory: 0 };
for (const kebab of Object.keys(nodes)) {
  if (usedKebabs.has(kebab)) {
    skipped.represented += 1;
    continue;
  }
  if (EXCLUDED_EXACT.has(kebab) || matchesToken(kebab, EXCLUDED_TOKENS)) {
    skipped.excluded += 1;
    continue;
  }
  if (existingGeo.has(JSON.stringify(nodes[kebab]))) {
    skipped.duplicateGlyph += 1;
    continue;
  }
  const name = pascal(kebab);
  if (existingNames.has(compact(name))) {
    skipped.nameCollision += 1;
    continue;
  }
  const matched = matchedCategories(kebab);
  if (matched.length === 0) {
    skipped.noCategory += 1;
    continue;
  }
  candidates.push({
    kebab,
    name,
    tags: tags[kebab] || [],
    nodes: nodes[kebab],
    categories: NEW_OVERRIDES[name] ? validateCategoryIds([...NEW_OVERRIDES[name]], name) : [matched[0]],
    matched,
    score: scoreCandidate(kebab, tags[kebab] || [])
  });
}

// Deterministic de-duplication of display names (keep richest tags first).
const byName = new Map();
for (const candidate of [...candidates].sort((a, b) => b.score - a.score || a.kebab.localeCompare(b.kebab))) {
  if (byName.has(compact(candidate.name))) {
    skipped.nameCollision += 1;
    continue;
  }
  byName.set(compact(candidate.name), candidate);
}
const pool = [...byName.values()];
// Shortest kebab per root family = the base icon of that family.
const rootBases = new Map();
for (const candidate of pool) {
  const root = rootOf(candidate.kebab);
  const current = rootBases.get(root);
  if (!current || candidate.kebab.length < current.length) rootBases.set(root, candidate.kebab);
}
for (const candidate of pool) {
  candidate.score = scoreCandidate(candidate.kebab, candidate.tags, rootBases);
}
if (process.env.CATALOG_DEBUG) {
  for (const name of ["Wallet", "CreditCard", "File", "Wifi", "Receipt", "Banknote", "Music2", "Monitor"]) {
    const candidate = pool.find((item) => item.name === name);
    console.log(`candidate ${name}:`, candidate ? { kebab: candidate.kebab, score: candidate.score, cats: candidate.categories } : "MISSING");
  }
}
const poolByPrimary = new Map(CATEGORIES.map((category) => [category.id, []]));
for (const candidate of pool) poolByPrimary.get(candidate.categories[0]).push(candidate);

/* ------------------------------------------------------------------------- */
/* Selection                                                                 */
/* ------------------------------------------------------------------------- */

const selected = new Map();
const newFamilyCounts = new Map();
const counts = new Map(CATEGORIES.map((category) => [category.id, 0]));
const addIcon = (record) => {
  if (selected.has(compact(record.name))) return false;
  selected.set(compact(record.name), record);
  if (!record.original) {
    const root = rootOf(record.kebab);
    newFamilyCounts.set(root, (newFamilyCounts.get(root) || 0) + 1);
  }
  for (const id of record.categories) counts.set(id, counts.get(id) + 1);
  return true;
};

for (const icon of originalIcons) addIcon(icon);

if (process.env.CATALOG_DEBUG) {
  console.log("originals per category:");
  for (const category of CATEGORIES) {
    const names = [...selected.values()].filter((r) => r.categories.includes(category.id)).map((r) => r.name);
    console.log(`  ${category.id.padEnd(14)} ${String(names.length).padStart(3)}  ${names.join(", ")}`);
  }
  console.log("pool size by primary category:");
  for (const category of CATEGORIES) console.log(`  ${category.id.padEnd(14)} ${String(poolByPrimary.get(category.id).length).padStart(4)}`);
  console.log("candidate skip stats:", skipped);
}

const desired = new Map(
  CATEGORIES.map((category) => {
    const existing = counts.get(category.id);
    return [category.id, Math.min(MAX_PER_CATEGORY, Math.max(TARGET_PER_CATEGORY, existing))];
  })
);

const MAX_NEW_PER_FAMILY = 9;
const familyCountOf = (candidate) => newFamilyCounts.get(rootOf(candidate.kebab)) || 0;
// Base-first: within a root family the shortest kebab (the base icon) is
// selected before its variants, so "CreditCard" wins over "CreditCardCheck"
// and "File" over "FileAxis3D". Families whose base is already an original
// simply use the shortest remaining candidate as their base.
const rootBaseCandidate = new Map();
for (const candidate of pool) {
  const root = rootOf(candidate.kebab);
  const current = rootBaseCandidate.get(root);
  if (!current || candidate.kebab.length < current.kebab.length) rootBaseCandidate.set(root, candidate);
}
const basePending = (candidate) => {
  const root = rootOf(candidate.kebab);
  const base = rootBaseCandidate.get(root);
  if (!base || candidate.kebab === base.kebab) return false;
  return !selected.has(compact(base.name));
};
const canTake = (candidate) =>
  candidate.categories.every((id) => counts.get(id) < MAX_PER_CATEGORY) &&
  !basePending(candidate) &&
  (selected.has(compact(candidate.name)) || familyCountOf(candidate) < MAX_NEW_PER_FAMILY);

function pickCandidate(categoryId) {
  const primaries = poolByPrimary.get(categoryId) || [];
  let best = null;
  // Recognisability first: a family base icon (File, CreditCard, ChartBar, …)
  // is picked before its exotic variants when both fit the category.
  for (const candidate of primaries) {
    if (selected.has(compact(candidate.name)) || !canTake(candidate)) continue;
    const root = rootOf(candidate.kebab);
    const base = rootBaseCandidate.get(root);
    if (!base || candidate.kebab !== base.kebab) continue;
    if (!best || candidate.score > best.score) best = candidate;
  }
  if (best) return best;
  for (const candidate of primaries) {
    if (selected.has(compact(candidate.name)) || !canTake(candidate)) continue;
    if (!best || candidate.score > best.score) best = candidate;
  }
  if (best) return best;
  // Cross-cutting fallback: candidates that matched this category secondarily.
  for (const candidate of pool) {
    if (selected.has(compact(candidate.name)) || !canTake(candidate)) continue;
    if (!candidate.matched.includes(categoryId)) continue;
    if (!best || candidate.score > best.score) best = candidate;
  }
  return best;
}

const exhausted = new Set();
let guard = 0;
while (guard < 5000) {
  guard += 1;
  const needing = CATEGORIES.map((category) => ({
    id: category.id,
    deficit: (desired.get(category.id) || 0) - (counts.get(category.id) || 0),
  }))
    .filter((entry) => entry.deficit > 0 && !exhausted.has(entry.id))
    .sort((a, b) => b.deficit - a.deficit);
  if (needing.length === 0) break;
  let added = false;
  for (const entry of needing) {
    const candidate = pickCandidate(entry.id);
    if (!candidate) {
      exhausted.add(entry.id);
      continue;
    }
    candidate.categories = [...new Set([entry.id, ...candidate.categories])].slice(0, 3);
    addIcon(candidate);
    added = true;
    break;
  }
  if (!added) break;
}

// Balanced floor: every category must reach the 20-icon minimum.
for (const category of CATEGORIES) {
  while ((counts.get(category.id) || 0) < MIN_PER_CATEGORY) {
    const candidate = pickCandidate(category.id);
    if (!candidate) {
      fail(`category "${category.id}" cannot reach the ${MIN_PER_CATEGORY}-icon floor`);
      break;
    }
    candidate.categories = [...new Set([category.id, ...candidate.categories])].slice(0, 3);
    addIcon(candidate);
  }
}

// Top up towards the target total with the strongest remaining candidates.
const remaining = pool
  .filter((candidate) => !selected.has(compact(candidate.name)) && canTake(candidate))
  .sort((a, b) => b.score - a.score || a.kebab.localeCompare(b.kebab));
for (const candidate of remaining) {
  if (selected.size >= TARGET_TOTAL) break;
  if (!canTake(candidate)) continue;
  addIcon(candidate);
}

// Second categories for genuinely cross-cutting new icons (best-effort, never
// above the per-category cap). Keeps most icons at 1-2 categories.
for (const record of selected.values()) {
  if (record.original) continue;
  const extras = record.matched.filter((id) => !record.categories.includes(id));
  for (const id of extras) {
    if (record.categories.length >= 2) break;
    if (counts.get(id) >= MAX_PER_CATEGORY) continue;
    record.categories.push(id);
    counts.set(id, counts.get(id) + 1);
  }
}

if (process.env.CATALOG_DEBUG) {
  const incidence = new Map(CATEGORIES.map((c) => [c.id, 0]));
  for (const record of selected.values()) for (const id of record.categories) incidence.set(id, incidence.get(id) + 1);
  console.log("after selection counts:", JSON.stringify(Object.fromEntries(counts)));
  console.log("after selection incidence:", JSON.stringify(Object.fromEntries(incidence)));
  const offenders = [...selected.values()].filter((r) => r.categories.includes("actions") && r.original !== true);
  console.log("new icons touching actions:", offenders.length, offenders.slice(0, 20).map((r) => r.name + ":" + r.categories.join("/")));
}

/* ------------------------------------------------------------------------- */
/* Output ordering + validation                                              */
/* ------------------------------------------------------------------------- */

const selectedIcons = [...selected.values()];
const catalogNames = originalNames.concat(
  selectedIcons
    .filter((icon) => !icon.original)
    .sort((a, b) => {
      const orderA = categoryOrder.get(a.categories[0]) ?? 99;
      const orderB = categoryOrder.get(b.categories[0]) ?? 99;
      return orderA - orderB || a.name.localeCompare(b.name);
    })
    .map((icon) => icon.name)
);

if (catalogNames.length < MIN_TOTAL || catalogNames.length > MAX_TOTAL) {
  fail(`catalog total ${catalogNames.length} outside ${MIN_TOTAL}-${MAX_TOTAL}`);
}
const seenNames = new Set();
for (const name of catalogNames) {
  if (seenNames.has(name)) fail(`duplicate catalog name: ${name}`);
  seenNames.add(name);
  if (!/^[A-Z][A-Za-z0-9]*$/.test(name)) fail(`name is not PascalCase alphanumeric: ${name}`);
}
for (const name of originalNames) if (!seenNames.has(name)) fail(`original missing from catalog: ${name}`);

const iconCategories = {};
for (const icon of selectedIcons) {
  if (!nodes[icon.kebab]) fail(`cannot resolve Lucide geometry for ${icon.name} (${icon.kebab})`);
  if (!Array.isArray(icon.categories) || icon.categories.length < 1 || icon.categories.length > 3) {
    fail(`${icon.name}: expected 1-3 categories, got ${icon.categories?.length}`);
  }
  for (const id of icon.categories) if (!categoryById.has(id)) fail(`${icon.name}: unknown category ${id}`);
  iconCategories[icon.name] = icon.categories;
}
for (const name of catalogNames) if (!iconCategories[name]) fail(`catalog name without iconCategories entry: ${name}`);
for (const name of Object.keys(iconCategories)) if (!seenNames.has(name)) fail(`iconCategories entry not in catalog: ${name}`);

const categoryLists = new Map(CATEGORIES.map((category) => [category.id, []]));
for (const [name, ids] of Object.entries(iconCategories)) {
  for (const id of ids) if (categoryLists.has(id)) categoryLists.get(id).push(name);
}
for (const category of CATEGORIES) {
  const icons = categoryLists.get(category.id).sort();
  if (icons.length === 0) fail(`category ${category.id} is empty`);
  if (icons.length < MIN_PER_CATEGORY || icons.length > MAX_PER_CATEGORY) {
    fail(`category ${category.id} has ${icons.length} icons (expected ${MIN_PER_CATEGORY}-${MAX_PER_CATEGORY})`);
  }
  if (!isSorted(icons)) fail(`category ${category.id} icons are not sorted`);
}
const ids = CATEGORIES.map((category) => category.id);
if (new Set(ids).size !== ids.length) fail("duplicate category ids");

if (failures.length > 0) {
  console.error("catalog validation FAILED:");
  for (const message of failures) console.error(`  - ${message}`);
  process.exit(1);
}

const categoriesJson = {
  version: 1,
  total: catalogNames.length,
  categories: CATEGORIES.map((category) => ({
    id: category.id,
    label: category.label,
    description: category.description,
    icons: categoryLists.get(category.id).sort(),
  })),
  iconCategories,
  uncategorized: [],
};

fs.writeFileSync(p("raw/catalog-names.txt"), `${catalogNames.join("\n")}\n`);
fs.writeFileSync(p("data/categories.json"), `${JSON.stringify(categoriesJson, null, 2)}\n`);

/* ------------------------------------------------------------------------- */
/* Report                                                                    */
/* ------------------------------------------------------------------------- */

const duplicateRequests = requestedIcons.filter(
  (entry, index, all) => all.findIndex((other) => other.icon.name === entry.icon.name) !== index
);
const categoryRows = categoriesJson.categories.map((category) => ({
  id: category.id,
  label: category.label,
  count: category.icons.length,
  primary: category.icons.filter((name) => iconCategories[name][0] === category.id).length,
}));
const multi = Object.values(iconCategories).filter((list) => list.length > 1).length;
const triple = Object.values(iconCategories).filter((list) => list.length === 3).length;

console.log(
  `catalog: ${catalogNames.length} icons (${originalNames.length} originals + ${catalogNames.length - originalNames.length} new) in ${CATEGORIES.length} categories`
);
console.log(
  `requested: ${requested.length} -> ${originalNames.length} unique (merged: ${duplicateRequests.map((d) => `${d.requested}->${d.icon.name}`).join(", ")})`
);
console.log(`pool: ${Object.keys(nodes).length} Lucide icons; skipped ${JSON.stringify(skipped)}`);
console.log(`categories: ${Object.values(iconCategories).filter((list) => list.length === 1).length} single, ${multi} multi (${triple} triple)`);
console.log("per-category:");
for (const row of categoryRows) {
  console.log(`  ${row.id.padEnd(14)} ${String(row.count).padStart(3)} icons (${String(row.primary).padStart(3)} primary)  ${row.label}`);
}
const REPRESENTATIVES = {
  places: "Building", finance: "DollarSign", health: "Heart", food: "Utensils",
  weather: "Sun", education: "GraduationCap", travel: "Plane", commerce: "ShoppingCart",
  security: "Shield", communication: "Mail", media: "Camera", files: "FileText",
  data: "ChartLine", devices: "Smartphone", development: "Code", editing: "Pencil",
  design: "Palette", time: "Clock", people: "User", navigation: "Compass",
  layout: "LayoutGrid", status: "Info", actions: "Search", arrows: "ArrowRight",
};
console.log("\nexample imports:");
for (const row of categoryRows.slice(0, 6)) {
  const category = categoriesJson.categories.find((item) => item.id === row.id);
  const sample = REPRESENTATIVES[row.id] && category.icons.includes(REPRESENTATIVES[row.id])
    ? REPRESENTATIVES[row.id]
    : category.icons[0];
  console.log(`  import { ${sample} } from "@nexa/icons/${row.id}";`);
}
console.log("\nwrote raw/catalog-names.txt and data/categories.json");
