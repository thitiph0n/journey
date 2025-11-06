import { Elysia } from 'elysia'
import { CloudflareAdapter } from 'elysia/adapter/cloudflare-worker'
import { cors } from '@elysiajs/cors'
import { journeysRoute } from './routes/journeys'
import { expensesRoute } from './routes/expenses'

const app = new Elysia({
  adapter: CloudflareAdapter
})
  .use(cors({
    origin: true,
    credentials: true
  }))
  .get('/', () => ({
    message: 'Welcome to Journey API',
    version: '1.0.0'
  }))
  .get('/api/health', () => ({
    status: 'ok',
    timestamp: new Date().toISOString()
  }))
  .use(journeysRoute)
  .use(expensesRoute)
  .compile()

export default app
export type App = typeof app

