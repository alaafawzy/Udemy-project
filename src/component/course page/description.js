import React from 'react'

function Description(props) {
  return (
    <section>
        <div className="container">
            <div className="row">
                <div className="col col-8 padleft">
                    <h2 className="requirment-header">Description</h2>
                    <div className="description-details">
                        {
                            props.course.description.map((it)=>{
                                return(
                                    <p>{it}</p>
                                )
                            })
                        }
                    </div>
                    <div>
                    <h2 className="requirment-header">Who this course is for:</h2>
                        <ul className="target-person">
                            {props.course.whoFor.map((it)=>{
                                return (
                                    <li>{it}</li>
                                )
                            })}
                        </ul>
                </div>
                </div>
            </div>
        </div>
      </section>
  )
}

export default Description