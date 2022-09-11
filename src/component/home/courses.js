import React from "react";
import Card from "./card";
import CoursesContext from "../coursescontext";
import { useContext } from "react";
const CoursesList = () => {
  const data=useContext(CoursesContext);
  return (
    <div className="container-flex">
          {data.map((course) => {
        return <Card key={course.id} course={course}></Card>;
      })}
    </div>
    
  );
};

export default CoursesList;
