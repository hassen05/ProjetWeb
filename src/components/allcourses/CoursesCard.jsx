import React from "react"
import "./courses.css"
import { coursesCard } from "../../dummydata"

const CoursesCard = () => {
  return (
    <>
      <section className='coursesCard'>
        <div className='container grid2'>
          {coursesCard.map((val) => (
            <div className='items'>
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                </div>
                <div className='text'>
                  <h1>{val.coursesName}</h1>
                  <div className='rate'>
                    
                    
                  </div>
                  <div className='details'>
                    {val.courTeacher.map((details) => (
                      <>
                        <div className='box'>
                          <div className='dimg'>
                            
                          </div>
                          <div className='para'>
                            
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              
              <button className='outline-btn'>ENROLL NOW !</button>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default CoursesCard
