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
                    <p className= "sub2" >USMO is UC Berkeleys premeir non proffit otganixation commited to supporting the homeless community of Berkeley</p>
                </div>
            </div>
            <div className = "mission">
                <h2>Our Mission</h2>
                 <p className = "missionp">Our mission is to overcome and mitigate barriers that houseless communities/encampments face in relation to accessing healthcare and other services provided in the Berkeley area.</p>
            </div>

            <div className = "services">
            <h2>Our Services</h2>
                <div className = "wrapper0">

                    <div className = "icon-container">
                        <img src="physical_exams.png" alt="Icon 1"></img>
                        <p>Physical Exams</p>
                    </div>

                    <div className = "icon-container">
                        <img src="mental_health.png" alt="Icon 2"></img>
                        <p>Mental Health</p>
                    </div>

                    <div className = "icon-container">
                        <img src="flu_shot.png" alt="Icon 3"></img>
                        <p>Flu Shot</p>
                    </div>

                </div>
               
            </div>


         
            <Footer />
        </>
    )
}   