import T31G from "../assets/phones/T31G.webp";
import T33G from "../assets/phones/T33G.webp";
import T53W from "../assets/phones/T53W.webp";
import T54W from "../assets/phones/T54W.webp";
import T57W from "../assets/phones/T57W.webp";
import T58W from "../assets/phones/T58W.webp";
import W78P from "../assets/cordless/W78P.webp";
import W73P from "../assets/cordless/YEA-W73P.webp";
import W59R from "../assets/cordless/YEA-W59R.webp";
import W73H from "../assets/cordless/YEA-W73H.webp";
import W78H from "../assets/cordless/YEA-W78H.webp";
import W80B from "../assets/cordless/YEA-W80B.webp"
import W79P from "../assets/cordless/YEA-W79P.webp";
import CP935W from "../assets/conference/YEA-CP935W.webp";
import BH71 from "../assets/headsets/YEA-BH71-PRO.webp";
import BH76 from "../assets/headsets/YEA-BH76.webp";
import WH62M from "../assets/headsets/YEA-WH62-MONO.webp";
import WH62D from "../assets/headsets/WH62D.webp";
import BH71WP from "../assets/headsets/YEA-BH71-WORKSTATION-PRO.webp";
import EXP50 from "../assets/accessories/EXP50.webp";
import HT812AA from "../assets/accessories/HT812.webp";
import WM from "../assets/accessories/WallMount.webp";
import T31GDS from "../assets/dataSheets/Yealink T31G Data Sheet.pdf";
import T33GDS from "../assets/dataSheets/Yealink T33G Data Sheet.pdf";
import T53WDS from "../assets/dataSheets/Yealink T53W Data Sheet.pdf";
import T54WDS from "../assets/dataSheets/Yealink T54W Data Sheet.pdf";
import T57WDS from "../assets/dataSheets/Yealink T57W Data Sheet.pdf";
import T58WDS from "../assets/dataSheets/Yealink T58W Data Sheet.pdf";
import W73HDS from "../assets/dataSheets/Yealink W73H.pdf";
import W73PDS from "../assets/dataSheets/Yealink W73P.pdf";
import W78HDS from "../assets/dataSheets/Yealink W78H.pdf";
import W78PDS from "../assets/dataSheets/Yealink W78P.pdf";
import W79PDS from "../assets/dataSheets/Yealink W79P.pdf";
import W80BDS from "../assets/dataSheets/Yealink W80.pdf";
import W59RDS from "../assets/dataSheets/Yealink W59R.pdf";
import CP935WDS from "../assets/dataSheets/Yealink CP935W.pdf";
import BH71DS from "../assets/dataSheets/Yealink BH71.pdf";
import BH76DS from "../assets/dataSheets/Yealink BH76.pdf";
import WH62DS from "../assets/dataSheets/Yealink WH62.pdf";
import BH71WPDS from "../assets/dataSheets/Yealink BH71.pdf";
import EXP50DS from "../assets/dataSheets/Yealink EXP50.pdf";

