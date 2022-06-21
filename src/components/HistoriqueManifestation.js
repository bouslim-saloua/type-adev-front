import React, {useState, useEffect} from 'react'
import ManifestationService from '../services/manifestation.service';
import AuthService from '../services/auth.service';
import { Link } from 'react-router-dom';

const HistoriqueManifestation=()=>{
    const renderStatus = (param) =>{
        switch(param) {
          case 'en cours':
           return(
            <div className="alert alert-warning" role="alert">
En cours
            </div>
           )

           case 'validée' :
            return(
               <div className="alert alert-success" role="alert">
Validée
               </div> 
            )
            case 'refusée' :
                return(
                    <div className="alert alert-danger" role="alert">
Refusée
                    </div>
                )
             default:
                    return null;
                }
            }
            


    const currentUser = AuthService.getCurrentUser();
const [manifestations, setManifestations] = useState([]);
const id = currentUser.id;
useEffect(()=>{
    getManifestations()
}, [])

const getManifestations= ()=>{
    ManifestationService.getManifestationsByUserId(id).then((response)=>{
        setManifestations(response.data)
        console.log(response.data);
        
    });

};



const length = manifestations.length;
return (
    <div>
        <section className="single-page-header">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>Historique des demandes pour la manifestation scientifique</h2>
          <ol className="breadcrumb header-bradcrumb">
            <li className="breadcrumb-item"><Link to="/">Acceuil</Link></li>
            <li className="active">Historique des manifestations</li>
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
        <section class="page-404 section text-center">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<h1>404</h1>
					<h2>Page Not Found</h2>
  					<p>Sorry, but the page you were trying to view does not exist.</p>
					
                      <a href="/home" class="btn btn-primary btn-lg " role="button" aria-disabled="true" araria-pressed="true">Aller à la page d'acceuil</a>
                    
                    <a href="/postuler" class="btn btn-secondary btn-lg " role="button" aria-disabled="true" aria-pressed="true">Postuler</a>
              
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
                manifestations.map(
                        manifestation =>
                        <tr key = {manifestation.id}>
                            <td>{manifestation.id}</td>
                            <td> {manifestation.dateCreation }</td>
                            <td> manifestation scientifique</td>
                            <td> {manifestation.titreManifestation }</td>  
                            <td> {renderStatus(manifestation.status)}</td>    
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
export default HistoriqueManifestation;