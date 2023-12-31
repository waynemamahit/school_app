import { limiter } from '@/server/middlewares/limiter.middleware';
import authRoute from '@/server/routes/auth.route';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { poweredBy } from 'hono/powered-by';
import { secureHeaders } from 'hono/secure-headers';
import { handle } from 'hono/vercel';
import { RateLimiterMemory } from 'rate-limiter-flexible';

export const runtime = 'edge';

const app = new Hono().basePath('/api/v1');
const rateLimiter = new RateLimiterMemory({
  points: 100,
  duration: 60,
});

app.use('*', cors());
app.use('*', logger());
app.use('*', poweredBy());
app.use('*', secureHeaders());
app.use('*', limiter(rateLimiter));

app.route('/auth', authRoute);

export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);
