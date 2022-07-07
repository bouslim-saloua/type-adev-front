
import React,{Component} from 'react';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import AuthService from '../services/auth.service';
import { Link } from 'react-router-dom';

const Profile = () => {
   const currentUser = AuthService.getCurrentUser();
   
    return(
<div>

<section className="single-page-header">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>Profile</h2>
          <ol className="breadcrumb header-bradcrumb text-center">
            <li><Link to="/">Acceuil</Link></li>
            <li className="active">Profile</li>
          </ol>
        </div>
      </div>
    </div>
  </section>

<div className="col-12">
			<div className="title text-center" >
				<h2>Informations Personnelles</h2>
				
				<div className="border"></div>
			</div>
			</div>
            

            <div class="contact-form container " >
				<Form id="contact-form" role="form">
					<div className="row">
<div className="col-md-6 form-group">
<label htmlFor="nom">Nom <span>*</span></label>
<Input type="text" name="nom" id="nom" className="form-control"  value={currentUser.nom}></Input>
</div>

<div className="col-md-6 form-group">
<label htmlFor="prenom">Prénom <span>*</span></label>
<Input type="text" name="prenom" id="prenom" className="form-control"  value={currentUser.prenom}></Input>
</div>
                    </div>

                    <div className="row">
<div className="col-md-6 form-group">
<label htmlFor="telephone">N° Téléphone <span>*</span></label>
<Input type="tel" name="telephone" id="telephone" className="form-control"  value={currentUser.telephone}></Input>
</div>

<div className="col-md-6 form-group">
<label htmlFor="email">Email <span>*</span></label>
<Input type="email" name="email" id="email" className="form-control"  value={currentUser.email}></Input>
</div>
                    </div>
          <button className='col-md-6 btn btn-primary'>Modifier</button>
          </Form>

        </div>
        </div>
    );
}


export default Profile;