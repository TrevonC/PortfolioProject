import { useRef } from "react";
import { FaBars, FaTimes} from "react-icons/fa";
import logo from '../assets/logo.svg';


function NavBar(){
    const navRef = useRef();
    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }


    return(
        <header>
            <img src={logo} className="nav-img" alt="Logo" />
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">About</a>
                <a href="/#">Projects</a>
                <a href="/#">Contact</a>
                <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavBar}>
            <FaBars />
            </button>
        </header>
    );
}

export default NavBar;