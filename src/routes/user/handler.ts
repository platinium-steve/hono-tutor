import { Context } from 'hono';
import { UserService } from '../../services/index.js';

const userService = new UserService();

/**
 * GET /users - List users handler.
 * @param {Context} c - Hono context
 * @returns {Response}
 */
export function getUsersHandler(c: Context) {
  return c.json({ users: userService.getUsers() });
}

/**
 * POST /users - Create user handler.
 * @param {Context} c - Hono context
 * @returns {Promise<Response>}
 */
export async function createUserHandler(c: Context) {
  const { name } = await c.req.json();
  const userObj = userService.addUser(name);
  return c.json({ user: userObj }, 201);
}

/**
 * Simple validation schema for user creation.
 * @param {any} data
 */
export function userSchema(data: any) {
  if (!data.name || typeof data.name !== 'string') {
    throw new Error('Name is required and must be a string');
  }
}
