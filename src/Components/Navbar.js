import { Link, useLocation } from "react-router-dom";
import logo from '../Assets/logo-2.png'

const Navbar = () => {
    const location = useLocation()

    return (
        <div id="navContainer">
            <img className="CDlogo" src={logo} />
            <section id="navLinks">
                <Link className={`navLink ${location.pathname === "/" ? "active" : ""}`} to="/">Home</Link>
                <Link className={`navLink ${location.pathname === "/projects" ? "active" : ""}`} to="/projects">Projects</Link>
                <Link className={`navLink ${location.pathname === "/contact" ? "active" : ""}`} to="/contact">Contact</Link>

            </section>
        </div >
    );
}

export default Navbar;