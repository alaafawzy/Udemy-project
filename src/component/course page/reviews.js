import React from 'react'
import { useSearchParams ,useNavigate} from 'react-router-dom';
import { useState } from 'react';
function Reviews(props) {
    const [searchParams, setSearchParams] = useSearchParams("");
    const [review,setReview]=useState("");
    const [reviewstars,setReviewstars]=useState("");
    function reviewsearch(event){
          event.preventDefault();
          setSearchParams({
          review:review,
          reviewstars:reviewstars
        });
    }
    let allreviews=props.course.reviews;
    if(searchParams.get("review")){
      let filter=searchParams.get("review")
      filter.toLowerCase();
      allreviews= allreviews.filter((c) => c.content.toLowerCase().includes(filter));
    }
    if( (searchParams.get("reviewstars")) && (searchParams.get("reviewstars")!=="all rating")){
      let filter=searchParams.get("reviewstars")
      filter.toLowerCase();
      allreviews= allreviews.filter((c) => c.rate.toLowerCase().includes(filter));
    }
    const likebtn= event =>{

    let uniqclass=event.currentTarget.classList[0]
    let elemen=document.getElementsByClassName(uniqclass);
    let currentcolor=event.currentTarget.style.color
    
      if(currentcolor=="black"){
        elemen[0].style.color="blue";
        elemen[1].style.color="black";
      }
      else {
        elemen[0].style.color="black";
        elemen[1].style.color="black";
      }
    
    }
    const unlikebtn= event =>{
      let uniqclass=event.currentTarget.classList[0]
      let elemen=document.getElementsByClassName(uniqclass);
      let currentcolor=event.currentTarget.style.color
    
      if(currentcolor=="black"){
        elemen[1].style.color="blue";
        elemen[0].style.color="black";
      }
      else {
        elemen[1].style.color="black";
        elemen[0].style.color="black";
      }
    
      }
    
  return (
    <section id="reviews">
        
                    <h2 className="review-header">Reviews</h2>
                    <form className="reviews-search-form" role="search" onSubmit={reviewsearch}>
                        <input  className="reviews-search-input" type="search" placeholder="Search reviews" aria-label="Search" 
                         value={review} onChange={(e) => setReview(e.target.value)}/>
                        <button className="review-search-btn" type="submit"><i className="fa-solid fa-magnifying-glass review-search-icon"></i></button>
                        
                        <select className=" rating-selector select-wrapper" name="ratings" id="rating" onChange={(e) => setReviewstars(e.target.value)}>
                            <i className="fa-solid fa-angle-down test"></i>
                            <option value="all ratings">All ratings</option>
                            <option value="5">5 stars </option>
                            <option value="4">4 stars</option>
                            <option value="3">3 stars</option>
                            <option value="2">2 stars</option>
                            <option value="1">1 stars</option>
                            <i className="fa-solid fa-angle-down test"></i>
                          </select>
                        
                      </form>

                      <div className="review-carts">
                        {allreviews.map((it)=>{
                          let revindex="index"+it.id;
                          return(
                            <div className="review-cart">
                            <div className="">
                              <p className="review-cir">{it.nickname}</p>
                              </div>
    
                              <div>
                            <div className="review-header-data">
                            <h4>{it.name}</h4>
                            <i className="fa fa-star star-color" aria-hidden="true"></i>
                            <i className="fa fa-star star-color" aria-hidden="true"></i>
                            <i className="fa fa-star star-color" aria-hidden="true"></i>
                            <i className="fa fa-star star-color" aria-hidden="false"></i>
                            <i className="fa fa-star star-color" aria-hidden="false"></i>
                            <span>a week ago</span>
                            </div>
                         
    
                            <p className="review-content">{it.content}
                            </p>
                            
                            <div className="helpful">
                              <p className="review-feedback">Was this review helpful?</p>
                              <button onClick={likebtn}  className={revindex} ><i id="likebtn" className="fa-regular fa-thumbs-up"></i></button>
                              <button onClick={unlikebtn} className={revindex}><i id="unlikebtn" className="fa-regular fa-thumbs-up fa-rotate-180"></i></button>
                              <a href=""> Report</a>
                           </div>
                          </div>
                        </div>
                          );
                        })}
                      
                        </div>
                
      </section>
  )
}

export default Reviews
