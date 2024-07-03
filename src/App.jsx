import { useState } from 'react';
import PlanetList from "./components/PlanetList";
import PlanetCard from "./components/PlanetCard";
import './App.css';

function App() {
  const planetData = [
    {
      id: 1,
      name: "Mercury",
      size: "4,879 km",
      numberOfMoons: 0,
      image: "mercury.jpg",
      planetFacts: {
        moonsNames: [],
        furtherInformation: "Mercury is the smallest planet in our solar system and nearest to the Sun."
      }
    },
    {
      id: 2,
      name: "Venus",
      size: "12,104 km",
      numberOfMoons: 0,
      image: "venus.jpg",
      planetFacts: {
        moonsNames: [],
        furtherInformation: "Venus is the hottest planet in our solar system with a surface temperature of over 400 degrees Celsius."
      }
    },
    {
      id: 3,
      name: "Earth",
      size: "12,742 km",
      numberOfMoons: 1,
      image: "earth.jpg",
      planetFacts: {
        moonsNames: ["Moon"],
        furtherInformation: "Earth is the only planet in our solar system known to harbor life."
      }
    },
    {
      id: 4,
      name: "Mars",
      size: "6,779 km",
      numberOfMoons: 2,
      image: "mars.jpg",
      planetFacts: {
        moonsNames: ["Phobos", "Deimos"],
        furtherInformation: "Mars is home to the tallest mountain in the solar system, Olympus Mons."
      }
    },
    {
      id: 5,
      name: "Jupiter",
      size: "139,820 km",
      numberOfMoons: 79,
      image: "jupiter.jpg",
      planetFacts: {
        moonsNames: ["Io", "Europa", "Ganymede", "Callisto"], // Listing only the four largest moons
        furtherInformation: "Jupiter is the largest planet in our solar system and has the most moons."
      }
    },
    {
      id: 6,
      name: "Saturn",
      size: "116,460 km",
      numberOfMoons: 82,
      image: "saturn.jpg",
      planetFacts: {
        moonsNames: ["Titan", "Rhea", "Iapetus", "Dione"], // Listing only the four largest moons
        furtherInformation: "Saturn is well known for its extensive ring system made up of ice particles, rocks, and dust."
      }
    },
    {
      id: 7,
      name: "Uranus",
      size: "50,724 km",
      numberOfMoons: 27,
      image: "uranus.jpg",
      planetFacts: {
        moonsNames: ["Titania", "Oberon", "Umbriel", "Ariel"], // Listing only the four largest moons
        furtherInformation: "Uranus rotates on its side, making its seasons unlike any other planet's."
      }
    },
    {
      id: 8,
      name: "Neptune",
      size: "49,244 km",
      numberOfMoons: 14,
      image: "neptune.jpg",
      planetFacts: {
        moonsNames: ["Triton", "Proteus", "Nereid", "Larissa"], // Listing only the four largest moons
        furtherInformation: "Neptune is the most distant planet in our solar system."
      }
    }
  ];
  const [planets, setPlanets] = useState(planetData);
  const [selectedPlanet, setSelectedPlanet] = useState(planets[0]);
  const handlePlanetClick = (planetName) => {
    const planet = planets.find((planet) => planet.name === planetName);
    setSelectedPlanet(planet);
  };

  const sortPlanets = () => {
    const sorted = [...planetData].sort((a, b) => a.name.localeCompare(b.name));
    setPlanets(sorted);
  };
  return (
    <main>
      <h1>Solar System</h1>
      <div className="app-container">
        <div className="PlanetList">
          <PlanetList planets={planets} onClick={handlePlanetClick} onSort={sortPlanets}/>
        </div>
        <div className="PlanetCard">
          <PlanetCard selectedPlanet = {selectedPlanet} />
        </div>
      </div>
    </main>
  );
}

export default App;
