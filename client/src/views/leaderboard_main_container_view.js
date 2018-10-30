const PubSub = require('../helpers/pub_sub.js')


const LeaderboardMainContainer = function(container) {
  this.container = container;
}

LeaderboardMainContainer.prototype.render = function(leaderboard) {
  // Create main container that takes all content
  const leaderboardContainer = document.createElement('div')
  leaderboardContainer.classList.add('leaderboard-container')
  // Create name div
  const nameContainer = document.createElement('div')
  nameContainer.classList.add('name-box')
  // Create name content & append to name container
  const usernameContent = this.createDetail('username', leaderboard.username)
  nameContainer.appendChild(usernameContent)
  // Create score div
  const scoreContainer = document.createElement('div')
  scoreContainer.classList.add('score-box')
  // Create score content & append to score container
  const scoreContent = this.createDetail('score', leaderboard.score)
  scoreContainer.appendChild(scoreContent)
  // Append here
  leaderboardContainer.appendChild(nameContainer);
  leaderboardContainer.appendChild(scoreContainer)
  this.container.appendChild(leaderboardContainer)
};



LeaderboardMainContainer.prototype.createDetail = function(label, text) {
  const detail = document.createElement('p')
  detail.textContent = `${label}: ${text}`;
  return detail;
};

module.exports = LeaderboardMainContainer;