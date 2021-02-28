import {Circle} from 'react-shapes';

function circleColor(highlighted) {
  if (highlighted) {
    return {color:'#48D1CC'}
  } else {
    return {color:'#ADD8E6'}
  }
}

function Item(props) {
  let size = Math.sqrt((props.data.carbon/props.maxCarbon)) * 200
  let text = props.data.name + " - " + props.data.quantity + " " + props.data.unit
  let highlighted = props.data.highlighted
  return (
    <div className="Item" 
        style={{
          position: 'relative',
          padding: 10,
          display: 'flex',
          flexDirection: 'column',
          marginLeft: size
        }}>
      <div className="Circle" style={{height: 500, position: 'relative'}}>
        <div style={{position: 'absolute', bottom: 0, left: '50%', marginLeft: -size}} >
          <Circle r={size} fill={circleColor(highlighted)} />
        </div>
      </div>
      <div className="Label" >
        {text} <button onClick={() => {props.deleteSelection(props.data.name, props.data.quantity)}}>x</button>
      </div>
    </div>
  );
}

export default Item;