// require api to make http requests
const api = require('./api')
// require ui to update the DOM after an request from api
const ui = require('./ui')
// require the get form fields function
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')

let pickRow

const onAddPlayer = (event) => {
    event.preventDefault()
    const form = event.target
    const data = getFormFields(form)
    // store team id into the player's team to populate
    data.player.team = store.team._id
    
    console.log(data.player.team)

    // console.log('add player data is: ', data)
    api.addPlayer(data)
    .then(playerData)
    .then(ui.addPlayerSuccess)
    .catch(ui.addPlayerFail)
}

function playerData(data){
    const table = document.getElementById('playerList').getElementsByTagName('tbody')[0]
    const newRow = table.insertRow(table.length)
    let cell1 = newRow.insertCell(0)
    cell1.innerHTML = data.position
    let cell2 = newRow.insertCell(1)
    cell2.innerHTML = data.name
    let cell3 = newRow.insertCell(2)
    cell3.innerHTML = data.points
    let cell4 = newRow.insertCell(3)
    cell4.innerHTML = data.assists 
    let cell5 = newRow.insertCell(4)
    cell5.innerHTML = data.rebounds
    let cell6 = newRow.insertCell(5)
    cell6.innerHTML = `<button onClick="onEdit(this)" class="btn btn-dark" id="edit-btn">Edit</button>
                       <button class="btn btn-danger" id="delete-btn">Delete</button>`
   }

//    const onEdit = (td) => {
//     pickRow = td.parentElement.parentElement
//     document.getElementById('position').value = pickRow.cells[0].innerHTML
//     document.getElementById('name').value = pickRow.cells[1].innerHTML
//     document.getElementById('points').value = pickRow.cells[2].innerHTML
//     document.getElementById('assists').value = pickRow.cells[3].innerHTML
//     document.getElementById('rebounds').value = pickRow.cells[4].innerHTML
//    }

   const onUpdatePlayer = (event) => {
    event.preventDefault()
    const data =  getFormFields(event.target)
    const id = data.player.id

    
    api.updatePlayer(id, data)
    .then(ui.updatePlayerSuccess)
    .catch(ui.updatePlayerFail)
   }
module.exports = {
    onAddPlayer,
    onUpdatePlayer,
    playerData
}