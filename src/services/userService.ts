/**
 * User entity interface.
 */
export interface User {
  id: number;
  name: string;
}

/**
 * UserService class for user business logic.
 */
export class UserService {
  private users: User[] = [
    { id: 1, name: 'Alice' },
  ];

  /**
   * Get all users.
   * @returns {User[]}
   */
  getUsers(): User[] {
    return this.users;
  }

  /**
   * Add a new user.
   * @param {string} name
   * @returns {User}
   */
  addUser(name: string): User {
    const user = { id: this.users.length + 1, name };
    this.users.push(user);
    return user;
  }
}
