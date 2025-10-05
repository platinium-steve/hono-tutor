/**
 * Simple validation schema for user creation.
 * @param {any} data
 */
export function userSchema(data: any) {
  if (!data.name || typeof data.name !== 'string') {
    throw new Error('Name is required and must be a string');
  }
}
