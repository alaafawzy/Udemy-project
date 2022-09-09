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
import Thirdnav from './thirdnav'
function Coursepage() {
  return (
    <>
        <Navandheader></Navandheader>
        <Coursecart></Coursecart>
        <Thirdnav></Thirdnav>
        <Whatlearn></Whatlearn>
        <Coursecontent></Coursecontent>
        <Requirements></Requirements>
        <Description></Description>
        <Instructor></Instructor>
        
        <Reviews></Reviews>
    </>
  )
}

export default Coursepage