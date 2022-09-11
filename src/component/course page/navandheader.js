import React from 'react'

function Navandheader (props) {
  return (
    <>
        <navbar className="second-navbar">
        <h2>{props.course.title}</h2>
        <div className="rating-seller">
          <div className="best-seller"><span>Bestseller</span></div>
          <a href="#">
            <span className="stars-number"> {props.course.rating}</span>
            <i className="fa fa-star star-color" aria-hidden="true"></i>
            <span className="rating-number">({props.course.ratingCount})</span>
          </a>
          <div className="nav-student-numbers"><span>{props.course.enrollCount} students</span></div>
        </div>
      </navbar>
      <section>
        <div className="details-continer">
          <div className="container">
            <div className="row padleft">
              <div className="col col-8">
                <div className="details-menu">
                  <a href="#">Development </a>
                  <span>&nbsp;&gt;&nbsp;</span>
                  <a href="#">Programming Languages </a>
                  <span>&nbsp;&gt;&nbsp;</span>
                  <a href="#"> {props.course.category}</a>
                </div>

                <h1 className="details-header">
                {props.course.title}
                </h1>

                <div className="details-header2">
                {props.course.Introduction}
                </div>

                <div className="rating-seller">
                  <div className="best-seller"><span>Bestseller</span></div>
                  <a href="#">
                    <span className="stars-number"> {props.course.rating}</span>
                    <i className="fa fa-star star-color" aria-hidden="true"></i>
                    <span className="rating-number">({props.course.ratingCount})</span>
                  </a>
                  <div className="nav-student-numbers">
                    <span>{props.course.enrollCount} students</span>
                  </div>
                </div>

                <div className="details-author">
                  <span>Created by</span>
                  <a href="#"><span>{props.course.author}</span></a>
                </div>

                <div className="details-more">
                  <div className="last-up">
                    <i className="fa-duotone fa-bell-exclamation"></i>
                    <span className="last-updated">Last updated {props.course.lastUpdate}</span>

                    <i className="fa-solid fa-globe"></i>
                    <span>English</span>
                  </div>

                  <div>
                    <i className="fa-regular fa-closed-captioning"></i>
                    <span>English [Auto], Indonesian [Auto] ,</span>
                    
                    <button className="more-btn">
                      <span>5 more</span>
                    </button>
                    <p>
                      [Auto], Polish [Auto], Portuguese [Auto], Romanian [Auto],
                      Spanish [Auto]
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Navandheader