export const PRODUCTS = [
    {
        id: 1,
        productName: "Yealink T31G",
        price: 69.95,
        image: T31G,
        category: "phones",
        description: "Powerful but simple phone with a small footprint. Great for lobbies, labs, and classrooms.",
        details: [
            "2.3” black and white display",
            "2 programmable keys",
            "Dual-port gigabit ethernet",
            "PoE support",
            "Wall mountable",
        ],
        dataSheet: T31GDS,
    },
    {
        id: 2,
        productName: "Yealink T33G",
        price: 89.95,
        image: T33G,
        category: "phones",
        description: "High quality and cost effective. This color screen phone is perfect for small and large office settings.",
        details: [
            "2.4” color display",
            "12 programmable keys",
            "Dual-port gigabit ethernet",
            "PoE support",
            "Wall mountable",
        ],
        dataSheet: T33GDS,
    },
    {
        id: 3,
        productName: "Yealink T53W",
        price: 154.95,
        image: T53W,
        category: "phones",
        description: "This elegant, entry-level executive phone is powerful and maximizes efficiency with included Wi-Fi and Bluetooth.",
        details: [
            "3.7” adjustable black and white display",
            "21 programmable keys",
            "Dual-port gigabit ethernet",
            "Built-in Bluetooth and Wi-Fi connectivity",
            "PoE support",
        ],
        dataSheet: T53WDS,
    },
    {
        id: 4,
        productName: "Yealink T54W",
        price: 189.95,
        image: T54W,
        category: "phones",
        description: "Tailored to high performance executives and professionals. This expandable desk phone is the go-to for large volume workflows.",
        details: [
            "4.3” adjustable color display",
            "27 programmable keys",
            "Dual-port gigabit ethernet",
            "Built-in Bluetooth and Wi-Fi connectivity",
            "Compatible with EXP50 sidecar",
        ],
        dataSheet: T54WDS,
    },
    {
        id: 5,
        productName: "Yealink T57W",
        price: 249.95,
        image: T57W,
        category: "phones",
        description: "The perfect business phone for busy professionals. Its adjustable 7-inch touch screen ensures comfort, rich visuals, and easy navigation.",
        details: [
            "7” adjustable touch screen",
            "29 programmable keys",
            "Dual-port gigabit ethernet",
            "Built-in Bluetooth and Wi-Fi connectivity",
            "Compatible with EXP50 sidecar",
        ],
        dataSheet: T57WDS,
    },
    {
        id: 6,
        productName: "Yealink T58W",
        price: 374.95,
        image: T58W,
        category: "phones",
        description: "A brilliant touchscreen and built-in webcam make this top of the line phone perfect for visionary executives that love the cutting-edge.",
        details: [
            "7” adjustable touch screen",
            "27 programmable keys",
            "Video conferencing camera",
            "Built-in Bluetooth and Wi-Fi connectivity",
            "Compatible with EXP50 sidecar",
        ],
        dataSheet: T58WDS,
    },
    {
        id: 7,
        productName: "Yealink W73 Pair",
        price: 149.95,
        image: W73P,
        category: "cordless",
        description: "Designed for modern business on the move, this sleek device offers extended battery life for lasting mobility.",
        details: [
            "Base: supports up to 10 cordless handsets",
            "Handset: Up to 35-hour talk time (in ideal conditions)",
            "Handset: Up to 400-hour standby time (in ideal conditions)",
            "Handset: 1.8” color screen",
            "Handset range: Minimum 160ft indoor, maximum 1,000ft line of sight",
        ],
        dataSheet: W73PDS,
    },
    {
        id: 8,
        productName: "Yealink W78 Pair",
        price: 184.95,
        image: W78P,
        category: "cordless",
        description: "With a stylish design and a generous screen, this durable device is your reliable companion for the mobile professional.",
        details: [
            "Base: supports up to 10 cordless handsets",
            "Handset: Up to 21-hour talk time (in ideal conditions)",
            "Handset: Up to 166-hour standby time (in ideal conditions)",
            "Handset: 2.4” color screen",
            "Handset range: Minimum 160ft indoor, maximum 1,000ft line of sight",
        ],
        dataSheet: W78PDS,
    },
    {
        id: 9,
        productName: "Yealink W79 Pair (Rugged)",
        price: 264.95,
        image: W79P,
        category: "cordless",
        description: "This rugged device resists dust, water, and drops, ensuring lasting durability in any environment.",
        details: [
            "Base: supports up to 10 cordless handsets",
            "Handset: Up to 28-hour talk time (in ideal conditions)",
            "Handset: Alarm functions for occupational safety",
            "Handset: 1.8\" Color Screen",
            "Handset range: Minimum 160ft indoor, maximum 1,000ft line of sight",
        ],
        dataSheet: W79PDS,
    },
    {
        id: 10,
        productName: "Yealink W73H (Handset Only)",
        price: 84.95,
        image: W73H,
        category: "cordless",
        description: "Designed for modern business on the move, this sleek device offers extended battery life for lasting mobility.",
        details: [
            "Range: Minimum 160ft indoor, maximum 1,000ft line of sight",
            "Up to 35-hour talk time (in ideal conditions)",
            "Up to 400-hour standby time (in ideal conditions)",
            "1.8\" color screen",
            "Quick charge - 10-min charge time for 2-hour talk time",
        ],
        dataSheet: W73HDS,
    },
    {
        id: 11,
        productName: "Yealink W78H (Handset Only)",
        price: 119.95,
        image: W78H,
        category: "cordless",
        description: "With a stylish design and a generous screen, this durable device is your reliable companion for the mobile professional.",
        details: [
            "Range: Minimum 160ft indoor, maximum 1,000ft line of sight",
            "Up to 21-hour talk time (in ideal conditions)",
            "Up to 166-hour standby time (in ideal conditions)",
            "2.4\" color screen",
            "Quick charge - 10-min charge time for 2-hour talk time",
        ],
        dataSheet: W78HDS,
    },

    {
        id: 12,
        productName: "Yealink W59 (Handset Only)",
        price: 194.95,
        image: W59R,
        category: "cordless",
        description: "This rugged device resists dust, water, and drops, ensuring lasting durability in any environment.",
        details: [
            "Alarm functions for occupational safety: push-button alarm, no-movement alarm, mandown alarm and running alarm",
            "Scratch resistant, disinfectant resistant",
            "Up to 28-hour talk time (in ideal conditions)",
            "Up to 360-hour standby time (in ideal conditions)",
            "1.8\" color screen and built-in Bluetooth",
        ],
        dataSheet: W59RDS,
    },
    {
        id: 13,
        productName: "Yealink W80 Base",
        price: 274.95,
        image: W80B,
        category: "cordless",
        description: "Unleash seamless connectivity with a wireless mesh system, keeping even the largest offices mobile.",
        details: [
            "Supports up to 100 handsets",
            "Compatible with most handsets (W56H/W73H/W78H/W59R)",
            "Requires a W80DM",
        ],
        dataSheet: W80BDS,
    },
    {
        id: 14,
        productName: "Yealink W80 Device Manager",
        price: 274.95,
        image: W80B,
        category: "cordless",
        description: "Unleash seamless connectivity with a wireless mesh system, keeping even the largest offices mobile.",
        details: [
            "Supports up to 30 W80 base stations",
            "PoE support",
            "Requires at least two W80 base stations",
        ],
        dataSheet: W80BDS,
    },
    {
        id: 15,
        productName: "Yealink CP935W",
        price: 529.95,
        image: CP935W,
        category: "conference",
        description: "Ideal for mid-sized rooms, 6 built-in microphones deliver crystal-clear audio with noise suppression technology.",
        details: [
            "5-way conference calling",
            "Built-in rechargeable lithium battery",
            "Up to 20 hours talk time (in ideal conditions)",
            "20-foot (6-meter) and 360° voice pickup",
            "Built-in Bluetooth and WiFi connectivity",
        ],
        dataSheet: CP935WDS,
    },
    {
        id: 16,
        productName: "Yealink BH71",
        price: 79.95,
        image: BH71,
        category: "headsets",
        description: "Sleek and compact, this headset offers clear audio and a long-lasting battery life, perfect for busy professionals on the move.",
        details: [
            "10 hour talk-time",
            "4-mic array for noise cancellation",
            "Wireless range of up to 100ft",
            "Adjustable ear hook for more comfortable wearing",
            "Fully charged in 90 minutes",
        ],
        dataSheet: BH71DS,
    },
    {
        id: 17,
        productName: "Yealink BH76",
        price: 184.95,
        image: BH76,
        category: "headsets",
        description: "Boasting 4 levels of active noise cancellation, this headset transforms any environment into a productive workspace.",
        details: [
            "Active Noise Cancellation",
            "Up to 40 hours wireless battery life",
            "Wireless range of up to 100ft",
            "Dual-side busylight for full visible angles",
            "Fully charged in 2 hours",
        ],
        dataSheet: BH76DS,
    },
    {
        id: 18,
        productName: "Yealink WH62 Mono",
        price: 124.95,
        image: WH62M,
        category: "headsets",
        description: "Enjoy superior sound quality with convenient on-ear controls for uninterrupted and comfortable communication or collaboration.",
        details: [
            "Talking time up to 13 hours",
            "Adjustable boom arm of 320°",
            "Wireless range of up to 500ft",
            "Single, over the ear design",
            "Charge time of 2.5 hours",
        ],
        dataSheet: WH62DS,
    },
    {
        id: 19,
        productName: "Yealink WH62 Dual",
        price: 134.95,
        image: WH62D,
        category: "headsets",
        description: "Enjoy superior sound quality with convenient on-ear controls for uninterrupted and comfortable communication or collaboration.",
        details: [
            "Talking time up to 14 hours",
            "Adjustable boom arm of 320°",
            "Wireless range of up to 500ft",
            "Dual, over the ear design",
            "Charge time of 2.5 hours",
        ],
        dataSheet: WH62DS,
    },
    {
        id: 20,
        productName: "Yealink BH71 Workstation Pro",
        price: 269.95,
        image: BH71WP,
        category: "headsets",
        description: "Simultaneously connect to your desk phone, PC, and smartphone for an integrated communication experience, streamlining your connectivity across devices.",
        details: [
            "Includes BH71 Bluetooth headset",
            "Portable charging case for hybrid work",
            "Connect to desk phone, PC, mobile phone",
            "3-inch touch screen & speakerphone mode",
            "Built-in 3 USB Hub & Qi wireless charger",
        ],
        dataSheet: BH71WPDS,
    },

    {
        id: 21,
        productName: "Yealink EXP50 Sidercar",
        price: 108.95,
        image: EXP50,
        category: "accessories",
        description: "The Yealink EXP50 features a large color LCD, giving you a vivid visual experience. In addition, it provides you with a simple user interface and advanced call handling capabilities.",
        details: [
        ],
        dataSheet: EXP50DS,
    },
    {
        id: 22,
        productName: "Grandstream HT812 Analog Adapter",
        price: 47.95,
        image: HT812AA,
        category: "accessories",
        description: "Designed for users looking to connect their analog devices to a VoIP network at home or in the office. The HT812 is a powerful analog telephone adapter that is easily deployable and manageable. It comes equipped with 2 FXS ports and an integrated Gigabit NAT router.",
        details: [
        ]
    },
    {
        id: 23,
        productName: "Yealink Wall Mount",
        price: 6.95,
        image: WM,
        category: "accessories",
        description: "Securely mount devices with the Yealink Wall Mount Bracket. This bracket is compatible with the Yealink SIP-T40P, SIP-T41S/41P, SIP-T42S/T42G IP Phones.",
        details: [
        ]
    },
]