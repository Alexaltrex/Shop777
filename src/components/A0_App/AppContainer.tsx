import {rootStore, RootStore} from "../../store/RootStore";
import React, {createContext} from "react";
import {HashRouter} from "react-router-dom";
import {App} from "./App";

export const StoreContext = createContext<RootStore>({} as RootStore);

export const AppContainer = () => {
    return (
            <StoreContext.Provider value={rootStore}>
                <HashRouter>
                    <App/>
                </HashRouter>
            </StoreContext.Provider>
    )
}
