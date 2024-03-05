import Header from "../components/Header"
import Footer from "../components/Footer"
import "../styles/Home.css"

export default function() {
    return (
        <>
            <Header />
            <div className = "background">
                <div className="hero-contents">
                    <h1 className = "title">USMO</h1>
                    <p className = "sub1">Under Graduate Street Medicine Outreach</p>
                    <p className= "sub2" > Berkeley's Student organization dedicated to supporting the homeless community of Berkeley</p>
                </div>
                <div className = "mission">
                    <h2>Our Mission</h2>
                    <p className = "missionp">Our mission is to overcome and mitigate barriers that houseless communities/encampments face in relation to accessing healthcare and other services provided in the Berkeley area.</p>
                </div>
            </div>
            <div className = "services">
            <h2>Our Services</h2>
                <div className = "wrapper">
                    <ul className="ul_div">
                        <li>Physical exams</li>
                        <li> Mental Health</li>
                        <li> Flu Shot</li>
                    </ul>
                </div>
               
            </div>


         
            <Footer />
        </>
    )
}   