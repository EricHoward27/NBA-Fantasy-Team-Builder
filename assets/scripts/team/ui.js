const store = require('./../store')

const createTeamSuccess = (data) => {
    // console.log("team data is: ", data)
    store.team = data
$('#message_board').text('Welcome to the league!')
$('form').trigger('reset')

// console.log('Create team response is: ', data)
console.log("team id is: ", store.team._id)


}

const viewTeamSuccess = (data) => {
    const players = data

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
    
    $('#team-display').html(players.map(player => `<div class="d-inline-flex p-2 bd-highlight"><ul><li>Name: ${player.name}</li><br><li>Position: ${player.position}</li><br><li>Points: ${player.points}</li><br><li>Assists: ${player.assists}</li><li>Rebounds: ${player.rebounds}</li><li>Team: ${JSON.stringify(player.team)}</li></ul>
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