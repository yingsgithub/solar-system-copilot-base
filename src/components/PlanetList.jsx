import PropTypes from 'prop-types';
import Planet from './Planet';
import Filter from './Filter';
import './PlanetList.css';

function PlanetList({planets, onClick, onSort}) {
  return (
    <div className='planetListContainer'>
    <div className="filter">
        <Filter onClick={onClick} onSort={onSort}/>
    </div>
    <div className='pl'>
      {planets.map((planet) => (
        <Planet
          key={planet.name}
          name={planet.name}
          size={planet.size}
          numberOfMoons={planet.numberOfMoons}
          image={`assets/${planet.image}`}
          onClick={() => onClick(planet.name)}
        />
      ))}
    </div>
    </div>
  );
}

PlanetList.propTypes = {
  planets: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired
};

export default PlanetList;