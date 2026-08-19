import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/joinus.css";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import OutreachImage1 from "../images/outreach/outreach-1.jpg";
import Usmogiving1 from "../images/usmogiving/usmogiving-1.jpg";
import Usmogiving2 from "../images/usmogiving/usmogiving-2.jpg";
import Blankets from "../images/outreach/blankets.jpg";
import OutreachImage3 from "../images/outreach/outreach-3.jpg";

import configData from "../data/config.json";

export default function JoinUs() {

  const infosessions = Object.values(configData.infosessions);

  return (
    <>
      <Helmet>
        <title>Join Us</title>
        <link rel="canonical" href="https://calusmo.org/join-us" />
      </Helmet>

      <Header />

      <div className="header-container">
        <h1>Join Us</h1>
        <p>
          All undergraduate students regardless of year and prior experience are welcome to join USMO.
        </p>
      </div>

      <div>

        {/* APPLICATION */}
        <h2 className="joinus-header">Application</h2>

        <p className="joinus-text">
        <ul>
            {configData.recruitment && (
            <li>
                <b>
                <a
                    href={configData.application_link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {configData.semester} Application (due {configData.application_due})
                    <i className="fas fa-arrow-up-right-from-square fa-sm" style={{ marginLeft: 4 }} />
                </a>
                </b>
            </li>
            )}

            {configData.recruitment && (
            <li>
                <a
                href={configData.interest_form_link}
                target="_blank"
                rel="noopener noreferrer"
                >
                {configData.semester} Interest Form
                <i className="fas fa-arrow-up-right-from-square fa-sm" style={{ marginLeft: 4 }} />
                </a>
            </li>
            )}

            {!configData.recruitment && (
            <li>
                We are no longer recruiting new members for {configData.semester}. However, feel free to{" "}
                <Link to="/contact-us">contact us</Link> with any questions!
            </li>
            )}
        </ul>
        </p>

        {/* INFOSESSIONS */}
        <h2 className="joinus-header">Infosessions</h2>

        <p className="joinus-text">
        <ul>
            {/* ONLY show dates if recruiting */}
            {configData.recruitment &&
            Object.values(configData.infosessions).map((session, index) => (
                <li key={index}>{session}</li>
            ))
            }

            {/* ALWAYS show slides */}
            <li>
            <a href="/downloads/infosession_fa25_usmo.pdf">
                Infosession Slides from Fall 2025
                <i className="fas fa-download fa-sm" style={{ marginLeft: 4 }} />
            </a>
            </li>
        </ul>
        </p>

        <hr className="joinus-hr" />

        {/* COMMITTEES */}
        <h2 className="joinus-header">Committees</h2>
        <p className="joinus-text">
          As a member of USMO, you'll be a part of a committee. Each committee pursues several different projects each semester, which can be anything from creating resource brochures to securing a new partnership! As a committee member, you can either help complete projects (general members) or lead projects of your own (interns). What each committee does is detailed below:
          <ul style={{ marginTop: "12px" }}>
            <li>
              <b>External Committee</b> establishes partnerships with other organizations, clubs, grocery stores, local businesses, etc. to provide essential resources, including but not limited to food, water, clothing, and medical supplies. This committee works to connect USMO with the broader Berkeley and Bay Area community.
            </li>
            <li>
              <b>Advocacy Committee</b> leads efforts/campaigns in social media, public education, and community organizing to tackle misinformation, uplift unhoused voices, and push for policy change. Interns help coordinate protests, legal support, voter education initiatives, and more.
            </li>
            <li>
              <b>Finance Committee</b> is responsible for securing funding and general resources for USMO through fundraising events, partnerships, grants, and ASUC support. This committee ensures we remain financially sustainable and can expand our impact as an organization.
            </li>
          </ul>
        </p>

        <hr className="joinus-hr" />

        {/* RESPONSIBILITIES */}
        <h2 className="joinus-header">Responsibilities</h2>
        <p className="joinus-text">
          We have several different positions in USMO with a range of committment levels and responsibilities:
          <ul style={{ marginTop: "12px" }}>
            <li>
              <b>General Members</b> are expected to join 1 general meeting and 1 outreach per month. General members have the option to join a committee, but it is not required.
            </li>
            <li>
              <b>Committee Interns</b> are expected to join 2 general meetings and 2 outreaches per month. As an intern, you'll be part of a committee, where you will lead 1 or more projects of your own. Interns also manage a small group of general members to help complete projects.
            </li>
            <li>
              <b>Committee Chairs</b> have different responsibilities depending on the committee, but in general they work with the committee head(s) to accomplish committee-specific goals every semester and manage the completion of projects. To become a committee chair, members must be in USMO and maintain required attendance for 1 or more semesters.
            </li>
            <li>
              <b>Committee Heads/VPs</b> lead up their committee. They decide semesterly timelines, work with the committee chair(s), and coordinate with the president to accomplish committee-specific goals.
            </li>
          </ul>
        </p>

        <hr className="joinus-hr" />

        {/* OUTREACH */}
        <h2 className="joinus-header">Outreach</h2>

        <p className="joinus-text">
          During outreach, we go to various encampments around Berkeley and Oakland, and pass out food, medical supplies, hygiene materials, and more.
          <br />

          <img src={OutreachImage3} alt="Outreach" />
          <img src={OutreachImage1} alt="Outreach" />
          <img src={Usmogiving1} alt="USMO-giving" />
          <img src={Usmogiving2} alt="USMO-giving" />
          <img src={Blankets} alt="Blanket Sewing" />
        </p>

      </div>

      <Footer />
    </>
  );
}