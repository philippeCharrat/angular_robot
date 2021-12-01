import React,{ useState, useEffect } from 'react';
import './App.css';
import LeftSide from './components/LeftSide/LeftSide';
import MiddleSide from './components/MiddleSide/MiddleSide';
import robot_part from './robot_part.json';

function App() {
  const [list_part, changeListPart] = useState([]); 
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

  /*useEffect(() => {
    changeListPart()
  }, [])
*/
  console.log(list_part);
  return (
    <div className="row">
      <div className="col-md-4">
        <LeftSide onSelectRobot={onSelectRobot}></LeftSide>
      </div>
      <div className="col-md-4">
        <MiddleSide list_part={list_part} ></MiddleSide>
      </div>
      <div className="col-md-4">
        C
      </div>
    </div>

  );
}

export default App;
