
function Label(propos) {
  const id_robot = propos.robot.id_robot;
  const name_robot = propos.robot.name_robot;

  console.log(propos);
  return (
      <div>
        <h1> {name_robot} </h1>
        <h2>ID : {id_robot}</h2>
      </div>
      );
}
export default Label;
