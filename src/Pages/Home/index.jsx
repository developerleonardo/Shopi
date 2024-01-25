import { useState, useEffect } from "react"
import { Layout } from "../../Components/Layout"
import { Card } from "../../Components/Card"
import { apiUrl } from "../../api";

function Home() {
  const [items, setItems] = useState(null);

  /* Si quiero usar el mismo código de la clase tengo que eliminar el import apiUrl así como esa carpeta y descomentar este código
  
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItems(data))
  }, []) */


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



  return (
    <>
      <Layout>
        Home
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
          {
            items?.map(item => (
              <Card key={item.id} data={item} />
            ))
          }
        </div>
      </Layout>
    </>
  )
}

export { Home }