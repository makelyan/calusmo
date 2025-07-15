import allSoulsImage from '../images/partnerships/all-souls-episcopal-parish.png';
import asucLegalClinicImage from '../images/partnerships/asuc-legal-clinic.png';
import berkeleyNeedImage from '../images/partnerships/berkeley-need.png';
import eastBaySpcaImage from '../images/partnerships/east-bay-spca.png';
import foodNotBombsImage from '../images/partnerships/food-not-bombs.png';
import homelessActionCenterImage from '../images/partnerships/homeless-action-center.png';
import housingAndEconomicRightsAdvocatesImage from '../images/partnerships/hera.png';
import ncapdaImage from '../images/partnerships/ncapda.png';
import studentsVsPandemicsImage from '../images/partnerships/students-vs-pandemics.png';
import whereDoWeGoImage from '../images/partnerships/where-do-we-go.png';
import asucImage from '../images/partnerships/asuc.png';

const logos = {
  "All Souls Episcopal Parish": allSoulsImage,
  "ASUC Legal Clinic": asucLegalClinicImage,
  "Berkeley NEED": berkeleyNeedImage,
  "East Bay SPCA": eastBaySpcaImage,
  "Food Not Bombs": foodNotBombsImage,
  "Homeless Action Center": homelessActionCenterImage,
  "Housing and Economic Rights Advocates": housingAndEconomicRightsAdvocatesImage,
  "National Coalition Against Prescription Drug Abuse": ncapdaImage,
  "Students vs. Pandemics": studentsVsPandemicsImage,
  "Where Do We Go?": whereDoWeGoImage,
  "ASUC Community Projects": asucImage
};

export default function OurPartnerships({ name, link }) {
  const logoSrc = logos[name];

  return (
    <>
      <div>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={logoSrc} alt={`Logo for ${name}`} />
        </a>
      </div>
    </>
  );
}
