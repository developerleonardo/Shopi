import { createContext, useState } from "react";

const ShoppingCarContext = createContext();

const ShoppingCarProvider = ({children}) => {
    // Shopping Cart increment quantity
    const [count, setCount] = useState(0);

    //Product Detail - Open / Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

    //Product Detail - Show Product
    const [productToShow, setProductToShow] = useState({});

    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    return(
        <ShoppingCarContext.Provider 
        value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow
        }}>
            { children }
        </ShoppingCarContext.Provider>
        
    )
}

export { ShoppingCarContext, ShoppingCarProvider };