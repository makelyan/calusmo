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

                <div className = "mission">
                    <div className="missiontxt">
                        <h2>OUR MISSION</h2>
                        <p className = "missionp">Our mission is to overcome and mitigate barriers that houseless communities and encampments face in relation to accessing healthcare and other services provided in the Berkeley area.</p>
                    </div>
                    <div className = "img1">
                        <img src= "mission_img.jpeg" alt = "this picture didnt load :/"/>
                    </div>
                </div>


                <div className = "decal">
                    <div className="eduh2">
                        <h2>EDUCATION OUTREACH</h2>
                    </div>

                    <div className="txt-and-button">
                        <p className = "educationp">USMO offers an educational course to cal students to educate them on the factors and implications surroinding homelessness. Blah blah ask USMO for more infomration</p> 
                        <button type="submit" className="mt-3 btn btn-primary">Learn More</button>
                    </div>
                    
                </div>

                


            </div>
            <div className="mapwrap">
                <iframe
                    width="100%"
                    height="450"
                    frameborder="0"
                    style={{ border: 0 }}
                    referrerpolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50393.06643711543!2d-122.28493381605301!3d37.870428916971086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80857ded265dd40d%3A0x3d6d63978662f85b!2sDavid%20Blackwell%20Hall!5e0!3m2!1sen!2sus!4v1713403493897!5m2!1sen!2sus"
                    allowfullscreen>
                </iframe>
                <iframe
                    width="100%"
                    height="450"
                    frameborder="0"
                    style={{ border: 0 }}
                    referrerpolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.3225094553354!2d-122.26056372383847!3d37.87613980631408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80857c23b14bb533%3A0x8b6a704648428629!2sCloyne%20Court%20Hotel%2C%202600%20Ridge%20Rd%2C%20Berkeley%2C%20CA%2094709!5e0!3m2!1sen!2sus!4v1713384619575!5m2!1sen!2sus"
                    allowfullscreen>
                </iframe>
            </div>

         
            <Footer />
        </>
    )
}   