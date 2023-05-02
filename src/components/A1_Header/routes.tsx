import React from "react";
import {ethers} from "ethers";
import { Shop } from "../B0_Shop/Shop";
import {Admin} from "../B1_Admin/Admin";
import {Logs} from "../B2_Logs/Logs";

export interface IGetRoutes {
    currentAccountAddress: string | null
    shopOwner: string | null
}

export const getRoutes = ({
                              currentAccountAddress,
                              shopOwner
}: IGetRoutes) => ([
    {
        path: "/",
        label: "Shop",
        element: <Shop/>,
        condition: true,
    },
    {
        path: "/admin",
        label: "Admin",
        element: <Admin/>,
        condition: currentAccountAddress && shopOwner && ethers.utils.getAddress(currentAccountAddress) === ethers.utils.getAddress(shopOwner),
    },
    {
        path: "/logs",
        label: "Logs",
        element: <Logs/>,
        condition: true,
    },
]);
