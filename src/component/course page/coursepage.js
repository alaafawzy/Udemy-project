import React from 'react';
import Navandheader from './navandheader';
import Coursecart from './coursecart';
import Whatlearn from './whatlearn';
import Coursecontent from './coursecontent';
import Requirements from './requirements';
import Description from './description';
import Instructor from './instructor';
import Studentfeedback from './studentfeedback';
import Reviews from './reviews';
import Thirdnav from './thirdnav';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import CoursesContext from '../coursescontext';
import Home from '../home/home';
function Coursepage() {
  const data=useContext(CoursesContext);
  let {id}=useParams();
  id ="/course/"+id+"/";
  let coursedata=data[0];
  let isvalidcourse=false;
  data.map((course) => {
    if(course.link===id){
      coursedata=course;
      isvalidcourse=true;
    }
  })
  if(isvalidcourse==true){
    return (
      <>
      <Navandheader key={coursedata.id} course={coursedata}></Navandheader>
      <Coursecart key={coursedata.id} course={coursedata}></Coursecart>
      <Thirdnav></Thirdnav>
      <Whatlearn key={coursedata.id} course={coursedata}></Whatlearn>
      <Coursecontent key={coursedata.id} course={coursedata}></Coursecontent>
      <Requirements key={coursedata.id} course={coursedata}></Requirements>
      <Description key={coursedata.id} course={coursedata}></Description>
      <Instructor key={coursedata.id} course={coursedata}></Instructor>
      <Studentfeedback key={coursedata.id} course={coursedata}></Studentfeedback>
      <Reviews key={coursedata.id} course={coursedata}></Reviews>
      </>
    )
  }
  else {
  return (
    <>
      <Home />
    </>
  )}
}

export default Coursepage