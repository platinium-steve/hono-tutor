import { Context, Next } from 'hono';

/**
 * Error handler middleware to catch and format errors.
 * @param {Context} c - Hono context
 * @param {Next} next - Next middleware function
 * @returns {Promise<void>}
 */
export async function errorHandler(c: Context, next: Next): Promise<void> {
  try {
    await next();
  } catch (err: any) {
    const status = err.status || 500;
    c.res = c.json({
      error: true,
      message: err.message || 'Internal Server Error',
      details: err.details || undefined,
    }, status);
  }
}
