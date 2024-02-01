import { createContext, useState, useEffect } from "react";
import { apiUrl } from "../api";

const ShoppingCarContext = createContext();

const ShoppingCarProvider = ({ children }) => {
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

    // Shopping Cart - Order

    const [order, setOrder] = useState([]);

    //Get Products from the API
    const [items, setItems] = useState(null);
    const [filteredItems, setFilteredItems] = useState(null);

    // Get products by title
    const [searchByTitle, setSearchByTitle] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`${apiUrl}/products`)
            const data = await response.json()
            setItems(data);
          } catch (error) {
            console.error(`Something went wrong: ${error}`);
          }
        }
        fetchData()
      }, [])

      const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
      }

      useEffect(() => {
        if (searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
      }, [items, searchByTitle]);

    return (
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
                closeCheckoutSideMenu,
                order,
                setOrder,
                items,
                setItems,
                searchByTitle,
                setSearchByTitle,
                filteredItems
            }}>
            {children}
        </ShoppingCarContext.Provider>

    )
}

export { ShoppingCarContext, ShoppingCarProvider };