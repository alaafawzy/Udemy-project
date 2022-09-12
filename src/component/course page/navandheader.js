import React from 'react'

function Navandheader (props) {
  let butt=""
  let langs=""
  function seemore(){
    let z=document.getElementById("header-more-data")
    z.style.display="block";
    z=document.getElementById("header-more-btn")
    z.style.display="none";
  }
  if(props.course.caption_languages.length>2){
    butt=(<button className="more-btn" id="header-more-btn" onClick={seemore}>
    <span>see more</span>
  </button>);
    langs=<p className='seemore' id="header-more-data">{props.course.caption_languages}</p>;
  } 
  
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
            <div className="row ">
              <div className="col col-lg-8 col-12">
                <div className="details-menu">
                  <a href="#">Development </a>
                  <span>&nbsp;&gt;&nbsp;</span>
                  <a href="#">Programming Languages </a>
                  <span>&nbsp;&gt;&nbsp;</span>
                  <a href="#"> {props.course.category}</a>
                </div>
                
                <img className='responsive responsive-img' src={props.course.image} alt={props.course.title}/>
                
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
                  <span>Created by </span>
                  <a href="#"><span>{props.course.author}</span></a>
                </div>

                <div className="details-more">
                  <div className="last-up">
                  <div className='display-block'>
                    <i class="fa-solid fa-circle-exclamation"></i>
                    <span className="last-updated">Last updated {props.course.lastUpdate}</span>
                    </div>
                    <div className='display-block'>
                    <i className="fa-solid fa-globe"></i>
                    <span>English</span>
                    </div>
                  </div>

                  <div>
                    <div className='display-block'>
                    <i className="fa-regular fa-closed-captioning"></i>
                    <span>{props.course.caption_languages[0]}</span>
                    </div>
                    {butt}
                    {langs}
                  </div>
                </div>
                <div className="cart-price-data responsive">
                <span className="cart-price">E£ {props.course.price}</span>
                </div>
                <div>
            <button className="add-to-cart responsive">Add to cart</button>
                </div>
                <div className="money-back responsive">
            <span>30-Day Money-Back Guarantee</span>
          </div>
          
          <div className="money-back responsive">
          <span>Full life time access</span>
          </div>
          <div className="share-gift-coupon responsive header-media-link">
            <button><a href="">share</a></button>
            <button><a href="">Gift this course</a></button>
            <button><a href="">Apply coupon</a></button>
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