import Header from "../components/Header"
import Footer from "../components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/index.css"
import "../styles/contact.css"
import "../styles/Donations.css"

export default function() {
    return (
        <>
            <Header />
            <div className ="header-wrapper-donation">
                <h1 className = 'main-header donation-extra-large'>Donate</h1>
                <div className ="img-wrapper-donations">
                <img src= {require("./donations.png")} alt="USMO donation smiling photo">
                </img> {/* I would like to have this in higher res */}
                </div>
                <p className = "blurb-donations"> At RISD we understand that art and design drive human progress and produce innovations that shape our world. We are deeply committed to building an inclusive community enlivened by a culture of risk-taking and critique. RISD’s creative leaders—faculty, students and alumni—are using their skills and imaginations to solve complex problems and make enduring contributions to global culture.
RISD fuels a lifelong passion for art and design and a determination to address the most important challenges of our time. We invite you to invest in RISD at this decisive moment. Together, we can make our world more equitable, more vibrant and more sustainable.
Change a life, transform a community, make the future. Thank you for your interest in supporting RISD.</p>
            </div>
            <div className = "body-wrapper-contact"> 
            </div>
            <h2 className = "donation-number-counter"></h2>

            <Footer />
        </>
    )
}