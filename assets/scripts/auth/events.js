// require api to make http requests
const api = require('./api')
// require ui to update the DOM after an request from api
const ui = require('./ui')
// require the get form fields function
const getFormFields = require('../../../lib/get-form-fields')

const onSignUp = (event) => {
    // stop page from refreshing
    event.preventDefault()
    // store event listener to form var
    const form = event.target
    // retrieve data from form 
    const data = getFormFields(form)
    // send get post request to api
    api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFail)
}
const onSignIn = (event) => {
    // stop page from refreshing
    event.preventDefault()
    // store event listener to form var
    const form = event.target
    // retrieve data from form 
    const data = getFormFields(form)
    // send get post request to api
    api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFail)
}
const onSignOut = (event) => {
    event.preventDefault()
    api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFail)
}
module.exports = {
    onSignUp,
    onSignIn,
    onSignOut
}