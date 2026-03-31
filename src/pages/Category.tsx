import { jsx } from 'hono/jsx'
import { MainLayout } from '../layouts/MainLayout.js'
import { products } from '../data/products.js'

export const Category = (props: { id: string }) => {
  const categoryProducts = products.filter(p => p.category.toLowerCase() === props.id.toLowerCase())
  
  return (
    <MainLayout title={`${props.id} – Islamic Furniture`}>
      <div class="container">
        <div class="page-title-section">
          <h1>{props.id} Furniture</h1>
        </div>
        
        <div class="product-grid">
          {categoryProducts.map(product => (
            <div class="product-card">
              <div class="product-image-box">
                {product.oldPrice && <span class="product-badge">Sale!</span>}
                <a href={`/product/${product.id}`}>
                  <img src={product.image} alt={product.name} />
                </a>
              </div>
              <div class="product-content">
                <h3>{product.name}</h3>
                <div class="product-price-box">
                  <span class="price-new">
                    <span class="price-unit">৳</span>{product.price}
                  </span>
                </div>
                <a href={`/product/${product.id}`} class="btn-details">
                  বিস্তারিত দেখুন
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  )
}
