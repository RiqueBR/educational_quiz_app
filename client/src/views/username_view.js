const PubSub = require('../helpers/pub_sub.js');
const CreateForm = require('./form_render_view');


const UsernameView = function(container){
  this.container = container
}

UsernameView.prototype.bindEvents = function () {
  PubSub.subscribe("Form:create-html-form", (event) => {
    console.dir(event)
  })
};

// Needs to handle a submit event

UsernameView.prototype.createUsername = function (form) {
 const newUser = {
   username: form.username.value,
   score: form.score.value
 }
 return newUser
};

UsernameView.prototype.renderForm = function (form) {
  const formCreated = new CreateForm(this.container)
  formCreated.render(form)
};



module.exports = UsernameView;
