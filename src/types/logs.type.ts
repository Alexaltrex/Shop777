import {BigNumber} from "ethers";

// Price
export interface IPriceLog {
    oldValue: string
    newValue: string
    timestamp: string
}
export type PriceLogUnhandledType = undefined | [BigNumber, BigNumber, BigNumber];

// Buy From Shop
export interface IBuyFromShopLog {
    buyer: string
    amount: string
    price: string
    timestamp: string
}

// Sell To Shop
export interface ISellToShopLog {
    seller: string
    amount: string
    price: string
    timestamp: string
}
export type BuySellShopLogUnhandledType = undefined | [string, BigNumber, BigNumber, BigNumber];

// Mint Burn
export interface IMintLog {
    amount: string
    timestamp: string
}
export type MintLogUnhandledType = undefined | [BigNumber, BigNumber];
