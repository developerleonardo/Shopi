import { useContext } from "react"
import { Link } from "react-router-dom"
import { ShoppingCarContext } from "../../Context"
import { Layout } from "../../Components/Layout"
import { OrdersCard } from "../../Components/OrdersCard"

function MyOrders() {
  const { order } = useContext(ShoppingCarContext)

  return (
    <>
      <Layout>
        <div className="flex items-center justify-center relative w-80">
          <h1 className="font-medium text-xl">My Orders</h1>
        </div>

        {
          order.map((order, index) =>
          (
            <Link key={index} to={`/my-orders/${index}`}>
              <OrdersCard
                date={order.date}
                totalPrice={order.totalPrice}
                totalProducts={order.totalProducts}
              />
            </Link>
          )
          )
        }
      </Layout>
    </>
  )
}

export { MyOrders }