const config = require('../config')
// empty object to store user data
const store = require('./../store')

const signUp = (data) => {
    return $.ajax({
        method: 'POST',
        url: config.apiUrl + '/sign-up',
        data: data
    })
}
const signIn = (data) => {
    return $.ajax({
        method: 'POST',
        url: config.apiUrl + '/sign-in',
        data: data
    })
}
const signOut = () => {
    return $.ajax({
        url: config.apiUrl + '/sign-out',
        method: 'DELETE',
        headers: {
            Authorization: 'Bearer ' + store.user.token
        }
    })
}
const changePassword = (data) => {
    return $.ajax({
      url: config.apiUrl + '/change-password',
      method: 'PATCH',
      headers: {
        Authorization: 'Bearer ' + store.user.token
      },
      data: data
    })
  }
module.exports = {
    signUp,
    signIn,
    signOut,
    changePassword
}