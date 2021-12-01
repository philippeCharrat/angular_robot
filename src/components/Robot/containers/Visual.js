function Visual(propos) {
    const robot_src = propos.robot.src;
    let result;
    switch(propos.type)
    {
        case 'IMG' : 
        result = (<img src={robot_src}></img>);
        break;
        case 'VIDEO' : 
        result = (<object src={robot_src}></object>);
        break;
    }
  return (
      <div className="thumb">
          {result}
      </div>
  );
}

export default Visual;
