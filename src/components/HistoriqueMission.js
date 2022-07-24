import React, {useState, useEffect} from 'react'
import AuthService from '../services/auth.service';
import { Link } from 'react-router-dom';
import MissionService from '../services/mission.service';

const HistoriqueMission=()=>{
    const renderStatus = (param) =>{
        switch(param) {
          case 'en cours':
           return(
            <button type="button" className="btn btn-warning" disabled>En cours</button>
           )

           case 'validée' :
            return(
                <button type="button" className="btn btn-success" disabled>Validée</button> 
            )
            case 'refusée' :
                return(
                    <button type="button" className="btn btn-danger" disabled>Refusée</button>
                )
             default:
                    return null;
                }
            }
            


    const currentUser = AuthService.getCurrentUser();
const [missions, setMissions] = useState([]);
const id = currentUser.id;
useEffect(()=>{
    getMissions();
}, [])



const getMissions =()=>{
    MissionService.getMissionsByUserId(id).then((response) =>{
setMissions(response.data);
console.log(response.data);
    });
}
const length = missions.length;

return (
    <div>
        <section className="single-page-header">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>Historique des demandes pour la mission ou stage</h2>
          <ol className="breadcrumb header-bradcrumb">
            <li className="breadcrumb-item"><Link to="/">Acceuil</Link></li>
            <li className="active">Historique des demandes</li>
          </ol>
        </div>
      </div>
    </div>
  </section>
  
      <div className="col-md-12">
        
      <section className="contact-us" id="contact">
	<div className="container">
		<div className="row">
			
            
			
			<div className="col-12">
			<div className="title text-center" >
				<h2>Historique des demandes </h2>
				
				<div className="border"></div>
			</div>
			</div>
			<div className = "container">
        
       

            {length ===0 ?(
        <section className="page-404 section text-center">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<h1>404</h1>
					<h2>Page Not Found</h2>
  					<p>Sorry, but the page you were trying to view does not exist.</p>
					
                      <a href="/home" className="btn btn-primary btn-lg " role="button" aria-disabled="true" araria-pressed="true">Aller à la page d'acceuil</a>
                    
                    <a href="/postuler" className="btn btn-secondary btn-lg " role="button" aria-disabled="true" aria-pressed="true">Postuler</a>
              
				</div>
			</div>
		</div>
	</section>

       ):(
        <table className = "table table-striped">
        <thead>
            <tr>
                <th> Id</th>
                <th> Type de la Demande</th>
                <th> Date création</th>
                <th> Intitulé</th>
                <th> Etat</th>
                <th> Déposer votre rapport</th>
            </tr>

        </thead>
        <tbody>
            {
                missions.map(
                        mission =>
                        <tr key = {mission.id}>
                            <td>{mission.id}</td>
                            <td> {mission.dateCreation }</td>
                            <td> mission-stage</td>
                            <td> {mission.objet }</td>  
                            <td> {renderStatus(mission.status)}</td>    
                           <td></td> 

                        </tr>

                )
            }
            
        </tbody>


    </table>
       )}

    </div>
    </div>
    </div>
    </section>
    </div>
    </div>
    
)
}
export default HistoriqueMission;