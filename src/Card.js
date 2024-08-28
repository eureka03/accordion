import './Card.css';
import {useState} from 'react';

export default function Card(props){
    const [falseVal,setFalseVal] = useState(false);

    function handlePlus(){
        setFalseVal(true);
    }

    function handleMinus(){
        setFalseVal(false);
    }

    if (falseVal===true){
        return (
            <div className='Card2'>
                <div className='Card3'>
                    <p id='no2'>{props.no}</p>
                    <p id='title'>{props.title}</p>
                    <button onClick={handleMinus}>-</button>
                </div>
                <div className='description'>
                    <p>{props.description}</p>
                </div>
            </div>

        );
    }


    return(
        <div className='Card'>
            <p id='no'>{props.no}</p>
            <p id='title'>{props.title}</p>
            <button onClick={handlePlus}>+</button>
        </div>
    );
}