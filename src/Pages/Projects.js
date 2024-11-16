import { useState } from "react";
import Card from "../Components/Card";
import photo1 from "../Assets/hf1.jpg"
import photo2 from "../Assets/hf5.jpg"

const Projects = () => {
    const [cards, setCards] = useState([
        {
            img: photo1,
            title: "Business Tools",
            desc: "Custom-built web tools tailored to streamline business operations, improve productivity, and enhance user experience. From dashboards to CRM systems, we provide solutions that make daily tasks easier and more efficient."
        },
        {
            img: photo2,
            title: "Landing Pages",
            desc: "High-converting landing pages designed to capture attention, generate leads, and drive action. We focus on compelling design and user experience to make your marketing efforts more impactful."
        },
        {
            img: photo1,
            title: "E-commerce Storefronts",
            desc: "Fully functional e-commerce websites built to showcase products, manage transactions, and drive sales. Our store solutions are optimized for performance, usability, and conversion, providing a seamless shopping experience for your customers."
        },
    ]);
    
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
            <p id="projectsTitle">Our Projects</p>
            <p id="cardContainer">
                {mappedCards}
            </p>
        </div>
    );
}

export default Projects;