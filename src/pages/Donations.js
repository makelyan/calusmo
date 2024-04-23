import Header from "../components/Header"
import Footer from "../components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/index.css"
import "../styles/contact.css"
import "../styles/Donations.css"
import Button from 'react-bootstrap/Button';

export default function() {
    return (
        <>
            <Header />
            <div className ="header-wrapper-donations">
                <h1 className = 'main-header donation-extra-large'>Donate</h1>
                <div className ="img-wrapper-donations">
                    <img src= {require("./donations.png")} alt="USMO donation smiling photo">
                    </img> {/* I would like to have this in higher res */}
                </div>
                <div className = "hero-description"> 
                    <h2 className = "donation-description"> </h2>
                </div>
                <div className = "button-wrapper">
                    <Button size = "lg" href="https://gofund.me/c0f81069">Give Now</Button> 
                    {/* this button sucks. Needs to be larger & fill out space */}
                </div>
            </div>
            <div className = "body-wrapper-contact"> 
                <p className = "little-blurb-donations"> At RISD we understand that art and design drive human progress and produce innovations that shape our world. We are deeply committed to building an inclusive community enlivened by a culture of risk-taking and critique. RISD’s creative leaders—faculty, students and alumni—are using their skills and imaginations to solve complex problems and make enduring contributions to global culture. <br></br> <br></br>
                    RISD fuels a lifelong passion for art and design and a determination to address the most important challenges of our time. We invite you to invest in RISD at this decisive moment. Together, we can make our world more equitable, more vibrant and more sustainable. <br></br><br></br>
                    Change a life, transform a community, make the future. Thank you for your interest in supporting RISD.</p>
                    {/* Get USMO to write a little thing like this */}
            </div>
            <div className ="donation-number-flex-wrapper">
                <div className = "donation-number-counter-wrapper"> 
                    <h2 className = "donation-number-counter flex-left"></h2>
                </div>
                <div className = "donation-number-counter-wrapper"> 
                    <h2 className = "donation-number-counter-wrapper donation-number-counter flex-right"></h2>
                </div>
            </div>

            <Footer />
        </>
    )
}