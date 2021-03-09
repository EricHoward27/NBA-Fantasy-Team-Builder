'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvent = require('./auth/events')
const teamEvent = require('./team/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  // hide navbar until sign in
  $('#navbar').hide()
  // hide create team form until sign in
  $('#create-team').hide()
  // Login Handlers 
  $('#sign-in').hide()
  $('.sign-up').addClass('active')
  
  $('.sign-in').click(function(){
    $(this).addClass('active')
    $('.sign-up').removeClass('active')
    $('#sign-in').show()
    $('#sign-up').hide()
  })
  $('.sign-up').click(function(){
    $(this).addClass('active')
    $('.sign-in').removeClass('active')
    $('#sign-up').show()
    $('#sign-in').hide()
  })
  // auth event handlers
  $('#sign-up').on('submit', authEvent.onSignUp)
  $('#sign-in').on('submit', authEvent.onSignIn)
  // team event handlers
  $('#create-team').on('submit', teamEvent.onCreateTeam)
})
