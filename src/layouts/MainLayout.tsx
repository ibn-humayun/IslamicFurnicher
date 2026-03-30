/** @jsx jsx */
import { jsx } from 'hono/jsx'

export const MainLayout = (props: { title?: string, children: any }) => {
  return (
    <html lang="bn">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{props.title || 'Islamic Furniture - Home'}</title>
        <link rel="stylesheet" href="/static/index.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <header>
          <a href="/" class="logo">Islamic Furniture</a>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/category/sofa">Sofa Set</a></li>
              <li><a href="/category/bedroom">Bedroom</a></li>
              <li><a href="/category/dining">Dining Room</a></li>
              <li><a href="tel:+880123456789">Call: +880 1234 56789</a></li>
            </ul>
          </nav>
        </header>

        <main>
          {props.children}
        </main>

        <footer>
          <div class="footer-content">
            <p>&copy; 2026 Islamic Furniture. All Rights Reserved.</p>
            <div class="payment-icons">
              {/* Payment icons icons go here */}
              <span>bkash | Nagad | Visa | Mastercard</span>
            </div>
            <p>Address: Dhaka, Bangladesh</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
