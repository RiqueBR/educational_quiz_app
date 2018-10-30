const PubSub = require('../helpers/pub_sub.js')

const QuestionMainContainer = function(container) {
  this.container = container;
  // this.questionIndex = 0;
};

QuestionMainContainer.prototype.render = function(question) {
  // creates main container
  const questionContainer = document.createElement('div')
  questionContainer.classList.add('question-container')
  // Create question box (div)
  const questionInfo = document.createElement('div')
  questionInfo.classList.add('question-info')
  // Creates one question
  const one_question = this.createQuestion(question.selectedQuestion.question)
  questionInfo.appendChild(one_question);
  // Create answer box (div)
  const answerInfo = document.createElement('div')
  answerInfo.classList.add('answer-info')
  // creates four answers
  const four_answers = this.createAnswers(question.selectedQuestion)
  answerInfo.appendChild(four_answers)
  // creates a button and append it together with four answers
  const nextButton = this.createButton(question.index)
  nextButton.textContent = 'NEXT'
  answerInfo.appendChild(nextButton)
  // Appends question box and answer box into main container
  questionContainer.appendChild(questionInfo);
  questionContainer.appendChild(answerInfo)
  this.container.appendChild(questionContainer);

};

QuestionMainContainer.prototype.createButton = function(index) {
  const button = document.createElement('button');
  button.id = 'button-display'
  console.log("index:", index);
  const newIndex = parseInt(index, 10) + 1;
  // Clarify meaning of radix
  button.value = newIndex;

  button.addEventListener('click', (evt) => {
    PubSub.publish("QuestionView:next-clicked", evt.target.value)
  })

  return button;

};

QuestionMainContainer.prototype.createButton = function(index) {
  const button = document.createElement('button');
  button.id = 'button-display'
  console.log("index:", index);
  const newIndex = parseInt(index, 10) + 1;

  button.value = newIndex;

  button.addEventListener('click', (evt) => {
    PubSub.publish("Answer:answer-clicked", evt.target.value)
  })

  return button;

};

QuestionMainContainer.prototype.createQuestion = function(textContent) {
  const question_display = document.createElement('div');
  question_display.textContent = textContent;
  question_display.id = 'question-display'
  return question_display
};

QuestionMainContainer.prototype.createAnswers = function(questions) {
  const answer_list = document.createElement('ul');
  const answer_display = questions.answers;
  answer_display.id = 'answer-display'
  answer_display.forEach((answer, index) => {
    const newAnswer = document.createElement('li')
    newAnswer.textContent = answer;
    newAnswer.id = `box-${index}`
    answer_list.appendChild(newAnswer)

    var result;


    newAnswer.addEventListener("click", (answer) => {
      if (answer.target.textContent === questions.correct_answer) {
        var result = "You were right";
        PubSub.publish("Answer:answer-clicked", result)
        // UPDATES USER SCORE
      } else {
        var result = "You were wrong";
      }
      console.log(result);
    })
  });
  return answer_list
};

module.exports = QuestionMainContainer;