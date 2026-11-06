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
var commerce_exports = {};
__export(commerce_exports, {
  Banknote: () => import_banknote.Banknote,
  BanknoteArrowDown: () => import_banknote_arrow_down.BanknoteArrowDown,
  BanknoteArrowUp: () => import_banknote_arrow_up.BanknoteArrowUp,
  BanknoteCheck: () => import_banknote_check.BanknoteCheck,
  BanknoteX: () => import_banknote_x.BanknoteX,
  Barcode: () => import_barcode.Barcode,
  Briefcase: () => import_briefcase.Briefcase,
  Coins: () => import_coins.Coins,
  Container: () => import_container.Container,
  CreditCard: () => import_credit_card.CreditCard,
  CreditCardCheck: () => import_credit_card_check.CreditCardCheck,
  CreditCardMinus: () => import_credit_card_minus.CreditCardMinus,
  CreditCardPlus: () => import_credit_card_plus.CreditCardPlus,
  CreditCardReader: () => import_credit_card_reader.CreditCardReader,
  CreditCardX: () => import_credit_card_x.CreditCardX,
  Factory: () => import_factory.Factory,
  Fuel: () => import_fuel.Fuel,
  Gift: () => import_gift.Gift,
  HandCoins: () => import_hand_coins.HandCoins,
  Package: () => import_package.Package,
  Package2: () => import_package_2.Package2,
  PackageCheck: () => import_package_check.PackageCheck,
  PackageMinus: () => import_package_minus.PackageMinus,
  PackagePen: () => import_package_pen.PackagePen,
  PackagePlus: () => import_package_plus.PackagePlus,
  PackageQuestionMark: () => import_package_question_mark.PackageQuestionMark,
  PackageSearch: () => import_package_search.PackageSearch,
  PackageX: () => import_package_x.PackageX,
  Percent: () => import_percent.Percent,
  PiggyBank: () => import_piggy_bank.PiggyBank,
  QrCode: () => import_qr_code.QrCode,
  Receipt: () => import_receipt.Receipt,
  ReceiptCent: () => import_receipt_cent.ReceiptCent,
  ReceiptEuro: () => import_receipt_euro.ReceiptEuro,
  ReceiptIndianRupee: () => import_receipt_indian_rupee.ReceiptIndianRupee,
  ReceiptJapaneseYen: () => import_receipt_japanese_yen.ReceiptJapaneseYen,
  ReceiptPoundSterling: () => import_receipt_pound_sterling.ReceiptPoundSterling,
  ReceiptSwissFranc: () => import_receipt_swiss_franc.ReceiptSwissFranc,
  ReceiptText: () => import_receipt_text.ReceiptText,
  ReceiptTurkishLira: () => import_receipt_turkish_lira.ReceiptTurkishLira,
  ScanBarcode: () => import_scan_barcode.ScanBarcode,
  ScanLine: () => import_scan_line.ScanLine,
  ScanQrCode: () => import_scan_qr_code.ScanQrCode,
  ShoppingBag: () => import_shopping_bag.ShoppingBag,
  ShoppingBasket: () => import_shopping_basket.ShoppingBasket,
  ShoppingCart: () => import_shopping_cart.ShoppingCart,
  ShoppingCartMinus: () => import_shopping_cart_minus.ShoppingCartMinus,
  ShoppingCartPlus: () => import_shopping_cart_plus.ShoppingCartPlus,
  Store: () => import_store.Store,
  Tag: () => import_tag.Tag,
  TagPlus: () => import_tag_plus.TagPlus,
  TagX: () => import_tag_x.TagX,
  Tags: () => import_tags.Tags,
  Truck: () => import_truck.Truck,
  TruckElectric: () => import_truck_electric.TruckElectric,
  Wallet: () => import_wallet.Wallet,
  WalletCards: () => import_wallet_cards.WalletCards,
  WalletMinimal: () => import_wallet_minimal.WalletMinimal,
  Warehouse: () => import_warehouse.Warehouse
});
module.exports = __toCommonJS(commerce_exports);
var import_banknote = require("../icons/banknote.js");
var import_banknote_arrow_down = require("../icons/banknote-arrow-down.js");
var import_banknote_arrow_up = require("../icons/banknote-arrow-up.js");
var import_banknote_check = require("../icons/banknote-check.js");
var import_banknote_x = require("../icons/banknote-x.js");
var import_barcode = require("../icons/barcode.js");
var import_briefcase = require("../icons/briefcase.js");
var import_coins = require("../icons/coins.js");
var import_container = require("../icons/container.js");
var import_credit_card = require("../icons/credit-card.js");
var import_credit_card_check = require("../icons/credit-card-check.js");
var import_credit_card_minus = require("../icons/credit-card-minus.js");
var import_credit_card_plus = require("../icons/credit-card-plus.js");
var import_credit_card_reader = require("../icons/credit-card-reader.js");
var import_credit_card_x = require("../icons/credit-card-x.js");
var import_factory = require("../icons/factory.js");
var import_fuel = require("../icons/fuel.js");
var import_gift = require("../icons/gift.js");
var import_hand_coins = require("../icons/hand-coins.js");
var import_package = require("../icons/package.js");
var import_package_2 = require("../icons/package-2.js");
var import_package_check = require("../icons/package-check.js");
var import_package_minus = require("../icons/package-minus.js");
var import_package_pen = require("../icons/package-pen.js");
var import_package_plus = require("../icons/package-plus.js");
var import_package_question_mark = require("../icons/package-question-mark.js");
var import_package_search = require("../icons/package-search.js");
var import_package_x = require("../icons/package-x.js");
var import_percent = require("../icons/percent.js");
var import_piggy_bank = require("../icons/piggy-bank.js");
var import_qr_code = require("../icons/qr-code.js");
var import_receipt = require("../icons/receipt.js");
var import_receipt_cent = require("../icons/receipt-cent.js");
var import_receipt_euro = require("../icons/receipt-euro.js");
var import_receipt_indian_rupee = require("../icons/receipt-indian-rupee.js");
var import_receipt_japanese_yen = require("../icons/receipt-japanese-yen.js");
var import_receipt_pound_sterling = require("../icons/receipt-pound-sterling.js");
var import_receipt_swiss_franc = require("../icons/receipt-swiss-franc.js");
var import_receipt_text = require("../icons/receipt-text.js");
var import_receipt_turkish_lira = require("../icons/receipt-turkish-lira.js");
var import_scan_barcode = require("../icons/scan-barcode.js");
var import_scan_line = require("../icons/scan-line.js");
var import_scan_qr_code = require("../icons/scan-qr-code.js");
var import_shopping_bag = require("../icons/shopping-bag.js");
var import_shopping_basket = require("../icons/shopping-basket.js");
var import_shopping_cart = require("../icons/shopping-cart.js");
var import_shopping_cart_minus = require("../icons/shopping-cart-minus.js");
var import_shopping_cart_plus = require("../icons/shopping-cart-plus.js");
var import_store = require("../icons/store.js");
var import_tag = require("../icons/tag.js");
var import_tag_plus = require("../icons/tag-plus.js");
var import_tag_x = require("../icons/tag-x.js");
var import_tags = require("../icons/tags.js");
var import_truck = require("../icons/truck.js");
var import_truck_electric = require("../icons/truck-electric.js");
var import_wallet = require("../icons/wallet.js");
var import_wallet_cards = require("../icons/wallet-cards.js");
var import_wallet_minimal = require("../icons/wallet-minimal.js");
var import_warehouse = require("../icons/warehouse.js");
