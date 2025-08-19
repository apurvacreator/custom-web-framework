import { Collection } from './models/Collection';
import { User, UserProps } from './models/User';
import { UserEdit } from './views/UserEdit';
import { UserList } from './views/UserList';

const user = User.buildUser({ name: 'name', age: 20 });

const root = document.getElementById('root') as Element;
const userRoot = document.getElementById('user') as Element;

if (userRoot) {
  new UserEdit(userRoot, user).render();
} else {
  throw new Error('user root element not defined');
}

const users = new Collection(
  'http://localhost:3000/users',
  (json: UserProps) => {
    return User.buildUser(json);
  }
);

users.on('change', () => {
  if (root) {
    new UserList(root, users).render();
  } else {
    throw new Error('root element not defined');
  }
});

users.fetch();
