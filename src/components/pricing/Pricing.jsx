import React from "react";
import Back from "../common/back/Back";

import "./price.css";

import universitiesData from "./uni.json"; // Import the university data

const Pricing = () => {
  return (
    <>
      <Back title='Choose The Right Plan' />
      <section className='price paddng'>
        <h2>Universities and Degrees</h2>
        {Object.values(universitiesData).map((university, index) => (
          <div key={index}>
            <h3>{university.university_name}</h3>
            <ul>
              {Object.values(university.Faculties).map((faculty, index) => (
                <li key={index}>
                  <h4>{faculty.faculty_name}</h4>
                  <ul>
                    {faculty.degrees.map((degree, index) => (
                      <li key={index}>{degree}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  );
};

export default Pricing;
