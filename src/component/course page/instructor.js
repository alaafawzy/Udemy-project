import React, { useState } from 'react'

function Instructor(props) {
  const [showMore,setShowMore]=useState(false);
  return (
    <section id="instructor">
        
                <div className="instractor">
        
                  <h2>Instructor</h2>
                  {props.course.visible_instructors.map((it)=>{
                    return (
                      <div>
        
                      <a href="#" className="instractor-name">{it.title}</a>
          
                      <div className="instractor-name-info">{it.job_title}</div>
          
                      <div className="instractor-ul">
          
                        <a href=""><img className="instractor-img" src={it.image_100x100} alt={it.title} /></a>
          
                        <ul>
                          <li>
                            <i className="fa-solid fa-star"></i>
                            <div>{it.Instructor_Rating} Instructor Rating</div>
                          </li>
                          <li>
                            <i className="fa-solid fa-award"></i>
                            <div>{it.Reviews} Reviews</div>
                          </li>
                          <li>
                            <i className="fa-solid fa-user-group"></i>
                            <div>{it.Students} Students</div>
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-play"></i>
                            <div>{it.Courses} Courses</div>
                          </li>
                        </ul>
          
                      </div>
          
                      <div className="instractor-p">
                        {showMore?it.description:`${it.description.substring(0,500)}`}
                        
                        <button className='more-content' onClick={()=>setShowMore(!showMore)}>
                          <span>
                            {showMore? "show less":"show more"}
                          </span>
                        </button>
          
                      </div>
          
                    </div>
                    
                    );
                  })
                  }




                </div>
              
      </section>
  )
}

export default Instructor