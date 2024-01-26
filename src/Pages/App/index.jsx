import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCarProvider } from '../../Context'
import { Home } from '../Home'
import { MyAccount } from '../MyAccount'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { NotFound } from '../NotFound'
import { SignIn } from '../Signin'
import { NavBar } from '../../Components/NavBar'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ]);

  return routes;
}

const App = () => {
  return (
    <>
      <ShoppingCarProvider>
        <BrowserRouter>
          <AppRoutes />
          <NavBar />
        </BrowserRouter>
      </ShoppingCarProvider>
    </>
  )
}

export default App
