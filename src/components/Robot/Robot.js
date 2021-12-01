import Visual from './containers/Visual';
import Label from './containers/Label';

function Robot(propos) {
    const robot = propos.robot;
    console.log(robot); 
  return (
      <div className="container">
          <Label robot={robot}></Label>
          <Visual 
            robot={robot} 
            type='IMG'
          >
              
          </Visual>
      </div>
  );
}

export default Robot;
