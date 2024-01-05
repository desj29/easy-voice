import devices from "./assets/GuyOnLaptop.webp";
import teams from "./assets/AdobeStock_523407917_Editorial_Use_Only.webp";
import hotel from "./assets/AdobeStock_579459725.webp";

export const ADDONS = [
    {
        id: 1,
        productName: "Microsoft Teams",
        price: 2.00,
        per: "user",
        image: teams,
        description: "Enable seamless communication between Microsoft Teams users and external phone services. Make outbound calls directly from Teams using PBX resources, offering your business a comprehensive communication solution."
    },
    {
        id: 2,
        productName: "Vital PBX Connect",
        price: 1.50,
        per: "user",
        image: devices,
        description: "Integrating PBX technology with advanced mobile apps ensures you always stay connected and never miss crucial calls."
    },
    {
        id: 3,
        productName: "Vital PBX Hotel Management",
        price: 200,
        per: "month",
        image: hotel,
        description: "Efficiently manage your hotel using our hotel management module. It enables extension-based services like wake-up calls, private number routing, room billing, and more."
    },
]