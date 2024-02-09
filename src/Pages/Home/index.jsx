import { useContext, useEffect } from "react"
import { ShoppingCarContext } from "../../Context";
import { Layout } from "../../Components/Layout"
import { Card } from "../../Components/Card"
import { Loading } from "../Loading";
import { ProductDetail } from "../../Components/ProductDetail";

function Home() {
  const {
    setSearchByTitle,
    filteredItems,
    loading,
    setLoading,
  } = useContext(ShoppingCarContext);

  useEffect(() => {
    if (filteredItems?.length > 0) {
      setLoading(false);
    }
  })

  const renderView = () => {
    if (filteredItems?.length > 0) {
      return (
        filteredItems?.map(item => (
          <Card key={item.id} data={item} />
        ))
      )
    } else {
      return (
        <div>No results found</div>
      )
    }
  };

  return (
    <>
      <Layout>
        <div className="flex items-center justify-center relative w-80 mb-4">
          <h1 className="font-medium text-xl">Exclusive Produtcs</h1>
        </div>
        <input
          type="text"
          placeholder="Search a product"
          className="rounded-lg border-2 border-black w-80 p-4 mb-4 focus:outline-stone-400"
          onChange={(event) => setSearchByTitle(event.target.value)} />
        {!loading &&
          <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
            {renderView()}
          </div>
        }
        {loading && 
        <div className="flex items-center justify-center w-full h-[480px]">
          <Loading />
        </div>
        }
        <ProductDetail />
      </Layout>
    </>
  )
}

export { Home }