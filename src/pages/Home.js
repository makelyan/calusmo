import Header from "../components/Header"
import Footer from "../components/Footer"
import "../styles/Home.css"

export default function() {
    return (
        <>
            <Header />
            <div className="home-wrapper">
                <div className = "background">
                    <div className="hero-contents">
                        <h1 className = "title">UNDERGRADUATE STREET MEDICINE OUTREACH</h1>
                        <p className = "sub1">USMO is UC Berkeley's premeir non proffit organization commited to supporting the homeless community of Berkeley</p>

                    </div>
                </div>
                <div className = "img1">
                    <img src= "mission_img.jpeg" alt = "this picture didnt load :/"/>
                </div>
                <div className = "mission">
                    <div className="missiontxt">
                        <h2>OUR MISSION</h2>
                        <p className = "missionp">Our mission is to overcome and mitigate barriers that houseless communities and encampments face in relation to accessing healthcare and other services provided in the Berkeley area.</p>
                    </div>
                    
                </div>


                <div className = "decal">
                    <h2>EDUCATION OUTREACH</h2>
                    <p className = "educationp">USMO offers an educational course to cal students to educate them on the factors and implications surroinding homelessness. Blah blah ask USMO for more infomration</p>
                </div>
           

            </div>
            

         
            <Footer />
        </>
    )
}   