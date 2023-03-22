import React from 'react'
import store, {StoreType} from "./redux/redux-store";

type ProviderPropsType = {
    store: StoreType
}

const StoreContext = React.createContext(store)

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