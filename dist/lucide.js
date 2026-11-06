import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Activity as ActivityBase } from "./icons/activity.js";
import { AlertCircle as AlertCircleBase } from "./icons/circle-exclamation-point.js";
import { AlertTriangle as AlertTriangleBase } from "./icons/triangle-exclamation-point.js";
import { Archive as ArchiveBase } from "./icons/archive.js";
import { ArrowDown as ArrowDownBase } from "./icons/arrow-down.js";
import { ArrowDownRight as ArrowDownRightBase } from "./icons/arrow-down-right.js";
import { ArrowLeft as ArrowLeftBase } from "./icons/arrow-left.js";
import { ArrowRight as ArrowRightBase } from "./icons/arrow-right.js";
import { ArrowUp as ArrowUpBase } from "./icons/arrow-up.js";
import { ArrowUpDown as ArrowUpDownBase } from "./icons/arrow-up-down.js";
import { ArrowUpRight as ArrowUpRightBase } from "./icons/arrow-up-right.js";
import { AtSign as AtSignBase } from "./icons/at-sign.js";
import { Award as AwardBase } from "./icons/award.js";
import { BadgeCheck as BadgeCheckBase } from "./icons/badge-check.js";
import { Ban as BanBase } from "./icons/ban.js";
import { BarChart2 as BarChart2Base } from "./icons/chart-no-axes-column.js";
import { BarChart3 as BarChart3Base } from "./icons/chart-column.js";
import { Bell as BellBase } from "./icons/bell.js";
import { Bold as BoldBase } from "./icons/letter-b.js";
import { BookUser as BookUserBase } from "./icons/book-user.js";
import { Bookmark as BookmarkBase } from "./icons/bookmark.js";
import { Briefcase as BriefcaseBase } from "./icons/briefcase.js";
import { Building as BuildingBase } from "./icons/building.js";
import { Building2 as Building2Base } from "./icons/building-complex.js";
import { Calendar as CalendarBase } from "./icons/calendar.js";
import { CalendarClock as CalendarClockBase } from "./icons/calendar-clock.js";
import { CalendarDays as CalendarDaysBase } from "./icons/calendar-days.js";
import { CalendarSync as CalendarSyncBase } from "./icons/calendar-sync.js";
import { Camera as CameraBase } from "./icons/camera.js";
import { ChartLine as ChartLineBase } from "./icons/chart-line.js";
import { Check as CheckBase } from "./icons/check.js";
import { CheckCircle as CheckCircleBase } from "./icons/circle-check-big.js";
import { CheckCircle2 as CheckCircle2Base } from "./icons/circle-check.js";
import { CheckSquare as CheckSquareBase } from "./icons/square-check-big.js";
import { ChevronDown as ChevronDownBase } from "./icons/chevron-down.js";
import { ChevronLeft as ChevronLeftBase } from "./icons/chevron-left.js";
import { ChevronRight as ChevronRightBase } from "./icons/chevron-right.js";
import { ChevronUp as ChevronUpBase } from "./icons/chevron-up.js";
import { ChevronsLeftRight as ChevronsLeftRightBase } from "./icons/chevrons-left-right.js";
import { ChevronsUpDown as ChevronsUpDownBase } from "./icons/chevrons-up-down.js";
import { Circle as CircleBase } from "./icons/circle.js";
import { Clock as ClockBase } from "./icons/clock.js";
import { Code as CodeBase } from "./icons/code.js";
import { Copy as CopyBase } from "./icons/copy.js";
import { Crown as CrownBase } from "./icons/crown.js";
import { DollarSign as DollarSignBase } from "./icons/dollar-sign.js";
import { Download as DownloadBase } from "./icons/download.js";
import { ExternalLink as ExternalLinkBase } from "./icons/external-link.js";
import { Eye as EyeBase } from "./icons/eye.js";
import { EyeOff as EyeOffBase } from "./icons/eye-off.js";
import { FileClock as FileClockBase } from "./icons/file-clock.js";
import { FileSearch as FileSearchBase } from "./icons/file-search.js";
import { FileSpreadsheet as FileSpreadsheetBase } from "./icons/file-spreadsheet.js";
import { FileText as FileTextBase } from "./icons/file-text.js";
import { FileUp as FileUpBase } from "./icons/file-up.js";
import { Filter as FilterBase } from "./icons/funnel.js";
import { Fingerprint as FingerprintBase } from "./icons/fingerprint-pattern.js";
import { Flame as FlameBase } from "./icons/flame.js";
import { FolderGit2 as FolderGit2Base } from "./icons/folder-git-2.js";
import { FolderOpen as FolderOpenBase } from "./icons/folder-open.js";
import { Gauge as GaugeBase } from "./icons/gauge.js";
import { Gift as GiftBase } from "./icons/gift.js";
import { Globe as GlobeBase } from "./icons/globe.js";
import { GraduationCap as GraduationCapBase } from "./icons/graduation-cap.js";
import { Grid3x3 as Grid3x3Base } from "./icons/grid-3x3.js";
import { Hand as HandBase } from "./icons/hand.js";
import { Heading2 as Heading2Base } from "./icons/heading-2.js";
import { Heart as HeartBase } from "./icons/heart.js";
import { HeartOff as HeartOffBase } from "./icons/heart-off.js";
import { History as HistoryBase } from "./icons/rotate-ccw-clock.js";
import { Home as HomeBase } from "./icons/house.js";
import { ImageIcon as ImageIconBase } from "./icons/image.js";
import { ImagePlus as ImagePlusBase } from "./icons/image-plus.js";
import { Inbox as InboxBase } from "./icons/inbox.js";
import { Info as InfoBase } from "./icons/info.js";
import { Italic as ItalicBase } from "./icons/italic.js";
import { Key as KeyBase } from "./icons/key.js";
import { KeyRound as KeyRoundBase } from "./icons/key-round.js";
import { Languages as LanguagesBase } from "./icons/languages.js";
import { Layers as LayersBase } from "./icons/layers.js";
import { LayoutDashboard as LayoutDashboardBase } from "./icons/layout-dashboard.js";
import { LayoutGrid as LayoutGridBase } from "./icons/layout-grid.js";
import { LifeBuoy as LifeBuoyBase } from "./icons/life-buoy.js";
import { Link2 as Link2Base } from "./icons/link-2.js";
import { LinkIcon as LinkIconBase } from "./icons/link.js";
import { List as ListBase } from "./icons/list.js";
import { ListOrdered as ListOrderedBase } from "./icons/list-ordered.js";
import { Loader2 as Loader2Base } from "./icons/loader-circle.js";
import { Lock as LockBase } from "./icons/lock.js";
import { LogOut as LogOutBase } from "./icons/log-out.js";
import { Magnet as MagnetBase } from "./icons/magnet.js";
import { Mail as MailBase } from "./icons/mail.js";
import { MailCheck as MailCheckBase } from "./icons/mail-check.js";
import { MailPlus as MailPlusBase } from "./icons/mail-plus.js";
import { MapPin as MapPinBase } from "./icons/map-pin.js";
import { MessageSquare as MessageSquareBase } from "./icons/message-square.js";
import { Minus as MinusBase } from "./icons/minus.js";
import { Monitor as MonitorBase } from "./icons/monitor.js";
import { Moon as MoonBase } from "./icons/moon.js";
import { MoonStar as MoonStarBase } from "./icons/moon-star.js";
import { MoreHorizontal as MoreHorizontalBase } from "./icons/ellipsis.js";
import { MoreVertical as MoreVerticalBase } from "./icons/ellipsis-vertical.js";
import { MoveHorizontal as MoveHorizontalBase } from "./icons/move-horizontal.js";
import { Newspaper as NewspaperBase } from "./icons/newspaper.js";
import { Palette as PaletteBase } from "./icons/palette.js";
import { PanelLeftClose as PanelLeftCloseBase } from "./icons/panel-left-close.js";
import { PanelLeftOpen as PanelLeftOpenBase } from "./icons/panel-left-open.js";
import { Paperclip as PaperclipBase } from "./icons/paperclip.js";
import { PenSquare as PenSquareBase } from "./icons/square-pen.js";
import { Pencil as PencilBase } from "./icons/pencil.js";
import { PencilLine as PencilLineBase } from "./icons/pencil-line.js";
import { Percent as PercentBase } from "./icons/percent.js";
import { Pin as PinBase } from "./icons/pin.js";
import { Plane as PlaneBase } from "./icons/plane.js";
import { Plug as PlugBase } from "./icons/plug.js";
import { Plus as PlusBase } from "./icons/plus.js";
import { PlusCircle as PlusCircleBase } from "./icons/circle-plus.js";
import { Power as PowerBase } from "./icons/power.js";
import { Quote as QuoteBase } from "./icons/quote.js";
import { Radar as RadarBase } from "./icons/radar.js";
import { Radio as RadioBase } from "./icons/radio.js";
import { RefreshCw as RefreshCwBase } from "./icons/refresh-cw.js";
import { Repeat as RepeatBase } from "./icons/repeat.js";
import { Rocket as RocketBase } from "./icons/rocket.js";
import { RotateCcw as RotateCcwBase } from "./icons/rotate-ccw.js";
import { Rss as RssBase } from "./icons/rss.js";
import { ScrollText as ScrollTextBase } from "./icons/scroll-text.js";
import { Search as SearchBase } from "./icons/search.js";
import { Send as SendBase } from "./icons/send.js";
import { Settings as SettingsBase } from "./icons/settings.js";
import { Share2 as Share2Base } from "./icons/share-2.js";
import { Shield as ShieldBase } from "./icons/shield.js";
import { ShieldAlert as ShieldAlertBase } from "./icons/shield-exclamation-point.js";
import { ShieldCheck as ShieldCheckBase } from "./icons/shield-check.js";
import { SlidersHorizontal as SlidersHorizontalBase } from "./icons/sliders-horizontal.js";
import { Smartphone as SmartphoneBase } from "./icons/smartphone.js";
import { Sparkles as SparklesBase } from "./icons/sparkles.js";
import { Square as SquareBase } from "./icons/square.js";
import { Star as StarBase } from "./icons/star.js";
import { StickyNote as StickyNoteBase } from "./icons/sticky-note.js";
import { Strikethrough as StrikethroughBase } from "./icons/strikethrough.js";
import { Sun as SunBase } from "./icons/sun.js";
import { Tag as TagBase } from "./icons/tag.js";
import { Target as TargetBase } from "./icons/target.js";
import { ThumbsUp as ThumbsUpBase } from "./icons/thumbs-up.js";
import { Timer as TimerBase } from "./icons/timer.js";
import { Trash2 as Trash2Base } from "./icons/trash.js";
import { TrendingDown as TrendingDownBase } from "./icons/trending-down.js";
import { TrendingUp as TrendingUpBase } from "./icons/trending-up.js";
import { Trophy as TrophyBase } from "./icons/trophy.js";
import { Underline as UnderlineBase } from "./icons/underline.js";
import { Undo2 as Undo2Base } from "./icons/undo-2.js";
import { Upload as UploadBase } from "./icons/upload.js";
import { UploadCloud as UploadCloudBase } from "./icons/cloud-upload.js";
import { User as UserBase } from "./icons/user.js";
import { UserCheck as UserCheckBase } from "./icons/user-check.js";
import { UserMinus as UserMinusBase } from "./icons/user-minus.js";
import { UserPlus as UserPlusBase } from "./icons/user-plus.js";
import { Users as UsersBase } from "./icons/users.js";
import { Vibrate as VibrateBase } from "./icons/vibrate.js";
import { Video as VideoBase } from "./icons/video.js";
import { Wand2 as Wand2Base } from "./icons/wand-sparkles.js";
import { Wrench as WrenchBase } from "./icons/wrench.js";
import { X as XBase } from "./icons/x.js";
import { XCircle as XCircleBase } from "./icons/circle-x.js";
import { Zap as ZapBase } from "./icons/zap.js";
import { Accessibility as AccessibilityBase } from "./icons/accessibility.js";
import { Ambulance as AmbulanceBase } from "./icons/ambulance.js";
import { Baby as BabyBase } from "./icons/baby.js";
import { Bandage as BandageBase } from "./icons/bandage.js";
import { BicepsFlexed as BicepsFlexedBase } from "./icons/biceps-flexed.js";
import { Biohazard as BiohazardBase } from "./icons/biohazard.js";
import { Bone as BoneBase } from "./icons/bone.js";
import { BoneFracture as BoneFractureBase } from "./icons/bone-fracture.js";
import { Brain as BrainBase } from "./icons/brain.js";
import { BrainCircuit as BrainCircuitBase } from "./icons/brain-circuit.js";
import { BrainCog as BrainCogBase } from "./icons/brain-cog.js";
import { BrainOff as BrainOffBase } from "./icons/brain-off.js";
import { Cigarette as CigaretteBase } from "./icons/cigarette.js";
import { CigaretteOff as CigaretteOffBase } from "./icons/cigarette-off.js";
import { Dna as DnaBase } from "./icons/dna.js";
import { DnaOff as DnaOffBase } from "./icons/dna-off.js";
import { Dumbbell as DumbbellBase } from "./icons/dumbbell.js";
import { Ear as EarBase } from "./icons/ear.js";
import { EarOff as EarOffBase } from "./icons/ear-off.js";
import { FlaskConicalOff as FlaskConicalOffBase } from "./icons/flask-conical-off.js";
import { Footprints as FootprintsBase } from "./icons/footprints.js";
import { HeartPlus as HeartPlusBase } from "./icons/heart-plus.js";
import { HeartPulse as HeartPulseBase } from "./icons/heart-pulse.js";
import { HeartX as HeartXBase } from "./icons/heart-x.js";
import { Hospital as HospitalBase } from "./icons/hospital.js";
import { PersonStanding as PersonStandingBase } from "./icons/person-standing.js";
import { Pill as PillBase } from "./icons/pill.js";
import { PillBottle as PillBottleBase } from "./icons/pill-bottle.js";
import { Radiation as RadiationBase } from "./icons/radiation.js";
import { ScanHeart as ScanHeartBase } from "./icons/scan-heart.js";
import { SquareActivity as SquareActivityBase } from "./icons/square-activity.js";
import { Stethoscope as StethoscopeBase } from "./icons/stethoscope.js";
import { Syringe as SyringeBase } from "./icons/syringe.js";
import { Tablets as TabletsBase } from "./icons/tablets.js";
import { Thermometer as ThermometerBase } from "./icons/thermometer.js";
import { ThermometerSnowflake as ThermometerSnowflakeBase } from "./icons/thermometer-snowflake.js";
import { BadgeEuro as BadgeEuroBase } from "./icons/badge-euro.js";
import { BadgeJapaneseYen as BadgeJapaneseYenBase } from "./icons/badge-japanese-yen.js";
import { BadgePercent as BadgePercentBase } from "./icons/badge-percent.js";
import { BadgePoundSterling as BadgePoundSterlingBase } from "./icons/badge-pound-sterling.js";
import { Banknote as BanknoteBase } from "./icons/banknote.js";
import { BanknoteArrowDown as BanknoteArrowDownBase } from "./icons/banknote-arrow-down.js";
import { BanknoteArrowUp as BanknoteArrowUpBase } from "./icons/banknote-arrow-up.js";
import { BanknoteCheck as BanknoteCheckBase } from "./icons/banknote-check.js";
import { BanknoteX as BanknoteXBase } from "./icons/banknote-x.js";
import { Calculator as CalculatorBase } from "./icons/calculator.js";
import { CircleDollarSign as CircleDollarSignBase } from "./icons/circle-dollar-sign.js";
import { CircleEuro as CircleEuroBase } from "./icons/circle-euro.js";
import { CirclePoundSterling as CirclePoundSterlingBase } from "./icons/circle-pound-sterling.js";
import { Coins as CoinsBase } from "./icons/coins.js";
import { CreditCard as CreditCardBase } from "./icons/credit-card.js";
import { CreditCardCheck as CreditCardCheckBase } from "./icons/credit-card-check.js";
import { CreditCardMinus as CreditCardMinusBase } from "./icons/credit-card-minus.js";
import { CreditCardPlus as CreditCardPlusBase } from "./icons/credit-card-plus.js";
import { CreditCardReader as CreditCardReaderBase } from "./icons/credit-card-reader.js";
import { CreditCardX as CreditCardXBase } from "./icons/credit-card-x.js";
import { Currency as CurrencyBase } from "./icons/currency.js";
import { Euro as EuroBase } from "./icons/euro.js";
import { HandCoins as HandCoinsBase } from "./icons/hand-coins.js";
import { IndianRupee as IndianRupeeBase } from "./icons/indian-rupee.js";
import { Landmark as LandmarkBase } from "./icons/landmark.js";
import { PiggyBank as PiggyBankBase } from "./icons/piggy-bank.js";
import { PoundSterling as PoundSterlingBase } from "./icons/pound-sterling.js";
import { Receipt as ReceiptBase } from "./icons/receipt.js";
import { ReceiptCent as ReceiptCentBase } from "./icons/receipt-cent.js";
import { ReceiptEuro as ReceiptEuroBase } from "./icons/receipt-euro.js";
import { ReceiptPoundSterling as ReceiptPoundSterlingBase } from "./icons/receipt-pound-sterling.js";
import { ReceiptSwissFranc as ReceiptSwissFrancBase } from "./icons/receipt-swiss-franc.js";
import { ReceiptText as ReceiptTextBase } from "./icons/receipt-text.js";
import { Scale as ScaleBase } from "./icons/scale.js";
import { SwissFranc as SwissFrancBase } from "./icons/swiss-franc.js";
import { Vault as VaultBase } from "./icons/vault.js";
import { Wallet as WalletBase } from "./icons/wallet.js";
import { WalletCards as WalletCardsBase } from "./icons/wallet-cards.js";
import { Banana as BananaBase } from "./icons/banana.js";
import { Beef as BeefBase } from "./icons/beef.js";
import { BeefOff as BeefOffBase } from "./icons/beef-off.js";
import { Beer as BeerBase } from "./icons/beer.js";
import { BeerOff as BeerOffBase } from "./icons/beer-off.js";
import { Blender as BlenderBase } from "./icons/blender.js";
import { BottleWine as BottleWineBase } from "./icons/bottle-wine.js";
import { Cake as CakeBase } from "./icons/cake.js";
import { CakeSlice as CakeSliceBase } from "./icons/cake-slice.js";
import { Candy as CandyBase } from "./icons/candy.js";
import { CandyOff as CandyOffBase } from "./icons/candy-off.js";
import { Carrot as CarrotBase } from "./icons/carrot.js";
import { ChefHat as ChefHatBase } from "./icons/chef-hat.js";
import { Cherry as CherryBase } from "./icons/cherry.js";
import { Citrus as CitrusBase } from "./icons/citrus.js";
import { Coffee as CoffeeBase } from "./icons/coffee.js";
import { Cookie as CookieBase } from "./icons/cookie.js";
import { CookingPot as CookingPotBase } from "./icons/cooking-pot.js";
import { Croissant as CroissantBase } from "./icons/croissant.js";
import { CupSoda as CupSodaBase } from "./icons/cup-soda.js";
import { Dessert as DessertBase } from "./icons/dessert.js";
import { Donut as DonutBase } from "./icons/donut.js";
import { Drumstick as DrumstickBase } from "./icons/drumstick.js";
import { Egg as EggBase } from "./icons/egg.js";
import { EggOff as EggOffBase } from "./icons/egg-off.js";
import { Grape as GrapeBase } from "./icons/grape.js";
import { Ham as HamBase } from "./icons/ham.js";
import { Hamburger as HamburgerBase } from "./icons/hamburger.js";
import { IceCreamBowl as IceCreamBowlBase } from "./icons/ice-cream-bowl.js";
import { Martini as MartiniBase } from "./icons/martini.js";
import { Menu as MenuBase } from "./icons/menu.js";
import { Microwave as MicrowaveBase } from "./icons/microwave.js";
import { Milk as MilkBase } from "./icons/milk.js";
import { MilkOff as MilkOffBase } from "./icons/milk-off.js";
import { Pizza as PizzaBase } from "./icons/pizza.js";
import { Popcorn as PopcornBase } from "./icons/popcorn.js";
import { Refrigerator as RefrigeratorBase } from "./icons/refrigerator.js";
import { Salad as SaladBase } from "./icons/salad.js";
import { Sandwich as SandwichBase } from "./icons/sandwich.js";
import { Soup as SoupBase } from "./icons/soup.js";
import { Utensils as UtensilsBase } from "./icons/utensils.js";
import { UtensilsCrossed as UtensilsCrossedBase } from "./icons/utensils-crossed.js";
import { Vegan as VeganBase } from "./icons/vegan.js";
import { Wheat as WheatBase } from "./icons/wheat.js";
import { WheatOff as WheatOffBase } from "./icons/wheat-off.js";
import { Wine as WineBase } from "./icons/wine.js";
import { WineOff as WineOffBase } from "./icons/wine-off.js";
import { Cloud as CloudBase } from "./icons/cloud.js";
import { CloudDrizzle as CloudDrizzleBase } from "./icons/cloud-drizzle.js";
import { CloudExclamationPoint as CloudExclamationPointBase } from "./icons/cloud-exclamation-point.js";
import { CloudFog as CloudFogBase } from "./icons/cloud-fog.js";
import { CloudHail as CloudHailBase } from "./icons/cloud-hail.js";
import { CloudLightning as CloudLightningBase } from "./icons/cloud-lightning.js";
import { CloudMoon as CloudMoonBase } from "./icons/cloud-moon.js";
import { CloudRain as CloudRainBase } from "./icons/cloud-rain.js";
import { CloudSnow as CloudSnowBase } from "./icons/cloud-snow.js";
import { Clover as CloverBase } from "./icons/clover.js";
import { Droplet as DropletBase } from "./icons/droplet.js";
import { DropletOff as DropletOffBase } from "./icons/droplet-off.js";
import { Droplets as DropletsBase } from "./icons/droplets.js";
import { Eclipse as EclipseBase } from "./icons/eclipse.js";
import { Flower as FlowerBase } from "./icons/flower.js";
import { Haze as HazeBase } from "./icons/haze.js";
import { Leaf as LeafBase } from "./icons/leaf.js";
import { Rainbow as RainbowBase } from "./icons/rainbow.js";
import { Snowflake as SnowflakeBase } from "./icons/snowflake.js";
import { Sprout as SproutBase } from "./icons/sprout.js";
import { SunDim as SunDimBase } from "./icons/sun-dim.js";
import { SunMedium as SunMediumBase } from "./icons/sun-medium.js";
import { SunMoon as SunMoonBase } from "./icons/sun-moon.js";
import { Sunrise as SunriseBase } from "./icons/sunrise.js";
import { Sunset as SunsetBase } from "./icons/sunset.js";
import { SunSnow as SunSnowBase } from "./icons/sun-snow.js";
import { Tornado as TornadoBase } from "./icons/tornado.js";
import { Umbrella as UmbrellaBase } from "./icons/umbrella.js";
import { UmbrellaOff as UmbrellaOffBase } from "./icons/umbrella-off.js";
import { WavesArrowDown as WavesArrowDownBase } from "./icons/waves-arrow-down.js";
import { WavesArrowUp as WavesArrowUpBase } from "./icons/waves-arrow-up.js";
import { WavesHorizontal as WavesHorizontalBase } from "./icons/waves-horizontal.js";
import { WavesLadder as WavesLadderBase } from "./icons/waves-ladder.js";
import { WavesVertical as WavesVerticalBase } from "./icons/waves-vertical.js";
import { Wind as WindBase } from "./icons/wind.js";
import { WindArrowDown as WindArrowDownBase } from "./icons/wind-arrow-down.js";
import { WindArrowUp as WindArrowUpBase } from "./icons/wind-arrow-up.js";
import { Atom as AtomBase } from "./icons/atom.js";
import { Backpack as BackpackBase } from "./icons/backpack.js";
import { Book as BookBase } from "./icons/book.js";
import { BookAudio as BookAudioBase } from "./icons/book-audio.js";
import { BookCheck as BookCheckBase } from "./icons/book-check.js";
import { BookCopy as BookCopyBase } from "./icons/book-copy.js";
import { BookHeart as BookHeartBase } from "./icons/book-heart.js";
import { BookKey as BookKeyBase } from "./icons/book-key.js";
import { BookOpenCheck as BookOpenCheckBase } from "./icons/book-open-check.js";
import { BookPlus as BookPlusBase } from "./icons/book-plus.js";
import { BookX as BookXBase } from "./icons/book-x.js";
import { DraftingCompass as DraftingCompassBase } from "./icons/drafting-compass.js";
import { FlaskConical as FlaskConicalBase } from "./icons/flask-conical.js";
import { FlaskRound as FlaskRoundBase } from "./icons/flask-round.js";
import { Library as LibraryBase } from "./icons/library.js";
import { LibraryBig as LibraryBigBase } from "./icons/library-big.js";
import { Microscope as MicroscopeBase } from "./icons/microscope.js";
import { Notebook as NotebookBase } from "./icons/notebook.js";
import { NotebookDot as NotebookDotBase } from "./icons/notebook-dot.js";
import { NotebookPen as NotebookPenBase } from "./icons/notebook-pen.js";
import { NotebookTabs as NotebookTabsBase } from "./icons/notebook-tabs.js";
import { NotebookText as NotebookTextBase } from "./icons/notebook-text.js";
import { Orbit as OrbitBase } from "./icons/orbit.js";
import { PencilRuler as PencilRulerBase } from "./icons/pencil-ruler.js";
import { Presentation as PresentationBase } from "./icons/presentation.js";
import { Ruler as RulerBase } from "./icons/ruler.js";
import { RulerDimensionLine as RulerDimensionLineBase } from "./icons/ruler-dimension-line.js";
import { School as SchoolBase } from "./icons/school.js";
import { Telescope as TelescopeBase } from "./icons/telescope.js";
import { TestTube as TestTubeBase } from "./icons/test-tube.js";
import { University as UniversityBase } from "./icons/university.js";
import { Anchor as AnchorBase } from "./icons/anchor.js";
import { Bike as BikeBase } from "./icons/bike.js";
import { Bus as BusBase } from "./icons/bus.js";
import { Car as CarBase } from "./icons/car.js";
import { Caravan as CaravanBase } from "./icons/caravan.js";
import { CarBattery as CarBatteryBase } from "./icons/car-battery.js";
import { Fuel as FuelBase } from "./icons/fuel.js";
import { Hotel as HotelBase } from "./icons/hotel.js";
import { Luggage as LuggageBase } from "./icons/luggage.js";
import { MapPinOff as MapPinOffBase } from "./icons/map-pin-off.js";
import { Mountain as MountainBase } from "./icons/mountain.js";
import { ParkingMeter as ParkingMeterBase } from "./icons/parking-meter.js";
import { PlaneLanding as PlaneLandingBase } from "./icons/plane-landing.js";
import { Road as RoadBase } from "./icons/road.js";
import { RouteOff as RouteOffBase } from "./icons/route-off.js";
import { Sailboat as SailboatBase } from "./icons/sailboat.js";
import { Scooter as ScooterBase } from "./icons/scooter.js";
import { Ship as ShipBase } from "./icons/ship.js";
import { ShipCargo as ShipCargoBase } from "./icons/ship-cargo.js";
import { ShipWheel as ShipWheelBase } from "./icons/ship-wheel.js";
import { Tent as TentBase } from "./icons/tent.js";
import { Ticket as TicketBase } from "./icons/ticket.js";
import { TicketCheck as TicketCheckBase } from "./icons/ticket-check.js";
import { TicketMinus as TicketMinusBase } from "./icons/ticket-minus.js";
import { TicketPercent as TicketPercentBase } from "./icons/ticket-percent.js";
import { TicketPlus as TicketPlusBase } from "./icons/ticket-plus.js";
import { Tickets as TicketsBase } from "./icons/tickets.js";
import { TicketSlash as TicketSlashBase } from "./icons/ticket-slash.js";
import { TicketsPlane as TicketsPlaneBase } from "./icons/tickets-plane.js";
import { TicketX as TicketXBase } from "./icons/ticket-x.js";
import { TrafficCone as TrafficConeBase } from "./icons/traffic-cone.js";
import { TrainFront as TrainFrontBase } from "./icons/train-front.js";
import { TramFront as TramFrontBase } from "./icons/tram-front.js";
import { Barcode as BarcodeBase } from "./icons/barcode.js";
import { Container as ContainerBase } from "./icons/container.js";
import { Package as PackageBase } from "./icons/package.js";
import { Package2 as Package2Base } from "./icons/package-2.js";
import { PackageCheck as PackageCheckBase } from "./icons/package-check.js";
import { PackageMinus as PackageMinusBase } from "./icons/package-minus.js";
import { PackagePen as PackagePenBase } from "./icons/package-pen.js";
import { PackagePlus as PackagePlusBase } from "./icons/package-plus.js";
import { PackageQuestionMark as PackageQuestionMarkBase } from "./icons/package-question-mark.js";
import { PackageSearch as PackageSearchBase } from "./icons/package-search.js";
import { PackageX as PackageXBase } from "./icons/package-x.js";
import { QrCode as QrCodeBase } from "./icons/qr-code.js";
import { ReceiptIndianRupee as ReceiptIndianRupeeBase } from "./icons/receipt-indian-rupee.js";
import { ReceiptJapaneseYen as ReceiptJapaneseYenBase } from "./icons/receipt-japanese-yen.js";
import { ReceiptTurkishLira as ReceiptTurkishLiraBase } from "./icons/receipt-turkish-lira.js";
import { ScanBarcode as ScanBarcodeBase } from "./icons/scan-barcode.js";
import { ScanLine as ScanLineBase } from "./icons/scan-line.js";
import { ScanQrCode as ScanQrCodeBase } from "./icons/scan-qr-code.js";
import { ShoppingBag as ShoppingBagBase } from "./icons/shopping-bag.js";
import { ShoppingBasket as ShoppingBasketBase } from "./icons/shopping-basket.js";
import { ShoppingCart as ShoppingCartBase } from "./icons/shopping-cart.js";
import { ShoppingCartMinus as ShoppingCartMinusBase } from "./icons/shopping-cart-minus.js";
import { ShoppingCartPlus as ShoppingCartPlusBase } from "./icons/shopping-cart-plus.js";
import { Store as StoreBase } from "./icons/store.js";
import { TagPlus as TagPlusBase } from "./icons/tag-plus.js";
import { Tags as TagsBase } from "./icons/tags.js";
import { TagX as TagXBase } from "./icons/tag-x.js";
import { Truck as TruckBase } from "./icons/truck.js";
import { TruckElectric as TruckElectricBase } from "./icons/truck-electric.js";
import { WalletMinimal as WalletMinimalBase } from "./icons/wallet-minimal.js";
import { BrickWallFire as BrickWallFireBase } from "./icons/brick-wall-fire.js";
import { BrickWallShield as BrickWallShieldBase } from "./icons/brick-wall-shield.js";
import { EarthLock as EarthLockBase } from "./icons/earth-lock.js";
import { EyeClosed as EyeClosedBase } from "./icons/eye-closed.js";
import { EyeDashed as EyeDashedBase } from "./icons/eye-dashed.js";
import { FileKey as FileKeyBase } from "./icons/file-key.js";
import { FileLock as FileLockBase } from "./icons/file-lock.js";
import { Gavel as GavelBase } from "./icons/gavel.js";
import { GlobeLock as GlobeLockBase } from "./icons/globe-lock.js";
import { KeySquare as KeySquareBase } from "./icons/key-square.js";
import { LockKeyhole as LockKeyholeBase } from "./icons/lock-keyhole.js";
import { LockKeyholeOpen as LockKeyholeOpenBase } from "./icons/lock-keyhole-open.js";
import { LockOpen as LockOpenBase } from "./icons/lock-open.js";
import { ScanEye as ScanEyeBase } from "./icons/scan-eye.js";
import { ShieldBan as ShieldBanBase } from "./icons/shield-ban.js";
import { ShieldCog as ShieldCogBase } from "./icons/shield-cog.js";
import { ShieldEllipsis as ShieldEllipsisBase } from "./icons/shield-ellipsis.js";
import { ShieldHalf as ShieldHalfBase } from "./icons/shield-half.js";
import { ShieldMinus as ShieldMinusBase } from "./icons/shield-minus.js";
import { ShieldOff as ShieldOffBase } from "./icons/shield-off.js";
import { ShieldPlus as ShieldPlusBase } from "./icons/shield-plus.js";
import { ShieldQuestionMark as ShieldQuestionMarkBase } from "./icons/shield-question-mark.js";
import { ShieldX as ShieldXBase } from "./icons/shield-x.js";
import { Siren as SirenBase } from "./icons/siren.js";
import { SirenOff as SirenOffBase } from "./icons/siren-off.js";
import { VenetianMask as VenetianMaskBase } from "./icons/venetian-mask.js";
import { BellCheck as BellCheckBase } from "./icons/bell-check.js";
import { BellDot as BellDotBase } from "./icons/bell-dot.js";
import { BellElectric as BellElectricBase } from "./icons/bell-electric.js";
import { BellMinus as BellMinusBase } from "./icons/bell-minus.js";
import { BellOff as BellOffBase } from "./icons/bell-off.js";
import { BellPlus as BellPlusBase } from "./icons/bell-plus.js";
import { Contact as ContactBase } from "./icons/contact.js";
import { Forward as ForwardBase } from "./icons/forward.js";
import { Headset as HeadsetBase } from "./icons/headset.js";
import { MailBadge as MailBadgeBase } from "./icons/mail-badge.js";
import { Mailbox as MailboxBase } from "./icons/mailbox.js";
import { MailClock as MailClockBase } from "./icons/mail-clock.js";
import { MailDot as MailDotBase } from "./icons/mail-dot.js";
import { MailMinus as MailMinusBase } from "./icons/mail-minus.js";
import { MailPen as MailPenBase } from "./icons/mail-pen.js";
import { MailQuestionMark as MailQuestionMarkBase } from "./icons/mail-question-mark.js";
import { Mails as MailsBase } from "./icons/mails.js";
import { MailSearch as MailSearchBase } from "./icons/mail-search.js";
import { MailX as MailXBase } from "./icons/mail-x.js";
import { Megaphone as MegaphoneBase } from "./icons/megaphone.js";
import { MegaphoneOff as MegaphoneOffBase } from "./icons/megaphone-off.js";
import { MessageCircle as MessageCircleBase } from "./icons/message-circle.js";
import { MessageCircleDashedCheck as MessageCircleDashedCheckBase } from "./icons/message-circle-dashed-check.js";
import { MessageCircleOff as MessageCircleOffBase } from "./icons/message-circle-off.js";
import { MessageCircleText as MessageCircleTextBase } from "./icons/message-circle-text.js";
import { MessageCircleX as MessageCircleXBase } from "./icons/message-circle-x.js";
import { MessageSquareDiff as MessageSquareDiffBase } from "./icons/message-square-diff.js";
import { MessageSquareLock as MessageSquareLockBase } from "./icons/message-square-lock.js";
import { MessageSquareOff as MessageSquareOffBase } from "./icons/message-square-off.js";
import { MessageSquareX as MessageSquareXBase } from "./icons/message-square-x.js";
import { MessagesSquare as MessagesSquareBase } from "./icons/messages-square.js";
import { Phone as PhoneBase } from "./icons/phone.js";
import { PhoneLog as PhoneLogBase } from "./icons/phone-log.js";
import { PhoneOff as PhoneOffBase } from "./icons/phone-off.js";
import { RadioOff as RadioOffBase } from "./icons/radio-off.js";
import { Reply as ReplyBase } from "./icons/reply.js";
import { Satellite as SatelliteBase } from "./icons/satellite.js";
import { SatelliteDish as SatelliteDishBase } from "./icons/satellite-dish.js";
import { SendToBack as SendToBackBase } from "./icons/send-to-back.js";
import { Share as ShareBase } from "./icons/share.js";
import { Speech as SpeechBase } from "./icons/speech.js";
import { Voicemail as VoicemailBase } from "./icons/voicemail.js";
import { Airplay as AirplayBase } from "./icons/airplay.js";
import { Aperture as ApertureBase } from "./icons/aperture.js";
import { AudioLines as AudioLinesBase } from "./icons/audio-lines.js";
import { AudioLinesOff as AudioLinesOffBase } from "./icons/audio-lines-off.js";
import { AudioLinesX as AudioLinesXBase } from "./icons/audio-lines-x.js";
import { AudioWaveform as AudioWaveformBase } from "./icons/audio-waveform.js";
import { CameraOff as CameraOffBase } from "./icons/camera-off.js";
import { Captions as CaptionsBase } from "./icons/captions.js";
import { CaptionsOff as CaptionsOffBase } from "./icons/captions-off.js";
import { Cast as CastBase } from "./icons/cast.js";
import { Clapperboard as ClapperboardBase } from "./icons/clapperboard.js";
import { Disc as DiscBase } from "./icons/disc.js";
import { Disc2 as Disc2Base } from "./icons/disc-2.js";
import { Disc3 as Disc3Base } from "./icons/disc-3.js";
import { DiscAlbum as DiscAlbumBase } from "./icons/disc-album.js";
import { FastForward as FastForwardBase } from "./icons/fast-forward.js";
import { Film as FilmBase } from "./icons/film.js";
import { Headphones as HeadphonesBase } from "./icons/headphones.js";
import { ImageOff as ImageOffBase } from "./icons/image-off.js";
import { ImagePlay as ImagePlayBase } from "./icons/image-play.js";
import { Images as ImagesBase } from "./icons/images.js";
import { ImageUp as ImageUpBase } from "./icons/image-up.js";
import { Mic as MicBase } from "./icons/mic.js";
import { MicAudioLines as MicAudioLinesBase } from "./icons/mic-audio-lines.js";
import { MicOff as MicOffBase } from "./icons/mic-off.js";
import { MicSignal as MicSignalBase } from "./icons/mic-signal.js";
import { MicVocal as MicVocalBase } from "./icons/mic-vocal.js";
import { Pause as PauseBase } from "./icons/pause.js";
import { Play as PlayBase } from "./icons/play.js";
import { PlayOff as PlayOffBase } from "./icons/play-off.js";
import { Rewind as RewindBase } from "./icons/rewind.js";
import { SkipBack as SkipBackBase } from "./icons/skip-back.js";
import { Speaker as SpeakerBase } from "./icons/speaker.js";
import { Tv as TvBase } from "./icons/tv.js";
import { TvMinimal as TvMinimalBase } from "./icons/tv-minimal.js";
import { TvMinimalPlay as TvMinimalPlayBase } from "./icons/tv-minimal-play.js";
import { VideoOff as VideoOffBase } from "./icons/video-off.js";
import { Volume as VolumeBase } from "./icons/volume.js";
import { VolumeOff as VolumeOffBase } from "./icons/volume-off.js";
import { Webcam as WebcamBase } from "./icons/webcam.js";
import { WebcamOff as WebcamOffBase } from "./icons/webcam-off.js";
import { ArchiveX as ArchiveXBase } from "./icons/archive-x.js";
import { Clipboard as ClipboardBase } from "./icons/clipboard.js";
import { ClipboardCheck as ClipboardCheckBase } from "./icons/clipboard-check.js";
import { ClipboardClock as ClipboardClockBase } from "./icons/clipboard-clock.js";
import { ClipboardMinus as ClipboardMinusBase } from "./icons/clipboard-minus.js";
import { ClipboardPen as ClipboardPenBase } from "./icons/clipboard-pen.js";
import { ClipboardPenLine as ClipboardPenLineBase } from "./icons/clipboard-pen-line.js";
import { ClipboardPlus as ClipboardPlusBase } from "./icons/clipboard-plus.js";
import { ClipboardType as ClipboardTypeBase } from "./icons/clipboard-type.js";
import { ClipboardX as ClipboardXBase } from "./icons/clipboard-x.js";
import { File as FileBase } from "./icons/file.js";
import { FileBox as FileBoxBase } from "./icons/file-box.js";
import { FileDatabase as FileDatabaseBase } from "./icons/file-database.js";
import { FilePen as FilePenBase } from "./icons/file-pen.js";
import { FilePenLine as FilePenLineBase } from "./icons/file-pen-line.js";
import { Files as FilesBase } from "./icons/files.js";
import { FileScan as FileScanBase } from "./icons/file-scan.js";
import { FileSearchCorner as FileSearchCornerBase } from "./icons/file-search-corner.js";
import { Folder as FolderBase } from "./icons/folder.js";
import { FolderCog as FolderCogBase } from "./icons/folder-cog.js";
import { FolderDot as FolderDotBase } from "./icons/folder-dot.js";
import { FolderKanban as FolderKanbanBase } from "./icons/folder-kanban.js";
import { FolderKey as FolderKeyBase } from "./icons/folder-key.js";
import { FolderPen as FolderPenBase } from "./icons/folder-pen.js";
import { FolderSearch as FolderSearchBase } from "./icons/folder-search.js";
import { FolderSync as FolderSyncBase } from "./icons/folder-sync.js";
import { FolderUsers as FolderUsersBase } from "./icons/folder-users.js";
import { HardDriveDownload as HardDriveDownloadBase } from "./icons/hard-drive-download.js";
import { HardDriveUpload as HardDriveUploadBase } from "./icons/hard-drive-upload.js";
import { NotepadText as NotepadTextBase } from "./icons/notepad-text.js";
import { NotepadTextDashed as NotepadTextDashedBase } from "./icons/notepad-text-dashed.js";
import { Save as SaveBase } from "./icons/save.js";
import { SaveCheck as SaveCheckBase } from "./icons/save-check.js";
import { SaveOff as SaveOffBase } from "./icons/save-off.js";
import { SavePen as SavePenBase } from "./icons/save-pen.js";
import { SavePlus as SavePlusBase } from "./icons/save-plus.js";
import { Scroll as ScrollBase } from "./icons/scroll.js";
import { StickyNoteCheck as StickyNoteCheckBase } from "./icons/sticky-note-check.js";
import { StickyNoteMinus as StickyNoteMinusBase } from "./icons/sticky-note-minus.js";
import { StickyNoteOff as StickyNoteOffBase } from "./icons/sticky-note-off.js";
import { StickyNotePlus as StickyNotePlusBase } from "./icons/sticky-note-plus.js";
import { StickyNoteX as StickyNoteXBase } from "./icons/sticky-note-x.js";
import { Binary as BinaryBase } from "./icons/binary.js";
import { ChartBar as ChartBarBase } from "./icons/chart-bar.js";
import { ChartBellCurve as ChartBellCurveBase } from "./icons/chart-bell-curve.js";
import { ChartCandlestick as ChartCandlestickBase } from "./icons/chart-candlestick.js";
import { ChartGantt as ChartGanttBase } from "./icons/chart-gantt.js";
import { ChartNetwork as ChartNetworkBase } from "./icons/chart-network.js";
import { ChartNoAxesGantt as ChartNoAxesGanttBase } from "./icons/chart-no-axes-gantt.js";
import { ChartQuadrant as ChartQuadrantBase } from "./icons/chart-quadrant.js";
import { ChartRadar as ChartRadarBase } from "./icons/chart-radar.js";
import { ChartSpline as ChartSplineBase } from "./icons/chart-spline.js";
import { Crosshair as CrosshairBase } from "./icons/crosshair.js";
import { Database as DatabaseBase } from "./icons/database.js";
import { DatabaseArrowUp as DatabaseArrowUpBase } from "./icons/database-arrow-up.js";
import { DatabaseBackup as DatabaseBackupBase } from "./icons/database-backup.js";
import { DatabaseCheck as DatabaseCheckBase } from "./icons/database-check.js";
import { DatabaseMinus as DatabaseMinusBase } from "./icons/database-minus.js";
import { DatabasePlus as DatabasePlusBase } from "./icons/database-plus.js";
import { DatabaseSearch as DatabaseSearchBase } from "./icons/database-search.js";
import { DatabaseX as DatabaseXBase } from "./icons/database-x.js";
import { DatabaseZap as DatabaseZapBase } from "./icons/database-zap.js";
import { Network as NetworkBase } from "./icons/network.js";
import { ScanBox as ScanBoxBase } from "./icons/scan-box.js";
import { ScanSearch as ScanSearchBase } from "./icons/scan-search.js";
import { Sigma as SigmaBase } from "./icons/sigma.js";
import { SquareChartGantt as SquareChartGanttBase } from "./icons/square-chart-gantt.js";
import { Table as TableBase } from "./icons/table.js";
import { TableOfContents as TableOfContentsBase } from "./icons/table-of-contents.js";
import { TableProperties as TablePropertiesBase } from "./icons/table-properties.js";
import { TrendingUpDown as TrendingUpDownBase } from "./icons/trending-up-down.js";
import { Battery as BatteryBase } from "./icons/battery.js";
import { BatteryPlus as BatteryPlusBase } from "./icons/battery-plus.js";
import { Bluetooth as BluetoothBase } from "./icons/bluetooth.js";
import { BluetoothOff as BluetoothOffBase } from "./icons/bluetooth-off.js";
import { Cable as CableBase } from "./icons/cable.js";
import { Cpu as CpuBase } from "./icons/cpu.js";
import { CpuAi as CpuAiBase } from "./icons/cpu-ai.js";
import { EthernetPort as EthernetPortBase } from "./icons/ethernet-port.js";
import { HardDrive as HardDriveBase } from "./icons/hard-drive.js";
import { Keyboard as KeyboardBase } from "./icons/keyboard.js";
import { KeyboardMusic as KeyboardMusicBase } from "./icons/keyboard-music.js";
import { KeyboardOff as KeyboardOffBase } from "./icons/keyboard-off.js";
import { Laptop as LaptopBase } from "./icons/laptop.js";
import { MemoryStick as MemoryStickBase } from "./icons/memory-stick.js";
import { MonitorActivity as MonitorActivityBase } from "./icons/monitor-activity.js";
import { MonitorCheck as MonitorCheckBase } from "./icons/monitor-check.js";
import { MonitorCog as MonitorCogBase } from "./icons/monitor-cog.js";
import { MonitorDot as MonitorDotBase } from "./icons/monitor-dot.js";
import { MonitorOff as MonitorOffBase } from "./icons/monitor-off.js";
import { MonitorPc as MonitorPcBase } from "./icons/monitor-pc.js";
import { MonitorPlay as MonitorPlayBase } from "./icons/monitor-play.js";
import { MonitorSmartphone as MonitorSmartphoneBase } from "./icons/monitor-smartphone.js";
import { MonitorX as MonitorXBase } from "./icons/monitor-x.js";
import { Mouse as MouseBase } from "./icons/mouse.js";
import { MouseOff as MouseOffBase } from "./icons/mouse-off.js";
import { MousePointer2Off as MousePointer2OffBase } from "./icons/mouse-pointer-2-off.js";
import { Plug2 as Plug2Base } from "./icons/plug-2.js";
import { PlugZap as PlugZapBase } from "./icons/plug-zap.js";
import { PowerOff as PowerOffBase } from "./icons/power-off.js";
import { Printer as PrinterBase } from "./icons/printer.js";
import { Printer3D as Printer3DBase } from "./icons/printer-3d.js";
import { PrinterCheck as PrinterCheckBase } from "./icons/printer-check.js";
import { PrinterX as PrinterXBase } from "./icons/printer-x.js";
import { Projector as ProjectorBase } from "./icons/projector.js";
import { Router as RouterBase } from "./icons/router.js";
import { Server as ServerBase } from "./icons/server.js";
import { ServerNas as ServerNasBase } from "./icons/server-nas.js";
import { ServerPlus as ServerPlusBase } from "./icons/server-plus.js";
import { SmartphoneCharging as SmartphoneChargingBase } from "./icons/smartphone-charging.js";
import { SmartphoneNfc as SmartphoneNfcBase } from "./icons/smartphone-nfc.js";
import { SmartphoneUserRound as SmartphoneUserRoundBase } from "./icons/smartphone-user-round.js";
import { Tablet as TabletBase } from "./icons/tablet.js";
import { TabletSmartphone as TabletSmartphoneBase } from "./icons/tablet-smartphone.js";
import { Usb as UsbBase } from "./icons/usb.js";
import { UsbCPort as UsbCPortBase } from "./icons/usb-c-port.js";
import { Wifi as WifiBase } from "./icons/wifi.js";
import { WifiCog as WifiCogBase } from "./icons/wifi-cog.js";
import { WifiLock as WifiLockBase } from "./icons/wifi-lock.js";
import { WifiOff as WifiOffBase } from "./icons/wifi-off.js";
import { WifiPen as WifiPenBase } from "./icons/wifi-pen.js";
import { WifiSync as WifiSyncBase } from "./icons/wifi-sync.js";
import { Box as BoxBase } from "./icons/box.js";
import { Boxes as BoxesBase } from "./icons/boxes.js";
import { BoxesLinked as BoxesLinkedBase } from "./icons/boxes-linked.js";
import { Braces as BracesBase } from "./icons/braces.js";
import { Brackets as BracketsBase } from "./icons/brackets.js";
import { Bug as BugBase } from "./icons/bug.js";
import { BugOff as BugOffBase } from "./icons/bug-off.js";
import { BugPlay as BugPlayBase } from "./icons/bug-play.js";
import { CodeXml as CodeXmlBase } from "./icons/code-xml.js";
import { Command as CommandBase } from "./icons/command.js";
import { GitBranch as GitBranchBase } from "./icons/git-branch.js";
import { GitBranchMinus as GitBranchMinusBase } from "./icons/git-branch-minus.js";
import { GitBranchPlus as GitBranchPlusBase } from "./icons/git-branch-plus.js";
import { GitCompare as GitCompareBase } from "./icons/git-compare.js";
import { GitFork as GitForkBase } from "./icons/git-fork.js";
import { GitGraph as GitGraphBase } from "./icons/git-graph.js";
import { GitMerge as GitMergeBase } from "./icons/git-merge.js";
import { GitMergeConflict as GitMergeConflictBase } from "./icons/git-merge-conflict.js";
import { GitPullRequestCreate as GitPullRequestCreateBase } from "./icons/git-pull-request-create.js";
import { Puzzle as PuzzleBase } from "./icons/puzzle.js";
import { Regex as RegexBase } from "./icons/regex.js";
import { ServerCog as ServerCogBase } from "./icons/server-cog.js";
import { ServerOff as ServerOffBase } from "./icons/server-off.js";
import { Terminal as TerminalBase } from "./icons/terminal.js";
import { Variable as VariableBase } from "./icons/variable.js";
import { Webhook as WebhookBase } from "./icons/webhook.js";
import { WebhookOff as WebhookOffBase } from "./icons/webhook-off.js";
import { Workflow as WorkflowBase } from "./icons/workflow.js";
import { ALargeSmall as ALargeSmallBase } from "./icons/a-large-small.js";
import { AlignEndHorizontal as AlignEndHorizontalBase } from "./icons/align-end-horizontal.js";
import { AlignEndVertical as AlignEndVerticalBase } from "./icons/align-end-vertical.js";
import { AlignHorizontalSpaceBetween as AlignHorizontalSpaceBetweenBase } from "./icons/align-horizontal-space-between.js";
import { AlignStartHorizontal as AlignStartHorizontalBase } from "./icons/align-start-horizontal.js";
import { AlignStartVertical as AlignStartVerticalBase } from "./icons/align-start-vertical.js";
import { AlignVerticalSpaceBetween as AlignVerticalSpaceBetweenBase } from "./icons/align-vertical-space-between.js";
import { Baseline as BaselineBase } from "./icons/baseline.js";
import { CaseLower as CaseLowerBase } from "./icons/case-lower.js";
import { CopyCheck as CopyCheckBase } from "./icons/copy-check.js";
import { CopySlash as CopySlashBase } from "./icons/copy-slash.js";
import { CopyX as CopyXBase } from "./icons/copy-x.js";
import { Eraser as EraserBase } from "./icons/eraser.js";
import { Heading1 as Heading1Base } from "./icons/heading-1.js";
import { Heading3 as Heading3Base } from "./icons/heading-3.js";
import { Heading4 as Heading4Base } from "./icons/heading-4.js";
import { Heading5 as Heading5Base } from "./icons/heading-5.js";
import { Heading6 as Heading6Base } from "./icons/heading-6.js";
import { Highlighter as HighlighterBase } from "./icons/highlighter.js";
import { Ligature as LigatureBase } from "./icons/ligature.js";
import { ListCheck as ListCheckBase } from "./icons/list-check.js";
import { ListChecks as ListChecksBase } from "./icons/list-checks.js";
import { ListChevronsDownUp as ListChevronsDownUpBase } from "./icons/list-chevrons-down-up.js";
import { ListChevronsUpDown as ListChevronsUpDownBase } from "./icons/list-chevrons-up-down.js";
import { ListClock as ListClockBase } from "./icons/list-clock.js";
import { ListCollapse as ListCollapseBase } from "./icons/list-collapse.js";
import { ListSortAscending as ListSortAscendingBase } from "./icons/list-sort-ascending.js";
import { ListSortDescending as ListSortDescendingBase } from "./icons/list-sort-descending.js";
import { ListX as ListXBase } from "./icons/list-x.js";
import { Pen as PenBase } from "./icons/pen.js";
import { PencilOff as PencilOffBase } from "./icons/pencil-off.js";
import { PencilSparkles as PencilSparklesBase } from "./icons/pencil-sparkles.js";
import { PenLine as PenLineBase } from "./icons/pen-line.js";
import { PenOff as PenOffBase } from "./icons/pen-off.js";
import { Pilcrow as PilcrowBase } from "./icons/pilcrow.js";
import { RemoveFormatting as RemoveFormattingBase } from "./icons/remove-formatting.js";
import { Scissors as ScissorsBase } from "./icons/scissors.js";
import { SpellCheck as SpellCheckBase } from "./icons/spell-check.js";
import { SpellCheck2 as SpellCheck2Base } from "./icons/spell-check-2.js";
import { Subscript as SubscriptBase } from "./icons/subscript.js";
import { Superscript as SuperscriptBase } from "./icons/superscript.js";
import { TextAlignStart as TextAlignStartBase } from "./icons/text-align-start.js";
import { TextCursor as TextCursorBase } from "./icons/text-cursor.js";
import { TextInitial as TextInitialBase } from "./icons/text-initial.js";
import { TextSearch as TextSearchBase } from "./icons/text-search.js";
import { TextWrap as TextWrapBase } from "./icons/text-wrap.js";
import { Type as TypeBase } from "./icons/type.js";
import { TypeOutline as TypeOutlineBase } from "./icons/type-outline.js";
import { WholeWord as WholeWordBase } from "./icons/whole-word.js";
import { Axis3D as Axis3DBase } from "./icons/axis-3d.js";
import { Blend as BlendBase } from "./icons/blend.js";
import { Brush as BrushBase } from "./icons/brush.js";
import { BrushCleaning as BrushCleaningBase } from "./icons/brush-cleaning.js";
import { Component as ComponentBase } from "./icons/component.js";
import { Cone as ConeBase } from "./icons/cone.js";
import { Contrast as ContrastBase } from "./icons/contrast.js";
import { Crop as CropBase } from "./icons/crop.js";
import { Cuboid as CuboidBase } from "./icons/cuboid.js";
import { Cylinder as CylinderBase } from "./icons/cylinder.js";
import { Diamond as DiamondBase } from "./icons/diamond.js";
import { Frame as FrameBase } from "./icons/frame.js";
import { Group as GroupBase } from "./icons/group.js";
import { Hexagon as HexagonBase } from "./icons/hexagon.js";
import { Lasso as LassoBase } from "./icons/lasso.js";
import { Layers2 as Layers2Base } from "./icons/layers-2.js";
import { LoaderPinwheel as LoaderPinwheelBase } from "./icons/loader-pinwheel.js";
import { Octagon as OctagonBase } from "./icons/octagon.js";
import { Paintbrush as PaintbrushBase } from "./icons/paintbrush.js";
import { PaintbrushVertical as PaintbrushVerticalBase } from "./icons/paintbrush-vertical.js";
import { PaintBucket as PaintBucketBase } from "./icons/paint-bucket.js";
import { Pipette as PipetteBase } from "./icons/pipette.js";
import { Pyramid as PyramidBase } from "./icons/pyramid.js";
import { RectangleVertical as RectangleVerticalBase } from "./icons/rectangle-vertical.js";
import { Shapes as ShapesBase } from "./icons/shapes.js";
import { Signature as SignatureBase } from "./icons/signature.js";
import { Spline as SplineBase } from "./icons/spline.js";
import { SplinePointer as SplinePointerBase } from "./icons/spline-pointer.js";
import { Squircle as SquircleBase } from "./icons/squircle.js";
import { Stamp as StampBase } from "./icons/stamp.js";
import { SwatchBook as SwatchBookBase } from "./icons/swatch-book.js";
import { Tangent as TangentBase } from "./icons/tangent.js";
import { Torus as TorusBase } from "./icons/torus.js";
import { Triangle as TriangleBase } from "./icons/triangle.js";
import { Ungroup as UngroupBase } from "./icons/ungroup.js";
import { VectorSquare as VectorSquareBase } from "./icons/vector-square.js";
import { Wand as WandBase } from "./icons/wand.js";
import { AlarmClock as AlarmClockBase } from "./icons/alarm-clock.js";
import { AlarmClockCheck as AlarmClockCheckBase } from "./icons/alarm-clock-check.js";
import { AlarmClockMinus as AlarmClockMinusBase } from "./icons/alarm-clock-minus.js";
import { AlarmClockOff as AlarmClockOffBase } from "./icons/alarm-clock-off.js";
import { AlarmClockPlus as AlarmClockPlusBase } from "./icons/alarm-clock-plus.js";
import { Calendar1 as Calendar1Base } from "./icons/calendar-1.js";
import { CalendarArrowDown as CalendarArrowDownBase } from "./icons/calendar-arrow-down.js";
import { CalendarArrowRight as CalendarArrowRightBase } from "./icons/calendar-arrow-right.js";
import { CalendarArrowUp as CalendarArrowUpBase } from "./icons/calendar-arrow-up.js";
import { CalendarChevronsLeft as CalendarChevronsLeftBase } from "./icons/calendar-chevrons-left.js";
import { CalendarCog as CalendarCogBase } from "./icons/calendar-cog.js";
import { CalendarOff as CalendarOffBase } from "./icons/calendar-off.js";
import { CalendarSearch as CalendarSearchBase } from "./icons/calendar-search.js";
import { CalendarX as CalendarXBase } from "./icons/calendar-x.js";
import { Clock1 as Clock1Base } from "./icons/clock-1.js";
import { Clock10 as Clock10Base } from "./icons/clock-10.js";
import { Clock11 as Clock11Base } from "./icons/clock-11.js";
import { Clock12 as Clock12Base } from "./icons/clock-12.js";
import { ClockArrowDown as ClockArrowDownBase } from "./icons/clock-arrow-down.js";
import { ClockArrowUp as ClockArrowUpBase } from "./icons/clock-arrow-up.js";
import { ClockCheck as ClockCheckBase } from "./icons/clock-check.js";
import { ClockExclamationPoint as ClockExclamationPointBase } from "./icons/clock-exclamation-point.js";
import { ClockPlus as ClockPlusBase } from "./icons/clock-plus.js";
import { Hourglass as HourglassBase } from "./icons/hourglass.js";
import { HourglassCog as HourglassCogBase } from "./icons/hourglass-cog.js";
import { TimerOff as TimerOffBase } from "./icons/timer-off.js";
import { TimerReset as TimerResetBase } from "./icons/timer-reset.js";
import { Watch as WatchBase } from "./icons/watch.js";
import { ContactRound as ContactRoundBase } from "./icons/contact-round.js";
import { HandFist as HandFistBase } from "./icons/hand-fist.js";
import { HandGrab as HandGrabBase } from "./icons/hand-grab.js";
import { HandHeart as HandHeartBase } from "./icons/hand-heart.js";
import { HandHelping as HandHelpingBase } from "./icons/hand-helping.js";
import { HandMetal as HandMetalBase } from "./icons/hand-metal.js";
import { HandPlatter as HandPlatterBase } from "./icons/hand-platter.js";
import { HeartHandshake as HeartHandshakeBase } from "./icons/heart-handshake.js";
import { IdCard as IdCardBase } from "./icons/id-card.js";
import { IdCardLanyard as IdCardLanyardBase } from "./icons/id-card-lanyard.js";
import { ScanFace as ScanFaceBase } from "./icons/scan-face.js";
import { ThumbsDown as ThumbsDownBase } from "./icons/thumbs-down.js";
import { UserCog as UserCogBase } from "./icons/user-cog.js";
import { UserGroup as UserGroupBase } from "./icons/user-group.js";
import { UserPen as UserPenBase } from "./icons/user-pen.js";
import { UserRoundCog as UserRoundCogBase } from "./icons/user-round-cog.js";
import { UserRoundPen as UserRoundPenBase } from "./icons/user-round-pen.js";
import { UserRoundStar as UserRoundStarBase } from "./icons/user-round-star.js";
import { UsersCollaboration as UsersCollaborationBase } from "./icons/users-collaboration.js";
import { UserSearch as UserSearchBase } from "./icons/user-search.js";
import { UsersRound as UsersRoundBase } from "./icons/users-round.js";
import { UsersRoundCollaboration as UsersRoundCollaborationBase } from "./icons/users-round-collaboration.js";
import { UserStar as UserStarBase } from "./icons/user-star.js";
import { UserX as UserXBase } from "./icons/user-x.js";
import { Compass as CompassBase } from "./icons/compass.js";
import { Earth as EarthBase } from "./icons/earth.js";
import { GlobeBan as GlobeBanBase } from "./icons/globe-ban.js";
import { GlobeCheck as GlobeCheckBase } from "./icons/globe-check.js";
import { GlobeCode as GlobeCodeBase } from "./icons/globe-code.js";
import { GlobeOff as GlobeOffBase } from "./icons/globe-off.js";
import { GlobePlus as GlobePlusBase } from "./icons/globe-plus.js";
import { GlobeX as GlobeXBase } from "./icons/globe-x.js";
import { HouseCog as HouseCogBase } from "./icons/house-cog.js";
import { HousePlug as HousePlugBase } from "./icons/house-plug.js";
import { HousePlus as HousePlusBase } from "./icons/house-plus.js";
import { HouseWifi as HouseWifiBase } from "./icons/house-wifi.js";
import { Locate as LocateBase } from "./icons/locate.js";
import { LocateFixed as LocateFixedBase } from "./icons/locate-fixed.js";
import { LocateOff as LocateOffBase } from "./icons/locate-off.js";
import { Map as MapBase } from "./icons/map.js";
import { MapPinHouse as MapPinHouseBase } from "./icons/map-pin-house.js";
import { MapPinPen as MapPinPenBase } from "./icons/map-pin-pen.js";
import { MapPinPlusInside as MapPinPlusInsideBase } from "./icons/map-pin-plus-inside.js";
import { MapPinSearch as MapPinSearchBase } from "./icons/map-pin-search.js";
import { MapPinX as MapPinXBase } from "./icons/map-pin-x.js";
import { MapPinXInside as MapPinXInsideBase } from "./icons/map-pin-x-inside.js";
import { Milestone as MilestoneBase } from "./icons/milestone.js";
import { Navigation as NavigationBase } from "./icons/navigation.js";
import { Navigation2 as Navigation2Base } from "./icons/navigation-2.js";
import { Navigation2Off as Navigation2OffBase } from "./icons/navigation-2-off.js";
import { NavigationOff as NavigationOffBase } from "./icons/navigation-off.js";
import { Route as RouteBase } from "./icons/route.js";
import { Signpost as SignpostBase } from "./icons/signpost.js";
import { SignpostBig as SignpostBigBase } from "./icons/signpost-big.js";
import { Waypoints as WaypointsBase } from "./icons/waypoints.js";
import { BetweenHorizontalEnd as BetweenHorizontalEndBase } from "./icons/between-horizontal-end.js";
import { BetweenHorizontalStart as BetweenHorizontalStartBase } from "./icons/between-horizontal-start.js";
import { BetweenVerticalEnd as BetweenVerticalEndBase } from "./icons/between-vertical-end.js";
import { BetweenVerticalStart as BetweenVerticalStartBase } from "./icons/between-vertical-start.js";
import { Blocks as BlocksBase } from "./icons/blocks.js";
import { Columns2 as Columns2Base } from "./icons/columns-2.js";
import { Columns3 as Columns3Base } from "./icons/columns-3.js";
import { Columns3Cog as Columns3CogBase } from "./icons/columns-3-cog.js";
import { Columns4 as Columns4Base } from "./icons/columns-4.js";
import { Expand as ExpandBase } from "./icons/expand.js";
import { Fullscreen as FullscreenBase } from "./icons/fullscreen.js";
import { GalleryHorizontal as GalleryHorizontalBase } from "./icons/gallery-horizontal.js";
import { GalleryHorizontalEnd as GalleryHorizontalEndBase } from "./icons/gallery-horizontal-end.js";
import { GalleryVertical as GalleryVerticalBase } from "./icons/gallery-vertical.js";
import { GalleryVerticalEnd as GalleryVerticalEndBase } from "./icons/gallery-vertical-end.js";
import { Grid2x2 as Grid2x2Base } from "./icons/grid-2x2.js";
import { Grid2x2Check as Grid2x2CheckBase } from "./icons/grid-2x2-check.js";
import { Grid2x2Plus as Grid2x2PlusBase } from "./icons/grid-2x2-plus.js";
import { Grid2x2X as Grid2x2XBase } from "./icons/grid-2x2-x.js";
import { Grid3x2 as Grid3x2Base } from "./icons/grid-3x2.js";
import { Grid3x3Off as Grid3x3OffBase } from "./icons/grid-3x3-off.js";
import { Kanban as KanbanBase } from "./icons/kanban.js";
import { LayoutArrowDown as LayoutArrowDownBase } from "./icons/layout-arrow-down.js";
import { LayoutFreeform as LayoutFreeformBase } from "./icons/layout-freeform.js";
import { LayoutGridCircles as LayoutGridCirclesBase } from "./icons/layout-grid-circles.js";
import { LayoutList as LayoutListBase } from "./icons/layout-list.js";
import { LayoutPanelTop as LayoutPanelTopBase } from "./icons/layout-panel-top.js";
import { Maximize as MaximizeBase } from "./icons/maximize.js";
import { Minimize as MinimizeBase } from "./icons/minimize.js";
import { PanelBottom as PanelBottomBase } from "./icons/panel-bottom.js";
import { PanelBottomClose as PanelBottomCloseBase } from "./icons/panel-bottom-close.js";
import { PanelBottomOpen as PanelBottomOpenBase } from "./icons/panel-bottom-open.js";
import { PanelRightClose as PanelRightCloseBase } from "./icons/panel-right-close.js";
import { PanelRightOpen as PanelRightOpenBase } from "./icons/panel-right-open.js";
import { PanelsLeftBottom as PanelsLeftBottomBase } from "./icons/panels-left-bottom.js";
import { PanelsRightBottom as PanelsRightBottomBase } from "./icons/panels-right-bottom.js";
import { PanelsTopLeft as PanelsTopLeftBase } from "./icons/panels-top-left.js";
import { PanelTop as PanelTopBase } from "./icons/panel-top.js";
import { PanelTopBottomDashed as PanelTopBottomDashedBase } from "./icons/panel-top-bottom-dashed.js";
import { PanelTopClose as PanelTopCloseBase } from "./icons/panel-top-close.js";
import { PanelTopOpen as PanelTopOpenBase } from "./icons/panel-top-open.js";
import { Ratio as RatioBase } from "./icons/ratio.js";
import { Rows2 as Rows2Base } from "./icons/rows-2.js";
import { Rows3 as Rows3Base } from "./icons/rows-3.js";
import { Rows4 as Rows4Base } from "./icons/rows-4.js";
import { Scaling as ScalingBase } from "./icons/scaling.js";
import { SeparatorVertical as SeparatorVerticalBase } from "./icons/separator-vertical.js";
import { Shrink as ShrinkBase } from "./icons/shrink.js";
import { Split as SplitBase } from "./icons/split.js";
import { StretchVertical as StretchVerticalBase } from "./icons/stretch-vertical.js";
import { BadgeInfo as BadgeInfoBase } from "./icons/badge-info.js";
import { BadgeMinus as BadgeMinusBase } from "./icons/badge-minus.js";
import { BadgePlus as BadgePlusBase } from "./icons/badge-plus.js";
import { BadgeQuestionMark as BadgeQuestionMarkBase } from "./icons/badge-question-mark.js";
import { BadgeX as BadgeXBase } from "./icons/badge-x.js";
import { Flag as FlagBase } from "./icons/flag.js";
import { FlagOff as FlagOffBase } from "./icons/flag-off.js";
import { Loader as LoaderBase } from "./icons/loader.js";
import { Medal as MedalBase } from "./icons/medal.js";
import { SignalHigh as SignalHighBase } from "./icons/signal-high.js";
import { SignalLow as SignalLowBase } from "./icons/signal-low.js";
import { SignalMedium as SignalMediumBase } from "./icons/signal-medium.js";
import { SignalZero as SignalZeroBase } from "./icons/signal-zero.js";
import { SquareX as SquareXBase } from "./icons/square-x.js";
import { ZapOff as ZapOffBase } from "./icons/zap-off.js";
import { BookmarkCheck as BookmarkCheckBase } from "./icons/bookmark-check.js";
import { BookmarkMinus as BookmarkMinusBase } from "./icons/bookmark-minus.js";
import { BookmarkOff as BookmarkOffBase } from "./icons/bookmark-off.js";
import { BookmarkPlus as BookmarkPlusBase } from "./icons/bookmark-plus.js";
import { BookmarkX as BookmarkXBase } from "./icons/bookmark-x.js";
import { CheckLine as CheckLineBase } from "./icons/check-line.js";
import { CircleOff as CircleOffBase } from "./icons/circle-off.js";
import { CircleSlash as CircleSlashBase } from "./icons/circle-slash.js";
import { FunnelX as FunnelXBase } from "./icons/funnel-x.js";
import { Grip as GripBase } from "./icons/grip.js";
import { Link2Off as Link2OffBase } from "./icons/link-2-off.js";
import { PinOff as PinOffBase } from "./icons/pin-off.js";
import { Pointer as PointerBase } from "./icons/pointer.js";
import { Redo as RedoBase } from "./icons/redo.js";
import { RefreshCcw as RefreshCcwBase } from "./icons/refresh-ccw.js";
import { RefreshCwOff as RefreshCwOffBase } from "./icons/refresh-cw-off.js";
import { Scan as ScanBase } from "./icons/scan.js";
import { SearchCheck as SearchCheckBase } from "./icons/search-check.js";
import { SearchCode as SearchCodeBase } from "./icons/search-code.js";
import { SearchExclamationPoint as SearchExclamationPointBase } from "./icons/search-exclamation-point.js";
import { SearchSlash as SearchSlashBase } from "./icons/search-slash.js";
import { SearchX as SearchXBase } from "./icons/search-x.js";
import { Shuffle as ShuffleBase } from "./icons/shuffle.js";
import { SquareDashedSearch as SquareDashedSearchBase } from "./icons/square-dashed-search.js";
import { SquareDashedX as SquareDashedXBase } from "./icons/square-dashed-x.js";
import { SquareDashedXCorner as SquareDashedXCornerBase } from "./icons/square-dashed-x-corner.js";
import { StarCheck as StarCheckBase } from "./icons/star-check.js";
import { StarHalf as StarHalfBase } from "./icons/star-half.js";
import { StarMinus as StarMinusBase } from "./icons/star-minus.js";
import { StarOff as StarOffBase } from "./icons/star-off.js";
import { StarPlus as StarPlusBase } from "./icons/star-plus.js";
import { StarX as StarXBase } from "./icons/star-x.js";
import { TrashOff as TrashOffBase } from "./icons/trash-off.js";
import { Undo as UndoBase } from "./icons/undo.js";
import { Unlink as UnlinkBase } from "./icons/unlink.js";
import { XLineTop as XLineTopBase } from "./icons/x-line-top.js";
import { ZoomIn as ZoomInBase } from "./icons/zoom-in.js";
import { ArrowDown01 as ArrowDown01Base } from "./icons/arrow-down-0-1.js";
import { ArrowDown10 as ArrowDown10Base } from "./icons/arrow-down-1-0.js";
import { ArrowDownAZ as ArrowDownAZBase } from "./icons/arrow-down-a-z.js";
import { ArrowDownToLine as ArrowDownToLineBase } from "./icons/arrow-down-to-line.js";
import { ArrowDownUp as ArrowDownUpBase } from "./icons/arrow-down-up.js";
import { ArrowDownZA as ArrowDownZABase } from "./icons/arrow-down-z-a.js";
import { ArrowUp01 as ArrowUp01Base } from "./icons/arrow-up-0-1.js";
import { ArrowUpAZ as ArrowUpAZBase } from "./icons/arrow-up-a-z.js";
import { ArrowUpZA as ArrowUpZABase } from "./icons/arrow-up-z-a.js";
import { ChevronLast as ChevronLastBase } from "./icons/chevron-last.js";
import { ChevronsDown as ChevronsDownBase } from "./icons/chevrons-down.js";
import { ChevronsLeft as ChevronsLeftBase } from "./icons/chevrons-left.js";
import { ChevronsLeftRightEllipsis as ChevronsLeftRightEllipsisBase } from "./icons/chevrons-left-right-ellipsis.js";
import { ChevronsRight as ChevronsRightBase } from "./icons/chevrons-right.js";
import { ChevronsUp as ChevronsUpBase } from "./icons/chevrons-up.js";
import { CircleChevronsDown as CircleChevronsDownBase } from "./icons/circle-chevrons-down.js";
import { CircleChevronsLeft as CircleChevronsLeftBase } from "./icons/circle-chevrons-left.js";
import { CircleChevronsRight as CircleChevronsRightBase } from "./icons/circle-chevrons-right.js";
import { CircleChevronsUp as CircleChevronsUpBase } from "./icons/circle-chevrons-up.js";
import { CornerLeftUp as CornerLeftUpBase } from "./icons/corner-left-up.js";
import { IterationCw as IterationCwBase } from "./icons/iteration-cw.js";
import { Move as MoveBase } from "./icons/move.js";
import { SquareChevronsDown as SquareChevronsDownBase } from "./icons/square-chevrons-down.js";
import { SquareChevronsUp as SquareChevronsUpBase } from "./icons/square-chevrons-up.js";
import { SquareChevronUp as SquareChevronUpBase } from "./icons/square-chevron-up.js";
import { BrickWall as BrickWallBase } from "./icons/brick-wall.js";
import { BriefcaseBusiness as BriefcaseBusinessBase } from "./icons/briefcase-business.js";
import { BriefcaseConveyorBelt as BriefcaseConveyorBeltBase } from "./icons/briefcase-conveyor-belt.js";
import { BriefcaseMedical as BriefcaseMedicalBase } from "./icons/briefcase-medical.js";
import { BriefcasePlus as BriefcasePlusBase } from "./icons/briefcase-plus.js";
import { BuildingComplexPlus as BuildingComplexPlusBase } from "./icons/building-complex-plus.js";
import { Castle as CastleBase } from "./icons/castle.js";
import { Church as ChurchBase } from "./icons/church.js";
import { Dam as DamBase } from "./icons/dam.js";
import { DoorClosed as DoorClosedBase } from "./icons/door-closed.js";
import { DoorClosedCog as DoorClosedCogBase } from "./icons/door-closed-cog.js";
import { DoorClosedLocked as DoorClosedLockedBase } from "./icons/door-closed-locked.js";
import { DoorClosedPackage as DoorClosedPackageBase } from "./icons/door-closed-package.js";
import { DoorOpen as DoorOpenBase } from "./icons/door-open.js";
import { Factory as FactoryBase } from "./icons/factory.js";
import { Fence as FenceBase } from "./icons/fence.js";
import { HouseHeart as HouseHeartBase } from "./icons/house-heart.js";
import { MapPinCheck as MapPinCheckBase } from "./icons/map-pin-check.js";
import { MountainSnow as MountainSnowBase } from "./icons/mountain-snow.js";
import { SolarPanel as SolarPanelBase } from "./icons/solar-panel.js";
import { TentTree as TentTreeBase } from "./icons/tent-tree.js";
import { TreeDeciduous as TreeDeciduousBase } from "./icons/tree-deciduous.js";
import { TreePalm as TreePalmBase } from "./icons/tree-palm.js";
import { TreePine as TreePineBase } from "./icons/tree-pine.js";
import { Trees as TreesBase } from "./icons/trees.js";
import { UtilityPole as UtilityPoleBase } from "./icons/utility-pole.js";
import { Warehouse as WarehouseBase } from "./icons/warehouse.js";
import { Google as GoogleBase } from "./icons/google.js";
import { LinkedIn as LinkedInBase } from "./icons/linkedin.js";
import { GitHub as GitHubBase } from "./icons/github.js";
import { Apple as AppleBase } from "./icons/apple.js";
import { Microsoft as MicrosoftBase } from "./icons/microsoft.js";
import { XLogo as XLogoBase } from "./icons/x-logo.js";
import { Facebook as FacebookBase } from "./icons/facebook.js";
import { WhatsApp as WhatsAppBase } from "./icons/whatsapp.js";
import { Indeed as IndeedBase } from "./icons/indeed.js";
import { Passport as PassportBase } from "./icons/passport.js";
import { Visa as VisaBase } from "./icons/visa.js";
import { ResidencePermit as ResidencePermitBase } from "./icons/residence-permit.js";
import { FlagIreland as FlagIrelandBase } from "./icons/flag-ireland.js";
import { Crest as CrestBase } from "./icons/crest.js";
import { Invoice as InvoiceBase } from "./icons/invoice.js";
import { GradIreland as GradIrelandBase } from "./icons/gradireland.js";
import { IrishJobs as IrishJobsBase } from "./icons/irishjobs.js";
import { JobsIE as JobsIEBase } from "./icons/jobsie.js";
import { StageApplied as StageAppliedBase } from "./icons/stage-applied.js";
import { StageInterview as StageInterviewBase } from "./icons/stage-interview.js";
import { StageOffer as StageOfferBase } from "./icons/stage-offer.js";
import { StageRejected as StageRejectedBase } from "./icons/stage-rejected.js";
import { StageWithdrawn as StageWithdrawnBase } from "./icons/stage-withdrawn.js";
import { Resume as ResumeBase } from "./icons/resume.js";
import { CoverLetter as CoverLetterBase } from "./icons/cover-letter.js";
import { Transcript as TranscriptBase } from "./icons/transcript.js";
import { Certificate as CertificateBase } from "./icons/certificate.js";
import { Sponsor as SponsorBase } from "./icons/sponsor.js";
import { VisaStamp as VisaStampBase } from "./icons/visa-stamp.js";
import { Subscription as SubscriptionBase } from "./icons/subscription.js";
import { Hybrid as HybridBase } from "./icons/hybrid.js";
import { Onsite as OnsiteBase } from "./icons/onsite.js";
import { Remote as RemoteBase } from "./icons/remote.js";
import { Naukri as NaukriBase } from "./icons/naukri.js";
const Activity = forwardRef(function Activity2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ActivityBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-activity", className].filter(Boolean).join(" ") });
});
Activity.displayName = "Activity";
const AlertCircle = forwardRef(function AlertCircle2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(AlertCircleBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-circle-exclamation-point", className].filter(Boolean).join(" ") });
});
AlertCircle.displayName = "AlertCircle";
const AlertTriangle = forwardRef(function AlertTriangle2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(AlertTriangleBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-triangle-exclamation-point", className].filter(Boolean).join(" ") });
});
AlertTriangle.displayName = "AlertTriangle";
const Archive = forwardRef(function Archive2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ArchiveBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-archive", className].filter(Boolean).join(" ") });
});
Archive.displayName = "Archive";
const ArrowDown = forwardRef(function ArrowDown2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ArrowDownBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-arrow-down", className].filter(Boolean).join(" ") });
});
ArrowDown.displayName = "ArrowDown";
const ArrowDownRight = forwardRef(function ArrowDownRight2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ArrowDownRightBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-arrow-down-right", className].filter(Boolean).join(" ") });
});
ArrowDownRight.displayName = "ArrowDownRight";
const ArrowLeft = forwardRef(function ArrowLeft2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ArrowLeftBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-arrow-left", className].filter(Boolean).join(" ") });
});
ArrowLeft.displayName = "ArrowLeft";
const ArrowRight = forwardRef(function ArrowRight2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ArrowRightBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-arrow-right", className].filter(Boolean).join(" ") });
});
ArrowRight.displayName = "ArrowRight";
const ArrowUp = forwardRef(function ArrowUp2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ArrowUpBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-arrow-up", className].filter(Boolean).join(" ") });
});
ArrowUp.displayName = "ArrowUp";
const ArrowUpDown = forwardRef(function ArrowUpDown2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ArrowUpDownBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-arrow-up-down", className].filter(Boolean).join(" ") });
});
ArrowUpDown.displayName = "ArrowUpDown";
const ArrowUpRight = forwardRef(function ArrowUpRight2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ArrowUpRightBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-arrow-up-right", className].filter(Boolean).join(" ") });
});
ArrowUpRight.displayName = "ArrowUpRight";
const AtSign = forwardRef(function AtSign2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(AtSignBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-at-sign", className].filter(Boolean).join(" ") });
});
AtSign.displayName = "AtSign";
const Award = forwardRef(function Award2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(AwardBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-award", className].filter(Boolean).join(" ") });
});
Award.displayName = "Award";
const BadgeCheck = forwardRef(function BadgeCheck2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BadgeCheckBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-badge-check", className].filter(Boolean).join(" ") });
});
BadgeCheck.displayName = "BadgeCheck";
const Ban = forwardRef(function Ban2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BanBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-ban", className].filter(Boolean).join(" ") });
});
Ban.displayName = "Ban";
const BarChart2 = forwardRef(function BarChart22(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BarChart2Base, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-chart-no-axes-column", className].filter(Boolean).join(" ") });
});
BarChart2.displayName = "BarChart2";
const BarChart3 = forwardRef(function BarChart32(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BarChart3Base, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-chart-column", className].filter(Boolean).join(" ") });
});
BarChart3.displayName = "BarChart3";
const Bell = forwardRef(function Bell2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BellBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-bell", className].filter(Boolean).join(" ") });
});
Bell.displayName = "Bell";
const Bold = forwardRef(function Bold2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BoldBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-letter-b", className].filter(Boolean).join(" ") });
});
Bold.displayName = "Bold";
const BookUser = forwardRef(function BookUser2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BookUserBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-book-user", className].filter(Boolean).join(" ") });
});
BookUser.displayName = "BookUser";
const Bookmark = forwardRef(function Bookmark2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BookmarkBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-bookmark", className].filter(Boolean).join(" ") });
});
Bookmark.displayName = "Bookmark";
const Briefcase = forwardRef(function Briefcase2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BriefcaseBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-briefcase", className].filter(Boolean).join(" ") });
});
Briefcase.displayName = "Briefcase";
const Building = forwardRef(function Building2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BuildingBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-building", className].filter(Boolean).join(" ") });
});
Building.displayName = "Building";
const Building22 = forwardRef(function Building23(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(Building2Base, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-building-complex", className].filter(Boolean).join(" ") });
});
Building22.displayName = "Building2";
const Calendar = forwardRef(function Calendar2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CalendarBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-calendar", className].filter(Boolean).join(" ") });
});
Calendar.displayName = "Calendar";
const CalendarClock = forwardRef(function CalendarClock2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CalendarClockBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-calendar-clock", className].filter(Boolean).join(" ") });
});
CalendarClock.displayName = "CalendarClock";
const CalendarDays = forwardRef(function CalendarDays2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CalendarDaysBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-calendar-days", className].filter(Boolean).join(" ") });
});
CalendarDays.displayName = "CalendarDays";
const CalendarSync = forwardRef(function CalendarSync2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CalendarSyncBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-calendar-sync", className].filter(Boolean).join(" ") });
});
CalendarSync.displayName = "CalendarSync";
const Camera = forwardRef(function Camera2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CameraBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-camera", className].filter(Boolean).join(" ") });
});
Camera.displayName = "Camera";
const ChartLine = forwardRef(function ChartLine2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ChartLineBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-chart-line", className].filter(Boolean).join(" ") });
});
ChartLine.displayName = "ChartLine";
const Check = forwardRef(function Check2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CheckBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-check", className].filter(Boolean).join(" ") });
});
Check.displayName = "Check";
const CheckCircle = forwardRef(function CheckCircle2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CheckCircleBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-circle-check-big", className].filter(Boolean).join(" ") });
});
CheckCircle.displayName = "CheckCircle";
const CheckCircle22 = forwardRef(function CheckCircle23(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CheckCircle2Base, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-circle-check", className].filter(Boolean).join(" ") });
});
CheckCircle22.displayName = "CheckCircle2";
const CheckSquare = forwardRef(function CheckSquare2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CheckSquareBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-square-check-big", className].filter(Boolean).join(" ") });
});
CheckSquare.displayName = "CheckSquare";
const ChevronDown = forwardRef(function ChevronDown2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ChevronDownBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-chevron-down", className].filter(Boolean).join(" ") });
});
ChevronDown.displayName = "ChevronDown";
const ChevronLeft = forwardRef(function ChevronLeft2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ChevronLeftBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-chevron-left", className].filter(Boolean).join(" ") });
});
ChevronLeft.displayName = "ChevronLeft";
const ChevronRight = forwardRef(function ChevronRight2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ChevronRightBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-chevron-right", className].filter(Boolean).join(" ") });
});
ChevronRight.displayName = "ChevronRight";
const ChevronUp = forwardRef(function ChevronUp2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ChevronUpBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-chevron-up", className].filter(Boolean).join(" ") });
});
ChevronUp.displayName = "ChevronUp";
const ChevronsLeftRight = forwardRef(function ChevronsLeftRight2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ChevronsLeftRightBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-chevrons-left-right", className].filter(Boolean).join(" ") });
});
ChevronsLeftRight.displayName = "ChevronsLeftRight";
const ChevronsUpDown = forwardRef(function ChevronsUpDown2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ChevronsUpDownBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-chevrons-up-down", className].filter(Boolean).join(" ") });
});
ChevronsUpDown.displayName = "ChevronsUpDown";
const Circle = forwardRef(function Circle2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CircleBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-circle", className].filter(Boolean).join(" ") });
});
Circle.displayName = "Circle";
const Clock = forwardRef(function Clock2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ClockBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-clock", className].filter(Boolean).join(" ") });
});
Clock.displayName = "Clock";
const Code = forwardRef(function Code2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CodeBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-code", className].filter(Boolean).join(" ") });
});
Code.displayName = "Code";
const Copy = forwardRef(function Copy2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CopyBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-copy", className].filter(Boolean).join(" ") });
});
Copy.displayName = "Copy";
const Crown = forwardRef(function Crown2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CrownBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-crown", className].filter(Boolean).join(" ") });
});
Crown.displayName = "Crown";
const DollarSign = forwardRef(function DollarSign2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(DollarSignBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-dollar-sign", className].filter(Boolean).join(" ") });
});
DollarSign.displayName = "DollarSign";
const Download = forwardRef(function Download2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(DownloadBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-download", className].filter(Boolean).join(" ") });
});
Download.displayName = "Download";
const ExternalLink = forwardRef(function ExternalLink2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ExternalLinkBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-external-link", className].filter(Boolean).join(" ") });
});
ExternalLink.displayName = "ExternalLink";
const Eye = forwardRef(function Eye2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(EyeBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-eye", className].filter(Boolean).join(" ") });
});
Eye.displayName = "Eye";
const EyeOff = forwardRef(function EyeOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(EyeOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-eye-off", className].filter(Boolean).join(" ") });
});
EyeOff.displayName = "EyeOff";
const FileClock = forwardRef(function FileClock2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(FileClockBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-file-clock", className].filter(Boolean).join(" ") });
});
FileClock.displayName = "FileClock";
const FileSearch = forwardRef(function FileSearch2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(FileSearchBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-file-search", className].filter(Boolean).join(" ") });
});
FileSearch.displayName = "FileSearch";
const FileSpreadsheet = forwardRef(function FileSpreadsheet2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(FileSpreadsheetBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-file-spreadsheet", className].filter(Boolean).join(" ") });
});
FileSpreadsheet.displayName = "FileSpreadsheet";
const FileText = forwardRef(function FileText2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(FileTextBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-file-text", className].filter(Boolean).join(" ") });
});
FileText.displayName = "FileText";
const FileUp = forwardRef(function FileUp2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(FileUpBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-file-up", className].filter(Boolean).join(" ") });
});
FileUp.displayName = "FileUp";
const Filter = forwardRef(function Filter2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(FilterBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-funnel", className].filter(Boolean).join(" ") });
});
Filter.displayName = "Filter";
const Fingerprint = forwardRef(function Fingerprint2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(FingerprintBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-fingerprint-pattern", className].filter(Boolean).join(" ") });
});
Fingerprint.displayName = "Fingerprint";
const Flame = forwardRef(function Flame2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(FlameBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-flame", className].filter(Boolean).join(" ") });
});
Flame.displayName = "Flame";
const FolderGit2 = forwardRef(function FolderGit22(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(FolderGit2Base, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-folder-git-2", className].filter(Boolean).join(" ") });
});
FolderGit2.displayName = "FolderGit2";
const FolderOpen = forwardRef(function FolderOpen2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(FolderOpenBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-folder-open", className].filter(Boolean).join(" ") });
});
FolderOpen.displayName = "FolderOpen";
const Gauge = forwardRef(function Gauge2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(GaugeBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-gauge", className].filter(Boolean).join(" ") });
});
Gauge.displayName = "Gauge";
const Gift = forwardRef(function Gift2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(GiftBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-gift", className].filter(Boolean).join(" ") });
});
Gift.displayName = "Gift";
const Globe = forwardRef(function Globe2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(GlobeBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-globe", className].filter(Boolean).join(" ") });
});
Globe.displayName = "Globe";
const GraduationCap = forwardRef(function GraduationCap2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(GraduationCapBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-graduation-cap", className].filter(Boolean).join(" ") });
});
GraduationCap.displayName = "GraduationCap";
const Grid3x3 = forwardRef(function Grid3x32(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(Grid3x3Base, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-grid-3x3", className].filter(Boolean).join(" ") });
});
Grid3x3.displayName = "Grid3x3";
const Hand = forwardRef(function Hand2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(HandBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-hand", className].filter(Boolean).join(" ") });
});
Hand.displayName = "Hand";
const Heading2 = forwardRef(function Heading22(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(Heading2Base, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-heading-2", className].filter(Boolean).join(" ") });
});
Heading2.displayName = "Heading2";
const Heart = forwardRef(function Heart2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(HeartBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-heart", className].filter(Boolean).join(" ") });
});
Heart.displayName = "Heart";
const HeartOff = forwardRef(function HeartOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(HeartOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-heart-off", className].filter(Boolean).join(" ") });
});
HeartOff.displayName = "HeartOff";
const History = forwardRef(function History2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(HistoryBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-rotate-ccw-clock", className].filter(Boolean).join(" ") });
});
History.displayName = "History";
const Home = forwardRef(function Home2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(HomeBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-house", className].filter(Boolean).join(" ") });
});
Home.displayName = "Home";
const ImageIcon = forwardRef(function ImageIcon2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ImageIconBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-image", className].filter(Boolean).join(" ") });
});
ImageIcon.displayName = "ImageIcon";
const ImagePlus = forwardRef(function ImagePlus2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ImagePlusBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-image-plus", className].filter(Boolean).join(" ") });
});
ImagePlus.displayName = "ImagePlus";
const Inbox = forwardRef(function Inbox2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(InboxBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-inbox", className].filter(Boolean).join(" ") });
});
Inbox.displayName = "Inbox";
const Info = forwardRef(function Info2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(InfoBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-info", className].filter(Boolean).join(" ") });
});
Info.displayName = "Info";
const Italic = forwardRef(function Italic2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ItalicBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-italic", className].filter(Boolean).join(" ") });
});
Italic.displayName = "Italic";
const Key = forwardRef(function Key2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(KeyBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-key", className].filter(Boolean).join(" ") });
});
Key.displayName = "Key";
const KeyRound = forwardRef(function KeyRound2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(KeyRoundBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-key-round", className].filter(Boolean).join(" ") });
});
KeyRound.displayName = "KeyRound";
const Languages = forwardRef(function Languages2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(LanguagesBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-languages", className].filter(Boolean).join(" ") });
});
Languages.displayName = "Languages";
const Layers = forwardRef(function Layers2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(LayersBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-layers", className].filter(Boolean).join(" ") });
});
Layers.displayName = "Layers";
const LayoutDashboard = forwardRef(function LayoutDashboard2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(LayoutDashboardBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-layout-dashboard", className].filter(Boolean).join(" ") });
});
LayoutDashboard.displayName = "LayoutDashboard";
const LayoutGrid = forwardRef(function LayoutGrid2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(LayoutGridBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-layout-grid", className].filter(Boolean).join(" ") });
});
LayoutGrid.displayName = "LayoutGrid";
const LifeBuoy = forwardRef(function LifeBuoy2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(LifeBuoyBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-life-buoy", className].filter(Boolean).join(" ") });
});
LifeBuoy.displayName = "LifeBuoy";
const Link2 = forwardRef(function Link22(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(Link2Base, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-link-2", className].filter(Boolean).join(" ") });
});
Link2.displayName = "Link2";
const LinkIcon = forwardRef(function LinkIcon2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(LinkIconBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-link", className].filter(Boolean).join(" ") });
});
LinkIcon.displayName = "LinkIcon";
const List = forwardRef(function List2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ListBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-list", className].filter(Boolean).join(" ") });
});
List.displayName = "List";
const ListOrdered = forwardRef(function ListOrdered2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ListOrderedBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-list-ordered", className].filter(Boolean).join(" ") });
});
ListOrdered.displayName = "ListOrdered";
const Loader2 = forwardRef(function Loader22(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(Loader2Base, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-loader-circle", className].filter(Boolean).join(" ") });
});
Loader2.displayName = "Loader2";
const Lock = forwardRef(function Lock2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(LockBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-lock", className].filter(Boolean).join(" ") });
});
Lock.displayName = "Lock";
const LogOut = forwardRef(function LogOut2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(LogOutBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-log-out", className].filter(Boolean).join(" ") });
});
LogOut.displayName = "LogOut";
const Magnet = forwardRef(function Magnet2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MagnetBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-magnet", className].filter(Boolean).join(" ") });
});
Magnet.displayName = "Magnet";
const Mail = forwardRef(function Mail2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MailBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-mail", className].filter(Boolean).join(" ") });
});
Mail.displayName = "Mail";
const MailCheck = forwardRef(function MailCheck2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MailCheckBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-mail-check", className].filter(Boolean).join(" ") });
});
MailCheck.displayName = "MailCheck";
const MailPlus = forwardRef(function MailPlus2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MailPlusBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-mail-plus", className].filter(Boolean).join(" ") });
});
MailPlus.displayName = "MailPlus";
const MapPin = forwardRef(function MapPin2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MapPinBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-map-pin", className].filter(Boolean).join(" ") });
});
MapPin.displayName = "MapPin";
const MessageSquare = forwardRef(function MessageSquare2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MessageSquareBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-message-square", className].filter(Boolean).join(" ") });
});
MessageSquare.displayName = "MessageSquare";
const Minus = forwardRef(function Minus2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MinusBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-minus", className].filter(Boolean).join(" ") });
});
Minus.displayName = "Minus";
const Monitor = forwardRef(function Monitor2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MonitorBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-monitor", className].filter(Boolean).join(" ") });
});
Monitor.displayName = "Monitor";
const Moon = forwardRef(function Moon2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MoonBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-moon", className].filter(Boolean).join(" ") });
});
Moon.displayName = "Moon";
const MoonStar = forwardRef(function MoonStar2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MoonStarBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-moon-star", className].filter(Boolean).join(" ") });
});
MoonStar.displayName = "MoonStar";
const MoreHorizontal = forwardRef(function MoreHorizontal2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MoreHorizontalBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-ellipsis", className].filter(Boolean).join(" ") });
});
MoreHorizontal.displayName = "MoreHorizontal";
const MoreVertical = forwardRef(function MoreVertical2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MoreVerticalBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-ellipsis-vertical", className].filter(Boolean).join(" ") });
});
MoreVertical.displayName = "MoreVertical";
const MoveHorizontal = forwardRef(function MoveHorizontal2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MoveHorizontalBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-move-horizontal", className].filter(Boolean).join(" ") });
});
MoveHorizontal.displayName = "MoveHorizontal";
const Newspaper = forwardRef(function Newspaper2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(NewspaperBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-newspaper", className].filter(Boolean).join(" ") });
});
Newspaper.displayName = "Newspaper";
const Palette = forwardRef(function Palette2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PaletteBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-palette", className].filter(Boolean).join(" ") });
});
Palette.displayName = "Palette";
const PanelLeftClose = forwardRef(function PanelLeftClose2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PanelLeftCloseBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-panel-left-close", className].filter(Boolean).join(" ") });
});
PanelLeftClose.displayName = "PanelLeftClose";
const PanelLeftOpen = forwardRef(function PanelLeftOpen2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PanelLeftOpenBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-panel-left-open", className].filter(Boolean).join(" ") });
});
PanelLeftOpen.displayName = "PanelLeftOpen";
const Paperclip = forwardRef(function Paperclip2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PaperclipBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-paperclip", className].filter(Boolean).join(" ") });
});
Paperclip.displayName = "Paperclip";
const PenSquare = forwardRef(function PenSquare2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PenSquareBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-square-pen", className].filter(Boolean).join(" ") });
});
PenSquare.displayName = "PenSquare";
const Pencil = forwardRef(function Pencil2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PencilBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-pencil", className].filter(Boolean).join(" ") });
});
Pencil.displayName = "Pencil";
const PencilLine = forwardRef(function PencilLine2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PencilLineBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-pencil-line", className].filter(Boolean).join(" ") });
});
PencilLine.displayName = "PencilLine";
const Percent = forwardRef(function Percent2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PercentBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-percent", className].filter(Boolean).join(" ") });
});
Percent.displayName = "Percent";
const Pin = forwardRef(function Pin2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PinBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-pin", className].filter(Boolean).join(" ") });
});
Pin.displayName = "Pin";
const Plane = forwardRef(function Plane2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PlaneBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-plane", className].filter(Boolean).join(" ") });
});
Plane.displayName = "Plane";
const Plug = forwardRef(function Plug2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PlugBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-plug", className].filter(Boolean).join(" ") });
});
Plug.displayName = "Plug";
const Plus = forwardRef(function Plus2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PlusBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-plus", className].filter(Boolean).join(" ") });
});
Plus.displayName = "Plus";
const PlusCircle = forwardRef(function PlusCircle2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PlusCircleBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-circle-plus", className].filter(Boolean).join(" ") });
});
PlusCircle.displayName = "PlusCircle";
const Power = forwardRef(function Power2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PowerBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-power", className].filter(Boolean).join(" ") });
});
Power.displayName = "Power";
const Quote = forwardRef(function Quote2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(QuoteBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-quote", className].filter(Boolean).join(" ") });
});
Quote.displayName = "Quote";
const Radar = forwardRef(function Radar2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(RadarBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-radar", className].filter(Boolean).join(" ") });
});
Radar.displayName = "Radar";
const Radio = forwardRef(function Radio2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(RadioBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-radio", className].filter(Boolean).join(" ") });
});
Radio.displayName = "Radio";
const RefreshCw = forwardRef(function RefreshCw2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(RefreshCwBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-refresh-cw", className].filter(Boolean).join(" ") });
});
RefreshCw.displayName = "RefreshCw";
const Repeat = forwardRef(function Repeat2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(RepeatBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-repeat", className].filter(Boolean).join(" ") });
});
Repeat.displayName = "Repeat";
const Rocket = forwardRef(function Rocket2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(RocketBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-rocket", className].filter(Boolean).join(" ") });
});
Rocket.displayName = "Rocket";
const RotateCcw = forwardRef(function RotateCcw2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(RotateCcwBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-rotate-ccw", className].filter(Boolean).join(" ") });
});
RotateCcw.displayName = "RotateCcw";
const Rss = forwardRef(function Rss2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(RssBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-rss", className].filter(Boolean).join(" ") });
});
Rss.displayName = "Rss";
const ScrollText = forwardRef(function ScrollText2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ScrollTextBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-scroll-text", className].filter(Boolean).join(" ") });
});
ScrollText.displayName = "ScrollText";
const Search = forwardRef(function Search2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SearchBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-search", className].filter(Boolean).join(" ") });
});
Search.displayName = "Search";
const Send = forwardRef(function Send2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SendBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-send", className].filter(Boolean).join(" ") });
});
Send.displayName = "Send";
const Settings = forwardRef(function Settings2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SettingsBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-settings", className].filter(Boolean).join(" ") });
});
Settings.displayName = "Settings";
const Share2 = forwardRef(function Share22(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(Share2Base, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-share-2", className].filter(Boolean).join(" ") });
});
Share2.displayName = "Share2";
const Shield = forwardRef(function Shield2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ShieldBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-shield", className].filter(Boolean).join(" ") });
});
Shield.displayName = "Shield";
const ShieldAlert = forwardRef(function ShieldAlert2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ShieldAlertBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-shield-exclamation-point", className].filter(Boolean).join(" ") });
});
ShieldAlert.displayName = "ShieldAlert";
const ShieldCheck = forwardRef(function ShieldCheck2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ShieldCheckBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-shield-check", className].filter(Boolean).join(" ") });
});
ShieldCheck.displayName = "ShieldCheck";
const SlidersHorizontal = forwardRef(function SlidersHorizontal2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SlidersHorizontalBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-sliders-horizontal", className].filter(Boolean).join(" ") });
});
SlidersHorizontal.displayName = "SlidersHorizontal";
const Smartphone = forwardRef(function Smartphone2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SmartphoneBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-smartphone", className].filter(Boolean).join(" ") });
});
Smartphone.displayName = "Smartphone";
const Sparkles = forwardRef(function Sparkles2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SparklesBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-sparkles", className].filter(Boolean).join(" ") });
});
Sparkles.displayName = "Sparkles";
const Square = forwardRef(function Square2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SquareBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-square", className].filter(Boolean).join(" ") });
});
Square.displayName = "Square";
const Star = forwardRef(function Star2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(StarBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-star", className].filter(Boolean).join(" ") });
});
Star.displayName = "Star";
const StickyNote = forwardRef(function StickyNote2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(StickyNoteBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-sticky-note", className].filter(Boolean).join(" ") });
});
StickyNote.displayName = "StickyNote";
const Strikethrough = forwardRef(function Strikethrough2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(StrikethroughBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-strikethrough", className].filter(Boolean).join(" ") });
});
Strikethrough.displayName = "Strikethrough";
const Sun = forwardRef(function Sun2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SunBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-sun", className].filter(Boolean).join(" ") });
});
Sun.displayName = "Sun";
const Tag = forwardRef(function Tag2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TagBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-tag", className].filter(Boolean).join(" ") });
});
Tag.displayName = "Tag";
const Target = forwardRef(function Target2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TargetBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-target", className].filter(Boolean).join(" ") });
});
Target.displayName = "Target";
const ThumbsUp = forwardRef(function ThumbsUp2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ThumbsUpBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-thumbs-up", className].filter(Boolean).join(" ") });
});
ThumbsUp.displayName = "ThumbsUp";
const Timer = forwardRef(function Timer2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TimerBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-timer", className].filter(Boolean).join(" ") });
});
Timer.displayName = "Timer";
const Trash2 = forwardRef(function Trash22(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(Trash2Base, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-trash", className].filter(Boolean).join(" ") });
});
Trash2.displayName = "Trash2";
const TrendingDown = forwardRef(function TrendingDown2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TrendingDownBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-trending-down", className].filter(Boolean).join(" ") });
});
TrendingDown.displayName = "TrendingDown";
const TrendingUp = forwardRef(function TrendingUp2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TrendingUpBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-trending-up", className].filter(Boolean).join(" ") });
});
TrendingUp.displayName = "TrendingUp";
const Trophy = forwardRef(function Trophy2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TrophyBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-trophy", className].filter(Boolean).join(" ") });
});
Trophy.displayName = "Trophy";
const Underline = forwardRef(function Underline2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(UnderlineBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-underline", className].filter(Boolean).join(" ") });
});
Underline.displayName = "Underline";
const Undo2 = forwardRef(function Undo22(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(Undo2Base, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-undo-2", className].filter(Boolean).join(" ") });
});
Undo2.displayName = "Undo2";
const Upload = forwardRef(function Upload2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(UploadBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-upload", className].filter(Boolean).join(" ") });
});
Upload.displayName = "Upload";
const UploadCloud = forwardRef(function UploadCloud2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(UploadCloudBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-cloud-upload", className].filter(Boolean).join(" ") });
});
UploadCloud.displayName = "UploadCloud";
const User = forwardRef(function User2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(UserBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-user", className].filter(Boolean).join(" ") });
});
User.displayName = "User";
const UserCheck = forwardRef(function UserCheck2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(UserCheckBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-user-check", className].filter(Boolean).join(" ") });
});
UserCheck.displayName = "UserCheck";
const UserMinus = forwardRef(function UserMinus2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(UserMinusBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-user-minus", className].filter(Boolean).join(" ") });
});
UserMinus.displayName = "UserMinus";
const UserPlus = forwardRef(function UserPlus2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(UserPlusBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-user-plus", className].filter(Boolean).join(" ") });
});
UserPlus.displayName = "UserPlus";
const Users = forwardRef(function Users2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(UsersBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-users", className].filter(Boolean).join(" ") });
});
Users.displayName = "Users";
const Vibrate = forwardRef(function Vibrate2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(VibrateBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-vibrate", className].filter(Boolean).join(" ") });
});
Vibrate.displayName = "Vibrate";
const Video = forwardRef(function Video2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(VideoBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-video", className].filter(Boolean).join(" ") });
});
Video.displayName = "Video";
const Wand2 = forwardRef(function Wand22(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(Wand2Base, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-wand-sparkles", className].filter(Boolean).join(" ") });
});
Wand2.displayName = "Wand2";
const Wrench = forwardRef(function Wrench2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(WrenchBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-wrench", className].filter(Boolean).join(" ") });
});
Wrench.displayName = "Wrench";
const X = forwardRef(function X2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(XBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-x", className].filter(Boolean).join(" ") });
});
X.displayName = "X";
const XCircle = forwardRef(function XCircle2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(XCircleBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-circle-x", className].filter(Boolean).join(" ") });
});
XCircle.displayName = "XCircle";
const Zap = forwardRef(function Zap2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ZapBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-zap", className].filter(Boolean).join(" ") });
});
Zap.displayName = "Zap";
const Accessibility = forwardRef(function Accessibility2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(AccessibilityBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-accessibility", className].filter(Boolean).join(" ") });
});
Accessibility.displayName = "Accessibility";
const Ambulance = forwardRef(function Ambulance2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(AmbulanceBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-ambulance", className].filter(Boolean).join(" ") });
});
Ambulance.displayName = "Ambulance";
const Baby = forwardRef(function Baby2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BabyBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-baby", className].filter(Boolean).join(" ") });
});
Baby.displayName = "Baby";
const Bandage = forwardRef(function Bandage2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BandageBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-bandage", className].filter(Boolean).join(" ") });
});
Bandage.displayName = "Bandage";
const BicepsFlexed = forwardRef(function BicepsFlexed2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BicepsFlexedBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-biceps-flexed", className].filter(Boolean).join(" ") });
});
BicepsFlexed.displayName = "BicepsFlexed";
const Biohazard = forwardRef(function Biohazard2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BiohazardBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-biohazard", className].filter(Boolean).join(" ") });
});
Biohazard.displayName = "Biohazard";
const Bone = forwardRef(function Bone2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BoneBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-bone", className].filter(Boolean).join(" ") });
});
Bone.displayName = "Bone";
const BoneFracture = forwardRef(function BoneFracture2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BoneFractureBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-bone-fracture", className].filter(Boolean).join(" ") });
});
BoneFracture.displayName = "BoneFracture";
const Brain = forwardRef(function Brain2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BrainBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-brain", className].filter(Boolean).join(" ") });
});
Brain.displayName = "Brain";
const BrainCircuit = forwardRef(function BrainCircuit2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BrainCircuitBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-brain-circuit", className].filter(Boolean).join(" ") });
});
BrainCircuit.displayName = "BrainCircuit";
const BrainCog = forwardRef(function BrainCog2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BrainCogBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-brain-cog", className].filter(Boolean).join(" ") });
});
BrainCog.displayName = "BrainCog";
const BrainOff = forwardRef(function BrainOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BrainOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-brain-off", className].filter(Boolean).join(" ") });
});
BrainOff.displayName = "BrainOff";
const Cigarette = forwardRef(function Cigarette2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CigaretteBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-cigarette", className].filter(Boolean).join(" ") });
});
Cigarette.displayName = "Cigarette";
const CigaretteOff = forwardRef(function CigaretteOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CigaretteOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-cigarette-off", className].filter(Boolean).join(" ") });
});
CigaretteOff.displayName = "CigaretteOff";
const Dna = forwardRef(function Dna2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(DnaBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-dna", className].filter(Boolean).join(" ") });
});
Dna.displayName = "Dna";
const DnaOff = forwardRef(function DnaOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(DnaOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-dna-off", className].filter(Boolean).join(" ") });
});
DnaOff.displayName = "DnaOff";
const Dumbbell = forwardRef(function Dumbbell2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(DumbbellBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-dumbbell", className].filter(Boolean).join(" ") });
});
Dumbbell.displayName = "Dumbbell";
const Ear = forwardRef(function Ear2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(EarBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-ear", className].filter(Boolean).join(" ") });
});
Ear.displayName = "Ear";
const EarOff = forwardRef(function EarOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(EarOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-ear-off", className].filter(Boolean).join(" ") });
});
EarOff.displayName = "EarOff";
const FlaskConicalOff = forwardRef(function FlaskConicalOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(FlaskConicalOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-flask-conical-off", className].filter(Boolean).join(" ") });
});
FlaskConicalOff.displayName = "FlaskConicalOff";
const Footprints = forwardRef(function Footprints2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(FootprintsBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-footprints", className].filter(Boolean).join(" ") });
});
Footprints.displayName = "Footprints";
const HeartPlus = forwardRef(function HeartPlus2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(HeartPlusBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-heart-plus", className].filter(Boolean).join(" ") });
});
HeartPlus.displayName = "HeartPlus";
const HeartPulse = forwardRef(function HeartPulse2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(HeartPulseBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-heart-pulse", className].filter(Boolean).join(" ") });
});
HeartPulse.displayName = "HeartPulse";
const HeartX = forwardRef(function HeartX2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(HeartXBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-heart-x", className].filter(Boolean).join(" ") });
});
HeartX.displayName = "HeartX";
const Hospital = forwardRef(function Hospital2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(HospitalBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-hospital", className].filter(Boolean).join(" ") });
});
Hospital.displayName = "Hospital";
const PersonStanding = forwardRef(function PersonStanding2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PersonStandingBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-person-standing", className].filter(Boolean).join(" ") });
});
PersonStanding.displayName = "PersonStanding";
const Pill = forwardRef(function Pill2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PillBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-pill", className].filter(Boolean).join(" ") });
});
Pill.displayName = "Pill";
const PillBottle = forwardRef(function PillBottle2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PillBottleBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-pill-bottle", className].filter(Boolean).join(" ") });
});
PillBottle.displayName = "PillBottle";
const Radiation = forwardRef(function Radiation2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(RadiationBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-radiation", className].filter(Boolean).join(" ") });
});
Radiation.displayName = "Radiation";
const ScanHeart = forwardRef(function ScanHeart2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ScanHeartBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-scan-heart", className].filter(Boolean).join(" ") });
});
ScanHeart.displayName = "ScanHeart";
const SquareActivity = forwardRef(function SquareActivity2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SquareActivityBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-square-activity", className].filter(Boolean).join(" ") });
});
SquareActivity.displayName = "SquareActivity";
const Stethoscope = forwardRef(function Stethoscope2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(StethoscopeBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-stethoscope", className].filter(Boolean).join(" ") });
});
Stethoscope.displayName = "Stethoscope";
const Syringe = forwardRef(function Syringe2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SyringeBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-syringe", className].filter(Boolean).join(" ") });
});
Syringe.displayName = "Syringe";
const Tablets = forwardRef(function Tablets2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TabletsBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-tablets", className].filter(Boolean).join(" ") });
});
Tablets.displayName = "Tablets";
const Thermometer = forwardRef(function Thermometer2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ThermometerBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-thermometer", className].filter(Boolean).join(" ") });
});
Thermometer.displayName = "Thermometer";
const ThermometerSnowflake = forwardRef(function ThermometerSnowflake2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ThermometerSnowflakeBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-thermometer-snowflake", className].filter(Boolean).join(" ") });
});
ThermometerSnowflake.displayName = "ThermometerSnowflake";
const BadgeEuro = forwardRef(function BadgeEuro2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BadgeEuroBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-badge-euro", className].filter(Boolean).join(" ") });
});
BadgeEuro.displayName = "BadgeEuro";
const BadgeJapaneseYen = forwardRef(function BadgeJapaneseYen2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BadgeJapaneseYenBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-badge-japanese-yen", className].filter(Boolean).join(" ") });
});
BadgeJapaneseYen.displayName = "BadgeJapaneseYen";
const BadgePercent = forwardRef(function BadgePercent2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BadgePercentBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-badge-percent", className].filter(Boolean).join(" ") });
});
BadgePercent.displayName = "BadgePercent";
const BadgePoundSterling = forwardRef(function BadgePoundSterling2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BadgePoundSterlingBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-badge-pound-sterling", className].filter(Boolean).join(" ") });
});
BadgePoundSterling.displayName = "BadgePoundSterling";
const Banknote = forwardRef(function Banknote2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BanknoteBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-banknote", className].filter(Boolean).join(" ") });
});
Banknote.displayName = "Banknote";
const BanknoteArrowDown = forwardRef(function BanknoteArrowDown2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BanknoteArrowDownBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-banknote-arrow-down", className].filter(Boolean).join(" ") });
});
BanknoteArrowDown.displayName = "BanknoteArrowDown";
const BanknoteArrowUp = forwardRef(function BanknoteArrowUp2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BanknoteArrowUpBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-banknote-arrow-up", className].filter(Boolean).join(" ") });
});
BanknoteArrowUp.displayName = "BanknoteArrowUp";
const BanknoteCheck = forwardRef(function BanknoteCheck2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BanknoteCheckBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-banknote-check", className].filter(Boolean).join(" ") });
});
BanknoteCheck.displayName = "BanknoteCheck";
const BanknoteX = forwardRef(function BanknoteX2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BanknoteXBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-banknote-x", className].filter(Boolean).join(" ") });
});
BanknoteX.displayName = "BanknoteX";
const Calculator = forwardRef(function Calculator2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CalculatorBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-calculator", className].filter(Boolean).join(" ") });
});
Calculator.displayName = "Calculator";
const CircleDollarSign = forwardRef(function CircleDollarSign2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CircleDollarSignBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-circle-dollar-sign", className].filter(Boolean).join(" ") });
});
CircleDollarSign.displayName = "CircleDollarSign";
const CircleEuro = forwardRef(function CircleEuro2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CircleEuroBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-circle-euro", className].filter(Boolean).join(" ") });
});
CircleEuro.displayName = "CircleEuro";
const CirclePoundSterling = forwardRef(function CirclePoundSterling2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CirclePoundSterlingBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-circle-pound-sterling", className].filter(Boolean).join(" ") });
});
CirclePoundSterling.displayName = "CirclePoundSterling";
const Coins = forwardRef(function Coins2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CoinsBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-coins", className].filter(Boolean).join(" ") });
});
Coins.displayName = "Coins";
const CreditCard = forwardRef(function CreditCard2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CreditCardBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-credit-card", className].filter(Boolean).join(" ") });
});
CreditCard.displayName = "CreditCard";
const CreditCardCheck = forwardRef(function CreditCardCheck2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CreditCardCheckBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-credit-card-check", className].filter(Boolean).join(" ") });
});
CreditCardCheck.displayName = "CreditCardCheck";
const CreditCardMinus = forwardRef(function CreditCardMinus2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CreditCardMinusBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-credit-card-minus", className].filter(Boolean).join(" ") });
});
CreditCardMinus.displayName = "CreditCardMinus";
const CreditCardPlus = forwardRef(function CreditCardPlus2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CreditCardPlusBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-credit-card-plus", className].filter(Boolean).join(" ") });
});
CreditCardPlus.displayName = "CreditCardPlus";
const CreditCardReader = forwardRef(function CreditCardReader2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CreditCardReaderBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-credit-card-reader", className].filter(Boolean).join(" ") });
});
CreditCardReader.displayName = "CreditCardReader";
const CreditCardX = forwardRef(function CreditCardX2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CreditCardXBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-credit-card-x", className].filter(Boolean).join(" ") });
});
CreditCardX.displayName = "CreditCardX";
const Currency = forwardRef(function Currency2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CurrencyBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-currency", className].filter(Boolean).join(" ") });
});
Currency.displayName = "Currency";
const Euro = forwardRef(function Euro2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(EuroBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-euro", className].filter(Boolean).join(" ") });
});
Euro.displayName = "Euro";
const HandCoins = forwardRef(function HandCoins2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(HandCoinsBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-hand-coins", className].filter(Boolean).join(" ") });
});
HandCoins.displayName = "HandCoins";
const IndianRupee = forwardRef(function IndianRupee2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(IndianRupeeBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-indian-rupee", className].filter(Boolean).join(" ") });
});
IndianRupee.displayName = "IndianRupee";
const Landmark = forwardRef(function Landmark2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(LandmarkBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-landmark", className].filter(Boolean).join(" ") });
});
Landmark.displayName = "Landmark";
const PiggyBank = forwardRef(function PiggyBank2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PiggyBankBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-piggy-bank", className].filter(Boolean).join(" ") });
});
PiggyBank.displayName = "PiggyBank";
const PoundSterling = forwardRef(function PoundSterling2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PoundSterlingBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-pound-sterling", className].filter(Boolean).join(" ") });
});
PoundSterling.displayName = "PoundSterling";
const Receipt = forwardRef(function Receipt2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ReceiptBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-receipt", className].filter(Boolean).join(" ") });
});
Receipt.displayName = "Receipt";
const ReceiptCent = forwardRef(function ReceiptCent2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ReceiptCentBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-receipt-cent", className].filter(Boolean).join(" ") });
});
ReceiptCent.displayName = "ReceiptCent";
const ReceiptEuro = forwardRef(function ReceiptEuro2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ReceiptEuroBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-receipt-euro", className].filter(Boolean).join(" ") });
});
ReceiptEuro.displayName = "ReceiptEuro";
const ReceiptPoundSterling = forwardRef(function ReceiptPoundSterling2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ReceiptPoundSterlingBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-receipt-pound-sterling", className].filter(Boolean).join(" ") });
});
ReceiptPoundSterling.displayName = "ReceiptPoundSterling";
const ReceiptSwissFranc = forwardRef(function ReceiptSwissFranc2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ReceiptSwissFrancBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-receipt-swiss-franc", className].filter(Boolean).join(" ") });
});
ReceiptSwissFranc.displayName = "ReceiptSwissFranc";
const ReceiptText = forwardRef(function ReceiptText2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ReceiptTextBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-receipt-text", className].filter(Boolean).join(" ") });
});
ReceiptText.displayName = "ReceiptText";
const Scale = forwardRef(function Scale2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ScaleBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-scale", className].filter(Boolean).join(" ") });
});
Scale.displayName = "Scale";
const SwissFranc = forwardRef(function SwissFranc2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SwissFrancBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-swiss-franc", className].filter(Boolean).join(" ") });
});
SwissFranc.displayName = "SwissFranc";
const Vault = forwardRef(function Vault2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(VaultBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-vault", className].filter(Boolean).join(" ") });
});
Vault.displayName = "Vault";
const Wallet = forwardRef(function Wallet2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(WalletBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-wallet", className].filter(Boolean).join(" ") });
});
Wallet.displayName = "Wallet";
const WalletCards = forwardRef(function WalletCards2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(WalletCardsBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-wallet-cards", className].filter(Boolean).join(" ") });
});
WalletCards.displayName = "WalletCards";
const Banana = forwardRef(function Banana2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BananaBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-banana", className].filter(Boolean).join(" ") });
});
Banana.displayName = "Banana";
const Beef = forwardRef(function Beef2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BeefBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-beef", className].filter(Boolean).join(" ") });
});
Beef.displayName = "Beef";
const BeefOff = forwardRef(function BeefOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BeefOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-beef-off", className].filter(Boolean).join(" ") });
});
BeefOff.displayName = "BeefOff";
const Beer = forwardRef(function Beer2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BeerBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-beer", className].filter(Boolean).join(" ") });
});
Beer.displayName = "Beer";
const BeerOff = forwardRef(function BeerOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BeerOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-beer-off", className].filter(Boolean).join(" ") });
});
BeerOff.displayName = "BeerOff";
const Blender = forwardRef(function Blender2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BlenderBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-blender", className].filter(Boolean).join(" ") });
});
Blender.displayName = "Blender";
const BottleWine = forwardRef(function BottleWine2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BottleWineBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-bottle-wine", className].filter(Boolean).join(" ") });
});
BottleWine.displayName = "BottleWine";
const Cake = forwardRef(function Cake2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CakeBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-cake", className].filter(Boolean).join(" ") });
});
Cake.displayName = "Cake";
const CakeSlice = forwardRef(function CakeSlice2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CakeSliceBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-cake-slice", className].filter(Boolean).join(" ") });
});
CakeSlice.displayName = "CakeSlice";
const Candy = forwardRef(function Candy2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CandyBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-candy", className].filter(Boolean).join(" ") });
});
Candy.displayName = "Candy";
const CandyOff = forwardRef(function CandyOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CandyOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-candy-off", className].filter(Boolean).join(" ") });
});
CandyOff.displayName = "CandyOff";
const Carrot = forwardRef(function Carrot2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CarrotBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-carrot", className].filter(Boolean).join(" ") });
});
Carrot.displayName = "Carrot";
const ChefHat = forwardRef(function ChefHat2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ChefHatBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-chef-hat", className].filter(Boolean).join(" ") });
});
ChefHat.displayName = "ChefHat";
const Cherry = forwardRef(function Cherry2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CherryBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-cherry", className].filter(Boolean).join(" ") });
});
Cherry.displayName = "Cherry";
const Citrus = forwardRef(function Citrus2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CitrusBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-citrus", className].filter(Boolean).join(" ") });
});
Citrus.displayName = "Citrus";
const Coffee = forwardRef(function Coffee2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CoffeeBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-coffee", className].filter(Boolean).join(" ") });
});
Coffee.displayName = "Coffee";
const Cookie = forwardRef(function Cookie2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CookieBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-cookie", className].filter(Boolean).join(" ") });
});
Cookie.displayName = "Cookie";
const CookingPot = forwardRef(function CookingPot2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CookingPotBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-cooking-pot", className].filter(Boolean).join(" ") });
});
CookingPot.displayName = "CookingPot";
const Croissant = forwardRef(function Croissant2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CroissantBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-croissant", className].filter(Boolean).join(" ") });
});
Croissant.displayName = "Croissant";
const CupSoda = forwardRef(function CupSoda2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CupSodaBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-cup-soda", className].filter(Boolean).join(" ") });
});
CupSoda.displayName = "CupSoda";
const Dessert = forwardRef(function Dessert2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(DessertBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-dessert", className].filter(Boolean).join(" ") });
});
Dessert.displayName = "Dessert";
const Donut = forwardRef(function Donut2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(DonutBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-donut", className].filter(Boolean).join(" ") });
});
Donut.displayName = "Donut";
const Drumstick = forwardRef(function Drumstick2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(DrumstickBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-drumstick", className].filter(Boolean).join(" ") });
});
Drumstick.displayName = "Drumstick";
const Egg = forwardRef(function Egg2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(EggBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-egg", className].filter(Boolean).join(" ") });
});
Egg.displayName = "Egg";
const EggOff = forwardRef(function EggOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(EggOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-egg-off", className].filter(Boolean).join(" ") });
});
EggOff.displayName = "EggOff";
const Grape = forwardRef(function Grape2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(GrapeBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-grape", className].filter(Boolean).join(" ") });
});
Grape.displayName = "Grape";
const Ham = forwardRef(function Ham2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(HamBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-ham", className].filter(Boolean).join(" ") });
});
Ham.displayName = "Ham";
const Hamburger = forwardRef(function Hamburger2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(HamburgerBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-hamburger", className].filter(Boolean).join(" ") });
});
Hamburger.displayName = "Hamburger";
const IceCreamBowl = forwardRef(function IceCreamBowl2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(IceCreamBowlBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-ice-cream-bowl", className].filter(Boolean).join(" ") });
});
IceCreamBowl.displayName = "IceCreamBowl";
const Martini = forwardRef(function Martini2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MartiniBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-martini", className].filter(Boolean).join(" ") });
});
Martini.displayName = "Martini";
const Menu = forwardRef(function Menu2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MenuBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-menu", className].filter(Boolean).join(" ") });
});
Menu.displayName = "Menu";
const Microwave = forwardRef(function Microwave2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MicrowaveBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-microwave", className].filter(Boolean).join(" ") });
});
Microwave.displayName = "Microwave";
const Milk = forwardRef(function Milk2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MilkBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-milk", className].filter(Boolean).join(" ") });
});
Milk.displayName = "Milk";
const MilkOff = forwardRef(function MilkOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MilkOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-milk-off", className].filter(Boolean).join(" ") });
});
MilkOff.displayName = "MilkOff";
const Pizza = forwardRef(function Pizza2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PizzaBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-pizza", className].filter(Boolean).join(" ") });
});
Pizza.displayName = "Pizza";
const Popcorn = forwardRef(function Popcorn2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PopcornBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-popcorn", className].filter(Boolean).join(" ") });
});
Popcorn.displayName = "Popcorn";
const Refrigerator = forwardRef(function Refrigerator2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(RefrigeratorBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-refrigerator", className].filter(Boolean).join(" ") });
});
Refrigerator.displayName = "Refrigerator";
const Salad = forwardRef(function Salad2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SaladBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-salad", className].filter(Boolean).join(" ") });
});
Salad.displayName = "Salad";
const Sandwich = forwardRef(function Sandwich2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SandwichBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-sandwich", className].filter(Boolean).join(" ") });
});
Sandwich.displayName = "Sandwich";
const Soup = forwardRef(function Soup2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SoupBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-soup", className].filter(Boolean).join(" ") });
});
Soup.displayName = "Soup";
const Utensils = forwardRef(function Utensils2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(UtensilsBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-utensils", className].filter(Boolean).join(" ") });
});
Utensils.displayName = "Utensils";
const UtensilsCrossed = forwardRef(function UtensilsCrossed2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(UtensilsCrossedBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-utensils-crossed", className].filter(Boolean).join(" ") });
});
UtensilsCrossed.displayName = "UtensilsCrossed";
const Vegan = forwardRef(function Vegan2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(VeganBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-vegan", className].filter(Boolean).join(" ") });
});
Vegan.displayName = "Vegan";
const Wheat = forwardRef(function Wheat2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(WheatBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-wheat", className].filter(Boolean).join(" ") });
});
Wheat.displayName = "Wheat";
const WheatOff = forwardRef(function WheatOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(WheatOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-wheat-off", className].filter(Boolean).join(" ") });
});
WheatOff.displayName = "WheatOff";
const Wine = forwardRef(function Wine2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(WineBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-wine", className].filter(Boolean).join(" ") });
});
Wine.displayName = "Wine";
const WineOff = forwardRef(function WineOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(WineOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-wine-off", className].filter(Boolean).join(" ") });
});
WineOff.displayName = "WineOff";
const Cloud = forwardRef(function Cloud2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CloudBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-cloud", className].filter(Boolean).join(" ") });
});
Cloud.displayName = "Cloud";
const CloudDrizzle = forwardRef(function CloudDrizzle2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CloudDrizzleBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-cloud-drizzle", className].filter(Boolean).join(" ") });
});
CloudDrizzle.displayName = "CloudDrizzle";
const CloudExclamationPoint = forwardRef(function CloudExclamationPoint2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CloudExclamationPointBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-cloud-exclamation-point", className].filter(Boolean).join(" ") });
});
CloudExclamationPoint.displayName = "CloudExclamationPoint";
const CloudFog = forwardRef(function CloudFog2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CloudFogBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-cloud-fog", className].filter(Boolean).join(" ") });
});
CloudFog.displayName = "CloudFog";
const CloudHail = forwardRef(function CloudHail2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CloudHailBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-cloud-hail", className].filter(Boolean).join(" ") });
});
CloudHail.displayName = "CloudHail";
const CloudLightning = forwardRef(function CloudLightning2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CloudLightningBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-cloud-lightning", className].filter(Boolean).join(" ") });
});
CloudLightning.displayName = "CloudLightning";
const CloudMoon = forwardRef(function CloudMoon2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CloudMoonBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-cloud-moon", className].filter(Boolean).join(" ") });
});
CloudMoon.displayName = "CloudMoon";
const CloudRain = forwardRef(function CloudRain2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CloudRainBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-cloud-rain", className].filter(Boolean).join(" ") });
});
CloudRain.displayName = "CloudRain";
const CloudSnow = forwardRef(function CloudSnow2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CloudSnowBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-cloud-snow", className].filter(Boolean).join(" ") });
});
CloudSnow.displayName = "CloudSnow";
const Clover = forwardRef(function Clover2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CloverBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-clover", className].filter(Boolean).join(" ") });
});
Clover.displayName = "Clover";
const Droplet = forwardRef(function Droplet2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(DropletBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-droplet", className].filter(Boolean).join(" ") });
});
Droplet.displayName = "Droplet";
const DropletOff = forwardRef(function DropletOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(DropletOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-droplet-off", className].filter(Boolean).join(" ") });
});
DropletOff.displayName = "DropletOff";
const Droplets = forwardRef(function Droplets2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(DropletsBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-droplets", className].filter(Boolean).join(" ") });
});
Droplets.displayName = "Droplets";
const Eclipse = forwardRef(function Eclipse2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(EclipseBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-eclipse", className].filter(Boolean).join(" ") });
});
Eclipse.displayName = "Eclipse";
const Flower = forwardRef(function Flower2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(FlowerBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-flower", className].filter(Boolean).join(" ") });
});
Flower.displayName = "Flower";
const Haze = forwardRef(function Haze2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(HazeBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-haze", className].filter(Boolean).join(" ") });
});
Haze.displayName = "Haze";
const Leaf = forwardRef(function Leaf2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(LeafBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-leaf", className].filter(Boolean).join(" ") });
});
Leaf.displayName = "Leaf";
const Rainbow = forwardRef(function Rainbow2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(RainbowBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-rainbow", className].filter(Boolean).join(" ") });
});
Rainbow.displayName = "Rainbow";
const Snowflake = forwardRef(function Snowflake2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SnowflakeBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-snowflake", className].filter(Boolean).join(" ") });
});
Snowflake.displayName = "Snowflake";
const Sprout = forwardRef(function Sprout2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SproutBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-sprout", className].filter(Boolean).join(" ") });
});
Sprout.displayName = "Sprout";
const SunDim = forwardRef(function SunDim2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SunDimBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-sun-dim", className].filter(Boolean).join(" ") });
});
SunDim.displayName = "SunDim";
const SunMedium = forwardRef(function SunMedium2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SunMediumBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-sun-medium", className].filter(Boolean).join(" ") });
});
SunMedium.displayName = "SunMedium";
const SunMoon = forwardRef(function SunMoon2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SunMoonBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-sun-moon", className].filter(Boolean).join(" ") });
});
SunMoon.displayName = "SunMoon";
const Sunrise = forwardRef(function Sunrise2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SunriseBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-sunrise", className].filter(Boolean).join(" ") });
});
Sunrise.displayName = "Sunrise";
const Sunset = forwardRef(function Sunset2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SunsetBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-sunset", className].filter(Boolean).join(" ") });
});
Sunset.displayName = "Sunset";
const SunSnow = forwardRef(function SunSnow2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SunSnowBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-sun-snow", className].filter(Boolean).join(" ") });
});
SunSnow.displayName = "SunSnow";
const Tornado = forwardRef(function Tornado2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TornadoBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-tornado", className].filter(Boolean).join(" ") });
});
Tornado.displayName = "Tornado";
const Umbrella = forwardRef(function Umbrella2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(UmbrellaBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-umbrella", className].filter(Boolean).join(" ") });
});
Umbrella.displayName = "Umbrella";
const UmbrellaOff = forwardRef(function UmbrellaOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(UmbrellaOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-umbrella-off", className].filter(Boolean).join(" ") });
});
UmbrellaOff.displayName = "UmbrellaOff";
const WavesArrowDown = forwardRef(function WavesArrowDown2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(WavesArrowDownBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-waves-arrow-down", className].filter(Boolean).join(" ") });
});
WavesArrowDown.displayName = "WavesArrowDown";
const WavesArrowUp = forwardRef(function WavesArrowUp2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(WavesArrowUpBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-waves-arrow-up", className].filter(Boolean).join(" ") });
});
WavesArrowUp.displayName = "WavesArrowUp";
const WavesHorizontal = forwardRef(function WavesHorizontal2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(WavesHorizontalBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-waves-horizontal", className].filter(Boolean).join(" ") });
});
WavesHorizontal.displayName = "WavesHorizontal";
const WavesLadder = forwardRef(function WavesLadder2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(WavesLadderBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-waves-ladder", className].filter(Boolean).join(" ") });
});
WavesLadder.displayName = "WavesLadder";
const WavesVertical = forwardRef(function WavesVertical2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(WavesVerticalBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-waves-vertical", className].filter(Boolean).join(" ") });
});
WavesVertical.displayName = "WavesVertical";
const Wind = forwardRef(function Wind2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(WindBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-wind", className].filter(Boolean).join(" ") });
});
Wind.displayName = "Wind";
const WindArrowDown = forwardRef(function WindArrowDown2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(WindArrowDownBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-wind-arrow-down", className].filter(Boolean).join(" ") });
});
WindArrowDown.displayName = "WindArrowDown";
const WindArrowUp = forwardRef(function WindArrowUp2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(WindArrowUpBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-wind-arrow-up", className].filter(Boolean).join(" ") });
});
WindArrowUp.displayName = "WindArrowUp";
const Atom = forwardRef(function Atom2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(AtomBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-atom", className].filter(Boolean).join(" ") });
});
Atom.displayName = "Atom";
const Backpack = forwardRef(function Backpack2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BackpackBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-backpack", className].filter(Boolean).join(" ") });
});
Backpack.displayName = "Backpack";
const Book = forwardRef(function Book2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BookBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-book", className].filter(Boolean).join(" ") });
});
Book.displayName = "Book";
const BookAudio = forwardRef(function BookAudio2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BookAudioBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-book-audio", className].filter(Boolean).join(" ") });
});
BookAudio.displayName = "BookAudio";
const BookCheck = forwardRef(function BookCheck2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BookCheckBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-book-check", className].filter(Boolean).join(" ") });
});
BookCheck.displayName = "BookCheck";
const BookCopy = forwardRef(function BookCopy2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BookCopyBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-book-copy", className].filter(Boolean).join(" ") });
});
BookCopy.displayName = "BookCopy";
const BookHeart = forwardRef(function BookHeart2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BookHeartBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-book-heart", className].filter(Boolean).join(" ") });
});
BookHeart.displayName = "BookHeart";
const BookKey = forwardRef(function BookKey2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BookKeyBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-book-key", className].filter(Boolean).join(" ") });
});
BookKey.displayName = "BookKey";
const BookOpenCheck = forwardRef(function BookOpenCheck2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BookOpenCheckBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-book-open-check", className].filter(Boolean).join(" ") });
});
BookOpenCheck.displayName = "BookOpenCheck";
const BookPlus = forwardRef(function BookPlus2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BookPlusBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-book-plus", className].filter(Boolean).join(" ") });
});
BookPlus.displayName = "BookPlus";
const BookX = forwardRef(function BookX2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BookXBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-book-x", className].filter(Boolean).join(" ") });
});
BookX.displayName = "BookX";
const DraftingCompass = forwardRef(function DraftingCompass2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(DraftingCompassBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-drafting-compass", className].filter(Boolean).join(" ") });
});
DraftingCompass.displayName = "DraftingCompass";
const FlaskConical = forwardRef(function FlaskConical2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(FlaskConicalBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-flask-conical", className].filter(Boolean).join(" ") });
});
FlaskConical.displayName = "FlaskConical";
const FlaskRound = forwardRef(function FlaskRound2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(FlaskRoundBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-flask-round", className].filter(Boolean).join(" ") });
});
FlaskRound.displayName = "FlaskRound";
const Library = forwardRef(function Library2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(LibraryBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-library", className].filter(Boolean).join(" ") });
});
Library.displayName = "Library";
const LibraryBig = forwardRef(function LibraryBig2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(LibraryBigBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-library-big", className].filter(Boolean).join(" ") });
});
LibraryBig.displayName = "LibraryBig";
const Microscope = forwardRef(function Microscope2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MicroscopeBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-microscope", className].filter(Boolean).join(" ") });
});
Microscope.displayName = "Microscope";
const Notebook = forwardRef(function Notebook2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(NotebookBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-notebook", className].filter(Boolean).join(" ") });
});
Notebook.displayName = "Notebook";
const NotebookDot = forwardRef(function NotebookDot2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(NotebookDotBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-notebook-dot", className].filter(Boolean).join(" ") });
});
NotebookDot.displayName = "NotebookDot";
const NotebookPen = forwardRef(function NotebookPen2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(NotebookPenBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-notebook-pen", className].filter(Boolean).join(" ") });
});
NotebookPen.displayName = "NotebookPen";
const NotebookTabs = forwardRef(function NotebookTabs2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(NotebookTabsBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-notebook-tabs", className].filter(Boolean).join(" ") });
});
NotebookTabs.displayName = "NotebookTabs";
const NotebookText = forwardRef(function NotebookText2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(NotebookTextBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-notebook-text", className].filter(Boolean).join(" ") });
});
NotebookText.displayName = "NotebookText";
const Orbit = forwardRef(function Orbit2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(OrbitBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-orbit", className].filter(Boolean).join(" ") });
});
Orbit.displayName = "Orbit";
const PencilRuler = forwardRef(function PencilRuler2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PencilRulerBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-pencil-ruler", className].filter(Boolean).join(" ") });
});
PencilRuler.displayName = "PencilRuler";
const Presentation = forwardRef(function Presentation2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PresentationBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-presentation", className].filter(Boolean).join(" ") });
});
Presentation.displayName = "Presentation";
const Ruler = forwardRef(function Ruler2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(RulerBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-ruler", className].filter(Boolean).join(" ") });
});
Ruler.displayName = "Ruler";
const RulerDimensionLine = forwardRef(function RulerDimensionLine2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(RulerDimensionLineBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-ruler-dimension-line", className].filter(Boolean).join(" ") });
});
RulerDimensionLine.displayName = "RulerDimensionLine";
const School = forwardRef(function School2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SchoolBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-school", className].filter(Boolean).join(" ") });
});
School.displayName = "School";
const Telescope = forwardRef(function Telescope2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TelescopeBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-telescope", className].filter(Boolean).join(" ") });
});
Telescope.displayName = "Telescope";
const TestTube = forwardRef(function TestTube2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TestTubeBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-test-tube", className].filter(Boolean).join(" ") });
});
TestTube.displayName = "TestTube";
const University = forwardRef(function University2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(UniversityBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-university", className].filter(Boolean).join(" ") });
});
University.displayName = "University";
const Anchor = forwardRef(function Anchor2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(AnchorBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-anchor", className].filter(Boolean).join(" ") });
});
Anchor.displayName = "Anchor";
const Bike = forwardRef(function Bike2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BikeBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-bike", className].filter(Boolean).join(" ") });
});
Bike.displayName = "Bike";
const Bus = forwardRef(function Bus2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BusBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-bus", className].filter(Boolean).join(" ") });
});
Bus.displayName = "Bus";
const Car = forwardRef(function Car2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CarBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-car", className].filter(Boolean).join(" ") });
});
Car.displayName = "Car";
const Caravan = forwardRef(function Caravan2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CaravanBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-caravan", className].filter(Boolean).join(" ") });
});
Caravan.displayName = "Caravan";
const CarBattery = forwardRef(function CarBattery2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CarBatteryBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-car-battery", className].filter(Boolean).join(" ") });
});
CarBattery.displayName = "CarBattery";
const Fuel = forwardRef(function Fuel2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(FuelBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-fuel", className].filter(Boolean).join(" ") });
});
Fuel.displayName = "Fuel";
const Hotel = forwardRef(function Hotel2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(HotelBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-hotel", className].filter(Boolean).join(" ") });
});
Hotel.displayName = "Hotel";
const Luggage = forwardRef(function Luggage2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(LuggageBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-luggage", className].filter(Boolean).join(" ") });
});
Luggage.displayName = "Luggage";
const MapPinOff = forwardRef(function MapPinOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MapPinOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-map-pin-off", className].filter(Boolean).join(" ") });
});
MapPinOff.displayName = "MapPinOff";
const Mountain = forwardRef(function Mountain2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MountainBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-mountain", className].filter(Boolean).join(" ") });
});
Mountain.displayName = "Mountain";
const ParkingMeter = forwardRef(function ParkingMeter2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ParkingMeterBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-parking-meter", className].filter(Boolean).join(" ") });
});
ParkingMeter.displayName = "ParkingMeter";
const PlaneLanding = forwardRef(function PlaneLanding2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PlaneLandingBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-plane-landing", className].filter(Boolean).join(" ") });
});
PlaneLanding.displayName = "PlaneLanding";
const Road = forwardRef(function Road2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(RoadBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-road", className].filter(Boolean).join(" ") });
});
Road.displayName = "Road";
const RouteOff = forwardRef(function RouteOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(RouteOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-route-off", className].filter(Boolean).join(" ") });
});
RouteOff.displayName = "RouteOff";
const Sailboat = forwardRef(function Sailboat2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SailboatBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-sailboat", className].filter(Boolean).join(" ") });
});
Sailboat.displayName = "Sailboat";
const Scooter = forwardRef(function Scooter2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ScooterBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-scooter", className].filter(Boolean).join(" ") });
});
Scooter.displayName = "Scooter";
const Ship = forwardRef(function Ship2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ShipBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-ship", className].filter(Boolean).join(" ") });
});
Ship.displayName = "Ship";
const ShipCargo = forwardRef(function ShipCargo2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ShipCargoBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-ship-cargo", className].filter(Boolean).join(" ") });
});
ShipCargo.displayName = "ShipCargo";
const ShipWheel = forwardRef(function ShipWheel2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ShipWheelBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-ship-wheel", className].filter(Boolean).join(" ") });
});
ShipWheel.displayName = "ShipWheel";
const Tent = forwardRef(function Tent2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TentBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-tent", className].filter(Boolean).join(" ") });
});
Tent.displayName = "Tent";
const Ticket = forwardRef(function Ticket2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TicketBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-ticket", className].filter(Boolean).join(" ") });
});
Ticket.displayName = "Ticket";
const TicketCheck = forwardRef(function TicketCheck2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TicketCheckBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-ticket-check", className].filter(Boolean).join(" ") });
});
TicketCheck.displayName = "TicketCheck";
const TicketMinus = forwardRef(function TicketMinus2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TicketMinusBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-ticket-minus", className].filter(Boolean).join(" ") });
});
TicketMinus.displayName = "TicketMinus";
const TicketPercent = forwardRef(function TicketPercent2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TicketPercentBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-ticket-percent", className].filter(Boolean).join(" ") });
});
TicketPercent.displayName = "TicketPercent";
const TicketPlus = forwardRef(function TicketPlus2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TicketPlusBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-ticket-plus", className].filter(Boolean).join(" ") });
});
TicketPlus.displayName = "TicketPlus";
const Tickets = forwardRef(function Tickets2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TicketsBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-tickets", className].filter(Boolean).join(" ") });
});
Tickets.displayName = "Tickets";
const TicketSlash = forwardRef(function TicketSlash2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TicketSlashBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-ticket-slash", className].filter(Boolean).join(" ") });
});
TicketSlash.displayName = "TicketSlash";
const TicketsPlane = forwardRef(function TicketsPlane2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TicketsPlaneBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-tickets-plane", className].filter(Boolean).join(" ") });
});
TicketsPlane.displayName = "TicketsPlane";
const TicketX = forwardRef(function TicketX2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TicketXBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-ticket-x", className].filter(Boolean).join(" ") });
});
TicketX.displayName = "TicketX";
const TrafficCone = forwardRef(function TrafficCone2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TrafficConeBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-traffic-cone", className].filter(Boolean).join(" ") });
});
TrafficCone.displayName = "TrafficCone";
const TrainFront = forwardRef(function TrainFront2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TrainFrontBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-train-front", className].filter(Boolean).join(" ") });
});
TrainFront.displayName = "TrainFront";
const TramFront = forwardRef(function TramFront2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TramFrontBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-tram-front", className].filter(Boolean).join(" ") });
});
TramFront.displayName = "TramFront";
const Barcode = forwardRef(function Barcode2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BarcodeBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-barcode", className].filter(Boolean).join(" ") });
});
Barcode.displayName = "Barcode";
const Container = forwardRef(function Container2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ContainerBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-container", className].filter(Boolean).join(" ") });
});
Container.displayName = "Container";
const Package = forwardRef(function Package2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PackageBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-package", className].filter(Boolean).join(" ") });
});
Package.displayName = "Package";
const Package22 = forwardRef(function Package23(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(Package2Base, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-package-2", className].filter(Boolean).join(" ") });
});
Package22.displayName = "Package2";
const PackageCheck = forwardRef(function PackageCheck2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PackageCheckBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-package-check", className].filter(Boolean).join(" ") });
});
PackageCheck.displayName = "PackageCheck";
const PackageMinus = forwardRef(function PackageMinus2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PackageMinusBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-package-minus", className].filter(Boolean).join(" ") });
});
PackageMinus.displayName = "PackageMinus";
const PackagePen = forwardRef(function PackagePen2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PackagePenBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-package-pen", className].filter(Boolean).join(" ") });
});
PackagePen.displayName = "PackagePen";
const PackagePlus = forwardRef(function PackagePlus2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PackagePlusBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-package-plus", className].filter(Boolean).join(" ") });
});
PackagePlus.displayName = "PackagePlus";
const PackageQuestionMark = forwardRef(function PackageQuestionMark2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PackageQuestionMarkBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-package-question-mark", className].filter(Boolean).join(" ") });
});
PackageQuestionMark.displayName = "PackageQuestionMark";
const PackageSearch = forwardRef(function PackageSearch2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PackageSearchBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-package-search", className].filter(Boolean).join(" ") });
});
PackageSearch.displayName = "PackageSearch";
const PackageX = forwardRef(function PackageX2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PackageXBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-package-x", className].filter(Boolean).join(" ") });
});
PackageX.displayName = "PackageX";
const QrCode = forwardRef(function QrCode2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(QrCodeBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-qr-code", className].filter(Boolean).join(" ") });
});
QrCode.displayName = "QrCode";
const ReceiptIndianRupee = forwardRef(function ReceiptIndianRupee2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ReceiptIndianRupeeBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-receipt-indian-rupee", className].filter(Boolean).join(" ") });
});
ReceiptIndianRupee.displayName = "ReceiptIndianRupee";
const ReceiptJapaneseYen = forwardRef(function ReceiptJapaneseYen2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ReceiptJapaneseYenBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-receipt-japanese-yen", className].filter(Boolean).join(" ") });
});
ReceiptJapaneseYen.displayName = "ReceiptJapaneseYen";
const ReceiptTurkishLira = forwardRef(function ReceiptTurkishLira2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ReceiptTurkishLiraBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-receipt-turkish-lira", className].filter(Boolean).join(" ") });
});
ReceiptTurkishLira.displayName = "ReceiptTurkishLira";
const ScanBarcode = forwardRef(function ScanBarcode2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ScanBarcodeBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-scan-barcode", className].filter(Boolean).join(" ") });
});
ScanBarcode.displayName = "ScanBarcode";
const ScanLine = forwardRef(function ScanLine2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ScanLineBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-scan-line", className].filter(Boolean).join(" ") });
});
ScanLine.displayName = "ScanLine";
const ScanQrCode = forwardRef(function ScanQrCode2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ScanQrCodeBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-scan-qr-code", className].filter(Boolean).join(" ") });
});
ScanQrCode.displayName = "ScanQrCode";
const ShoppingBag = forwardRef(function ShoppingBag2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ShoppingBagBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-shopping-bag", className].filter(Boolean).join(" ") });
});
ShoppingBag.displayName = "ShoppingBag";
const ShoppingBasket = forwardRef(function ShoppingBasket2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ShoppingBasketBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-shopping-basket", className].filter(Boolean).join(" ") });
});
ShoppingBasket.displayName = "ShoppingBasket";
const ShoppingCart = forwardRef(function ShoppingCart2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ShoppingCartBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-shopping-cart", className].filter(Boolean).join(" ") });
});
ShoppingCart.displayName = "ShoppingCart";
const ShoppingCartMinus = forwardRef(function ShoppingCartMinus2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ShoppingCartMinusBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-shopping-cart-minus", className].filter(Boolean).join(" ") });
});
ShoppingCartMinus.displayName = "ShoppingCartMinus";
const ShoppingCartPlus = forwardRef(function ShoppingCartPlus2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ShoppingCartPlusBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-shopping-cart-plus", className].filter(Boolean).join(" ") });
});
ShoppingCartPlus.displayName = "ShoppingCartPlus";
const Store = forwardRef(function Store2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(StoreBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-store", className].filter(Boolean).join(" ") });
});
Store.displayName = "Store";
const TagPlus = forwardRef(function TagPlus2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TagPlusBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-tag-plus", className].filter(Boolean).join(" ") });
});
TagPlus.displayName = "TagPlus";
const Tags = forwardRef(function Tags2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TagsBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-tags", className].filter(Boolean).join(" ") });
});
Tags.displayName = "Tags";
const TagX = forwardRef(function TagX2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TagXBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-tag-x", className].filter(Boolean).join(" ") });
});
TagX.displayName = "TagX";
const Truck = forwardRef(function Truck2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TruckBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-truck", className].filter(Boolean).join(" ") });
});
Truck.displayName = "Truck";
const TruckElectric = forwardRef(function TruckElectric2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TruckElectricBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-truck-electric", className].filter(Boolean).join(" ") });
});
TruckElectric.displayName = "TruckElectric";
const WalletMinimal = forwardRef(function WalletMinimal2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(WalletMinimalBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-wallet-minimal", className].filter(Boolean).join(" ") });
});
WalletMinimal.displayName = "WalletMinimal";
const BrickWallFire = forwardRef(function BrickWallFire2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BrickWallFireBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-brick-wall-fire", className].filter(Boolean).join(" ") });
});
BrickWallFire.displayName = "BrickWallFire";
const BrickWallShield = forwardRef(function BrickWallShield2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BrickWallShieldBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-brick-wall-shield", className].filter(Boolean).join(" ") });
});
BrickWallShield.displayName = "BrickWallShield";
const EarthLock = forwardRef(function EarthLock2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(EarthLockBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-earth-lock", className].filter(Boolean).join(" ") });
});
EarthLock.displayName = "EarthLock";
const EyeClosed = forwardRef(function EyeClosed2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(EyeClosedBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-eye-closed", className].filter(Boolean).join(" ") });
});
EyeClosed.displayName = "EyeClosed";
const EyeDashed = forwardRef(function EyeDashed2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(EyeDashedBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-eye-dashed", className].filter(Boolean).join(" ") });
});
EyeDashed.displayName = "EyeDashed";
const FileKey = forwardRef(function FileKey2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(FileKeyBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-file-key", className].filter(Boolean).join(" ") });
});
FileKey.displayName = "FileKey";
const FileLock = forwardRef(function FileLock2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(FileLockBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-file-lock", className].filter(Boolean).join(" ") });
});
FileLock.displayName = "FileLock";
const Gavel = forwardRef(function Gavel2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(GavelBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-gavel", className].filter(Boolean).join(" ") });
});
Gavel.displayName = "Gavel";
const GlobeLock = forwardRef(function GlobeLock2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(GlobeLockBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-globe-lock", className].filter(Boolean).join(" ") });
});
GlobeLock.displayName = "GlobeLock";
const KeySquare = forwardRef(function KeySquare2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(KeySquareBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-key-square", className].filter(Boolean).join(" ") });
});
KeySquare.displayName = "KeySquare";
const LockKeyhole = forwardRef(function LockKeyhole2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(LockKeyholeBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-lock-keyhole", className].filter(Boolean).join(" ") });
});
LockKeyhole.displayName = "LockKeyhole";
const LockKeyholeOpen = forwardRef(function LockKeyholeOpen2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(LockKeyholeOpenBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-lock-keyhole-open", className].filter(Boolean).join(" ") });
});
LockKeyholeOpen.displayName = "LockKeyholeOpen";
const LockOpen = forwardRef(function LockOpen2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(LockOpenBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-lock-open", className].filter(Boolean).join(" ") });
});
LockOpen.displayName = "LockOpen";
const ScanEye = forwardRef(function ScanEye2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ScanEyeBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-scan-eye", className].filter(Boolean).join(" ") });
});
ScanEye.displayName = "ScanEye";
const ShieldBan = forwardRef(function ShieldBan2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ShieldBanBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-shield-ban", className].filter(Boolean).join(" ") });
});
ShieldBan.displayName = "ShieldBan";
const ShieldCog = forwardRef(function ShieldCog2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ShieldCogBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-shield-cog", className].filter(Boolean).join(" ") });
});
ShieldCog.displayName = "ShieldCog";
const ShieldEllipsis = forwardRef(function ShieldEllipsis2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ShieldEllipsisBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-shield-ellipsis", className].filter(Boolean).join(" ") });
});
ShieldEllipsis.displayName = "ShieldEllipsis";
const ShieldHalf = forwardRef(function ShieldHalf2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ShieldHalfBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-shield-half", className].filter(Boolean).join(" ") });
});
ShieldHalf.displayName = "ShieldHalf";
const ShieldMinus = forwardRef(function ShieldMinus2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ShieldMinusBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-shield-minus", className].filter(Boolean).join(" ") });
});
ShieldMinus.displayName = "ShieldMinus";
const ShieldOff = forwardRef(function ShieldOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ShieldOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-shield-off", className].filter(Boolean).join(" ") });
});
ShieldOff.displayName = "ShieldOff";
const ShieldPlus = forwardRef(function ShieldPlus2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ShieldPlusBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-shield-plus", className].filter(Boolean).join(" ") });
});
ShieldPlus.displayName = "ShieldPlus";
const ShieldQuestionMark = forwardRef(function ShieldQuestionMark2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ShieldQuestionMarkBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-shield-question-mark", className].filter(Boolean).join(" ") });
});
ShieldQuestionMark.displayName = "ShieldQuestionMark";
const ShieldX = forwardRef(function ShieldX2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ShieldXBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-shield-x", className].filter(Boolean).join(" ") });
});
ShieldX.displayName = "ShieldX";
const Siren = forwardRef(function Siren2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SirenBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-siren", className].filter(Boolean).join(" ") });
});
Siren.displayName = "Siren";
const SirenOff = forwardRef(function SirenOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SirenOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-siren-off", className].filter(Boolean).join(" ") });
});
SirenOff.displayName = "SirenOff";
const VenetianMask = forwardRef(function VenetianMask2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(VenetianMaskBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-venetian-mask", className].filter(Boolean).join(" ") });
});
VenetianMask.displayName = "VenetianMask";
const BellCheck = forwardRef(function BellCheck2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BellCheckBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-bell-check", className].filter(Boolean).join(" ") });
});
BellCheck.displayName = "BellCheck";
const BellDot = forwardRef(function BellDot2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BellDotBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-bell-dot", className].filter(Boolean).join(" ") });
});
BellDot.displayName = "BellDot";
const BellElectric = forwardRef(function BellElectric2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BellElectricBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-bell-electric", className].filter(Boolean).join(" ") });
});
BellElectric.displayName = "BellElectric";
const BellMinus = forwardRef(function BellMinus2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BellMinusBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-bell-minus", className].filter(Boolean).join(" ") });
});
BellMinus.displayName = "BellMinus";
const BellOff = forwardRef(function BellOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BellOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-bell-off", className].filter(Boolean).join(" ") });
});
BellOff.displayName = "BellOff";
const BellPlus = forwardRef(function BellPlus2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BellPlusBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-bell-plus", className].filter(Boolean).join(" ") });
});
BellPlus.displayName = "BellPlus";
const Contact = forwardRef(function Contact2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ContactBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-contact", className].filter(Boolean).join(" ") });
});
Contact.displayName = "Contact";
const Forward = forwardRef(function Forward2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ForwardBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-forward", className].filter(Boolean).join(" ") });
});
Forward.displayName = "Forward";
const Headset = forwardRef(function Headset2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(HeadsetBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-headset", className].filter(Boolean).join(" ") });
});
Headset.displayName = "Headset";
const MailBadge = forwardRef(function MailBadge2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MailBadgeBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-mail-badge", className].filter(Boolean).join(" ") });
});
MailBadge.displayName = "MailBadge";
const Mailbox = forwardRef(function Mailbox2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MailboxBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-mailbox", className].filter(Boolean).join(" ") });
});
Mailbox.displayName = "Mailbox";
const MailClock = forwardRef(function MailClock2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MailClockBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-mail-clock", className].filter(Boolean).join(" ") });
});
MailClock.displayName = "MailClock";
const MailDot = forwardRef(function MailDot2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MailDotBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-mail-dot", className].filter(Boolean).join(" ") });
});
MailDot.displayName = "MailDot";
const MailMinus = forwardRef(function MailMinus2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MailMinusBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-mail-minus", className].filter(Boolean).join(" ") });
});
MailMinus.displayName = "MailMinus";
const MailPen = forwardRef(function MailPen2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MailPenBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-mail-pen", className].filter(Boolean).join(" ") });
});
MailPen.displayName = "MailPen";
const MailQuestionMark = forwardRef(function MailQuestionMark2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MailQuestionMarkBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-mail-question-mark", className].filter(Boolean).join(" ") });
});
MailQuestionMark.displayName = "MailQuestionMark";
const Mails = forwardRef(function Mails2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MailsBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-mails", className].filter(Boolean).join(" ") });
});
Mails.displayName = "Mails";
const MailSearch = forwardRef(function MailSearch2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MailSearchBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-mail-search", className].filter(Boolean).join(" ") });
});
MailSearch.displayName = "MailSearch";
const MailX = forwardRef(function MailX2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MailXBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-mail-x", className].filter(Boolean).join(" ") });
});
MailX.displayName = "MailX";
const Megaphone = forwardRef(function Megaphone2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MegaphoneBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-megaphone", className].filter(Boolean).join(" ") });
});
Megaphone.displayName = "Megaphone";
const MegaphoneOff = forwardRef(function MegaphoneOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MegaphoneOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-megaphone-off", className].filter(Boolean).join(" ") });
});
MegaphoneOff.displayName = "MegaphoneOff";
const MessageCircle = forwardRef(function MessageCircle2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MessageCircleBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-message-circle", className].filter(Boolean).join(" ") });
});
MessageCircle.displayName = "MessageCircle";
const MessageCircleDashedCheck = forwardRef(function MessageCircleDashedCheck2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MessageCircleDashedCheckBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-message-circle-dashed-check", className].filter(Boolean).join(" ") });
});
MessageCircleDashedCheck.displayName = "MessageCircleDashedCheck";
const MessageCircleOff = forwardRef(function MessageCircleOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MessageCircleOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-message-circle-off", className].filter(Boolean).join(" ") });
});
MessageCircleOff.displayName = "MessageCircleOff";
const MessageCircleText = forwardRef(function MessageCircleText2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MessageCircleTextBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-message-circle-text", className].filter(Boolean).join(" ") });
});
MessageCircleText.displayName = "MessageCircleText";
const MessageCircleX = forwardRef(function MessageCircleX2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MessageCircleXBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-message-circle-x", className].filter(Boolean).join(" ") });
});
MessageCircleX.displayName = "MessageCircleX";
const MessageSquareDiff = forwardRef(function MessageSquareDiff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MessageSquareDiffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-message-square-diff", className].filter(Boolean).join(" ") });
});
MessageSquareDiff.displayName = "MessageSquareDiff";
const MessageSquareLock = forwardRef(function MessageSquareLock2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MessageSquareLockBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-message-square-lock", className].filter(Boolean).join(" ") });
});
MessageSquareLock.displayName = "MessageSquareLock";
const MessageSquareOff = forwardRef(function MessageSquareOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MessageSquareOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-message-square-off", className].filter(Boolean).join(" ") });
});
MessageSquareOff.displayName = "MessageSquareOff";
const MessageSquareX = forwardRef(function MessageSquareX2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MessageSquareXBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-message-square-x", className].filter(Boolean).join(" ") });
});
MessageSquareX.displayName = "MessageSquareX";
const MessagesSquare = forwardRef(function MessagesSquare2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MessagesSquareBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-messages-square", className].filter(Boolean).join(" ") });
});
MessagesSquare.displayName = "MessagesSquare";
const Phone = forwardRef(function Phone2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PhoneBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-phone", className].filter(Boolean).join(" ") });
});
Phone.displayName = "Phone";
const PhoneLog = forwardRef(function PhoneLog2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PhoneLogBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-phone-log", className].filter(Boolean).join(" ") });
});
PhoneLog.displayName = "PhoneLog";
const PhoneOff = forwardRef(function PhoneOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PhoneOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-phone-off", className].filter(Boolean).join(" ") });
});
PhoneOff.displayName = "PhoneOff";
const RadioOff = forwardRef(function RadioOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(RadioOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-radio-off", className].filter(Boolean).join(" ") });
});
RadioOff.displayName = "RadioOff";
const Reply = forwardRef(function Reply2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ReplyBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-reply", className].filter(Boolean).join(" ") });
});
Reply.displayName = "Reply";
const Satellite = forwardRef(function Satellite2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SatelliteBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-satellite", className].filter(Boolean).join(" ") });
});
Satellite.displayName = "Satellite";
const SatelliteDish = forwardRef(function SatelliteDish2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SatelliteDishBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-satellite-dish", className].filter(Boolean).join(" ") });
});
SatelliteDish.displayName = "SatelliteDish";
const SendToBack = forwardRef(function SendToBack2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SendToBackBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-send-to-back", className].filter(Boolean).join(" ") });
});
SendToBack.displayName = "SendToBack";
const Share = forwardRef(function Share3(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ShareBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-share", className].filter(Boolean).join(" ") });
});
Share.displayName = "Share";
const Speech = forwardRef(function Speech2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SpeechBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-speech", className].filter(Boolean).join(" ") });
});
Speech.displayName = "Speech";
const Voicemail = forwardRef(function Voicemail2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(VoicemailBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-voicemail", className].filter(Boolean).join(" ") });
});
Voicemail.displayName = "Voicemail";
const Airplay = forwardRef(function Airplay2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(AirplayBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-airplay", className].filter(Boolean).join(" ") });
});
Airplay.displayName = "Airplay";
const Aperture = forwardRef(function Aperture2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ApertureBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-aperture", className].filter(Boolean).join(" ") });
});
Aperture.displayName = "Aperture";
const AudioLines = forwardRef(function AudioLines2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(AudioLinesBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-audio-lines", className].filter(Boolean).join(" ") });
});
AudioLines.displayName = "AudioLines";
const AudioLinesOff = forwardRef(function AudioLinesOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(AudioLinesOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-audio-lines-off", className].filter(Boolean).join(" ") });
});
AudioLinesOff.displayName = "AudioLinesOff";
const AudioLinesX = forwardRef(function AudioLinesX2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(AudioLinesXBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-audio-lines-x", className].filter(Boolean).join(" ") });
});
AudioLinesX.displayName = "AudioLinesX";
const AudioWaveform = forwardRef(function AudioWaveform2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(AudioWaveformBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-audio-waveform", className].filter(Boolean).join(" ") });
});
AudioWaveform.displayName = "AudioWaveform";
const CameraOff = forwardRef(function CameraOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CameraOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-camera-off", className].filter(Boolean).join(" ") });
});
CameraOff.displayName = "CameraOff";
const Captions = forwardRef(function Captions2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CaptionsBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-captions", className].filter(Boolean).join(" ") });
});
Captions.displayName = "Captions";
const CaptionsOff = forwardRef(function CaptionsOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CaptionsOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-captions-off", className].filter(Boolean).join(" ") });
});
CaptionsOff.displayName = "CaptionsOff";
const Cast = forwardRef(function Cast2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CastBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-cast", className].filter(Boolean).join(" ") });
});
Cast.displayName = "Cast";
const Clapperboard = forwardRef(function Clapperboard2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ClapperboardBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-clapperboard", className].filter(Boolean).join(" ") });
});
Clapperboard.displayName = "Clapperboard";
const Disc = forwardRef(function Disc2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(DiscBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-disc", className].filter(Boolean).join(" ") });
});
Disc.displayName = "Disc";
const Disc22 = forwardRef(function Disc23(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(Disc2Base, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-disc-2", className].filter(Boolean).join(" ") });
});
Disc22.displayName = "Disc2";
const Disc3 = forwardRef(function Disc32(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(Disc3Base, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-disc-3", className].filter(Boolean).join(" ") });
});
Disc3.displayName = "Disc3";
const DiscAlbum = forwardRef(function DiscAlbum2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(DiscAlbumBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-disc-album", className].filter(Boolean).join(" ") });
});
DiscAlbum.displayName = "DiscAlbum";
const FastForward = forwardRef(function FastForward2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(FastForwardBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-fast-forward", className].filter(Boolean).join(" ") });
});
FastForward.displayName = "FastForward";
const Film = forwardRef(function Film2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(FilmBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-film", className].filter(Boolean).join(" ") });
});
Film.displayName = "Film";
const Headphones = forwardRef(function Headphones2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(HeadphonesBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-headphones", className].filter(Boolean).join(" ") });
});
Headphones.displayName = "Headphones";
const ImageOff = forwardRef(function ImageOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ImageOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-image-off", className].filter(Boolean).join(" ") });
});
ImageOff.displayName = "ImageOff";
const ImagePlay = forwardRef(function ImagePlay2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ImagePlayBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-image-play", className].filter(Boolean).join(" ") });
});
ImagePlay.displayName = "ImagePlay";
const Images = forwardRef(function Images2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ImagesBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-images", className].filter(Boolean).join(" ") });
});
Images.displayName = "Images";
const ImageUp = forwardRef(function ImageUp2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ImageUpBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-image-up", className].filter(Boolean).join(" ") });
});
ImageUp.displayName = "ImageUp";
const Mic = forwardRef(function Mic2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MicBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-mic", className].filter(Boolean).join(" ") });
});
Mic.displayName = "Mic";
const MicAudioLines = forwardRef(function MicAudioLines2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MicAudioLinesBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-mic-audio-lines", className].filter(Boolean).join(" ") });
});
MicAudioLines.displayName = "MicAudioLines";
const MicOff = forwardRef(function MicOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MicOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-mic-off", className].filter(Boolean).join(" ") });
});
MicOff.displayName = "MicOff";
const MicSignal = forwardRef(function MicSignal2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MicSignalBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-mic-signal", className].filter(Boolean).join(" ") });
});
MicSignal.displayName = "MicSignal";
const MicVocal = forwardRef(function MicVocal2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MicVocalBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-mic-vocal", className].filter(Boolean).join(" ") });
});
MicVocal.displayName = "MicVocal";
const Pause = forwardRef(function Pause2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PauseBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-pause", className].filter(Boolean).join(" ") });
});
Pause.displayName = "Pause";
const Play = forwardRef(function Play2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PlayBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-play", className].filter(Boolean).join(" ") });
});
Play.displayName = "Play";
const PlayOff = forwardRef(function PlayOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PlayOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-play-off", className].filter(Boolean).join(" ") });
});
PlayOff.displayName = "PlayOff";
const Rewind = forwardRef(function Rewind2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(RewindBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-rewind", className].filter(Boolean).join(" ") });
});
Rewind.displayName = "Rewind";
const SkipBack = forwardRef(function SkipBack2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SkipBackBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-skip-back", className].filter(Boolean).join(" ") });
});
SkipBack.displayName = "SkipBack";
const Speaker = forwardRef(function Speaker2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SpeakerBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-speaker", className].filter(Boolean).join(" ") });
});
Speaker.displayName = "Speaker";
const Tv = forwardRef(function Tv2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TvBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-tv", className].filter(Boolean).join(" ") });
});
Tv.displayName = "Tv";
const TvMinimal = forwardRef(function TvMinimal2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TvMinimalBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-tv-minimal", className].filter(Boolean).join(" ") });
});
TvMinimal.displayName = "TvMinimal";
const TvMinimalPlay = forwardRef(function TvMinimalPlay2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TvMinimalPlayBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-tv-minimal-play", className].filter(Boolean).join(" ") });
});
TvMinimalPlay.displayName = "TvMinimalPlay";
const VideoOff = forwardRef(function VideoOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(VideoOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-video-off", className].filter(Boolean).join(" ") });
});
VideoOff.displayName = "VideoOff";
const Volume = forwardRef(function Volume2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(VolumeBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-volume", className].filter(Boolean).join(" ") });
});
Volume.displayName = "Volume";
const VolumeOff = forwardRef(function VolumeOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(VolumeOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-volume-off", className].filter(Boolean).join(" ") });
});
VolumeOff.displayName = "VolumeOff";
const Webcam = forwardRef(function Webcam2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(WebcamBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-webcam", className].filter(Boolean).join(" ") });
});
Webcam.displayName = "Webcam";
const WebcamOff = forwardRef(function WebcamOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(WebcamOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-webcam-off", className].filter(Boolean).join(" ") });
});
WebcamOff.displayName = "WebcamOff";
const ArchiveX = forwardRef(function ArchiveX2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ArchiveXBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-archive-x", className].filter(Boolean).join(" ") });
});
ArchiveX.displayName = "ArchiveX";
const Clipboard = forwardRef(function Clipboard2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ClipboardBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-clipboard", className].filter(Boolean).join(" ") });
});
Clipboard.displayName = "Clipboard";
const ClipboardCheck = forwardRef(function ClipboardCheck2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ClipboardCheckBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-clipboard-check", className].filter(Boolean).join(" ") });
});
ClipboardCheck.displayName = "ClipboardCheck";
const ClipboardClock = forwardRef(function ClipboardClock2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ClipboardClockBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-clipboard-clock", className].filter(Boolean).join(" ") });
});
ClipboardClock.displayName = "ClipboardClock";
const ClipboardMinus = forwardRef(function ClipboardMinus2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ClipboardMinusBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-clipboard-minus", className].filter(Boolean).join(" ") });
});
ClipboardMinus.displayName = "ClipboardMinus";
const ClipboardPen = forwardRef(function ClipboardPen2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ClipboardPenBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-clipboard-pen", className].filter(Boolean).join(" ") });
});
ClipboardPen.displayName = "ClipboardPen";
const ClipboardPenLine = forwardRef(function ClipboardPenLine2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ClipboardPenLineBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-clipboard-pen-line", className].filter(Boolean).join(" ") });
});
ClipboardPenLine.displayName = "ClipboardPenLine";
const ClipboardPlus = forwardRef(function ClipboardPlus2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ClipboardPlusBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-clipboard-plus", className].filter(Boolean).join(" ") });
});
ClipboardPlus.displayName = "ClipboardPlus";
const ClipboardType = forwardRef(function ClipboardType2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ClipboardTypeBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-clipboard-type", className].filter(Boolean).join(" ") });
});
ClipboardType.displayName = "ClipboardType";
const ClipboardX = forwardRef(function ClipboardX2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ClipboardXBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-clipboard-x", className].filter(Boolean).join(" ") });
});
ClipboardX.displayName = "ClipboardX";
const File = forwardRef(function File2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(FileBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-file", className].filter(Boolean).join(" ") });
});
File.displayName = "File";
const FileBox = forwardRef(function FileBox2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(FileBoxBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-file-box", className].filter(Boolean).join(" ") });
});
FileBox.displayName = "FileBox";
const FileDatabase = forwardRef(function FileDatabase2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(FileDatabaseBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-file-database", className].filter(Boolean).join(" ") });
});
FileDatabase.displayName = "FileDatabase";
const FilePen = forwardRef(function FilePen2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(FilePenBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-file-pen", className].filter(Boolean).join(" ") });
});
FilePen.displayName = "FilePen";
const FilePenLine = forwardRef(function FilePenLine2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(FilePenLineBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-file-pen-line", className].filter(Boolean).join(" ") });
});
FilePenLine.displayName = "FilePenLine";
const Files = forwardRef(function Files2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(FilesBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-files", className].filter(Boolean).join(" ") });
});
Files.displayName = "Files";
const FileScan = forwardRef(function FileScan2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(FileScanBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-file-scan", className].filter(Boolean).join(" ") });
});
FileScan.displayName = "FileScan";
const FileSearchCorner = forwardRef(function FileSearchCorner2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(FileSearchCornerBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-file-search-corner", className].filter(Boolean).join(" ") });
});
FileSearchCorner.displayName = "FileSearchCorner";
const Folder = forwardRef(function Folder2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(FolderBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-folder", className].filter(Boolean).join(" ") });
});
Folder.displayName = "Folder";
const FolderCog = forwardRef(function FolderCog2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(FolderCogBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-folder-cog", className].filter(Boolean).join(" ") });
});
FolderCog.displayName = "FolderCog";
const FolderDot = forwardRef(function FolderDot2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(FolderDotBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-folder-dot", className].filter(Boolean).join(" ") });
});
FolderDot.displayName = "FolderDot";
const FolderKanban = forwardRef(function FolderKanban2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(FolderKanbanBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-folder-kanban", className].filter(Boolean).join(" ") });
});
FolderKanban.displayName = "FolderKanban";
const FolderKey = forwardRef(function FolderKey2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(FolderKeyBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-folder-key", className].filter(Boolean).join(" ") });
});
FolderKey.displayName = "FolderKey";
const FolderPen = forwardRef(function FolderPen2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(FolderPenBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-folder-pen", className].filter(Boolean).join(" ") });
});
FolderPen.displayName = "FolderPen";
const FolderSearch = forwardRef(function FolderSearch2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(FolderSearchBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-folder-search", className].filter(Boolean).join(" ") });
});
FolderSearch.displayName = "FolderSearch";
const FolderSync = forwardRef(function FolderSync2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(FolderSyncBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-folder-sync", className].filter(Boolean).join(" ") });
});
FolderSync.displayName = "FolderSync";
const FolderUsers = forwardRef(function FolderUsers2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(FolderUsersBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-folder-users", className].filter(Boolean).join(" ") });
});
FolderUsers.displayName = "FolderUsers";
const HardDriveDownload = forwardRef(function HardDriveDownload2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(HardDriveDownloadBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-hard-drive-download", className].filter(Boolean).join(" ") });
});
HardDriveDownload.displayName = "HardDriveDownload";
const HardDriveUpload = forwardRef(function HardDriveUpload2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(HardDriveUploadBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-hard-drive-upload", className].filter(Boolean).join(" ") });
});
HardDriveUpload.displayName = "HardDriveUpload";
const NotepadText = forwardRef(function NotepadText2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(NotepadTextBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-notepad-text", className].filter(Boolean).join(" ") });
});
NotepadText.displayName = "NotepadText";
const NotepadTextDashed = forwardRef(function NotepadTextDashed2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(NotepadTextDashedBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-notepad-text-dashed", className].filter(Boolean).join(" ") });
});
NotepadTextDashed.displayName = "NotepadTextDashed";
const Save = forwardRef(function Save2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SaveBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-save", className].filter(Boolean).join(" ") });
});
Save.displayName = "Save";
const SaveCheck = forwardRef(function SaveCheck2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SaveCheckBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-save-check", className].filter(Boolean).join(" ") });
});
SaveCheck.displayName = "SaveCheck";
const SaveOff = forwardRef(function SaveOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SaveOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-save-off", className].filter(Boolean).join(" ") });
});
SaveOff.displayName = "SaveOff";
const SavePen = forwardRef(function SavePen2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SavePenBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-save-pen", className].filter(Boolean).join(" ") });
});
SavePen.displayName = "SavePen";
const SavePlus = forwardRef(function SavePlus2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SavePlusBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-save-plus", className].filter(Boolean).join(" ") });
});
SavePlus.displayName = "SavePlus";
const Scroll = forwardRef(function Scroll2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ScrollBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-scroll", className].filter(Boolean).join(" ") });
});
Scroll.displayName = "Scroll";
const StickyNoteCheck = forwardRef(function StickyNoteCheck2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(StickyNoteCheckBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-sticky-note-check", className].filter(Boolean).join(" ") });
});
StickyNoteCheck.displayName = "StickyNoteCheck";
const StickyNoteMinus = forwardRef(function StickyNoteMinus2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(StickyNoteMinusBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-sticky-note-minus", className].filter(Boolean).join(" ") });
});
StickyNoteMinus.displayName = "StickyNoteMinus";
const StickyNoteOff = forwardRef(function StickyNoteOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(StickyNoteOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-sticky-note-off", className].filter(Boolean).join(" ") });
});
StickyNoteOff.displayName = "StickyNoteOff";
const StickyNotePlus = forwardRef(function StickyNotePlus2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(StickyNotePlusBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-sticky-note-plus", className].filter(Boolean).join(" ") });
});
StickyNotePlus.displayName = "StickyNotePlus";
const StickyNoteX = forwardRef(function StickyNoteX2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(StickyNoteXBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-sticky-note-x", className].filter(Boolean).join(" ") });
});
StickyNoteX.displayName = "StickyNoteX";
const Binary = forwardRef(function Binary2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BinaryBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-binary", className].filter(Boolean).join(" ") });
});
Binary.displayName = "Binary";
const ChartBar = forwardRef(function ChartBar2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ChartBarBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-chart-bar", className].filter(Boolean).join(" ") });
});
ChartBar.displayName = "ChartBar";
const ChartBellCurve = forwardRef(function ChartBellCurve2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ChartBellCurveBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-chart-bell-curve", className].filter(Boolean).join(" ") });
});
ChartBellCurve.displayName = "ChartBellCurve";
const ChartCandlestick = forwardRef(function ChartCandlestick2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ChartCandlestickBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-chart-candlestick", className].filter(Boolean).join(" ") });
});
ChartCandlestick.displayName = "ChartCandlestick";
const ChartGantt = forwardRef(function ChartGantt2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ChartGanttBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-chart-gantt", className].filter(Boolean).join(" ") });
});
ChartGantt.displayName = "ChartGantt";
const ChartNetwork = forwardRef(function ChartNetwork2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ChartNetworkBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-chart-network", className].filter(Boolean).join(" ") });
});
ChartNetwork.displayName = "ChartNetwork";
const ChartNoAxesGantt = forwardRef(function ChartNoAxesGantt2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ChartNoAxesGanttBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-chart-no-axes-gantt", className].filter(Boolean).join(" ") });
});
ChartNoAxesGantt.displayName = "ChartNoAxesGantt";
const ChartQuadrant = forwardRef(function ChartQuadrant2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ChartQuadrantBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-chart-quadrant", className].filter(Boolean).join(" ") });
});
ChartQuadrant.displayName = "ChartQuadrant";
const ChartRadar = forwardRef(function ChartRadar2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ChartRadarBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-chart-radar", className].filter(Boolean).join(" ") });
});
ChartRadar.displayName = "ChartRadar";
const ChartSpline = forwardRef(function ChartSpline2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ChartSplineBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-chart-spline", className].filter(Boolean).join(" ") });
});
ChartSpline.displayName = "ChartSpline";
const Crosshair = forwardRef(function Crosshair2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CrosshairBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-crosshair", className].filter(Boolean).join(" ") });
});
Crosshair.displayName = "Crosshair";
const Database = forwardRef(function Database2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(DatabaseBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-database", className].filter(Boolean).join(" ") });
});
Database.displayName = "Database";
const DatabaseArrowUp = forwardRef(function DatabaseArrowUp2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(DatabaseArrowUpBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-database-arrow-up", className].filter(Boolean).join(" ") });
});
DatabaseArrowUp.displayName = "DatabaseArrowUp";
const DatabaseBackup = forwardRef(function DatabaseBackup2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(DatabaseBackupBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-database-backup", className].filter(Boolean).join(" ") });
});
DatabaseBackup.displayName = "DatabaseBackup";
const DatabaseCheck = forwardRef(function DatabaseCheck2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(DatabaseCheckBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-database-check", className].filter(Boolean).join(" ") });
});
DatabaseCheck.displayName = "DatabaseCheck";
const DatabaseMinus = forwardRef(function DatabaseMinus2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(DatabaseMinusBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-database-minus", className].filter(Boolean).join(" ") });
});
DatabaseMinus.displayName = "DatabaseMinus";
const DatabasePlus = forwardRef(function DatabasePlus2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(DatabasePlusBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-database-plus", className].filter(Boolean).join(" ") });
});
DatabasePlus.displayName = "DatabasePlus";
const DatabaseSearch = forwardRef(function DatabaseSearch2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(DatabaseSearchBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-database-search", className].filter(Boolean).join(" ") });
});
DatabaseSearch.displayName = "DatabaseSearch";
const DatabaseX = forwardRef(function DatabaseX2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(DatabaseXBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-database-x", className].filter(Boolean).join(" ") });
});
DatabaseX.displayName = "DatabaseX";
const DatabaseZap = forwardRef(function DatabaseZap2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(DatabaseZapBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-database-zap", className].filter(Boolean).join(" ") });
});
DatabaseZap.displayName = "DatabaseZap";
const Network = forwardRef(function Network2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(NetworkBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-network", className].filter(Boolean).join(" ") });
});
Network.displayName = "Network";
const ScanBox = forwardRef(function ScanBox2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ScanBoxBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-scan-box", className].filter(Boolean).join(" ") });
});
ScanBox.displayName = "ScanBox";
const ScanSearch = forwardRef(function ScanSearch2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ScanSearchBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-scan-search", className].filter(Boolean).join(" ") });
});
ScanSearch.displayName = "ScanSearch";
const Sigma = forwardRef(function Sigma2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SigmaBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-sigma", className].filter(Boolean).join(" ") });
});
Sigma.displayName = "Sigma";
const SquareChartGantt = forwardRef(function SquareChartGantt2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SquareChartGanttBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-square-chart-gantt", className].filter(Boolean).join(" ") });
});
SquareChartGantt.displayName = "SquareChartGantt";
const Table = forwardRef(function Table2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TableBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-table", className].filter(Boolean).join(" ") });
});
Table.displayName = "Table";
const TableOfContents = forwardRef(function TableOfContents2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TableOfContentsBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-table-of-contents", className].filter(Boolean).join(" ") });
});
TableOfContents.displayName = "TableOfContents";
const TableProperties = forwardRef(function TableProperties2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TablePropertiesBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-table-properties", className].filter(Boolean).join(" ") });
});
TableProperties.displayName = "TableProperties";
const TrendingUpDown = forwardRef(function TrendingUpDown2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TrendingUpDownBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-trending-up-down", className].filter(Boolean).join(" ") });
});
TrendingUpDown.displayName = "TrendingUpDown";
const Battery = forwardRef(function Battery2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BatteryBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-battery", className].filter(Boolean).join(" ") });
});
Battery.displayName = "Battery";
const BatteryPlus = forwardRef(function BatteryPlus2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BatteryPlusBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-battery-plus", className].filter(Boolean).join(" ") });
});
BatteryPlus.displayName = "BatteryPlus";
const Bluetooth = forwardRef(function Bluetooth2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BluetoothBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-bluetooth", className].filter(Boolean).join(" ") });
});
Bluetooth.displayName = "Bluetooth";
const BluetoothOff = forwardRef(function BluetoothOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BluetoothOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-bluetooth-off", className].filter(Boolean).join(" ") });
});
BluetoothOff.displayName = "BluetoothOff";
const Cable = forwardRef(function Cable2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CableBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-cable", className].filter(Boolean).join(" ") });
});
Cable.displayName = "Cable";
const Cpu = forwardRef(function Cpu2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CpuBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-cpu", className].filter(Boolean).join(" ") });
});
Cpu.displayName = "Cpu";
const CpuAi = forwardRef(function CpuAi2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CpuAiBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-cpu-ai", className].filter(Boolean).join(" ") });
});
CpuAi.displayName = "CpuAi";
const EthernetPort = forwardRef(function EthernetPort2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(EthernetPortBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-ethernet-port", className].filter(Boolean).join(" ") });
});
EthernetPort.displayName = "EthernetPort";
const HardDrive = forwardRef(function HardDrive2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(HardDriveBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-hard-drive", className].filter(Boolean).join(" ") });
});
HardDrive.displayName = "HardDrive";
const Keyboard = forwardRef(function Keyboard2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(KeyboardBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-keyboard", className].filter(Boolean).join(" ") });
});
Keyboard.displayName = "Keyboard";
const KeyboardMusic = forwardRef(function KeyboardMusic2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(KeyboardMusicBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-keyboard-music", className].filter(Boolean).join(" ") });
});
KeyboardMusic.displayName = "KeyboardMusic";
const KeyboardOff = forwardRef(function KeyboardOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(KeyboardOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-keyboard-off", className].filter(Boolean).join(" ") });
});
KeyboardOff.displayName = "KeyboardOff";
const Laptop = forwardRef(function Laptop2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(LaptopBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-laptop", className].filter(Boolean).join(" ") });
});
Laptop.displayName = "Laptop";
const MemoryStick = forwardRef(function MemoryStick2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MemoryStickBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-memory-stick", className].filter(Boolean).join(" ") });
});
MemoryStick.displayName = "MemoryStick";
const MonitorActivity = forwardRef(function MonitorActivity2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MonitorActivityBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-monitor-activity", className].filter(Boolean).join(" ") });
});
MonitorActivity.displayName = "MonitorActivity";
const MonitorCheck = forwardRef(function MonitorCheck2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MonitorCheckBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-monitor-check", className].filter(Boolean).join(" ") });
});
MonitorCheck.displayName = "MonitorCheck";
const MonitorCog = forwardRef(function MonitorCog2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MonitorCogBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-monitor-cog", className].filter(Boolean).join(" ") });
});
MonitorCog.displayName = "MonitorCog";
const MonitorDot = forwardRef(function MonitorDot2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MonitorDotBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-monitor-dot", className].filter(Boolean).join(" ") });
});
MonitorDot.displayName = "MonitorDot";
const MonitorOff = forwardRef(function MonitorOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MonitorOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-monitor-off", className].filter(Boolean).join(" ") });
});
MonitorOff.displayName = "MonitorOff";
const MonitorPc = forwardRef(function MonitorPc2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MonitorPcBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-monitor-pc", className].filter(Boolean).join(" ") });
});
MonitorPc.displayName = "MonitorPc";
const MonitorPlay = forwardRef(function MonitorPlay2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MonitorPlayBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-monitor-play", className].filter(Boolean).join(" ") });
});
MonitorPlay.displayName = "MonitorPlay";
const MonitorSmartphone = forwardRef(function MonitorSmartphone2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MonitorSmartphoneBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-monitor-smartphone", className].filter(Boolean).join(" ") });
});
MonitorSmartphone.displayName = "MonitorSmartphone";
const MonitorX = forwardRef(function MonitorX2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MonitorXBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-monitor-x", className].filter(Boolean).join(" ") });
});
MonitorX.displayName = "MonitorX";
const Mouse = forwardRef(function Mouse2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MouseBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-mouse", className].filter(Boolean).join(" ") });
});
Mouse.displayName = "Mouse";
const MouseOff = forwardRef(function MouseOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MouseOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-mouse-off", className].filter(Boolean).join(" ") });
});
MouseOff.displayName = "MouseOff";
const MousePointer2Off = forwardRef(function MousePointer2Off2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MousePointer2OffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-mouse-pointer-2-off", className].filter(Boolean).join(" ") });
});
MousePointer2Off.displayName = "MousePointer2Off";
const Plug22 = forwardRef(function Plug23(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(Plug2Base, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-plug-2", className].filter(Boolean).join(" ") });
});
Plug22.displayName = "Plug2";
const PlugZap = forwardRef(function PlugZap2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PlugZapBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-plug-zap", className].filter(Boolean).join(" ") });
});
PlugZap.displayName = "PlugZap";
const PowerOff = forwardRef(function PowerOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PowerOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-power-off", className].filter(Boolean).join(" ") });
});
PowerOff.displayName = "PowerOff";
const Printer = forwardRef(function Printer2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PrinterBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-printer", className].filter(Boolean).join(" ") });
});
Printer.displayName = "Printer";
const Printer3D = forwardRef(function Printer3D2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(Printer3DBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-printer-3d", className].filter(Boolean).join(" ") });
});
Printer3D.displayName = "Printer3D";
const PrinterCheck = forwardRef(function PrinterCheck2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PrinterCheckBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-printer-check", className].filter(Boolean).join(" ") });
});
PrinterCheck.displayName = "PrinterCheck";
const PrinterX = forwardRef(function PrinterX2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PrinterXBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-printer-x", className].filter(Boolean).join(" ") });
});
PrinterX.displayName = "PrinterX";
const Projector = forwardRef(function Projector2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ProjectorBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-projector", className].filter(Boolean).join(" ") });
});
Projector.displayName = "Projector";
const Router = forwardRef(function Router2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(RouterBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-router", className].filter(Boolean).join(" ") });
});
Router.displayName = "Router";
const Server = forwardRef(function Server2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ServerBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-server", className].filter(Boolean).join(" ") });
});
Server.displayName = "Server";
const ServerNas = forwardRef(function ServerNas2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ServerNasBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-server-nas", className].filter(Boolean).join(" ") });
});
ServerNas.displayName = "ServerNas";
const ServerPlus = forwardRef(function ServerPlus2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ServerPlusBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-server-plus", className].filter(Boolean).join(" ") });
});
ServerPlus.displayName = "ServerPlus";
const SmartphoneCharging = forwardRef(function SmartphoneCharging2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SmartphoneChargingBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-smartphone-charging", className].filter(Boolean).join(" ") });
});
SmartphoneCharging.displayName = "SmartphoneCharging";
const SmartphoneNfc = forwardRef(function SmartphoneNfc2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SmartphoneNfcBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-smartphone-nfc", className].filter(Boolean).join(" ") });
});
SmartphoneNfc.displayName = "SmartphoneNfc";
const SmartphoneUserRound = forwardRef(function SmartphoneUserRound2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SmartphoneUserRoundBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-smartphone-user-round", className].filter(Boolean).join(" ") });
});
SmartphoneUserRound.displayName = "SmartphoneUserRound";
const Tablet = forwardRef(function Tablet2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TabletBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-tablet", className].filter(Boolean).join(" ") });
});
Tablet.displayName = "Tablet";
const TabletSmartphone = forwardRef(function TabletSmartphone2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TabletSmartphoneBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-tablet-smartphone", className].filter(Boolean).join(" ") });
});
TabletSmartphone.displayName = "TabletSmartphone";
const Usb = forwardRef(function Usb2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(UsbBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-usb", className].filter(Boolean).join(" ") });
});
Usb.displayName = "Usb";
const UsbCPort = forwardRef(function UsbCPort2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(UsbCPortBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-usb-c-port", className].filter(Boolean).join(" ") });
});
UsbCPort.displayName = "UsbCPort";
const Wifi = forwardRef(function Wifi2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(WifiBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-wifi", className].filter(Boolean).join(" ") });
});
Wifi.displayName = "Wifi";
const WifiCog = forwardRef(function WifiCog2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(WifiCogBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-wifi-cog", className].filter(Boolean).join(" ") });
});
WifiCog.displayName = "WifiCog";
const WifiLock = forwardRef(function WifiLock2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(WifiLockBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-wifi-lock", className].filter(Boolean).join(" ") });
});
WifiLock.displayName = "WifiLock";
const WifiOff = forwardRef(function WifiOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(WifiOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-wifi-off", className].filter(Boolean).join(" ") });
});
WifiOff.displayName = "WifiOff";
const WifiPen = forwardRef(function WifiPen2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(WifiPenBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-wifi-pen", className].filter(Boolean).join(" ") });
});
WifiPen.displayName = "WifiPen";
const WifiSync = forwardRef(function WifiSync2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(WifiSyncBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-wifi-sync", className].filter(Boolean).join(" ") });
});
WifiSync.displayName = "WifiSync";
const Box = forwardRef(function Box2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BoxBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-box", className].filter(Boolean).join(" ") });
});
Box.displayName = "Box";
const Boxes = forwardRef(function Boxes2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BoxesBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-boxes", className].filter(Boolean).join(" ") });
});
Boxes.displayName = "Boxes";
const BoxesLinked = forwardRef(function BoxesLinked2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BoxesLinkedBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-boxes-linked", className].filter(Boolean).join(" ") });
});
BoxesLinked.displayName = "BoxesLinked";
const Braces = forwardRef(function Braces2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BracesBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-braces", className].filter(Boolean).join(" ") });
});
Braces.displayName = "Braces";
const Brackets = forwardRef(function Brackets2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BracketsBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-brackets", className].filter(Boolean).join(" ") });
});
Brackets.displayName = "Brackets";
const Bug = forwardRef(function Bug2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BugBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-bug", className].filter(Boolean).join(" ") });
});
Bug.displayName = "Bug";
const BugOff = forwardRef(function BugOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BugOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-bug-off", className].filter(Boolean).join(" ") });
});
BugOff.displayName = "BugOff";
const BugPlay = forwardRef(function BugPlay2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BugPlayBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-bug-play", className].filter(Boolean).join(" ") });
});
BugPlay.displayName = "BugPlay";
const CodeXml = forwardRef(function CodeXml2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CodeXmlBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-code-xml", className].filter(Boolean).join(" ") });
});
CodeXml.displayName = "CodeXml";
const Command = forwardRef(function Command2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CommandBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-command", className].filter(Boolean).join(" ") });
});
Command.displayName = "Command";
const GitBranch = forwardRef(function GitBranch2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(GitBranchBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-git-branch", className].filter(Boolean).join(" ") });
});
GitBranch.displayName = "GitBranch";
const GitBranchMinus = forwardRef(function GitBranchMinus2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(GitBranchMinusBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-git-branch-minus", className].filter(Boolean).join(" ") });
});
GitBranchMinus.displayName = "GitBranchMinus";
const GitBranchPlus = forwardRef(function GitBranchPlus2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(GitBranchPlusBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-git-branch-plus", className].filter(Boolean).join(" ") });
});
GitBranchPlus.displayName = "GitBranchPlus";
const GitCompare = forwardRef(function GitCompare2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(GitCompareBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-git-compare", className].filter(Boolean).join(" ") });
});
GitCompare.displayName = "GitCompare";
const GitFork = forwardRef(function GitFork2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(GitForkBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-git-fork", className].filter(Boolean).join(" ") });
});
GitFork.displayName = "GitFork";
const GitGraph = forwardRef(function GitGraph2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(GitGraphBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-git-graph", className].filter(Boolean).join(" ") });
});
GitGraph.displayName = "GitGraph";
const GitMerge = forwardRef(function GitMerge2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(GitMergeBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-git-merge", className].filter(Boolean).join(" ") });
});
GitMerge.displayName = "GitMerge";
const GitMergeConflict = forwardRef(function GitMergeConflict2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(GitMergeConflictBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-git-merge-conflict", className].filter(Boolean).join(" ") });
});
GitMergeConflict.displayName = "GitMergeConflict";
const GitPullRequestCreate = forwardRef(function GitPullRequestCreate2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(GitPullRequestCreateBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-git-pull-request-create", className].filter(Boolean).join(" ") });
});
GitPullRequestCreate.displayName = "GitPullRequestCreate";
const Puzzle = forwardRef(function Puzzle2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PuzzleBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-puzzle", className].filter(Boolean).join(" ") });
});
Puzzle.displayName = "Puzzle";
const Regex = forwardRef(function Regex2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(RegexBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-regex", className].filter(Boolean).join(" ") });
});
Regex.displayName = "Regex";
const ServerCog = forwardRef(function ServerCog2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ServerCogBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-server-cog", className].filter(Boolean).join(" ") });
});
ServerCog.displayName = "ServerCog";
const ServerOff = forwardRef(function ServerOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ServerOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-server-off", className].filter(Boolean).join(" ") });
});
ServerOff.displayName = "ServerOff";
const Terminal = forwardRef(function Terminal2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TerminalBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-terminal", className].filter(Boolean).join(" ") });
});
Terminal.displayName = "Terminal";
const Variable = forwardRef(function Variable2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(VariableBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-variable", className].filter(Boolean).join(" ") });
});
Variable.displayName = "Variable";
const Webhook = forwardRef(function Webhook2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(WebhookBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-webhook", className].filter(Boolean).join(" ") });
});
Webhook.displayName = "Webhook";
const WebhookOff = forwardRef(function WebhookOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(WebhookOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-webhook-off", className].filter(Boolean).join(" ") });
});
WebhookOff.displayName = "WebhookOff";
const Workflow = forwardRef(function Workflow2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(WorkflowBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-workflow", className].filter(Boolean).join(" ") });
});
Workflow.displayName = "Workflow";
const ALargeSmall = forwardRef(function ALargeSmall2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ALargeSmallBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-a-large-small", className].filter(Boolean).join(" ") });
});
ALargeSmall.displayName = "ALargeSmall";
const AlignEndHorizontal = forwardRef(function AlignEndHorizontal2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(AlignEndHorizontalBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-align-end-horizontal", className].filter(Boolean).join(" ") });
});
AlignEndHorizontal.displayName = "AlignEndHorizontal";
const AlignEndVertical = forwardRef(function AlignEndVertical2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(AlignEndVerticalBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-align-end-vertical", className].filter(Boolean).join(" ") });
});
AlignEndVertical.displayName = "AlignEndVertical";
const AlignHorizontalSpaceBetween = forwardRef(function AlignHorizontalSpaceBetween2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(AlignHorizontalSpaceBetweenBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-align-horizontal-space-between", className].filter(Boolean).join(" ") });
});
AlignHorizontalSpaceBetween.displayName = "AlignHorizontalSpaceBetween";
const AlignStartHorizontal = forwardRef(function AlignStartHorizontal2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(AlignStartHorizontalBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-align-start-horizontal", className].filter(Boolean).join(" ") });
});
AlignStartHorizontal.displayName = "AlignStartHorizontal";
const AlignStartVertical = forwardRef(function AlignStartVertical2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(AlignStartVerticalBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-align-start-vertical", className].filter(Boolean).join(" ") });
});
AlignStartVertical.displayName = "AlignStartVertical";
const AlignVerticalSpaceBetween = forwardRef(function AlignVerticalSpaceBetween2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(AlignVerticalSpaceBetweenBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-align-vertical-space-between", className].filter(Boolean).join(" ") });
});
AlignVerticalSpaceBetween.displayName = "AlignVerticalSpaceBetween";
const Baseline = forwardRef(function Baseline2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BaselineBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-baseline", className].filter(Boolean).join(" ") });
});
Baseline.displayName = "Baseline";
const CaseLower = forwardRef(function CaseLower2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CaseLowerBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-case-lower", className].filter(Boolean).join(" ") });
});
CaseLower.displayName = "CaseLower";
const CopyCheck = forwardRef(function CopyCheck2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CopyCheckBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-copy-check", className].filter(Boolean).join(" ") });
});
CopyCheck.displayName = "CopyCheck";
const CopySlash = forwardRef(function CopySlash2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CopySlashBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-copy-slash", className].filter(Boolean).join(" ") });
});
CopySlash.displayName = "CopySlash";
const CopyX = forwardRef(function CopyX2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CopyXBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-copy-x", className].filter(Boolean).join(" ") });
});
CopyX.displayName = "CopyX";
const Eraser = forwardRef(function Eraser2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(EraserBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-eraser", className].filter(Boolean).join(" ") });
});
Eraser.displayName = "Eraser";
const Heading1 = forwardRef(function Heading12(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(Heading1Base, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-heading-1", className].filter(Boolean).join(" ") });
});
Heading1.displayName = "Heading1";
const Heading3 = forwardRef(function Heading32(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(Heading3Base, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-heading-3", className].filter(Boolean).join(" ") });
});
Heading3.displayName = "Heading3";
const Heading4 = forwardRef(function Heading42(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(Heading4Base, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-heading-4", className].filter(Boolean).join(" ") });
});
Heading4.displayName = "Heading4";
const Heading5 = forwardRef(function Heading52(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(Heading5Base, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-heading-5", className].filter(Boolean).join(" ") });
});
Heading5.displayName = "Heading5";
const Heading6 = forwardRef(function Heading62(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(Heading6Base, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-heading-6", className].filter(Boolean).join(" ") });
});
Heading6.displayName = "Heading6";
const Highlighter = forwardRef(function Highlighter2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(HighlighterBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-highlighter", className].filter(Boolean).join(" ") });
});
Highlighter.displayName = "Highlighter";
const Ligature = forwardRef(function Ligature2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(LigatureBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-ligature", className].filter(Boolean).join(" ") });
});
Ligature.displayName = "Ligature";
const ListCheck = forwardRef(function ListCheck2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ListCheckBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-list-check", className].filter(Boolean).join(" ") });
});
ListCheck.displayName = "ListCheck";
const ListChecks = forwardRef(function ListChecks2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ListChecksBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-list-checks", className].filter(Boolean).join(" ") });
});
ListChecks.displayName = "ListChecks";
const ListChevronsDownUp = forwardRef(function ListChevronsDownUp2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ListChevronsDownUpBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-list-chevrons-down-up", className].filter(Boolean).join(" ") });
});
ListChevronsDownUp.displayName = "ListChevronsDownUp";
const ListChevronsUpDown = forwardRef(function ListChevronsUpDown2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ListChevronsUpDownBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-list-chevrons-up-down", className].filter(Boolean).join(" ") });
});
ListChevronsUpDown.displayName = "ListChevronsUpDown";
const ListClock = forwardRef(function ListClock2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ListClockBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-list-clock", className].filter(Boolean).join(" ") });
});
ListClock.displayName = "ListClock";
const ListCollapse = forwardRef(function ListCollapse2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ListCollapseBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-list-collapse", className].filter(Boolean).join(" ") });
});
ListCollapse.displayName = "ListCollapse";
const ListSortAscending = forwardRef(function ListSortAscending2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ListSortAscendingBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-list-sort-ascending", className].filter(Boolean).join(" ") });
});
ListSortAscending.displayName = "ListSortAscending";
const ListSortDescending = forwardRef(function ListSortDescending2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ListSortDescendingBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-list-sort-descending", className].filter(Boolean).join(" ") });
});
ListSortDescending.displayName = "ListSortDescending";
const ListX = forwardRef(function ListX2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ListXBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-list-x", className].filter(Boolean).join(" ") });
});
ListX.displayName = "ListX";
const Pen = forwardRef(function Pen2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PenBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-pen", className].filter(Boolean).join(" ") });
});
Pen.displayName = "Pen";
const PencilOff = forwardRef(function PencilOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PencilOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-pencil-off", className].filter(Boolean).join(" ") });
});
PencilOff.displayName = "PencilOff";
const PencilSparkles = forwardRef(function PencilSparkles2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PencilSparklesBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-pencil-sparkles", className].filter(Boolean).join(" ") });
});
PencilSparkles.displayName = "PencilSparkles";
const PenLine = forwardRef(function PenLine2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PenLineBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-pen-line", className].filter(Boolean).join(" ") });
});
PenLine.displayName = "PenLine";
const PenOff = forwardRef(function PenOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PenOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-pen-off", className].filter(Boolean).join(" ") });
});
PenOff.displayName = "PenOff";
const Pilcrow = forwardRef(function Pilcrow2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PilcrowBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-pilcrow", className].filter(Boolean).join(" ") });
});
Pilcrow.displayName = "Pilcrow";
const RemoveFormatting = forwardRef(function RemoveFormatting2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(RemoveFormattingBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-remove-formatting", className].filter(Boolean).join(" ") });
});
RemoveFormatting.displayName = "RemoveFormatting";
const Scissors = forwardRef(function Scissors2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ScissorsBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-scissors", className].filter(Boolean).join(" ") });
});
Scissors.displayName = "Scissors";
const SpellCheck = forwardRef(function SpellCheck2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SpellCheckBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-spell-check", className].filter(Boolean).join(" ") });
});
SpellCheck.displayName = "SpellCheck";
const SpellCheck22 = forwardRef(function SpellCheck23(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SpellCheck2Base, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-spell-check-2", className].filter(Boolean).join(" ") });
});
SpellCheck22.displayName = "SpellCheck2";
const Subscript = forwardRef(function Subscript2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SubscriptBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-subscript", className].filter(Boolean).join(" ") });
});
Subscript.displayName = "Subscript";
const Superscript = forwardRef(function Superscript2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SuperscriptBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-superscript", className].filter(Boolean).join(" ") });
});
Superscript.displayName = "Superscript";
const TextAlignStart = forwardRef(function TextAlignStart2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TextAlignStartBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-text-align-start", className].filter(Boolean).join(" ") });
});
TextAlignStart.displayName = "TextAlignStart";
const TextCursor = forwardRef(function TextCursor2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TextCursorBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-text-cursor", className].filter(Boolean).join(" ") });
});
TextCursor.displayName = "TextCursor";
const TextInitial = forwardRef(function TextInitial2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TextInitialBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-text-initial", className].filter(Boolean).join(" ") });
});
TextInitial.displayName = "TextInitial";
const TextSearch = forwardRef(function TextSearch2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TextSearchBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-text-search", className].filter(Boolean).join(" ") });
});
TextSearch.displayName = "TextSearch";
const TextWrap = forwardRef(function TextWrap2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TextWrapBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-text-wrap", className].filter(Boolean).join(" ") });
});
TextWrap.displayName = "TextWrap";
const Type = forwardRef(function Type2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TypeBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-type", className].filter(Boolean).join(" ") });
});
Type.displayName = "Type";
const TypeOutline = forwardRef(function TypeOutline2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TypeOutlineBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-type-outline", className].filter(Boolean).join(" ") });
});
TypeOutline.displayName = "TypeOutline";
const WholeWord = forwardRef(function WholeWord2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(WholeWordBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-whole-word", className].filter(Boolean).join(" ") });
});
WholeWord.displayName = "WholeWord";
const Axis3D = forwardRef(function Axis3D2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(Axis3DBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-axis-3d", className].filter(Boolean).join(" ") });
});
Axis3D.displayName = "Axis3D";
const Blend = forwardRef(function Blend2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BlendBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-blend", className].filter(Boolean).join(" ") });
});
Blend.displayName = "Blend";
const Brush = forwardRef(function Brush2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BrushBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-brush", className].filter(Boolean).join(" ") });
});
Brush.displayName = "Brush";
const BrushCleaning = forwardRef(function BrushCleaning2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BrushCleaningBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-brush-cleaning", className].filter(Boolean).join(" ") });
});
BrushCleaning.displayName = "BrushCleaning";
const Component = forwardRef(function Component2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ComponentBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-component", className].filter(Boolean).join(" ") });
});
Component.displayName = "Component";
const Cone = forwardRef(function Cone2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ConeBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-cone", className].filter(Boolean).join(" ") });
});
Cone.displayName = "Cone";
const Contrast = forwardRef(function Contrast2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ContrastBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-contrast", className].filter(Boolean).join(" ") });
});
Contrast.displayName = "Contrast";
const Crop = forwardRef(function Crop2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CropBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-crop", className].filter(Boolean).join(" ") });
});
Crop.displayName = "Crop";
const Cuboid = forwardRef(function Cuboid2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CuboidBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-cuboid", className].filter(Boolean).join(" ") });
});
Cuboid.displayName = "Cuboid";
const Cylinder = forwardRef(function Cylinder2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CylinderBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-cylinder", className].filter(Boolean).join(" ") });
});
Cylinder.displayName = "Cylinder";
const Diamond = forwardRef(function Diamond2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(DiamondBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-diamond", className].filter(Boolean).join(" ") });
});
Diamond.displayName = "Diamond";
const Frame = forwardRef(function Frame2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(FrameBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-frame", className].filter(Boolean).join(" ") });
});
Frame.displayName = "Frame";
const Group = forwardRef(function Group2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(GroupBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-group", className].filter(Boolean).join(" ") });
});
Group.displayName = "Group";
const Hexagon = forwardRef(function Hexagon2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(HexagonBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-hexagon", className].filter(Boolean).join(" ") });
});
Hexagon.displayName = "Hexagon";
const Lasso = forwardRef(function Lasso2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(LassoBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-lasso", className].filter(Boolean).join(" ") });
});
Lasso.displayName = "Lasso";
const Layers22 = forwardRef(function Layers23(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(Layers2Base, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-layers-2", className].filter(Boolean).join(" ") });
});
Layers22.displayName = "Layers2";
const LoaderPinwheel = forwardRef(function LoaderPinwheel2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(LoaderPinwheelBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-loader-pinwheel", className].filter(Boolean).join(" ") });
});
LoaderPinwheel.displayName = "LoaderPinwheel";
const Octagon = forwardRef(function Octagon2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(OctagonBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-octagon", className].filter(Boolean).join(" ") });
});
Octagon.displayName = "Octagon";
const Paintbrush = forwardRef(function Paintbrush2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PaintbrushBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-paintbrush", className].filter(Boolean).join(" ") });
});
Paintbrush.displayName = "Paintbrush";
const PaintbrushVertical = forwardRef(function PaintbrushVertical2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PaintbrushVerticalBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-paintbrush-vertical", className].filter(Boolean).join(" ") });
});
PaintbrushVertical.displayName = "PaintbrushVertical";
const PaintBucket = forwardRef(function PaintBucket2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PaintBucketBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-paint-bucket", className].filter(Boolean).join(" ") });
});
PaintBucket.displayName = "PaintBucket";
const Pipette = forwardRef(function Pipette2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PipetteBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-pipette", className].filter(Boolean).join(" ") });
});
Pipette.displayName = "Pipette";
const Pyramid = forwardRef(function Pyramid2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PyramidBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-pyramid", className].filter(Boolean).join(" ") });
});
Pyramid.displayName = "Pyramid";
const RectangleVertical = forwardRef(function RectangleVertical2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(RectangleVerticalBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-rectangle-vertical", className].filter(Boolean).join(" ") });
});
RectangleVertical.displayName = "RectangleVertical";
const Shapes = forwardRef(function Shapes2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ShapesBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-shapes", className].filter(Boolean).join(" ") });
});
Shapes.displayName = "Shapes";
const Signature = forwardRef(function Signature2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SignatureBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-signature", className].filter(Boolean).join(" ") });
});
Signature.displayName = "Signature";
const Spline = forwardRef(function Spline2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SplineBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-spline", className].filter(Boolean).join(" ") });
});
Spline.displayName = "Spline";
const SplinePointer = forwardRef(function SplinePointer2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SplinePointerBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-spline-pointer", className].filter(Boolean).join(" ") });
});
SplinePointer.displayName = "SplinePointer";
const Squircle = forwardRef(function Squircle2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SquircleBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-squircle", className].filter(Boolean).join(" ") });
});
Squircle.displayName = "Squircle";
const Stamp = forwardRef(function Stamp2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(StampBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-stamp", className].filter(Boolean).join(" ") });
});
Stamp.displayName = "Stamp";
const SwatchBook = forwardRef(function SwatchBook2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SwatchBookBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-swatch-book", className].filter(Boolean).join(" ") });
});
SwatchBook.displayName = "SwatchBook";
const Tangent = forwardRef(function Tangent2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TangentBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-tangent", className].filter(Boolean).join(" ") });
});
Tangent.displayName = "Tangent";
const Torus = forwardRef(function Torus2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TorusBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-torus", className].filter(Boolean).join(" ") });
});
Torus.displayName = "Torus";
const Triangle = forwardRef(function Triangle2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TriangleBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-triangle", className].filter(Boolean).join(" ") });
});
Triangle.displayName = "Triangle";
const Ungroup = forwardRef(function Ungroup2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(UngroupBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-ungroup", className].filter(Boolean).join(" ") });
});
Ungroup.displayName = "Ungroup";
const VectorSquare = forwardRef(function VectorSquare2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(VectorSquareBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-vector-square", className].filter(Boolean).join(" ") });
});
VectorSquare.displayName = "VectorSquare";
const Wand = forwardRef(function Wand3(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(WandBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-wand", className].filter(Boolean).join(" ") });
});
Wand.displayName = "Wand";
const AlarmClock = forwardRef(function AlarmClock2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(AlarmClockBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-alarm-clock", className].filter(Boolean).join(" ") });
});
AlarmClock.displayName = "AlarmClock";
const AlarmClockCheck = forwardRef(function AlarmClockCheck2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(AlarmClockCheckBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-alarm-clock-check", className].filter(Boolean).join(" ") });
});
AlarmClockCheck.displayName = "AlarmClockCheck";
const AlarmClockMinus = forwardRef(function AlarmClockMinus2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(AlarmClockMinusBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-alarm-clock-minus", className].filter(Boolean).join(" ") });
});
AlarmClockMinus.displayName = "AlarmClockMinus";
const AlarmClockOff = forwardRef(function AlarmClockOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(AlarmClockOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-alarm-clock-off", className].filter(Boolean).join(" ") });
});
AlarmClockOff.displayName = "AlarmClockOff";
const AlarmClockPlus = forwardRef(function AlarmClockPlus2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(AlarmClockPlusBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-alarm-clock-plus", className].filter(Boolean).join(" ") });
});
AlarmClockPlus.displayName = "AlarmClockPlus";
const Calendar1 = forwardRef(function Calendar12(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(Calendar1Base, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-calendar-1", className].filter(Boolean).join(" ") });
});
Calendar1.displayName = "Calendar1";
const CalendarArrowDown = forwardRef(function CalendarArrowDown2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CalendarArrowDownBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-calendar-arrow-down", className].filter(Boolean).join(" ") });
});
CalendarArrowDown.displayName = "CalendarArrowDown";
const CalendarArrowRight = forwardRef(function CalendarArrowRight2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CalendarArrowRightBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-calendar-arrow-right", className].filter(Boolean).join(" ") });
});
CalendarArrowRight.displayName = "CalendarArrowRight";
const CalendarArrowUp = forwardRef(function CalendarArrowUp2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CalendarArrowUpBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-calendar-arrow-up", className].filter(Boolean).join(" ") });
});
CalendarArrowUp.displayName = "CalendarArrowUp";
const CalendarChevronsLeft = forwardRef(function CalendarChevronsLeft2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CalendarChevronsLeftBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-calendar-chevrons-left", className].filter(Boolean).join(" ") });
});
CalendarChevronsLeft.displayName = "CalendarChevronsLeft";
const CalendarCog = forwardRef(function CalendarCog2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CalendarCogBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-calendar-cog", className].filter(Boolean).join(" ") });
});
CalendarCog.displayName = "CalendarCog";
const CalendarOff = forwardRef(function CalendarOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CalendarOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-calendar-off", className].filter(Boolean).join(" ") });
});
CalendarOff.displayName = "CalendarOff";
const CalendarSearch = forwardRef(function CalendarSearch2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CalendarSearchBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-calendar-search", className].filter(Boolean).join(" ") });
});
CalendarSearch.displayName = "CalendarSearch";
const CalendarX = forwardRef(function CalendarX2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CalendarXBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-calendar-x", className].filter(Boolean).join(" ") });
});
CalendarX.displayName = "CalendarX";
const Clock1 = forwardRef(function Clock12(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(Clock1Base, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-clock-1", className].filter(Boolean).join(" ") });
});
Clock1.displayName = "Clock1";
const Clock10 = forwardRef(function Clock102(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(Clock10Base, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-clock-10", className].filter(Boolean).join(" ") });
});
Clock10.displayName = "Clock10";
const Clock11 = forwardRef(function Clock112(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(Clock11Base, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-clock-11", className].filter(Boolean).join(" ") });
});
Clock11.displayName = "Clock11";
const Clock122 = forwardRef(function Clock123(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(Clock12Base, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-clock-12", className].filter(Boolean).join(" ") });
});
Clock122.displayName = "Clock12";
const ClockArrowDown = forwardRef(function ClockArrowDown2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ClockArrowDownBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-clock-arrow-down", className].filter(Boolean).join(" ") });
});
ClockArrowDown.displayName = "ClockArrowDown";
const ClockArrowUp = forwardRef(function ClockArrowUp2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ClockArrowUpBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-clock-arrow-up", className].filter(Boolean).join(" ") });
});
ClockArrowUp.displayName = "ClockArrowUp";
const ClockCheck = forwardRef(function ClockCheck2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ClockCheckBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-clock-check", className].filter(Boolean).join(" ") });
});
ClockCheck.displayName = "ClockCheck";
const ClockExclamationPoint = forwardRef(function ClockExclamationPoint2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ClockExclamationPointBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-clock-exclamation-point", className].filter(Boolean).join(" ") });
});
ClockExclamationPoint.displayName = "ClockExclamationPoint";
const ClockPlus = forwardRef(function ClockPlus2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ClockPlusBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-clock-plus", className].filter(Boolean).join(" ") });
});
ClockPlus.displayName = "ClockPlus";
const Hourglass = forwardRef(function Hourglass2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(HourglassBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-hourglass", className].filter(Boolean).join(" ") });
});
Hourglass.displayName = "Hourglass";
const HourglassCog = forwardRef(function HourglassCog2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(HourglassCogBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-hourglass-cog", className].filter(Boolean).join(" ") });
});
HourglassCog.displayName = "HourglassCog";
const TimerOff = forwardRef(function TimerOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TimerOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-timer-off", className].filter(Boolean).join(" ") });
});
TimerOff.displayName = "TimerOff";
const TimerReset = forwardRef(function TimerReset2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TimerResetBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-timer-reset", className].filter(Boolean).join(" ") });
});
TimerReset.displayName = "TimerReset";
const Watch = forwardRef(function Watch2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(WatchBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-watch", className].filter(Boolean).join(" ") });
});
Watch.displayName = "Watch";
const ContactRound = forwardRef(function ContactRound2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ContactRoundBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-contact-round", className].filter(Boolean).join(" ") });
});
ContactRound.displayName = "ContactRound";
const HandFist = forwardRef(function HandFist2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(HandFistBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-hand-fist", className].filter(Boolean).join(" ") });
});
HandFist.displayName = "HandFist";
const HandGrab = forwardRef(function HandGrab2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(HandGrabBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-hand-grab", className].filter(Boolean).join(" ") });
});
HandGrab.displayName = "HandGrab";
const HandHeart = forwardRef(function HandHeart2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(HandHeartBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-hand-heart", className].filter(Boolean).join(" ") });
});
HandHeart.displayName = "HandHeart";
const HandHelping = forwardRef(function HandHelping2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(HandHelpingBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-hand-helping", className].filter(Boolean).join(" ") });
});
HandHelping.displayName = "HandHelping";
const HandMetal = forwardRef(function HandMetal2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(HandMetalBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-hand-metal", className].filter(Boolean).join(" ") });
});
HandMetal.displayName = "HandMetal";
const HandPlatter = forwardRef(function HandPlatter2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(HandPlatterBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-hand-platter", className].filter(Boolean).join(" ") });
});
HandPlatter.displayName = "HandPlatter";
const HeartHandshake = forwardRef(function HeartHandshake2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(HeartHandshakeBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-heart-handshake", className].filter(Boolean).join(" ") });
});
HeartHandshake.displayName = "HeartHandshake";
const IdCard = forwardRef(function IdCard2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(IdCardBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-id-card", className].filter(Boolean).join(" ") });
});
IdCard.displayName = "IdCard";
const IdCardLanyard = forwardRef(function IdCardLanyard2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(IdCardLanyardBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-id-card-lanyard", className].filter(Boolean).join(" ") });
});
IdCardLanyard.displayName = "IdCardLanyard";
const ScanFace = forwardRef(function ScanFace2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ScanFaceBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-scan-face", className].filter(Boolean).join(" ") });
});
ScanFace.displayName = "ScanFace";
const ThumbsDown = forwardRef(function ThumbsDown2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ThumbsDownBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-thumbs-down", className].filter(Boolean).join(" ") });
});
ThumbsDown.displayName = "ThumbsDown";
const UserCog = forwardRef(function UserCog2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(UserCogBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-user-cog", className].filter(Boolean).join(" ") });
});
UserCog.displayName = "UserCog";
const UserGroup = forwardRef(function UserGroup2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(UserGroupBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-user-group", className].filter(Boolean).join(" ") });
});
UserGroup.displayName = "UserGroup";
const UserPen = forwardRef(function UserPen2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(UserPenBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-user-pen", className].filter(Boolean).join(" ") });
});
UserPen.displayName = "UserPen";
const UserRoundCog = forwardRef(function UserRoundCog2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(UserRoundCogBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-user-round-cog", className].filter(Boolean).join(" ") });
});
UserRoundCog.displayName = "UserRoundCog";
const UserRoundPen = forwardRef(function UserRoundPen2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(UserRoundPenBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-user-round-pen", className].filter(Boolean).join(" ") });
});
UserRoundPen.displayName = "UserRoundPen";
const UserRoundStar = forwardRef(function UserRoundStar2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(UserRoundStarBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-user-round-star", className].filter(Boolean).join(" ") });
});
UserRoundStar.displayName = "UserRoundStar";
const UsersCollaboration = forwardRef(function UsersCollaboration2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(UsersCollaborationBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-users-collaboration", className].filter(Boolean).join(" ") });
});
UsersCollaboration.displayName = "UsersCollaboration";
const UserSearch = forwardRef(function UserSearch2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(UserSearchBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-user-search", className].filter(Boolean).join(" ") });
});
UserSearch.displayName = "UserSearch";
const UsersRound = forwardRef(function UsersRound2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(UsersRoundBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-users-round", className].filter(Boolean).join(" ") });
});
UsersRound.displayName = "UsersRound";
const UsersRoundCollaboration = forwardRef(function UsersRoundCollaboration2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(UsersRoundCollaborationBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-users-round-collaboration", className].filter(Boolean).join(" ") });
});
UsersRoundCollaboration.displayName = "UsersRoundCollaboration";
const UserStar = forwardRef(function UserStar2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(UserStarBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-user-star", className].filter(Boolean).join(" ") });
});
UserStar.displayName = "UserStar";
const UserX = forwardRef(function UserX2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(UserXBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-user-x", className].filter(Boolean).join(" ") });
});
UserX.displayName = "UserX";
const Compass = forwardRef(function Compass2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CompassBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-compass", className].filter(Boolean).join(" ") });
});
Compass.displayName = "Compass";
const Earth = forwardRef(function Earth2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(EarthBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-earth", className].filter(Boolean).join(" ") });
});
Earth.displayName = "Earth";
const GlobeBan = forwardRef(function GlobeBan2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(GlobeBanBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-globe-ban", className].filter(Boolean).join(" ") });
});
GlobeBan.displayName = "GlobeBan";
const GlobeCheck = forwardRef(function GlobeCheck2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(GlobeCheckBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-globe-check", className].filter(Boolean).join(" ") });
});
GlobeCheck.displayName = "GlobeCheck";
const GlobeCode = forwardRef(function GlobeCode2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(GlobeCodeBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-globe-code", className].filter(Boolean).join(" ") });
});
GlobeCode.displayName = "GlobeCode";
const GlobeOff = forwardRef(function GlobeOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(GlobeOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-globe-off", className].filter(Boolean).join(" ") });
});
GlobeOff.displayName = "GlobeOff";
const GlobePlus = forwardRef(function GlobePlus2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(GlobePlusBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-globe-plus", className].filter(Boolean).join(" ") });
});
GlobePlus.displayName = "GlobePlus";
const GlobeX = forwardRef(function GlobeX2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(GlobeXBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-globe-x", className].filter(Boolean).join(" ") });
});
GlobeX.displayName = "GlobeX";
const HouseCog = forwardRef(function HouseCog2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(HouseCogBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-house-cog", className].filter(Boolean).join(" ") });
});
HouseCog.displayName = "HouseCog";
const HousePlug = forwardRef(function HousePlug2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(HousePlugBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-house-plug", className].filter(Boolean).join(" ") });
});
HousePlug.displayName = "HousePlug";
const HousePlus = forwardRef(function HousePlus2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(HousePlusBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-house-plus", className].filter(Boolean).join(" ") });
});
HousePlus.displayName = "HousePlus";
const HouseWifi = forwardRef(function HouseWifi2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(HouseWifiBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-house-wifi", className].filter(Boolean).join(" ") });
});
HouseWifi.displayName = "HouseWifi";
const Locate = forwardRef(function Locate2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(LocateBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-locate", className].filter(Boolean).join(" ") });
});
Locate.displayName = "Locate";
const LocateFixed = forwardRef(function LocateFixed2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(LocateFixedBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-locate-fixed", className].filter(Boolean).join(" ") });
});
LocateFixed.displayName = "LocateFixed";
const LocateOff = forwardRef(function LocateOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(LocateOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-locate-off", className].filter(Boolean).join(" ") });
});
LocateOff.displayName = "LocateOff";
const Map = forwardRef(function Map2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MapBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-map", className].filter(Boolean).join(" ") });
});
Map.displayName = "Map";
const MapPinHouse = forwardRef(function MapPinHouse2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MapPinHouseBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-map-pin-house", className].filter(Boolean).join(" ") });
});
MapPinHouse.displayName = "MapPinHouse";
const MapPinPen = forwardRef(function MapPinPen2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MapPinPenBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-map-pin-pen", className].filter(Boolean).join(" ") });
});
MapPinPen.displayName = "MapPinPen";
const MapPinPlusInside = forwardRef(function MapPinPlusInside2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MapPinPlusInsideBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-map-pin-plus-inside", className].filter(Boolean).join(" ") });
});
MapPinPlusInside.displayName = "MapPinPlusInside";
const MapPinSearch = forwardRef(function MapPinSearch2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MapPinSearchBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-map-pin-search", className].filter(Boolean).join(" ") });
});
MapPinSearch.displayName = "MapPinSearch";
const MapPinX = forwardRef(function MapPinX2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MapPinXBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-map-pin-x", className].filter(Boolean).join(" ") });
});
MapPinX.displayName = "MapPinX";
const MapPinXInside = forwardRef(function MapPinXInside2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MapPinXInsideBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-map-pin-x-inside", className].filter(Boolean).join(" ") });
});
MapPinXInside.displayName = "MapPinXInside";
const Milestone = forwardRef(function Milestone2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MilestoneBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-milestone", className].filter(Boolean).join(" ") });
});
Milestone.displayName = "Milestone";
const Navigation = forwardRef(function Navigation2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(NavigationBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-navigation", className].filter(Boolean).join(" ") });
});
Navigation.displayName = "Navigation";
const Navigation22 = forwardRef(function Navigation23(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(Navigation2Base, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-navigation-2", className].filter(Boolean).join(" ") });
});
Navigation22.displayName = "Navigation2";
const Navigation2Off = forwardRef(function Navigation2Off2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(Navigation2OffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-navigation-2-off", className].filter(Boolean).join(" ") });
});
Navigation2Off.displayName = "Navigation2Off";
const NavigationOff = forwardRef(function NavigationOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(NavigationOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-navigation-off", className].filter(Boolean).join(" ") });
});
NavigationOff.displayName = "NavigationOff";
const Route = forwardRef(function Route2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(RouteBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-route", className].filter(Boolean).join(" ") });
});
Route.displayName = "Route";
const Signpost = forwardRef(function Signpost2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SignpostBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-signpost", className].filter(Boolean).join(" ") });
});
Signpost.displayName = "Signpost";
const SignpostBig = forwardRef(function SignpostBig2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SignpostBigBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-signpost-big", className].filter(Boolean).join(" ") });
});
SignpostBig.displayName = "SignpostBig";
const Waypoints = forwardRef(function Waypoints2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(WaypointsBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-waypoints", className].filter(Boolean).join(" ") });
});
Waypoints.displayName = "Waypoints";
const BetweenHorizontalEnd = forwardRef(function BetweenHorizontalEnd2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BetweenHorizontalEndBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-between-horizontal-end", className].filter(Boolean).join(" ") });
});
BetweenHorizontalEnd.displayName = "BetweenHorizontalEnd";
const BetweenHorizontalStart = forwardRef(function BetweenHorizontalStart2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BetweenHorizontalStartBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-between-horizontal-start", className].filter(Boolean).join(" ") });
});
BetweenHorizontalStart.displayName = "BetweenHorizontalStart";
const BetweenVerticalEnd = forwardRef(function BetweenVerticalEnd2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BetweenVerticalEndBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-between-vertical-end", className].filter(Boolean).join(" ") });
});
BetweenVerticalEnd.displayName = "BetweenVerticalEnd";
const BetweenVerticalStart = forwardRef(function BetweenVerticalStart2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BetweenVerticalStartBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-between-vertical-start", className].filter(Boolean).join(" ") });
});
BetweenVerticalStart.displayName = "BetweenVerticalStart";
const Blocks = forwardRef(function Blocks2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BlocksBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-blocks", className].filter(Boolean).join(" ") });
});
Blocks.displayName = "Blocks";
const Columns2 = forwardRef(function Columns22(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(Columns2Base, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-columns-2", className].filter(Boolean).join(" ") });
});
Columns2.displayName = "Columns2";
const Columns3 = forwardRef(function Columns32(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(Columns3Base, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-columns-3", className].filter(Boolean).join(" ") });
});
Columns3.displayName = "Columns3";
const Columns3Cog = forwardRef(function Columns3Cog2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(Columns3CogBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-columns-3-cog", className].filter(Boolean).join(" ") });
});
Columns3Cog.displayName = "Columns3Cog";
const Columns4 = forwardRef(function Columns42(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(Columns4Base, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-columns-4", className].filter(Boolean).join(" ") });
});
Columns4.displayName = "Columns4";
const Expand = forwardRef(function Expand2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ExpandBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-expand", className].filter(Boolean).join(" ") });
});
Expand.displayName = "Expand";
const Fullscreen = forwardRef(function Fullscreen2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(FullscreenBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-fullscreen", className].filter(Boolean).join(" ") });
});
Fullscreen.displayName = "Fullscreen";
const GalleryHorizontal = forwardRef(function GalleryHorizontal2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(GalleryHorizontalBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-gallery-horizontal", className].filter(Boolean).join(" ") });
});
GalleryHorizontal.displayName = "GalleryHorizontal";
const GalleryHorizontalEnd = forwardRef(function GalleryHorizontalEnd2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(GalleryHorizontalEndBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-gallery-horizontal-end", className].filter(Boolean).join(" ") });
});
GalleryHorizontalEnd.displayName = "GalleryHorizontalEnd";
const GalleryVertical = forwardRef(function GalleryVertical2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(GalleryVerticalBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-gallery-vertical", className].filter(Boolean).join(" ") });
});
GalleryVertical.displayName = "GalleryVertical";
const GalleryVerticalEnd = forwardRef(function GalleryVerticalEnd2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(GalleryVerticalEndBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-gallery-vertical-end", className].filter(Boolean).join(" ") });
});
GalleryVerticalEnd.displayName = "GalleryVerticalEnd";
const Grid2x2 = forwardRef(function Grid2x22(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(Grid2x2Base, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-grid-2x2", className].filter(Boolean).join(" ") });
});
Grid2x2.displayName = "Grid2x2";
const Grid2x2Check = forwardRef(function Grid2x2Check2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(Grid2x2CheckBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-grid-2x2-check", className].filter(Boolean).join(" ") });
});
Grid2x2Check.displayName = "Grid2x2Check";
const Grid2x2Plus = forwardRef(function Grid2x2Plus2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(Grid2x2PlusBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-grid-2x2-plus", className].filter(Boolean).join(" ") });
});
Grid2x2Plus.displayName = "Grid2x2Plus";
const Grid2x2X = forwardRef(function Grid2x2X2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(Grid2x2XBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-grid-2x2-x", className].filter(Boolean).join(" ") });
});
Grid2x2X.displayName = "Grid2x2X";
const Grid3x2 = forwardRef(function Grid3x22(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(Grid3x2Base, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-grid-3x2", className].filter(Boolean).join(" ") });
});
Grid3x2.displayName = "Grid3x2";
const Grid3x3Off = forwardRef(function Grid3x3Off2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(Grid3x3OffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-grid-3x3-off", className].filter(Boolean).join(" ") });
});
Grid3x3Off.displayName = "Grid3x3Off";
const Kanban = forwardRef(function Kanban2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(KanbanBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-kanban", className].filter(Boolean).join(" ") });
});
Kanban.displayName = "Kanban";
const LayoutArrowDown = forwardRef(function LayoutArrowDown2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(LayoutArrowDownBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-layout-arrow-down", className].filter(Boolean).join(" ") });
});
LayoutArrowDown.displayName = "LayoutArrowDown";
const LayoutFreeform = forwardRef(function LayoutFreeform2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(LayoutFreeformBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-layout-freeform", className].filter(Boolean).join(" ") });
});
LayoutFreeform.displayName = "LayoutFreeform";
const LayoutGridCircles = forwardRef(function LayoutGridCircles2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(LayoutGridCirclesBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-layout-grid-circles", className].filter(Boolean).join(" ") });
});
LayoutGridCircles.displayName = "LayoutGridCircles";
const LayoutList = forwardRef(function LayoutList2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(LayoutListBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-layout-list", className].filter(Boolean).join(" ") });
});
LayoutList.displayName = "LayoutList";
const LayoutPanelTop = forwardRef(function LayoutPanelTop2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(LayoutPanelTopBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-layout-panel-top", className].filter(Boolean).join(" ") });
});
LayoutPanelTop.displayName = "LayoutPanelTop";
const Maximize = forwardRef(function Maximize2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MaximizeBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-maximize", className].filter(Boolean).join(" ") });
});
Maximize.displayName = "Maximize";
const Minimize = forwardRef(function Minimize2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MinimizeBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-minimize", className].filter(Boolean).join(" ") });
});
Minimize.displayName = "Minimize";
const PanelBottom = forwardRef(function PanelBottom2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PanelBottomBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-panel-bottom", className].filter(Boolean).join(" ") });
});
PanelBottom.displayName = "PanelBottom";
const PanelBottomClose = forwardRef(function PanelBottomClose2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PanelBottomCloseBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-panel-bottom-close", className].filter(Boolean).join(" ") });
});
PanelBottomClose.displayName = "PanelBottomClose";
const PanelBottomOpen = forwardRef(function PanelBottomOpen2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PanelBottomOpenBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-panel-bottom-open", className].filter(Boolean).join(" ") });
});
PanelBottomOpen.displayName = "PanelBottomOpen";
const PanelRightClose = forwardRef(function PanelRightClose2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PanelRightCloseBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-panel-right-close", className].filter(Boolean).join(" ") });
});
PanelRightClose.displayName = "PanelRightClose";
const PanelRightOpen = forwardRef(function PanelRightOpen2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PanelRightOpenBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-panel-right-open", className].filter(Boolean).join(" ") });
});
PanelRightOpen.displayName = "PanelRightOpen";
const PanelsLeftBottom = forwardRef(function PanelsLeftBottom2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PanelsLeftBottomBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-panels-left-bottom", className].filter(Boolean).join(" ") });
});
PanelsLeftBottom.displayName = "PanelsLeftBottom";
const PanelsRightBottom = forwardRef(function PanelsRightBottom2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PanelsRightBottomBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-panels-right-bottom", className].filter(Boolean).join(" ") });
});
PanelsRightBottom.displayName = "PanelsRightBottom";
const PanelsTopLeft = forwardRef(function PanelsTopLeft2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PanelsTopLeftBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-panels-top-left", className].filter(Boolean).join(" ") });
});
PanelsTopLeft.displayName = "PanelsTopLeft";
const PanelTop = forwardRef(function PanelTop2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PanelTopBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-panel-top", className].filter(Boolean).join(" ") });
});
PanelTop.displayName = "PanelTop";
const PanelTopBottomDashed = forwardRef(function PanelTopBottomDashed2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PanelTopBottomDashedBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-panel-top-bottom-dashed", className].filter(Boolean).join(" ") });
});
PanelTopBottomDashed.displayName = "PanelTopBottomDashed";
const PanelTopClose = forwardRef(function PanelTopClose2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PanelTopCloseBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-panel-top-close", className].filter(Boolean).join(" ") });
});
PanelTopClose.displayName = "PanelTopClose";
const PanelTopOpen = forwardRef(function PanelTopOpen2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PanelTopOpenBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-panel-top-open", className].filter(Boolean).join(" ") });
});
PanelTopOpen.displayName = "PanelTopOpen";
const Ratio = forwardRef(function Ratio2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(RatioBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-ratio", className].filter(Boolean).join(" ") });
});
Ratio.displayName = "Ratio";
const Rows2 = forwardRef(function Rows22(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(Rows2Base, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-rows-2", className].filter(Boolean).join(" ") });
});
Rows2.displayName = "Rows2";
const Rows3 = forwardRef(function Rows32(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(Rows3Base, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-rows-3", className].filter(Boolean).join(" ") });
});
Rows3.displayName = "Rows3";
const Rows4 = forwardRef(function Rows42(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(Rows4Base, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-rows-4", className].filter(Boolean).join(" ") });
});
Rows4.displayName = "Rows4";
const Scaling = forwardRef(function Scaling2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ScalingBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-scaling", className].filter(Boolean).join(" ") });
});
Scaling.displayName = "Scaling";
const SeparatorVertical = forwardRef(function SeparatorVertical2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SeparatorVerticalBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-separator-vertical", className].filter(Boolean).join(" ") });
});
SeparatorVertical.displayName = "SeparatorVertical";
const Shrink = forwardRef(function Shrink2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ShrinkBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-shrink", className].filter(Boolean).join(" ") });
});
Shrink.displayName = "Shrink";
const Split = forwardRef(function Split2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SplitBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-split", className].filter(Boolean).join(" ") });
});
Split.displayName = "Split";
const StretchVertical = forwardRef(function StretchVertical2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(StretchVerticalBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-stretch-vertical", className].filter(Boolean).join(" ") });
});
StretchVertical.displayName = "StretchVertical";
const BadgeInfo = forwardRef(function BadgeInfo2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BadgeInfoBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-badge-info", className].filter(Boolean).join(" ") });
});
BadgeInfo.displayName = "BadgeInfo";
const BadgeMinus = forwardRef(function BadgeMinus2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BadgeMinusBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-badge-minus", className].filter(Boolean).join(" ") });
});
BadgeMinus.displayName = "BadgeMinus";
const BadgePlus = forwardRef(function BadgePlus2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BadgePlusBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-badge-plus", className].filter(Boolean).join(" ") });
});
BadgePlus.displayName = "BadgePlus";
const BadgeQuestionMark = forwardRef(function BadgeQuestionMark2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BadgeQuestionMarkBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-badge-question-mark", className].filter(Boolean).join(" ") });
});
BadgeQuestionMark.displayName = "BadgeQuestionMark";
const BadgeX = forwardRef(function BadgeX2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BadgeXBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-badge-x", className].filter(Boolean).join(" ") });
});
BadgeX.displayName = "BadgeX";
const Flag = forwardRef(function Flag2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(FlagBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-flag", className].filter(Boolean).join(" ") });
});
Flag.displayName = "Flag";
const FlagOff = forwardRef(function FlagOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(FlagOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-flag-off", className].filter(Boolean).join(" ") });
});
FlagOff.displayName = "FlagOff";
const Loader = forwardRef(function Loader3(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(LoaderBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-loader", className].filter(Boolean).join(" ") });
});
Loader.displayName = "Loader";
const Medal = forwardRef(function Medal2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MedalBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-medal", className].filter(Boolean).join(" ") });
});
Medal.displayName = "Medal";
const SignalHigh = forwardRef(function SignalHigh2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SignalHighBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-signal-high", className].filter(Boolean).join(" ") });
});
SignalHigh.displayName = "SignalHigh";
const SignalLow = forwardRef(function SignalLow2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SignalLowBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-signal-low", className].filter(Boolean).join(" ") });
});
SignalLow.displayName = "SignalLow";
const SignalMedium = forwardRef(function SignalMedium2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SignalMediumBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-signal-medium", className].filter(Boolean).join(" ") });
});
SignalMedium.displayName = "SignalMedium";
const SignalZero = forwardRef(function SignalZero2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SignalZeroBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-signal-zero", className].filter(Boolean).join(" ") });
});
SignalZero.displayName = "SignalZero";
const SquareX = forwardRef(function SquareX2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SquareXBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-square-x", className].filter(Boolean).join(" ") });
});
SquareX.displayName = "SquareX";
const ZapOff = forwardRef(function ZapOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ZapOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-zap-off", className].filter(Boolean).join(" ") });
});
ZapOff.displayName = "ZapOff";
const BookmarkCheck = forwardRef(function BookmarkCheck2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BookmarkCheckBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-bookmark-check", className].filter(Boolean).join(" ") });
});
BookmarkCheck.displayName = "BookmarkCheck";
const BookmarkMinus = forwardRef(function BookmarkMinus2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BookmarkMinusBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-bookmark-minus", className].filter(Boolean).join(" ") });
});
BookmarkMinus.displayName = "BookmarkMinus";
const BookmarkOff = forwardRef(function BookmarkOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BookmarkOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-bookmark-off", className].filter(Boolean).join(" ") });
});
BookmarkOff.displayName = "BookmarkOff";
const BookmarkPlus = forwardRef(function BookmarkPlus2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BookmarkPlusBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-bookmark-plus", className].filter(Boolean).join(" ") });
});
BookmarkPlus.displayName = "BookmarkPlus";
const BookmarkX = forwardRef(function BookmarkX2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BookmarkXBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-bookmark-x", className].filter(Boolean).join(" ") });
});
BookmarkX.displayName = "BookmarkX";
const CheckLine = forwardRef(function CheckLine2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CheckLineBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-check-line", className].filter(Boolean).join(" ") });
});
CheckLine.displayName = "CheckLine";
const CircleOff = forwardRef(function CircleOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CircleOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-circle-off", className].filter(Boolean).join(" ") });
});
CircleOff.displayName = "CircleOff";
const CircleSlash = forwardRef(function CircleSlash2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CircleSlashBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-circle-slash", className].filter(Boolean).join(" ") });
});
CircleSlash.displayName = "CircleSlash";
const FunnelX = forwardRef(function FunnelX2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(FunnelXBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-funnel-x", className].filter(Boolean).join(" ") });
});
FunnelX.displayName = "FunnelX";
const Grip = forwardRef(function Grip2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(GripBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-grip", className].filter(Boolean).join(" ") });
});
Grip.displayName = "Grip";
const Link2Off = forwardRef(function Link2Off2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(Link2OffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-link-2-off", className].filter(Boolean).join(" ") });
});
Link2Off.displayName = "Link2Off";
const PinOff = forwardRef(function PinOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PinOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-pin-off", className].filter(Boolean).join(" ") });
});
PinOff.displayName = "PinOff";
const Pointer = forwardRef(function Pointer2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PointerBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-pointer", className].filter(Boolean).join(" ") });
});
Pointer.displayName = "Pointer";
const Redo = forwardRef(function Redo2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(RedoBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-redo", className].filter(Boolean).join(" ") });
});
Redo.displayName = "Redo";
const RefreshCcw = forwardRef(function RefreshCcw2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(RefreshCcwBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-refresh-ccw", className].filter(Boolean).join(" ") });
});
RefreshCcw.displayName = "RefreshCcw";
const RefreshCwOff = forwardRef(function RefreshCwOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(RefreshCwOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-refresh-cw-off", className].filter(Boolean).join(" ") });
});
RefreshCwOff.displayName = "RefreshCwOff";
const Scan = forwardRef(function Scan2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ScanBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-scan", className].filter(Boolean).join(" ") });
});
Scan.displayName = "Scan";
const SearchCheck = forwardRef(function SearchCheck2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SearchCheckBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-search-check", className].filter(Boolean).join(" ") });
});
SearchCheck.displayName = "SearchCheck";
const SearchCode = forwardRef(function SearchCode2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SearchCodeBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-search-code", className].filter(Boolean).join(" ") });
});
SearchCode.displayName = "SearchCode";
const SearchExclamationPoint = forwardRef(function SearchExclamationPoint2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SearchExclamationPointBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-search-exclamation-point", className].filter(Boolean).join(" ") });
});
SearchExclamationPoint.displayName = "SearchExclamationPoint";
const SearchSlash = forwardRef(function SearchSlash2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SearchSlashBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-search-slash", className].filter(Boolean).join(" ") });
});
SearchSlash.displayName = "SearchSlash";
const SearchX = forwardRef(function SearchX2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SearchXBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-search-x", className].filter(Boolean).join(" ") });
});
SearchX.displayName = "SearchX";
const Shuffle = forwardRef(function Shuffle2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ShuffleBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-shuffle", className].filter(Boolean).join(" ") });
});
Shuffle.displayName = "Shuffle";
const SquareDashedSearch = forwardRef(function SquareDashedSearch2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SquareDashedSearchBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-square-dashed-search", className].filter(Boolean).join(" ") });
});
SquareDashedSearch.displayName = "SquareDashedSearch";
const SquareDashedX = forwardRef(function SquareDashedX2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SquareDashedXBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-square-dashed-x", className].filter(Boolean).join(" ") });
});
SquareDashedX.displayName = "SquareDashedX";
const SquareDashedXCorner = forwardRef(function SquareDashedXCorner2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SquareDashedXCornerBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-square-dashed-x-corner", className].filter(Boolean).join(" ") });
});
SquareDashedXCorner.displayName = "SquareDashedXCorner";
const StarCheck = forwardRef(function StarCheck2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(StarCheckBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-star-check", className].filter(Boolean).join(" ") });
});
StarCheck.displayName = "StarCheck";
const StarHalf = forwardRef(function StarHalf2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(StarHalfBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-star-half", className].filter(Boolean).join(" ") });
});
StarHalf.displayName = "StarHalf";
const StarMinus = forwardRef(function StarMinus2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(StarMinusBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-star-minus", className].filter(Boolean).join(" ") });
});
StarMinus.displayName = "StarMinus";
const StarOff = forwardRef(function StarOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(StarOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-star-off", className].filter(Boolean).join(" ") });
});
StarOff.displayName = "StarOff";
const StarPlus = forwardRef(function StarPlus2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(StarPlusBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-star-plus", className].filter(Boolean).join(" ") });
});
StarPlus.displayName = "StarPlus";
const StarX = forwardRef(function StarX2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(StarXBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-star-x", className].filter(Boolean).join(" ") });
});
StarX.displayName = "StarX";
const TrashOff = forwardRef(function TrashOff2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TrashOffBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-trash-off", className].filter(Boolean).join(" ") });
});
TrashOff.displayName = "TrashOff";
const Undo = forwardRef(function Undo3(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(UndoBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-undo", className].filter(Boolean).join(" ") });
});
Undo.displayName = "Undo";
const Unlink = forwardRef(function Unlink2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(UnlinkBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-unlink", className].filter(Boolean).join(" ") });
});
Unlink.displayName = "Unlink";
const XLineTop = forwardRef(function XLineTop2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(XLineTopBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-x-line-top", className].filter(Boolean).join(" ") });
});
XLineTop.displayName = "XLineTop";
const ZoomIn = forwardRef(function ZoomIn2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ZoomInBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-zoom-in", className].filter(Boolean).join(" ") });
});
ZoomIn.displayName = "ZoomIn";
const ArrowDown01 = forwardRef(function ArrowDown012(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ArrowDown01Base, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-arrow-down-0-1", className].filter(Boolean).join(" ") });
});
ArrowDown01.displayName = "ArrowDown01";
const ArrowDown10 = forwardRef(function ArrowDown102(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ArrowDown10Base, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-arrow-down-1-0", className].filter(Boolean).join(" ") });
});
ArrowDown10.displayName = "ArrowDown10";
const ArrowDownAZ = forwardRef(function ArrowDownAZ2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ArrowDownAZBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-arrow-down-a-z", className].filter(Boolean).join(" ") });
});
ArrowDownAZ.displayName = "ArrowDownAZ";
const ArrowDownToLine = forwardRef(function ArrowDownToLine2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ArrowDownToLineBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-arrow-down-to-line", className].filter(Boolean).join(" ") });
});
ArrowDownToLine.displayName = "ArrowDownToLine";
const ArrowDownUp = forwardRef(function ArrowDownUp2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ArrowDownUpBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-arrow-down-up", className].filter(Boolean).join(" ") });
});
ArrowDownUp.displayName = "ArrowDownUp";
const ArrowDownZA = forwardRef(function ArrowDownZA2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ArrowDownZABase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-arrow-down-z-a", className].filter(Boolean).join(" ") });
});
ArrowDownZA.displayName = "ArrowDownZA";
const ArrowUp01 = forwardRef(function ArrowUp012(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ArrowUp01Base, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-arrow-up-0-1", className].filter(Boolean).join(" ") });
});
ArrowUp01.displayName = "ArrowUp01";
const ArrowUpAZ = forwardRef(function ArrowUpAZ2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ArrowUpAZBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-arrow-up-a-z", className].filter(Boolean).join(" ") });
});
ArrowUpAZ.displayName = "ArrowUpAZ";
const ArrowUpZA = forwardRef(function ArrowUpZA2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ArrowUpZABase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-arrow-up-z-a", className].filter(Boolean).join(" ") });
});
ArrowUpZA.displayName = "ArrowUpZA";
const ChevronLast = forwardRef(function ChevronLast2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ChevronLastBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-chevron-last", className].filter(Boolean).join(" ") });
});
ChevronLast.displayName = "ChevronLast";
const ChevronsDown = forwardRef(function ChevronsDown2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ChevronsDownBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-chevrons-down", className].filter(Boolean).join(" ") });
});
ChevronsDown.displayName = "ChevronsDown";
const ChevronsLeft = forwardRef(function ChevronsLeft2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ChevronsLeftBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-chevrons-left", className].filter(Boolean).join(" ") });
});
ChevronsLeft.displayName = "ChevronsLeft";
const ChevronsLeftRightEllipsis = forwardRef(function ChevronsLeftRightEllipsis2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ChevronsLeftRightEllipsisBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-chevrons-left-right-ellipsis", className].filter(Boolean).join(" ") });
});
ChevronsLeftRightEllipsis.displayName = "ChevronsLeftRightEllipsis";
const ChevronsRight = forwardRef(function ChevronsRight2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ChevronsRightBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-chevrons-right", className].filter(Boolean).join(" ") });
});
ChevronsRight.displayName = "ChevronsRight";
const ChevronsUp = forwardRef(function ChevronsUp2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ChevronsUpBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-chevrons-up", className].filter(Boolean).join(" ") });
});
ChevronsUp.displayName = "ChevronsUp";
const CircleChevronsDown = forwardRef(function CircleChevronsDown2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CircleChevronsDownBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-circle-chevrons-down", className].filter(Boolean).join(" ") });
});
CircleChevronsDown.displayName = "CircleChevronsDown";
const CircleChevronsLeft = forwardRef(function CircleChevronsLeft2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CircleChevronsLeftBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-circle-chevrons-left", className].filter(Boolean).join(" ") });
});
CircleChevronsLeft.displayName = "CircleChevronsLeft";
const CircleChevronsRight = forwardRef(function CircleChevronsRight2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CircleChevronsRightBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-circle-chevrons-right", className].filter(Boolean).join(" ") });
});
CircleChevronsRight.displayName = "CircleChevronsRight";
const CircleChevronsUp = forwardRef(function CircleChevronsUp2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CircleChevronsUpBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-circle-chevrons-up", className].filter(Boolean).join(" ") });
});
CircleChevronsUp.displayName = "CircleChevronsUp";
const CornerLeftUp = forwardRef(function CornerLeftUp2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CornerLeftUpBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-corner-left-up", className].filter(Boolean).join(" ") });
});
CornerLeftUp.displayName = "CornerLeftUp";
const IterationCw = forwardRef(function IterationCw2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(IterationCwBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-iteration-cw", className].filter(Boolean).join(" ") });
});
IterationCw.displayName = "IterationCw";
const Move = forwardRef(function Move2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MoveBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-move", className].filter(Boolean).join(" ") });
});
Move.displayName = "Move";
const SquareChevronsDown = forwardRef(function SquareChevronsDown2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SquareChevronsDownBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-square-chevrons-down", className].filter(Boolean).join(" ") });
});
SquareChevronsDown.displayName = "SquareChevronsDown";
const SquareChevronsUp = forwardRef(function SquareChevronsUp2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SquareChevronsUpBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-square-chevrons-up", className].filter(Boolean).join(" ") });
});
SquareChevronsUp.displayName = "SquareChevronsUp";
const SquareChevronUp = forwardRef(function SquareChevronUp2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SquareChevronUpBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-square-chevron-up", className].filter(Boolean).join(" ") });
});
SquareChevronUp.displayName = "SquareChevronUp";
const BrickWall = forwardRef(function BrickWall2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BrickWallBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-brick-wall", className].filter(Boolean).join(" ") });
});
BrickWall.displayName = "BrickWall";
const BriefcaseBusiness = forwardRef(function BriefcaseBusiness2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BriefcaseBusinessBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-briefcase-business", className].filter(Boolean).join(" ") });
});
BriefcaseBusiness.displayName = "BriefcaseBusiness";
const BriefcaseConveyorBelt = forwardRef(function BriefcaseConveyorBelt2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BriefcaseConveyorBeltBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-briefcase-conveyor-belt", className].filter(Boolean).join(" ") });
});
BriefcaseConveyorBelt.displayName = "BriefcaseConveyorBelt";
const BriefcaseMedical = forwardRef(function BriefcaseMedical2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BriefcaseMedicalBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-briefcase-medical", className].filter(Boolean).join(" ") });
});
BriefcaseMedical.displayName = "BriefcaseMedical";
const BriefcasePlus = forwardRef(function BriefcasePlus2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BriefcasePlusBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-briefcase-plus", className].filter(Boolean).join(" ") });
});
BriefcasePlus.displayName = "BriefcasePlus";
const BuildingComplexPlus = forwardRef(function BuildingComplexPlus2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(BuildingComplexPlusBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-building-complex-plus", className].filter(Boolean).join(" ") });
});
BuildingComplexPlus.displayName = "BuildingComplexPlus";
const Castle = forwardRef(function Castle2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CastleBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-castle", className].filter(Boolean).join(" ") });
});
Castle.displayName = "Castle";
const Church = forwardRef(function Church2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ChurchBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-church", className].filter(Boolean).join(" ") });
});
Church.displayName = "Church";
const Dam = forwardRef(function Dam2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(DamBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-dam", className].filter(Boolean).join(" ") });
});
Dam.displayName = "Dam";
const DoorClosed = forwardRef(function DoorClosed2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(DoorClosedBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-door-closed", className].filter(Boolean).join(" ") });
});
DoorClosed.displayName = "DoorClosed";
const DoorClosedCog = forwardRef(function DoorClosedCog2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(DoorClosedCogBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-door-closed-cog", className].filter(Boolean).join(" ") });
});
DoorClosedCog.displayName = "DoorClosedCog";
const DoorClosedLocked = forwardRef(function DoorClosedLocked2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(DoorClosedLockedBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-door-closed-locked", className].filter(Boolean).join(" ") });
});
DoorClosedLocked.displayName = "DoorClosedLocked";
const DoorClosedPackage = forwardRef(function DoorClosedPackage2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(DoorClosedPackageBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-door-closed-package", className].filter(Boolean).join(" ") });
});
DoorClosedPackage.displayName = "DoorClosedPackage";
const DoorOpen = forwardRef(function DoorOpen2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(DoorOpenBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-door-open", className].filter(Boolean).join(" ") });
});
DoorOpen.displayName = "DoorOpen";
const Factory = forwardRef(function Factory2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(FactoryBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-factory", className].filter(Boolean).join(" ") });
});
Factory.displayName = "Factory";
const Fence = forwardRef(function Fence2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(FenceBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-fence", className].filter(Boolean).join(" ") });
});
Fence.displayName = "Fence";
const HouseHeart = forwardRef(function HouseHeart2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(HouseHeartBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-house-heart", className].filter(Boolean).join(" ") });
});
HouseHeart.displayName = "HouseHeart";
const MapPinCheck = forwardRef(function MapPinCheck2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MapPinCheckBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-map-pin-check", className].filter(Boolean).join(" ") });
});
MapPinCheck.displayName = "MapPinCheck";
const MountainSnow = forwardRef(function MountainSnow2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MountainSnowBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-mountain-snow", className].filter(Boolean).join(" ") });
});
MountainSnow.displayName = "MountainSnow";
const SolarPanel = forwardRef(function SolarPanel2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SolarPanelBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-solar-panel", className].filter(Boolean).join(" ") });
});
SolarPanel.displayName = "SolarPanel";
const TentTree = forwardRef(function TentTree2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TentTreeBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-tent-tree", className].filter(Boolean).join(" ") });
});
TentTree.displayName = "TentTree";
const TreeDeciduous = forwardRef(function TreeDeciduous2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TreeDeciduousBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-tree-deciduous", className].filter(Boolean).join(" ") });
});
TreeDeciduous.displayName = "TreeDeciduous";
const TreePalm = forwardRef(function TreePalm2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TreePalmBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-tree-palm", className].filter(Boolean).join(" ") });
});
TreePalm.displayName = "TreePalm";
const TreePine = forwardRef(function TreePine2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TreePineBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-tree-pine", className].filter(Boolean).join(" ") });
});
TreePine.displayName = "TreePine";
const Trees = forwardRef(function Trees2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TreesBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-trees", className].filter(Boolean).join(" ") });
});
Trees.displayName = "Trees";
const UtilityPole = forwardRef(function UtilityPole2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(UtilityPoleBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-utility-pole", className].filter(Boolean).join(" ") });
});
UtilityPole.displayName = "UtilityPole";
const Warehouse = forwardRef(function Warehouse2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(WarehouseBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-warehouse", className].filter(Boolean).join(" ") });
});
Warehouse.displayName = "Warehouse";
const Google = forwardRef(function Google2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(GoogleBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-google", className].filter(Boolean).join(" ") });
});
Google.displayName = "Google";
const LinkedIn = forwardRef(function LinkedIn2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(LinkedInBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-linkedin", className].filter(Boolean).join(" ") });
});
LinkedIn.displayName = "LinkedIn";
const GitHub = forwardRef(function GitHub2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(GitHubBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-github", className].filter(Boolean).join(" ") });
});
GitHub.displayName = "GitHub";
const Apple = forwardRef(function Apple2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(AppleBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-apple", className].filter(Boolean).join(" ") });
});
Apple.displayName = "Apple";
const Microsoft = forwardRef(function Microsoft2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(MicrosoftBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-microsoft", className].filter(Boolean).join(" ") });
});
Microsoft.displayName = "Microsoft";
const XLogo = forwardRef(function XLogo2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(XLogoBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-x-logo", className].filter(Boolean).join(" ") });
});
XLogo.displayName = "XLogo";
const Facebook = forwardRef(function Facebook2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(FacebookBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-facebook", className].filter(Boolean).join(" ") });
});
Facebook.displayName = "Facebook";
const WhatsApp = forwardRef(function WhatsApp2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(WhatsAppBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-whatsapp", className].filter(Boolean).join(" ") });
});
WhatsApp.displayName = "WhatsApp";
const Indeed = forwardRef(function Indeed2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(IndeedBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-indeed", className].filter(Boolean).join(" ") });
});
Indeed.displayName = "Indeed";
const Passport = forwardRef(function Passport2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(PassportBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-passport", className].filter(Boolean).join(" ") });
});
Passport.displayName = "Passport";
const Visa = forwardRef(function Visa2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(VisaBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-visa", className].filter(Boolean).join(" ") });
});
Visa.displayName = "Visa";
const ResidencePermit = forwardRef(function ResidencePermit2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ResidencePermitBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-residence-permit", className].filter(Boolean).join(" ") });
});
ResidencePermit.displayName = "ResidencePermit";
const FlagIreland = forwardRef(function FlagIreland2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(FlagIrelandBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-flag-ireland", className].filter(Boolean).join(" ") });
});
FlagIreland.displayName = "FlagIreland";
const Crest = forwardRef(function Crest2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CrestBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-crest", className].filter(Boolean).join(" ") });
});
Crest.displayName = "Crest";
const Invoice = forwardRef(function Invoice2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(InvoiceBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-invoice", className].filter(Boolean).join(" ") });
});
Invoice.displayName = "Invoice";
const GradIreland = forwardRef(function GradIreland2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(GradIrelandBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-gradireland", className].filter(Boolean).join(" ") });
});
GradIreland.displayName = "GradIreland";
const IrishJobs = forwardRef(function IrishJobs2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(IrishJobsBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-irishjobs", className].filter(Boolean).join(" ") });
});
IrishJobs.displayName = "IrishJobs";
const JobsIE = forwardRef(function JobsIE2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(JobsIEBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-jobsie", className].filter(Boolean).join(" ") });
});
JobsIE.displayName = "JobsIE";
const StageApplied = forwardRef(function StageApplied2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(StageAppliedBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-stage-applied", className].filter(Boolean).join(" ") });
});
StageApplied.displayName = "StageApplied";
const StageInterview = forwardRef(function StageInterview2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(StageInterviewBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-stage-interview", className].filter(Boolean).join(" ") });
});
StageInterview.displayName = "StageInterview";
const StageOffer = forwardRef(function StageOffer2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(StageOfferBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-stage-offer", className].filter(Boolean).join(" ") });
});
StageOffer.displayName = "StageOffer";
const StageRejected = forwardRef(function StageRejected2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(StageRejectedBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-stage-rejected", className].filter(Boolean).join(" ") });
});
StageRejected.displayName = "StageRejected";
const StageWithdrawn = forwardRef(function StageWithdrawn2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(StageWithdrawnBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-stage-withdrawn", className].filter(Boolean).join(" ") });
});
StageWithdrawn.displayName = "StageWithdrawn";
const Resume = forwardRef(function Resume2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(ResumeBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-resume", className].filter(Boolean).join(" ") });
});
Resume.displayName = "Resume";
const CoverLetter = forwardRef(function CoverLetter2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CoverLetterBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-cover-letter", className].filter(Boolean).join(" ") });
});
CoverLetter.displayName = "CoverLetter";
const Transcript = forwardRef(function Transcript2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(TranscriptBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-transcript", className].filter(Boolean).join(" ") });
});
Transcript.displayName = "Transcript";
const Certificate = forwardRef(function Certificate2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(CertificateBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-certificate", className].filter(Boolean).join(" ") });
});
Certificate.displayName = "Certificate";
const Sponsor = forwardRef(function Sponsor2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SponsorBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-sponsor", className].filter(Boolean).join(" ") });
});
Sponsor.displayName = "Sponsor";
const VisaStamp = forwardRef(function VisaStamp2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(VisaStampBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-visa-stamp", className].filter(Boolean).join(" ") });
});
VisaStamp.displayName = "VisaStamp";
const Subscription = forwardRef(function Subscription2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(SubscriptionBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-subscription", className].filter(Boolean).join(" ") });
});
Subscription.displayName = "Subscription";
const Hybrid = forwardRef(function Hybrid2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(HybridBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-hybrid", className].filter(Boolean).join(" ") });
});
Hybrid.displayName = "Hybrid";
const Onsite = forwardRef(function Onsite2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(OnsiteBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-onsite", className].filter(Boolean).join(" ") });
});
Onsite.displayName = "Onsite";
const Remote = forwardRef(function Remote2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(RemoteBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-remote", className].filter(Boolean).join(" ") });
});
Remote.displayName = "Remote";
const Naukri = forwardRef(function Naukri2(props, ref) {
  const { size = 24, strokeWidth = 2, className, ...rest } = props;
  return /* @__PURE__ */ jsx(NaukriBase, { ref, ...rest, size, strokeWidth, className: ["lucide", "lucide-naukri", className].filter(Boolean).join(" ") });
});
Naukri.displayName = "Naukri";
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
  Building22 as Building2,
  BuildingComplexPlus,
  Bus,
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
  Certificate,
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
  CheckCircle22 as CheckCircle2,
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
  Clock122 as Clock12,
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
  CoverLetter,
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
  Disc22 as Disc2,
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
  GradIreland,
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
  Hybrid,
  IceCreamBowl,
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
  IrishJobs,
  Italic,
  IterationCw,
  JobsIE,
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
  Layers22 as Layers2,
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
  Naukri,
  Navigation,
  Navigation22 as Navigation2,
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
  Onsite,
  Orbit,
  Package,
  Package22 as Package2,
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
  Plug22 as Plug2,
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
  Remote,
  RemoveFormatting,
  Repeat,
  Reply,
  ResidencePermit,
  Resume,
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
  SpellCheck22 as SpellCheck2,
  Spline,
  SplinePointer,
  Split,
  Sponsor,
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
  StageApplied,
  StageInterview,
  StageOffer,
  StageRejected,
  StageWithdrawn,
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
  Subscription,
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
  Transcript,
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
  VisaStamp,
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
  XLineTop,
  XLogo,
  Zap,
  ZapOff,
  ZoomIn
};
