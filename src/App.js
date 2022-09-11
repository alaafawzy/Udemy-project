import './App.css';
import Navbar from './component/home/navbar';
import React from 'react';
import "./style.css";
import Testfetch from './component/testfetch';
import Footer from './component/home/footer';
function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Testfetch></Testfetch>
      <Footer></Footer>
    </div>
  );
}


export default App;
