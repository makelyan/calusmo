const images = require.context('../images/headshots', false, /\.(png|jpe?g|svg|jpg)$/);

export default function FlipCard({ name, position, bio, instagramLink, linkedinLink }) {
  const headshot = images.keys().find((image) => image.includes(name));
  const headshotSrc = headshot ? images(headshot) : '';

  return (
    <>
      <div className="flip-card-container">
        <div className="card">
          <div className="front">
            <img src={headshotSrc} loading="lazy" alt={`Headshot of ${name}`} />
            <div className="front-text-container">
              <h2 className="member-name">{name}</h2>
              <h3 className="member-position">{position}</h3>
            </div>
          </div>
          <div className="back">
            <div className="back-text-wrapper">
              <p>{bio}</p>
            </div>
            <div className="icons-box">
              {/*
                <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                  <img src={require("../images/instaIcon.png")} alt="Instagram" />
                </a>
                <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                  <img src={require("../images/linkedinIcon.png")} alt="LinkedIn" />
                </a>
              */}
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-front-text-container">
        <h2 className="member-name">{name}</h2>
        <h3 className="member-position">{position}</h3>
      </div>
    </>
  );
}
