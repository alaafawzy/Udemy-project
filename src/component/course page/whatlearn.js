import React from 'react'

function Whatlearn(props) {

  return (
    <div className="what-learn ">
        
            <h2 className="learn-list-header test">What you'll learn</h2>
            <ul>
              {props.course.outcomes.map((it) => {
                return (
                  <>
                    <li className="checki">
                      <i className="fa-solid fa-check"></i>
                    </li>
                    <li className="spancheck">
                      <span className="">{it}</span>
                    </li>
                </>
    )
  })}
            </ul>
            
          </div>
        
  )
}

export default Whatlearn