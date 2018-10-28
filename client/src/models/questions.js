const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Question = function (url) {
  this.url = 'http://localhost:3000/api/questions';
  this.request = new Request(this.url);
}






Question.prototype.getData = function () {
  this.request.get()
  .then((questions) => {
    PubSub.publish("Questions:data-loaded", questions)
  })
  .catch(console.error)
};

// We'll need a post answer method (answer-submitted)



module.exports = Question;
