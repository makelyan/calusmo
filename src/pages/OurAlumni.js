import Header from "../components/Header";
import Footer from "../components/Footer";
import FlipCard from "../components/FlipCard";
import "../styles/ourteam.css";
import ourTeamData from '../data/ourteam.json';
import { Helmet } from 'react-helmet-async';

export default function OurAlumni() {
  // Filter only alumni members
  const alumniMembers = ourTeamData.filter(member => member.committee === "Alumni");

  return (
    <>
      <Helmet>
        <title>Alumni</title>
        <link rel="canonical" href="https://calusmo.org/our-alumni" />
      </Helmet>

      {/* Page header */}
      <Header />
      <div className="header-container">
        <h1>Alumni</h1>
        <p>
          Our alumni have worked tirelessly to develop resources and create partnerships to support the local communities at Berkeley.
        </p>
      </div>

      {/* Alumni flip cards */}
      <div className="flip-cards-grid-container">
        <div className="flip-cards-grid">
          {alumniMembers.map((member, index) => (
            <div
              className="team-member-container"
              key={index}
              style={{ visibility: member.name === "placeholder" ? "hidden" : "visible" }}
            >
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
      </div>

      <Footer />
    </>
  );
}