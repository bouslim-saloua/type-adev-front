import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.service";

import { Link } from "react-router-dom";
const required = (value) => {
  if (!value) {
    return (
      <div className="invalid-feedback d-block">
        Che champ est obligatoire !
      </div>
    );
  }
};
const Login = () => {
  
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const form = useRef();
  const checkBtn = useRef();
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(email, password).then(
        () => {
          navigate("/home");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };
  return (
    <div>
          
  

  <section className="single-page-header">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>Créer Un Nouveau Compte</h2>
          <ol className="breadcrumb header-bradcrumb">
            <li><Link to="/">Acceuil</Link></li>
            <li className="active">Se connecter</li>
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
				<h2>Se connecter </h2>
				
				<div className="border"></div>
			</div>
			</div>
			

			<div class="contact-form d-flex justify-content-center " >
      
        <Form onSubmit={handleLogin} ref={form}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Input
              type="text"
              className="form-control"
              name="email"
              value={email}
              onChange={onChangeEmail}
              validations={[required]}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <Input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-block" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Se connecter</span>
            </button>
          </div>
          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
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
export default Login;