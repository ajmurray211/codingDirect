import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <h2>NavBar</h2>
            <Link to="/">Home</Link>
            <Link to="/work">Work</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
        </>
    );
}

export default Navbar;