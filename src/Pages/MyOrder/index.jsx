import { useContext } from "react"
import { ShoppingCarContext } from "../../Context";
import { Layout } from "../../Components/Layout"
import { OrderCard } from "../../Components/OrderCard";

function MyOrder() {
const { order } = useContext(ShoppingCarContext);

  return (
    <>
      <Layout>
        MyOrder
        <div className='flex flex-col w-80'>
          {
            order?.slice(-1)[0]?.products.map(product => (
              <OrderCard
                key={product.id}
                id={product.id}
                title={product.title}
                imageUrl={product.images}
                price={product.price}
              />
            ))
          }
        </div>
      </Layout>
    </>
  )
}

export { MyOrder }