import { Context } from 'hono';

/**
 * GET / - Welcome endpoint handler.
 * @param {Context} c - Hono context
 * @returns {Response}
 */
export function getRoot(c: Context) {
  return c.json({ message: 'Welcome to the Hono API!' });
}
