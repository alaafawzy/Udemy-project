import React from 'react'

function Requirements(props) {
  return (
    <section>
        
                <h2 className="requirment-header padleft">Requirements</h2>
                <div className="requirment-list">
                <ul>
                  {
                    props.course.requirements.map((it)=>{
                      return(
                        <li>{it}</li>
                      );
                      
                    })
                  }
                </ul>
              </div>
              
      </section>
  )
}

export default Requirements