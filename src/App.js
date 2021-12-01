import React,{ useState, useEffect } from 'react';
import './App.css';
import LeftSide from './components/LeftSide/LeftSide';
import MiddleSide from './components/MiddleSide/MiddleSide';
import RightSide from './components/RightSide/RightSide';
import robot_part from './source/robot_part.json';

function App() {
  const [list_part, changeListPart] = useState([]); 
  const [id_comp, changeId] = useState("");

  const onSelectRobot = (id) => {
    let newParts = [];
    let list_part_robot = [];

    for(var element of robot_part.robots)
    {
      if(id == element.id)
      {
        list_part_robot = element.parts;
      }
    }
    for(var element of list_part_robot)
    {
      if(!(newParts.includes(robot_part.parts.find(item => item.id === element)))) 
      {
        newParts.push(robot_part.parts.find(item => item.id === element));  
      }
    }  
    changeListPart(newParts)
  }


  const onSelectComponent = (id) => {
    changeId(id)
  }
  /*useEffect(() => {
    changeListPart()
  }, [])
*/
  console.log(list_part);
  return (
    <div className="row">
    <div className="col-md-12">
      <h1>RobotShop </h1>
      </div>
      <div className="col-md-4">
        <LeftSide robots={robot_part.robots} onSelectRobot={onSelectRobot}></LeftSide>
      </div>
      <div className="col-md-4">
        <MiddleSide list_part={list_part} onSelectComponent={onSelectComponent}></MiddleSide>
      </div>
      <div className="col-md-4">
        <RightSide id={id_comp}></RightSide>
      </div>
    </div>

  );
}

export default App;
