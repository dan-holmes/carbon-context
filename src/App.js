import './App.css';
import {Circle} from 'react-shapes';

let data = {
  "Lightbulb for one hour": 2,
  "Fly one mile": 100,
  "Eat 1kg of steak": 14
};

function createCircles(data) {
  let circles = []
  for (const [key, value] of Object.entries(data)) {
    circles.push(<Circle r={value} fill={{color:'#2409ba'}} stroke={{color:'#E65243'}} strokeWidth={3} />);
  }
  return circles;
}

function App() {
  return (
    <div className="App">
      {createCircles(data)}
    </div>
  );
}

export default App;
