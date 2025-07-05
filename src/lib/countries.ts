const countries = [
  {
    name: "Aruba",
    code: "aw",
    emoji: "🇦🇼",
  },
  {
    name: "Afghanistan",
    code: "af",
    emoji: "🇦🇫",
  },
  {
    name: "Angola",
    code: "ao",
    emoji: "🇦🇴",
  },
  {
    name: "Anguilla",
    code: "ai",
    emoji: "🇦🇮",
  },
  {
    name: "Åland Islands",
    code: "ax",
    emoji: "🇦🇽",
  },
  {
    name: "Albania",
    code: "al",
    emoji: "🇦🇱",
  },
  {
    name: "Andorra",
    code: "ad",
    emoji: "🇦🇩",
  },
  {
    name: "United Arab Emirates",
    code: "ae",
    emoji: "🇦🇪",
  },
  {
    name: "Argentina",
    code: "ar",
    emoji: "🇦🇷",
  },
  {
    name: "Armenia",
    code: "am",
    emoji: "🇦🇲",
  },
  {
    name: "American Samoa",
    code: "as",
    emoji: "🇦🇸",
  },
  {
    name: "Antarctica",
    code: "aq",
    emoji: "🇦🇶",
  },
  {
    name: "French Southern Territories",
    code: "tf",
    emoji: "🇹🇫",
  },
  {
    name: "Antigua and Barbuda",
    code: "ag",
    emoji: "🇦🇬",
  },
  {
    name: "Australia",
    code: "au",
    emoji: "🇦🇺",
  },
  {
    name: "Austria",
    code: "at",
    emoji: "🇦🇹",
  },
  {
    name: "Azerbaijan",
    code: "az",
    emoji: "🇦🇿",
  },
  {
    name: "Burundi",
    code: "bi",
    emoji: "🇧🇮",
  },
  {
    name: "Belgium",
    code: "be",
    emoji: "🇧🇪",
  },
  {
    name: "Benin",
    code: "bj",
    emoji: "🇧🇯",
  },
  {
    name: "Bonaire, Sint Eustatius and Saba",
    code: "bq",
    emoji: "🇧🇶",
  },
  {
    name: "Burkina Faso",
    code: "bf",
    emoji: "🇧🇫",
  },
  {
    name: "Bangladesh",
    code: "bd",
    emoji: "🇧🇩",
  },
  {
    name: "Bulgaria",
    code: "bg",
    emoji: "🇧🇬",
  },
  {
    name: "Bahrain",
    code: "bh",
    emoji: "🇧🇭",
  },
  {
    name: "Bahamas",
    code: "bs",
    emoji: "🇧🇸",
  },
  {
    name: "Bosnia and Herzegovina",
    code: "ba",
    emoji: "🇧🇦",
  },
  {
    name: "Saint Barthélemy",
    code: "bl",
    emoji: "🇧🇱",
  },
  {
    name: "Belarus",
    code: "by",
    emoji: "🇧🇾",
  },
  {
    name: "Belize",
    code: "bz",
    emoji: "🇧🇿",
  },
  {
    name: "Bermuda",
    code: "bm",
    emoji: "🇧🇲",
  },
  {
    name: "Bolivia, Plurinational State of",
    code: "bo",
    emoji: "🇧🇴",
  },
  {
    name: "Brazil",
    code: "br",
    emoji: "🇧🇷",
  },
  {
    name: "Barbados",
    code: "bb",
    emoji: "🇧🇧",
  },
  {
    name: "Brunei Darussalam",
    code: "bn",
    emoji: "🇧🇳",
  },
  {
    name: "Bhutan",
    code: "bt",
    emoji: "🇧🇹",
  },
  {
    name: "Bouvet Island",
    code: "bv",
    emoji: "🇧🇻",
  },
  {
    name: "Botswana",
    code: "bw",
    emoji: "🇧🇼",
  },
  {
    name: "Central African Republic",
    code: "cf",
    emoji: "🇨🇫",
  },
  {
    name: "Canada",
    code: "ca",
    emoji: "🇨🇦",
  },
  {
    name: "Cocos (Keeling) Islands",
    code: "cc",
    emoji: "🇨🇨",
  },
  {
    name: "Switzerland",
    code: "ch",
    emoji: "🇨🇭",
  },
  {
    name: "Chile",
    code: "cl",
    emoji: "🇨🇱",
  },
  {
    name: "China",
    code: "cn",
    emoji: "🇨🇳",
  },
  {
    name: "Côte d'Ivoire",
    code: "ci",
    emoji: "🇨🇮",
  },
  {
    name: "Cameroon",
    code: "cm",
    emoji: "🇨🇲",
  },
  {
    name: "Congo, The Democratic Republic of the",
    code: "cd",
    emoji: "🇨🇩",
  },
  {
    name: "Congo",
    code: "cg",
    emoji: "🇨🇬",
  },
  {
    name: "Cook Islands",
    code: "ck",
    emoji: "🇨🇰",
  },
  {
    name: "Colombia",
    code: "co",
    emoji: "🇨🇴",
  },
  {
    name: "Comoros",
    code: "km",
    emoji: "🇰🇲",
  },
  {
    name: "Cabo Verde",
    code: "cv",
    emoji: "🇨🇻",
  },
  {
    name: "Costa Rica",
    code: "cr",
    emoji: "🇨🇷",
  },
  {
    name: "Cuba",
    code: "cu",
    emoji: "🇨🇺",
  },
  {
    name: "Curaçao",
    code: "cw",
    emoji: "🇨🇼",
  },
  {
    name: "Christmas Island",
    code: "cx",
    emoji: "🇨🇽",
  },
  {
    name: "Cayman Islands",
    code: "ky",
    emoji: "🇰🇾",
  },
  {
    name: "Cyprus",
    code: "cy",
    emoji: "🇨🇾",
  },
  {
    name: "Czechia",
    code: "cz",
    emoji: "🇨🇿",
  },
  {
    name: "Germany",
    code: "de",
    emoji: "🇩🇪",
  },
  {
    name: "Djibouti",
    code: "dj",
    emoji: "🇩🇯",
  },
  {
    name: "Dominica",
    code: "dm",
    emoji: "🇩🇲",
  },
  {
    name: "Denmark",
    code: "dk",
    emoji: "🇩🇰",
  },
  {
    name: "Dominican Republic",
    code: "do",
    emoji: "🇩🇴",
  },
  {
    name: "Algeria",
    code: "dz",
    emoji: "🇩🇿",
  },
  {
    name: "Ecuador",
    code: "ec",
    emoji: "🇪🇨",
  },
  {
    name: "Egypt",
    code: "eg",
    emoji: "🇪🇬",
  },
  {
    name: "Eritrea",
    code: "er",
    emoji: "🇪🇷",
  },
  {
    name: "Western Sahara",
    code: "eh",
    emoji: "🇪🇭",
  },
  {
    name: "Spain",
    code: "es",
    emoji: "🇪🇸",
  },
  {
    name: "Estonia",
    code: "ee",
    emoji: "🇪🇪",
  },
  {
    name: "Ethiopia",
    code: "et",
    emoji: "🇪🇹",
  },
  {
    name: "Finland",
    code: "fi",
    emoji: "🇫🇮",
  },
  {
    name: "Fiji",
    code: "fj",
    emoji: "🇫🇯",
  },
  {
    name: "Falkland Islands (Malvinas)",
    code: "fk",
    emoji: "🇫🇰",
  },
  {
    name: "France",
    code: "fr",
    emoji: "🇫🇷",
  },
  {
    name: "Faroe Islands",
    code: "fo",
    emoji: "🇫🇴",
  },
  {
    name: "Micronesia, Federated States of",
    code: "fm",
    emoji: "🇫🇲",
  },
  {
    name: "Gabon",
    code: "ga",
    emoji: "🇬🇦",
  },
  {
    name: "United Kingdom",
    code: "gb",
    emoji: "🇬🇧",
  },
  {
    name: "Georgia",
    code: "ge",
    emoji: "🇬🇪",
  },
  {
    name: "Guernsey",
    code: "gg",
    emoji: "🇬🇬",
  },
  {
    name: "Ghana",
    code: "gh",
    emoji: "🇬🇭",
  },
  {
    name: "Gibraltar",
    code: "gi",
    emoji: "🇬🇮",
  },
  {
    name: "Guinea",
    code: "gn",
    emoji: "🇬🇳",
  },
  {
    name: "Guadeloupe",
    code: "gp",
    emoji: "🇬🇵",
  },
  {
    name: "Gambia",
    code: "gm",
    emoji: "🇬🇲",
  },
  {
    name: "Guinea-Bissau",
    code: "gw",
    emoji: "🇬🇼",
  },
  {
    name: "Equatorial Guinea",
    code: "gq",
    emoji: "🇬🇶",
  },
  {
    name: "Greece",
    code: "gr",
    emoji: "🇬🇷",
  },
  {
    name: "Grenada",
    code: "gd",
    emoji: "🇬🇩",
  },
  {
    name: "Greenland",
    code: "gl",
    emoji: "🇬🇱",
  },
  {
    name: "Guatemala",
    code: "gt",
    emoji: "🇬🇹",
  },
  {
    name: "French Guiana",
    code: "gf",
    emoji: "🇬🇫",
  },
  {
    name: "Guam",
    code: "gu",
    emoji: "🇬🇺",
  },
  {
    name: "Guyana",
    code: "gy",
    emoji: "🇬🇾",
  },
  {
    name: "Hong Kong",
    code: "hk",
    emoji: "🇭🇰",
  },
  {
    name: "Heard Island and McDonald Islands",
    code: "hm",
    emoji: "🇭🇲",
  },
  {
    name: "Honduras",
    code: "hn",
    emoji: "🇭🇳",
  },
  {
    name: "Croatia",
    code: "hr",
    emoji: "🇭🇷",
  },
  {
    name: "Haiti",
    code: "ht",
    emoji: "🇭🇹",
  },
  {
    name: "Hungary",
    code: "hu",
    emoji: "🇭🇺",
  },
  {
    name: "Indonesia",
    code: "id",
    emoji: "🇮🇩",
  },
  {
    name: "Isle of Man",
    code: "im",
    emoji: "🇮🇲",
  },
  {
    name: "India",
    code: "in",
    emoji: "🇮🇳",
  },
  {
    name: "British Indian Ocean Territory",
    code: "io",
    emoji: "🇮🇴",
  },
  {
    name: "Ireland",
    code: "ie",
    emoji: "🇮🇪",
  },
  {
    name: "Iran, Islamic Republic of",
    code: "ir",
    emoji: "🇮🇷",
  },
  {
    name: "Iraq",
    code: "iq",
    emoji: "🇮🇶",
  },
  {
    name: "Iceland",
    code: "is",
    emoji: "🇮🇸",
  },
  {
    name: "Israel",
    code: "il",
    emoji: "🇮🇱",
  },
  {
    name: "Italy",
    code: "it",
    emoji: "🇮🇹",
  },
  {
    name: "Jamaica",
    code: "jm",
    emoji: "🇯🇲",
  },
  {
    name: "Jersey",
    code: "je",
    emoji: "🇯🇪",
  },
  {
    name: "Jordan",
    code: "jo",
    emoji: "🇯🇴",
  },
  {
    name: "Japan",
    code: "jp",
    emoji: "🇯🇵",
  },
  {
    name: "Kazakhstan",
    code: "kz",
    emoji: "🇰🇿",
  },
  {
    name: "Kenya",
    code: "ke",
    emoji: "🇰🇪",
  },
  {
    name: "Kyrgyzstan",
    code: "kg",
    emoji: "🇰🇬",
  },
  {
    name: "Cambodia",
    code: "kh",
    emoji: "🇰🇭",
  },
  {
    name: "Kiribati",
    code: "ki",
    emoji: "🇰🇮",
  },
  {
    name: "Saint Kitts and Nevis",
    code: "kn",
    emoji: "🇰🇳",
  },
  {
    name: "Korea, Republic of",
    code: "kr",
    emoji: "🇰🇷",
  },
  {
    name: "Kuwait",
    code: "kw",
    emoji: "🇰🇼",
  },
  {
    name: "Lao People's Democratic Republic",
    code: "la",
    emoji: "🇱🇦",
  },
  {
    name: "Lebanon",
    code: "lb",
    emoji: "🇱🇧",
  },
  {
    name: "Liberia",
    code: "lr",
    emoji: "🇱🇷",
  },
  {
    name: "Libya",
    code: "ly",
    emoji: "🇱🇾",
  },
  {
    name: "Saint Lucia",
    code: "lc",
    emoji: "🇱🇨",
  },
  {
    name: "Liechtenstein",
    code: "li",
    emoji: "🇱🇮",
  },
  {
    name: "Sri Lanka",
    code: "lk",
    emoji: "🇱🇰",
  },
  {
    name: "Lesotho",
    code: "ls",
    emoji: "🇱🇸",
  },
  {
    name: "Lithuania",
    code: "lt",
    emoji: "🇱🇹",
  },
  {
    name: "Luxembourg",
    code: "lu",
    emoji: "🇱🇺",
  },
  {
    name: "Latvia",
    code: "lv",
    emoji: "🇱🇻",
  },
  {
    name: "Macao",
    code: "mo",
    emoji: "🇲🇴",
  },
  {
    name: "Saint Martin (French part)",
    code: "mf",
    emoji: "🇲🇫",
  },
  {
    name: "Morocco",
    code: "ma",
    emoji: "🇲🇦",
  },
  {
    name: "Monaco",
    code: "mc",
    emoji: "🇲🇨",
  },
  {
    name: "Moldova, Republic of",
    code: "md",
    emoji: "🇲🇩",
  },
  {
    name: "Madagascar",
    code: "mg",
    emoji: "🇲🇬",
  },
  {
    name: "Maldives",
    code: "mv",
    emoji: "🇲🇻",
  },
  {
    name: "Mexico",
    code: "mx",
    emoji: "🇲🇽",
  },
  {
    name: "Marshall Islands",
    code: "mh",
    emoji: "🇲🇭",
  },
  {
    name: "North Macedonia",
    code: "mk",
    emoji: "🇲🇰",
  },
  {
    name: "Mali",
    code: "ml",
    emoji: "🇲🇱",
  },
  {
    name: "Malta",
    code: "mt",
    emoji: "🇲🇹",
  },
  {
    name: "Myanmar",
    code: "mm",
    emoji: "🇲🇲",
  },
  {
    name: "Montenegro",
    code: "me",
    emoji: "🇲🇪",
  },
  {
    name: "Mongolia",
    code: "mn",
    emoji: "🇲🇳",
  },
  {
    name: "Northern Mariana Islands",
    code: "mp",
    emoji: "🇲🇵",
  },
  {
    name: "Mozambique",
    code: "mz",
    emoji: "🇲🇿",
  },
  {
    name: "Mauritania",
    code: "mr",
    emoji: "🇲🇷",
  },
  {
    name: "Montserrat",
    code: "ms",
    emoji: "🇲🇸",
  },
  {
    name: "Martinique",
    code: "mq",
    emoji: "🇲🇶",
  },
  {
    name: "Mauritius",
    code: "mu",
    emoji: "🇲🇺",
  },
  {
    name: "Malawi",
    code: "mw",
    emoji: "🇲🇼",
  },
  {
    name: "Malaysia",
    code: "my",
    emoji: "🇲🇾",
  },
  {
    name: "Mayotte",
    code: "yt",
    emoji: "🇾🇹",
  },
  {
    name: "Namibia",
    code: "na",
    emoji: "🇳🇦",
  },
  {
    name: "New Caledonia",
    code: "nc",
    emoji: "🇳🇨",
  },
  {
    name: "Niger",
    code: "ne",
    emoji: "🇳🇪",
  },
  {
    name: "Norfolk Island",
    code: "nf",
    emoji: "🇳🇫",
  },
  {
    name: "Nigeria",
    code: "ng",
    emoji: "🇳🇬",
  },
  {
    name: "Nicaragua",
    code: "ni",
    emoji: "🇳🇮",
  },
  {
    name: "Niue",
    code: "nu",
    emoji: "🇳🇺",
  },
  {
    name: "Netherlands",
    code: "nl",
    emoji: "🇳🇱",
  },
  {
    name: "Norway",
    code: "no",
    emoji: "🇳🇴",
  },
  {
    name: "Nepal",
    code: "np",
    emoji: "🇳🇵",
  },
  {
    name: "Nauru",
    code: "nr",
    emoji: "🇳🇷",
  },
  {
    name: "New Zealand",
    code: "nz",
    emoji: "🇳🇿",
  },
  {
    name: "Oman",
    code: "om",
    emoji: "🇴🇲",
  },
  {
    name: "Pakistan",
    code: "pk",
    emoji: "🇵🇰",
  },
  {
    name: "Panama",
    code: "pa",
    emoji: "🇵🇦",
  },
  {
    name: "Pitcairn",
    code: "pn",
    emoji: "🇵🇳",
  },
  {
    name: "Peru",
    code: "pe",
    emoji: "🇵🇪",
  },
  {
    name: "Philippines",
    code: "ph",
    emoji: "🇵🇭",
  },
  {
    name: "Palau",
    code: "pw",
    emoji: "🇵🇼",
  },
  {
    name: "Papua New Guinea",
    code: "pg",
    emoji: "🇵🇬",
  },
  {
    name: "Poland",
    code: "pl",
    emoji: "🇵🇱",
  },
  {
    name: "Puerto Rico",
    code: "pr",
    emoji: "🇵🇷",
  },
  {
    name: "Korea, Democratic People's Republic of",
    code: "kp",
    emoji: "🇰🇵",
  },
  {
    name: "Portugal",
    code: "pt",
    emoji: "🇵🇹",
  },
  {
    name: "Paraguay",
    code: "py",
    emoji: "🇵🇾",
  },
  {
    name: "Palestine, State of",
    code: "ps",
    emoji: "🇵🇸",
  },
  {
    name: "French Polynesia",
    code: "pf",
    emoji: "🇵🇫",
  },
  {
    name: "Qatar",
    code: "qa",
    emoji: "🇶🇦",
  },
  {
    name: "Réunion",
    code: "re",
    emoji: "🇷🇪",
  },
  {
    name: "Romania",
    code: "ro",
    emoji: "🇷🇴",
  },
  {
    name: "Russian Federation",
    code: "ru",
    emoji: "🇷🇺",
  },
  {
    name: "Rwanda",
    code: "rw",
    emoji: "🇷🇼",
  },
  {
    name: "Saudi Arabia",
    code: "sa",
    emoji: "🇸🇦",
  },
  {
    name: "Sudan",
    code: "sd",
    emoji: "🇸🇩",
  },
  {
    name: "Senegal",
    code: "sn",
    emoji: "🇸🇳",
  },
  {
    name: "Singapore",
    code: "sg",
    emoji: "🇸🇬",
  },
  {
    name: "South Georgia and the South Sandwich Islands",
    code: "gs",
    emoji: "🇬🇸",
  },
  {
    name: "Saint Helena, Ascension and Tristan da Cunha",
    code: "sh",
    emoji: "🇸🇭",
  },
  {
    name: "Svalbard and Jan Mayen",
    code: "sj",
    emoji: "🇸🇯",
  },
  {
    name: "Solomon Islands",
    code: "sb",
    emoji: "🇸🇧",
  },
  {
    name: "Sierra Leone",
    code: "sl",
    emoji: "🇸🇱",
  },
  {
    name: "El Salvador",
    code: "sv",
    emoji: "🇸🇻",
  },
  {
    name: "San Marino",
    code: "sm",
    emoji: "🇸🇲",
  },
  {
    name: "Somalia",
    code: "so",
    emoji: "🇸🇴",
  },
  {
    name: "Saint Pierre and Miquelon",
    code: "pm",
    emoji: "🇵🇲",
  },
  {
    name: "Serbia",
    code: "rs",
    emoji: "🇷🇸",
  },
  {
    name: "South Sudan",
    code: "ss",
    emoji: "🇸🇸",
  },
  {
    name: "Sao Tome and Principe",
    code: "st",
    emoji: "🇸🇹",
  },
  {
    name: "Suriname",
    code: "sr",
    emoji: "🇸🇷",
  },
  {
    name: "Slovakia",
    code: "sk",
    emoji: "🇸🇰",
  },
  {
    name: "Slovenia",
    code: "si",
    emoji: "🇸🇮",
  },
  {
    name: "Sweden",
    code: "se",
    emoji: "🇸🇪",
  },
  {
    name: "Eswatini",
    code: "sz",
    emoji: "🇸🇿",
  },
  {
    name: "Sint Maarten (Dutch part)",
    code: "sx",
    emoji: "🇸🇽",
  },
  {
    name: "Seychelles",
    code: "sc",
    emoji: "🇸🇨",
  },
  {
    name: "Syrian Arab Republic",
    code: "sy",
    emoji: "🇸🇾",
  },
  {
    name: "Turks and Caicos Islands",
    code: "tc",
    emoji: "🇹🇨",
  },
  {
    name: "Chad",
    code: "td",
    emoji: "🇹🇩",
  },
  {
    name: "Togo",
    code: "tg",
    emoji: "🇹🇬",
  },
  {
    name: "Thailand",
    code: "th",
    emoji: "🇹🇭",
  },
  {
    name: "Tajikistan",
    code: "tj",
    emoji: "🇹🇯",
  },
  {
    name: "Tokelau",
    code: "tk",
    emoji: "🇹🇰",
  },
  {
    name: "Turkmenistan",
    code: "tm",
    emoji: "🇹🇲",
  },
  {
    name: "Timor-Leste",
    code: "tl",
    emoji: "🇹🇱",
  },
  {
    name: "Tonga",
    code: "to",
    emoji: "🇹🇴",
  },
  {
    name: "Trinidad and Tobago",
    code: "tt",
    emoji: "🇹🇹",
  },
  {
    name: "Tunisia",
    code: "tn",
    emoji: "🇹🇳",
  },
  {
    name: "Turkey",
    code: "tr",
    emoji: "🇹🇷",
  },
  {
    name: "Tuvalu",
    code: "tv",
    emoji: "🇹🇻",
  },
  {
    name: "Taiwan, Province of China",
    code: "tw",
    emoji: "🇹🇼",
  },
  {
    name: "Tanzania, United Republic of",
    code: "tz",
    emoji: "🇹🇿",
  },
  {
    name: "Uganda",
    code: "ug",
    emoji: "🇺🇬",
  },
  {
    name: "Ukraine",
    code: "ua",
    emoji: "🇺🇦",
  },
  {
    name: "United States Minor Outlying Islands",
    code: "um",
    emoji: "🇺🇲",
  },
  {
    name: "Uruguay",
    code: "uy",
    emoji: "🇺🇾",
  },
  {
    name: "United States",
    code: "us",
    emoji: "🇺🇸",
  },
  {
    name: "Uzbekistan",
    code: "uz",
    emoji: "🇺🇿",
  },
  {
    name: "Holy See (Vatican City State)",
    code: "va",
    emoji: "🇻🇦",
  },
  {
    name: "Saint Vincent and the Grenadines",
    code: "vc",
    emoji: "🇻🇨",
  },
  {
    name: "Venezuela, Bolivarian Republic of",
    code: "ve",
    emoji: "🇻🇪",
  },
  {
    name: "Virgin Islands, British",
    code: "vg",
    emoji: "🇻🇬",
  },
  {
    name: "Virgin Islands, U.S.",
    code: "vi",
    emoji: "🇻🇮",
  },
  {
    name: "Viet Nam",
    code: "vn",
    emoji: "🇻🇳",
  },
  {
    name: "Vanuatu",
    code: "vu",
    emoji: "🇻🇺",
  },
  {
    name: "Wallis and Futuna",
    code: "wf",
    emoji: "🇼🇫",
  },
  {
    name: "Samoa",
    code: "ws",
    emoji: "🇼🇸",
  },
  {
    name: "Yemen",
    code: "ye",
    emoji: "🇾🇪",
  },
  {
    name: "South Africa",
    code: "za",
    emoji: "🇿🇦",
  },
  {
    name: "Zambia",
    code: "zm",
    emoji: "🇿🇲",
  },
  {
    name: "Zimbabwe",
    code: "zw",
    emoji: "🇿🇼",
  },
];
export default countries;
