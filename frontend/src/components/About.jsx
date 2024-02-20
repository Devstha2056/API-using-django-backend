import "../styles/about.css";
import d1 from "../images/diabetes.jpg";
import d2 from "../images/di1.jpg";
import Navbar from "./Navbar";

function About() {
    return <>
    <Navbar/>
        <div id="about">
            <img className="img1" src={d1} alt="" />

            <div id="details">
                <div className="description">
                    <div>
                        <p className="qsn">DIABETES</p>
                        < ul className="ans">
                            <li>chronic medical condition characterized by elevated levels of glucose in the body</li>
                            <li>Occurs when body is unable to produce enough insulin</li>
                        </ul>
                        <br />
                    </div>
                </div>
                <img className="diabetesimg" src={d2} alt="" />

            </div>
            <div>
                <p className="qsn">Types of diabetes</p>
                <p className="ans">
                    <li>Type1</li>
                    <p>Type 1 diabetes is where your blood glucose level is too high because your body can’t make a hormone called insulin. This happens because your body attacks the cells in your pancreas that make the insulin. </p>

                    <li>Type2</li>
                    <p>With type 2 diabetes the insulin your pancreas makes can’t work properly, or your pancreas can’t make enough insulin. This means your blood glucose levels keep rising. </p>

                    <li>Gestational Diabetes</li>
                    <p>Gestational diabetes is diabetes that can develop during pregnancy. It affects women who haven't been affected by diabetes before.This will include eating well and keeping active. </p>
                </p>
            </div>
        </div>


    </>
}
export default About;