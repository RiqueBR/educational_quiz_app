const PubSub = require('../helpers/pub_sub.js');

const UsernameContainer = function(container) {
  this.container = container;
};

UsernameContainer.prototype.render = function(username) {
  const usernameContainer = document.createElement('div')
  usernameContainer.classList.add('username-display-container')

  const usernameText = document.createElement('p')
  usernameText.classList.add('username-display-text')
  usernameContainer.appendChild(usernameText)

  this.container.appendChild(usernameContainer);

};


module.exports = UsernameContainer;