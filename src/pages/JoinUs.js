import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/joinus.css"
import { Helmet } from 'react-helmet-async';
import OutreachImage from '../images/OutreachImage.jpeg';

export default function JoinUs() {

  return (
    <>
    <Helmet>
        <title>Join Us!</title>
        <link rel="canonical" href="https://calusmo.org/join-us" />
    </Helmet>
    <Header />
      <div className="header-container">
        <h1>Join Us!</h1>
        <p>
            All undergraduate students regardless of year and prior experience are welcome to join USMO.
        </p>
      </div>
      <div>
            <h2 className="joinus-header">
                Application
            </h2>
                <p className="joinus-text">
                <span>
                    We are now recruiting new members for Fall 2025!
                    Fill out our <a href="https://tinyurl.com/usmofall25recruitment" target="_blank" rel="noreferrer">interest form</a> to join our mailing list, 
                    or <b><a href="https://forms.gle/9KAddPc3bghkJeyR9" target="_blank" rel="noreferrer">Apply Here!</a></b> 
                    {/* due date */}
                </span>
                </p>
        
            <h2 className="joinus-header">
                Infosessions 
            </h2>
                <p className="joinus-text">
                <ul>
                    <li>
                        Thursday September 4, 2025 from 8-9 PM @ Wheeler 24
                    </li>
                    <li>
                        Wednesday September 10, 2025 from 8-9 PM @ Wheeler 24
                    </li>
                    <li>
                        <a href="/downloads/infosession_fa25_usmo.pdf">
                            Infosession Slides
                            <i className="fas fa-download fa-sm" style={{marginLeft: 4}}></i>
                        </a>
                    </li>
                </ul>
                </p>
        <hr className="joinus-hr" />
            <h2 className="joinus-header">
                Committees
            </h2>
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
            <h2 className="joinus-header">
                Responsibilities
            </h2>
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
            <h2 className="joinus-header">
                Outreach
            </h2>
            <p className="joinus-text">
                During outreach, we go to various encampments around Berkeley and Oakland, and pass out food, medical supplies, hygiene materials, and more.
                <br></br>
                <img src={OutreachImage} alt="Outreach" className="joinus-text" style={{ display: "block", margin: "12 auto" }} />
            </p>


      </div>


      

      <Footer />
    </>
  );
}