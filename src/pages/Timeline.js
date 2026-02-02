import Header from "../components/Header";
import Footer from "../components/Footer";
import FlipCard from "../components/FlipCard";
import "../styles/ourteam.css";
import ourTeamData from '../data/ourteam.json';
import { Helmet } from 'react-helmet-async';

export default function Timeline() {
  const committees = ["Internal", "External", "Advocacy", "Finance", "Publicity", "Alumni"];
  return (
    <>
    <Helmet>
        <title>Our Team</title>
        <link rel="canonical" href="https://calusmo.org/our-team" />
    </Helmet>
    <Header />
      <div className="header-container">
        <h1>Meet The Team</h1>
        <p>
          Our team is composed of UC Berkeley undergraduates of all levels who are passionate about social good and supporting the local communities at Berkeley.
        </p>
      </div>

        {committees.map((committee, index) => (
        <div className="flip-cards-grid-container" key={index}>
          {committee !== "Internal" && committee !== "Alumni" && (
            <div className="ourteam-header">{committee} Committee</div>
          )}
          {committee === "Alumni" && (
            <div className="ourteam-header">{committee}</div>
          )}
      
          <div className="flip-cards-grid">
            {ourTeamData
              .filter(member => member.committee === committee)
              .map((member, memberIndex) => (
                <div
                  className="team-member-container"
                  key={memberIndex}
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
      
          <hr className="ourteam-hr" />
        </div>
      ))}
      <Footer />
    </>
  );
}