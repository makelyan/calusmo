import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/photogallery.css"
import { Helmet } from 'react-helmet-async';
// import { Link } from "react-router-dom";

export default function PhotoGallery() {

  return (
    <>
    <Helmet>
        <title>Photo Gallery</title>
        <link rel="canonical" href="https://calusmo.org/join-us" />
    </Helmet>
    <Header />
        <div className="header-container">
            <h1>Photo Gallery</h1>
            <p>
                
            </p>
        </div>
        <div>

            <h2 className="gallery-header">
                Outreach
            </h2>
            <div className="h-gallery">
                <img src="/images/outreach/outreach-3.jpg" loading="lazy" alt="Outreach 2 Duplicate" />
                <img src="/images/outreach/outreach-1.jpg" loading="lazy" alt="Outreach 1" />
                
            </div>

            <hr className="gallery-hr"></hr>

            <h2 className="gallery-header">
                USMO-Giving
            </h2>
            {/* Content */}

            <hr className="gallery-hr"></hr>

            <h2 className="gallery-header">
                First Aid Kit Assembly
            </h2>
            {/* Content */}

            <hr className="gallery-hr"></hr>

            <h2 className="gallery-header">
                General Meetings
            </h2>
            <div className="h-gallery">
                <img src="/images/outreach/blankets.jpg" loading="lazy" alt="Blankets" />
                <img src="/images/outreach/outreach-2.jpg" loading="lazy" alt="Outreach 2" />
            </div>

            {/* <hr className="gallery-hr"></hr> */}
            {/* Group professional pic */}

        </div>

      <Footer />
    </>
  );
}