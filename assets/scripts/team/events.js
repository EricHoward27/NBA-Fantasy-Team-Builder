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
    .catch(ui.onError)
}
const onViewTeam = () => {
    api.viewTeam()
    .then(ui.viewTeamSuccess)
    .catch(ui.onError)
}
const onDelete = function (event) {
    event.preventDefault()
    const form = event.target
    const formData = getFormFields(form)
    console.log('formData is', formData)
    // call our destroy request, give in the id of the specific book
    // we want to destroy
    api.destroy(formData.book.id)
      .then(ui.onDestroySuccess)
      .catch(ui.onError)
  }
const onDeleteDynamic = (event) => {
    const deleteBtn = event.target
    const id = $(deleteBtn).data('id')
    
    api.destroy(id)
        .then(ui.onDestroySuccess)
        .catch(ui.onError)
    }
module.exports = {
    onCreateTeam,
    onViewTeam,
    onDelete,
    onDeleteDynamic
}