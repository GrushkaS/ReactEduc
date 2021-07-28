import './Header.css'

const Header = () => {
    return (
        <div className="NavBar">
            <h3>React app!</h3>
            <a className="active" href="#s">About</a>
            <a href="#s">Log-in</a>
            <a href="#s">Contact</a>
            <a href="">Home</a>
        </div>
    );
};

export default Header;