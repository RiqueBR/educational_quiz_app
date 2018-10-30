const PubSub = require('../helpers/pub_sub.js')

const QuestionMainContainer = function(container) {
  this.container = container;
  // this.questionIndex = 0;
};

QuestionMainContainer.prototype.render = function(question) {
  const questionContainer = document.createElement('div')
  questionContainer.classList.add('question-container')

  console.dir(question);
  // Create question box (div)
  const one_question = this.createQuestion(question.selectedQuestion.question)
  questionContainer.appendChild(one_question);

  // Create answer box (div)
  const four_answers = this.createAnswers(question.selectedQuestion)
  questionContainer.appendChild(four_answers);

  const nextButton = this.createButton(question.index)
  questionContainer.appendChild(nextButton)

  // NEED TO FIX



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
  answer_display.forEach((answer) => {
    const newAnswer = document.createElement('li')
    newAnswer.textContent = answer;
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

// NEED TO FIX
// QuestionMainContainer.prototype.createScore = function(textContent) {
//   const score_display = document.createElement('p');
//   score_display.textContent = `Score:`;
//   score_display.id = 'score_display'
//   return score_display
// };





module.exports = QuestionMainContainer;