import { jsx } from 'hono/jsx'

export const MainLayout = (props: { children: any, title?: string }) => {
  return (
    <html lang="bn">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{props.title || 'Islamic Furniture – সেরা পণ্য, সবার জন্য – online shopping'}</title>
        <link rel="stylesheet" href="/index.css" />
      </head>
      <body>
        {/* Top Header */}
        <header class="top-header">
          <div class="container header-container">
            <a href="/" class="logo">
              <img src="https://offer.islamicbazar.com.bd/wp-content/uploads/2024/09/islamiclogo.png" alt="Islamic Bazar" />
            </a>
            
            <ul class="nav-main">
              <li><a href="/">হোম</a></li>
              <li><a href="/category/Best">বেস্ট সেলিং প্রোডাক্টস</a></li>
            </ul>

            <div class="contact-info">
              <span>📞 01830993087</span>
            </div>
          </div>
        </header>

        {/* Green Sub-Nav Bar */}
        <nav class="sub-nav">
          <div class="container sub-nav-links">
            <a href="/">হোম</a>
            <a href="/category/Sofa">সোফা সেট</a>
            <a href="/category/Bed">বেডরুম ফার্নিচার</a>
            <a href="/category/Dining">ডাইনিং রুম ফার্নিচার</a>
            <a href="/category/Office">অফিস ফার্নিচার</a>
            <a href="/category/Books">বই</a>
            <a href="/category/Foods">ফুডস আইটেম</a>
            <a href="/category/Best">বেস্ট সেলিং প্রোডাক্টস</a>
          </div>
        </nav>

        <main>
          {props.children}
        </main>

        {/* Footer */}
        <footer class="main-footer">
          <div class="container footer-grid">
            <div class="footer-brand">
              <img src="https://offer.islamicbazar.com.bd/wp-content/uploads/2024/09/islamiclogo.png" alt="Islamic Furniture" class="footer-logo" />
              <p>offer.islamicbazar.com.bd একটি বিশ্বস্ত অনলাইন ওয়েবসাইট। ভেজালের ভিড়ে খাঁটি পণ্যের এক অনন্য সমাহার। নিরাপদ সেবায় আপনার বিশ্বস্ত সহযোগী। ❤️ কওমী আলেম পরিচালিত অতএব শতভাগ আস্থা রাখতে পারেন, ইনশা-আল্লাহ।</p>
            </div>

            <div class="footer-column">
              <h4>Quick Links</h4>
              <ul class="footer-links">
                <li><a href="/">হোম</a></li>
                <li><a href="/category/Bed">বেডরুম ফার্নিচার</a></li>
                <li><a href="/category/Sofa">লিভিং রুম ফার্নিচার</a></li>
                <li><a href="/category/Dining">ডাইনিং রুম ফার্নিচার</a></li>
                <li><a href="/category/Office">অফিস ফার্নিচার</a></li>
                <li><a href="/category/Foods">ফুডস আইটেম</a></li>
                <li><a href="/category/Books">বই</a></li>
                <li><a href="/category/Best">বেস্ট সেলিং প্রোডাক্টস</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>

            <div class="footer-column">
              <h4>Contact Us</h4>
              <p><strong>Address:</strong> Uttor Badda, Dhaka-121</p>
              <p><strong>Phone:</strong> +88 01830-993087</p>
              <p><strong>Email:</strong> Support@islamicBazar.com.bd</p>
            </div>

            <div class="footer-column">
              <h4>Download App</h4>
              <div class="store-btns">
                <a href="#"><img src="https://itunes.apple.com/app/apple-store/id123456789?mt=8" alt="App Store" /></a>
                <a href="#"><img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Play Store" /></a>
              </div>
            </div>
          </div>

          <div class="container footer-bottom">
            <p>© 2026 islamic Bazar. All Rights Reserved</p>
            <div class="payment-badges">
              <img src="https://offer.islamicbazar.com.bd/wp-content/plugins/woo-payment-gateway-bkash/images/bkash.png" width="40" alt="bkash" />
              <img src="https://offer.islamicbazar.com.bd/wp-content/plugins/woo-payment-gateway-nagad/images/nagad.png" width="40" alt="nagad" />
              {/* Add more as per Target site badges */}
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
