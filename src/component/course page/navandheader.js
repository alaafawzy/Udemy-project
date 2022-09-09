import React from 'react'

function Navandheader() {
  return (
    <>
        <navbar class="second-navbar">
        <h2>Learning Python for Data Analysis and Visualization</h2>
        <div class="rating-seller">
          <div class="best-seller"><span>Bestseller</span></div>
          <a href="#">
            <span class="stars-number"> 4.4</span>
            <i class="fa fa-star star-color" aria-hidden="true"></i>
            <span class="rating-number">(18,113 ratings)</span>
          </a>
          <div class="nav-student-numbers"><span>191470 students</span></div>
        </div>
      </navbar>
      <section>
        <div class="details-continer">
          <div class="container">
            <div class="row padleft">
              <div class="col col-8">
                <div class="details-menu">
                  <a href="#">Development </a>
                  <span>&nbsp;&gt;&nbsp;</span>
                  <a href="#">Programming Languages </a>
                  <span>&nbsp;&gt;&nbsp;</span>
                  <a href="#"> Data Analysis</a>
                </div>

                <h1 class="details-header">
                  Learning Python for Data Analysis and Visualization
                </h1>

                <div class="details-header2">
                  Learn python and how to use it to analyze,visualize and
                  present data. Includes tons of sample code and hours of video!
                </div>

                <div class="rating-seller">
                  <div class="best-seller"><span>Bestseller</span></div>
                  <a href="#">
                    <span class="stars-number"> 4.4</span>
                    <i class="fa fa-star star-color" aria-hidden="true"></i>
                    <span class="rating-number">(18,113 ratings)</span>
                  </a>
                  <div class="nav-student-numbers">
                    <span>191470 students</span>
                  </div>
                </div>

                <div class="details-author">
                  <span>Created by</span>
                  <a href="#"><span>Jose Portilla</span></a>
                </div>

                <div class="details-more">
                  <div class="last-up">
                    <i class="fa-duotone fa-bell-exclamation"></i>
                    <span class="last-updated">Last updated 9/2019</span>

                    <i class="fa-solid fa-globe"></i>
                    <span>English</span>
                  </div>

                  <div>
                    <i class="fa-regular fa-closed-captioning"></i>
                    <span>English [Auto], Indonesian [Auto] ,</span>
                    
                    <button class="more-btn">
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