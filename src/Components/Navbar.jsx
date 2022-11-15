import Logo from '../assets/airbnblogo.png'

const Navbar = () => {
    return (
        <nav className='nav'>
            <img src={Logo} className="nav--logo" alt="" />
        </nav>
    )
}

export default Navbar