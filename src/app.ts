import { Hono } from 'hono';
import { root, user } from './routes/index.js';
import { loggerMiddleware, errorHandler } from './middleware/index.js';
import { serveStatic } from 'hono/bun';

/**
 * Main application instance for Hono server.
 * @type {Hono}
 */
const app = new Hono();

/**
 * Register global error handler middleware for all routes.
 * @function
 */
app.use('*', errorHandler);

/**
 * Register global logger middleware for all routes.
 * @function
 */
app.use('*', loggerMiddleware);

/**
 * Register application routes.
 * @function
 */
app.route('/', root);
app.route('/users', user);

export default app;
