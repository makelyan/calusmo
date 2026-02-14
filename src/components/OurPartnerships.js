const logos = {
  "All Souls Episcopal Parish": "/images/partnerships/All Souls Episcopal Parish.png",
  "ASUC Legal Clinic": "/images/partnerships/ASUC Legal Clinic.png",
  "Berkeley NEED": "/images/partnerships/Berkeley NEED.png",
  "East Bay SPCA": "/images/partnerships/East Bay SPCA.png",
  "Food Not Bombs": "/images/partnerships/Food Not Bombs.png",
  "Homeless Action Center": "/images/partnerships/Homeless Action Center.png",
  "Housing and Economic Rights Advocates": "/images/partnerships/Housing and Economic Rights Advocates.png",
  "National Coalition Against Prescription Drug Abuse": "/images/partnerships/National Coalition Against Prescription Drug Abuse.png",
  "Students vs. Pandemics": "/images/partnerships/Students vs. Pandemics.png",
  "Where Do We Go?": "/images/partnerships/Where Do We Go.png",
  "ASUC Community Projects": "/images/partnerships/ASUC Community Projects.png"
};

export default function OurPartnerships({ name, link }) {
  const logoSrc = logos[name];

  return (
    <>
      <div>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={logoSrc} loading="lazy" alt={`Logo for ${name}`} />
        </a>
      </div>
    </>
  );
}
