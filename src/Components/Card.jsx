import Sports from '../assets/sports.png'
import Star from '../assets/Star.png'
const Card = () => {
    return(
        <div className='card'>
            <img src={Sports} className="sport--logo" alt="" />
            <div className='card--stats'>
                <img src={Star} className="star--logo" alt="" />
               <span className='gray'>5.0</span>
                <span className='gray'>(6) . </span>      
            </div>
                <p>Life lessons with Katie Zafer</p>
                <p><span className='bolder'>From $136 </span> / person</p>
        </div>
    )
}

export default Card 