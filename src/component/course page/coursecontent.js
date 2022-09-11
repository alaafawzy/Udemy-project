import React from 'react'

function Coursecontent(props) {
    let counter=0;
    
  return (
    <section>
        <div className="container">
            <div className="row">
                <div className="col col-8 padleft">
                    <h2 className="course-content-title">Course content</h2>
                    <div className="course-info">
                    <span >{props.course.sectionsCount} section
                         • 
                         {props.course.lecturesCount} lectures
                         • 
                         {props.course.totalLength} total length
                    </span>
                    </div>
                    <div>
                        <div className="accordion" id="course-content">
                            
                        {props.course.content.map((it) => {
                             counter++;
                             let collapse="collapse"+counter;
                             let collapse2="#"+collapse;
                                 return (
                                 <>
                             <div className="accordion-item">
                              <h3 className="accordion-header " id="heading1">
                                <button className="  btn-header " type="button" data-bs-toggle="collapse" data-bs-target={collapse2} aria-expanded="false" aria-controls={collapse}>
                                    <span className="lecture-title"><i className="fa-solid fa-angle-down collapseicon"></i>{it[0]}</span>
                                    <span className="lecture-time">2 lectures  • 7mins</span>
                                </button>
                              </h3>
                              <div id={collapse} className="accordion-collapse collapse " aria-labelledby="heading1"> 
                                <div className="chapter-data">
                                    <ul>
                              {it[1].map((it2)=>{
                                return (
                                    <>
                                        <li>
                                            <span><i className="fa-solid fa-circle-play collapseicon"></i><span>{it2}</span></span>
                                            <span className="section-time">00:59</span>
                                        </li>
                                    </>
                                );
                              })
                            }
                              
                                        
                                    </ul>
                                </div>
                              </div>
                            </div>
        </>
)
})}
                          </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
  )
}

export default Coursecontent