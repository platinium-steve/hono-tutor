import { Context } from 'hono';
import { validate } from '../../../middleware/validate.js';
import { userSchema } from '../../../schemas/userSchema.js';
import { UserService } from '../../../services/userService.js';

/**
 * Returns an array of middleware/handlers for POST /users using the provided UserService.
 *
 * @param userService - UserService instance
 */
export function postUserHandler(userService: UserService) {
  return [
    validate(userSchema),
    async (c: Context) => {
      const { name } = await c.req.json();

      if (userService.getUsers().some((u) => u.name === name)) {
        return c.json({ error: 'User already exists' }, 409);
      }

      const userObj = userService.addUser(name);
      return c.json({ user: userObj }, 201);
    },
  ];
}
