const DB_KEY = 'users_db';

export const database = {
  getUsers: () => {
    const data = localStorage.getItem(DB_KEY);
    return data ? JSON.parse(data) : [];
  },

  addUser: (user) => {
    const users = database.getUsers();
    users.push({ ...user, id: Date.now(), createdAt: new Date().toISOString() });
    localStorage.setItem(DB_KEY, JSON.stringify(users));
    return true;
  },

  findUser: (username) => {
    const users = database.getUsers();
    return users.find(u => u.username === username);
  },

  validateLogin: (username, password) => {
    const user = database.findUser(username);
    return user && user.password === password;
  },

  deleteUser: (id) => {
    const users = database.getUsers().filter(u => u.id !== id);
    localStorage.setItem(DB_KEY, JSON.stringify(users));
    return true;
  }
};
