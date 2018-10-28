const express = require('express');
const app = express();
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const parser = require('body-parser');

const publicPath = path.join(__dirname, '../client/public');
app.use(express.static(publicPath));
app.use(parser.json());

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    // QUIZ DATABASE
    // const db_quiz = client.db('quiz')
    // const questionsCollection = db.collection('questions');
    // const questionsRouter = createRouter(questionsCollection);
    // app.use('/api/questions', questionsRouter);
    // USER DATABASE
    // const db_users = client.db('users')
    // const usersCollection = db.collection('users');
    // const usersRouter = createRouter(usersCollection);
    // app.use('/api/users', usersRouter)


    // QUIZ DATABASE
    // LEADERBOARD COLLECTION
    const db = client.db('quiz-data');
    const leaderboardCollection = db.collection('leaderboard');
    const leaderboardRouter = createRouter(leaderboardCollection);
    app.use('/api/leaderboard', leaderboardRouter);

    //QUESTIONS COLLECTION

    const questionsCollection = db.collection('questions');
    const questionsRouter = createRouter(questionsCollection);
    app.use('/api/questions', questionsRouter);

  })
  .catch(console.err);

app.listen(3000, function(){
console.log(`Listening on port ${ this.address().port }`);
});
