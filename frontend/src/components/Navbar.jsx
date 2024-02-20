import "../styles/Navbar.css"
import logo from "../images/logo1.png"



function Navbar() {

    return <>


        <header id="navbar">
            <a href="/">
                <img id="logo" src={logo} alt="Logo" />
            </a>


            <div id="menu">

                <a href="/" className="nav">Home</a>
                <a href="/about" className="nav">About</a>
                <a href="/register2" className="nav">Register</a>
                <a href="/login2" className="nav">Login</a>
            </div>
        </header>





    </>
}
export default Navbar;
