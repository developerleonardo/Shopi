import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ShoppingCarContext } from "../../Context";
import { Layout } from "../../Components/Layout";
import { OrderCard } from "../../Components/OrderCard";

function MyOrder() {
  const { order } = useContext(ShoppingCarContext);
  const { id } = useParams(); // Use useParams to get the dynamic route parameter
  let index = id === "last" ? order?.length - 1 : Number(id);

  // Check if `order` is available and the `index` is valid
  if (!order || isNaN(index) || index < 0 || index >= order.length) {
    return (
      <Layout>
        <div className="text-center text-red-500">
          Order not found or invalid order index.
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-6">
        <Link to="/my-orders" className="absolute left-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-black cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </Link>
        <h1 className="font-medium text-xl">My Order</h1>
      </div>
      <div className="flex flex-col w-80">
        {order[index].products.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.image}
            price={product.price}
          />
        ))}
      </div>
    </Layout>
  );
}

export { MyOrder };
