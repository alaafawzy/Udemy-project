import React from 'react'
import { useEffect, useState } from "react";
import Paths from './paths';
import CoursesContext from './coursescontext';
function Testfetch() {
    const [data,setData]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);
    useEffect(()=>{
        fetch('https://alaafawzy.github.io/Udemy-project-data/dp.json')
            .then(response => {
                if(response.ok){
                    return response.json();
                }
                throw response;
            })
            .then(data=>{
                setData(data);
            })
            .catch(error=>{
                console.error("error fetching data",error);
                setError(error);
            })
            .finally(()=>{
                setLoading(false);
            })
    },[])
    if(loading) return "Loading";
    if(error) return "error";

  return (
    <CoursesContext.Provider value={data}>
        <Paths></Paths>
    </CoursesContext.Provider>
  );
}

export default Testfetch

