// hexagon.js

/*
"Team 1" - Red
"Team 2" - Purple
"Team 3" - Blue
"Team 4" - Orange
"Team 5" - Yellow
"Team 6" - Green
*/

const hexagonData = {
    "0-0": {
        "itemName": "Crawling Hand",
        "itemQuantity": 2,
        "ownedBy": "Team 5",
        "tilePoints": 3,
        "visited": false
    },
    "0-1": {
        "itemName": "Petal Garland",
        "itemQuantity": 2,
        "ownedBy": "free",
        "tilePoints": 3,
        "visited": false
    },
    "0-2": {
        "itemName": "Black Mask",
        "itemQuantity": 2,
        "ownedBy": "Team 1",
        "tilePoints": 3,
        "visited": false
    },
    "0-3": {
        "itemName": "Leaf-Bladed Sword",
        "itemQuantity": 2,
        "ownedBy": "Team 1",
        "tilePoints": 3,
        "visited": false
    },
    "0-4": {
        "itemName": "Dark Mystic Boot",
        "itemQuantity": 2,
        "ownedBy": "Team 1",
        "tilePoints": 3,
        "visited": false
    },
    "0-5": {
        "itemName": "Gout Tuber",
        "itemQuantity": 2,
        "ownedBy": "Team 1",
        "tilePoints": 3,
        "visited": false
    },
    "0-6": {
        "itemName": "Granite Sword",
        "itemQuantity": 2,
        "ownedBy": "Team 1",
        "tilePoints": 3,
        "visited": false
    },
    "1-0": {
        "itemName": "White Mystic Hat",
        "itemQuantity": 2,
        "ownedBy": "Team 2",
        "tilePoints": 3,
        "visited": false
    },
    "1-1": {
        "itemName": "Yew Comp Bow",
        "itemQuantity": 2,
        "ownedBy": "Team 2",
        "tilePoints": 4,
        "visited": false
    },
    "1-2": {
        "itemName": "Any Obsidian Armour",
        "itemQuantity": 2,
        "ownedBy": "Team 1",
        "tilePoints": 4,
        "visited": false
    },
    "1-3": {
        "itemName": "Any Piece of Verac",
        "itemQuantity": 2,
        "ownedBy": "Team 1",
        "tilePoints": 4,
        "visited": false
    },
    "1-4": {
        "itemName": "Seer's Ring",
        "itemQuantity": 2,
        "ownedBy": "Team 1",
        "tilePoints": 4,
        "visited": false
    },
    "1-5": {
        "itemName": "Dark Bow",
        "itemQuantity": 2,
        "ownedBy": "Team 1",
        "tilePoints": 4,
        "visited": false
    },
    "1-6": {
        "itemName": "Vorkath Head (Not 50 KC)",
        "itemQuantity": 2,
        "ownedBy": "Team 1",
        "tilePoints": 4,
        "visited": false
    },
    "1-7": {
        "itemName": "Basilisk Head",
        "itemQuantity": 2,
        "ownedBy": "Team 4",
        "tilePoints": 3,
        "visited": false
    },
    "2-0": {
        "itemName": "Sandwich Lady Top",
        "itemQuantity": 2,
        "ownedBy": "Team 5",
        "tilePoints": 3,
        "visited": false
    },
    "2-1": {
        "itemName": "Gnome Goggles",
        "itemQuantity": 2,
        "ownedBy": "Team 2",
        "tilePoints": 4,
        "visited": false
    },
    "2-2": {
        "itemName": "Any Rune Helms (H)",
        "itemQuantity": 2,
        "ownedBy": "free",
        "tilePoints": 5,
        "visited": false
    },
    "2-3": {
        "itemName": "Unsired",
        "itemQuantity": 2,
        "ownedBy": "Team 1",
        "tilePoints": 5,
        "visited": false
    },
    "2-4": {
        "itemName": "Sarachnis Cudgels",
        "itemQuantity": 2,
        "ownedBy": "free",
        "tilePoints": 5,
        "visited": false
    },
    "2-5": {
        "itemName": "Big Swordfish",
        "itemQuantity": 2,
        "ownedBy": "Team 1",
        "tilePoints": 5,
        "visited": false
    },
    "2-6": {
        "itemName": "Smoke Battlestaff",
        "itemQuantity": 2,
        "ownedBy": "Team 1",
        "tilePoints": 5,
        "visited": false
    },
    "2-7": {
        "itemName": "Warrior Ring",
        "itemQuantity": 2,
        "ownedBy": "Team 3",
        "tilePoints": 4,
        "visited": false
    },
    "2-8": {
        "itemName": "Mole Slipper",
        "itemQuantity": 2,
        "ownedBy": "Team 3",
        "tilePoints": 3,
        "visited": false
    },
    "3-0": {
        "itemName": "Sulphur Blade",
        "itemQuantity": 2,
        "ownedBy": "Team 5",
        "tilePoints": 3,
        "visited": false
    },
    "3-1": {
        "itemName": "Broken Zombie Axes",
        "itemQuantity": 2,
        "ownedBy": "Team 5",
        "tilePoints": 4,
        "visited": false
    },
    "3-2": {
        "itemName": "Enhanced Crystal Teleport Seed",
        "itemQuantity": 2,
        "ownedBy": "Team 5",
        "tilePoints": 5,
        "visited": false
    },
    "3-3": {
        "itemName": "Piece of Armadyl",
        "itemQuantity": 1,
        "ownedBy": "Team 1",
        "tilePoints": 6,
        "visited": false
    },
    "3-4": {
        "itemName": "Abyssal Lantern",
        "itemQuantity": 1,
        "ownedBy": "Team 1",
        "tilePoints": 6,
        "visited": false
    },
    "3-5": {
        "itemName": "Primordial Crystal",
        "itemQuantity": 1,
        "ownedBy": "free",
        "tilePoints": 6,
        "visited": false
    },
    "3-6": {
        "itemName": "Shadow Quartz",
        "itemQuantity": 1,
        "ownedBy": "Team 1",
        "tilePoints": 6,
        "visited": false
    },
    "3-7": {
        "itemName": "Any Blood Moon Armour",
        "itemQuantity": 2,
        "ownedBy": "Team 3",
        "tilePoints": 5,
        "visited": false
    },
    "3-8": {
        "itemName": "Strange Old Lock-Pick",
        "itemQuantity": 2,
        "ownedBy": "Team 3",
        "tilePoints": 4,
        "visited": false
    },
    "3-9": {
        "itemName": "Toktz-xil-ek",
        "itemQuantity": 2,
        "ownedBy": "Team 3",
        "tilePoints": 3,
        "visited": false
    },
    "4-0": {
        "itemName": "Tzhaar-ket-om",
        "itemQuantity": 2,
        "ownedBy": "Team 6",
        "tilePoints": 3,
        "visited": false
    },
    "4-1": {
        "itemName": "Granite Ring",
        "itemQuantity": 2,
        "ownedBy": "Team 5",
        "tilePoints": 4,
        "visited": false
    },
    "4-2": {
        "itemName": "KBD Head",
        "itemQuantity": 2,
        "ownedBy": "Team 5",
        "tilePoints": 5,
        "visited": false
    },
    "4-3": {
        "itemName": "Malediction Ward",
        "itemQuantity": 1,
        "ownedBy": "Team 5",
        "tilePoints": 6,
        "visited": false
    },
    "4-4": {
        "itemName": "Magic Fang",
        "itemQuantity": 1,
        "ownedBy": "Team 5",
        "tilePoints": 7,
        "visited": false
    },
    "4-5": {
        "itemName": "Voidwaker Gem",
        "itemQuantity": 1,
        "ownedBy": "free",
        "tilePoints": 7,
        "visited": false
    },
    "4-6": {
        "itemName": "Elidnis Ward",
        "itemQuantity": 1,
        "ownedBy": "Team 1",
        "tilePoints": 7,
        "visited": false
    },
    "4-7": {
        "itemName": "Crystal Armour Seed",
        "itemQuantity": 1,
        "ownedBy": "Team 3",
        "tilePoints": 6,
        "visited": false
    },
    "4-8": {
        "itemName": "KQ Head (Pristine)",
        "itemQuantity": 2,
        "ownedBy": "Team 3",
        "tilePoints": 5,
        "visited": false
    },
    "4-9": {
        "itemName": "Any Pieces of Dharoks",
        "itemQuantity": 2,
        "ownedBy": "Team 3",
        "tilePoints": 4,
        "visited": false
    },
    "4-10": {
        "itemName": "Dark Mystic Top",
        "itemQuantity": 2,
        "ownedBy": "Team 3",
        "tilePoints": 3,
        "visited": false
    },
    "5-0": {
        "itemName": "Cockatrice Head",
        "itemQuantity": 2,
        "ownedBy": "Team 4",
        "tilePoints": 3,
        "visited": false
    },
    "5-1": {
        "itemName": "Seerculls",
        "itemQuantity": 2,
        "ownedBy": "Team 6",
        "tilePoints": 4,
        "visited": false
    },
    "5-2": {
        "itemName": "Crystal Tool Seed",
        "itemQuantity": 2,
        "ownedBy": "free",
        "tilePoints": 5,
        "visited": false
    },
    "5-3": {
        "itemName": "Blood Quartz",
        "itemQuantity": 1,
        "ownedBy": "Team 5",
        "tilePoints": 6,
        "visited": false
    },
    "5-4": {
        "itemName": "Tome of Fire",
        "itemQuantity": 1,
        "ownedBy": "Team 5",
        "tilePoints": 7,
        "visited": false
    },
    "5-5": {
        "itemName": "Piece of Justiciar",
        "itemQuantity": 1,
        "ownedBy": "free",
        "tilePoints": 9,
        "visited": false
    },
    "5-6": {
        "itemName": "Echo Crystal",
        "itemQuantity": 1,
        "ownedBy": "Team 1",
        "tilePoints": 9,
        "visited": false
    },
    "5-7": {
        "itemName": "Any inq. Piece, Orb or Staff",
        "itemQuantity": 1,
        "ownedBy": "Team 3",
        "tilePoints": 7,
        "visited": false
    },
    "5-8": {
        "itemName": "Spirit Shield",
        "itemQuantity": 1,
        "ownedBy": "Team 3",
        "tilePoints": 6,
        "visited": false
    },
    "5-9": {
        "itemName": "Zenyte Shard",
        "itemQuantity": 2,
        "ownedBy": "Team 3",
        "tilePoints": 5,
        "visited": false
    },
    "5-10": {
        "itemName": "Mint Cake",
        "itemQuantity": 2,
        "ownedBy": "Team 3",
        "tilePoints": 4,
        "visited": false
    },
    "5-11": {
        "itemName": "Mystic Gloves Light",
        "itemQuantity": 2,
        "ownedBy": "Team 3",
        "tilePoints": 3,
        "visited": false
    },
    "6-0": {
        "itemName": "Abyssal Whip",
        "itemQuantity": 2,
        "ownedBy": "Team 2",
        "tilePoints": 3,
        "visited": false
    },
    "6-1": {
        "itemName": "Scurrius Spine",
        "itemQuantity": 2,
        "ownedBy": "Team 5",
        "tilePoints": 4,
        "visited": false
    },
    "6-2": {
        "itemName": "Any Blue Moon Armour",
        "itemQuantity": 2,
        "ownedBy": "Team 5",
        "tilePoints": 5,
        "visited": false
    },
    "6-3": {
        "itemName": "Saradomin Sword",
        "itemQuantity": 1,
        "ownedBy": "Team 5",
        "tilePoints": 6,
        "visited": false
    },
    "6-4": {
        "itemName": "Ancestral Armour",
        "itemQuantity": 1,
        "ownedBy": "free",
        "tilePoints": 7,
        "visited": false
    },
    "6-5": {
        "itemName": "Virus Armour",
        "itemQuantity": 1,
        "ownedBy": "Team 5",
        "tilePoints": 9,
        "visited": false
    },
    "6-6": {
        "itemName": "Spectral, Arcane or Elysian",
        "itemQuantity": 1,
        "ownedBy": "free",
        "tilePoints": 12,
        "visited": false
    },
    "6-7": {
        "itemName": "Dragon Hunter Crossbow",
        "itemQuantity": 1,
        "ownedBy": "Team 3",
        "tilePoints": 9,
        "visited": false
    },
    "6-8": {
        "itemName": "Tome of Water",
        "itemQuantity": 1,
        "ownedBy": "Team 6",
        "tilePoints": 7,
        "visited": false
    },
    "6-9": {
        "itemName": "Zamorakian Spear",
        "itemQuantity": 1,
        "ownedBy": "Team 3",
        "tilePoints": 6,
        "visited": false
    },
    "6-10": {
        "itemName": "Magic Comp Bow",
        "itemQuantity": 2,
        "ownedBy": "Team 6",
        "tilePoints": 5,
        "visited": false
    },
    "6-11": {
        "itemName": "Dragon Pickaxe",
        "itemQuantity": 2,
        "ownedBy": "Team 3",
        "tilePoints": 4,
        "visited": false
    },
    "6-12": {
        "itemName": "Steel Boots",
        "itemQuantity": 2,
        "ownedBy": "Team 1",
        "tilePoints": 3,
        "visited": false
    },
    "7-0": {
        "itemName": "Dark Mystic Gloves",
        "itemQuantity": 2,
        "ownedBy": "Team 5",
        "tilePoints": 3,
        "visited": false
    },
    "7-1": {
        "itemName": "Willow Comp Bow",
        "itemQuantity": 2,
        "ownedBy": "Team 5",
        "tilePoints": 4,
        "visited": false
    },
    "7-2": {
        "itemName": "Big Bass",
        "itemQuantity": 2,
        "ownedBy": "Team 5",
        "tilePoints": 5,
        "visited": false
    },
    "7-3": {
        "itemName": "Ranger Boots",
        "itemQuantity": 1,
        "ownedBy": "Team 5",
        "tilePoints": 6,
        "visited": false
    },
    "7-4": {
        "itemName": "Voidwaker Hilt",
        "itemQuantity": 1,
        "ownedBy": "free",
        "tilePoints": 7,
        "visited": false
    },
    "7-5": {
        "itemName": "Masori Body",
        "itemQuantity": 1,
        "ownedBy": "free",
        "tilePoints": 9,
        "visited": false
    },
    "7-6": {
        "itemName": "Any Piece of Torva Armour",
        "itemQuantity": 1,
        "ownedBy": "free",
        "tilePoints": 9,
        "visited": false
    },
    "7-7": {
        "itemName": "Voidwaker Blade",
        "itemQuantity": 1,
        "ownedBy": "Team 6",
        "tilePoints": 7,
        "visited": false
    },
    "7-8": {
        "itemName": "Smoke Quartz",
        "itemQuantity": 1,
        "ownedBy": "Team 6",
        "tilePoints": 6,
        "visited": false
    },
    "7-9": {
        "itemName": "Blood Shard",
        "itemQuantity": 2,
        "ownedBy": "Team 6",
        "tilePoints": 5,
        "visited": false
    },
    "7-10": {
        "itemName": "Drakes Claws",
        "itemQuantity": 2,
        "ownedBy": "Team 6",
        "tilePoints": 4,
        "visited": false
    },
    "7-11": {
        "itemName": "Fox Whistles",
        "itemQuantity": 2,
        "ownedBy": "Team 6",
        "tilePoints": 3,
        "visited": false
    },
    "8-0": {
        "itemName": "Mask of Ranul",
        "itemQuantity": 2,
        "ownedBy": "Team 2",
        "tilePoints": 3,
        "visited": false
    },
    "8-1": {
        "itemName": "Any Pieces of Torags",
        "itemQuantity": 2,
        "ownedBy": "Team 4",
        "tilePoints": 4,
        "visited": false
    },
    "8-2": {
        "itemName": "Dragon Chainbody",
        "itemQuantity": 2,
        "ownedBy": "Team 5",
        "tilePoints": 5,
        "visited": false
    },
    "8-3": {
        "itemName": "Crystal Weapon Seed",
        "itemQuantity": 1,
        "ownedBy": "Team 4",
        "tilePoints": 6,
        "visited": false
    },
    "8-4": {
        "itemName": "Hydra Leather",
        "itemQuantity": 1,
        "ownedBy": "free",
        "tilePoints": 7,
        "visited": false
    },
    "8-5": {
        "itemName": "Golden Tench",
        "itemQuantity": 1,
        "ownedBy": "Team 4",
        "tilePoints": 7,
        "visited": false
    },
    "8-6": {
        "itemName": "Avernic Defender Hilt",
        "itemQuantity": 1,
        "ownedBy": "free",
        "tilePoints": 7,
        "visited": false
    },
    "8-7": {
        "itemName": "Odium Ward",
        "itemQuantity": 1,
        "ownedBy": "Team 6",
        "tilePoints": 6,
        "visited": false
    },
    "8-8": {
        "itemName": "Any Eclipse Armour",
        "itemQuantity": 2,
        "ownedBy": "Team 6",
        "tilePoints": 5,
        "visited": false
    },
    "8-9": {
        "itemName": "Archer Ring",
        "itemQuantity": 2,
        "ownedBy": "Team 6",
        "tilePoints": 4,
        "visited": false
    },
    "8-10": {
        "itemName": "Toktz-ket-xil",
        "itemQuantity": 2,
        "ownedBy": "Team 6",
        "tilePoints": 3,
        "visited": false
    },
    "9-0": {
        "itemName": "Dragon Boots",
        "itemQuantity": 2,
        "ownedBy": "Team 4",
        "tilePoints": 3,
        "visited": false
    },
    "9-1": {
        "itemName": "Berserker Ring",
        "itemQuantity": 2,
        "ownedBy": "Team 4",
        "tilePoints": 4,
        "visited": false
    },
    "9-2": {
        "itemName": "Elven Signet",
        "itemQuantity": 2,
        "ownedBy": "free",
        "tilePoints": 5,
        "visited": false
    },
    "9-3": {
        "itemName": "Ice Quartz",
        "itemQuantity": 1,
        "ownedBy": "Team 4",
        "tilePoints": 6,
        "visited": false
    },
    "9-4": {
        "itemName": "Basilisk Jaw",
        "itemQuantity": 1,
        "ownedBy": "Team 4",
        "tilePoints": 6,
        "visited": false
    },
    "9-5": {
        "itemName": "Monkey Tail",
        "itemQuantity": 1,
        "ownedBy": "Team 4",
        "tilePoints": 6,
        "visited": false
    },
    "9-6": {
        "itemName": "Piece of Bandos",
        "itemQuantity": 1,
        "ownedBy": "Team 6",
        "tilePoints": 6,
        "visited": false
    },
    "9-7": {
        "itemName": "Big Shark",
        "itemQuantity": 2,
        "ownedBy": "Team 6",
        "tilePoints": 5,
        "visited": false
    },
    "9-8": {
        "itemName": "Warped Sceptre",
        "itemQuantity": 2,
        "ownedBy": "Team 6",
        "tilePoints": 4,
        "visited": false
    },
    "9-9": {
        "itemName": "Brine Sabre",
        "itemQuantity": 2,
        "ownedBy": "Team 5",
        "tilePoints": 3,
        "visited": false
    },
    "10-0": {
        "itemName": "Golden Pheasant Egg",
        "itemQuantity": 2,
        "ownedBy": "Team 6",
        "tilePoints": 3,
        "visited": false
    },
    "10-1": {
        "itemName": "Any Piece of Guild Hunter",
        "itemQuantity": 2,
        "ownedBy": "Team 4",
        "tilePoints": 4,
        "visited": false
    },
    "10-2": {
        "itemName": "Kraken Tentacle",
        "itemQuantity": 2,
        "ownedBy": "Team 4",
        "tilePoints": 5,
        "visited": false
    },
    "10-3": {
        "itemName": "Venator Shard",
        "itemQuantity": 2,
        "ownedBy": "Team 4",
        "tilePoints": 5,
        "visited": false
    },
    "10-4": {
        "itemName": "Catalytic Talisman",
        "itemQuantity": 2,
        "ownedBy": "Team 4",
        "tilePoints": 5,
        "visited": false
    },
    "10-5": {
        "itemName": "Any Rev Statuettes",
        "itemQuantity": 2,
        "ownedBy": "Team 4",
        "tilePoints": 5,
        "visited": false
    },
    "10-6": {
        "itemName": "Granite Hammer",
        "itemQuantity": 2,
        "ownedBy": "Team 4",
        "tilePoints": 5,
        "visited": false
    },
    "10-7": {
        "itemName": "Any Champion Scroll",
        "itemQuantity": 2,
        "ownedBy": "Team 4",
        "tilePoints": 4,
        "visited": false
    },
    "10-8": {
        "itemName": "Amulet of Magic (T)",
        "itemQuantity": 2,
        "ownedBy": "Team 3",
        "tilePoints": 3,
        "visited": false
    },
    "11-0": {
        "itemName": "Toktz-xil-ak",
        "itemQuantity": 2,
        "ownedBy": "Team 6",
        "tilePoints": 3,
        "visited": false
    },
    "11-1": {
        "itemName": "Amulet of Strength (T)",
        "itemQuantity": 2,
        "ownedBy": "Team 6",
        "tilePoints": 4,
        "visited": false
    },
    "11-2": {
        "itemName": "Gnome Scarf",
        "itemQuantity": 2,
        "ownedBy": "Team 1",
        "tilePoints": 4,
        "visited": false
    },
    "11-3": {
        "itemName": "Any Piece of Karils",
        "itemQuantity": 2,
        "ownedBy": "Team 1",
        "tilePoints": 4,
        "visited": false
    },
    "11-4": {
        "itemName": "Fedora",
        "itemQuantity": 2,
        "ownedBy": "Team 4",
        "tilePoints": 4,
        "visited": false
    },
    "11-5": {
        "itemName": "Mud Battlestaff",
        "itemQuantity": 2,
        "ownedBy": "Team 4",
        "tilePoints": 4,
        "visited": false
    },
    "11-6": {
        "itemName": "Crystal Grail",
        "itemQuantity": 2,
        "ownedBy": "Team 4",
        "tilePoints": 4,
        "visited": false
    },
    "11-7": {
        "itemName": "Dark Mystic Hat",
        "itemQuantity": 2,
        "ownedBy": "Team 4",
        "tilePoints": 3,
        "visited": false
    },
    "12-0": {
        "itemName": "Magic Shortbow",
        "itemQuantity": 2,
        "ownedBy": "Team 3",
        "tilePoints": 3,
        "visited": false
    },
    "12-1": {
        "itemName": "Giant Egg Sac",
        "itemQuantity": 2,
        "ownedBy": "Team 1",
        "tilePoints": 3,
        "visited": false
    },
    "12-2": {
        "itemName": "Mystic Boots Light",
        "itemQuantity": 2,
        "ownedBy": "Team 4",
        "tilePoints": 3,
        "visited": false
    },
    "12-3": {
        "itemName": "Any Piece of Elder Chaos Robes",
        "itemQuantity": 2,
        "ownedBy": "Team 4",
        "tilePoints": 3,
        "visited": false
    },
    "12-4": {
        "itemName": "Granite Helms",
        "itemQuantity": 2,
        "ownedBy": "Team 4",
        "tilePoints": 3,
        "visited": false
    },
    "12-5": {
        "itemName": "Shoulder Parrot",
        "itemQuantity": 2,
        "ownedBy": "Team 2",
        "tilePoints": 3,
        "visited": false
    },
    "12-6": {
        "itemName": "Black Boots",
        "itemQuantity": 2,
        "ownedBy": "Team 4",
        "tilePoints": 3,
        "visited": false
    }
};