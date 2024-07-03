import PropTypes from 'prop-types';
import './Planet.css'; // Make sure to create a corresponding CSS file

function Planet({ name, size, numberOfMoons, image, onClick }) {
  // Add prop validation
  return (
      <div className="planet-container" onClick={onClick}>
      <div className="planet-image">
        <img src={image} alt={name} />
      </div>
      <div className="planet-info">
        <h3>{name}</h3>
        <p>Size: {size}</p>
        <p>Number of Moons: {numberOfMoons}</p>
      </div>
    </div>
  );
}

Planet.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  numberOfMoons: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Planet;