import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCarContext } from '../../Context'
import { OrderCard } from '../OrderCard';
import { totalPrice } from '../../utils';
import './styles.css'

const CheckoutSideMenu = () => {
    const {
        isCheckoutSideMenuOpen,
        closeCheckoutSideMenu,
        cartProducts,
        setCartProducts,
        order,
        setOrder,
        setCount,
        setSearchByTitle,
        setSearchByCategory
    } = useContext(ShoppingCarContext);

    const handleDelete = (id) => {
        const filteredProducts = cartProducts.filter(product => product.id !== id);
        setCartProducts(filteredProducts);
    };

    const handleCheckout = () => {
        const date = new Date()

        const orderToAdd = {
            date: date.toLocaleDateString(),
            products: cartProducts,
            totalProducts: cartProducts.length,
            totalPrice: totalPrice(cartProducts)
        }

        setOrder([...order, orderToAdd]);
        setCartProducts([]);
        closeCheckoutSideMenu();
        setSearchByTitle(null);
        setSearchByCategory(null);

    }

    return (
        <aside
            className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div
                    onClick={() => { closeCheckoutSideMenu() }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
                {
                    cartProducts.map(product => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.image}
                            price={product.price}
                            handleDelete={handleDelete}
                        />
                    ))
                }
            </div>
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-2xl'>${totalPrice(cartProducts)}</span>
                </p>
                <Link to='/my-orders/last'>
                    <button className='bg-black py-3 text-white w-full rounded-lg' onClick={() => handleCheckout()}>Checkout</button>
                </Link>
            </div>
        </aside>
    )
};

export { CheckoutSideMenu };