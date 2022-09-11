import React from 'react'

function Instructor(props) {
  return (
    <section>
        <div className="container">
            <div className="row">
              <div className="col col-8">
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
          
                        <span>{it.description}
                        </span>
                        
                        <button>
                          <span>
                            <span>Show more</span>
                            <span>Show less</span>
                          </span>
                        </button>
          
                      </div>
          
                    </div>
                    
                    );
                  })
                  }




                </div>
              </div>
            </div>
          </div>
      </section>
  )
}

export default Instructor