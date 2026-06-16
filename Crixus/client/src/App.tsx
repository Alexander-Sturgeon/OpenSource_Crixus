//Pages
// import HomePage from "./pages/HomePage";
// import ArmoryPage from "./pages/ArmoryPage";
// import LoginPage from "./pages/Login";
import AboutUsPage from "./pages/AboutUsPage";
//Components
import Navbar from "./components/NavBar";
//Styles
import Footer from "./components/Footer";
import "../src/App.css";

function App(){

  return(
    <>
      <Navbar/>
      {/* <HomePage/> */}
      {/* <ArmoryPage/> */}
      {/* <LoginPage/> */}
      <AboutUsPage/>
      <Footer/>
    </>
    
  )
}

export default App;