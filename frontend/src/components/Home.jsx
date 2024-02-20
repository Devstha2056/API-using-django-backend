import Navbar from "./Navbar";

import "../styles/home.css";
// import background from "../images/di.jpg"
// import "../images/di.jpg"

function Home() {
    return <>
        <Navbar />
        <div className="front" >
            <h1 className="title heading">Diabetes Prediction System</h1>
            <h2 className="slogan heading">A sugar free will definitely lead </h2>
            <h2 className="slogan heading slogan2"> to a diabetes free life.</h2>
            {/* <img src="src\images\di.jpg" alt="" /> */}
        </div>
    </>
}
export default Home;