import Header from "../components/Header"
import Footer from "../components/Footer"
import "../styles/index.css"

export default function() {
    return (
        <>
            <Header />
            <div className = "background">
                <div className="hero-contents">
                    <h1 className = "title">USMO</h1>
                    <p className = "sub1">Under Graduate Street Medicine Outreach</p>
                    <p className= "sub2" >subtitle about what USMO is catchy</p>
                </div>
                <div className = "mission">
                    <h2>Our Mission</h2>
                    <p>Our mission is to overcome and mitigate barriers that houseless communities/encampments face in relation to accessing healthcare and other services provided in the Berkeley area.</p>
                </div>
            </div>
            <div className = "services">
                <h1>Our Services</h1>
            </div>


         
            <Footer />
        </>
    )
}   