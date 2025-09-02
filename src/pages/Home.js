/* eslint-disable import/no-anonymous-default-export */
import Header from "../components/Header"
import Footer from "../components/Footer"
import OurPartnerships from "../components/OurPartnerships"
import { Link } from "react-router-dom";
import "../styles/home.css"
import "../styles/index.css"
import ourPartnershipsData from '../data/partnerships.json';
import { Helmet } from 'react-helmet-async';

export default function() {

    return (
        <>
            <Helmet>
                <title>USMO</title>
                <link rel="canonical" href="https://calusmo.org/home" />
            </Helmet>
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
                    <section className = "join-us-container text-container-top">
                        <h2>Join Us!</h2>
                        <div className="card">
                            
                            <strong id="joinus-strong">We are now recruiting new members for Fall 2025!</strong>
                            <p style={{ textAlign: "center" }}>All undergraduate students regardless of year and prior experience are welcome to join USMO.</p>

                            <div className="joinus-home">
                                <div>
                                    <h3 style={{ textAlign: "center" }}>Info Sessions</h3>
                                    <ul>
                                    <li>
                                        Thursday September 4, 2025 from 8-9 PM @ Wheeler 24
                                    </li>
                                    <li>
                                        Wednesday September 10, 2025 from 8-9 PM @ Wheeler 24
                                    </li>
                                    </ul>
                                </div>                            
                                <div>
                                    <h3 style={{ textAlign: "center" }}>Members</h3>
                                    <ul>
                                        <li>
                                            As a general member, you'll support community members by attending outreach!
                                        </li>
                                        <li>
                                            You can also optionally join one of our <b>3 committees</b>: advocacy, external, and finance to get more involved!
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <strong>
                                Click <Link to="/join-us">here</Link> to learn more about outreach, committees, and more!
                            </strong>
                            <a 
                                href="https://tinyurl.com/usmofall25recruitment" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ display: "inline-block", marginTop: "10px", border: "4px solid #88acd4", padding: "10px 16px",  color: "black", borderRadius: "6px", textDecoration: "none", fontWeight: "bold" }} >
                                Interest Form
                            </a>
                             <a 
                                href="https://forms.gle/9KAddPc3bghkJeyR9" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ display: "inline-block", marginTop: "10px", padding: "10px 16px", backgroundColor: "#88acd4", color: "black", borderRadius: "6px", textDecoration: "none", fontWeight: "bold" }} >
                                APPLY
                            </a>

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
                    <section className="our-partnerships-container text-container-top">
                        <h2>Our Partnerships</h2>
                        <div className="card"> 
                            <div className = "our-partnerships-wrapper">
                                <div className="our-partnerships-grid">
                                {ourPartnershipsData.map((org, index) => (
                                    <div className="our-partnerships-item" key={index}>
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