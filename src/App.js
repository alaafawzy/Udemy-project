import logo from './logo.svg';
import './App.css';
import { Route,Routes} from 'react-router-dom';
import Navbar from './component/home/navbar';
import Home from './component/home/home';

import "./style.css";

import Footer from './component/home/footer';
import Coursepage from './component/course page/coursepage';
function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="categories" element={<Coursepage />} />
        <Route path="udemy-business" element={<Underconst />} />
        <Route path="teach-on-udemy" element={<Underconst />} />
        <Route path="cart" element={<Underconst />} />
        <Route path="login" element={<Underconst />} />
        <Route path="sign-up" element={<Underconst />} />
        <Route path="*" element={<Errorpage404 />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

function Underconst() {
  return (
    <>
      <img src="./undercon.jpg"  />
    </>
  );
}

function Errorpage404() {
  return (
    <>
      <p>Page not found 404!</p>
    </>
  );
}
export default App;
