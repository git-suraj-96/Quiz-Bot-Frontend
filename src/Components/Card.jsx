import { useState } from 'react';
import '../Styles/Card.css'

function Card(props) {
    const [style, setStyle] = useState("");
    const [selected, setSelected] = useState("");

    const setColor = (option, answer) => {
        setSelected(option);
        if(option === answer){
            setStyle('card-green');
        }else{
            setStyle("card-red");
        }
        console.log(option, answer);
    }
    return (
        <div className='card-element' answer={props.answer}>
            <p>{props.qno}. &nbsp;{props.question}</p>
            <div>
                <button onClick={()=> setColor(props.option[0], props.answer)} className={selected === props.option[0] ? style : ""}>{props.option[0]}</button>
                <button onClick={()=> setColor(props.option[1], props.answer)} className={selected === props.option[1] ? style : ""}>{props.option[1]}</button>
                <button onClick={()=> setColor(props.option[2], props.answer)} className={selected === props.option[2] ? style : ""}>{props.option[2]}</button>
                <button onClick={()=> setColor(props.option[3], props.answer)} className={selected === props.option[3] ? style : ""}>{props.option[3]}</button>
            </div>
        </div>
    );
}

export default Card;