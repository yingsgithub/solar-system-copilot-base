import PropTypes from 'prop-types';
import './PlanetCard.css';

function PlanetCard({ selectedPlanet }) {
    const { imageUrl, planetFacts } = selectedPlanet;

  return (
    <div className="planet-card-container">
      <div className="planet-card-image">
        <img src={imageUrl} alt="Planet" />
      </div>
      <div className="planet-card-moons">
        {planetFacts.moonsNames.map((moon, index) => (
          <p key={index}>{moon}</p>
        ))}
      </div>
      <div className="planet-card-info">
        <p>{planetFacts.furtherInformation}</p>
      </div>
    </div>
  );
}

PlanetCard.propTypes = {
  selectedPlanet: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    planetFacts: PropTypes.shape({
      moonsNames: PropTypes.arrayOf(PropTypes.string).isRequired,
      furtherInformation: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default PlanetCard;