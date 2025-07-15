/* eslint-disable import/no-anonymous-default-export */
import Header from "../components/Header"
import Footer from "../components/Footer"
import OurPartnerships from "../components/OurPartnerships"
import { Link } from "react-router-dom";
import "../styles/home.css"
import "../styles/index.css"



export default function() {

    const ourPartnerships = [
        { 
            name: "Food Not Bombs", 
            link: "http://foodnotbombs.net" 
        },
        { 
            name: "East Bay SPCA", 
            link: "" 
        },
        { 
            name: "Berkeley NEED", 
            link: "https://eastbayspca.org" 
        },
       
        { 
            name: "ASUC Legal Clinic", 
            link: "https://www.asucslcberkeley.org" 
        },
        { 
            name: "Students vs. Pandemics", 
            link: "https://www.studentsvspandemics.com" 
        },
        { 
            name: "Homeless Action Center", 
            link: "https://homelessactioncenter.org" 
        },
        { 
            name: "ASUC Community Projects", 
            link: "https://publicservice.berkeley.edu/programs/student-initiated-projects/" 
        },
        
        { 
            name: "All Souls Episcopal Parish", 
            link: "https://www.allsoulsparish.org" 
        },
        
        { 
            name: "Housing and Economic Rights Advocates", 
            link: "https://www.heraca.org" 
        },
        
        { 
            name: "National Coalition Against Prescription Drug Abuse", 
            link: "https://ncapda.org" 
        },
        { 
            name: "Where Do We Go?", 
            link: "https://www.wdwg.org" 
        }
        
    ];
    
    return (
        <>
            <Header />
            <div className="banner-container">
                <div className="banner-overlay">
                    <h1 className="banner-text">UNDERGRAD STREET MEDICINE OUTREACH</h1>
                </div>
                <img
                className="banner-image"
                alt="USMO Banner"
                src={require("../images/mainBanner.jpg")}
                />
            </div>
            <div className="homepage-content-container">
                <div className="homepage-text-content-container">
                    <section className = "mission-statement-container text-container-top">
                        <h2>Our Mission</h2>
                        <div className="card">
                            <p>
                                We are <strong>USMO</strong>, a team of undergraduate students dedicated to serving the houseless. 
                                Houseless people are often highly discriminated against, severely limiting their access to stable employment, much-needed shelter, and life-saving healthcare.
                                Many houseless people form encampments for the sake of survival, only to find themselves being continually displaced. 
                                Together, we at USMO work to support those in dire need of help.
                            </p>
                        </div>
                    </section>
                    <section className = "our-story-container text-container-top">
                        <h2>Our Story</h2>
                        <div className="card">
                            <strong>
                                USMO started in 2021 with a dream and a kitchen...
                            </strong> 
                            <p>    
                            Our first outreach involved only three ingredients: peanut butter, jelly, and whole wheat bread. It 
                            came as a response from our small group of founders— Jason Abbas, Hamilton Nguyen, John Son, Aditya 
                            Lashmanan, Ranga Bharadwaj, Rishi Raghavan, and Rahul Desmane— to the severe lack of community resources 
                            we witnessed firsthand in Berkeley's unhoused encampments. Noticing the real change we could 
                            effect with just a few sandwiches, we decided it was worthwhile to scale up our operation, creating USMO as 
                            we know it today. Within one short year as a student organization, USMO has grown to a club with over <strong>80+ members</strong> that visit 
                            encampments weekly, no matter the circumstance, to provide medical supplies, food, and social support to our community members. 
                            We at USMO believe that everyone should make the effort to help one another, and we provide the opportunity to do so to anyone who wishes to start. 
                            </p>
                        </div>
                    </section>
                    <section className = "join-us-container text-container-top">
                        <h2>Join Us</h2>
                        <div className="card">
                            <p>
                                All undergraduate students regardless of year and prior experience are welcome to join USMO! Feel free to contact us <Link to="/contact">here</Link>.
                            </p>
                        </div>
                    </section>
                    <section className="our-partnerships-container text-container-top">
                        <h2>Our Partnerships</h2>
                        <div className="card"> 
                            <div className = "our-partnerships-wrapper">
                                <div className="our-partnerships-grid">
                                {ourPartnerships.map((org, index) => (
                                    <div className="our-partnerships-item" key={index}> {/* add padding around each logo */}
                                        <div className="our-partnerships-logo">
                                            <OurPartnerships
                                                name={org.name} 
                                                link={org.link} 
                                            />
                                        </div>
                                        <p style={{ textAlign: 'center' }}>{org.name}</p> 
                                    </div>
                                ))}
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
            <Footer />
        </>
    )
}   