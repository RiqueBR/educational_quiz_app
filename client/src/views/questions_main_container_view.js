const PubSub = require('../helpers/pub_sub.js')


// Here will render html
const QuestionMainContainer = function(container){
  this.container = container;
};

QuestionMainContainer.prototype.render = function (questions) {
  const questionContainer = document.createElement('div')
  questionContainer.classList.add('question-container')

  // Create question box (div)
  // Make sure it shows only one question
  const one_question = this.createQuestion(questions.question)
  questionContainer.appendChild(one_question);

  // Create answer box (div)
  const four_answer = this.createAnswers(questions.answers)
  questionContainer.appendChild(four_answer);


  this.container.appendChild(questionContainer);

};

QuestionMainContainer.prototype.createQuestion = function (textContent) {


  const question_display = document.createElement('div');
  question_display.textContent = textContent;
  return question_display
};

QuestionMainContainer.prototype.createAnswers = function (textContent) {
  const answer_display = document.createElement('div')
  answer_display.textContent = textContent;
  return answer_display
};






module.exports = QuestionMainContainer;
