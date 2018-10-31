const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Question = function(url) {
  this.url = 'http://localhost:3000/api/questions';
  this.request = new Request(this.url);
  this.questions = [];
  this.indexPosition = 0;
  // this.score = 0
}

Question.prototype.bindEvents = function() {
  PubSub.subscribe("QuestionView:next-clicked", (event) => {
    this.getQuestion(event.detail)
    console.dir(event.detail);
  })
};

Question.prototype.getData = function() {
  this.request.get()
    .then((allData) => {
      this.questions = allData;
      const question = {}
      question.index = this.indexPosition
      question.selectedQuestion = this.questions[this.indexPosition]
      // const index = this.increment()
      PubSub.publish("Questions:data-loaded", question)
    })
    .catch(console.error)
};

Question.prototype.getQuestion = function(position) {
  const question = {}
  question.index = position
  question.selectedQuestion = this.questions[position]
  PubSub.publish("Questions:data-loaded", question);

};

if (localStorage) {
  console.log('LocalStorage is supported!');
} else {
  console.log('No support. Use a fallback such as browser cookies or store on the server.');
}
module.exports = Question;