import Element from "../Robot/containers/Element";
function MiddleSide(props) {

  let display = props.list_part.map(
    (element) => <div onClick={() => {props.onSelectRobot(element.id)}}><Element element={element}></Element></div>
)

  
  return (
      <div className="container">
          {display}
      </div>
  );
}

export default MiddleSide;
