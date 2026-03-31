import { jsx } from 'hono/jsx'
import { MainLayout } from '../layouts/MainLayout.js'
import { products } from '../data/products.js'

export const Product = (props: { id: string }) => {
  const product = products.find(p => p.id === props.id)
  if (!product) return <div>Product Not Found</div>

  return (
    <MainLayout title={`${product.name} – Islamic Furniture`}>
      <div class="product-landing">
        <section class="hero-section">
          <div class="container">
            <img src={product.image} alt={product.name} style={{ maxWidth: '600px', borderRadius: '15px', boxShadow: 'var(--shadow-md)' }} />
            <h1 class="hero-title">{product.name}</h1>
            <p class="hero-subtitle">অরিজিনাল ইসলামিক ফার্নিচার - সরাসরি ফ্যাক্টরি থেকে</p>
            
            <div class="price-highlight">
              {product.oldPrice && <span class="price-old-landing">৳{product.oldPrice}</span>}
              <span class="price-new-landing">৳{product.price}</span>
            </div>

            <div class="hero-actions">
              <a href="#order" class="btn-order-landing">অর্ডার করতে এখানে ক্লিক করুন</a>
              <a href="tel:01830993087" class="btn-call-landing">সরাসরি কল করুন</a>
            </div>

            {product.videoId && (
              <div class="video-container">
                <iframe 
                  src={`https://www.youtube.com/embed/${product.videoId}?autoplay=1&mute=1&loop=1&playlist=${product.videoId}`} 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen>
                </iframe>
              </div>
            )}
          </div>
        </section>

        {product.features && (
          <section class="features-section">
            <div class="container features-grid">
              <div class="features-text">
                <h2>পণ্যের বৈশিষ্ট্যসমূহ:</h2>
                <ul class="features-list">
                  {product.features.map(f => <li>{f}</li>)}
                </ul>
              </div>
              <div class="features-image">
                <img src={product.image} alt="Feature" style={{ width: '100%', borderRadius: '25px' }} />
              </div>
            </div>
          </section>
        )}

        <section class="order-section" id="order">
          <div class="container container-small">
            <div class="order-wrapper">
              <div class="order-header">
                <h2>অর্ডার করতে আপনার তথ্য দিন</h2>
                <p>পণ্য: {product.name} - মূল্য: ৳{product.price}</p>
              </div>
              
              <div class="form-box">
                <form action="/api/order" method="post">
                  <div class="form-row">
                    <label>আপনার নাম *</label>
                    <input type="text" name="name" required placeholder="আপনার নাম লিখুন" />
                  </div>
                  
                  <div class="form-row">
                    <label>আপনার সম্পূর্ণ ঠিকানা *</label>
                    <textarea name="address" required placeholder="আপনার সম্পূর্ণ ঠিকানা (গ্রাম, ডাকঘর, থানা, জেলা) লিখুন" rows={3}></textarea>
                  </div>
                  
                  <div class="form-row">
                    <label>আপনার ফোন নম্বর *</label>
                    <input type="tel" name="phone" required placeholder="আপনার ফোন নম্বর লিখুন" />
                  </div>
                  
                  <button type="submit" class="btn-submit">
                    অর্ডার কনফার্ম করুন
                  </button>
                </form>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <img src="https://offer.islamicbazar.com.bd/wp-content/uploads/2024/09/money-1024x98.jpeg" alt="Trust Badges" style={{ maxWidth: '100%' }} />
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}
