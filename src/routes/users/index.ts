import { Hono } from 'hono';
import { UserService } from '../../services/userService.js';
import { getUsersHandler } from './getUser/index.js';
import { postUserHandler } from './postUser/index.js';

/**
 * Registers /users GET and POST routes on the provided Hono app, using the provided UserService.
 *
 * @param app - Hono instance
 * @param userService - UserService instance
 */
export function usersRoutes(app: Hono, userService: UserService) {
  app.get('/users', getUsersHandler(userService));
  app.post('/users', ...postUserHandler(userService));
}
