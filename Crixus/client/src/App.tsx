//Pages
import HomePage from "./pages/HomePage";
import ArmoryPage from "./pages/ArmoryPage";
import LoginPage from "./pages/Login";
import AboutUsPage from "./pages/AboutUsPage";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
//Components
import Navbar from "./components/NavBar";
//Styles
import Footer from "./components/Footer";
import "../src/App.css";

function App(){

  return(
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/armory" element={<ArmoryPage/>}/>
          <Route path="/aboutus" element={<AboutUsPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
    
  )
}

export default App;