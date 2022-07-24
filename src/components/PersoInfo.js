import React ,{Component} from 'react';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import AuthService from '../services/auth.service';

class PersoInfo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          currentUser: AuthService.getCurrentUser()
        };
      }
render(){
    const { currentUser } = this.state;
    return(
<div>


<div className="col-12">
			<div className="title text-center" >
				<h2>Informations Personnelles</h2>
				
				<div className="border"></div>
			</div>
			</div>
            

            <div className="contact-form container " >
				<Form id="contact-form" role="form">
					<div className="row">
<div className="col-md-6 form-group">
<label htmlFor="nom">Nom <span>*</span></label>
<Input type="text" name="nom" id="nom" className="form-control" readOnly value={currentUser.nom}></Input>
</div>

<div className="col-md-6 form-group">
<label htmlFor="prenom">Prénom <span>*</span></label>
<Input type="text" name="prenom" id="prenom" className="form-control" readOnly value={currentUser.prenom}></Input>
</div>
                    </div>

                    <div className="row">
<div className="col-md-6 form-group">
<label htmlFor="telephone">N° Téléphone <span>*</span></label>
<Input type="tel" name="telephone" id="telephone" className="form-control" readOnly value={currentUser.telephone}></Input>
</div>

<div className="col-md-6 form-group">
<label htmlFor="email">Email <span>*</span></label>
<Input type="email" name="email" id="email" className="form-control" readOnly value={currentUser.email}></Input>
</div>
                    </div>
          
          </Form>

        </div>
        </div>
    );
}
}

export default PersoInfo;