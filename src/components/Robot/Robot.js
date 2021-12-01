import Visual from './containers/Visual';
import Label from './containers/Label';

function Robot(props) {
    const robot = props.robot;
  return (
      <div className="card">
        <Visual robot={robot} ></Visual>
        <div className="card-body">
            <Label robot={robot}></Label>
        </div>
      </div>
  );
}

export default Robot;
