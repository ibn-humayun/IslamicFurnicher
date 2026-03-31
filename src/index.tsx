import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-pages'
import { jsx } from 'hono/jsx'
import { Home } from './pages/Home.js'
import { Category } from './pages/Category.js'
import { Product } from './pages/Product.js'
import { products } from './data/products.js'

const app = new Hono()

// Serve static assets explicitly to avoid 404s in Pages Advanced Mode
app.use('/images/*', serveStatic())
app.use('/static/*', serveStatic())
app.get('/index.css', serveStatic())

// Routes
app.get('/', (c) => c.html(<Home />))

app.get('/category/:id', (c) => {
  const id = c.req.param('id')
  return c.html(<Category id={id} />)
})

app.get('/product/:id', (c) => {
  const id = c.req.param('id')
  return c.html(<Product id={id} />)
})

// API Routes
app.post('/api/order', async (c) => {
  const body = await c.req.parseBody()
  console.log('Order received:', body)
  return c.json({ success: true, message: 'অর্ডারটি সফলভাবে গ্রহণ করা হয়েছে!' })
})

export default app
