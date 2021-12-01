import Robot from '../Robot/Robot';
import robot_part from '../../robot_part.json';

function LeftSide({onSelectRobot}) {
  let robotList = [
    {id:1,value:robot_part.robots[0]},
    {id:2,value:robot_part.robots[1]},
    {id:3,value:robot_part.robots[2]}
  ]  
  let display = robotList.map(
      (robot) => 
      <div onClick={() => {onSelectRobot(robot.id)}}>
        <Robot robot={robot.value}></Robot>
        </div>
  )

  return (
      <div className="container">
          {display}
      </div>
  );
}

export default LeftSide;