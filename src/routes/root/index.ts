import { Hono } from 'hono';
import { getRoot } from './handler.js';

const root = new Hono();
root.get('/', getRoot);

export default root;
