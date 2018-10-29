const PubSub = require('../helpers/pub_sub.js');
const QuestionMainContainer = require('./questions_main_container_view.js')


const QuizGridView = function(container) {
  this.container = container;
  this.currentQuestionIndex = 0;
};

QuizGridView.prototype.bindEvents = function() {
  PubSub.subscribe("Questions:data-loaded", (event) => {
    // Request question 0 (Publish that we need question 0)
    this.render(event.detail);
  });
};

QuizGridView.prototype.render = function(question) {
  this.container.innerHTML = '';
  const singleQuestionView = new QuestionMainContainer(this.container);
  singleQuestionView.render(question);
};

module.exports = QuizGridView;