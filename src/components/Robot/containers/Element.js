function Element(propos) {
    const price = propos.element.price;
    const title = propos.element.title;
    
    return (
        <div className="card">
            <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">Price : {price}</p>
            </div>
          
        </div>
        );
  }
  export default Element;
  