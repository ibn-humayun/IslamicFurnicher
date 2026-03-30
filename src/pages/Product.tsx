/** @jsx jsx */
import { jsx } from 'hono/jsx'
import { MainLayout } from '../layouts/MainLayout.js'
import { CheckoutForm } from '../components/CheckoutForm.js'
import { products } from '../data/products.js'

export const ProductLanding = (props: { slug: string }) => {
  const product = products.find(p => p.slug === props.slug) || products[0]
  const productName = product.name
  const price = product.price
  
  return (
    <MainLayout title={`Order ${productName} - Islamic Furniture`}>
      <div style="background-color: #f7f7f7; padding: 2rem 0;">
        <div style="max-width: 1000px; margin: 0 auto; text-align: center;">
          <h1 style="color: var(--primary-orange); margin-bottom: 2rem;">{productName}</h1>
          
          {/* Sales Funnel Sections */}
          <div style="background: white; padding: 2rem; border-radius: 12px; margin-bottom: 2rem;">
            {/* Hero Image */}
            <img src={product.image} alt={productName} style="width: 100%; border-radius: 12px;" />
            
            {/* Countdown / Urgency */}
            <div style="background: var(--light-orange); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
              <h3>অফারটি শেষ হওয়ার বাকি: 12:45:30</h3>
            </div>
            
            <a href="#checkout" class="btn" style="padding: 1rem 2rem; font-size: 1.25rem;">অর্ডার করতে নিচের ফর্মে যান</a>
          </div>

          {/* Video Demonstration */}
          {product.videoId && (
            <div style="margin-bottom: 2rem;">
              <h2>ভিডিও দেখুন</h2>
              <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; height: auto; border-radius: 12px; background: #000;">
                <iframe
                  style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
                  src={`https://www.youtube.com/embed/${product.videoId}?rel=0&showinfo=0&autoplay=0`}
                  title="Product Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}

          {/* Features */}
          <div style="text-align: left; margin-bottom: 2rem;">
            <h2>বৈশিষ্ট্যসমূহ</h2>
            <ul>
              <li>হাই কোয়ালিটি মেটেরিয়াল</li>
              <li>মার্জিত ও আধুনিক ডিজাইন</li>
              <li>সহজেই দীর্ঘস্থায়ী ও টেকসই</li>
              <li>৫ বছরের ওয়ারেন্টি</li>
            </ul>
          </div>

          {/* Checkout Form */}
          <CheckoutForm productName={productName} price={price} />
        </div>
      </div>
    </MainLayout>
  )
}
