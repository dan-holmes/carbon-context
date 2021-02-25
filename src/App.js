import './App.css';
import Item from './Item.js';


let data = {
  "Lightbulb for one hour": 2,
  "Fly one mile": 100,
  "Eat 1kg of steak": 14
};

function createItems(data) {
  let items = []
  for (const [key, value] of Object.entries(data)) {
    items.push(<Item name={key} carbon={value} />);
  }
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
