import React from 'react'
import {AppStateType} from "./redux/redux-store";

type ProviderPropsType = {
    store: any
}

const StoreContext = React.createContext(null)

export const Provider: React.FC<ProviderPropsType> = ({
                                                          store,
                                                          children,
                                                      }) => {
    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreContext;