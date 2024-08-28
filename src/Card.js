import './Card.css';

export default function Card(props){
    return(
        <div className='Card'>
            <p>{props.no}</p>
            <p id='title'>{props.title}</p>
            <button>+</button>
        </div>
    );
}