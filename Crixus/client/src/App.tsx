//Pages
import HomePage from "./pages/HomePage";
import ArmoryPage from "./pages/ArmoryPage";
//Components
import Navbar from "./components/NavBar";
//Styles
import Footer from "./components/Footer";
import "../src/App.css";

function App(){

  return(
    <>
      <Navbar/>
      <HomePage/>
      {/* <ArmoryPage/> */}
      <Footer/>
    </>
    
  )
}

export default App;