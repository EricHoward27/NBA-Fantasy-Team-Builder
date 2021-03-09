// require api to make http requests
const api = require('./api')
// require ui to update the DOM after an request from api
const ui = require('./ui')
// require the get form fields function
const getFormFields = require('../../../lib/get-form-fields')

const onCreateTeam = (event) => {
    event.preventDefault()
    const form = event.target
    const data = getFormFields(form)

    api.createTeam(data)
    .then(ui.createTeamSuccess)
    .catch(ui.createTeamFail)
}


module.exports = {
    onCreateTeam
}