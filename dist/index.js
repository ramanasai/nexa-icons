import { createIcon, strokeForSize, STROKE_FOR_PX, SIZE_PX, PRESETS } from "./createIcon.js";
import { Icon, getIcon } from "./Icon.js";
import { IconSwap, IconToggle } from "./Swap.js";
import { SWAP, SWAP_PAIRS, swapTarget, swapModeFor } from "./swaps.js";
import { NEXA_MAP } from "./map.js";
import { CATEGORIES } from "./categories/catalog.js";
import { ICON_NAMES, resolveKebab } from "./registry.js";
import { Activity } from "./icons/activity.js";
import { AlertCircle } from "./icons/circle-exclamation-point.js";
import { AlertTriangle } from "./icons/triangle-exclamation-point.js";
import { Archive } from "./icons/archive.js";
import { ArrowDown } from "./icons/arrow-down.js";
import { ArrowDownRight } from "./icons/arrow-down-right.js";
import { ArrowLeft } from "./icons/arrow-left.js";
import { ArrowRight } from "./icons/arrow-right.js";
import { ArrowUp } from "./icons/arrow-up.js";
import { ArrowUpDown } from "./icons/arrow-up-down.js";
import { ArrowUpRight } from "./icons/arrow-up-right.js";
import { AtSign } from "./icons/at-sign.js";
import { Award } from "./icons/award.js";
import { BadgeCheck } from "./icons/badge-check.js";
import { Ban } from "./icons/ban.js";
import { BarChart2 } from "./icons/chart-no-axes-column.js";
import { BarChart3 } from "./icons/chart-column.js";
import { Bell } from "./icons/bell.js";
import { Bold } from "./icons/letter-b.js";
import { BookUser } from "./icons/book-user.js";
import { Bookmark } from "./icons/bookmark.js";
import { Briefcase } from "./icons/briefcase.js";
import { Building } from "./icons/building.js";
import { Building2 } from "./icons/building-complex.js";
import { Calendar } from "./icons/calendar.js";
import { CalendarClock } from "./icons/calendar-clock.js";
import { CalendarDays } from "./icons/calendar-days.js";
import { CalendarSync } from "./icons/calendar-sync.js";
import { Camera } from "./icons/camera.js";
import { ChartLine } from "./icons/chart-line.js";
import { Check } from "./icons/check.js";
import { CheckCircle } from "./icons/circle-check-big.js";
import { CheckCircle2 } from "./icons/circle-check.js";
import { CheckSquare } from "./icons/square-check-big.js";
import { ChevronDown } from "./icons/chevron-down.js";
import { ChevronLeft } from "./icons/chevron-left.js";
import { ChevronRight } from "./icons/chevron-right.js";
import { ChevronUp } from "./icons/chevron-up.js";
import { ChevronsLeftRight } from "./icons/chevrons-left-right.js";
import { ChevronsUpDown } from "./icons/chevrons-up-down.js";
import { Circle } from "./icons/circle.js";
import { Clock } from "./icons/clock.js";
import { Code } from "./icons/code.js";
import { Copy } from "./icons/copy.js";
import { Crown } from "./icons/crown.js";
import { DollarSign } from "./icons/dollar-sign.js";
import { Download } from "./icons/download.js";
import { ExternalLink } from "./icons/external-link.js";
import { Eye } from "./icons/eye.js";
import { EyeOff } from "./icons/eye-off.js";
import { FileClock } from "./icons/file-clock.js";
import { FileSearch } from "./icons/file-search.js";
import { FileSpreadsheet } from "./icons/file-spreadsheet.js";
import { FileText } from "./icons/file-text.js";
import { FileUp } from "./icons/file-up.js";
import { Filter } from "./icons/funnel.js";
import { Fingerprint } from "./icons/fingerprint-pattern.js";
import { Flame } from "./icons/flame.js";
import { FolderGit2 } from "./icons/folder-git-2.js";
import { FolderOpen } from "./icons/folder-open.js";
import { Gauge } from "./icons/gauge.js";
import { Gift } from "./icons/gift.js";
import { Globe } from "./icons/globe.js";
import { GraduationCap } from "./icons/graduation-cap.js";
import { Grid3x3 } from "./icons/grid-3x3.js";
import { Hand } from "./icons/hand.js";
import { Heading2 } from "./icons/heading-2.js";
import { Heart } from "./icons/heart.js";
import { HeartOff } from "./icons/heart-off.js";
import { History } from "./icons/rotate-ccw-clock.js";
import { Home } from "./icons/house.js";
import { ImageIcon } from "./icons/image.js";
import { ImagePlus } from "./icons/image-plus.js";
import { Inbox } from "./icons/inbox.js";
import { Info } from "./icons/info.js";
import { Italic } from "./icons/italic.js";
import { Key } from "./icons/key.js";
import { KeyRound } from "./icons/key-round.js";
import { Languages } from "./icons/languages.js";
import { Layers } from "./icons/layers.js";
import { LayoutDashboard } from "./icons/layout-dashboard.js";
import { LayoutGrid } from "./icons/layout-grid.js";
import { LifeBuoy } from "./icons/life-buoy.js";
import { Link2 } from "./icons/link-2.js";
import { LinkIcon } from "./icons/link.js";
import { List } from "./icons/list.js";
import { ListOrdered } from "./icons/list-ordered.js";
import { Loader2 } from "./icons/loader-circle.js";
import { Lock } from "./icons/lock.js";
import { LogOut } from "./icons/log-out.js";
import { Magnet } from "./icons/magnet.js";
import { Mail } from "./icons/mail.js";
import { MailCheck } from "./icons/mail-check.js";
import { MailPlus } from "./icons/mail-plus.js";
import { MapPin } from "./icons/map-pin.js";
import { MessageSquare } from "./icons/message-square.js";
import { Minus } from "./icons/minus.js";
import { Monitor } from "./icons/monitor.js";
import { Moon } from "./icons/moon.js";
import { MoonStar } from "./icons/moon-star.js";
import { MoreHorizontal } from "./icons/ellipsis.js";
import { MoreVertical } from "./icons/ellipsis-vertical.js";
import { MoveHorizontal } from "./icons/move-horizontal.js";
import { Newspaper } from "./icons/newspaper.js";
import { Palette } from "./icons/palette.js";
import { PanelLeftClose } from "./icons/panel-left-close.js";
import { PanelLeftOpen } from "./icons/panel-left-open.js";
import { Paperclip } from "./icons/paperclip.js";
import { PenSquare } from "./icons/square-pen.js";
import { Pencil } from "./icons/pencil.js";
import { PencilLine } from "./icons/pencil-line.js";
import { Percent } from "./icons/percent.js";
import { Pin } from "./icons/pin.js";
import { Plane } from "./icons/plane.js";
import { Plug } from "./icons/plug.js";
import { Plus } from "./icons/plus.js";
import { PlusCircle } from "./icons/circle-plus.js";
import { Power } from "./icons/power.js";
import { Quote } from "./icons/quote.js";
import { Radar } from "./icons/radar.js";
import { Radio } from "./icons/radio.js";
import { RefreshCw } from "./icons/refresh-cw.js";
import { Repeat } from "./icons/repeat.js";
import { Rocket } from "./icons/rocket.js";
import { RotateCcw } from "./icons/rotate-ccw.js";
import { Rss } from "./icons/rss.js";
import { ScrollText } from "./icons/scroll-text.js";
import { Search } from "./icons/search.js";
import { Send } from "./icons/send.js";
import { Settings } from "./icons/settings.js";
import { Share2 } from "./icons/share-2.js";
import { Shield } from "./icons/shield.js";
import { ShieldAlert } from "./icons/shield-exclamation-point.js";
import { ShieldCheck } from "./icons/shield-check.js";
import { SlidersHorizontal } from "./icons/sliders-horizontal.js";
import { Smartphone } from "./icons/smartphone.js";
import { Sparkles } from "./icons/sparkles.js";
import { Square } from "./icons/square.js";
import { Star } from "./icons/star.js";
import { StickyNote } from "./icons/sticky-note.js";
import { Strikethrough } from "./icons/strikethrough.js";
import { Sun } from "./icons/sun.js";
import { Tag } from "./icons/tag.js";
import { Target } from "./icons/target.js";
import { ThumbsUp } from "./icons/thumbs-up.js";
import { Timer } from "./icons/timer.js";
import { Trash2 } from "./icons/trash.js";
import { TrendingDown } from "./icons/trending-down.js";
import { TrendingUp } from "./icons/trending-up.js";
import { Trophy } from "./icons/trophy.js";
import { Underline } from "./icons/underline.js";
import { Undo2 } from "./icons/undo-2.js";
import { Upload } from "./icons/upload.js";
import { UploadCloud } from "./icons/cloud-upload.js";
import { User } from "./icons/user.js";
import { UserCheck } from "./icons/user-check.js";
import { UserMinus } from "./icons/user-minus.js";
import { UserPlus } from "./icons/user-plus.js";
import { Users } from "./icons/users.js";
import { Vibrate } from "./icons/vibrate.js";
import { Video } from "./icons/video.js";
import { Wand2 } from "./icons/wand-sparkles.js";
import { Wrench } from "./icons/wrench.js";
import { X } from "./icons/x.js";
import { XCircle } from "./icons/circle-x.js";
import { Zap } from "./icons/zap.js";
import { Accessibility } from "./icons/accessibility.js";
import { Ambulance } from "./icons/ambulance.js";
import { Baby } from "./icons/baby.js";
import { Bandage } from "./icons/bandage.js";
import { BicepsFlexed } from "./icons/biceps-flexed.js";
import { Biohazard } from "./icons/biohazard.js";
import { Bone } from "./icons/bone.js";
import { BoneFracture } from "./icons/bone-fracture.js";
import { Brain } from "./icons/brain.js";
import { BrainCircuit } from "./icons/brain-circuit.js";
import { BrainCog } from "./icons/brain-cog.js";
import { BrainOff } from "./icons/brain-off.js";
import { Cigarette } from "./icons/cigarette.js";
import { CigaretteOff } from "./icons/cigarette-off.js";
import { Dna } from "./icons/dna.js";
import { DnaOff } from "./icons/dna-off.js";
import { Dumbbell } from "./icons/dumbbell.js";
import { Ear } from "./icons/ear.js";
import { EarOff } from "./icons/ear-off.js";
import { FlaskConicalOff } from "./icons/flask-conical-off.js";
import { Footprints } from "./icons/footprints.js";
import { HeartPlus } from "./icons/heart-plus.js";
import { HeartPulse } from "./icons/heart-pulse.js";
import { HeartX } from "./icons/heart-x.js";
import { Hospital } from "./icons/hospital.js";
import { PersonStanding } from "./icons/person-standing.js";
import { Pill } from "./icons/pill.js";
import { PillBottle } from "./icons/pill-bottle.js";
import { Radiation } from "./icons/radiation.js";
import { ScanHeart } from "./icons/scan-heart.js";
import { SquareActivity } from "./icons/square-activity.js";
import { Stethoscope } from "./icons/stethoscope.js";
import { Syringe } from "./icons/syringe.js";
import { Tablets } from "./icons/tablets.js";
import { Thermometer } from "./icons/thermometer.js";
import { ThermometerSnowflake } from "./icons/thermometer-snowflake.js";
import { BadgeEuro } from "./icons/badge-euro.js";
import { BadgeJapaneseYen } from "./icons/badge-japanese-yen.js";
import { BadgePercent } from "./icons/badge-percent.js";
import { BadgePoundSterling } from "./icons/badge-pound-sterling.js";
import { Banknote } from "./icons/banknote.js";
import { BanknoteArrowDown } from "./icons/banknote-arrow-down.js";
import { BanknoteArrowUp } from "./icons/banknote-arrow-up.js";
import { BanknoteCheck } from "./icons/banknote-check.js";
import { BanknoteX } from "./icons/banknote-x.js";
import { Calculator } from "./icons/calculator.js";
import { CircleDollarSign } from "./icons/circle-dollar-sign.js";
import { CircleEuro } from "./icons/circle-euro.js";
import { CirclePoundSterling } from "./icons/circle-pound-sterling.js";
import { Coins } from "./icons/coins.js";
import { CreditCard } from "./icons/credit-card.js";
import { CreditCardCheck } from "./icons/credit-card-check.js";
import { CreditCardMinus } from "./icons/credit-card-minus.js";
import { CreditCardPlus } from "./icons/credit-card-plus.js";
import { CreditCardReader } from "./icons/credit-card-reader.js";
import { CreditCardX } from "./icons/credit-card-x.js";
import { Currency } from "./icons/currency.js";
import { Euro } from "./icons/euro.js";
import { HandCoins } from "./icons/hand-coins.js";
import { IndianRupee } from "./icons/indian-rupee.js";
import { Landmark } from "./icons/landmark.js";
import { PiggyBank } from "./icons/piggy-bank.js";
import { PoundSterling } from "./icons/pound-sterling.js";
import { Receipt } from "./icons/receipt.js";
import { ReceiptCent } from "./icons/receipt-cent.js";
import { ReceiptEuro } from "./icons/receipt-euro.js";
import { ReceiptPoundSterling } from "./icons/receipt-pound-sterling.js";
import { ReceiptSwissFranc } from "./icons/receipt-swiss-franc.js";
import { ReceiptText } from "./icons/receipt-text.js";
import { Scale } from "./icons/scale.js";
import { SwissFranc } from "./icons/swiss-franc.js";
import { Vault } from "./icons/vault.js";
import { Wallet } from "./icons/wallet.js";
import { WalletCards } from "./icons/wallet-cards.js";
import { Banana } from "./icons/banana.js";
import { Beef } from "./icons/beef.js";
import { BeefOff } from "./icons/beef-off.js";
import { Beer } from "./icons/beer.js";
import { BeerOff } from "./icons/beer-off.js";
import { Blender } from "./icons/blender.js";
import { BottleWine } from "./icons/bottle-wine.js";
import { Cake } from "./icons/cake.js";
import { CakeSlice } from "./icons/cake-slice.js";
import { Candy } from "./icons/candy.js";
import { CandyOff } from "./icons/candy-off.js";
import { Carrot } from "./icons/carrot.js";
import { ChefHat } from "./icons/chef-hat.js";
import { Cherry } from "./icons/cherry.js";
import { Citrus } from "./icons/citrus.js";
import { Coffee } from "./icons/coffee.js";
import { Cookie } from "./icons/cookie.js";
import { CookingPot } from "./icons/cooking-pot.js";
import { Croissant } from "./icons/croissant.js";
import { CupSoda } from "./icons/cup-soda.js";
import { Dessert } from "./icons/dessert.js";
import { Donut } from "./icons/donut.js";
import { Drumstick } from "./icons/drumstick.js";
import { Egg } from "./icons/egg.js";
import { EggOff } from "./icons/egg-off.js";
import { Grape } from "./icons/grape.js";
import { Ham } from "./icons/ham.js";
import { Hamburger } from "./icons/hamburger.js";
import { IceCreamBowl } from "./icons/ice-cream-bowl.js";
import { Martini } from "./icons/martini.js";
import { Menu } from "./icons/menu.js";
import { Microwave } from "./icons/microwave.js";
import { Milk } from "./icons/milk.js";
import { MilkOff } from "./icons/milk-off.js";
import { Pizza } from "./icons/pizza.js";
import { Popcorn } from "./icons/popcorn.js";
import { Refrigerator } from "./icons/refrigerator.js";
import { Salad } from "./icons/salad.js";
import { Sandwich } from "./icons/sandwich.js";
import { Soup } from "./icons/soup.js";
import { Utensils } from "./icons/utensils.js";
import { UtensilsCrossed } from "./icons/utensils-crossed.js";
import { Vegan } from "./icons/vegan.js";
import { Wheat } from "./icons/wheat.js";
import { WheatOff } from "./icons/wheat-off.js";
import { Wine } from "./icons/wine.js";
import { WineOff } from "./icons/wine-off.js";
import { Cloud } from "./icons/cloud.js";
import { CloudDrizzle } from "./icons/cloud-drizzle.js";
import { CloudExclamationPoint } from "./icons/cloud-exclamation-point.js";
import { CloudFog } from "./icons/cloud-fog.js";
import { CloudHail } from "./icons/cloud-hail.js";
import { CloudLightning } from "./icons/cloud-lightning.js";
import { CloudMoon } from "./icons/cloud-moon.js";
import { CloudRain } from "./icons/cloud-rain.js";
import { CloudSnow } from "./icons/cloud-snow.js";
import { Clover } from "./icons/clover.js";
import { Droplet } from "./icons/droplet.js";
import { DropletOff } from "./icons/droplet-off.js";
import { Droplets } from "./icons/droplets.js";
import { Eclipse } from "./icons/eclipse.js";
import { Flower } from "./icons/flower.js";
import { Haze } from "./icons/haze.js";
import { Leaf } from "./icons/leaf.js";
import { Rainbow } from "./icons/rainbow.js";
import { Snowflake } from "./icons/snowflake.js";
import { Sprout } from "./icons/sprout.js";
import { SunDim } from "./icons/sun-dim.js";
import { SunMedium } from "./icons/sun-medium.js";
import { SunMoon } from "./icons/sun-moon.js";
import { Sunrise } from "./icons/sunrise.js";
import { Sunset } from "./icons/sunset.js";
import { SunSnow } from "./icons/sun-snow.js";
import { Tornado } from "./icons/tornado.js";
import { Umbrella } from "./icons/umbrella.js";
import { UmbrellaOff } from "./icons/umbrella-off.js";
import { WavesArrowDown } from "./icons/waves-arrow-down.js";
import { WavesArrowUp } from "./icons/waves-arrow-up.js";
import { WavesHorizontal } from "./icons/waves-horizontal.js";
import { WavesLadder } from "./icons/waves-ladder.js";
import { WavesVertical } from "./icons/waves-vertical.js";
import { Wind } from "./icons/wind.js";
import { WindArrowDown } from "./icons/wind-arrow-down.js";
import { WindArrowUp } from "./icons/wind-arrow-up.js";
import { Atom } from "./icons/atom.js";
import { Backpack } from "./icons/backpack.js";
import { Book } from "./icons/book.js";
import { BookAudio } from "./icons/book-audio.js";
import { BookCheck } from "./icons/book-check.js";
import { BookCopy } from "./icons/book-copy.js";
import { BookHeart } from "./icons/book-heart.js";
import { BookKey } from "./icons/book-key.js";
import { BookOpenCheck } from "./icons/book-open-check.js";
import { BookPlus } from "./icons/book-plus.js";
import { BookX } from "./icons/book-x.js";
import { DraftingCompass } from "./icons/drafting-compass.js";
import { FlaskConical } from "./icons/flask-conical.js";
import { FlaskRound } from "./icons/flask-round.js";
import { Library } from "./icons/library.js";
import { LibraryBig } from "./icons/library-big.js";
import { Microscope } from "./icons/microscope.js";
import { Notebook } from "./icons/notebook.js";
import { NotebookDot } from "./icons/notebook-dot.js";
import { NotebookPen } from "./icons/notebook-pen.js";
import { NotebookTabs } from "./icons/notebook-tabs.js";
import { NotebookText } from "./icons/notebook-text.js";
import { Orbit } from "./icons/orbit.js";
import { PencilRuler } from "./icons/pencil-ruler.js";
import { Presentation } from "./icons/presentation.js";
import { Ruler } from "./icons/ruler.js";
import { RulerDimensionLine } from "./icons/ruler-dimension-line.js";
import { School } from "./icons/school.js";
import { Telescope } from "./icons/telescope.js";
import { TestTube } from "./icons/test-tube.js";
import { University } from "./icons/university.js";
import { Anchor } from "./icons/anchor.js";
import { Bike } from "./icons/bike.js";
import { Bus } from "./icons/bus.js";
import { Car } from "./icons/car.js";
import { Caravan } from "./icons/caravan.js";
import { CarBattery } from "./icons/car-battery.js";
import { Fuel } from "./icons/fuel.js";
import { Hotel } from "./icons/hotel.js";
import { Luggage } from "./icons/luggage.js";
import { MapPinOff } from "./icons/map-pin-off.js";
import { Mountain } from "./icons/mountain.js";
import { ParkingMeter } from "./icons/parking-meter.js";
import { PlaneLanding } from "./icons/plane-landing.js";
import { Road } from "./icons/road.js";
import { RouteOff } from "./icons/route-off.js";
import { Sailboat } from "./icons/sailboat.js";
import { Scooter } from "./icons/scooter.js";
import { Ship } from "./icons/ship.js";
import { ShipCargo } from "./icons/ship-cargo.js";
import { ShipWheel } from "./icons/ship-wheel.js";
import { Tent } from "./icons/tent.js";
import { Ticket } from "./icons/ticket.js";
import { TicketCheck } from "./icons/ticket-check.js";
import { TicketMinus } from "./icons/ticket-minus.js";
import { TicketPercent } from "./icons/ticket-percent.js";
import { TicketPlus } from "./icons/ticket-plus.js";
import { Tickets } from "./icons/tickets.js";
import { TicketSlash } from "./icons/ticket-slash.js";
import { TicketsPlane } from "./icons/tickets-plane.js";
import { TicketX } from "./icons/ticket-x.js";
import { TrafficCone } from "./icons/traffic-cone.js";
import { TrainFront } from "./icons/train-front.js";
import { TramFront } from "./icons/tram-front.js";
import { Barcode } from "./icons/barcode.js";
import { Container } from "./icons/container.js";
import { Package } from "./icons/package.js";
import { Package2 } from "./icons/package-2.js";
import { PackageCheck } from "./icons/package-check.js";
import { PackageMinus } from "./icons/package-minus.js";
import { PackagePen } from "./icons/package-pen.js";
import { PackagePlus } from "./icons/package-plus.js";
import { PackageQuestionMark } from "./icons/package-question-mark.js";
import { PackageSearch } from "./icons/package-search.js";
import { PackageX } from "./icons/package-x.js";
import { QrCode } from "./icons/qr-code.js";
import { ReceiptIndianRupee } from "./icons/receipt-indian-rupee.js";
import { ReceiptJapaneseYen } from "./icons/receipt-japanese-yen.js";
import { ReceiptTurkishLira } from "./icons/receipt-turkish-lira.js";
import { ScanBarcode } from "./icons/scan-barcode.js";
import { ScanLine } from "./icons/scan-line.js";
import { ScanQrCode } from "./icons/scan-qr-code.js";
import { ShoppingBag } from "./icons/shopping-bag.js";
import { ShoppingBasket } from "./icons/shopping-basket.js";
import { ShoppingCart } from "./icons/shopping-cart.js";
import { ShoppingCartMinus } from "./icons/shopping-cart-minus.js";
import { ShoppingCartPlus } from "./icons/shopping-cart-plus.js";
import { Store } from "./icons/store.js";
import { TagPlus } from "./icons/tag-plus.js";
import { Tags } from "./icons/tags.js";
import { TagX } from "./icons/tag-x.js";
import { Truck } from "./icons/truck.js";
import { TruckElectric } from "./icons/truck-electric.js";
import { WalletMinimal } from "./icons/wallet-minimal.js";
import { BrickWallFire } from "./icons/brick-wall-fire.js";
import { BrickWallShield } from "./icons/brick-wall-shield.js";
import { EarthLock } from "./icons/earth-lock.js";
import { EyeClosed } from "./icons/eye-closed.js";
import { EyeDashed } from "./icons/eye-dashed.js";
import { FileKey } from "./icons/file-key.js";
import { FileLock } from "./icons/file-lock.js";
import { Gavel } from "./icons/gavel.js";
import { GlobeLock } from "./icons/globe-lock.js";
import { KeySquare } from "./icons/key-square.js";
import { LockKeyhole } from "./icons/lock-keyhole.js";
import { LockKeyholeOpen } from "./icons/lock-keyhole-open.js";
import { LockOpen } from "./icons/lock-open.js";
import { ScanEye } from "./icons/scan-eye.js";
import { ShieldBan } from "./icons/shield-ban.js";
import { ShieldCog } from "./icons/shield-cog.js";
import { ShieldEllipsis } from "./icons/shield-ellipsis.js";
import { ShieldHalf } from "./icons/shield-half.js";
import { ShieldMinus } from "./icons/shield-minus.js";
import { ShieldOff } from "./icons/shield-off.js";
import { ShieldPlus } from "./icons/shield-plus.js";
import { ShieldQuestionMark } from "./icons/shield-question-mark.js";
import { ShieldX } from "./icons/shield-x.js";
import { Siren } from "./icons/siren.js";
import { SirenOff } from "./icons/siren-off.js";
import { VenetianMask } from "./icons/venetian-mask.js";
import { BellCheck } from "./icons/bell-check.js";
import { BellDot } from "./icons/bell-dot.js";
import { BellElectric } from "./icons/bell-electric.js";
import { BellMinus } from "./icons/bell-minus.js";
import { BellOff } from "./icons/bell-off.js";
import { BellPlus } from "./icons/bell-plus.js";
import { Contact } from "./icons/contact.js";
import { Forward } from "./icons/forward.js";
import { Headset } from "./icons/headset.js";
import { MailBadge } from "./icons/mail-badge.js";
import { Mailbox } from "./icons/mailbox.js";
import { MailClock } from "./icons/mail-clock.js";
import { MailDot } from "./icons/mail-dot.js";
import { MailMinus } from "./icons/mail-minus.js";
import { MailPen } from "./icons/mail-pen.js";
import { MailQuestionMark } from "./icons/mail-question-mark.js";
import { Mails } from "./icons/mails.js";
import { MailSearch } from "./icons/mail-search.js";
import { MailX } from "./icons/mail-x.js";
import { Megaphone } from "./icons/megaphone.js";
import { MegaphoneOff } from "./icons/megaphone-off.js";
import { MessageCircle } from "./icons/message-circle.js";
import { MessageCircleDashedCheck } from "./icons/message-circle-dashed-check.js";
import { MessageCircleOff } from "./icons/message-circle-off.js";
import { MessageCircleText } from "./icons/message-circle-text.js";
import { MessageCircleX } from "./icons/message-circle-x.js";
import { MessageSquareDiff } from "./icons/message-square-diff.js";
import { MessageSquareLock } from "./icons/message-square-lock.js";
import { MessageSquareOff } from "./icons/message-square-off.js";
import { MessageSquareX } from "./icons/message-square-x.js";
import { MessagesSquare } from "./icons/messages-square.js";
import { Phone } from "./icons/phone.js";
import { PhoneLog } from "./icons/phone-log.js";
import { PhoneOff } from "./icons/phone-off.js";
import { RadioOff } from "./icons/radio-off.js";
import { Reply } from "./icons/reply.js";
import { Satellite } from "./icons/satellite.js";
import { SatelliteDish } from "./icons/satellite-dish.js";
import { SendToBack } from "./icons/send-to-back.js";
import { Share } from "./icons/share.js";
import { Speech } from "./icons/speech.js";
import { Voicemail } from "./icons/voicemail.js";
import { Airplay } from "./icons/airplay.js";
import { Aperture } from "./icons/aperture.js";
import { AudioLines } from "./icons/audio-lines.js";
import { AudioLinesOff } from "./icons/audio-lines-off.js";
import { AudioLinesX } from "./icons/audio-lines-x.js";
import { AudioWaveform } from "./icons/audio-waveform.js";
import { CameraOff } from "./icons/camera-off.js";
import { Captions } from "./icons/captions.js";
import { CaptionsOff } from "./icons/captions-off.js";
import { Cast } from "./icons/cast.js";
import { Clapperboard } from "./icons/clapperboard.js";
import { Disc } from "./icons/disc.js";
import { Disc2 } from "./icons/disc-2.js";
import { Disc3 } from "./icons/disc-3.js";
import { DiscAlbum } from "./icons/disc-album.js";
import { FastForward } from "./icons/fast-forward.js";
import { Film } from "./icons/film.js";
import { Headphones } from "./icons/headphones.js";
import { ImageOff } from "./icons/image-off.js";
import { ImagePlay } from "./icons/image-play.js";
import { Images } from "./icons/images.js";
import { ImageUp } from "./icons/image-up.js";
import { Mic } from "./icons/mic.js";
import { MicAudioLines } from "./icons/mic-audio-lines.js";
import { MicOff } from "./icons/mic-off.js";
import { MicSignal } from "./icons/mic-signal.js";
import { MicVocal } from "./icons/mic-vocal.js";
import { Pause } from "./icons/pause.js";
import { Play } from "./icons/play.js";
import { PlayOff } from "./icons/play-off.js";
import { Rewind } from "./icons/rewind.js";
import { SkipBack } from "./icons/skip-back.js";
import { Speaker } from "./icons/speaker.js";
import { Tv } from "./icons/tv.js";
import { TvMinimal } from "./icons/tv-minimal.js";
import { TvMinimalPlay } from "./icons/tv-minimal-play.js";
import { VideoOff } from "./icons/video-off.js";
import { Volume } from "./icons/volume.js";
import { VolumeOff } from "./icons/volume-off.js";
import { Webcam } from "./icons/webcam.js";
import { WebcamOff } from "./icons/webcam-off.js";
import { ArchiveX } from "./icons/archive-x.js";
import { Clipboard } from "./icons/clipboard.js";
import { ClipboardCheck } from "./icons/clipboard-check.js";
import { ClipboardClock } from "./icons/clipboard-clock.js";
import { ClipboardMinus } from "./icons/clipboard-minus.js";
import { ClipboardPen } from "./icons/clipboard-pen.js";
import { ClipboardPenLine } from "./icons/clipboard-pen-line.js";
import { ClipboardPlus } from "./icons/clipboard-plus.js";
import { ClipboardType } from "./icons/clipboard-type.js";
import { ClipboardX } from "./icons/clipboard-x.js";
import { File } from "./icons/file.js";
import { FileBox } from "./icons/file-box.js";
import { FileDatabase } from "./icons/file-database.js";
import { FilePen } from "./icons/file-pen.js";
import { FilePenLine } from "./icons/file-pen-line.js";
import { Files } from "./icons/files.js";
import { FileScan } from "./icons/file-scan.js";
import { FileSearchCorner } from "./icons/file-search-corner.js";
import { Folder } from "./icons/folder.js";
import { FolderCog } from "./icons/folder-cog.js";
import { FolderDot } from "./icons/folder-dot.js";
import { FolderKanban } from "./icons/folder-kanban.js";
import { FolderKey } from "./icons/folder-key.js";
import { FolderPen } from "./icons/folder-pen.js";
import { FolderSearch } from "./icons/folder-search.js";
import { FolderSync } from "./icons/folder-sync.js";
import { FolderUsers } from "./icons/folder-users.js";
import { HardDriveDownload } from "./icons/hard-drive-download.js";
import { HardDriveUpload } from "./icons/hard-drive-upload.js";
import { NotepadText } from "./icons/notepad-text.js";
import { NotepadTextDashed } from "./icons/notepad-text-dashed.js";
import { Save } from "./icons/save.js";
import { SaveCheck } from "./icons/save-check.js";
import { SaveOff } from "./icons/save-off.js";
import { SavePen } from "./icons/save-pen.js";
import { SavePlus } from "./icons/save-plus.js";
import { Scroll } from "./icons/scroll.js";
import { StickyNoteCheck } from "./icons/sticky-note-check.js";
import { StickyNoteMinus } from "./icons/sticky-note-minus.js";
import { StickyNoteOff } from "./icons/sticky-note-off.js";
import { StickyNotePlus } from "./icons/sticky-note-plus.js";
import { StickyNoteX } from "./icons/sticky-note-x.js";
import { Binary } from "./icons/binary.js";
import { ChartBar } from "./icons/chart-bar.js";
import { ChartBellCurve } from "./icons/chart-bell-curve.js";
import { ChartCandlestick } from "./icons/chart-candlestick.js";
import { ChartGantt } from "./icons/chart-gantt.js";
import { ChartNetwork } from "./icons/chart-network.js";
import { ChartNoAxesGantt } from "./icons/chart-no-axes-gantt.js";
import { ChartQuadrant } from "./icons/chart-quadrant.js";
import { ChartRadar } from "./icons/chart-radar.js";
import { ChartSpline } from "./icons/chart-spline.js";
import { Crosshair } from "./icons/crosshair.js";
import { Database } from "./icons/database.js";
import { DatabaseArrowUp } from "./icons/database-arrow-up.js";
import { DatabaseBackup } from "./icons/database-backup.js";
import { DatabaseCheck } from "./icons/database-check.js";
import { DatabaseMinus } from "./icons/database-minus.js";
import { DatabasePlus } from "./icons/database-plus.js";
import { DatabaseSearch } from "./icons/database-search.js";
import { DatabaseX } from "./icons/database-x.js";
import { DatabaseZap } from "./icons/database-zap.js";
import { Network } from "./icons/network.js";
import { ScanBox } from "./icons/scan-box.js";
import { ScanSearch } from "./icons/scan-search.js";
import { Sigma } from "./icons/sigma.js";
import { SquareChartGantt } from "./icons/square-chart-gantt.js";
import { Table } from "./icons/table.js";
import { TableOfContents } from "./icons/table-of-contents.js";
import { TableProperties } from "./icons/table-properties.js";
import { TrendingUpDown } from "./icons/trending-up-down.js";
import { Battery } from "./icons/battery.js";
import { BatteryPlus } from "./icons/battery-plus.js";
import { Bluetooth } from "./icons/bluetooth.js";
import { BluetoothOff } from "./icons/bluetooth-off.js";
import { Cable } from "./icons/cable.js";
import { Cpu } from "./icons/cpu.js";
import { CpuAi } from "./icons/cpu-ai.js";
import { EthernetPort } from "./icons/ethernet-port.js";
import { HardDrive } from "./icons/hard-drive.js";
import { Keyboard } from "./icons/keyboard.js";
import { KeyboardMusic } from "./icons/keyboard-music.js";
import { KeyboardOff } from "./icons/keyboard-off.js";
import { Laptop } from "./icons/laptop.js";
import { MemoryStick } from "./icons/memory-stick.js";
import { MonitorActivity } from "./icons/monitor-activity.js";
import { MonitorCheck } from "./icons/monitor-check.js";
import { MonitorCog } from "./icons/monitor-cog.js";
import { MonitorDot } from "./icons/monitor-dot.js";
import { MonitorOff } from "./icons/monitor-off.js";
import { MonitorPc } from "./icons/monitor-pc.js";
import { MonitorPlay } from "./icons/monitor-play.js";
import { MonitorSmartphone } from "./icons/monitor-smartphone.js";
import { MonitorX } from "./icons/monitor-x.js";
import { Mouse } from "./icons/mouse.js";
import { MouseOff } from "./icons/mouse-off.js";
import { MousePointer2Off } from "./icons/mouse-pointer-2-off.js";
import { Plug2 } from "./icons/plug-2.js";
import { PlugZap } from "./icons/plug-zap.js";
import { PowerOff } from "./icons/power-off.js";
import { Printer } from "./icons/printer.js";
import { Printer3D } from "./icons/printer-3d.js";
import { PrinterCheck } from "./icons/printer-check.js";
import { PrinterX } from "./icons/printer-x.js";
import { Projector } from "./icons/projector.js";
import { Router } from "./icons/router.js";
import { Server } from "./icons/server.js";
import { ServerNas } from "./icons/server-nas.js";
import { ServerPlus } from "./icons/server-plus.js";
import { SmartphoneCharging } from "./icons/smartphone-charging.js";
import { SmartphoneNfc } from "./icons/smartphone-nfc.js";
import { SmartphoneUserRound } from "./icons/smartphone-user-round.js";
import { Tablet } from "./icons/tablet.js";
import { TabletSmartphone } from "./icons/tablet-smartphone.js";
import { Usb } from "./icons/usb.js";
import { UsbCPort } from "./icons/usb-c-port.js";
import { Wifi } from "./icons/wifi.js";
import { WifiCog } from "./icons/wifi-cog.js";
import { WifiLock } from "./icons/wifi-lock.js";
import { WifiOff } from "./icons/wifi-off.js";
import { WifiPen } from "./icons/wifi-pen.js";
import { WifiSync } from "./icons/wifi-sync.js";
import { Box } from "./icons/box.js";
import { Boxes } from "./icons/boxes.js";
import { BoxesLinked } from "./icons/boxes-linked.js";
import { Braces } from "./icons/braces.js";
import { Brackets } from "./icons/brackets.js";
import { Bug } from "./icons/bug.js";
import { BugOff } from "./icons/bug-off.js";
import { BugPlay } from "./icons/bug-play.js";
import { CodeXml } from "./icons/code-xml.js";
import { Command } from "./icons/command.js";
import { GitBranch } from "./icons/git-branch.js";
import { GitBranchMinus } from "./icons/git-branch-minus.js";
import { GitBranchPlus } from "./icons/git-branch-plus.js";
import { GitCompare } from "./icons/git-compare.js";
import { GitFork } from "./icons/git-fork.js";
import { GitGraph } from "./icons/git-graph.js";
import { GitMerge } from "./icons/git-merge.js";
import { GitMergeConflict } from "./icons/git-merge-conflict.js";
import { GitPullRequestCreate } from "./icons/git-pull-request-create.js";
import { Puzzle } from "./icons/puzzle.js";
import { Regex } from "./icons/regex.js";
import { ServerCog } from "./icons/server-cog.js";
import { ServerOff } from "./icons/server-off.js";
import { Terminal } from "./icons/terminal.js";
import { Variable } from "./icons/variable.js";
import { Webhook } from "./icons/webhook.js";
import { WebhookOff } from "./icons/webhook-off.js";
import { Workflow } from "./icons/workflow.js";
import { ALargeSmall } from "./icons/a-large-small.js";
import { AlignEndHorizontal } from "./icons/align-end-horizontal.js";
import { AlignEndVertical } from "./icons/align-end-vertical.js";
import { AlignHorizontalSpaceBetween } from "./icons/align-horizontal-space-between.js";
import { AlignStartHorizontal } from "./icons/align-start-horizontal.js";
import { AlignStartVertical } from "./icons/align-start-vertical.js";
import { AlignVerticalSpaceBetween } from "./icons/align-vertical-space-between.js";
import { Baseline } from "./icons/baseline.js";
import { CaseLower } from "./icons/case-lower.js";
import { CopyCheck } from "./icons/copy-check.js";
import { CopySlash } from "./icons/copy-slash.js";
import { CopyX } from "./icons/copy-x.js";
import { Eraser } from "./icons/eraser.js";
import { Heading1 } from "./icons/heading-1.js";
import { Heading3 } from "./icons/heading-3.js";
import { Heading4 } from "./icons/heading-4.js";
import { Heading5 } from "./icons/heading-5.js";
import { Heading6 } from "./icons/heading-6.js";
import { Highlighter } from "./icons/highlighter.js";
import { Ligature } from "./icons/ligature.js";
import { ListCheck } from "./icons/list-check.js";
import { ListChecks } from "./icons/list-checks.js";
import { ListChevronsDownUp } from "./icons/list-chevrons-down-up.js";
import { ListChevronsUpDown } from "./icons/list-chevrons-up-down.js";
import { ListClock } from "./icons/list-clock.js";
import { ListCollapse } from "./icons/list-collapse.js";
import { ListSortAscending } from "./icons/list-sort-ascending.js";
import { ListSortDescending } from "./icons/list-sort-descending.js";
import { ListX } from "./icons/list-x.js";
import { Pen } from "./icons/pen.js";
import { PencilOff } from "./icons/pencil-off.js";
import { PencilSparkles } from "./icons/pencil-sparkles.js";
import { PenLine } from "./icons/pen-line.js";
import { PenOff } from "./icons/pen-off.js";
import { Pilcrow } from "./icons/pilcrow.js";
import { RemoveFormatting } from "./icons/remove-formatting.js";
import { Scissors } from "./icons/scissors.js";
import { SpellCheck } from "./icons/spell-check.js";
import { SpellCheck2 } from "./icons/spell-check-2.js";
import { Subscript } from "./icons/subscript.js";
import { Superscript } from "./icons/superscript.js";
import { TextAlignStart } from "./icons/text-align-start.js";
import { TextCursor } from "./icons/text-cursor.js";
import { TextInitial } from "./icons/text-initial.js";
import { TextSearch } from "./icons/text-search.js";
import { TextWrap } from "./icons/text-wrap.js";
import { Type } from "./icons/type.js";
import { TypeOutline } from "./icons/type-outline.js";
import { WholeWord } from "./icons/whole-word.js";
import { Axis3D } from "./icons/axis-3d.js";
import { Blend } from "./icons/blend.js";
import { Brush } from "./icons/brush.js";
import { BrushCleaning } from "./icons/brush-cleaning.js";
import { Component } from "./icons/component.js";
import { Cone } from "./icons/cone.js";
import { Contrast } from "./icons/contrast.js";
import { Crop } from "./icons/crop.js";
import { Cuboid } from "./icons/cuboid.js";
import { Cylinder } from "./icons/cylinder.js";
import { Diamond } from "./icons/diamond.js";
import { Frame } from "./icons/frame.js";
import { Group } from "./icons/group.js";
import { Hexagon } from "./icons/hexagon.js";
import { Lasso } from "./icons/lasso.js";
import { Layers2 } from "./icons/layers-2.js";
import { LoaderPinwheel } from "./icons/loader-pinwheel.js";
import { Octagon } from "./icons/octagon.js";
import { Paintbrush } from "./icons/paintbrush.js";
import { PaintbrushVertical } from "./icons/paintbrush-vertical.js";
import { PaintBucket } from "./icons/paint-bucket.js";
import { Pipette } from "./icons/pipette.js";
import { Pyramid } from "./icons/pyramid.js";
import { RectangleVertical } from "./icons/rectangle-vertical.js";
import { Shapes } from "./icons/shapes.js";
import { Signature } from "./icons/signature.js";
import { Spline } from "./icons/spline.js";
import { SplinePointer } from "./icons/spline-pointer.js";
import { Squircle } from "./icons/squircle.js";
import { Stamp } from "./icons/stamp.js";
import { SwatchBook } from "./icons/swatch-book.js";
import { Tangent } from "./icons/tangent.js";
import { Torus } from "./icons/torus.js";
import { Triangle } from "./icons/triangle.js";
import { Ungroup } from "./icons/ungroup.js";
import { VectorSquare } from "./icons/vector-square.js";
import { Wand } from "./icons/wand.js";
import { AlarmClock } from "./icons/alarm-clock.js";
import { AlarmClockCheck } from "./icons/alarm-clock-check.js";
import { AlarmClockMinus } from "./icons/alarm-clock-minus.js";
import { AlarmClockOff } from "./icons/alarm-clock-off.js";
import { AlarmClockPlus } from "./icons/alarm-clock-plus.js";
import { Calendar1 } from "./icons/calendar-1.js";
import { CalendarArrowDown } from "./icons/calendar-arrow-down.js";
import { CalendarArrowRight } from "./icons/calendar-arrow-right.js";
import { CalendarArrowUp } from "./icons/calendar-arrow-up.js";
import { CalendarChevronsLeft } from "./icons/calendar-chevrons-left.js";
import { CalendarCog } from "./icons/calendar-cog.js";
import { CalendarOff } from "./icons/calendar-off.js";
import { CalendarSearch } from "./icons/calendar-search.js";
import { CalendarX } from "./icons/calendar-x.js";
import { Clock1 } from "./icons/clock-1.js";
import { Clock10 } from "./icons/clock-10.js";
import { Clock11 } from "./icons/clock-11.js";
import { Clock12 } from "./icons/clock-12.js";
import { ClockArrowDown } from "./icons/clock-arrow-down.js";
import { ClockArrowUp } from "./icons/clock-arrow-up.js";
import { ClockCheck } from "./icons/clock-check.js";
import { ClockExclamationPoint } from "./icons/clock-exclamation-point.js";
import { ClockPlus } from "./icons/clock-plus.js";
import { Hourglass } from "./icons/hourglass.js";
import { HourglassCog } from "./icons/hourglass-cog.js";
import { TimerOff } from "./icons/timer-off.js";
import { TimerReset } from "./icons/timer-reset.js";
import { Watch } from "./icons/watch.js";
import { ContactRound } from "./icons/contact-round.js";
import { HandFist } from "./icons/hand-fist.js";
import { HandGrab } from "./icons/hand-grab.js";
import { HandHeart } from "./icons/hand-heart.js";
import { HandHelping } from "./icons/hand-helping.js";
import { HandMetal } from "./icons/hand-metal.js";
import { HandPlatter } from "./icons/hand-platter.js";
import { HeartHandshake } from "./icons/heart-handshake.js";
import { IdCard } from "./icons/id-card.js";
import { IdCardLanyard } from "./icons/id-card-lanyard.js";
import { ScanFace } from "./icons/scan-face.js";
import { ThumbsDown } from "./icons/thumbs-down.js";
import { UserCog } from "./icons/user-cog.js";
import { UserGroup } from "./icons/user-group.js";
import { UserPen } from "./icons/user-pen.js";
import { UserRoundCog } from "./icons/user-round-cog.js";
import { UserRoundPen } from "./icons/user-round-pen.js";
import { UserRoundStar } from "./icons/user-round-star.js";
import { UsersCollaboration } from "./icons/users-collaboration.js";
import { UserSearch } from "./icons/user-search.js";
import { UsersRound } from "./icons/users-round.js";
import { UsersRoundCollaboration } from "./icons/users-round-collaboration.js";
import { UserStar } from "./icons/user-star.js";
import { UserX } from "./icons/user-x.js";
import { Compass } from "./icons/compass.js";
import { Earth } from "./icons/earth.js";
import { GlobeBan } from "./icons/globe-ban.js";
import { GlobeCheck } from "./icons/globe-check.js";
import { GlobeCode } from "./icons/globe-code.js";
import { GlobeOff } from "./icons/globe-off.js";
import { GlobePlus } from "./icons/globe-plus.js";
import { GlobeX } from "./icons/globe-x.js";
import { HouseCog } from "./icons/house-cog.js";
import { HousePlug } from "./icons/house-plug.js";
import { HousePlus } from "./icons/house-plus.js";
import { HouseWifi } from "./icons/house-wifi.js";
import { Locate } from "./icons/locate.js";
import { LocateFixed } from "./icons/locate-fixed.js";
import { LocateOff } from "./icons/locate-off.js";
import { Map } from "./icons/map.js";
import { MapPinHouse } from "./icons/map-pin-house.js";
import { MapPinPen } from "./icons/map-pin-pen.js";
import { MapPinPlusInside } from "./icons/map-pin-plus-inside.js";
import { MapPinSearch } from "./icons/map-pin-search.js";
import { MapPinX } from "./icons/map-pin-x.js";
import { MapPinXInside } from "./icons/map-pin-x-inside.js";
import { Milestone } from "./icons/milestone.js";
import { Navigation } from "./icons/navigation.js";
import { Navigation2 } from "./icons/navigation-2.js";
import { Navigation2Off } from "./icons/navigation-2-off.js";
import { NavigationOff } from "./icons/navigation-off.js";
import { Route } from "./icons/route.js";
import { Signpost } from "./icons/signpost.js";
import { SignpostBig } from "./icons/signpost-big.js";
import { Waypoints } from "./icons/waypoints.js";
import { BetweenHorizontalEnd } from "./icons/between-horizontal-end.js";
import { BetweenHorizontalStart } from "./icons/between-horizontal-start.js";
import { BetweenVerticalEnd } from "./icons/between-vertical-end.js";
import { BetweenVerticalStart } from "./icons/between-vertical-start.js";
import { Blocks } from "./icons/blocks.js";
import { Columns2 } from "./icons/columns-2.js";
import { Columns3 } from "./icons/columns-3.js";
import { Columns3Cog } from "./icons/columns-3-cog.js";
import { Columns4 } from "./icons/columns-4.js";
import { Expand } from "./icons/expand.js";
import { Fullscreen } from "./icons/fullscreen.js";
import { GalleryHorizontal } from "./icons/gallery-horizontal.js";
import { GalleryHorizontalEnd } from "./icons/gallery-horizontal-end.js";
import { GalleryVertical } from "./icons/gallery-vertical.js";
import { GalleryVerticalEnd } from "./icons/gallery-vertical-end.js";
import { Grid2x2 } from "./icons/grid-2x2.js";
import { Grid2x2Check } from "./icons/grid-2x2-check.js";
import { Grid2x2Plus } from "./icons/grid-2x2-plus.js";
import { Grid2x2X } from "./icons/grid-2x2-x.js";
import { Grid3x2 } from "./icons/grid-3x2.js";
import { Grid3x3Off } from "./icons/grid-3x3-off.js";
import { Kanban } from "./icons/kanban.js";
import { LayoutArrowDown } from "./icons/layout-arrow-down.js";
import { LayoutFreeform } from "./icons/layout-freeform.js";
import { LayoutGridCircles } from "./icons/layout-grid-circles.js";
import { LayoutList } from "./icons/layout-list.js";
import { LayoutPanelTop } from "./icons/layout-panel-top.js";
import { Maximize } from "./icons/maximize.js";
import { Minimize } from "./icons/minimize.js";
import { PanelBottom } from "./icons/panel-bottom.js";
import { PanelBottomClose } from "./icons/panel-bottom-close.js";
import { PanelBottomOpen } from "./icons/panel-bottom-open.js";
import { PanelRightClose } from "./icons/panel-right-close.js";
import { PanelRightOpen } from "./icons/panel-right-open.js";
import { PanelsLeftBottom } from "./icons/panels-left-bottom.js";
import { PanelsRightBottom } from "./icons/panels-right-bottom.js";
import { PanelsTopLeft } from "./icons/panels-top-left.js";
import { PanelTop } from "./icons/panel-top.js";
import { PanelTopBottomDashed } from "./icons/panel-top-bottom-dashed.js";
import { PanelTopClose } from "./icons/panel-top-close.js";
import { PanelTopOpen } from "./icons/panel-top-open.js";
import { Ratio } from "./icons/ratio.js";
import { Rows2 } from "./icons/rows-2.js";
import { Rows3 } from "./icons/rows-3.js";
import { Rows4 } from "./icons/rows-4.js";
import { Scaling } from "./icons/scaling.js";
import { SeparatorVertical } from "./icons/separator-vertical.js";
import { Shrink } from "./icons/shrink.js";
import { Split } from "./icons/split.js";
import { StretchVertical } from "./icons/stretch-vertical.js";
import { BadgeInfo } from "./icons/badge-info.js";
import { BadgeMinus } from "./icons/badge-minus.js";
import { BadgePlus } from "./icons/badge-plus.js";
import { BadgeQuestionMark } from "./icons/badge-question-mark.js";
import { BadgeX } from "./icons/badge-x.js";
import { Flag } from "./icons/flag.js";
import { FlagOff } from "./icons/flag-off.js";
import { Loader } from "./icons/loader.js";
import { Medal } from "./icons/medal.js";
import { SignalHigh } from "./icons/signal-high.js";
import { SignalLow } from "./icons/signal-low.js";
import { SignalMedium } from "./icons/signal-medium.js";
import { SignalZero } from "./icons/signal-zero.js";
import { SquareX } from "./icons/square-x.js";
import { ZapOff } from "./icons/zap-off.js";
import { BookmarkCheck } from "./icons/bookmark-check.js";
import { BookmarkMinus } from "./icons/bookmark-minus.js";
import { BookmarkOff } from "./icons/bookmark-off.js";
import { BookmarkPlus } from "./icons/bookmark-plus.js";
import { BookmarkX } from "./icons/bookmark-x.js";
import { CheckLine } from "./icons/check-line.js";
import { CircleOff } from "./icons/circle-off.js";
import { CircleSlash } from "./icons/circle-slash.js";
import { FunnelX } from "./icons/funnel-x.js";
import { Grip } from "./icons/grip.js";
import { Link2Off } from "./icons/link-2-off.js";
import { PinOff } from "./icons/pin-off.js";
import { Pointer } from "./icons/pointer.js";
import { Redo } from "./icons/redo.js";
import { RefreshCcw } from "./icons/refresh-ccw.js";
import { RefreshCwOff } from "./icons/refresh-cw-off.js";
import { Scan } from "./icons/scan.js";
import { SearchCheck } from "./icons/search-check.js";
import { SearchCode } from "./icons/search-code.js";
import { SearchExclamationPoint } from "./icons/search-exclamation-point.js";
import { SearchSlash } from "./icons/search-slash.js";
import { SearchX } from "./icons/search-x.js";
import { Shuffle } from "./icons/shuffle.js";
import { SquareDashedSearch } from "./icons/square-dashed-search.js";
import { SquareDashedX } from "./icons/square-dashed-x.js";
import { SquareDashedXCorner } from "./icons/square-dashed-x-corner.js";
import { StarCheck } from "./icons/star-check.js";
import { StarHalf } from "./icons/star-half.js";
import { StarMinus } from "./icons/star-minus.js";
import { StarOff } from "./icons/star-off.js";
import { StarPlus } from "./icons/star-plus.js";
import { StarX } from "./icons/star-x.js";
import { TrashOff } from "./icons/trash-off.js";
import { Undo } from "./icons/undo.js";
import { Unlink } from "./icons/unlink.js";
import { XLineTop } from "./icons/x-line-top.js";
import { ZoomIn } from "./icons/zoom-in.js";
import { ArrowDown01 } from "./icons/arrow-down-0-1.js";
import { ArrowDown10 } from "./icons/arrow-down-1-0.js";
import { ArrowDownAZ } from "./icons/arrow-down-a-z.js";
import { ArrowDownToLine } from "./icons/arrow-down-to-line.js";
import { ArrowDownUp } from "./icons/arrow-down-up.js";
import { ArrowDownZA } from "./icons/arrow-down-z-a.js";
import { ArrowUp01 } from "./icons/arrow-up-0-1.js";
import { ArrowUpAZ } from "./icons/arrow-up-a-z.js";
import { ArrowUpZA } from "./icons/arrow-up-z-a.js";
import { ChevronLast } from "./icons/chevron-last.js";
import { ChevronsDown } from "./icons/chevrons-down.js";
import { ChevronsLeft } from "./icons/chevrons-left.js";
import { ChevronsLeftRightEllipsis } from "./icons/chevrons-left-right-ellipsis.js";
import { ChevronsRight } from "./icons/chevrons-right.js";
import { ChevronsUp } from "./icons/chevrons-up.js";
import { CircleChevronsDown } from "./icons/circle-chevrons-down.js";
import { CircleChevronsLeft } from "./icons/circle-chevrons-left.js";
import { CircleChevronsRight } from "./icons/circle-chevrons-right.js";
import { CircleChevronsUp } from "./icons/circle-chevrons-up.js";
import { CornerLeftUp } from "./icons/corner-left-up.js";
import { IterationCw } from "./icons/iteration-cw.js";
import { Move } from "./icons/move.js";
import { SquareChevronsDown } from "./icons/square-chevrons-down.js";
import { SquareChevronsUp } from "./icons/square-chevrons-up.js";
import { SquareChevronUp } from "./icons/square-chevron-up.js";
import { BrickWall } from "./icons/brick-wall.js";
import { BriefcaseBusiness } from "./icons/briefcase-business.js";
import { BriefcaseConveyorBelt } from "./icons/briefcase-conveyor-belt.js";
import { BriefcaseMedical } from "./icons/briefcase-medical.js";
import { BriefcasePlus } from "./icons/briefcase-plus.js";
import { BuildingComplexPlus } from "./icons/building-complex-plus.js";
import { Castle } from "./icons/castle.js";
import { Church } from "./icons/church.js";
import { Dam } from "./icons/dam.js";
import { DoorClosed } from "./icons/door-closed.js";
import { DoorClosedCog } from "./icons/door-closed-cog.js";
import { DoorClosedLocked } from "./icons/door-closed-locked.js";
import { DoorClosedPackage } from "./icons/door-closed-package.js";
import { DoorOpen } from "./icons/door-open.js";
import { Factory } from "./icons/factory.js";
import { Fence } from "./icons/fence.js";
import { HouseHeart } from "./icons/house-heart.js";
import { MapPinCheck } from "./icons/map-pin-check.js";
import { MountainSnow } from "./icons/mountain-snow.js";
import { SolarPanel } from "./icons/solar-panel.js";
import { TentTree } from "./icons/tent-tree.js";
import { TreeDeciduous } from "./icons/tree-deciduous.js";
import { TreePalm } from "./icons/tree-palm.js";
import { TreePine } from "./icons/tree-pine.js";
import { Trees } from "./icons/trees.js";
import { UtilityPole } from "./icons/utility-pole.js";
import { Warehouse } from "./icons/warehouse.js";
import { Google } from "./icons/google.js";
import { LinkedIn } from "./icons/linkedin.js";
import { GitHub } from "./icons/github.js";
import { Apple } from "./icons/apple.js";
import { Microsoft } from "./icons/microsoft.js";
import { XLogo } from "./icons/x-logo.js";
import { Facebook } from "./icons/facebook.js";
import { WhatsApp } from "./icons/whatsapp.js";
import { Indeed } from "./icons/indeed.js";
import { Passport } from "./icons/passport.js";
import { Visa } from "./icons/visa.js";
import { ResidencePermit } from "./icons/residence-permit.js";
import { FlagIreland } from "./icons/flag-ireland.js";
import { Crest } from "./icons/crest.js";
import { Invoice } from "./icons/invoice.js";
import { AlertTriangle as AlertTriangle2 } from "./icons/triangle-exclamation-point.js";
import { X as X2 } from "./icons/x.js";
export {
  ALargeSmall,
  Accessibility,
  Activity,
  Airplay,
  AlarmClock,
  AlarmClockCheck,
  AlarmClockMinus,
  AlarmClockOff,
  AlarmClockPlus,
  AlertCircle,
  AlertTriangle,
  AlignEndHorizontal,
  AlignEndVertical,
  AlignHorizontalSpaceBetween,
  AlignStartHorizontal,
  AlignStartVertical,
  AlignVerticalSpaceBetween,
  Ambulance,
  Anchor,
  Aperture,
  Apple,
  Archive,
  ArchiveX,
  ArrowDown,
  ArrowDown01,
  ArrowDown10,
  ArrowDownAZ,
  ArrowDownRight,
  ArrowDownToLine,
  ArrowDownUp,
  ArrowDownZA,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowUp01,
  ArrowUpAZ,
  ArrowUpDown,
  ArrowUpRight,
  ArrowUpZA,
  AtSign,
  Atom,
  AudioLines,
  AudioLinesOff,
  AudioLinesX,
  AudioWaveform,
  Award,
  Axis3D,
  Baby,
  Backpack,
  BadgeCheck,
  BadgeEuro,
  BadgeInfo,
  BadgeJapaneseYen,
  BadgeMinus,
  BadgePercent,
  BadgePlus,
  BadgePoundSterling,
  BadgeQuestionMark,
  BadgeX,
  Ban,
  Banana,
  Bandage,
  Banknote,
  BanknoteArrowDown,
  BanknoteArrowUp,
  BanknoteCheck,
  BanknoteX,
  BarChart2,
  BarChart3,
  Barcode,
  Baseline,
  Battery,
  BatteryPlus,
  Beef,
  BeefOff,
  Beer,
  BeerOff,
  Bell,
  BellCheck,
  BellDot,
  BellElectric,
  BellMinus,
  BellOff,
  BellPlus,
  BetweenHorizontalEnd,
  BetweenHorizontalStart,
  BetweenVerticalEnd,
  BetweenVerticalStart,
  BicepsFlexed,
  Bike,
  Binary,
  Biohazard,
  Blend,
  Blender,
  Blocks,
  Bluetooth,
  BluetoothOff,
  Bold,
  Bone,
  BoneFracture,
  Book,
  BookAudio,
  BookCheck,
  BookCopy,
  BookHeart,
  BookKey,
  BookOpenCheck,
  BookPlus,
  BookUser,
  BookX,
  Bookmark,
  BookmarkCheck,
  BookmarkMinus,
  BookmarkOff,
  BookmarkPlus,
  BookmarkX,
  BottleWine,
  Box,
  Boxes,
  BoxesLinked,
  Braces,
  Brackets,
  Brain,
  BrainCircuit,
  BrainCog,
  BrainOff,
  BrickWall,
  BrickWallFire,
  BrickWallShield,
  Briefcase,
  BriefcaseBusiness,
  BriefcaseConveyorBelt,
  BriefcaseMedical,
  BriefcasePlus,
  Brush,
  BrushCleaning,
  Bug,
  BugOff,
  BugPlay,
  Building,
  Building2,
  BuildingComplexPlus,
  Bus,
  CATEGORIES,
  Cable,
  Cake,
  CakeSlice,
  Calculator,
  Calendar,
  Calendar1,
  CalendarArrowDown,
  CalendarArrowRight,
  CalendarArrowUp,
  CalendarChevronsLeft,
  CalendarClock,
  CalendarCog,
  CalendarDays,
  CalendarOff,
  CalendarSearch,
  CalendarSync,
  CalendarX,
  Camera,
  CameraOff,
  Candy,
  CandyOff,
  Captions,
  CaptionsOff,
  Car,
  CarBattery,
  Caravan,
  Carrot,
  CaseLower,
  Cast,
  Castle,
  ChartBar,
  ChartBellCurve,
  ChartCandlestick,
  ChartGantt,
  ChartLine,
  ChartNetwork,
  ChartNoAxesGantt,
  ChartQuadrant,
  ChartRadar,
  ChartSpline,
  Check,
  CheckCircle,
  CheckCircle2,
  CheckLine,
  CheckSquare,
  ChefHat,
  Cherry,
  ChevronDown,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronsDown,
  ChevronsLeft,
  ChevronsLeftRight,
  ChevronsLeftRightEllipsis,
  ChevronsRight,
  ChevronsUp,
  ChevronsUpDown,
  Church,
  Cigarette,
  CigaretteOff,
  Circle,
  CircleChevronsDown,
  CircleChevronsLeft,
  CircleChevronsRight,
  CircleChevronsUp,
  CircleDollarSign,
  CircleEuro,
  CircleOff,
  CirclePoundSterling,
  CircleSlash,
  Citrus,
  Clapperboard,
  Clipboard,
  ClipboardCheck,
  ClipboardClock,
  ClipboardMinus,
  ClipboardPen,
  ClipboardPenLine,
  ClipboardPlus,
  ClipboardType,
  ClipboardX,
  Clock,
  Clock1,
  Clock10,
  Clock11,
  Clock12,
  ClockArrowDown,
  ClockArrowUp,
  ClockCheck,
  ClockExclamationPoint,
  ClockPlus,
  Cloud,
  CloudDrizzle,
  CloudExclamationPoint,
  CloudFog,
  CloudHail,
  CloudLightning,
  CloudMoon,
  CloudRain,
  CloudSnow,
  Clover,
  Code,
  CodeXml,
  Coffee,
  Coins,
  Columns2,
  Columns3,
  Columns3Cog,
  Columns4,
  Command,
  Compass,
  Component,
  Cone,
  Contact,
  ContactRound,
  Container,
  Contrast,
  Cookie,
  CookingPot,
  Copy,
  CopyCheck,
  CopySlash,
  CopyX,
  CornerLeftUp,
  Cpu,
  CpuAi,
  CreditCard,
  CreditCardCheck,
  CreditCardMinus,
  CreditCardPlus,
  CreditCardReader,
  CreditCardX,
  Crest,
  Croissant,
  Crop,
  Crosshair,
  Crown,
  Cuboid,
  CupSoda,
  Currency,
  Cylinder,
  Dam,
  Database,
  DatabaseArrowUp,
  DatabaseBackup,
  DatabaseCheck,
  DatabaseMinus,
  DatabasePlus,
  DatabaseSearch,
  DatabaseX,
  DatabaseZap,
  Dessert,
  Diamond,
  Disc,
  Disc2,
  Disc3,
  DiscAlbum,
  Dna,
  DnaOff,
  DollarSign,
  Donut,
  DoorClosed,
  DoorClosedCog,
  DoorClosedLocked,
  DoorClosedPackage,
  DoorOpen,
  Download,
  DraftingCompass,
  Droplet,
  DropletOff,
  Droplets,
  Drumstick,
  Dumbbell,
  Ear,
  EarOff,
  Earth,
  EarthLock,
  Eclipse,
  Egg,
  EggOff,
  Eraser,
  EthernetPort,
  Euro,
  Expand,
  ExternalLink,
  Eye,
  EyeClosed,
  EyeDashed,
  EyeOff,
  Facebook,
  Factory,
  FastForward,
  Fence,
  File,
  FileBox,
  FileClock,
  FileDatabase,
  FileKey,
  FileLock,
  FilePen,
  FilePenLine,
  FileScan,
  FileSearch,
  FileSearchCorner,
  FileSpreadsheet,
  FileText,
  FileUp,
  Files,
  Film,
  Filter,
  Fingerprint,
  Flag,
  FlagIreland,
  FlagOff,
  Flame,
  FlaskConical,
  FlaskConicalOff,
  FlaskRound,
  Flower,
  Folder,
  FolderCog,
  FolderDot,
  FolderGit2,
  FolderKanban,
  FolderKey,
  FolderOpen,
  FolderPen,
  FolderSearch,
  FolderSync,
  FolderUsers,
  Footprints,
  Forward,
  Frame,
  Fuel,
  Fullscreen,
  FunnelX,
  GalleryHorizontal,
  GalleryHorizontalEnd,
  GalleryVertical,
  GalleryVerticalEnd,
  Gauge,
  Gavel,
  Gift,
  GitBranch,
  GitBranchMinus,
  GitBranchPlus,
  GitCompare,
  GitFork,
  GitGraph,
  GitHub,
  GitMerge,
  GitMergeConflict,
  GitPullRequestCreate,
  Globe,
  GlobeBan,
  GlobeCheck,
  GlobeCode,
  GlobeLock,
  GlobeOff,
  GlobePlus,
  GlobeX,
  Google,
  GraduationCap,
  Grape,
  Grid2x2,
  Grid2x2Check,
  Grid2x2Plus,
  Grid2x2X,
  Grid3x2,
  Grid3x3,
  Grid3x3Off,
  Grip,
  Group,
  Ham,
  Hamburger,
  Hand,
  HandCoins,
  HandFist,
  HandGrab,
  HandHeart,
  HandHelping,
  HandMetal,
  HandPlatter,
  HardDrive,
  HardDriveDownload,
  HardDriveUpload,
  Haze,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Headphones,
  Headset,
  Heart,
  HeartHandshake,
  HeartOff,
  HeartPlus,
  HeartPulse,
  HeartX,
  Hexagon,
  Highlighter,
  History,
  Home,
  Hospital,
  Hotel,
  Hourglass,
  HourglassCog,
  HouseCog,
  HouseHeart,
  HousePlug,
  HousePlus,
  HouseWifi,
  ICON_NAMES,
  IceCreamBowl,
  Icon,
  IconSwap,
  IconToggle,
  IdCard,
  IdCardLanyard,
  ImageIcon,
  ImageOff,
  ImagePlay,
  ImagePlus,
  ImageUp,
  Images,
  Inbox,
  Indeed,
  IndianRupee,
  Info,
  Invoice,
  Italic,
  IterationCw,
  Kanban,
  Key,
  KeyRound,
  KeySquare,
  Keyboard,
  KeyboardMusic,
  KeyboardOff,
  Landmark,
  Languages,
  Laptop,
  Lasso,
  Layers,
  Layers2,
  LayoutArrowDown,
  LayoutDashboard,
  LayoutFreeform,
  LayoutGrid,
  LayoutGridCircles,
  LayoutList,
  LayoutPanelTop,
  Leaf,
  Library,
  LibraryBig,
  LifeBuoy,
  Ligature,
  Link2,
  Link2Off,
  LinkIcon,
  LinkedIn,
  List,
  ListCheck,
  ListChecks,
  ListChevronsDownUp,
  ListChevronsUpDown,
  ListClock,
  ListCollapse,
  ListOrdered,
  ListSortAscending,
  ListSortDescending,
  ListX,
  Loader,
  Loader2,
  LoaderPinwheel,
  Locate,
  LocateFixed,
  LocateOff,
  Lock,
  LockKeyhole,
  LockKeyholeOpen,
  LockOpen,
  LogOut,
  Luggage,
  Magnet,
  Mail,
  MailBadge,
  MailCheck,
  MailClock,
  MailDot,
  MailMinus,
  MailPen,
  MailPlus,
  MailQuestionMark,
  MailSearch,
  MailX,
  Mailbox,
  Mails,
  Map,
  MapPin,
  MapPinCheck,
  MapPinHouse,
  MapPinOff,
  MapPinPen,
  MapPinPlusInside,
  MapPinSearch,
  MapPinX,
  MapPinXInside,
  Martini,
  Maximize,
  Medal,
  Megaphone,
  MegaphoneOff,
  MemoryStick,
  Menu,
  MessageCircle,
  MessageCircleDashedCheck,
  MessageCircleOff,
  MessageCircleText,
  MessageCircleX,
  MessageSquare,
  MessageSquareDiff,
  MessageSquareLock,
  MessageSquareOff,
  MessageSquareX,
  MessagesSquare,
  Mic,
  MicAudioLines,
  MicOff,
  MicSignal,
  MicVocal,
  Microscope,
  Microsoft,
  Microwave,
  Milestone,
  Milk,
  MilkOff,
  Minimize,
  Minus,
  Monitor,
  MonitorActivity,
  MonitorCheck,
  MonitorCog,
  MonitorDot,
  MonitorOff,
  MonitorPc,
  MonitorPlay,
  MonitorSmartphone,
  MonitorX,
  Moon,
  MoonStar,
  MoreHorizontal,
  MoreVertical,
  Mountain,
  MountainSnow,
  Mouse,
  MouseOff,
  MousePointer2Off,
  Move,
  MoveHorizontal,
  NEXA_MAP,
  Navigation,
  Navigation2,
  Navigation2Off,
  NavigationOff,
  Network,
  Newspaper,
  Notebook,
  NotebookDot,
  NotebookPen,
  NotebookTabs,
  NotebookText,
  NotepadText,
  NotepadTextDashed,
  Octagon,
  Orbit,
  PRESETS,
  Package,
  Package2,
  PackageCheck,
  PackageMinus,
  PackagePen,
  PackagePlus,
  PackageQuestionMark,
  PackageSearch,
  PackageX,
  PaintBucket,
  Paintbrush,
  PaintbrushVertical,
  Palette,
  PanelBottom,
  PanelBottomClose,
  PanelBottomOpen,
  PanelLeftClose,
  PanelLeftOpen,
  PanelRightClose,
  PanelRightOpen,
  PanelTop,
  PanelTopBottomDashed,
  PanelTopClose,
  PanelTopOpen,
  PanelsLeftBottom,
  PanelsRightBottom,
  PanelsTopLeft,
  Paperclip,
  ParkingMeter,
  Passport,
  Pause,
  Pen,
  PenLine,
  PenOff,
  PenSquare,
  Pencil,
  PencilLine,
  PencilOff,
  PencilRuler,
  PencilSparkles,
  Percent,
  PersonStanding,
  Phone,
  PhoneLog,
  PhoneOff,
  PiggyBank,
  Pilcrow,
  Pill,
  PillBottle,
  Pin,
  PinOff,
  Pipette,
  Pizza,
  Plane,
  PlaneLanding,
  Play,
  PlayOff,
  Plug,
  Plug2,
  PlugZap,
  Plus,
  PlusCircle,
  Pointer,
  Popcorn,
  PoundSterling,
  Power,
  PowerOff,
  Presentation,
  Printer,
  Printer3D,
  PrinterCheck,
  PrinterX,
  Projector,
  Puzzle,
  Pyramid,
  QrCode,
  Quote,
  Radar,
  Radiation,
  Radio,
  RadioOff,
  Rainbow,
  Ratio,
  Receipt,
  ReceiptCent,
  ReceiptEuro,
  ReceiptIndianRupee,
  ReceiptJapaneseYen,
  ReceiptPoundSterling,
  ReceiptSwissFranc,
  ReceiptText,
  ReceiptTurkishLira,
  RectangleVertical,
  Redo,
  RefreshCcw,
  RefreshCw,
  RefreshCwOff,
  Refrigerator,
  Regex,
  RemoveFormatting,
  Repeat,
  Reply,
  ResidencePermit,
  Rewind,
  Road,
  Rocket,
  RotateCcw,
  Route,
  RouteOff,
  Router,
  Rows2,
  Rows3,
  Rows4,
  Rss,
  Ruler,
  RulerDimensionLine,
  SIZE_PX,
  STROKE_FOR_PX,
  SWAP,
  SWAP_PAIRS,
  Sailboat,
  Salad,
  Sandwich,
  Satellite,
  SatelliteDish,
  Save,
  SaveCheck,
  SaveOff,
  SavePen,
  SavePlus,
  Scale,
  Scaling,
  Scan,
  ScanBarcode,
  ScanBox,
  ScanEye,
  ScanFace,
  ScanHeart,
  ScanLine,
  ScanQrCode,
  ScanSearch,
  School,
  Scissors,
  Scooter,
  Scroll,
  ScrollText,
  Search,
  SearchCheck,
  SearchCode,
  SearchExclamationPoint,
  SearchSlash,
  SearchX,
  Send,
  SendToBack,
  SeparatorVertical,
  Server,
  ServerCog,
  ServerNas,
  ServerOff,
  ServerPlus,
  Settings,
  Shapes,
  Share,
  Share2,
  Shield,
  ShieldAlert,
  ShieldBan,
  ShieldCheck,
  ShieldCog,
  ShieldEllipsis,
  ShieldHalf,
  ShieldMinus,
  ShieldOff,
  ShieldPlus,
  ShieldQuestionMark,
  ShieldX,
  Ship,
  ShipCargo,
  ShipWheel,
  ShoppingBag,
  ShoppingBasket,
  ShoppingCart,
  ShoppingCartMinus,
  ShoppingCartPlus,
  Shrink,
  Shuffle,
  Sigma,
  SignalHigh,
  SignalLow,
  SignalMedium,
  SignalZero,
  Signature,
  Signpost,
  SignpostBig,
  Siren,
  SirenOff,
  SkipBack,
  SlidersHorizontal,
  Smartphone,
  SmartphoneCharging,
  SmartphoneNfc,
  SmartphoneUserRound,
  Snowflake,
  SolarPanel,
  Soup,
  Sparkles,
  Speaker,
  Speech,
  SpellCheck,
  SpellCheck2,
  Spline,
  SplinePointer,
  Split,
  Sprout,
  Square,
  SquareActivity,
  SquareChartGantt,
  SquareChevronUp,
  SquareChevronsDown,
  SquareChevronsUp,
  SquareDashedSearch,
  SquareDashedX,
  SquareDashedXCorner,
  SquareX,
  Squircle,
  Stamp,
  Star,
  StarCheck,
  StarHalf,
  StarMinus,
  StarOff,
  StarPlus,
  StarX,
  Stethoscope,
  StickyNote,
  StickyNoteCheck,
  StickyNoteMinus,
  StickyNoteOff,
  StickyNotePlus,
  StickyNoteX,
  Store,
  StretchVertical,
  Strikethrough,
  Subscript,
  Sun,
  SunDim,
  SunMedium,
  SunMoon,
  SunSnow,
  Sunrise,
  Sunset,
  Superscript,
  SwatchBook,
  SwissFranc,
  Syringe,
  Table,
  TableOfContents,
  TableProperties,
  Tablet,
  TabletSmartphone,
  Tablets,
  Tag,
  TagPlus,
  TagX,
  Tags,
  Tangent,
  Target,
  Telescope,
  Tent,
  TentTree,
  Terminal,
  TestTube,
  TextAlignStart,
  TextCursor,
  TextInitial,
  TextSearch,
  TextWrap,
  Thermometer,
  ThermometerSnowflake,
  ThumbsDown,
  ThumbsUp,
  Ticket,
  TicketCheck,
  TicketMinus,
  TicketPercent,
  TicketPlus,
  TicketSlash,
  TicketX,
  Tickets,
  TicketsPlane,
  Timer,
  TimerOff,
  TimerReset,
  Tornado,
  Torus,
  TrafficCone,
  TrainFront,
  TramFront,
  Trash2,
  TrashOff,
  TreeDeciduous,
  TreePalm,
  TreePine,
  Trees,
  TrendingDown,
  TrendingUp,
  TrendingUpDown,
  Triangle,
  AlertTriangle2 as TriangleAlert,
  Trophy,
  Truck,
  TruckElectric,
  Tv,
  TvMinimal,
  TvMinimalPlay,
  Type,
  TypeOutline,
  Umbrella,
  UmbrellaOff,
  Underline,
  Undo,
  Undo2,
  Ungroup,
  University,
  Unlink,
  Upload,
  UploadCloud,
  Usb,
  UsbCPort,
  User,
  UserCheck,
  UserCog,
  UserGroup,
  UserMinus,
  UserPen,
  UserPlus,
  UserRoundCog,
  UserRoundPen,
  UserRoundStar,
  UserSearch,
  UserStar,
  UserX,
  Users,
  UsersCollaboration,
  UsersRound,
  UsersRoundCollaboration,
  Utensils,
  UtensilsCrossed,
  UtilityPole,
  Variable,
  Vault,
  VectorSquare,
  Vegan,
  VenetianMask,
  Vibrate,
  Video,
  VideoOff,
  Visa,
  Voicemail,
  Volume,
  VolumeOff,
  Wallet,
  WalletCards,
  WalletMinimal,
  Wand,
  Wand2,
  Warehouse,
  Watch,
  WavesArrowDown,
  WavesArrowUp,
  WavesHorizontal,
  WavesLadder,
  WavesVertical,
  Waypoints,
  Webcam,
  WebcamOff,
  Webhook,
  WebhookOff,
  WhatsApp,
  Wheat,
  WheatOff,
  WholeWord,
  Wifi,
  WifiCog,
  WifiLock,
  WifiOff,
  WifiPen,
  WifiSync,
  Wind,
  WindArrowDown,
  WindArrowUp,
  Wine,
  WineOff,
  Workflow,
  Wrench,
  X,
  XCircle,
  X2 as XIcon,
  XLineTop,
  XLogo,
  Zap,
  ZapOff,
  ZoomIn,
  createIcon,
  getIcon,
  resolveKebab,
  strokeForSize,
  swapModeFor,
  swapTarget
};
