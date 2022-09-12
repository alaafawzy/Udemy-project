import React from 'react'
import { useState } from 'react';
function Description(props) {
    const [btnstate,setBtnstate]=useState(false);  
  let counter=0;
    let butt=""
    let classs=""
    let total="";
    function showmore(){
      let z=document.getElementsByClassName("showmore2")
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
    if(props.course.content.length>3){
      butt=(<button className=" more-content" id="header-more-btn" onClick={showmore}>
    <span>{btnstate? "See Less":"See More"}</span>
  </button>);
    }
    total=props.course.content.map((it) => {
      console.log(total)
      counter++;
      if(counter>3){classs="showmore2"}
      return(
        <p className={classs}>{it}</p>
    )
});
let total2= (<div className='showmore2'>
    <h2 className="requirment-header">Who this course is for:</h2>
        <ul className="target-person">
            {props.course.whoFor.map((it)=>{
                return (
                    <li>{it}</li>
                )
            })}
        </ul>
</div>)
  return (
    <section>
        
                    <h2 className="requirment-header">Description</h2>
                    <div className="description-details">
                        {
                            total
                        }
                    </div>
                    {total2}
                    {butt}
                
      </section>
  )
}

export default Description