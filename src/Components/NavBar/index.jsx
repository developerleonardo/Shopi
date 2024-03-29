import { NavLink, useLocation } from "react-router-dom";
import { ShoppingCarContext } from "../../Context";
import { useContext, useEffect, useState } from "react";

const NavBar = () => {
    const {
        setSearchByCategory,
        account,
        cartProducts,
        signOut,
        setSignOut } = useContext(ShoppingCarContext)
    const activeStyle = 'underline underline-offset-4';
    const localtion =useLocation();

    // Sign Out
    const signOutOfLocalStorage = localStorage.getItem('sign-out');
    const parsedSignOut = JSON.parse(signOutOfLocalStorage);
    const isUserSignOut = signOut || parsedSignOut;
    // Account
    const accountInLocalStorage = localStorage.getItem('account')
    const parsedAccount = JSON.parse(accountInLocalStorage)
    // Has an account
    const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
    const noAccountInLocalState = account ? Object.keys(account).length === 0 : true
    const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState
    //Mobile Menu
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


    const handleSignOut = () => {
        const stringifiedSignOut = JSON.stringify(true)
        localStorage.setItem('sign-out', stringifiedSignOut)
        setSignOut(true)
    }

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const renderView = () => {
        if (hasUserAnAccount && !isUserSignOut) {
            return (
                <>
                    <li className='text-black/60'>
                        {parsedAccount?.email}
                    </li>
                    <li>
                        <NavLink
                            to='/my-orders'
                            className={({ isActive }) => isActive ? activeStyle : undefined}>
                            My Orders
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/my-account'
                            className={({ isActive }) => isActive ? activeStyle : undefined}>
                            My Account
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/sign-in'
                            className={({ isActive }) => isActive ? activeStyle : undefined}
                            onClick={() => handleSignOut()}>
                            Sign out
                        </NavLink>
                    </li>
                </>
            )
        } else {
            return (
                <li>
                    <NavLink
                        to="/sign-in"
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        onClick={() => handleSignOut()}>
                        Sign in
                    </NavLink>
                </li>
            )
        }
    }

    useEffect(() => {
        setIsMobileMenuOpen(false)
    }, [localtion]);

    return (
        <>
            <nav className="hidden lg:flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white">
                <ul className="flex items-center gap-3">
                    <li className="font-semibold text-lg">
                        <NavLink to={`${isUserSignOut ? '/sign-in' : '/'}`}>
                            Shopi
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/'
                            onClick={() => setSearchByCategory()}
                            className={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }>
                            All
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/men-clothes'
                            onClick={() => setSearchByCategory("men's clothing")}
                            className={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }>
                            Men's Clothes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/women-clothes'
                            onClick={() => setSearchByCategory("women's clothing")}
                            className={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }>
                            Women's Clothes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/electronics'
                            onClick={() => setSearchByCategory('electronics')}
                            className={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }>
                            Electronics
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/jewelery'
                            onClick={() => setSearchByCategory('jewelery')}
                            className={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }>
                            Jewelery
                        </NavLink>
                    </li>
                </ul>
                <ul className="flex items-center gap-3">
                    {renderView()}
                    <li className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        <div>
                            {cartProducts.length}
                        </div>
                    </li>
                </ul>
            </nav>


            <nav className="flex lg:hidden fixed z-10 top-0 w-full bg-white py-5 px-8 justify-between items-center">
                <div className="font-semibold text-lg">
                    <NavLink to={`${isUserSignOut ? '/sign-in' : '/'}`}>
                        Shopi
                    </NavLink>
                </div>
                <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                    <div>
                        {cartProducts.length}
                    </div>

                    <svg
                    onClick={() => {toggleMobileMenu()}} 
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
                {isMobileMenuOpen &&
                    <div className="bg-white w-full h-screen flex flex-col absolute top-full left-0 items-center  justify-around">
                        <ul className="flex flex-col items-center justify-center pb-3 border-b border-gray-500 gap-3 text-sm font-light">
                            <li>
                                <NavLink
                                    to='/'
                                    onClick={() => setSearchByCategory()}
                                    className={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }>
                                    All
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/men-clothes'
                                    onClick={() => setSearchByCategory("men's clothing")}
                                    className={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }>
                                    Men's Clothes
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/women-clothes'
                                    onClick={() => setSearchByCategory("women's clothing")}
                                    className={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }>
                                    Women's Clothes
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/electronics'
                                    onClick={() => setSearchByCategory('electronics')}
                                    className={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }>
                                    Electronics
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/jewelery'
                                    onClick={() => setSearchByCategory('jewelery')}
                                    className={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }>
                                    Jewelery
                                </NavLink>
                            </li>
                        </ul>
                        <ul className="flex flex-col items-center gap-3 text-sm font-light">
                            {renderView()}
                        </ul>
                    </div>
                }
            </nav>


        </>

    )
};

export { NavBar };