import composents from './../../source/composant.json'

function RightSide(props) {
  let idcomposant = props.id;
  if (idcomposant == undefined)
  {
      idcomposant = "A4";
  }
  let spec_composant;
  for(var element of composents.component)
    {

    console.log(idcomposant == element.id);
      if(idcomposant == element.id)
      {
         spec_composant = element;

      }
    }
    return (
      <div className="card">
          <img class="card-img-top" src={spec_composant.link} alt="Card image cap"></img>
          <div class="card-body">
            <h5 class="card-title">{spec_composant.title}</h5>
            <p class="card-text">{spec_composant.description}</p>
            <p>Price : {spec_composant.price}</p>
            </div>
      </div>
  );
}

export default RightSide;