const store = require('./../store')

const signUpSuccess = (data) => {
$('#message_board').text('Account Created Successfully')
$('form').trigger('reset')
setTimeout(() => {
    $('#message_board').hide()
}, 4000)
}
const signUpFail = (error) => {
$('#message_board').text('Account creation failed')

    setTimeout(() => {
        $('#message_board').hide()
    }, 4000)
}
const signInSuccess = (data) => {
    $('#message_board').text('You are logged in!')
    $('form').trigger('reset')

    $('.auth-section').hide()
    $('.title_font').hide()
    $('#navbar').show()
    $('#create-team').show()
    $('#add-player-section').show()
    $('#view-team').show() 


    console.log('sign in success data is: ', data)
    store.user = data.user
    setTimeout(() => {
        $('#message_board').hide()
    }, 4000)
    }
    const signInFail = (error) => {
    $('#message_board').text("Email or Password didn't match. Please try again.")
        
    console.log('sign in fail log is: ', error)
        setTimeout(() => {
            $('#message_board').hide()
        }, 4000)
    }
    const signOutSuccess = (data) => {
        $('#message_board').html('Sign out was successful!')
        
        $('.auth-section').show()
        $('.title_font').show()
        $('#navbar').hide()
        $('#create-team').hide()
        $('#add-player-section').hide()
        $('#view-team').hide() 
        $('#team-display').hide()

        setTimeout(() => {
          $('#message_board').hide()
        }, 4000)
      }
      const signOutFail = (error) => {
        $('#message_board').html('Sign out fail, please try again.')
      
        setTimeout(() => {
          $('#message_board').hide()
        }, 4000)
    }
module.exports = {
    signUpSuccess,
    signUpFail,
    signInSuccess,
    signInFail,
    signOutSuccess,
    signOutFail
}