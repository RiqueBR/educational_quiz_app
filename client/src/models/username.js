const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');


const Username = function (url) {
  this.url = 'http://localhost:3000';
  this.request = new Request(this.url);
  this.name = name
}

Username.prototype.bindEvents = function () {
  // needs to subscribe to a save event
  // this.postUser(event.detail)
};

Username.prototype.postUser = function () {
  const request = new Request(this.url)
  request.post(username).then((usernames) => {
    PubSub.publish("Username:data-loaded")
  })
};





module.exports = Username;
