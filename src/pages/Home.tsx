import { jsx } from 'hono/jsx'
import { MainLayout } from '../layouts/MainLayout.js'
import { products } from '../data/products.js'

const ProductCard = (props: { product: any }) => (
  <div class="product-card">
    <div class="product-image-box">
      {props.product.oldPrice && <span class="product-badge">Sale!</span>}
      <a href={`/product/${props.product.id}`}>
        <img src={props.product.image} alt={props.product.name} />
      </a>
    </div>
    <div class="product-content">
      <h3>{props.product.name}</h3>
      <div class="product-price-box">
        <span class="price-new">
          <span class="price-unit">৳</span>{props.product.price}
        </span>
      </div>
      <a href={`/product/${props.product.id}`} class="btn-details">
        বিস্তারিত দেখুন
      </a>
    </div>
  </div>
)

export const Home = () => {
  return (
    <MainLayout>
      <div class="container">
        <div class="page-title-section">
          <h1>লিভিং রুম ফার্নিচার</h1>
        </div>
        
        {/* We can group by category if needed, but the Target site Home is a large grid */}
        <div class="product-grid">
          {products.map(p => <ProductCard product={p} />)}
        </div>
      </div>
    </MainLayout>
  )
}
