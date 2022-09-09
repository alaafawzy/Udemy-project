import React from 'react'

function Coursecontent() {
  return (
    <section>
        <div class="container">
            <div class="row">
                <div class="col col-8 padleft">
                    <h2 class="course-content-title">Course content</h2>
                    <div class="course-info">
                    <span >15 section
                         • 
                        110 lectures
                         • 
                        21h 5m total length
                    </span>
                </div>
                    <div>
                        <div class="accordion" id="course-content">
                            <div class="accordion-item">
                              <h3 class="accordion-header " id="heading1">
                                <button class="  btn-header " type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                                    <span class="lecture-title"><i class="fa-solid fa-angle-down collapseicon"></i>Intro to Course and Python</span>
                                    <span class="lecture-time">2 lectures  • 7mins</span>
                                </button>
                              </h3>
                              <div id="collapse1" class="accordion-collapse collapse " aria-labelledby="heading1"> 
                                <div class="chapter-data">
                                    <ul>
                                        <li>
                                            <span><i class="fa-solid fa-circle-play collapseicon"></i><span>Installation Setup and Overview</span></span>
                                            <span class="section-time">00:59</span>
                                        </li>
                                        <li>
                                            <span><i class="fa-regular fa-file collapseicon"></i><span>Course FAQs</span></span>
                                            <span class="section-time">04:59</span>
                                        </li>
                                    </ul>
                                </div>
                              </div>
                            </div>
                            <div class="accordion-item">
                                <h3 class="accordion-header" id="heading2">
                                  <button class=" btn-header"type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                      <span class="lecture-title"><i class="fa-solid fa-angle-down collapseicon"></i>Setup</span>
                                      <span class="lecture-time">2 lectures  • 7mins</span>
                                  </button>
                                </h3>
                                <div id="collapse2" class="accordion-collapse collapse " aria-labelledby="heading2">
                                  <div class="chapter-data">
                                      <ul>
                                          <li>
                                              <span><i class="fa-solid fa-circle-play collapseicon"></i><span>Installation Setup and Overview</span></span>
                                              <span class="section-time">00:59</span>
                                          </li>
                                          <li>
                                              <span><i class="fa-regular fa-file collapseicon"></i><span>Course FAQs</span></span>
                                              <span class="section-time">04:59</span>
                                          </li>
                                      </ul>
                                  </div>
                                </div>
                              </div>
                              <div class="accordion-item">
                                <h3 class="accordion-header " id="heading3">
                                  <button class="  btn-header " type="button"  data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                      <span class="lecture-title"><i class="fa-solid fa-angle-down collapseicon"></i>Learning Numpy</span>
                                      <span class="lecture-time">2 lectures  • 7mins</span>
                                  </button>
                                </h3>
                                <div id="collapse3" class="accordion-collapse collapse " aria-labelledby="heading3">
                                  <div class="chapter-data">
                                      <ul>
                                          <li>
                                              <span><i class="fa-solid fa-circle-play collapseicon"></i><span>Installation Setup and Overview</span></span>
                                              <span class="section-time">00:59</span>
                                          </li>
                                          <li>
                                              <span><i class="fa-regular fa-file collapseicon"></i><span>Course FAQs</span></span>
                                              <span class="section-time">04:59</span>
                                          </li>
                                      </ul>
                                  </div>
                                </div>
                              </div>
                            
                          </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
  )
}

export default Coursecontent