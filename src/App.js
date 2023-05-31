import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Login from "./pages/login/Login";
import Home from "./pages/home/Home"
import About from "./pages/about/About"

function App() {
  return (
    <div>
  
    <BrowserRouter>
   <Navbar/>          
       <Routes>
       {/* <Route exact path="/home" element={<Home/>}/> */}
       <Route exact path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        
      </Routes> 
   <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
