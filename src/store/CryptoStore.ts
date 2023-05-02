import {action, makeObservable, observable} from "mobx";
import {AlertColor} from "@mui/material";
import {getProvider, getShopContract, getTokenContract, shopAddress} from "../helpers/ethers.helper";
import {ethers} from "ethers";

export interface IAlert {
    open: boolean
    message: string
    severity: AlertColor
}

export class CryptoStore {
    loading: boolean = false;
    alert: IAlert = {
        open: false,
        message: "",
        severity: "success" as AlertColor
    }
    connecting: boolean = false; // подключение к аккаунту Metamask
    currentAccountAddress: string | null = null;
    balance: string | null = null; // баланс эфира текущего аккаунта
    currentAccountTokenBalance: number | null = null;
    shopOwner: string | null = null; // адрес владельца магазина (админ)
    shopBalance: string = ""; // баланс эфира магазина
    shopTokenBalance: number | null = null; // баланс токенов магазина
    tokenPriceForSell: number | null = null;
    tokenPriceForBuy: number | null = null;

    constructor() {
        makeObservable(this, {
            loading: observable,
            alert: observable,
            connecting: observable,
            currentAccountAddress: observable,
            balance: observable,
            currentAccountTokenBalance: observable,
            shopOwner: observable,
            shopBalance: observable,
            shopTokenBalance: observable,
            tokenPriceForSell: observable,
            tokenPriceForBuy: observable,

            setLoading: action.bound,
            setConnecting: action.bound,
            setCurrentAccountAddress: action.bound,
            setBalance: action.bound,
            getCurrentAccountBalance: action.bound,
            setCurrentAccountTokenBalance: action.bound,
            getCurrentAccountTokenBalance: action.bound,
            setAlert: action.bound,
            errorHandler: action.bound,
            setShopBalance: action.bound,
            getShopBalance: action.bound,
            setShopTokenBalance: action.bound,
            getShopTokenBalance: action.bound,
            setShopOwner: action.bound,
            getShopOwner: action.bound,
            setTokenPriceForSell: action.bound,
            getTokenPriceForSell: action.bound,
            setTokenPriceForBuy: action.bound,
            getTokenPriceForBuy: action.bound,
        })
    }

    setLoading(loading: boolean) {
        this.loading = loading;
    }

    setConnecting(connecting: boolean) {
        this.connecting = connecting
    }

    setCurrentAccountAddress(currentAccountAddress: string | null) {
        this.currentAccountAddress = currentAccountAddress;
    }

    setBalance(balance: string | null) {
        this.balance = balance
    }

    setAlert(alert: IAlert) {
        this.alert = alert
    }

    errorHandler(e: any) {
        // for (let key in e) {
        //     console.log("e." + key + ": " + e[key])
        // }
        console.log(e?.reason || e?.message || "Error");
        this.setAlert({
            open: true,
            message: e?.reason || e?.message || "Error",
            severity: "error"
        })
    }

    //========= GET CURRENT ACCOUNT BALANCE =========//
    async getCurrentAccountBalance(newAccount: string) {
        try {
            const provider = getProvider();
            const balance = await provider.getBalance(newAccount);
            const balanceInWei = ethers.utils.formatUnits(balance, "wei");
            this.setBalance(new Intl.NumberFormat('ru-RU').format(Number(balanceInWei)));
        } catch (e: any) {
            this.errorHandler(e);
        }
    }

    //========= SET SHOP OWNER =========//
    setShopOwner(shopOwner: string) {
        this.shopOwner = shopOwner;
    }

    //========= GET SHOP OWNER =========//
    async getShopOwner() {
        try {
            const provider = getProvider();
            const shopContract = getShopContract(provider);
            const shopOwner = await shopContract.owner();
            this.setShopOwner(shopOwner);
        } catch (e: any) {
            this.errorHandler(e);
        }
    }

    //========= SET SHOP BALANCE =========//
    setShopBalance(shopBalance: string) {
        this.shopBalance = shopBalance;
    }

    //========= GET SHOP BALANCE =========//
    async getShopBalance() {
        try {
            const provider = getProvider();
            const balance = await provider.getBalance(shopAddress);
            const balanceInWei = ethers.utils.formatUnits(balance, "wei");
            this.setShopBalance(new Intl.NumberFormat('ru-RU').format(Number(balanceInWei)));
        } catch (e: any) {
            this.errorHandler(e)
        }
    }

    //========= SET TOKEN PRICE FOR SELL =========//
    setTokenPriceForSell(price: number) {
        this.tokenPriceForSell = price;
    }

    //========= GET TOKEN PRICE FOR SELL =========//
    async getTokenPriceForSell() {
        try {
            const provider = getProvider();
            const shopContract = getShopContract(provider);
            const result = await shopContract.getTokenPriceForSell();
            this.setTokenPriceForSell(result.toNumber());
        } catch (e: any) {
            this.errorHandler(e)
        }
    }

    //========= SET TOKEN PRICE FOR BUY =========//
    setTokenPriceForBuy(price: number) {
        this.tokenPriceForBuy = price;
    }

    //========= GET TOKEN PRICE FOR BUY =========//
    async getTokenPriceForBuy() {
        try {
            const provider = getProvider();
            const shopContract = getShopContract(provider);
            const result = await shopContract.getTokenPriceForBuy();
            this.setTokenPriceForBuy(result.toNumber());
        } catch (e: any) {
            this.errorHandler(e)
        }
    }

    //setShopTokenBalance: action.bound,
    //getShopTokenBalance: action.bound,

    //========= SET SHOP TOKEN BALANCE =========//
    setShopTokenBalance(shopTokenBalance: number) {
        this.shopTokenBalance = shopTokenBalance;
    }

    //========= GET SHOP TOKEN BALANCE =========//
    async getShopTokenBalance() {
        try {
            const provider = getProvider();
            const tokenContract = getTokenContract(provider);
            const balance = (await tokenContract.balanceOf(shopAddress)).toNumber();
            this.setShopTokenBalance(balance);
        } catch (e: any) {
            this.errorHandler(e)
        }
    }

    //========= SET CURRENT ACCOUNT TOKEN BALANCE =========//
    setCurrentAccountTokenBalance(currentAccountTokenBalance: number) {
        this.currentAccountTokenBalance = currentAccountTokenBalance
    }

    //========= GET CURRENT ACCOUNT TOKEN BALANCE =========//
    async getCurrentAccountTokenBalance() {
        try {
            if (this.currentAccountAddress) {
                const provider = getProvider();
                const tokenContract = getTokenContract(provider);
                const balance = (await tokenContract.balanceOf(this.currentAccountAddress)).toNumber();
                this.setCurrentAccountTokenBalance(balance);
            }
        } catch (e: any) {
            this.errorHandler(e)
        }
    }
}
