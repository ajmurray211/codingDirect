import { Button } from "reactstrap";
import lineDecoration from '../Assets/lineDecoration.png'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div id="homePage">
            <img id="homeDecoration" src={lineDecoration} />
            <p id="homeTitle">Software Development</p>
            <p id="homeSlogan">
                We want to be your first call when things go
                well and your first call when things go wrong.
            </p>

            <Link to='/contact'><Button id="homeContact">Contact us</Button></Link>
        </div>
    );
}

export default Home;