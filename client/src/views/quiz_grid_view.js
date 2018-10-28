const PubSub = require('../helpers/pub_sub.js');
const QuestionMainContainer = require('./questions_main_container_view.js')


const QuizGridView = function(container){
  this.container = container;
};

QuizGridView.prototype.bindEvents = function () {
  PubSub.subscribe("Questions:data-loaded", (event) => {
    // console.log("Here's an event", event);
    this.render(event.detail)
  })
};

QuizGridView.prototype.render = function (questions) {
  this.container.innerHTML = '';
  const questionView = new QuestionMainContainer(this.container);
  questions.forEach((question) => questionView.render(question));
};


module.exports = QuizGridView;
