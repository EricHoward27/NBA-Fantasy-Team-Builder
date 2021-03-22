const store = require('./../store')

const createTeamSuccess = (data) => {
    // console.log("team data is: ", data)
    store.team = data
$('#error-message').text('Welcome to the league!')
$('form').trigger('reset')

// console.log('Create team response is: ', data)
// console.log("team id is: ", store.team._id)
$('#add-player-section').show()
$('#create-team').hide()

}

const viewTeamSuccess = (data) => {
    const players = data

    // console.log(teams)

    let teamsHtml = ''

    players.forEach(player => {
        // console.log('team data is: ', teams)
        teamsHtml += `
        <p>Name: ${player.name}</p>
        <p>Position: ${player.position}</p>
        <p>Points: ${player.points}</p>
        <p>Assists: ${player.assists}</p>
        <p>Rebounds: ${player.rebounds}</p>
        <p>Team: ${JSON.stringify(player.team, ['city','name'])}</p>
        <button class="player-destroy-dynamic btn btn-danger" data-id=${player._id}>Delete</button>

        `
    })
    $('#team-display').html(teamsHtml)
    // $('#team-display').html(players.map(player => `<div class="d-inline-flex p-2 bd-highlight"><ul><li>Name: ${player.name}</li><br><li>Position: ${player.position}</li><br><li>Points: ${player.points}</li><br><li>Assists: ${player.assists}</li><li>Rebounds: ${player.rebounds}</li><li>Team: ${JSON.stringify(player.team)}</li></ul>
    // <br></div>
    // <button class="player-destroy-dynamic btn btn-danger" data-id=${player._id}>Delete</button>`))

}
const onDestroySuccess = () => {
    $('#error-message').text('Player Deleted!')
    $('#error-message').addClass('success')
    // this resets (clears) every form on the page
    $('form').trigger('reset')
    // Do the following code after a 5 second (5000 millisecond) timeout
    setTimeout(() => {
      // Clear the #books-destroy-message.
      $('#error-message').html('')
      // Remove the success class from our message
      $('#error-message').removeClass('success')
    }, 5000)
}
const onError = (err) => {
// console.log(err)
$('#error-message').text('Something went wrong, please try again.')

setTimeout(() => {
    $('#error-message').hide()
  }, 5000)
    $('form').trigger('reset')
}
module.exports = {
    createTeamSuccess,
    onError,
    viewTeamSuccess,
    onDestroySuccess
}
