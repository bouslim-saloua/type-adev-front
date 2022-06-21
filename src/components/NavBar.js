import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AuthService from "../services/auth.service";
import EventBus from "../common/EventBus"
const NavBar =()=> {
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      
    //  setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
    EventBus.on("logout", () => {
      logOut();
    });
    return () => {
      EventBus.remove("logout");
    };
  }, []);
  const logOut = () => {
    AuthService.logout();
    setCurrentUser(undefined);
  };

        return(
            <header className="navigation fixed-top">
  <div className="container">
    
    <nav className="navbar navbar-expand-lg navbar-light">
      
      <Link to="/" className="navbar-brand logo">
      <img className="logo-default" src="./assets/images/logo.png" alt="logo"/>
        <img className="logo-white" src="./assets/images/logo-white.png" alt="logo"/>
      </Link>
       
      
      
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"
        aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navigation">
        <ul className="navbar-nav ml-auto text-center">
        <li className="nav-item ">
            <Link to="/home" className="nav-link"> Acceuil</Link>
          </li>
          <li className="nav-item ">
          <Link to="/aboutUs" className="nav-link"> About Us</Link>
          </li>
          <li className="nav-item ">
          <Link to="/postuler" className="nav-link"> Postuler</Link>
          </li>
          </ul>
  {currentUser ? (
    <div  className="navbar-nav  text-center">
 <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              Historique des demandes
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link to="/historique/manifestations" className="dropdown-item"> Manifestation Scientifique</Link>
             <Link to="/historique/missions" className="dropdown-item">Mission Ou Stage</Link>
              
            </div>
          </li>
 <li className="nav-item">
<Link to="/profile" className="nav-link"> {currentUser.nom} {currentUser.prenom} </Link>
 </li>
 <form className="form-inline my-2 my-lg-0">
 
 <a href="/login" className="btn btn-secondary" onClick={logOut}>
                Déconnexion
              </a>
 
 </form>
    </div>

 
  ):(
    <div  className="navbar-nav  text-center">
      <li className="nav-item">
<Link to="/register" className="nav-link"> Créer un compte </Link>
 </li>
<form class="form-inline my-2 my-lg-0">
        
        <Link to="/login"><button class="btn btn-secondary my-2 my-sm-0" >Se connecter</button></Link>
         
       </form>
    </div>


  )}
          
         
          
        
        
      </div>
    </nav>
   
  </div>
</header>


        );
    }

export default NavBar;