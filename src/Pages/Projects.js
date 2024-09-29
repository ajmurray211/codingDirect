import { useState } from "react";
import Card from "../Components/Card";

const Projects = () => {
    const [cards, setCards] = useState([
        {
            img: "",
            title: "test 1",
            desc: "test1 desc"
        },
        {
            img: "",
            title: "test 2",
            desc: "test2 desc"
        },
        {
            img: "",
            title: "test 3",
            desc: "test3 desc"
        },
    ])
    const mappedCards = cards.map((card) => {
        console.log(card, 'test')
        return (<Card
            img={card.img}
            title={card.title}
            desc={card.desc}
        />)
    })

    return (
        <div id="projectsPage">
            <p className="projectsTitle">Our Projects</p>
            <p id="cardContainer">
                {mappedCards}
            </p>
        </div>
    );
}

export default Projects;