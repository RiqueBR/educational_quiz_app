// use users;
// db.dropDatabase();
//
// db.users.insertMany([
//
//   {
//     username: "Colin"
//   },
//
//   {
//     username: "John"
//   },
//
//   {
//     username: "Louise"
//   }
//
// ]);

use leaderboard;
db.dropDatabase();

db.leaderboard.insertMany([

  {
    username: "Colin",
    score: 0
  },

  {
    username: "John",
    score: 8
  },

  {
    username: "Louise",
    score: 7
  }

]);