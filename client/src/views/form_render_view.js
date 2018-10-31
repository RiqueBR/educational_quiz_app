const PubSub = require('../helpers/pub_sub.js')

const CreateForm = function (container){
this.container = container
}

CreateForm.prototype.render = function (form) {
  const formContainer = document.createElement('div');
  formContainer.id = 'display-form'


  const formCreated = this.buildForm();
  formContainer.appendChild(formCreated)

  const textInputCreated = this.buildTextInput();
  formContainer.appendChild(textInputCreated);

  const submitButtonCreated = this.buildSubmit();
  formContainer.appendChild(submitButtonCreated);

  this.container.appendChild(formContainer)

  PubSub.publish("Form:create-html-form", formContainer)
};

// needs a create form function that also takes on a
// text input and a submit button

CreateForm.prototype.buildForm = function () {
  const form = document.createElement('form');
  form.id = 'form-display';
  return form;
};

CreateForm.prototype.buildTextInput = function () {
  const textInput = document.createElement('input')
  textInput.setAttribute("type", "text")
  textInput.id = 'user-input'
};

CreateForm.prototype.buildSubmit = function () {
  const newSubmit = document.createElement('input')
  newSubmit.setAttribute("type", "submit")
  newSubmit.id = "save"
  newSubmit.value = "save"
};

module.exports = CreateForm;
