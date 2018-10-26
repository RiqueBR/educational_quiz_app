const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Quiz = function(url) {
  this.url = 'https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=multiple';
  this.request = new Request(this.url);
};


module.exports = Quiz;