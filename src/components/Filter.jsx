import PropTypes from 'prop-types';
import { useState } from 'react';
import './Filter.css';

function Filter({onClick, onSort}) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };


  return (
    <div className='navBar'>
      <input
        type="text"
        placeholder="Enter planet name"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button onClick={() => onClick(searchTerm)}>Filter</button>
      <button onClick={onSort}>Sort</button>
    </div>
  );
}

Filter.propTypes = {
  onClick: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
};

export default Filter;