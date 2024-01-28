import { createContext, useState } from "react";

const ShoppingCarContext = createContext();

const ShoppingCarProvider = ({children}) => {
    // Shopping Cart increment quantity
    const [count, setCount] = useState(0);

    //Product Detail - Open / Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    //Checkout Side Menu - Open / Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

     //Product Detail - Show Product
     const [productToShow, setProductToShow] = useState({});
     //Shopping Cart - Add products to cart
     const [cartProducts, setCartProducts] = useState([]);
     console.log('Cart: ', cartProducts);

    return(
        <ShoppingCarContext.Provider 
        value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu
        }}>
            { children }
        </ShoppingCarContext.Provider>
        
    )
}

export { ShoppingCarContext, ShoppingCarProvider };