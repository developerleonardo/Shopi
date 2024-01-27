import { createContext, useState } from "react";

const ShoppingCarContext = createContext();

const ShoppingCarProvider = ({children}) => {
    const [count, setCount] = useState(0);
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    return(
        <ShoppingCarContext.Provider 
        value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen
        }}>
            { children }
        </ShoppingCarContext.Provider>
        
    )
}

export { ShoppingCarContext, ShoppingCarProvider };