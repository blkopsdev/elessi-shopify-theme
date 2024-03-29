if (typeof Currency === 'undefined') {
  var Currency = {};
}
Currency.moneyFormats = {
  USD: {
    money_format: "${{amount}}",
    money_no_decimals_format: "${{amount_no_decimals}}",
    money_with_currency_format: "${{amount}} USD",
    money_no_decimals_with_currency_format: "${{amount_no_decimals}} USD"
  },
  EUR: {
    money_format: "&euro;{{amount}}",
    money_no_decimals_format: "&euro;{{amount_no_decimals}}",
    money_with_currency_format: "&euro;{{amount}} EUR",
    money_no_decimals_with_currency_format: "&euro;{{amount_no_decimals}} EUR"
  },
  GBP: {
    money_format: "&pound;{{amount}}",
    money_no_decimals_format: "&pound;{{amount_no_decimals}}",
    money_with_currency_format: "&pound;{{amount}} GBP",
    money_no_decimals_with_currency_format: "&pound;{{amount_no_decimals}} GBP"
  },
  CAD: {
    money_format: "${{amount}}",
    money_no_decimals_format: "${{amount_no_decimals}}",
    money_with_currency_format: "${{amount}} CAD",
    money_no_decimals_with_currency_format: "${{amount_no_decimals}} CAD"
  },
  ALL: {
    money_format: "Lek {{amount}}",
    money_no_decimals_format: "Lek {{amount_no_decimals}}",
    money_with_currency_format: "Lek {{amount}} ALL",
    money_no_decimals_with_currency_format: "Lek {{amount_no_decimals}} ALL"
  },
  DZD: {
    money_format: "DA {{amount}}",
    money_no_decimals_format: "DA {{amount_no_decimals}}",
    money_with_currency_format: "DA {{amount}} DZD",
    money_no_decimals_with_currency_format: "DA {{amount_no_decimals}} DZD"
  },
  AOA: {
    money_format: "Kz{{amount}}",
    money_no_decimals_format: "Kz{{amount_no_decimals}}",
    money_with_currency_format: "Kz{{amount}} AOA",
    money_no_decimals_with_currency_format: "Kz{{amount_no_decimals}} AOA"
  },
  ARS: {
    money_format: "${{amount_with_comma_separator}}",
    money_no_decimals_format: "${{amount_with_comma_separator}}",
    money_with_currency_format: "${{amount_with_comma_separator}} ARS",
    money_no_decimals_with_currency_format: "${{amount_with_comma_separator}} ARS"
  },
  AMD: {
    money_format: "{{amount}} AMD",
    money_no_decimals_format: "{{amount_no_decimals}} AMD",
    money_with_currency_format: "{{amount}} AMD",
    money_no_decimals_with_currency_format: "{{amount_no_decimals}} AMD"
  },
  AWG: {
    money_format: "Afl{{amount}}",
    money_no_decimals_format: "Afl{{amount_no_decimals}}",
    money_with_currency_format: "Afl{{amount}} AWG",
    money_no_decimals_with_currency_format: "Afl{{amount_no_decimals}} AWG"
  },
  AUD: {
    money_format: "${{amount}}",
    money_no_decimals_format: "${{amount_no_decimals}}",
    money_with_currency_format: "${{amount}} AUD",
    money_no_decimals_with_currency_format: "${{amount_no_decimals}} AUD"
  },
  BBD: {
    money_format: "${{amount}}",
    money_no_decimals_format: "${{amount_no_decimals}}",
    money_with_currency_format: "${{amount}} Bds",
    money_no_decimals_with_currency_format: "${{amount_no_decimals}} Bds"
  },
  AZN: {
    money_format: "m.{{amount}}",
    money_no_decimals_format: "m.{{amount_no_decimals}}",
    money_with_currency_format: "m.{{amount}} AZN",
    money_no_decimals_with_currency_format: "m.{{amount_no_decimals}} AZN"
  },
  BDT: {
    money_format: "Tk {{amount}}",
    money_no_decimals_format: "Tk {{amount_no_decimals}}",
    money_with_currency_format: "Tk {{amount}} BDT",
    money_no_decimals_with_currency_format: "Tk {{amount_no_decimals}} BDT"
  },
  BSD: {
    money_format: "BS${{amount}}",
    money_no_decimals_format: "BS${{amount_no_decimals}}",
    money_with_currency_format: "BS${{amount}} BSD",
    money_no_decimals_with_currency_format: "BS${{amount_no_decimals}} BSD"
  },
  BHD: {
    money_format: "{{amount}}0 BD",
    money_no_decimals_format: "{{amount_no_decimals}}0 BD",
    money_with_currency_format: "{{amount}}0 BHD",
    money_no_decimals_with_currency_format: "{{amount_no_decimals}}0 BHD"
  },
  BYR: {
    money_format: "Br {{amount}}",
    money_no_decimals_format: "Br {{amount_no_decimals}}",
    money_with_currency_format: "Br {{amount}} BYR",
    money_no_decimals_with_currency_format: "Br {{amount_no_decimals}} BYR"
  },
  BZD: {
    money_format: "BZ${{amount}}",
    money_no_decimals_format: "BZ${{amount_no_decimals}}",
    money_with_currency_format: "BZ${{amount}} BZD",
    money_no_decimals_with_currency_format: "BZ${{amount_no_decimals}} BZD"
  },
  BTN: {
    money_format: "Nu {{amount}}",
    money_no_decimals_format: "Nu {{amount_no_decimals}}",
    money_with_currency_format: "Nu {{amount}} BTN",
    money_no_decimals_with_currency_format: "Nu {{amount_no_decimals}} BTN"
  },
  BAM: {
    money_format: "KM {{amount_with_comma_separator}}",
    money_no_decimals_format: "KM {{amount_with_comma_separator}}",
    money_with_currency_format: "KM {{amount_with_comma_separator}} BAM",
    money_no_decimals_with_currency_format: "KM {{amount_with_comma_separator}} BAM"
  },
  BRL: {
    money_format: "R$ {{amount_with_comma_separator}}",
    money_no_decimals_format: "R$ {{amount_with_comma_separator}}",
    money_with_currency_format: "R$ {{amount_with_comma_separator}} BRL",
    money_no_decimals_with_currency_format: "R$ {{amount_with_comma_separator}} BRL"
  },
  BOB: {
    money_format: "Bs{{amount_with_comma_separator}}",
    money_no_decimals_format: "Bs{{amount_with_comma_separator}}",
    money_with_currency_format: "Bs{{amount_with_comma_separator}} BOB",
    money_no_decimals_with_currency_format: "Bs{{amount_with_comma_separator}} BOB"
  },
  BWP: {
    money_format: "P{{amount}}",
    money_no_decimals_format: "P{{amount_no_decimals}}",
    money_with_currency_format: "P{{amount}} BWP",
    money_no_decimals_with_currency_format: "P{{amount_no_decimals}} BWP"
  },
  BND: {
    money_format: "${{amount}}",
    money_no_decimals_format: "${{amount_no_decimals}}",
    money_with_currency_format: "${{amount}} BND",
    money_no_decimals_with_currency_format: "${{amount_no_decimals}} BND"
  },
  BGN: {
    money_format: "{{amount}} лв",
    money_no_decimals_format: "{{amount_no_decimals}} лв",
    money_with_currency_format: "{{amount}} лв BGN",
    money_no_decimals_with_currency_format: "{{amount_no_decimals}} лв BGN"
  },
  MMK: {
    money_format: "K{{amount}}",
    money_no_decimals_format: "K{{amount_no_decimals}}",
    money_with_currency_format: "K{{amount}} MMK",
    money_no_decimals_with_currency_format: "K{{amount_no_decimals}} MMK"
  },
  KHR: {
    money_format: "KHR{{amount}}",
    money_no_decimals_format: "KHR{{amount_no_decimals}}",
    money_with_currency_format: "KHR{{amount}}",
    money_no_decimals_with_currency_format: "KHR{{amount_no_decimals}}"
  },
  KYD: {
    money_format: "${{amount}}",
    money_no_decimals_format: "${{amount_no_decimals}}",
    money_with_currency_format: "${{amount}} KYD",
    money_no_decimals_with_currency_format: "${{amount_no_decimals}} KYD"
  },
  XAF: {
    money_format: "FCFA{{amount}}",
    money_no_decimals_format: "FCFA{{amount_no_decimals}}",
    money_with_currency_format: "FCFA{{amount}} XAF",
    money_no_decimals_with_currency_format: "FCFA{{amount_no_decimals}} XAF"
  },
  CLP: {
    money_format: "${{amount_no_decimals}}",
    money_no_decimals_format: "${{amount_no_decimals}}",
    money_with_currency_format: "${{amount_no_decimals}} CLP",
    money_no_decimals_with_currency_format: "${{amount_no_decimals}} CLP"
  },
  CNY: {
    money_format: "&#165;{{amount}}",
    money_no_decimals_format: "&#165;{{amount_no_decimals}}",
    money_with_currency_format: "&#165;{{amount}} CNY",
    money_no_decimals_with_currency_format: "&#165;{{amount_no_decimals}} CNY"
  },
  COP: {
    money_format: "${{amount_with_comma_separator}}",
    money_no_decimals_format: "${{amount_with_comma_separator}}",
    money_with_currency_format: "${{amount_with_comma_separator}} COP",
    money_no_decimals_with_currency_format: "${{amount_with_comma_separator}} COP"
  },
  CRC: {
    money_format: "&#8353; {{amount_with_comma_separator}}",
    money_no_decimals_format: "&#8353; {{amount_with_comma_separator}}",
    money_with_currency_format: "&#8353; {{amount_with_comma_separator}} CRC",
    money_no_decimals_with_currency_format: "&#8353; {{amount_with_comma_separator}} CRC"
  },
  HRK: {
    money_format: "{{amount_with_comma_separator}} kn",
    money_no_decimals_format: "{{amount_with_comma_separator}} kn",
    money_with_currency_format: "{{amount_with_comma_separator}} kn HRK",
    money_no_decimals_with_currency_format: "{{amount_with_comma_separator}} kn HRK"
  },
  CZK: {
    money_format: "{{amount_with_comma_separator}} K&#269;",
    money_no_decimals_format: "{{amount_with_comma_separator}} K&#269;",
    money_with_currency_format: "{{amount_with_comma_separator}} K&#269;",
    money_no_decimals_with_currency_format: "{{amount_with_comma_separator}} K&#269;"
  },
  DKK: {
    money_format: "{{amount_with_comma_separator}}",
    money_no_decimals_format: "{{amount_with_comma_separator}}",
    money_with_currency_format: "kr.{{amount_with_comma_separator}}",
    money_no_decimals_with_currency_format: "kr.{{amount_with_comma_separator}}"
  },
  DOP: {
    money_format: "RD$ {{amount}}",
    money_no_decimals_format: "RD$ {{amount_no_decimals}}",
    money_with_currency_format: "RD$ {{amount}}",
    money_no_decimals_with_currency_format: "RD$ {{amount_no_decimals}}"
  },
  XCD: {
    money_format: "${{amount}}",
    money_no_decimals_format: "${{amount_no_decimals}}",
    money_with_currency_format: "EC${{amount}}",
    money_no_decimals_with_currency_format: "EC${{amount_no_decimals}}"
  },
  EGP: {
    money_format: "LE {{amount}}",
    money_no_decimals_format: "LE {{amount_no_decimals}}",
    money_with_currency_format: "LE {{amount}} EGP",
    money_no_decimals_with_currency_format: "LE {{amount_no_decimals}} EGP"
  },
  ETB: {
    money_format: "Br{{amount}}",
    money_no_decimals_format: "Br{{amount_no_decimals}}",
    money_with_currency_format: "Br{{amount}} ETB",
    money_no_decimals_with_currency_format: "Br{{amount_no_decimals}} ETB"
  },
  XPF: {
    money_format: "{{amount_no_decimals_with_comma_separator}} XPF",
    money_no_decimals_format: "{{amount_no_decimals_with_comma_separator}} XPF",
    money_with_currency_format: "{{amount_no_decimals_with_comma_separator}} XPF",
    money_no_decimals_with_currency_format: "{{amount_no_decimals_with_comma_separator}} XPF"
  },
  FJD: {
    money_format: "${{amount}}",
    money_no_decimals_format: "${{amount_no_decimals}}",
    money_with_currency_format: "FJ${{amount}}",
    money_no_decimals_with_currency_format: "FJ${{amount_no_decimals}}"
  },
  GMD: {
    money_format: "D {{amount}}",
    money_no_decimals_format: "D {{amount_no_decimals}}",
    money_with_currency_format: "D {{amount}} GMD",
    money_no_decimals_with_currency_format: "D {{amount_no_decimals}} GMD"
  },
  GHS: {
    money_format: "GH&#8373;{{amount}}",
    money_no_decimals_format: "GH&#8373;{{amount_no_decimals}}",
    money_with_currency_format: "GH&#8373;{{amount}}",
    money_no_decimals_with_currency_format: "GH&#8373;{{amount_no_decimals}}"
  },
  GTQ: {
    money_format: "Q{{amount}}",
    money_no_decimals_format: "Q{{amount_no_decimals}}",
    money_with_currency_format: "{{amount}} GTQ",
    money_no_decimals_with_currency_format: "{{amount_no_decimals}} GTQ"
  },
  GYD: {
    money_format: "G${{amount}}",
    money_no_decimals_format: "G${{amount_no_decimals}}",
    money_with_currency_format: "${{amount}} GYD",
    money_no_decimals_with_currency_format: "${{amount_no_decimals}} GYD"
  },
  GEL: {
    money_format: "{{amount}} GEL",
    money_no_decimals_format: "{{amount_no_decimals}} GEL",
    money_with_currency_format: "{{amount}} GEL",
    money_no_decimals_with_currency_format: "{{amount_no_decimals}} GEL"
  },
  HNL: {
    money_format: "L {{amount}}",
    money_no_decimals_format: "L {{amount_no_decimals}}",
    money_with_currency_format: "L {{amount}} HNL",
    money_no_decimals_with_currency_format: "L {{amount_no_decimals}} HNL"
  },
  HKD: {
    money_format: "${{amount}}",
    money_no_decimals_format: "${{amount_no_decimals}}",
    money_with_currency_format: "HK${{amount}}",
    money_no_decimals_with_currency_format: "HK${{amount_no_decimals}}"
  },
  HUF: {
    money_format: "{{amount_no_decimals_with_comma_separator}}",
    money_no_decimals_format: "{{amount_no_decimals_with_comma_separator}}",
    money_with_currency_format: "{{amount_no_decimals_with_comma_separator}} Ft",
    money_no_decimals_with_currency_format: "{{amount_no_decimals_with_comma_separator}} Ft"
  },
  ISK: {
    money_format: "{{amount_no_decimals}} kr",
    money_no_decimals_format: "{{amount_no_decimals}} kr",
    money_with_currency_format: "{{amount_no_decimals}} kr ISK",
    money_no_decimals_with_currency_format: "{{amount_no_decimals}} kr ISK"
  },
  INR: {
    money_format: "Rs. {{amount}}",
    money_no_decimals_format: "Rs. {{amount_no_decimals}}",
    money_with_currency_format: "Rs. {{amount}}",
    money_no_decimals_with_currency_format: "Rs. {{amount_no_decimals}}"
  },
  IDR: {
    money_format: "{{amount_with_comma_separator}}",
    money_no_decimals_format: "{{amount_with_comma_separator}}",
    money_with_currency_format: "Rp {{amount_with_comma_separator}}",
    money_no_decimals_with_currency_format: "Rp {{amount_with_comma_separator}}"
  },
  ILS: {
    money_format: "{{amount}} NIS",
    money_no_decimals_format: "{{amount_no_decimals}} NIS",
    money_with_currency_format: "{{amount}} NIS",
    money_no_decimals_with_currency_format: "{{amount_no_decimals}} NIS"
  },
  JMD: {
    money_format: "${{amount}}",
    money_no_decimals_format: "${{amount_no_decimals}}",
    money_with_currency_format: "${{amount}} JMD",
    money_no_decimals_with_currency_format: "${{amount_no_decimals}} JMD"
  },
  JPY: {
    money_format: "&#165;{{amount_no_decimals}}",
    money_no_decimals_format: "&#165;{{amount_no_decimals}}",
    money_with_currency_format: "&#165;{{amount_no_decimals}} JPY",
    money_no_decimals_with_currency_format: "&#165;{{amount_no_decimals}} JPY"
  },
  JEP: {
    money_format: "&pound;{{amount}}",
    money_no_decimals_format: "&pound;{{amount_no_decimals}}",
    money_with_currency_format: "&pound;{{amount}} JEP",
    money_no_decimals_with_currency_format: "&pound;{{amount_no_decimals}} JEP"
  },
  JOD: {
    money_format: "{{amount}}0 JD",
    money_no_decimals_format: "{{amount_no_decimals}}0 JD",
    money_with_currency_format: "{{amount}}0 JOD",
    money_no_decimals_with_currency_format: "{{amount_no_decimals}}0 JOD"
  },
  KZT: {
    money_format: "{{amount}} KZT",
    money_no_decimals_format: "{{amount_no_decimals}} KZT",
    money_with_currency_format: "{{amount}} KZT",
    money_no_decimals_with_currency_format: "{{amount_no_decimals}} KZT"
  },
  KES: {
    money_format: "KSh{{amount}}",
    money_no_decimals_format: "KSh{{amount_no_decimals}}",
    money_with_currency_format: "KSh{{amount}}",
    money_no_decimals_with_currency_format: "KSh{{amount_no_decimals}}"
  },
  KWD: {
    money_format: "{{amount}}0 KD",
    money_no_decimals_format: "{{amount_no_decimals}}0 KD",
    money_with_currency_format: "{{amount}}0 KWD",
    money_no_decimals_with_currency_format: "{{amount_no_decimals}}0 KWD"
  },
  KGS: {
    money_format: "лв{{amount}}",
    money_no_decimals_format: "лв{{amount_no_decimals}}",
    money_with_currency_format: "лв{{amount}}",
    mon_no_decimalsey_with_currency_format: "лв{{amount_no_decimals}}"
  },
  LVL: {
    money_format: "Ls {{amount}}",
    money_no_decimals_format: "Ls {{amount_no_decimals}}",
    money_with_currency_format: "Ls {{amount}} LVL",
    money_no_decimals_with_currency_format: "Ls {{amount_no_decimals}} LVL"
  },
  LBP: {
    money_format: "L&pound;{{amount}}",
    money_no_decimals_format: "L&pound;{{amount_no_decimals}}",
    money_with_currency_format: "L&pound;{{amount}} LBP",
    money_no_decimals_with_currency_format: "L&pound;{{amount_no_decimals}} LBP"
  },
  LTL: {
    money_format: "{{amount}} Lt",
    money_no_decimals_format: "{{amount_no_decimals}} Lt",
    money_with_currency_format: "{{amount}} Lt",
    money_no_decimals_with_currency_format: "{{amount_no_decimals}} Lt"
  },
  MGA: {
    money_format: "Ar {{amount}}",
    money_no_decimals_format: "Ar {{amount_no_decimals}}",
    money_with_currency_format: "Ar {{amount}} MGA",
    money_no_decimals_with_currency_format: "Ar {{amount_no_decimals}} MGA"
  },
  MKD: {
    money_format: "ден {{amount}}",
    money_no_decimals_format: "ден {{amount_no_decimals}}",
    money_with_currency_format: "ден {{amount}} MKD",
    money_no_decimals_with_currency_format: "ден {{amount_no_decimals}} MKD"
  },
  MOP: {
    money_format: "MOP${{amount}}",
    money_no_decimals_format: "MOP${{amount_no_decimals}}",
    money_with_currency_format: "MOP${{amount}}",
    money_no_decimals_with_currency_format: "MOP${{amount_no_decimals}}"
  },
  MVR: {
    money_format: "Rf{{amount}}",
    money_no_decimals_format: "Rf{{amount_no_decimals}}",
    money_with_currency_format: "Rf{{amount}} MRf",
    money_no_decimals_with_currency_format: "Rf{{amount_no_decimals}} MRf"
  },
  MXN: {
    money_format: "$ {{amount}}",
    money_no_decimals_format: "$ {{amount_no_decimals}}",
    money_with_currency_format: "$ {{amount}} MXN",
    money_no_decimals_with_currency_format: "$ {{amount_no_decimals}} MXN"
  },
  MYR: {
    money_format: "RM{{amount}} MYR",
    money_no_decimals_format: "RM{{amount_no_decimals}} MYR",
    money_with_currency_format: "RM{{amount}} MYR",
    money_no_decimals_with_currency_format: "RM{{amount_no_decimals}} MYR"
  },
  MUR: {
    money_format: "Rs {{amount}}",
    money_no_decimals_format: "Rs {{amount_no_decimals}}",
    money_with_currency_format: "Rs {{amount}} MUR",
    money_no_decimals_with_currency_format: "Rs {{amount_no_decimals}} MUR"
  },
  MDL: {
    money_format: "{{amount}} MDL",
    money_no_decimals_format: "{{amount_no_decimals}} MDL",
    money_with_currency_format: "{{amount}} MDL",
    money_no_decimals_with_currency_format: "{{amount_no_decimals}} MDL"
  },
  MAD: {
    money_format: "{{amount}} dh",
    money_no_decimals_format: "{{amount_no_decimals}} dh",
    money_with_currency_format: "Dh {{amount}} MAD",
    money_no_decimals_with_currency_format: "Dh {{amount_no_decimals}} MAD"
  },
  MNT: {
    money_format: "{{amount_no_decimals}} &#8366",
    money_no_decimals_format: "{{amount_no_decimals}} &#8366",
    money_with_currency_format: "{{amount_no_decimals}} MNT",
    money_no_decimals_with_currency_format: "{{amount_no_decimals}} MNT"
  },
  MZN: {
    money_format: "{{amount}} Mt",
    money_no_decimals_format: "{{amount_no_decimals}} Mt",
    money_with_currency_format: "Mt {{amount}} MZN",
    money_no_decimals_with_currency_format: "Mt {{amount_no_decimals}} MZN"
  },
  NAD: {
    money_format: "N${{amount}}",
    money_no_decimals_format: "N${{amount_no_decimals}}",
    money_with_currency_format: "N${{amount}} NAD",
    money_no_decimals_with_currency_format: "N${{amount_no_decimals}} NAD"
  },
  NPR: {
    money_format: "Rs{{amount}}",
    money_no_decimals_format: "Rs{{amount_no_decimals}}",
    money_with_currency_format: "Rs{{amount}} NPR",
    money_no_decimals_with_currency_format: "Rs{{amount_no_decimals}} NPR"
  },
  ANG: {
    money_format: "&fnof;{{amount}}",
    money_no_decimals_format: "&fnof;{{amount_no_decimals}}",
    money_with_currency_format: "{{amount}} NA&fnof;",
    money_no_decimals_with_currency_format: "{{amount_no_decimals}} NA&fnof;"
  },
  NZD: {
    money_format: "${{amount}}",
    money_no_decimals_format: "${{amount_no_decimals}}",
    money_with_currency_format: "${{amount}} NZD",
    money_no_decimals_with_currency_format: "${{amount_no_decimals}} NZD"
  },
  NIO: {
    money_format: "C${{amount}}",
    money_no_decimals_format: "C${{amount_no_decimals}}",
    money_with_currency_format: "C${{amount}} NIO",
    money_no_decimals_with_currency_format: "C${{amount_no_decimals}} NIO"
  },
  NGN: {
    money_format: "&#8358;{{amount}}",
    money_no_decimals_format: "&#8358;{{amount_no_decimals}}",
    money_with_currency_format: "&#8358;{{amount}} NGN",
    money_no_decimals_with_currency_format: "&#8358;{{amount_no_decimals}} NGN"
  },
  NOK: {
    money_format: "kr {{amount_with_comma_separator}}",
    money_no_decimals_format: "kr {{amount_with_comma_separator}}",
    money_with_currency_format: "kr {{amount_with_comma_separator}} NOK",
    money_no_decimals_with_currency_format: "kr {{amount_with_comma_separator}} NOK"
  },
  OMR: {
    money_format: "{{amount_with_comma_separator}} OMR",
    money_no_decimals_format: "{{amount_with_comma_separator}} OMR",
    money_with_currency_format: "{{amount_with_comma_separator}} OMR",
    money_no_decimals_with_currency_format: "{{amount_with_comma_separator}} OMR"
  },
  PKR: {
    money_format: "Rs.{{amount}}",
    money_no_decimals_format: "Rs.{{amount_no_decimals}}",
    money_with_currency_format: "Rs.{{amount}} PKR",
    money_no_decimals_with_currency_format: "Rs.{{amount_no_decimals}} PKR"
  },
  PGK: {
    money_format: "K {{amount}}",
    money_no_decimals_format: "K {{amount_no_decimals}}",
    money_with_currency_format: "K {{amount}} PGK",
    money_no_decimals_with_currency_format: "K {{amount_no_decimals}} PGK"
  },
  PYG: {
    money_format: "Gs. {{amount_no_decimals_with_comma_separator}}",
    money_no_decimals_format: "Gs. {{amount_no_decimals_with_comma_separator}}",
    money_with_currency_format: "Gs. {{amount_no_decimals_with_comma_separator}} PYG",
    money_no_decimals_with_currency_format: "Gs. {{amount_no_decimals_with_comma_separator}} PYG"
  },
  PEN: {
    money_format: "S/. {{amount}}",
    money_no_decimals_format: "S/. {{amount_no_decimals}}",
    money_with_currency_format: "S/. {{amount}} PEN",
    money_no_decimals_with_currency_format: "S/. {{amount_no_decimals}} PEN"
  },
  PHP: {
    money_format: "&#8369;{{amount}}",
    money_no_decimals_format: "&#8369;{{amount_no_decimals}}",
    money_with_currency_format: "&#8369;{{amount}} PHP",
    money_no_decimals_with_currency_format: "&#8369;{{amount_no_decimals}} PHP"
  },
  PLN: {
    money_format: "{{amount_with_comma_separator}} zl",
    money_no_decimals_format: "{{amount_with_comma_separator}} zl",
    money_with_currency_format: "{{amount_with_comma_separator}} zl PLN",
    money_no_decimals_with_currency_format: "{{amount_with_comma_separator}} zl PLN"
  },
  QAR: {
    money_format: "QAR {{amount_with_comma_separator}}",
    money_no_decimals_format: "QAR {{amount_with_comma_separator}}",
    money_with_currency_format: "QAR {{amount_with_comma_separator}}",
    money_no_decimals_with_currency_format: "QAR {{amount_with_comma_separator}}"
  },
  RON: {
    money_format: "{{amount_with_comma_separator}} lei",
    money_no_decimals_format: "{{amount_with_comma_separator}} lei",
    money_with_currency_format: "{{amount_with_comma_separator}} lei RON",
    money_no_decimals_with_currency_format: "{{amount_with_comma_separator}} lei RON"
  },
  RUB: {
    money_format: "&#1088;&#1091;&#1073;{{amount_with_comma_separator}}",
    money_no_decimals_format: "&#1088;&#1091;&#1073;{{amount_with_comma_separator}}",
    money_with_currency_format: "&#1088;&#1091;&#1073;{{amount_with_comma_separator}} RUB",
    money_no_decimals_with_currency_format: "&#1088;&#1091;&#1073;{{amount_with_comma_separator}} RUB"
  },
  RWF: {
    money_format: "{{amount_no_decimals}} RF",
    money_no_decimals_format: "{{amount_no_decimals}} RF",
    money_with_currency_format: "{{amount_no_decimals}} RWF",
    money_no_decimals_with_currency_format: "{{amount_no_decimals}} RWF"
  },
  WST: {
    money_format: "WS$ {{amount}}",
    money_no_decimals_format: "WS$ {{amount_no_decimals}}",
    money_with_currency_format: "WS$ {{amount}} WST",
    money_no_decimals_with_currency_format: "WS$ {{amount_no_decimals}} WST"
  },
  SAR: {
    money_format: "{{amount}} SR",
    money_no_decimals_format: "{{amount_no_decimals}} SR",
    money_with_currency_format: "{{amount}} SAR",
    money_no_decimals_with_currency_format: "{{amount_no_decimals}} SAR"
  },
  STD: {
    money_format: "Db {{amount}}",
    money_no_decimals_format: "Db {{amount_no_decimals}}",
    money_with_currency_format: "Db {{amount}} STD",
    money_no_decimals_with_currency_format: "Db {{amount_no_decimals}} STD"
  },
  RSD: {
    money_format: "{{amount}} RSD",
    money_no_decimals_format: "{{amount_no_decimals}} RSD",
    money_with_currency_format: "{{amount}} RSD",
    money_no_decimals_with_currency_format: "{{amount_no_decimals}} RSD"
  },
  SCR: {
    money_format: "Rs {{amount}}",
    money_no_decimals_format: "Rs {{amount_no_decimals}}",
    money_with_currency_format: "Rs {{amount}} SCR",
    money_no_decimals_with_currency_format: "Rs {{amount_no_decimals}} SCR"
  },
  SGD: {
    money_format: "${{amount}}",
    money_no_decimals_format: "${{amount_no_decimals}}",
    money_with_currency_format: "${{amount}} SGD",
    money_no_decimals_with_currency_format: "${{amount_no_decimals}} SGD"
  },
  SYP: {
    money_format: "S&pound;{{amount}}",
    money_no_decimals_format: "S&pound;{{amount_no_decimals}}",
    money_with_currency_format: "S&pound;{{amount}} SYP",
    money_no_decimals_with_currency_format: "S&pound;{{amount_no_decimals}} SYP"
  },
  ZAR: {
    money_format: "R {{amount}}",
    money_no_decimals_format: "R {{amount_no_decimals}}",
    money_with_currency_format: "R {{amount}} ZAR",
    money_no_decimals_with_currency_format: "R {{amount_no_decimals}} ZAR"
  },
  KRW: {
    money_format: "&#8361;{{amount_no_decimals}}",
    money_no_decimals_format: "&#8361;{{amount_no_decimals}}",
    money_with_currency_format: "&#8361;{{amount_no_decimals}} KRW",
    money_no_decimals_with_currency_format: "&#8361;{{amount_no_decimals}} KRW"
  },
  LKR: {
    money_format: "Rs {{amount}}",
    money_no_decimals_format: "Rs {{amount_no_decimals}}",
    money_with_currency_format: "Rs {{amount}} LKR",
    money_no_decimals_with_currency_format: "Rs {{amount_no_decimals}} LKR"
  },
  SEK: {
    money_format: "{{amount_no_decimals}} kr",
    money_no_decimals_format: "{{amount_no_decimals}} kr",
    money_with_currency_format: "{{amount_no_decimals}} kr SEK",
    money_no_decimals_with_currency_format: "{{amount_no_decimals}} kr SEK"
  },
  CHF: {
    money_format: "SFr. {{amount}}",
    money_no_decimals_format: "SFr. {{amount_no_decimals}}",
    money_with_currency_format: "SFr. {{amount}} CHF",
    money_no_decimals_with_currency_format: "SFr. {{amount_no_decimals}} CHF"
  },
  TWD: {
    money_format: "${{amount}}",
    money_no_decimals_format: "${{amount_no_decimals}}",
    money_with_currency_format: "${{amount}} TWD",
    money_no_decimals_with_currency_format: "${{amount_no_decimals}} TWD"
  },
  THB: {
    money_format: "{{amount}} &#xe3f;",
    money_no_decimals_format: "{{amount_no_decimals}} &#xe3f;",
    money_with_currency_format: "{{amount}} &#xe3f; THB",
    money_no_decimals_with_currency_format: "{{amount_no_decimals}} &#xe3f; THB"
  },
  TZS: {
    money_format: "{{amount}} TZS",
    money_no_decimals_format: "{{amount_no_decimals}} TZS",
    money_with_currency_format: "{{amount}} TZS",
    money_no_decimals_with_currency_format: "{{amount_no_decimals}} TZS"
  },
  TTD: {
    money_format: "${{amount}}",
    money_no_decimals_format: "${{amount_no_decimals}}",
    money_with_currency_format: "${{amount}} TTD",
    money_no_decimals_with_currency_format: "${{amount_no_decimals}} TTD"
  },
  TND: {
    money_format: "{{amount}}",
    money_no_decimals_format: "{{amount_no_decimals}}",
    money_with_currency_format: "{{amount}} DT",
    money_no_decimals_with_currency_format: "{{amount_no_decimals}} DT"
  },
  TRY: {
    money_format: "{{amount}}TL",
    money_no_decimals_format: "{{amount_no_decimals}}TL",
    money_with_currency_format: "{{amount}}TL",
    mon_no_decimalsey_with_currency_format: "{{amount_no_decimals}}TL"
  },
  UGX: {
    money_format: "Ush {{amount_no_decimals}}",
    money_no_decimals_format: "Ush {{amount_no_decimals}}",
    money_with_currency_format: "Ush {{amount_no_decimals}} UGX",
    money_no_decimals_with_currency_format: "Ush {{amount_no_decimals}} UGX"
  },
  UAH: {
    money_format: "₴{{amount}}",
    money_no_decimals_format: "₴{{amount_no_decimals}}",
    money_with_currency_format: "₴{{amount}} UAH",
    money_no_decimals_with_currency_format: "₴{{amount_no_decimals}} UAH"
  },
  AED: {
    money_format: "Dhs. {{amount}}",
    money_no_decimals_format: "Dhs. {{amount_no_decimals}}",
    money_with_currency_format: "Dhs. {{amount}} AED",
    money_no_decimals_with_currency_format: "Dhs. {{amount_no_decimals}} AED"
  },
  UYU: {
    money_format: "${{amount_with_comma_separator}}",
    money_no_decimals_format: "${{amount_with_comma_separator}}",
    money_with_currency_format: "${{amount_with_comma_separator}} UYU",
    money_no_decimals_with_currency_format: "${{amount_with_comma_separator}} UYU"
  },
  VUV: {
    money_format: "${{amount}}",
    money_no_decimals_format: "${{amount_no_decimals}}",
    money_with_currency_format: "${{amount}}VT",
    money_no_decimals_with_currency_format: "${{amount_no_decimals}}VT"
  },
  VEF: {
    money_format: "Bs. {{amount_with_comma_separator}}",
    money_no_decimals_format: "Bs. {{amount_with_comma_separator}}",
    money_with_currency_format: "Bs. {{amount_with_comma_separator}} VEF",
    money_no_decimals_with_currency_format: "Bs. {{amount_with_comma_separator}} VEF"
  },
  VND: {
    money_format: "{{amount_no_decimals_with_comma_separator}}&#8363;",
    money_no_decimals_format: "{{amount_no_decimals_with_comma_separator}}&#8363;",
    money_with_currency_format: "{{amount_no_decimals_with_comma_separator}} VND",
    money_no_decimals_with_currency_format: "{{amount_no_decimals_with_comma_separator}} VND"
  },
  XBT: {
    money_format: "{{amount_no_decimals}} BTC",
    money_no_decimals_format: "{{amount_no_decimals}} BTC",
    money_with_currency_format: "{{amount_no_decimals}} BTC",
    money_no_decimals_with_currency_format: "{{amount_no_decimals}} BTC"
  },
  XOF: {
    money_format: "CFA{{amount}}",
    money_no_decimals_format: "CFA{{amount_no_decimals}}",
    money_with_currency_format: "CFA{{amount}} XOF",
    money_no_decimals_with_currency_format: "CFA{{amount_no_decimals}} XOF"
  },
  ZMW: {
    money_format: "K{{amount_no_decimals_with_comma_separator}}",
    money_no_decimals_format: "K{{amount_no_decimals_with_comma_separator}}",
    money_with_currency_format: "ZMW{{amount_no_decimals_with_comma_separator}}",
    money_no_decimals_with_currency_format: "ZMW{{amount_no_decimals_with_comma_separator}}"
  }
};

