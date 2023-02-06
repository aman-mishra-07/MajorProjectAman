import './navbar.css'
import logo from './img/logo.png'
export default function Navbar() {
    return (
        <div className="navbar">
            <div id="left">
                <div id="logo">
                    <img src={logo} alt="LOGO" />
                </div>
                <ul>
                    <li><a href=" " class="a">Home    </a></li>
                    <li><a href=" " class="a">Services</a></li>
                    <li><a href=" " class="a">Contact Us</a></li>
                    <li><a href=" " class="a">About Us</a></li>
                </ul>
            </div>

            <div id="right">
                <input class="input" type="text" placeholder='Search'/>
                <button class="btn">Sign In</button>
                <button class="btn">Sign Up</button>
            </div>
        </div>
        
    )
}