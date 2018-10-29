const PubSub = require('../helpers/pub_sub.js')



const QuestionMainContainer = function(container) {
  this.container = container;
  this.questionIndex = 0;
};

QuestionMainContainer.prototype.render = function(questions) {
  const questionContainer = document.createElement('div')
  questionContainer.classList.add('question-container')

  // Create question box (div)
  const one_question = this.createQuestion(questions.question)
  questionContainer.appendChild(one_question);

  // Create answer box (div)
  const four_answers = this.createAnswers(questions)
  questionContainer.appendChild(four_answers);


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
  // create a new div
  // change the text content of the div to be the answer
  // with the new div, .addEventListener("click", () => { console.log("You were right! / You were wrong"); })
  // when the div is clicked, tell the user whether they were right or wrong, based on questions.correct_answer
  // Publish that the question has been completed
  const answer_list = document.createElement('ul')
  const answer_display = questions.answers;
  answer_display.forEach((answer) => {
    const newAnswer = document.createElement('li')
    newAnswer.textContent = answer;
    answer_list.appendChild(newAnswer)

    var result;


    newAnswer.addEventListener("click", (answer) => {
      console.log(answer);



      if (answer.target.textContent === questions.correct_answer){

        let currentIndex = 0
        const questionCounter = currentIndex += 1;
        var result = "You were right";
        PubSub.publish("Answer:answer-clicked", questionCounter)
      }else{
        var result = "You were wrong";
      }
      console.log(result);

    })
  });
  return answer_list
};





module.exports = QuestionMainContainer;
