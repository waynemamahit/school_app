import authRoute from '@/server/routes/auth.route';
import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import { cors } from 'hono/cors';

export const runtime = 'edge';

const app = new Hono().basePath('/api/v1');

app.use(cors());
app.use('*', async (c, next) => {
  try {
    await next();
  } catch (error) {
    return c.json({
      error,
    });
  }
});

app.route('/auth', authRoute);

export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);
