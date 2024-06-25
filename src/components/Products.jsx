import './Products.css'
import { AddToCartIcon } from "./Icons"

function Products({ products }) {
  return (
    <main className="products">
      <ul>
        {products &&
          products.map((product) => (
            <li key={product.id}>
              <img
                src={product.thumbnail}
                alt={product.title}
              />
              <div>
                <strong>{product.title} - ${product.price}</strong>
              </div>
              <button><AddToCartIcon /></button>
            </li>
          ))
        }
      </ul>
    </main>
  )
}

export default Products