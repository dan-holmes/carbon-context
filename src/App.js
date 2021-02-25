import './App.css';
import Item from './Item.js';


let data = {
  "items":[
    {"name":"Use lightbulb", "quantity":2, "unit":"hours", "carbon":4, "highlighted":false},
    {"name":"Fly", "quantity":1, "unit":"mile", "carbon":100, "highlighted":false},
    {"name":"Eat steak", "quantity":500, "unit":"grams", "carbon":14, "highlighted":true}
]};

function createItems(data) {
  let rows = data.items
  let items = []
  rows.forEach(row => {
    items.push(<Item data={row} />);
  })
  return items;
}

function App() {
  return (
    <div className="App">
      {createItems(data)}
    </div>
  );
}

export default App;
