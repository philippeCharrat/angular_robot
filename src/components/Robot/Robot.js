import Visual from './containers/Visual';
import Label from './containers/Label';

function Robot(propos) {
    const robot = propos.robot;
  return (
      <div className="container">
          <Label robot={robot}></Label>
          <Visual robot={robot} >
              
          </Visual>
      </div>
  );
}

export default Robot;
