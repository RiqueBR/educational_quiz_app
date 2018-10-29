const PubSub = require('../helpers/pub_sub.js')


// Here will render html
const QuestionMainContainer = function(container) {
  this.container = container;
};

QuestionMainContainer.prototype.render = function(questions) {
  const questionContainer = document.createElement('div')
  questionContainer.classList.add('question-container')

  // Create question box (div)
  // Make sure it shows only one question
  const one_question = this.createQuestion(questions.question)
  questionContainer.appendChild(one_question);

  // Create answer box (div)
  const four_answer = this.createAnswers(questions)
  questionContainer.appendChild(four_answer);


  this.container.appendChild(questionContainer);

};

QuestionMainContainer.prototype.createQuestion = function(textContent) {
  const question_display = document.createElement('div');
  question_display.textContent = textContent;
  question_display.id = 'question-display'
  return question_display
};

QuestionMainContainer.prototype.createAnswers = function(questions) {
  // debugger;
  // for each answer in questions
  for (var answer in questions.answers) {
    const answer_display = document.createElement('div')
    debugger;
    answer_display.textContent = questions.answers
    answer_display.id = 'answer-display'
  };

  return answer;
  // create a new div

  // change the text content of the div to be the answer

  // with the new div, .addEventListener("click", () => { console.log("You were right! / You were wrong"); })

  // when the div is clicked, tell the user whether they were right or wrong, based on questions.correct_answer

  // Publish that the question has been completed
};






module.exports = QuestionMainContainer;