Currency.formatMoney = function(cents, format) {
  if (typeof Shopify.formatMoney === 'function') {
    return Shopify.formatMoney(cents, format);
  }
  if (typeof cents == 'string') { cents = cents.replace('.',''); }
  var value = '';
  var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
  var formatString = format || '${{amount}}';
  function defaultOption(opt, def) {
     return (typeof opt == 'undefined' ? def : opt);
  }
  function formatWithDelimiters(number, precision, thousands, decimal) {
    precision = defaultOption(precision, 2);
    thousands = defaultOption(thousands, ',');
    decimal   = defaultOption(decimal, '.');
    if (isNaN(number) || number == null) { return 0; }
    number = (number/100.0).toFixed(precision);
    var parts   = number.split('.'),
        dollars = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands),
        cents   = parts[1] ? (decimal + parts[1]) : '';
    return dollars + cents;
  }
  switch(formatString.match(placeholderRegex)[1]) {
    case 'amount':
      value = formatWithDelimiters(cents, 2);
      break;
    case 'amount_no_decimals':
      value = formatWithDelimiters(cents, 0);
      break;
    case 'amount_with_comma_separator':
      value = formatWithDelimiters(cents, 2, '.', ',');
      break;
    case 'amount_no_decimals_with_comma_separator':
      value = formatWithDelimiters(cents, 0, '.', ',');
      break;
    case 'amount_no_decimals_with_space_separator':
      value = formatWithDelimiters(cents, 0, ' ');
      break;
    case 'amount_with_apostrophe_separator':
      value = formatWithDelimiters(cents, 2, "'");
      break;
  }
  return formatString.replace(placeholderRegex, value);
};
  
