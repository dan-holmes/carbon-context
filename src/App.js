import React, {useState} from 'react';

import Item from './Item.js';
import AddItemForm from './AddItemForm'

const carbonData = [
    {"name":"Fly", "unit":"km", "carbon":254},
    {"name":"Drive", "unit":"km", "carbon":171},
    {"name":"Bus", "unit":"km", "carbon":104},
    {"name":"Train", "unit":"km", "carbon":41},
    {"name":"Beef", "unit":"g", "carbon":71},
    {"name":"Lamb", "unit":"g", "carbon":24},
    {"name":"Cheese", "unit":"g", "carbon":21},
    {"name":"Chocolate", "unit":"g", "carbon":19},
    {"name":"Rice", "unit":"g", "carbon":4},
    {"name":"Apples", "unit":"g", "carbon":0.4},
    {"name":"LED lightbulb", "unit":"hours", "carbon":167},
    {"name":"Halogen lightbulb", "unit":"hours", "carbon":811},
    {"name":"Jeans", "unit":"pairs", "carbon":33400},
    {"name":"Cotton T-Shirt", "unit":"items", "carbon":2000},
    {"name":"Polyester Dress", "unit":"items", "carbon":17000},
    {"name":"Bitcoin", "unit":"transactions", "carbon":322000}
]

function filterData(dataSelection) {
  let filteredData = []
  carbonData.forEach((item) => {
    dataSelection.forEach((selection) => {
      if (item.name === selection.name) {
        filteredData.push({"name":item.name, "quantity":selection.quantity, "unit": item.unit, "carbon": item.carbon*selection.quantity, "highlighted":false})
      }
    })
  })
  return filteredData
}

function compareRows(a, b) {
  if (a.carbon < b.carbon) {
    return -1;
  } else if (a.carbon > b.carbon) {
    return 1
  } else {
    return 0
  }
}

function getMaxCarbon(rows) {
  let max = 0
  rows.forEach((row) => {
    if (row.carbon > max) {
      max = row.carbon
    }
  })
  return max
}

function App() {
  const [dataSelection, setDataSelection] = useState([
    {"name":'Fly', "quantity":1000},
    {"name":'Beef', "quantity":250},
    {"name":'LED lightbulb', "quantity":1},
  ])

  let filteredData = filterData(dataSelection)

  function addSelection(itemName, quantity) {
    setDataSelection(dataSelection.concat({"name": itemName, "quantity": quantity}))
  }

  function deleteSelection(itemName, quantity) {
    let newDataSelection = []
    for (let i = 0; i < dataSelection.length; i++) {
      if (dataSelection[i].name !== itemName || dataSelection[i].quantity !== quantity) {
        newDataSelection.push(dataSelection[i])
      }
    }
    setDataSelection(newDataSelection)
  }

  function createItems(rows) {
    rows = rows.sort(compareRows)
    let items = []
    let maxCarbon = getMaxCarbon(rows)
    for (let i = 0; i < rows.length; i++) {
      items.push(<Item key={i} data={rows[i]} maxCarbon={maxCarbon} deleteSelection={deleteSelection} />);
    }
    return items;
  }

  return (
    <div className="App" >
      <div style={{margin: 'auto', width: 600}}>
        <AddItemForm data={carbonData} addSelection={addSelection} />
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        {createItems(filteredData)}
      </div>
    </div>
  );
}

export default App;
