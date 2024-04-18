import Header from "../components/Header"
import Footer from "../components/Footer"
import "../styles/Home.css"

export default function Home() {
    return (
        <>this is the map embedding
            <Header />
            <div className="background">
                <div className="hero-contents">
                    <h1 className="title">USMO</h1>
                    <p className="sub1">Under Graduate Street Medicine Outreach</p>
                    <p className="sub2">subtitle about what USMO is catchy</p>
                </div>
            </div>
            <div className="mission">
                <h2>Our Mission</h2>
                <p className="missionp">Our mission is to overcome and mitigate barriers that houseless communities/encampments face in relation to accessing healthcare and other services provided in the Berkeley area.</p>
            </div>

            <div className="services">
                <h2>Our Services</h2>
                <div className="wrapper0">
                    <div className="icon-container">
                        <img src="physical_exams.png" alt="Icon 1"></img>
                        <p>Physical Exams</p>
                    </div>
                    <div className="icon-container">
                        <img src="mental_health.png" alt="Icon 2"></img>
                        <p>Mental Health</p>
                    </div>
                    <div className="icon-container">
                        <img src="flu_shot.png" alt="Icon 3"></img>
                        <p>Flu Shot</p>
                    </div>
                </div>
            </div>

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

            <Footer />
        </>
    )
}
