import React, { useState } from 'react'
function Coursecontent(props) {
  const [btnstate,setBtnstate]=useState(false);  
  let counter=0;
    let butt=""
    let classs=""
    let total="";
    function showmore(){
      let z=document.getElementsByClassName("showmore")
      if(btnstate==false){
        for(let i=0; i<z.length; i++) {
          z[i].style.display="block";}
      }
      else {
        for(let i=0; i<z.length; i++) {
          z[i].style.display="none";}
        
      }
      setBtnstate(!btnstate)
    }
    if(props.course.content.length>5){
      butt=(<button className=" more-content" id="header-more-btn" onClick={showmore}>
    <span>{btnstate? "Less sections":"More sections"}</span>
  </button>);
    }
    total=props.course.content.map((it) => {
      console.log(total)
      counter++;
      if(counter>5){classs="showmore"}
                             let collapse="collapse"+counter;
                             let collapse2="#"+collapse;
                            return (
                               <>
                             <div className={classs+'  accordion-item'}>
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
})
    

  return (
    <section id="coursecontent">
        
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
                        {total}    
                        {butt}
                          </div>
                    </div>
                
      </section>
  )
}

export default Coursecontent