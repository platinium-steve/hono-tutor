import { Hono } from 'hono';
import { getUsersHandler, createUserHandler, userSchema } from './handler.js';
import { validate } from '../../middleware/validate.js';

const user = new Hono();
user.get('/', getUsersHandler);
user.post('/', validate(userSchema), createUserHandler);

export default user;
