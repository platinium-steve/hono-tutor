import { Context, Next } from 'hono';

/**
 * Logger middleware for request logging.
 * @param {Context} c - Hono context
 * @param {Next} next - Next middleware function
 * @returns {Promise<void>}
 */
export async function loggerMiddleware(c: Context, next: Next): Promise<void> {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${c.req.method} ${c.req.url} - ${ms}ms`);
}
