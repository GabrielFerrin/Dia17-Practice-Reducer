import { products as initialProducts } from "./mocks/products.json"
import Products from "./components/Products"
import { useState } from "react"

function App() {
  const [products] = useState(initialProducts)
  const [filer] = useState({
    category: "beauty",
    price: 10,
  })

  const filteredProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filer.price &&
        (
          filer.category === "all" ||
          product.category === filer.category
        )
      )
    })
  }

  const filtered = filteredProducts(products)
  return (
    <>
      <Products products={filtered} />
    </>
  )
}

export default App
