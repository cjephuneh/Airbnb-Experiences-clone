import Logo2 from '../assets/hero.png'

const Hero = () => {
    return(
        <section className='hero'>
            <img src={Logo2} className="hero--logo" alt="" />
            <h1 className='hero--header'>Online Experiences</h1>
            <p className='hero--text'>Join unique interactive activities led by 
            one-of-a-kind hosts-all without leaving 
            home.
            </p>
        </section>
    )
}

export default Hero