import { Context, Hono } from 'hono';
import { handle } from 'hono/vercel';

export const runtime = 'edge';

const app = new Hono().basePath('/api/v1')

app.get('/hello', (c: Context) => {
  return c.json({
    message: 'Hello React.js!',
  })
})

app.post('/hello', async(c: Context) => {
  return c.json({
    data: await c.req.raw.json()
  })
})

export const GET = handle(app)
export const POST = handle(app)
