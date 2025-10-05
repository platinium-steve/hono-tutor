import { serve } from '@hono/node-server';
import app from './app.js';
import dotenv from 'dotenv';

/**
 * Load environment variables from .env file.
 * @function
 */
dotenv.config();

/**
 * The port number to run the server on.
 * @type {number}
 */
const port = Number(process.env.PORT) || 3000;

/**
 * Start the Hono server and log the URL.
 * @function
 */
console.log(`🚀 Server running at http://localhost:${port}`);
serve({ fetch: app.fetch, port });
