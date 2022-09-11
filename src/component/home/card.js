import React from "react";
import { Link } from "react-router-dom";
const Card = (props) => {
  return (
    <div className="cart1">
      
      <Link to={props.course.link}>
        <img
          src={props.course.image}
          className="cart-img"
          alt={props.course.title}
        />
      </Link>
      <h3>
        <Link to={props.course.link} className="course-name">
          {props.course.title}
        </Link>
      </h3>
      <div>
        <span>
          <Link to={props.course.link} className="auther">
            {props.course.author}
          </Link>
        </span>
      </div>
      <div>
        <span>
          <Link to={props.course.link} className="rating">
            {props.course.rating}
            <i className="fa fa-star star-color" aria-hidden="true"></i>
            <i className="fa fa-star star-color" aria-hidden="true"></i>
            <i className="fa fa-star star-color" aria-hidden="true"></i>
            <i className="fa fa-star star-color" aria-hidden="true"></i>
            <i className="fas fa-star-half-alt star-color"></i>
          </Link>
        </span>
      </div>
      <div>
        <span>
          <Link to={props.course.link} className="price">
          E£  {props.course.price}
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Card;
