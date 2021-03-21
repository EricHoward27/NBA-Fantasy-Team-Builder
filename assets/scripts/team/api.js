// require config to set url with the apiUrl
const config = require('../config')
// empty object to store user data
const store = require('./../store')

const createTeam = (data) => {
    return $.ajax({
        url: config.apiUrl + '/teams',
        method: 'POST',
        headers: {
            Authorization: 'Bearer ' + store.user.token
        },
        data: data
    })
}
const viewTeam = () => {
    return $.ajax({
        url: config.apiUrl + '/players',
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + store.user.token
        }
    })
}
const destroy = function (id) {
    return $.ajax({
      url: config.apiUrl + '/players/' + id,
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + store.user.token
    }
    })
  }
  // update team w/ player id
  
module.exports = {
    createTeam,
    viewTeam,
    destroy
}