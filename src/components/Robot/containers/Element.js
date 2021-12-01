function Element(propos) {
    const price = propos.element.price;
    const title = propos.element.title;
    
    return (
        <div>
          <h1> {title} </h1>
          <h2>Price : {price}</h2>
        </div>
        );
  }
  export default Element;
  