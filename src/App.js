import './App.css';
import Item from './Item.js';


let data = {
  "items":[
    {"name":"Use lightbulb", "quantity":2, "unit":"hours", "carbon":4, "highlighted":false},
    {"name":"Fly", "quantity":1, "unit":"mile", "carbon":100, "highlighted":false},
    {"name":"Eat steak", "quantity":500, "unit":"grams", "carbon":14, "highlighted":true}
]};

function compareRows(a, b) {
  if (a.carbon < b.carbon) {
    return -1;
  } else if (a.carbon > b.carbon) {
    return 1
  } else {
    return 0
  }
}

function createItems(data) {
  let rows = data.items
  rows = rows.sort(compareRows)
  let items = []
  rows.forEach(row => {
    items.push(<Item data={row} />);
  })
  return items;
}

function App() {
  return (
    <div className="App" style={{display: 'flex', justifyContent: 'center'}}>
      {createItems(data)}
    </div>
  );
}

export default App;
