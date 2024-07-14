import { Link } from "react-router-dom";
import logo from '../Assets/logo-1.png'

const Navbar = () => {
    return (
        <>
            <img src={logo}/>
            <Link to="/">Home</Link>
            <Link to="/work">Work</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
        </>
    );
}

export default Navbar;