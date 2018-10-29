const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Question = function(url) {
  this.url = 'http://localhost:3000/api/questions';
  this.request = new Request(this.url);
  this.questions = [];
}

Question.prototype.bindEvents = function() {

};

Question.prototype.getData = function() {
  this.request.get()
    .then((questions) => {
      this.questions = questions;
      PubSub.publish("Questions:data-loaded", questions[0])
    })
    .catch(console.error)
};

// We'll need a post answer method (answer-submitted)

Question.prototype.getQuestion = function(position) {
  // Publish the question at position
  const question = this.questions[position];
  PubSub.publish("Questions:one-question-loaded", question);
};


module.exports = Question;