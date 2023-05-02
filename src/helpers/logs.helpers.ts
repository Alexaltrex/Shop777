import {BuySellShopLogUnhandledType, MintLogUnhandledType, PriceLogUnhandledType} from "../types/logs.type";
import {getDate} from "./helpers";

export const priceLogArgsHandler = (args: PriceLogUnhandledType) => (
    args ? ({
        oldValue: String(args[0].toNumber()),
        newValue: String(args[1].toNumber()),
        timestamp: getDate(args[2].toNumber()),
    }) : ({
        oldValue: '',
        newValue: '',
        timestamp: '',
    })
);

export const buyFromShopLogArgsHandler = (args: BuySellShopLogUnhandledType) => (
    args ? ({
        buyer: args[0],
        amount: String(args[1].toNumber()),
        price: String(args[2].toNumber()),
        timestamp: getDate(args[3].toNumber()),
    }) : ({
        buyer: '',
        amount: '',
        price: '',
        timestamp: '',
    })
);

export const sellToShopLogArgsHandler = (args: BuySellShopLogUnhandledType) => (
    args ? ({
        seller: args[0],
        amount: String(args[1].toNumber()),
        price: String(args[2].toNumber()),
        timestamp: getDate(args[3].toNumber()),
    }) : ({
        seller: '',
        amount: '',
        price: '',
        timestamp: '',
    })
);

export const mintLogArgsHandler = (args: MintLogUnhandledType) => (
    args ? ({
        amount: String(args[0].toNumber()),
        timestamp: getDate(args[1].toNumber()),
    }) : ({
        amount: '',
        timestamp: '',
    })
);
