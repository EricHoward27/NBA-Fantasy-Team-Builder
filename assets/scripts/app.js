'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvent = require('./auth/events')
const teamEvent = require('./team/events')
const authPlayer = require('./player/events')
// use require without a reference to ensure a file is bundled
// require('./example')
 

$(() => {
  // your JS code goes here
  // hide navbar until sign in
  $('#navbar').hide()
  // hide create team form until sign in
  $('#create-team').hide()
  // hide player section
  $('#add-player-section').hide()
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
  $('#sign-out').on('click', authEvent.onSignOut)
  // team event handlers
  $('#create-team').on('submit', teamEvent.onCreateTeam)
  $('#view-team').on('click', teamEvent.onViewTeam)
  $('#view-team').hide() 
  // player event handlers
  $('#addPlayer').on('submit', authPlayer.onAddPlayer)
  // delete team
  $('#team-display').on('click','.teams-delete-btn', teamEvent.onTeamDelete)
  // edit/delete 
  // $('#edit-btn').on('click', authPlayer.onEdit)
  // $('#delete-btn').on('click', authPlayer.onDelete)

  
})