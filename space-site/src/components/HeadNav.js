import starIcon from './logo.svg';

export function HeadNav() {

    const iconStyle = {
      "width":"48px",
      "height":"48px",
    }

    return (
    <header id="navHead">
      <div id="icon" style={iconStyle}>
      <svg width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
      </div>
      <div class="line"></div>
      <div id="navPanel">
        <ul>
          <li><span>00</span>Home</li>
          <li><span>01</span>Destination</li>
          <li><span>02</span>Crew</li>
          <li><span>03</span>Technology</li>
        </ul>
      </div>
    </header>
    )
  }