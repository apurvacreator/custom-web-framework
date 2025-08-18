import { UserForm } from './views/UserForm';
import { User } from './models/User';

const user = User.buildUser({ name: 'name', age: 20 });

const root = document.getElementById('root') as Element;

if (root) {
  const userForm = new UserForm(
    document.getElementById('root') as Element,
    user
  );

  userForm.render();
} else {
  throw new Error('root element not defined');
}
