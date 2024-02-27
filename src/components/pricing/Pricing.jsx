import React from 'react';
import { Link } from 'react-router-dom';
import Back from '../common/back/Back';
import universitiesData from './uni.json';
import './price.css';
const Pricing = () => {
  return (
    <>
      <Back title="Choose The Right Path" />
      <section className="price padding">
        <h2>Universities</h2>
        <ul className="university-list">
          {Object.values(universitiesData).map((university, index) => (
            <li key={index}>
              <Link to={university.link} className="university-item">
                <img src={process.env.PUBLIC_URL + university.image} alt={university.university_name} className="university-image" />
                <span className="university-name">{university.university_name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
export default Pricing;
