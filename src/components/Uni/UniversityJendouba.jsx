import React, { useState } from 'react';
import Back from '../common/back/Back';
import universitiesData from '../pricing/uni.json'; // Adjust the import path
import './UniversityTunis.css'; // Import the CSS file for styling

const UniversityJendouba = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchBy, setSearchBy] = useState('faculty'); // Default to search by faculty
  const [showDegrees, setShowDegrees] = useState({});

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchByChange = (e) => {
    setSearchBy(e.target.value);
  };

  const toggleDegrees = (facultyName) => {
    setShowDegrees((prevState) => ({
      ...prevState,
      [facultyName]: !prevState[facultyName],
    }));
  };

  // Filter faculties based on search query
  const filteredFaculties = Object.entries(universitiesData[9].Faculties).filter(
    ([facultyName, faculty]) => {
      if (searchBy === 'degree') {
        return faculty.degrees.some((degree) =>
          degree.toLowerCase().includes(searchQuery.toLowerCase())
        );
      } else {
        return facultyName.toLowerCase().includes(searchQuery.toLowerCase());
      }
    }
  );

  return (
    <>
      <Back title="Choose The Right Plan" />
      <section className="university-details">
        <h2>{universitiesData[9].university_name}</h2>
        <div className="search-controls">
          <input
            type="text"
            placeholder={`Search by ${searchBy === 'degree' ? 'degree' : 'faculty name'}`}
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <div className="search-by">
            <label>
              Search by:{' '}
              <select value={searchBy} onChange={handleSearchByChange}>
                <option value="faculty">Faculty Name</option>
                <option value="degree">Degree</option>
              </select>
            </label>
          </div>
        </div>
        <ul className="faculty-list">
          {filteredFaculties.map(([facultyName, faculty], index) => (
            <li key={index} className="faculty-item">
              <div className="faculty-header" onClick={() => toggleDegrees(facultyName)}>
                <h3>{facultyName}</h3>
                <button className="toggle-button">
                  {showDegrees[facultyName] ? 'Hide Degrees' : 'Show Degrees'}
                </button>
              </div>
              {showDegrees[facultyName] && (
                <ul className="degrees-list">
                  {faculty.degrees.map((degree, idx) => (
                    <li key={idx} className="degree-item">{degree}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default UniversityJendouba;
