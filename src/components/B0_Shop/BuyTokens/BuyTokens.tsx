import {CircularProgress, Typography} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, {useState} from "react";
import style from "./BuyTokens.module.scss";
import {FormikHelpers, useFormik} from "formik";
import {getProvider, getShopContract} from "../../../helpers/ethers.helper";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/useStore";

interface IValues {
    count: number
}

export const BuyTokens = observer(() => {
    const {
        cryptoStore: {
            currentAccountAddress, errorHandler,
            getShopTokenBalance, getCurrentAccountBalance,
            getCurrentAccountTokenBalance, tokenPriceForBuy,

        }
    } = useStore();

    const [buyLoading, setBuyLoading] = useState(false);
    const initialValues: IValues = {
        count: 1
    }
    const onSubmit = async ({count}: IValues, formikHelpers: FormikHelpers<IValues>) => {
        try {
            if (window.ethereum && currentAccountAddress) {
                setBuyLoading(true);
                const provider = getProvider();
                const shopContract = getShopContract(provider);
                const signer = provider.getSigner(currentAccountAddress);
                const tokenPrice = (await shopContract.getTokenPriceForBuy()).toNumber(); // цена токена в wei

                // пересылаемое от текущего аккаунта в магазин количество денег необходимое для покуптки count токенов
                const value = count * tokenPrice;

                const tx = await shopContract
                    .connect(signer)
                    .buyTokensFromShop({value});
                await tx.wait(); // ждем ее завершения

                await getShopTokenBalance(); // баланс токенов магазина
                await getCurrentAccountTokenBalance(); // баланс токенов покупателя
                await getCurrentAccountBalance(currentAccountAddress); // баланс покупателя
            }
        } catch (e: any) {
            errorHandler(e);
        } finally {
            formikHelpers.resetForm();
            setBuyLoading(false);
        }
    }
    const formik = useFormik({
        initialValues,
        onSubmit,
    });

    const [value, setValue] = useState(1);

    return (
        <div className={style.buyTokens}>

            {
                tokenPriceForBuy && (
                    <Typography className={style.label}>
                        Buy tokens <span>(x10</span><span className={style.sup}>-18</span><span>)</span>  for <span className={style.price}>{new Intl.NumberFormat('ru-RU').format(value * tokenPriceForBuy)}</span> wei
                    </Typography>
                )

            }

            <form onSubmit={formik.handleSubmit}
                  className={style.buyForm}
            >
                <TextField fullWidth
                           size="small"
                           type="number"
                           inputProps={{
                               min: 1
                           }}
                           {...formik.getFieldProps('count')}
                           onChange={(e) => {
                               formik.handleChange(e);
                               setValue(Number(e.target.value))
                           }}
                           disabled={!window.ethereum || buyLoading}
                           className={style.field}
                           sx={{
                               "& .MuiOutlinedInput-notchedOutline": {
                                   border: "none"
                               }
                           }}
                />

                <Button type="submit"
                        variant="contained"
                        fullWidth
                        className={style.buyBtn}
                        disabled={!window.ethereum || buyLoading}
                        size="small"
                        color="secondary"
                        disableElevation
                >
                    <div className={style.preloaderWrapper}>
                        <p>buy</p>
                        {
                            buyLoading &&
                            <div className={style.preloader}>
                                <CircularProgress color="success" size={25}/>
                            </div>
                        }
                    </div>
                </Button>
            </form>
        </div>
    )
})
