const PubSub = require('../helpers/pub_sub.js')


const LeaderboardMainContainer = function(container){
  this.container = container;
}

LeaderboardMainContainer.prototype.render = function (leaderboard) {
  const leaderboardContainer = document.createElement('div')
  leaderboardContainer.classList.add('leaderboard-container')

  // Create leaderboard header
  // add an extra div to wrap
const leaderboardHeading = document.createElement('div')
leaderboardHeading.textContent = 'Leaderboard'
leaderboardContainer.appendChild(leaderboardHeading)

  // Create name content
const usernameContent = this.createDetail('username', leaderboard.username)
// console.log("Here's a log", usernameContent);
leaderboardContainer.appendChild(usernameContent)


  // Create score content
const scoreContent = this.createDetail('score', leaderboard.score)
// console.log("Here's a log", scoreContent);
leaderboardContainer.appendChild(scoreContent)

this.container.appendChild(leaderboardContainer)
};



LeaderboardMainContainer.prototype.createDetail = function (label, text) {
  const detail = document.createElement('p')
  detail.textContent = `${label}: ${text}`;
  return detail;
};

module.exports = LeaderboardMainContainer;
