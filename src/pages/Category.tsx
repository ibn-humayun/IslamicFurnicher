/** @jsx jsx */
import { jsx } from 'hono/jsx'
import { MainLayout } from '../layouts/MainLayout.js'
import { products } from '../data/products.js'

export const Category = (props: { id: string }) => {
  const categoryName = props.id.charAt(0).toUpperCase() + props.id.slice(1)
  const filteredProducts = products.filter(p => p.category === props.id)
  
  return (
    <MainLayout title={`Islamic Furniture - ${categoryName} Collection`}>
      <section class="hero">
        <h1>{categoryName} Collection</h1>
        <p>Premium {categoryName} Furniture for your home.</p>
      </section>

      <section class="category-grid">
        {filteredProducts.map(product => (
          <div class="product-card">
            <img src={product.image} alt={product.name} />
            <div class="product-card-body">
              <h3>{product.name}</h3>
              <p class="price">৳ {product.price}</p>
              <a href={`/product/${product.slug}`} class="btn">View Details</a>
            </div>
          </div>
        ))}
      </section>
    </MainLayout>
  )
}
