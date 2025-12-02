"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const molePetLevel = document.getElementById("MolePetLevel");
const daemonShardLevel = document.getElementById("DaemonShard");
const highRollerPerk = document.getElementById("HighRollerPerk");
const includeCrystals = document.getElementById("IncludeCrystals");
const AuraBuffPerk = document.getElementById("IncludeAuraPerk");
let bazaarData;
let lootTable = [
    { name: "FLAWLESS_JASPER_GEM", dropchance: 0.001, quantity: 1, price: 0, auction: false },
    { name: "FLAWLESS_RUBY_GEM", dropchance: 0.004, quantity: 1, price: 0, auction: false },
    { name: "FLAWLESS_AMETHYST_GEM", dropchance: 0.004, quantity: 1, price: 0, auction: false },
    { name: "FLAWLESS_JADE_GEM", dropchance: 0.004, quantity: 1, price: 0, auction: false },
    { name: "FLAWLESS_AMBER_GEM", dropchance: 0.004, quantity: 1, price: 0, auction: false },
    { name: "FLAWLESS_SAPPHIRE_GEM", dropchance: 0.004, quantity: 1, price: 0, auction: false },
    { name: "FLAWLESS_TOPAZ_GEM", dropchance: 0.004, quantity: 1, price: 0, auction: false },
    { name: "DIVAN_ALLOY", dropchance: 0.005, quantity: 1, price: 0, auction: true },
    { name: "PET_ITEM_QUICK_CLAW", dropchance: 0.016, quantity: 1, price: 0, auction: true },
    { name: "FINE_JASPER_GEM", dropchance: 0.065, quantity: 1, price: 0, auction: false },
    { name: "TREASURITE", dropchance: 0.065, quantity: 10, price: 0, auction: false },
    { name: "RECALL_POTION", dropchance: 0.081, quantity: 1, price: 0, auction: true },
    { name: "WISHING_COMPASS", dropchance: 0.162, quantity: 3, price: 0, auction: false },
    { name: "PREACIOUS_PEARL", dropchance: 0.162, quantity: 1, price: 0, auction: false },
    { name: "CLAW_FOSSIL", dropchance: 0.162, quantity: 1, price: 0, auction: true },
    { name: "FLAWED_JASPER_GEM", dropchance: 0.227, quantity: 32, price: 0, auction: false },
    { name: "GEMSTONE_MIXTURE", dropchance: 0.227, quantity: 1, price: 0, auction: false },
    { name: "ENCHANTMENT_FORTUNE_4", dropchance: 0.227, quantity: 1, price: 0, auction: false },
    { name: "ESSENSE_GOLD", dropchance: 0.244, quantity: 10, price: 0, auction: false },
    { name: "ESSENSE_DIAMOND", dropchance: 0.244, quantity: 10, price: 0, auction: false },
    { name: "FINE_RUBY_GEM", dropchance: 0.292, quantity: 1, price: 0, auction: false },
    { name: "FINE_AMETHYST_GEM", dropchance: 0.292, quantity: 1, price: 0, auction: false },
    { name: "FINE_JADE_GEM", dropchance: 0.292, quantity: 1, price: 0, auction: false },
    { name: "FINE_AMBER_GEM", dropchance: 0.292, quantity: 1, price: 0, auction: false },
    { name: "FINE_SAPPHIRE_GEM", dropchance: 0.292, quantity: 1, price: 0, auction: false },
    { name: "FINE_TOPAZ_GEM", dropchance: 0.292, quantity: 1, price: 0, auction: false },
    { name: "JADERALD", dropchance: 0.471, quantity: 1, price: 0, auction: false },
    { name: "DWARVEN_OS_GEMSTONE_GRAHAMSD", dropchance: 0.471, quantity: 1, price: 0, auction: false },
    { name: "FLAWED_RUBY_GEM", dropchance: 0.651, quantity: 40, price: 0, auction: false },
    { name: "FLAWED_AMETHYST_GEM", dropchance: 0.651, quantity: 40, price: 0, auction: false },
    { name: "FLAWED_JADE_GEM", dropchance: 0.651, quantity: 40, price: 0, auction: false },
    { name: "FLAWED_AMBER_GEM", dropchance: 0.651, quantity: 40, price: 0, auction: false },
    { name: "FLAWED_SAPPHIRE_GEM", dropchance: 0.651, quantity: 40, price: 0, auction: false },
    { name: "FLAWED_TOPAZ_GEM", dropchance: 0.651, quantity: 40, price: 0, auction: false },
    { name: "FLAWED_JASPER_GEM", dropchance: 0.651, quantity: 24, price: 0, auction: false },
    { name: "TREASURITE", dropchance: 0.651, quantity: 1, price: 0, auction: false },
    { name: "Ruby Crystal", dropchance: 0.813, quantity: 1, price: 2000000, auction: null },
    { name: "Jasper Crystal", dropchance: 0.813, quantity: 1, price: 5000000, auction: null },
    { name: "HELIX", dropchance: 1.302, quantity: 1, price: 0, auction: true },
    { name: "ENCHANTMENT_LAPIDARY_1", dropchance: 1.302, quantity: 1, price: 0, auction: false },
    { name: "FLAWED_RUBY_GEM", dropchance: 1.627, quantity: 24, price: 0, auction: false },
    { name: "FLAWED_AMETHYST_GEM", dropchance: 1.627, quantity: 24, price: 0, auction: false },
    { name: "FLAWED_JADE_GEM", dropchance: 1.627, quantity: 24, price: 0, auction: false },
    { name: "FLAWED_AMBER_GEM", dropchance: 1.627, quantity: 24, price: 0, auction: false },
    { name: "FLAWED_SAPPHIRE_GEM", dropchance: 1.627, quantity: 24, price: 0, auction: false },
    { name: "FLAWED_TOPAZ_GEM", dropchance: 1.627, quantity: 24, price: 0, auction: false },
    { name: "FLAWED_JASPER_GEM", dropchance: 1.627, quantity: 12, price: 0, auction: false },
    { name: "DIVAN_FRAGMENT", dropchance: 1.953, quantity: 1, price: 0, auction: false },
    { name: "OIL_BARREL", dropchance: 2.604, quantity: 1, price: 0, auction: false },
    { name: "FLAWED_RUBY_GEM", dropchance: 3.255, quantity: 12, price: 0, auction: false },
    { name: "FLAWED_AMETHYST_GEM", dropchance: 3.255, quantity: 12, price: 0, auction: false },
    { name: "FLAWED_JADE_GEM", dropchance: 3.255, quantity: 12, price: 0, auction: false },
    { name: "FLAWED_AMBER_GEM", dropchance: 3.255, quantity: 12, price: 0, auction: false },
    { name: "FLAWED_SAPPHIRE_GEM", dropchance: 3.255, quantity: 12, price: 0, auction: false },
    { name: "FLAWED_TOPAZ_GEM", dropchance: 3.255, quantity: 12, price: 0, auction: false },
    { name: "FLAWED_JASPER_GEM", dropchance: 3.255, quantity: 6, price: 0, auction: false },
    { name: "PICKONIMBUS", dropchance: 3.255, quantity: 1, price: 0, auction: true },
    { name: "BOB_OMB", dropchance: 3.255, quantity: 20, price: 0, auction: false },
    { name: "FLAWED_RUBY_GEM", dropchance: 6.51, quantity: 6, price: 0, auction: false },
    { name: "FLAWED_AMETHYST_GEM", dropchance: 6.51, quantity: 6, price: 0, auction: false },
    { name: "FLAWED_JADE_GEM", dropchance: 6.51, quantity: 6, price: 0, auction: false },
    { name: "FLAWED_AMBER_GEM", dropchance: 6.51, quantity: 6, price: 0, auction: false },
    { name: "FLAWED_SAPPHIRE_GEM", dropchance: 6.51, quantity: 6, price: 0, auction: false },
    { name: "FLAWED_TOPAZ_GEM", dropchance: 6.51, quantity: 6, price: 0, auction: false }
];
function GetAveragePrice(itemTag_1) {
    return __awaiter(this, arguments, void 0, function* (itemTag, page = 0, pageSize = 1000) {
        const url = `https://sky.coflnet.com/api/auctions/tag/${itemTag}/sold`;
        const params = new URLSearchParams({
            page: page.toString(),
            pageSize: pageSize.toString()
        }); // i dont rly understand this part chatgpt did it.
        // url + parameters = full url with parameters
        const response = yield fetch(`${url}?${params.toString()}`);
        if (!response.ok) { // if nothing came throws error
            throw new Error(`Could not fetch auction data for ${itemTag}`);
        }
        const auctions = yield response.json();
        // If no sales exist, return null
        if (auctions.length === 0) {
            return null;
        }
        let total = 0;
        for (const auc of auctions) {
            total += auc.highestBidAmount;
        }
        const average = total / auctions.length;
        return average;
    });
}
function GetBazaarData() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://api.hypixel.net/skyblock/bazaar`); // gets all bazaar data
        if (!response.ok) { // if nothing came throws error
            throw new Error("Could not fetch bazaar data");
        }
        const data = yield response.json(); // sets the json response to a variable
        return data;
    });
}
function CalculateRunCost() {
    let eggsCost = bazaarData.products['GOBLIN_EGG_GREEN'].quick_status.sellPrice;
    let aparatusCost = bazaarData.products['PRECURSOR_APPARATUS'].quick_status.sellPrice;
    return eggsCost + aparatusCost;
}
function ProfitPerBundleItem(dropItem, rolls) {
    return (dropItem.price * dropItem.quantity * (dropItem.dropchance / 100) * rolls);
}
function CalculateRolls(molePetLevels, highRollerPerkVal) {
    let baseRolls = 17;
    if (highRollerPerkVal) {
        baseRolls++;
    }
    if (molePetLevels > 0) {
        baseRolls += molePetLevels / 100;
    }
    return baseRolls;
}
function ProfitFromMeter(daemonShardLevelVal) {
    let baseFromRun = 1;
    if (daemonShardLevelVal > 0) {
        baseFromRun += daemonShardLevelVal / 10;
    }
    console.log(lootTable[7].price);
    let profitPerRun = 1000 / baseFromRun * lootTable[7].price;
    return 0;
}
function UpdatePriceData() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            const bazaar = yield GetBazaarData();
            bazaarData = bazaar;
            for (const item of lootTable) {
                if (!bazaar)
                    return;
                const product = bazaar.products[item.name];
                if (item.auction === false) {
                    if (product && ((_a = product.quick_status) === null || _a === void 0 ? void 0 : _a.sellPrice) != null) { // if item exists
                        item.price = product.quick_status.sellPrice;
                    }
                    else {
                        item.price = 0; // fallback if item not found
                    }
                }
                if (item.auction === true) {
                    const averagePrice = yield GetAveragePrice(item.name);
                    if (averagePrice != null) {
                        item.price = averagePrice;
                    }
                    else {
                        item.price = 0; // fallback if no sales exist
                    }
                }
                if (item.auction === null) {
                    // in future add fetching crystal prices from bazaar
                }
                // for null calculate cost of 5 flawless gems and subtract from price of perfect gem
            }
        }
        catch (err) {
            console.error("Error updating prices:", err);
        }
    });
}
function Main() {
    return __awaiter(this, void 0, void 0, function* () {
        const molePetLevelValue = molePetLevel.valueAsNumber;
        const daemonShardLevelValue = daemonShardLevel.valueAsNumber;
        const highRollerPerkValue = highRollerPerk.checked;
        const includeCrystalsValue = includeCrystals.checked;
        const AuraBuffPerkValue = AuraBuffPerk.checked;
        if (AuraBuffPerkValue) {
            lootTable[7].dropchance *= 2;
        }
        const output = document.getElementById("output");
        yield UpdatePriceData();
        let total = 0;
        total += ProfitFromMeter(daemonShardLevelValue);
        for (const item of lootTable) {
            total += ProfitPerBundleItem(item, CalculateRolls(molePetLevelValue, highRollerPerkValue));
        }
        total -= CalculateRunCost();
        if (!output)
            return;
        output.textContent = Math.round(total).toString() + " coins profit per run";
    });
}
window.Main = Main;
