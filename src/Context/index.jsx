import { createContext, useState } from "react";

const ShoppingCarContext = createContext();

const ShoppingCarProvider = ({children}) => {
    const [count, setCount] = useState(0);

    return(
        <ShoppingCarContext.Provider 
        value={{
            count,
            setCount
        }}>
            { children }
        </ShoppingCarContext.Provider>
        
    )
}

export { ShoppingCarContext, ShoppingCarProvider };