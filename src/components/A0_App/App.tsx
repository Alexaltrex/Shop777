import React, {useEffect} from 'react';
import style from "./App.module.scss";
import {Header} from "../A1_Header/Header";
import {CustomAlert} from "../X_common/CustomAlert/CustomAlert";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";
import {chainId, getProvider, getShopContract} from "../../helpers/ethers.helper";
import {Navigate, Route, Routes} from 'react-router-dom';
import {getRoutes} from "../A1_Header/routes";


export const App = observer(() => {
    const {
        cryptoStore: {
            currentAccountAddress, errorHandler,
            getShopOwner, shopOwner,
            getTokenPriceForSell, getTokenPriceForBuy,
            getShopTokenBalance,
        }
    } = useStore();

    // при изменении состояния смарт-контракта одним акккаунтом, другие обрабатывают это изменение через события
    // SellPriceChange: getTokenPriceForSell - обновить цену продажи
    // BuyPriceChange: getTokenPriceForBuy - обновить цену покупки
    // Buy, Sell, Mint, Burn: setShopTokenBalance - обновить баланс токенов магазина


    //========= ADD EVENT LISTENERS =========
    const addListener = async () => {
        try {
            if (window.ethereum) {
                const provider = getProvider();
                const contract = getShopContract(provider);
                const startBlockNumber = await provider.getBlockNumber();

                provider.on("error", (e) => console.log(e));

                // Sell Price Change
                // @ts-ignore
                contract.on("SellPriceChange", async (...args) => {
                    try {
                        const event = args[args.length - 1];
                        if (event.blockNumber > startBlockNumber) {
                            await getTokenPriceForSell();
                        }
                    } catch (e: any) {
                        errorHandler(e)
                    }
                });

                // Buy Price Change
                // @ts-ignore
                contract.on("BuyPriceChange", async (...args) => {
                    try {
                        const event = args[args.length - 1];
                        if (event.blockNumber > startBlockNumber) {
                            await getTokenPriceForBuy();
                        }
                    } catch (e: any) {
                        errorHandler(e)
                    }
                });

                // BUY
                // @ts-ignore
                contract.on("Buy", async (...args) => {
                    try {
                        const event = args[args.length - 1];
                        if (event.blockNumber > startBlockNumber) {
                            await getShopTokenBalance();
                        }
                    } catch (e: any) {
                        errorHandler(e)
                    }
                });

                // SELL
                // @ts-ignore
                contract.on("Buy", async (...args) => {
                    try {
                        const event = args[args.length - 1];
                        if (event.blockNumber > startBlockNumber) {
                            await getShopTokenBalance();
                        }
                    } catch (e: any) {
                        errorHandler(e)
                    }
                });

                // MINT
                // @ts-ignore
                contract.on("Mint", async (...args) => {
                    try {
                        const event = args[args.length - 1];
                        if (event.blockNumber > startBlockNumber) {
                            await getShopTokenBalance();
                        }
                    } catch (e: any) {
                        errorHandler(e)
                    }
                });

                // BURN
                // @ts-ignore
                contract.on("Burn", async (...args) => {
                    try {
                        const event = args[args.length - 1];
                        if (event.blockNumber > startBlockNumber) {
                            await getShopTokenBalance();
                        }
                    } catch (e: any) {
                        errorHandler(e)
                    }
                });
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
                    await getShopOwner();
                }
            }
        }
        omMountHandler().then();
    }, [window.ethereum]);

    return (
        <div className={style.app}>
            <Header/>
            <CustomAlert/>
            <main className={style.main}>
                <Routes>
                    {
                        getRoutes({currentAccountAddress, shopOwner})
                            .map(({path, element, condition}, key) => (
                                <Route key={key}
                                       path={path}
                                       element={condition ? element : <Navigate to="/" replace={true}/>}
                                />
                            ))
                    }
                </Routes>
            </main>
        </div>
    );
})

