import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./home/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import FullPortfolio from "./fullPortfolio/FullPortfolio";
import ScrollUp from "./components/ScrollUp";


const App = () => {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="fullportfolio" element={<FullPortfolio/>}/>
      </Routes>
      <Contact/>
      <Footer/>
      <ScrollUp/>
    </BrowserRouter>
    </>
  );
};

export default App;
