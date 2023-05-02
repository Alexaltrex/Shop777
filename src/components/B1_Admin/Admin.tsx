import React, {useEffect, useState} from "react";
import style from "./Admin.module.scss";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";
import {ethers} from "ethers";
import {useNavigate} from "react-router-dom";
import {chainId, getProvider, getShopContract, shopAddress} from "../../helpers/ethers.helper";
import {LinearProgress, Typography} from "@mui/material";
import {SetTokenPriceForSell} from "./SetTokenPriceForSell/SetTokenPriceForSell";
import {SetTokenPriceForBuy} from "./SetTokenPriceForBuy/SetTokenPriceForBuy";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import {Mint} from "./Mint/Mint";
import {Burn} from "./Burn/Burn";

export const Admin = observer(() => {
    const {
        cryptoStore: {
            loading, currentAccountAddress,
            shopOwner, errorHandler,
            shopBalance, getShopBalance,
            getTokenPriceForSell, getTokenPriceForBuy,
            tokenPriceForSell, tokenPriceForBuy,
            shopTokenBalance, getShopTokenBalance,
        }
    } = useStore();

    const navigate = useNavigate();
    useEffect(() => {
        if (
            !(currentAccountAddress && shopOwner && ethers.utils.getAddress(currentAccountAddress) === ethers.utils.getAddress(shopOwner))
        ) {
            navigate(-1);
        }
    }, []);

    //========= МОНТИРОВАНИЕ =========//
    useEffect(() => {
        const omMountHandler = async () => {
            if (window.ethereum) {
                const provider = getProvider();
                const network = await provider.getNetwork();

                // проверка совпадения сети в которой развернут смарт-контракт с той, к которой подключились
                if (network.chainId === chainId && currentAccountAddress) {
                    await getShopBalance();
                    await getTokenPriceForSell();
                    await getTokenPriceForBuy();
                }
            }
        }
        omMountHandler().then();
    }, [window.ethereum, currentAccountAddress]);

    const [localLoading, setLocalLoading] = useState(false);

    //========= WITHDRAW ALL =========//
    const onWithdrawHandler = async () => {
        try {
            if (currentAccountAddress) {
                setLocalLoading(true);
                const provider = getProvider();
                const shopContract = getShopContract(provider);
                const signer = provider.getSigner(currentAccountAddress);
                const tx = await shopContract.connect(signer).withdrawAll();
                await tx.wait();
                await getShopBalance();
            }
        } catch (e: any) {
            errorHandler(e);
        } finally {
            setLocalLoading(false);
        }
    }

    return (
        <div className={style.admin}>

            {
                loading &&
                <LinearProgress className={style.progress}
                                color="secondary"
                />
            }

            <Typography variant="h4" color="primary">
                Admin
            </Typography>

            <Typography variant="h5" color="primary">
                Manage your shop
            </Typography>

            <div className={style.borderBlock}>
                <div className={style.infoBlockColumn}>
                    <Typography className={style.label}>Shop address</Typography>
                    <Typography className={style.value}>{shopAddress}</Typography>
                </div>

                {
                    shopOwner &&
                    <div className={style.infoBlockColumn}>
                        <Typography className={style.label}>Shop owner</Typography>
                        <Typography className={style.value}>{shopOwner}</Typography>
                    </div>
                }

                {
                    shopBalance &&
                    <div className={style.infoBlockColumn}>
                        <Typography className={style.label}>Shop balance (wei)</Typography>
                        <Typography className={style.value}>{shopBalance}</Typography>
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

            <div className={style.borderBlock}>
                {
                    tokenPriceForSell &&
                    <div className={style.infoBlockColumn}>
                        <Typography className={style.label}>Token price for sell (wei)</Typography>
                        <Typography className={style.value}>{tokenPriceForSell}</Typography>
                    </div>
                }

                <SetTokenPriceForSell/>
            </div>

            <div className={style.borderBlock}>
                {
                    tokenPriceForBuy &&
                    <div className={style.infoBlockColumn}>
                        <Typography className={style.label}>Token price for buy (wei)</Typography>
                        <Typography className={style.value}>{tokenPriceForBuy}</Typography>
                    </div>
                }

                <SetTokenPriceForBuy/>
            </div>

            <div className={style.borderBlock}>
                <Mint/>
                <Burn/>
            </div>

            <Button variant="contained"
                    fullWidth
                    className={style.btn}
                    size="small"
                    color="warning"
                    onClick={onWithdrawHandler}
                    disabled={!window.ethereum || localLoading || Number(shopBalance) === 0}
            >
                <div className={style.preloaderWrapper}>
                    <p>Withdraw all</p>
                    {
                        localLoading &&
                        <div className={style.preloader}>
                            <CircularProgress color="success" size={25}/>
                        </div>
                    }
                </div>
            </Button>
        </div>
    )
})
