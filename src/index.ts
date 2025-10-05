import { serve } from '@hono/node-server';
import { init } from './app.js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// The port number to run the server on
const port = Number(process.env.PORT) || 3000;

// Initialize the app
const app = init();

console.log(`🚀 Server running at http://localhost:${port}`);
serve({ fetch: app.fetch, port });
