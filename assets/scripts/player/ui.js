const store = require("../store")

const addPlayerSuccess = (data) => {
 
$('#player-message').text('Player added successful')

store.player = data.player
setTimeout(() => {
    $('#player-message').hide()
}, 4000)
$('form').trigger('reset')
}
const addPlayerFail = () => {
    $('#player-message').text('Error, please try again.')
    
    setTimeout(() => {
        $('#player-message').hide()
    }, 4000)
}
const updatePlayerSuccess = (data) => {
    $('#player-message').text('You successfully updated player!')

    // console.log('Update player data is ', data)
setTimeout(() => {
    $('#player-message').hide()
}, 4000)
$('form').trigger('reset')
}
const updatePlayerFail = (data) => {
    $('#player-message').text('Error, please try again.')

    setTimeout(() => {
        $('#player-message').hide()
    }, 4000)
}

module.exports = {
    addPlayerFail,
    addPlayerSuccess,
    updatePlayerSuccess,
    updatePlayerFail
}