import React, {useEffect} from "react";
import style from "./Shop.module.scss";
import {observer} from "mobx-react-lite";
import {chainId, getProvider} from "../../helpers/ethers.helper";
import {useStore} from "../../store/useStore";
import {LinearProgress, Typography} from "@mui/material";
import {BuyTokens} from "./BuyTokens/BuyTokens";
import {SellTokens} from "./SellTokens/SellTokens";

export const Shop = observer(() => {
    const {
        cryptoStore: {
            currentAccountAddress, loading, errorHandler,
            tokenPriceForBuy, getTokenPriceForBuy,
            tokenPriceForSell, getTokenPriceForSell,
            currentAccountTokenBalance, getCurrentAccountTokenBalance,
            balance, getCurrentAccountBalance,
            shopTokenBalance, getShopTokenBalance,
        }
    } = useStore();

    //========= МОНТИРОВАНИЕ =========//
    useEffect(() => {
        const omMountHandler = async () => {
            if (window.ethereum) {
                const provider = getProvider();
                const network = await provider.getNetwork();

                // проверка совпадения сети в которой развернут смарт-контракт с той, к которой подключились
                if (network.chainId === chainId) {
                    await getTokenPriceForBuy();
                    await getTokenPriceForSell();
                    await getShopTokenBalance();
                    await getCurrentAccountTokenBalance();
                    currentAccountAddress && await getCurrentAccountBalance(currentAccountAddress);
                }
            }
        }
        omMountHandler().then();
    }, [window.ethereum, currentAccountAddress]);

    return (
        <div className={style.shop}>

            {
                loading &&
                <LinearProgress className={style.progress}
                                color="secondary"
                />
            }

            <Typography variant="h4" color="primary">
                Shop
            </Typography>

            <Typography variant="h5" color="primary">
                Buy or sell ERC777 "Lucky Number Token"
            </Typography>

            <div className={style.borderBlock}>
                <Typography variant="h6" align="center" className={style.blockTitle}>
                    Shop
                </Typography>


                {
                    tokenPriceForBuy &&
                    <div className={style.infoBlockColumn}>
                        <Typography className={style.label}>Token price for buy (amount of wei for 1 wei of token)</Typography>
                        <Typography className={style.value}>{tokenPriceForBuy}</Typography>
                    </div>
                }

                {
                    tokenPriceForSell &&
                    <div className={style.infoBlockColumn}>
                        <Typography className={style.label}>Token price for sell (amount of wei for 1 wei of token)</Typography>
                        <Typography className={style.value}>{tokenPriceForSell}</Typography>
                    </div>
                }

                {
                    shopTokenBalance &&
                    <div className={style.infoBlockColumn}>
                        <Typography className={style.label}>Shop token balance</Typography>
                        <Typography className={style.value}>
                            {new Intl.NumberFormat('ru-RU').format(shopTokenBalance)} <span>x10</span><span className={style.sup}>-18</span>
                        </Typography>
                    </div>
                }

            </div>

            {
                currentAccountAddress && (typeof currentAccountTokenBalance === "number") && typeof balance === "string" && (
                    <div className={style.borderBlock}>
                        <Typography variant="h6" align="center" className={style.blockTitle}>
                            Account
                        </Typography>

                        <div className={style.infoBlockColumn}>
                            <Typography className={style.label}>Current account ether balance</Typography>
                            <Typography className={style.value}>
                                {balance} <span>x10</span><span className={style.sup}>-18</span>
                            </Typography>
                        </div>

                        <div className={style.infoBlockColumn}>
                            <Typography className={style.label}>Current account token balance</Typography>
                            <Typography className={style.value}>
                                {new Intl.NumberFormat('ru-RU').format(currentAccountTokenBalance)} <span>x10</span><span className={style.sup}>-18</span>
                            </Typography>
                        </div>

                        <BuyTokens/>

                        <SellTokens/>
                    </div>
                )

            }






        </div>
    )
})
