import React from "react";
import Card from "./card";
import CoursesContext from "../coursescontext";
import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
const CoursesList = () => {
  const data=useContext(CoursesContext);
  const [searchParams, setSearchParams] = useSearchParams();
  let Courses=data
  if(searchParams.get("searchvalue")){
    let filter=searchParams.get("searchvalue")
    filter.toLowerCase();
    Courses= data.filter((c) => c.title.toLowerCase().includes(filter));
  }
  return (
    <div className="container-flex">
      {Courses.map((course) => {
        return <Card key={course.id} course={course}></Card>;
      })}
    </div>
    
  );
};

export default CoursesList;
