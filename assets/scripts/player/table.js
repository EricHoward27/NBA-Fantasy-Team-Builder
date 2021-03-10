// empty object to store user data
const store = require('./../store')

let pickRow

const insertData = (data) => {
 const table = document.getElementById('playerList').getElementsByTagName('tbody')[0]
 const newRow = table.insertRow(table.length)
 cell1 = newRow.insertCell(0)
 cell1.innerHTML = data.name
 cell2 = newRow.insertCell(1)
 cell2.innerHTML = data.position
 cell3 = newRow.insertCell(2)
 cell3.innerHTML = data.points
 cell4 = newRow.insertCell(3)
 cell4.innerHTML = data.assists 
 cell5 = newRow.insertCell(4)
 cell5.innerHTML = data.rebounds
 cell6.newRow.insertCell(5)
 cell6.innerHTML = `<button>Edit</button>
                    <button>Delete</button>`
}

module.exports = {
insertData
}