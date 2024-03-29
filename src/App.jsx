import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Scrollup from "./components/ScrollUp";
import FullPortfolio from "./pages/fullPortfolio/FullPortfolio";


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
      <Scrollup/>
    </BrowserRouter>
    </>
  );
};

export default App;
