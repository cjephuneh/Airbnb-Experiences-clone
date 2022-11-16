import Sports from '../assets/sports.png'
import Star from '../assets/Star.png'
const Card = (props) => {
    console.log(props)
    return(
        <div className='card'>
            <img src={Sports} className="sport--logo" alt="" />
            <div className='card--stats'>
                <img src={Star} className="star--logo" alt="" />
               <span className='gray'>{props.rating}</span>
                <span className='gray'>{props.country}</span>      
            </div>
                <p>{props.tittle}</p>
                <p><span className='bolder'>From ${props.price}</span> / person</p>
        </div>
    )
}

export default Card 