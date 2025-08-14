import { User } from './src/models/User';

// const user = User.buildUser({ id: 1 });

// user.on('change', () => {
//   console.log(user);
// });

// user.on('save', () => {
//   console.log(user);
// });

// user.fetch();

// user.save();

const collection = User.buildUserCollection();
collection.on('change', () => {
  console.log(collection);
});
collection.fetch();
