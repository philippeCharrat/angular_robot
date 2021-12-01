import Element from "../Robot/containers/Element";
function MiddleSide(propos) {

  let display = propos.list_part.map(
    (element) => <Element element={element}></Element>
)

  
  return (
      <div className="container">
          {display}
      </div>
  );
}

export default MiddleSide;
