import { useContext } from 'react';
import { ShoppingCarContext } from '../../Context';
import './styles.css'

const CheckoutSideMenu = () => {
    const { 
        isCheckoutSideMenuOpen,
        closeCheckoutSideMenu
     } = useContext(ShoppingCarContext);

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
        </aside>
    )
};

export { CheckoutSideMenu };