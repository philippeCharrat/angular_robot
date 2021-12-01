
function Label(propos) {
  const id_robot = propos.robot.id;
  const title = propos.robot.title;
  
  return (
      <div>
        <h1> {title} </h1>
        <h2>ID : {id_robot}</h2>
      </div>
      );
}
export default Label;
