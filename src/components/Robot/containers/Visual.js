function Visual(propos) {
    const robot_src = propos.robot.visual_src;
    let result;
    switch(propos.robot.visual_type)
    {
        case 'img' : 
        result = (<img src={robot_src}></img>);
        break;
        case 'video' : 
        result = (<video src={robot_src} alt="video de robot"></video>);
        break;
    }
  return (
      <div className="thumb">
          {result}
      </div>
  );
}

export default Visual;
