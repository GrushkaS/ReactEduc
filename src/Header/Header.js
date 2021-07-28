import './Header.css'
import logo from "../logo.svg";

const Header = () => {
    return (
        <div className="NavBar">
            <img src={logo} className="App-logo" alt="logo" />
            <h3>React app!</h3>
            <a className="active" href="#s">About</a>
            <a href="#s">Log-in</a>
            <a href="#s">Contact</a>
            <a href="">Home</a>
        </div>
    );
};

export default Header;