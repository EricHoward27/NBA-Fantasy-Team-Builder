// require config to set url with the apiUrl
const config = require('../config')
// empty object to store user data
const store = require('./../store')

const addPlayer = (data) => {
    return $.ajax({
        url: config.apiUrl + '/players',
        method: 'POST',
        headers: {
            Authorization: 'Bearer ' + store.user.token
        },
        data: data
    })
}
const updatePlayer = (id, data) => {
    return $.ajax({
        url: config.apiUrl + '/players/' + id,
        method: 'PATCH',
        headers: {
            Authorization: 'Bearer ' + store.user.token
        },
        data: data
    })
}
module.exports = {
    addPlayer,
    updatePlayer
}