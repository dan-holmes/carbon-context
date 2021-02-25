import {Circle} from 'react-shapes';

function Item(props) {
  return (
    <div className="Item">
      <Circle r={props.carbon} fill={{color:'#2409ba'}} stroke={{color:'#E65243'}} strokeWidth={3} />
      {props.name}
    </div>
  );
}

export default Item;