import Card from './Card';
import accordionData from "./accordionData";
import './MainPage.css';

export default function MainPage(){
    return(
        <div className='mainPage'>
           {accordionData.map((accordion) => <Card no={accordion.no} title={accordion.title}/>)}
        </div>
    );
}