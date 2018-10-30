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
    console.dir(event.detail);
    console.dir(this.currentScore);
    PubSub.publish("Score:data-loaded", this.currentScore)
  })
};

// Score.prototype.getScore = function() {
// //   this.request.get()
// //     .then((allData) => {
// //       this.score = allData;
// //       const score = {}
// //       question.index = this.currentScore
// //       question.selectedQuestion = this.score[this.currentScore]
// //       PubSub.publish("Score:data-loaded", score)
// //     })
// //     .catch(console.error)
// // };
//
// Score.prototype.getScore = function(score) {
//   let incrementScore = parseInt(score, 10) + 1;
//   let newScore = this.currentScore += incrementScore
//   // var score = this.currentScore parseInt(score, 10) + 1;
//   // } else {
//   //   var score = this.currentScore
//   // }
//   return newScore;
// };


module.exports = Score;