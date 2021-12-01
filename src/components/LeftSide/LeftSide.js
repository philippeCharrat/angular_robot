import Robot from '../Robot/Robot';

function LeftSide(props) {
  let robotList = props.robots
  let display = robotList.map(
      (robot) => 
        <div onClick={() => {props.onSelectRobot(robot.id)}}>
        <Robot robot={robot}></Robot>
        </div>
  )

  return (
      <div className="container">
          {display}
      </div>
  );
}

export default LeftSide;