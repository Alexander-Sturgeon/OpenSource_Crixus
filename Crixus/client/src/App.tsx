//Pages
import HomePage from "./pages/HomePage";
import ArmoryPage from "./pages/ArmoryPage";
import LoginPage from "./pages/Login";
import AboutUsPage from "./pages/AboutUsPage";
import ViewFighterPage from "./pages/ViewFighterPage";
import NewFighterPage from "./pages/NewFighterPage";
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
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
          <Route path="/fighters" element={<ViewFighterPage/>}/>
          <Route path="/newfighter" element={<NewFighterPage/>}/>
          <Route path="*" element={<Navigate to='/' replace />}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
    
  )
}

export default App;