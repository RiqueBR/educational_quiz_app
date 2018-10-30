const ScoreView = function(container) {
  this.container = container;
}

ScoreView.prototype.render = function(score) {
  const scoreContainer = document.createElement('div');
  scoreContainer.classList.add('score-container');

  const scoreTitle = document.createElement('h1');
  scoreTitle.textContent = `Well Done!! You scored: ${score}`;

  scoreContainer.appendChild(scoreTitle);
  this.container.appendChild(scoreContainer);


};

module.exports = ScoreView;