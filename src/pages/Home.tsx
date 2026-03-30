/** @jsx jsx */
import { jsx } from 'hono/jsx'
import { MainLayout } from '../layouts/MainLayout.js'
import { products } from '../data/products.js'

export const Home = () => {
  return (
    <MainLayout title="Islamic Furniture - Home">
      <section class="hero">
        <h1>Islamic Furniture - Premium Designs</h1>
        <p>Explore our wide collection of high-quality furniture, including Sofa Sets, Bedroom Furniture, and more.</p>
        <a href="#products" class="btn">Shop Now</a>
      </section>

      <section id="products" class="category-grid">
        {products.map(product => (
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
