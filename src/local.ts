import { serve } from '@hono/node-server'
import app from './index'

console.log('Local server starting at http://localhost:3000')

serve({
  fetch: app.fetch,
  port: 3000,
  hostname: '0.0.0.0'
})