Currency.currentCurrency = '';

Currency.format = 'money_with_currency_format';

Currency.convertAll = function(oldCurrency, newCurrency, selector, format) {
  jQuery(selector || 'span.money').each(function() {
    // If the amount has already been converted, we leave it alone.
    if (jQuery(this).attr('data-currency') === newCurrency) return;
    // If we are converting to a currency that we have saved, we will use the saved amount.
    if (jQuery(this).attr('data-currency-'+newCurrency)) {
      jQuery(this).html(jQuery(this).attr('data-currency-'+newCurrency));
    }
    else {
      // Converting to Y for the first time? Let's get to it!
      var cents = 0.0;
      var oldFormat = Currency.moneyFormats[oldCurrency][format || Currency.format] || '{{amount}}';
      var newFormat = Currency.moneyFormats[newCurrency][format || Currency.format] || '{{amount}}';
      if (oldFormat.indexOf('amount_no_decimals') !== -1) {
        cents = Currency.convert(parseInt(jQuery(this).html().replace(/[^0-9]/g, ''), 10)*100, oldCurrency, newCurrency);
      }
      else if (oldCurrency === 'JOD' || oldCurrency == 'KWD' || oldCurrency == 'BHD') {
        cents = Currency.convert(parseInt(jQuery(this).html().replace(/[^0-9]/g, ''), 10)/10, oldCurrency, newCurrency);
      }
      else { 
        cents = Currency.convert(parseInt(jQuery(this).html().replace(/[^0-9]/g, ''), 10), oldCurrency, newCurrency);
      }
      var newFormattedAmount = Currency.formatMoney(cents, newFormat);
      jQuery(this).html(newFormattedAmount);
      jQuery(this).attr('data-currency-'+newCurrency, newFormattedAmount);
    }
    // We record the new currency locally.
    jQuery(this).attr('data-currency', newCurrency);
  });
  this.currentCurrency = newCurrency;
  if(sp_nt_storage) {localStorage.setItem('T4Currency', newCurrency)}
};