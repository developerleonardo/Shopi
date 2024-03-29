import { useContext } from 'react'
import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom'
import { ShoppingCarProvider, ShoppingCarContext, initializeLocalStorage } from '../../Context'
import { Home } from '../Home'
import { MyAccount } from '../MyAccount'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { NotFound } from '../NotFound'
import { SignIn } from '../SignIn'
import { NavBar } from '../../Components/NavBar'
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu'
import './App.css'



const AppRoutes = () => {
  const { 
    account,
    signOut } = useContext(ShoppingCarContext)
  // Sign Out
  const signOutOfLocalStorage = localStorage.getItem('sign-out');
  const parsedSignOut = JSON.parse(signOutOfLocalStorage);
  // Account
  const accountInLocalStorage = localStorage.getItem('account')
  const parsedAccount = JSON.parse(accountInLocalStorage)
  // Has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = account ? Object.keys(account).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState
  const isUserSignOut = signOut || parsedSignOut;

  let routes = useRoutes([
    { path: '/', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/men-clothes', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/women-clothes', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/electronics', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/jewelery', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ]);

  return routes;
}

const App = () => {
  initializeLocalStorage();
  
  return (
    <>
      <ShoppingCarProvider>
        <BrowserRouter>
          <AppRoutes />
          <NavBar />
          <CheckoutSideMenu />
        </BrowserRouter>
      </ShoppingCarProvider>
    </>
  )
}

export default App
