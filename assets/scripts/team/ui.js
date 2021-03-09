const store = require('./../store')

const createTeamSuccess = (data) => {
$('#message_board').text('Welcome to the league!')
$('form').trigger('reset')

console.log('Create team response is: ', data)
store.team = data.team
}
const createTeamFail = () => {

}
module.exports = {
    createTeamSuccess,
    createTeamFail
}