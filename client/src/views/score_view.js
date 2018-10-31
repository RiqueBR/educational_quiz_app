const ScoreView = function(container) {
  this.container = container;
}

ScoreView.prototype.render = function(score) {
  const scoreContainer = document.createElement('div');
  scoreContainer.classList.add('score-container');

  const scoreTitle = document.createElement('h3');
  scoreTitle.textContent = `Well Done!! You scored: ${score}`;

  // Add a trophy image here?
  // also change first question to another question

  scoreContainer.appendChild(scoreTitle);
  this.container.appendChild(scoreContainer);


};

module.exports = ScoreView;