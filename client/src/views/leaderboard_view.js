const PubSub = require('../helpers/pub_sub.js')
const LeaderboardMainContainer = require('./leaderboard_main_container_view.js')

const LeaderboardView = function(container) {
  this.container = container;
}

LeaderboardView.prototype.bindEvents = function() {
  PubSub.subscribe("Leaderboard:data-loaded", (event) => {
    this.render(event.detail)
  })
};

LeaderboardView.prototype.render = function(scores) {
  this.container.innerHTML = '';
  const leaderboardView = new LeaderboardMainContainer(this.container);
  scores.forEach((score) => leaderboardView.render(score))
};


module.exports = LeaderboardView;
