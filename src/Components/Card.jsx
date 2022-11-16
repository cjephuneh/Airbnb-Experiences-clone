import Star from '../assets/Star.png'
const Card = (props) => {
    console.log(props)
    return(
        <div className='card'>
            <img src={props.img} className="sport--logo" alt="" />
            <div className='card--stats'>
                <img src={Star} className="star--logo" alt="" />
               <span className='gray'>{props.reviewCount}</span>
                <span className='gray'>{props.location}</span>      
            </div>
                <p>{props.title}</p>
                <p><span className='bolder'>From ${props.price}</span> / person</p>
        </div>
    )
}

export default Card 