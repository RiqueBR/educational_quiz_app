const PubSub = require('../helpers/pub_sub.js');
const UsernameContainer = require('./username_main_container_view.js');


const UsernameView = function(container) {
  this.container = container
}

UsernameView.prototype.bindEvents = function() {
  // subscribes to the event loaded
  PubSub.subscribe("Username:data-loaded", (event) => {
    this.renderUser(event.detail);
  })
};



UsernameView.prototype.renderUser = function(usernames) {
  this.container.innerHTML = '';
  const userCreated = new UsernameContainer(this.container)
  usernames.forEach((username) => userCreated.render(username));

};



module.exports = UsernameView;