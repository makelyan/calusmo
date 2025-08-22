import Header from "../components/Header";
import Footer from "../components/Footer";
import FlipCard from "../components/FlipCard";
import "../styles/ourteam.css";
import ourTeamData from '../data/ourteam.json';
import { Helmet } from 'react-helmet-async';

export default function OurTeam() {

  return (
    <>
    <Helmet>
        <title>Our Team</title>
        <link rel="canonical" href="https://calusmo.org/our-team" />
    </Helmet>
    <Header />
      <div className="header-container">
        <h1>MEET THE TEAM</h1>
        <p>
          Our team is composed of UC Berkeley undergraduates of all levels who are passionate about social good and supporting the local communities at Berkeley.
        </p>
      </div>

      <div className="flip-cards-grid">
        {ourTeamData.map((member, index) => (
          <div className="team-member-container" key={index}>            
            <FlipCard
              name={member.name}
              position={member.position}
              bio={member.bio}
              instagramLink={member.instagramLink}
              linkedinLink={member.linkedinLink}
            />
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}