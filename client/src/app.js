const Leaderboard = require('./models/leaderboard.js');
const Question = require('./models/questions.js');
const Score = require('./models/score.js');
const QuizGridView = require('./views/quiz_grid_view.js');
const LeaderboardView = require('./views/leaderboard_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log("javascript loaded");



  const leaderboardGrid = document.querySelector('div#main-display')
  const newLeaderboardView = new LeaderboardView(leaderboardGrid)
  newLeaderboardView.bindEvents();


  const quizGrid = document.querySelector('div#main-display')
  const newQuizGrid = new QuizGridView(quizGrid);
  newQuizGrid.bindEvents();

  const leaderboard_data = new Leaderboard();
  leaderboard_data.getData();


  const scoreModel = new Score();
  scoreModel.bindEvents();

  const questions_one = new Question();
  questions_one.getData();
  questions_one.bindEvents();



});