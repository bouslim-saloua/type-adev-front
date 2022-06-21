import AuthService from "./services/auth.service";
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route,Routes } from 'react-router-dom';
import Login from './components/Login'
import Home from './components/Home';
import Profile from './components/Profile';
import Register from './components/Register';
import NavBar from './components/NavBar';
import Postuler from './components/Postuler';
import Manifestation from './components/Manifestation';
import Mission from './components/Mission';
import "./Postuler.css"
import PersoInfo from './components/PersoInfo';
import AboutUs from "./components/AboutUs";
import Footer from './components/Footer';
import HistoriqueManifestation from "./components/HistoriqueManifestation";
import HistoriqueMission from "./components/HistoriqueMission";
import CustomRadioButton from "./components/CustomRadioButton";

const App = () => {
  
 
  
  return (
   <div>
     <div>
       <NavBar/>
     </div>
<Routes>
 
 <Route exact path="/" element={<Home />}> </Route>
 <Route exact path="/home" element={<Home/>}></Route>
   <Route exact path="/login" element={<Login/>}></Route>
   <Route exact path="/profile" element={<Profile/>}></Route>
  <Route exact path="/register" element={<Register/>}></Route>
   <Route exact path="/navBar" element={<NavBar/>}></Route>
   <Route exact path="/postuler" element={<Postuler/>}></Route>
   <Route exact path="/manifestation" element={<Manifestation/>}></Route>
   <Route exact path='/mission' element={<Mission/>}></Route>
   <Route exact path='/persoInfo' element={<PersoInfo/>}></Route>
   <Route exact path='/historique/manifestations' element={<HistoriqueManifestation/>}></Route>
   <Route exact path='/aboutUs' element={<AboutUs/>}></Route>
   <Route exact path='/historique/missions' element={<HistoriqueMission/>}></Route>
   <Route exact path='/customRadioButton' element={<CustomRadioButton/>} ></Route>
  </Routes>
  <div>
    <Footer/>
  </div>
   </div>


 
  );
}

export default App;
