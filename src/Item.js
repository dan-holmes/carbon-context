import {Circle} from 'react-shapes';

function textFitsInside(text, size) {
  return text.length * 4 < size * 2
}

const itemStyle = {
  position: 'relative',
  padding: 10,
}

const circleStyle = {

}

const overlappingLabelStyle = {
  position: 'absolute',
  top: '50%',
  width: '100%',
  textAlign: 'center',
  fontSize: 18
}

const seperateLabelStyle = {
  fontSize: 18
}

function dynamicLabelStyle(text, size) {
  if (textFitsInside(text, size)) { 
    return overlappingLabelStyle 
  } else {
    return seperateLabelStyle
  }
}

function circleColor(highlighted) {
  if (highlighted) {
    return {color:'#48D1CC'}
  } else {
    return {color:'#ADD8E6'}
  }
}

function Item(props) {
  let size = props.data.carbon
  let text = props.data.name + " - " + props.data.quantity + " " + props.data.unit
  let highlighted = props.data.highlighted
  return (
    <div className="Item" style = {itemStyle}>
      <div className="Circle" style={circleStyle}>
        <Circle r={size} fill={circleColor(highlighted)} />
      </div>
      <div className="Label" style={dynamicLabelStyle(text, size)}>
        {text}
      </div>
    </div>
  );
}

export default Item;