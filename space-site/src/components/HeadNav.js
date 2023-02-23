import starIcon from './logo.svg';

export function HeadNav() {

    const iconStyle = {
      "border":"1px solid pink",
      "width":"48px",
      "height":"48px",
    }

    const lineStyle = {
      "backgroundColor":"white",
      "height":".5px",
      "flexGrow":"10",
      "transform":"translateX(20px)",
    }





    return (
    <header id="navHead">
      <div id="icon" style={iconStyle}></div>
      <div id="line" style={lineStyle}></div>
      <div id="navPanel">
        <ul>
          <li>Home</li>
          <li>Destination</li>
          <li>Crew</li>
          <li>Technology</li>
        </ul>
      </div>
    </header>
    )
  }