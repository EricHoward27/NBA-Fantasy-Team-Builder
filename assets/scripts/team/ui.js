const store = require('./../store')

const createTeamSuccess = (data) => {
$('#message_board').text('Welcome to the league!')
$('form').trigger('reset')

// console.log('Create team response is: ', data)
store.team = data.team
}

const viewTeamSuccess = (data) => {
    const teams = data
    // console.log(teams)

    let teamsHtml = ''

    // teams.forEach(team => {
    //     // console.log('team data is: ', teams)
    //     teamsHtml += `
    //     <p>Name: ${team.name}</p>
    //     <p>City: ${team.city}</p>
    //     <p>abbrv: ${team.abbrv}</p>
    //     <p>ID: ${team._id}</p>
    //     <p>PG: ${team.pg}</p>
    //     <p>SG: ${team.sg}</p>
    //     <p>SF: ${team.sf}</p>
    //     <p>PF: ${team.pf}</p>
    //     <p>C: ${team.c}</p>

    //     `
    // })
    
    $('#team-display').html(teams.map(team => `<div class="d-inline-flex p-2 bd-highlight"><p>Name: ${team.name}</p><p>City: ${team.city}</p><p>abbrv: ${team.abbrv}</p><p>ID: ${team._id}</p><p>PG: ${team.pg}</p><p>SG: ${team.sg}</p><p>SF: ${team.sf}</p><p>PF: ${team.pf}</p><p>C: ${team.c}</p>
    <button class="teams-delete-btn btn btn-danger" data-id=${data._id}>Delete Team</button><br></div>`))

}
const onError = (err) => {
console.log(err)
$('#message_board').html('Something went wrong, please try again.')

setTimeout(() => {
    $('#message_board').hide()
  }, 5000)
    $('form').trigger('reset')
}
module.exports = {
    createTeamSuccess,
    onError,
    viewTeamSuccess
}