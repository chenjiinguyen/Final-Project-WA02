let products = [
    {
        id: "cyberpunk",
        name: "Cyberpunk 2077",
        price: 990000,
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1607590317",

    }, {
        id: "minecraft",
        name: "Minecraft",
        price: 750000,
        image: "https://hgeqic7azi.vcdn.com.vn/image/catalog/wallet/minecraft-produktbild-460x215.png",
    }, {
        id: "reddeadonline",
        name: "Red Dead Online",
        price: 124000,
        image: "https://steamcdn-a.akamaihd.net/steam/apps/1404210/header.jpg",
    }, {
        id: "storiesuntold",
        name: "Stories Untold",
        price: 120000,
        image: "https://steamcdn-a.akamaihd.net/steam/apps/558420/header.jpg?t=1568650809",
    }, {
        id: "mainfoldgarden",
        name: "Mainfold Garden",
        price: 200000,
        image: "https://steamcdn-a.akamaihd.net/steam/apps/473950/header.jpg?t=1594919925",
    }, {
        id: "starwarjedi",
        name: "Star Wars Jedi",
        price: 1500000,
        image: "https://steamcdn-a.akamaihd.net/steam/apps/1172380/header.jpg?t=1593395933",
    }, {
        id: "control",
        name: "Control",
        price: 500000,
        image: "https://steamcdn-a.akamaihd.net/steam/apps/870780/header.jpg?t=1594979619",
    }, {
        id: "journey",
        name: "Journey",
        price: 165000,
        image: "https://steamcdn-a.akamaihd.net/steam/apps/638230/header.jpg?t=1593103586",
    }, {
        id: "odyssey",
        name: "Assassin's Creed® Odyssey",
        price: 326000,
        image: "https://steamcdn-a.akamaihd.net/steam/apps/812140/header.jpg?t=1595367552",
    }, {
        id: "origins",
        name: "Assassin's Creed® Origins",
        price: 198000,
        image: "https://steamcdn-a.akamaihd.net/steam/apps/582160/header.jpg?t=1575638190",
    }, {
        id: "ark",
        name: "ARK: Survival Evolved",
        price: 390000,
        image: "https://steamcdn-a.akamaihd.net/steam/apps/346110/header.jpg?t=1595349770",
    }, {
        id: "pubg",
        name: "PUBG",
        price: 340000,
        image: "https://steamcdn-a.akamaihd.net/steam/apps/578080/header.jpg?t=1595401596",
    }, {
        id: "csgo",
        name: "CS:GO",
        price: 342000,
        image: "https://steamcdn-a.akamaihd.net/steam/apps/730/header.jpg?t=1592263625",
    }, {
        id: "halflife",
        name: "Half-Life: Alyx",
        price: 120000,
        image: "https://steamcdn-a.akamaihd.net/steam/apps/546560/header.jpg?t=1594314571",
    }, {
        id: "battlefield",
        name: "Battlefield ™ V",
        price: 950000,
        image: "https://steamcdn-a.akamaihd.net/steam/apps/1238810/header.jpg?t=1594869979",
    }, {
        id: "teamfortress",
        name: "Team Fortress 2",
        price: 10000,
        image: "https://steamcdn-a.akamaihd.net/steam/apps/440/header.jpg?t=1592263852",
    }, {
        id: "rust",
        name: "Rust",
        price: 310000,
        image: "https://steamcdn-a.akamaihd.net/steam/apps/252490/header.jpg?t=1594121346",
    }, {
        id: "left4dead2",
        name: "Left 4 Dead 2",
        price: 120000,
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/550/header.jpg?t=1591811282",
    }, {
        id: "titanfall",
        name: "Titanfall® 2",
        price: 700000,
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1237970/header.jpg?t=1593732268",
    }, {
        id: "beyondasteelsky",
        name: "Beyond a Steel Sky",
        price: 188000,
        image: "https://steamcdn-a.akamaihd.net/steam/apps/1146310/header.jpg?t=1594918527",
    }, {
        id: "resolutiion",
        name: "Resolutiion",
        price: 188000,
        image: "https://steamcdn-a.akamaihd.net/steam/apps/975150/header.jpg?t=1595154891",
    }, {
        id: "röki",
        name: "Röki",
        price: 187000,
        image: "https://steamcdn-a.akamaihd.net/steam/apps/1067540/header.jpg?t=1595489046",
    }, {
        id: "darq",
        name: "DARQ",
        price: 188000,
        image: "https://steamcdn-a.akamaihd.net/steam/apps/433550/header.jpg?t=1593057975",
    }, {
        id: "iffound",
        name: "If Found...",
        price: 150000,
        image: "https://steamcdn-a.akamaihd.net/steam/apps/1041920/header.jpg?t=1593019749",
    }, {
        id: "inotherwater",
        name: "In Other Water",
        price: 165000,
        image: "https://steamcdn-a.akamaihd.net/steam/apps/890720/header.jpg?t=1594948403",
    }, {
        id: "atomrpgtrudograd",
        name: "ATOM RPG Trudograd",
        price: 145000,
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1139940/header.jpg?t=1592049413",
    }, {
        id: "yazuka",
        name: "Yakuza 0",
        price: 342000,
        image: "https://steamcdn-a.akamaihd.net/steam/apps/638230/header.jpg?t=1593103586",
    }, {
        id: "dragonball",
        name: "DRAGON BALL Z",
        price: 800000,
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/851850/header.jpg?t=1592517730",
    }, {
        id: "grandoespada",
        name: "Granado Espada",
        price: 163000,
        image: "https://steamcdn-a.akamaihd.net/steam/apps/663090/header.jpg?t=1592881082",
    }, {
        id: "shadowofwar",
        name: "Shadow of War",
        price: 480000,
        image: "https://steamcdn-a.akamaihd.net/steam/apps/356190/header.jpg?t=1575317164",
    }, {
        id: "eveonline",
        name: "Eve Online",
        price: 345000,
        image: "https://steamcdn-a.akamaihd.net/steam/apps/8500/header.jpg?t=1594731673",
    }, {
        id: "doometernal",
        name: "DOOM Eternal",
        price: 1350000,
        image: "https://steamcdn-a.akamaihd.net/steam/apps/782330/header.jpg?t=1589577706",
    }, {
        id: "unity",
        name: "Assassin's Creed® Unity",
        price: 495000,
        image: "https://steamcdn-a.akamaihd.net/steam/apps/289650/header.jpg?t=1602601508",
    },
]