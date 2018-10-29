const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Leaderboard = function(url) {
  this.url = 'http://localhost:3000/api/leaderboard'
  this.request = new Request(this.url);
};


Leaderboard.prototype.getData = function() {
  this.request.get()
    .then((scores) => {
      PubSub.publish("Leaderboard:data-loaded", scores)
    })
    .catch(console.error)
};


module.exports = Leaderboard;