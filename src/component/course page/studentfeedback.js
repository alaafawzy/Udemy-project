import React from 'react'

function Studentfeedback(props) {
  return (
    <section>
        <div className="container">
          <div className="row">
            <div className="col col-8">
              <div>
      
                <h2 classNameName='student-header'>Student feedback</h2>
      
                <div className="feadback-flow ">
      
                  <div className="feedback-summary">
                    <span className="feadback-img">{props.course.rating}</span>
                    <div className="feedback-star">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star-half-full checked"></span>
                      <span className="fas fa-star-half-alt checked"></span>
                    </div>
                    <p>Course Rating</p>
                  </div>
      
      
                  <div className="feadback-rating">
                    {props.course.studentFeedback.map((it)=>{
                      return(
                        <progress value={it} max="100" > {it} </progress>
                      )
                    })}
                  </div>
      
                  <div className="feadback-rating-flow2">
                    {props.course.studentFeedback.map((it)=>{
                        return(
                          <div>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star-half-full checked"></span>
                      <span className="fas fa-star-half-alt checked"></span>
                      <a href="#">{it}</a>
                    </div>
                        );
                    })}
      
      
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Studentfeedback