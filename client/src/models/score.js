const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Score = function(url) {
  this.url = 'http://localhost:3000';
  this.request = new Request(this.url);
  this.currentScore = 0;
}

Score.prototype.bindEvents = function() {
  PubSub.subscribe("Answer:answer-clicked", (event) => {
    this.currentScore += 1;
    // console.dir(event.detail);
    console.dir(this.currentScore);
    PubSub.publish("Score:data-loaded", this.currentScore)
  })
};


module.exports = Score;
