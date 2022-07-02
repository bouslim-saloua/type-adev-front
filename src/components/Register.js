import React, {Component, useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
/**
 * {successful ?   toast.success('Authentication success'):
 toast.error('Authentication failed')      }
 */

import AuthService from "../services/auth.service";
const required = value =>{
  if (!value){
      return (
          <div className="alert alert-danger" role="alert">
              Ce champ ne doit pas être vide!
          </div>
      )
  
}
}
const vemail = value =>{
  if(!isEmail(value)){
      return (
          <div className="alert alert-danger" role="alert">
              Cet email n'est pas valid;
          </div>
      );
  }
};

const vnom =value =>{
  if(value.length < 3 || value.length >30){
return(
  <div className="alert alert-danger" role="alert">
Le nom doit être entre 3 et 30 caractères!
  </div>
);
  }
};

const vprenom = value =>{
  if(value.length < 3 || value.length > 30){
      return(
          <div className="alert alert-danger" role="alert">
Le prénom doit être entre 3 et 30 caractères!
          </div>

      );
  }
};

const vpassword = value =>{
  if(value.length < 8 || value.length > 40){
      return(
          <div className="alert alert-danger" role="alert">
              Votre mot de passe doit être entre 8 et 40  caractères!
          </div>
      );
  }
};

const vtelephone = value =>{
  var pattern = new RegExp(/(\+212|0)([ \-_/]*)(\d[ \-_/]*){9}/);
  if(!pattern.test(value)){
      return(
<div className="invalid-feedback d-block">
Le numéro de téléphone doit-être un numéro marocain valid !
</div>
      );
  }else if(value.length !==10){
return(
<div className="invalid-feedback d-block">
Le numéro de téléphone ne doit dépasser 10 caractères!
</div>
);
}
};
const Register = (props) => {

  //Notifications
  /*const errorNotification=()=>{
    toast.error('Authentication failed') ;
  }
  const successNotification = ()=>{
    toast.success('Authentication success');
  }*/
  const form = useRef();
  const checkBtn = useRef();
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const onChangeNom = (e) => {
    const nom = e.target.value;
    setNom(nom);
  };
  const onChangePrenom = (e) => {
    const prenom = e.target.value;
    setPrenom(prenom);
  };
  const onChangeTelephone = (e) => {
    const telephone = e.target.value;
    setTelephone(telephone);
  };
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const handleRegister = (e) => {
    e.preventDefault();
    setMessage("");
    setSuccessful(false);
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(nom,prenom,telephone, email, password).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
         // successNotification();
         toast.success('success!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          setMessage(resMessage);
          setSuccessful(false);
         // errorNotification();
        // toast("ffff!")
        toast.error(' email or phone number already exist', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
        }
      );
    }
  };
  
  //toast -push notifications
 
 
  return (
    <div className="col-md-12">
      
  

  <section className="single-page-header">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>Créer Un Nouveau Compte</h2>
          <ol className="breadcrumb header-bradcrumb">
            <li><Link to="/">Acceuil</Link></li>
            <li className="active">S'enregistrer</li>
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
				<h2>S'enregistrer </h2>
				
				<div className="border"></div>
			</div>
			</div>
			
      <div className="contact-form d-flex justify-content-center">
       
        <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div>
              <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="nom">Nom</label>
                <Input
                  type="text"
                  className="form-control"
                  name="nom"
                  value={nom}
                  onChange={onChangeNom}
                  validations={[required, vnom]}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="prenom">Prénom</label>
                <Input
                  type="text"
                  className="form-control"
                  name="prenom"
                  value={prenom}
                  onChange={onChangePrenom}
                  validations={[required, vprenom]}
                />
              </div>
              </div>
              <div className="form-group">
                <label htmlFor="telephone">N° Téléphone</label>
                <Input
                  type="text"
                  className="form-control"
                  name="telephone"
                  value={telephone}
                  onChange={onChangeTelephone}
                  validations={[required, vtelephone]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Input
                  type="text"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={onChangeEmail}
                  validations={[required, vemail]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required, vpassword]}
                />
              </div>
              <div className="form-group">
                <button className="btn btn-primary btn-block">Enregistrer</button>
              </div>
            </div>
          )}
          {message && (
            <div>
               <div class="toast">
          <div class="toast-item">
            <div class="toast-success">
            
            </div>
            </div>
            </div>
                     {
              /** <div
                className={
                  successful ? "alert alert-success" : "alert alert-danger"
                }
                role="alert"
              >
                {message}
              </div>*/
             } 
             {/*successful ? 
<div>
<Modal  open={true}
   onClose={this.handleClose}
   basic
   size='small'>
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleClose}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
</div>
 :
 
   <div>
    <Modal  open={true}
   onClose={handleClose}
   basic
   size='small'>
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleClose}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
</div>
   
             
               
              

            */}
            <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
        </div>
        </div>
        </div></section>
      </div>
    </div>
  );
};
export default Register;