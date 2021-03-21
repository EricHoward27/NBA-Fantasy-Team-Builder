const store = require('./../store')

const signUpSuccess = (data) => {
$('#signUpMessage').text('Account Created Successfully')
$('form').trigger('reset')
setTimeout(() => {
    $('#signUpMessage').hide()
}, 4000)
}
const signUpFail = (error) => {
$('#error-message').text('Account creation failed')

    setTimeout(() => {
        $('#error-message').hide()
    }, 4000)
}
const signInSuccess = (data) => {
    $('#error-message').text('You are logged in!')
    $('form').trigger('reset')

    $('.auth-section').hide()
    $('.title_font').hide()
    $('#navbar').show()
    $('#create-team').show()
    $('#view-team').show()
    $('#password-btn').show()

    store.user = data.user
    setTimeout(() => {
        $('#error-message').hide()
    }, 4000)
    }
const signInFail = (error) => {
    $('#error-message').text("Email or Password didn't match. Please try again.")
        
        setTimeout(() => {
            $('#error-message').hide()
        }, 4000)
    }
const signOutSuccess = (data) => {
        $('#error-message').html('Sign out was successful!')
        
        $('.auth-section').show()
        $('.title_font').show()
        $('#navbar').hide()
        $('#create-team').hide()
        $('#add-player-section').hide()
        $('#view-team').hide() 
        $('#team-display').hide()

        setTimeout(() => {
          $('#error-message').hide()
        }, 4000)
      }

const signOutFail = (error) => {
        $('#error-message').html('Sign out fail, please try again.')
      
        setTimeout(() => {
          $('#error-message').hide()
        }, 4000)
    }
const changePasswordSucess = (data) => {
        $('#error-message').html('Password was successfully changed!')
        
        setTimeout(() => {
          $('#error-message').hide()
        }, 4000)
      }
const changePasswordFail = (error) => {
        $('#error-message').html('Password change fail, please try again.')
      
        setTimeout(() => {
          $('#error-message').hide()
        }, 4000)
      }
module.exports = {
    signUpSuccess,
    signUpFail,
    signInSuccess,
    signInFail,
    signOutSuccess,
    signOutFail,
    changePasswordSucess,
    changePasswordFail
}