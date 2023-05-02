import React, {useEffect, useState} from "react";
import style from "./SellTokens.module.scss";
import {CircularProgress, Typography} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useStore} from "../../../store/useStore";
import {FormikHelpers, useFormik} from "formik";
import {getProvider, getShopContract} from "../../../helpers/ethers.helper";
import {observer} from "mobx-react-lite";

interface IValues {
    count: number
}

export const SellTokens = observer(() => {
    const {
        cryptoStore: {
            errorHandler, currentAccountAddress,
            getShopTokenBalance, getCurrentAccountTokenBalance,
            getCurrentAccountBalance, tokenPriceForSell
        }
    } = useStore();

    const [sellLoading, setSellLoading] = useState(false);

    const initialValues: IValues = {
        count: 1
    }

    const onSubmit = async ({count}: IValues, formikHelpers: FormikHelpers<IValues>) => {
        try {
            if (window.ethereum && currentAccountAddress) {
                setSellLoading(true);
                const provider = getProvider();
                const shopContract = getShopContract(provider);
                const signer = provider.getSigner(currentAccountAddress);

                // продаем токены магазину
                const sellTx = await shopContract
                    .connect(signer)
                    .sellTokensToShop(count);
                await sellTx.wait();

                await getShopTokenBalance(); // баланс токенов магазина
                await getCurrentAccountTokenBalance(); // баланс токенов покупателя
                await getCurrentAccountBalance(currentAccountAddress); // баланс покупателя
            }

        } catch (e) {
            errorHandler(e);
        } finally {
            setSellLoading(false);
            formikHelpers.resetForm();
        }
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
    });

    const [value, setValue] = useState(1);

    return (
        <div className={style.sellTokens}>

            {
                tokenPriceForSell && (
                    <Typography className={style.label}>
                        Sell tokens <span>(x10</span><span className={style.sup}>-18</span><span>)</span> for <span
                        className={style.price}>{new Intl.NumberFormat('ru-RU').format(value * tokenPriceForSell)}</span> wei
                    </Typography>
                )

            }
            <form onSubmit={formik.handleSubmit}
                  className={style.form}
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
                           disabled={!window.ethereum || sellLoading}
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
                        disabled={!window.ethereum || sellLoading}
                        size="small"
                        color="secondary"
                        disableElevation
                >
                    <div className={style.preloaderWrapper}>
                        <p>sell</p>
                        {
                            sellLoading &&
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
