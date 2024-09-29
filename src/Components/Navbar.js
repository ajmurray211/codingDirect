import { Link } from "react-router-dom";
import logo from '../Assets/logo-2.png'

const Navbar = () => {
    return (
        <div id="navContainer">
            <img className="CDlogo" src={logo} />
            <Link className="navLink" to="/">Home</Link>
            <Link className="navLink" to="/projects">Projects</Link>
            {/* <Link className="navLink" to="/pricing">Pricing</Link> */}
            <Link className="navLink" to="/contact">Contact</Link>
            {/* <Link className="navLink" to="/about">About</Link> */}
        </div >
    );
}

export default Navbar;