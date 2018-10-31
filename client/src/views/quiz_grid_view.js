const PubSub = require('../helpers/pub_sub.js');
const QuestionMainContainer = require('./questions_main_container_view.js')
const ScoreView = require('./score_view.js');

const QuizGridView = function(container) {
  this.container = container;
  this.score = 0;
};

QuizGridView.prototype.bindEvents = function() {
  PubSub.subscribe("Questions:data-loaded", (event) => {
    // console.dir(event.detail);
    // Request question 0 (Publish that we need question 0)
    this.checkGame(event.detail);
  });

  PubSub.subscribe("Score:data-loaded", (evt) => {
    console.log("Score is:", evt.detail);

    this.score = evt.detail
  });
};


QuizGridView.prototype.checkGame = function(data) {
  if (data.index <= 4) {
    this.renderQuestion(data)
  } else {
    console.log('GAME OVER');

    this.renderScore(this.score);

  }
};

QuizGridView.prototype.renderQuestion = function(result) {
  // RENDER SINGLE SINGLEQUESTION IF INDEX IS 4 OR LESS
  this.container.innerHTML = '';
  const singleQuestionView = new QuestionMainContainer(this.container);
  singleQuestionView.render(result);

  // ELSE RENDER SCORE VIEW

  // const scoreView = new ScoreView(this.container)
};

QuizGridView.prototype.renderScore = function(score) {

  this.container.innerHTML = '';
  const scoreView = new ScoreView(this.container);
  scoreView.render(score)

};
module.exports = QuizGridView;