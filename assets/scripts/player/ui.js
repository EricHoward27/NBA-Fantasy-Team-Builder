const store = require("../store")

const addPlayerSuccess = (data) => {
 
$('#error-message').text('Player added successful')

setTimeout(() => {
    $('#error-message').hide()
}, 4000)
$('form').trigger('reset')
}
const addPlayerFail = () => {
    $('#error-message').text('Error, please try again.')
    
    setTimeout(() => {
        $('#error-message').hide()
    }, 4000)
}
const updatePlayerSuccess = (data) => {
    $('#error-message').text('You successfully updated player!')

setTimeout(() => {
    $('#error-message').hide()
}, 4000)
$('form').trigger('reset')
}
const updatePlayerFail = (data) => {
    $('#error-message').text('Error, please try again.')

    setTimeout(() => {
        $('#error-message').hide()
    }, 4000)
}

module.exports = {
    addPlayerFail,
    addPlayerSuccess,
    updatePlayerSuccess,
    updatePlayerFail
}