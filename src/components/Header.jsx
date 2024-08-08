import reactImg from '../assets/images/config.png'
import "./Header.css"

function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  ); 
}

export default Header;