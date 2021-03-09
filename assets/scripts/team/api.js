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
module.exports = {
    createTeam
}