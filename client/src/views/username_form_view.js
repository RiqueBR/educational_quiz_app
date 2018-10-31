const PubSub = require('../helpers/pub_sub.js')

const UsernameForm = function(form) {
  this.form = form
}

UsernameForm.prototype.bindEvents = function() {
  this.form.addEventListener('submit', (event) => {
    this.handleSubmit(event);
    console.log("Here's an event");
  })
};

UsernameForm.prototype.handleSubmit = function(event) {
  event.preventDefault(); // here...
  const newUsername = this.createUsername(event.target)
  PubSub.publish('Username:username-submitted', newUsername)
  event.target.reset(); // here...
};



UsernameForm.prototype.createUsername = function(form) {
  const newUser = {
    username: form.username.value,
    score: form.score.value
  }
  return newUser
};

module.exports = UsernameForm;