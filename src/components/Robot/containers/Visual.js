function Visual(props) {
    const robot_src = props.robot.visual_src;
    let result;
    const test = "width: 100%;";
    switch(props.robot.visual_type)
    {
        case 'img' : 
        result = (<img src={robot_src}></img>);
        break;
        case 'video' : 
        result = (<object width="100%" height="100%" data={robot_src} alt="video de robot"></object>);
        break;
    }
  return (
      <div className="thumb">
          {result}
      </div>
  );
}

export default Visual;
