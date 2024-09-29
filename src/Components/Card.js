const Card = (props) => {
console.log(props)
    return (
        <div id="cardComp">
            <img id="cardImg" src={props.img} />
            <p id="cardTitle">{props.title}</p>
            <p id="cardDesc">{props.desc}</p>
        </div>);
}

export default Card;