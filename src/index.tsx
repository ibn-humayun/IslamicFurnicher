import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-pages'
import { jsx } from 'hono/jsx'
import { Home } from './pages/Home.js'
import { Category } from './pages/Category.js'
import { ProductLanding } from './pages/Product.js'

const app = new Hono()

// Serve static files (CSS, images in public)
app.use('/static/*', serveStatic())

// Routes
app.get('/', (c) => c.html(<Home />))
app.get('/category/:id', (c) => {
  const id = c.req.param('id')
  return c.html(<Category id={id} />)
})
app.get('/product/:slug', (c) => {
  const slug = c.req.param('slug')
  return c.html(<ProductLanding slug={slug} />)
})

// API Placeholders
app.post('/api/order', async (c) => {
  const body = await c.req.parseBody()
  console.log('Order received:', body)
  return c.json({ success: true, message: 'অর্ডারটি সফলভাবে গ্রহণ করা হয়েছে!' })
})

export default app
