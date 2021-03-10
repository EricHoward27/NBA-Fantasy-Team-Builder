const store = require("../store")

const addPlayerSuccess = (data) => {
$('#message_board').text('Player added successful')

setTimeout(() => {
    $('#message_board').hide()
}, 4000)
$('form').trigger('reset')
}
const addPlayerFail = () => {
    $('#message_board').text('Error, please try again.')
    
    setTimeout(() => {
        $('#message_board').hide()
    }, 4000)
}
const updatePlayerSuccess = (data) => {
    $('#message_board').text('You successfully updated player!')

    console.log('Update player data is ', data)
setTimeout(() => {
    $('#message_board').hide()
}, 4000)
$('form').trigger('reset')
}
const updatePlayerFail = (data) => {
    $('#message_board').text('Error, please try again.')

    setTimeout(() => {
        $('#message_board').hide()
    }, 4000)
}

module.exports = {
    addPlayerFail,
    addPlayerSuccess,
    updatePlayerSuccess,
    updatePlayerFail
}