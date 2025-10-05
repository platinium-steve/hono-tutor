import { Context, Next } from 'hono';

/**
 * Validation middleware factory.
 * @param {Function} schema - Validation function that throws on error
 * @returns {Function} Middleware for validation
 */
export function validate(schema: (data: any) => void) {
  return async (c: Context, next: Next) => {
    try {
      schema(await c.req.json());
      await next();
    } catch (err: any) {
      return c.json({ error: true, message: err.message }, 400);
    }
  };
}
