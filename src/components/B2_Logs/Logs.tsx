import React, {useEffect, useState} from "react";
import style from "./Logs.module.scss";
import {Typography} from "@mui/material";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";
import {
    BuySellShopLogUnhandledType,
    IBuyFromShopLog,
    IMintLog,
    IPriceLog,
    ISellToShopLog, MintLogUnhandledType,
    PriceLogUnhandledType
} from "../../types/logs.type";
import {chainId, getProvider, getShopContract} from "../../helpers/ethers.helper";
import {
    buyFromShopLogArgsHandler,
    mintLogArgsHandler,
    priceLogArgsHandler,
    sellToShopLogArgsHandler
} from "../../helpers/logs.helpers";
import {LogsTable} from "./LogsTable/LogsTable";

export const Logs = observer(() => {
    const {cryptoStore: {errorHandler}} = useStore();

    const [buyPriceLogs, setBuyPriceLogs] = useState<IPriceLog[]>([]);
    const [sellPriceLogs, setSellPriceLogs] = useState<IPriceLog[]>([]);
    const [buyFromShopLogs, setBuyFromShopLogs] = useState<IBuyFromShopLog[]>([]);
    const [sellToShopLogs, setSellToShopLogs] = useState<ISellToShopLog[]>([]);
    const [mintLogs, setMintLogs] = useState<IMintLog[]>([]);
    const [burnLogs, setBurnLogs] = useState<IMintLog[]>([]);

    //========= GET BUY PRICE LOGS =========//
    const getBuyPriceLogs = async () => {
        try {
            if (window.ethereum) {
                const provider = getProvider();
                const contract = getShopContract(provider);
                const filter = contract.filters.BuyPriceChange();
                const logs = await contract.queryFilter(filter);
                setBuyPriceLogs(logs.map(({args}: { args: PriceLogUnhandledType }) => priceLogArgsHandler(args)))
            }
        } catch (e: any) {
            errorHandler(e)
        }
    }

    //========= GET SELL PRICE LOGS =========//
    const getSellPriceLogs = async () => {
        try {
            if (window.ethereum) {
                const provider = getProvider();
                const contract = getShopContract(provider);
                const filter = contract.filters.SellPriceChange();
                const logs = await contract.queryFilter(filter);
                setSellPriceLogs(logs.map(({args}: { args: PriceLogUnhandledType }) => priceLogArgsHandler(args)))
            }
        } catch (e: any) {
            errorHandler(e)
        }
    }

    //========= GET BUY FROM SHOP LOGS =========//
    const getBuyFromShopLogs = async () => {
        try {
            if (window.ethereum) {
                const provider = getProvider();
                const contract = getShopContract(provider);
                const filter = contract.filters.Buy();
                const logs = await contract.queryFilter(filter);
                setBuyFromShopLogs(logs.map(({args}: { args: BuySellShopLogUnhandledType }) => buyFromShopLogArgsHandler(args)))
            }
        } catch (e: any) {
            errorHandler(e)
        }
    }

    //========= GET SELL TO SHOP LOGS =========//
    const getSellToShopLogs = async () => {
        try {
            if (window.ethereum) {
                const provider = getProvider();
                const contract = getShopContract(provider);
                const filter = contract.filters.Sell();
                const logs = await contract.queryFilter(filter);
                setSellToShopLogs(logs.map(({args}: { args: BuySellShopLogUnhandledType }) => sellToShopLogArgsHandler(args)))
            }
        } catch (e: any) {
            errorHandler(e)
        }
    }

    //========= GET MINT LOGS =========//
    const getMintLogs = async () => {
        try {
            if (window.ethereum) {
                const provider = getProvider();
                const contract = getShopContract(provider);
                const filter = contract.filters.Mint();
                const logs = await contract.queryFilter(filter);
                setMintLogs(logs.map(({args}: { args: MintLogUnhandledType }) => mintLogArgsHandler(args)))
            }
        } catch (e: any) {
            errorHandler(e)
        }
    }

    //========= GET BURN LOGS =========//
    const getBurnLogs = async () => {
        try {
            if (window.ethereum) {
                const provider = getProvider();
                const contract = getShopContract(provider);
                const filter = contract.filters.Burn();
                const logs = await contract.queryFilter(filter);
                setBurnLogs(logs.map(({args}: { args: MintLogUnhandledType }) => mintLogArgsHandler(args)))
            }
        } catch (e: any) {
            errorHandler(e)
        }
    }

    //========= ADD EVENT LISTENERS =========
    const addListener = async () => {
        try {
            if (window.ethereum) {
                const provider = getProvider();
                const shopContract = getShopContract(provider);
                const startBlockNumber = await provider.getBlockNumber();

                provider.on("error", (e) => console.log(e));

                // @ts-ignore
                shopContract.on("BuyPriceChange", async (...args) => {
                    try {
                        const event = args[args.length - 1];
                        if (event.blockNumber > startBlockNumber) {
                            await getBuyPriceLogs();
                        }
                    } catch (e: any) {
                        errorHandler(e)
                    }
                })

                // @ts-ignore
                shopContract.on("SellPriceChange", async (...args) => {
                    try {
                        const event = args[args.length - 1];
                        if (event.blockNumber > startBlockNumber) {
                            await getSellPriceLogs();
                        }
                    } catch (e: any) {
                        errorHandler(e)
                    }
                })

                // @ts-ignore
                shopContract.on("Buy", async (...args) => {
                    try {
                        const event = args[args.length - 1];
                        if (event.blockNumber > startBlockNumber) {
                            await getBuyFromShopLogs();
                        }
                    } catch (e: any) {
                        errorHandler(e)
                    }
                })

                // @ts-ignore
                shopContract.on("Sell", async (...args) => {
                    try {
                        const event = args[args.length - 1];
                        if (event.blockNumber > startBlockNumber) {
                            await getSellToShopLogs();
                        }
                    } catch (e: any) {
                        errorHandler(e)
                    }
                })

                // @ts-ignore
                shopContract.on("Mint", async (...args) => {
                    try {
                        const event = args[args.length - 1];
                        if (event.blockNumber > startBlockNumber) {
                            await getMintLogs();
                        }
                    } catch (e: any) {
                        errorHandler(e)
                    }
                })

                // @ts-ignore
                shopContract.on("Burn", async (...args) => {
                    try {
                        const event = args[args.length - 1];
                        if (event.blockNumber > startBlockNumber) {
                            await getBurnLogs();
                        }
                    } catch (e: any) {
                        errorHandler(e)
                    }
                })

            }
        } catch (e: any) {
            errorHandler(e)
        }
    }

    //========= МОНТИРОВАНИЕ =========//
    useEffect(() => {
        const omMountHandler = async () => {
            if (window.ethereum) {
                const provider = getProvider();
                const network = await provider.getNetwork();

                // проверка совпадения сети в которой развернут смарт-контракт с той, к которой подключились
                if (network.chainId === chainId) {
                    await addListener();
                    await getSellPriceLogs();
                    await getBuyPriceLogs();
                    await getBuyFromShopLogs();
                    await getSellToShopLogs();
                    await getMintLogs();
                    await getBurnLogs();
                }
            }
        }
        omMountHandler().then();
    }, [window.ethereum]);

    return (
        <div className={style.logs}>

            <Typography variant="h4" color="primary">
                Logs
            </Typography>

            <LogsTable tableLibel="Buy From Shop Price Change"
                       headerLabels={["oldValue", "newValue", "timestamp"]}
                        // @ts-ignore
                       logs={buyPriceLogs}
                       headerClassName="header_price"
                       rowClassName="row_price"
            />

            <LogsTable tableLibel="Sell To Shop Price Change"
                       headerLabels={["oldValue", "newValue", "timestamp"]}
                        // @ts-ignore
                       logs={sellPriceLogs}
                       headerClassName="header_price"
                       rowClassName="row_price"
            />

            <LogsTable tableLibel="Buy From Shop"
                       headerLabels={["buyer", "amount, x10-18", "price", "timestamp"]}
                // @ts-ignore
                       logs={buyFromShopLogs}
                       headerClassName="header_buy_sell_shop"
                       rowClassName="row_buy_sell_shop"
            />

            <LogsTable tableLibel="Sell To Shop"
                       headerLabels={["seller", "amount, x10-18", "price", "timestamp"]}
                        // @ts-ignore
                       logs={sellToShopLogs}
                       headerClassName="header_buy_sell_shop"
                       rowClassName="row_buy_sell_shop"
            />

            <LogsTable tableLibel="Mint"
                       headerLabels={["amount, x10-18", "timestamp"]}
                        // @ts-ignore
                       logs={mintLogs}
                       headerClassName="header_mint"
                       rowClassName="row_mint"
            />

            <LogsTable tableLibel="Burn"
                       headerLabels={["amount, x10-18", "timestamp"]}
                        // @ts-ignore
                       logs={burnLogs}
                       headerClassName="header_mint"
                       rowClassName="row_mint"
            />

        </div>
    )
})
