import authRoute from '@/server/routes/auth.route';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { secureHeaders } from 'hono/secure-headers';
import { handle } from 'hono/vercel';

export const runtime = 'edge';

const app = new Hono().basePath('/api/v1');

app.use(cors());
app.use(secureHeaders());
app.use(logger());

app.route('/auth', authRoute);

export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);
