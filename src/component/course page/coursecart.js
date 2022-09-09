import React from 'react'

function Coursecart() {
  return (
    <section>
        <div class="course-cart">
          <div class="cart-img">
            
            <img src="https://img-c.udemycdn.com/course/240x135/396876_cc92_7.jpg" alt="" />
          </div>
          <div class="container cart-container">
            
            <div class="cart-price-data">
              <span class="cart-price">E£319.99</span> <span class="discound-price">E£1,599.99</span> 
            </div>

            <div class="discound-cart">
              <span class="cart-off">80% off</span>
              <span class="cart-last-price"><i class="fa-regular fa-clock"></i><b>1 day </b>left at this price!</span>
            </div>
            <div>
            <button class="add-to-cart">Add to cart</button>
            <button class="buy-now">Buy now</button>
          </div>
            <div class="money-back">
            <span>30-Day Money-Back Guarantee</span>
          </div>
            <div class="course-cart-data-include">
            <h3>This course includes:</h3>
            <ul>
              <li><i class="fa-brands fa-youtube"></i><span>21 hours on-demand video</span></li>
              <li><i class="fa-regular fa-file"></i><span>articles</span></li>
              <li><i class="fa-solid fa-file-arrow-down"></i><span>4 downloadable resources</span></li>
              <li><i class="fa-solid fa-infinity"></i><span>Full lifetime access</span></li>
              <li><i class="fa-solid fa-mobile-screen"></i><span>Access on mobile and TV</span></li>
              <li><i class="fa-solid fa-trophy"></i><span>Certificate of completion</span></li>
            </ul>
          </div>
          <div class="share-gift-coupon">
            <button><a href="">share</a></button>
            <button><a href="">Gift this course</a></button>
            <button><a href="">Apply coupon</a></button>
          </div>
          </div>
          
          <hr />
          <div class="container cart-container">
            <h4>Training 5 or more people?</h4>
            <p>Get your team access to 17,000+ top Udemy courses anytime, anywhere.</p>
            <button class="buy-now">Try Udemy Business</button>
          </div>
        </div>
      </section>
  )
}

export default Coursecart