import Robot from '../Robot/Robot';
import robot from '../../robot.json';

function LeftSide() {
  let robotList = [
    {id:1,value:robot.robot1},
    {id:2,value:robot.robot2},
    {id:3,value:robot.robot3}
  ]  
  let display = robotList.map(
      (robot) => 
        <Robot robot={robot.value}></Robot>
  )
  return (
      <div className="container">
          {display}
      </div>
  );
}

export default LeftSide;