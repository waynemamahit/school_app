import { Context, Next } from 'hono';
import { ZodObject } from 'zod';

export const validate =
  (schema: ZodObject<any>) => async (c: Context, next: Next) => {
    try {
      const dto = await schema.parseAsync(await c.req.json());
      c.set('dto', dto);
      await next();
    } catch (error: any) {
      return c.json(
        {
          statusCode: 400,
          message: error.errors.map(
            (errItem: { message: string; path: string[] }) =>
              `${errItem.message} ${errItem.path
                .map((pathItem) => pathItem.split('_').join(' '))
                .join(', ')}`
          ),
        },
        400
      );
    }
  };
