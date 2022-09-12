import React from 'react'

function Coursecart(props) {
  return (
    <section>
        <div className="course-cart">
          <div className='container'>
          <div className="cart-img">
            
            <img src={props.course.image} alt={props.course.title} />
          </div>
          <div className="container cart-container">
            
            <div className="cart-price-data">
              <span className="cart-price">E£ {props.course.price}</span> <span className="discound-price">E£ {props.course.originalPrice}</span> 
            </div>

            <div className="discound-cart">
              <span className="cart-off">80% off</span>
              <span className="cart-last-price"><i className="fa-regular fa-clock"></i><b>1 day </b>left at this price!</span>
            </div>
            <div>
            <button className="add-to-cart">Add to cart</button>
            <button className="buy-now">Buy now</button>
          </div>
            <div className="money-back">
            <span>30-Day Money-Back Guarantee</span>
          </div>
            <div className="course-cart-data-include">
            <h3>This course includes:</h3>
            <ul>
              <li><i className="fa-brands fa-youtube"></i><span>{props.course.hoursCount} hours on-demand video</span></li>
              <li><i className="fa-regular fa-file"></i><span>{props.course.articlesCount} articles</span></li>
              <li><i className="fa-solid fa-file-arrow-down"></i><span>{props.course.downloadableResource} downloadable resources</span></li>
              <li><i className="fa-solid fa-infinity"></i><span>Full lifetime access</span></li>
              <li><i className="fa-solid fa-mobile-screen"></i><span>Access on mobile and TV</span></li>
              <li><i className="fa-solid fa-trophy"></i><span>Certificate of completion</span></li>
            </ul>
          </div>
          <div className="share-gift-coupon">
            <button><a href="">share</a></button>
            <button><a href="">Gift this course</a></button>
            <button><a href="">Apply coupon</a></button>
          </div>
          </div>
          
          <hr />
          <div className="container cart-container">
            <h4>Training 5 or more people?</h4>
            <p>Get your team access to 17,000+ top Udemy courses anytime, anywhere.</p>
            <button className="buy-now mb-4">Try Udemy Business</button>
          </div>
        </div>
        </div>
      </section>
  )
}

export default Coursecart