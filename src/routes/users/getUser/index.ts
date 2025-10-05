import { Context } from 'hono';
import { UserService } from '../../../services/userService.js';

/**
 * Returns a handler for GET /users using the provided UserService.
 *
 * @param userService - UserService instance
 */
export function getUsersHandler(userService: UserService) {
  return (c: Context) => {
    return c.json({ users: userService.getUsers() });
  };
}
