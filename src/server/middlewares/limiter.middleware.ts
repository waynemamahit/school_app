import { Context, Next } from 'hono';
import { RateLimiterMemory } from 'rate-limiter-flexible';

export const limiter =
  (memory: RateLimiterMemory) => async (c: Context, next: Next) => {
    try {
      await memory.consume(c.req.url, 1);
      await next();
    } catch {
      return c.json(
        {
          message: 'To many requests!',
          statuscode: 429,
        },
        429
      );
    }
  };
