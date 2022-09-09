import React from "react";

const Card = (props) => {
  return (
    <div className="cart1">
      <a href={props.course.link}>
        <img
          src={props.course.image}
          className="cart-img"
          alt={props.course.title}
        />
      </a>
      <h3>
        <a href={props.course.link} className="course-name">
          {props.course.title}
        </a>
      </h3>
      <div>
        <span>
          <a href={props.course.link} className="auther">
            {props.course.author}
          </a>
        </span>
      </div>
      <div>
        <span>
          <a href={props.course.link} className="rating">
            {props.course.rating}
            <i className="fa fa-star star-color" aria-hidden="true"></i>
            <i className="fa fa-star star-color" aria-hidden="true"></i>
            <i className="fa fa-star star-color" aria-hidden="true"></i>
            <i className="fa fa-star star-color" aria-hidden="true"></i>
            <i className="fas fa-star-half-alt star-color"></i>
          </a>
        </span>
      </div>
      <div>
        <span>
          <a href={props.course.link} className="price">
          E£  {props.course.price}
          </a>
        </span>
      </div>
    </div>
  );
};

export default Card;
