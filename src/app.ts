import { Hono } from 'hono';
import { usersRoutes } from './routes/index.js';
import { loggerMiddleware, errorHandler } from './middleware/index.js';
import { UserService } from './services/userService.js';

let app: Hono;

/**
 * Initialize the Hono app, middleware, and routes.
 * Ensures the app is only created once (singleton).
 *
 * @returns {Hono} The configured Hono app instance.
 */
export function init(): Hono {
  if (app) {
    return app;
  }

  app = new Hono();

  // Service layer
  const userService = new UserService();

  // Global middleware
  app.use('*', errorHandler);
  app.use('*', loggerMiddleware);

  // Register routes
  usersRoutes(app, userService);

  return app;
}
