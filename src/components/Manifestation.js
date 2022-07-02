import React,{ Component, useState} from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { Link,useNavigate , Navigate } from "react-router-dom";
import { useRef } from "react";
import PersoInfo from "./PersoInfo";
import AuthService from "../services/auth.service";
import CheckButton from "react-validation/build/button";

import ManifestationService from "../services/manifestation.service";



const required = (value) => {
	if (!value) {
	  return (
		<div className="invalid-feedback d-block">
		  Che champ est obligatoire !
		</div>
	  );
	}
  };

const Manifestation =()=> {
	
	const [selectedValue, setSelectedValue] = useState("");
      
  
	const renderSelectedForm = (param) =>{
	   switch(param) {
		 case 'enseignant':
		  return(
			<div>
<Form id="contact-form" role="form">
				<label htmlFor="grade">Grade <span>*</span></label>
		   
		  
		  <div class="form-check">
			 <Input class="form-check-input" type="radio" name="grade" id="flexRadioDefault1" value="pes"  onChange={onChangeGrade}/>
			 <label class="form-check-label" for="flexRadioDefault1">
			   PES
			 </label>
		   </div>
		   <div class="form-check">
			 <Input class="form-check-input" type="radio" name="grade" id="flexRadioDefault2" value="ph" onChange={onChangeGrade} />
			 <label class="form-check-label" for="flexRadioDefault2">
			   PH
			 </label>
		   </div>
		   <div class="form-check">
			 <Input class="form-check-input" type="radio" name="grade" id="flexRadioDefault2" value="pa" onChange={onChangeGrade} />
			 <label class="form-check-label" for="flexRadioDefault2">
			  PA
			 </label>
		   </div>
		   <div class="form-check">
			 <Input class="form-check-input" type="radio" name="grade" id="flexRadioDefault2" value="autre" onChange={onChangeGrade} />
			 <label class="form-check-label" for="flexRadioDefault2">
			 Autre
			 </label>
		   </div>
		  <span>{grade}</span>
		   </Form>
		   </div>
		  )
		 case 'doctorant':
		   return (
   <div>
   <Form>
   <div className="row form-group">
   <div className="col-md-3">
   <label>Fonctionnaire ou salarié <span>*</span></label>
   </div>
   <div className="col-md-3">
   <form>
   <div className="radio-buttons">
   <div class="form-check form-check-inline">
	 <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="fonctionnaire" onChange={onChangeTypeDemandeur}/>
	 <label class="form-check-label" for="inlineRadio1">Fonctionnaire</label>
   </div>
   <div class="form-check form-check-inline">
	 <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="salarié" onChange={onChangeTypeDemandeur}/>
	 <label class="form-check-label" for="inlineRadio2">Salarié</label>
   </div>
   </div>

   </form>
   </div>
   </div>
   
   <div className="form-group">
   <form>
   <label>Année thèse <span>*</span></label>
   <div className="radio-buttons">
   <div class="form-check">
	 <Input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="première" onChange={onChangeAnneeThese} />
	 <label class="form-check-label" for="flexRadioDefault1">
	   Première
	 </label>
   </div>
   <div class="form-check">
	 <Input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="deuxième" onChange={onChangeAnneeThese} />
	 <label class="form-check-label" for="flexRadioDefault2">
	   Deuxième
	 </label>
   </div>
   <div class="form-check">
	 <Input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="troisième" onChange={onChangeAnneeThese} />
	 <label class="form-check-label" for="flexRadioDefault2">
	  Troisième ou Plus
	 </label>
	 </div>
	 
</div>
<span>{anneeThese}</span>
   </form>
   
   
   <div className="row form-group">
   <label htmlFor="Directeur_these">Directeur de Thèse <span>*</span></label>
   <Input type="text" className="form-control" name="directeur_these" id="directeur_these" validations={[required]} onChange={onChangeDirecteurThese} value={directeurThese} ></Input>
   </div>
   
   <div className="row form-group">
   <label htmlFor="ced">CED <span>*</span></label>
   <Input type="text" className="form-control" name="ced" id="ced" validations={[required]} onChange={onChangeCed} value={ced} ></Input>
   </div>
   </div>
   </Form>
   
   </div>
		   );
	   
		 default:
		   return null;
	   }
	 }
	 
	 const current = new Date();
	 const currentDate =  `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
	
   
	 const handleChange =(e) =>{
	   const selectedValue = e.target.value;
	   setSelectedValue(selectedValue);
	 }
	//const navigate = useNavigate();
	const currentUser = AuthService.getCurrentUser();
	const [intituleManifest, setIntituleManifest] = useState("");
	const [intitulePaticipation , setIntituleParticipation] = useState("");
	const [pays, setPays] = useState("");
	const [ville, setVille] = useState("");
	const [dateDebut, setDateDebut] = useState("");
	const [dateFin, setDateFin] = useState("");
	const [dateDepart, setDateDepart] = useState("");
	const [dateRetour, setDateRetour] = useState("");
	const [natureParticipation, setNatureParticipation] = useState("");
	const [mAutre, setMAutre] =useState("");
	const [mHebergement, setMhebergement] = useState("");
	const [mInscription, setMinscription] = useState("");
	const [mTransport, setMtransport] = useState("");
	const [natureSoutien, setNatureSoutien] = useState("");
	const [hasAlreadyBenifitedA, setHasAlreadyBenifitedA] = useState("");
	const [mBenifitedEncours, setMBenifitedEnCours]  = useState("");
	const [mBenifitedAnPrd, setMBenifitedAnPrd] = useState("");
	//infoPro
	const [typeDemadeur, setTypeDemandeur] =useState("");
	const [etablissement, setEtablissement] = useState("");
	const [departement, setDepartement] = useState("");
	const [entiteRecherche, setEntiteRecherche] = useState("");
	const [respoEntiteRecherche, setRespoEntiteRecherche] = useState("");
	 const [grade, setGrade] = useState("");
	 const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
	 
   //const [typeDoctorant, setTypeDoctorant] = useState("");
   const [anneeThese, setAnneeThese] = useState("");
   const [directeurThese, setDirecteurThese] = useState("");
   const [ced, setCed] = useState("");
   
   const navigate = useNavigate();
  const form = useRef();
  const checkBtn = useRef();
  
  const onChangeIntituleManifest = (e) => {
    const intituleManifest = e.target.value;
    setIntituleManifest(intituleManifest);
  };
  const onChangeEtablissement = (e) =>{
	  const etablissement = e.target.value;
	  setEtablissement(etablissement);
  }
  const onChangeTypeDemandeur = (e) =>{
	const typeDemandeur = e.target.value;
	setTypeDemandeur(typeDemandeur);
}
const onChangeCed = (e) =>{
	const ced = e.target.value;
	setCed(ced);
}
const onChangeDirecteurThese = (e) =>{
	const directeurThese = e.target.value;
	setDirecteurThese(directeurThese);
}
const onChangeDepartement = (e) =>{
	const departement = e.target.value;
	setDepartement(departement);
}
const onChangeRespoEntiteRecherche = (e) =>{
	const respoEntiteRecherche = e.target.value;
	setRespoEntiteRecherche(respoEntiteRecherche);
}
const onChangeGrade = (e) =>{
	const grade = e.target.value;
	setGrade(grade);
}
const onChangeEntiteRecherche = (e) =>{
	const entiteRecherche = e.target.value;
	setEntiteRecherche(entiteRecherche);
}

const onChangeAnneeThese = (e) =>{
	const anneeThese = e.target.value;
	setAnneeThese(anneeThese);
}

	const onChangeIntituleParticipation = (e) =>{
		const intitulePaticipation = e.target.value;
		setIntituleParticipation(intitulePaticipation);
	}
	const onChangePays = (e) =>{
		const pays = e.target.value;
		setPays(pays);
	}
	const onChangeVille = (e) =>{
		const ville = e.target.value;
		setVille(ville);
	}
	const onChangeDateDebut = (e) =>{
		const dateDebut = e.target.value;
		setDateDebut(dateDebut);
	}
	const onChangeDateFin = (e) =>{
		const dateFin = e.target.value;
		setDateFin(dateFin);
	}
	const onChangeDateDepart = (e) =>{
		const dateDepart = e.target.value;
		setDateDepart(dateDepart);
	}
	const onChangeDateRetour = (e) =>{
		const dateRetour = e.target.value;
		setDateRetour(dateRetour);
	}
	
	const onChangeNatureParticipation = (e) =>{
		const natureParticipation = e.target.value;
		setNatureParticipation(natureParticipation);
	}
	const onChangeMAutre = (e) =>{
		const mAutre = e.target.value;
		setMAutre(mAutre);
	}
	
	const onChangeMhebergement = (e) =>{
		const mHebergement = e.target.value;
		setMhebergement(mHebergement);
	}
	const onChangeMinscription = (e) =>{
		const mInscription = e.target.value;
		setMinscription(mInscription);
	}
	const onChangeMtransport = (e) =>{
		const mTransport = e.target.value;
		setMtransport(mTransport);
	}
	const onchangeNatureSoutien = (e) =>{
		const natureSoutien = e.target.value;
		setNatureSoutien(natureSoutien);
	}
	const onChangeHasAlreadyBenifitedA = (e) =>{
		const hasAlreadyBenifitedA = e.target.value;
		setHasAlreadyBenifitedA(hasAlreadyBenifitedA);
	}
	const onChangeMBenfinitedAnPrd = (e) =>{
		const mBenifitedAnPrd = e.target.value;
		setMBenifitedAnPrd(mBenifitedAnPrd);
	}

	const onChangeMBenifitedEncours = (e) =>{
		const mBenifitedEncours = e.target.value;
		setMBenifitedEnCours(mBenifitedEncours);
	}

	const manifestationHolder ={
		
dateCreation: currentDate,
titreManifestation: intituleManifest,
titreParticipation: intitulePaticipation,
pays: pays,
ville: ville,
dateDebut: dateDebut,
dateFin: dateFin,
dateDepart: dateDepart,
dateRetour: dateRetour,
natureParticipation: natureParticipation,
status: "en cours",
hasBenifitedTypeA: hasAlreadyBenifitedA,
montantAnEnCours: mBenifitedEncours,
montantAnPrd: mBenifitedAnPrd,
//DonneePro
fonctionnalite: typeDemadeur,
grade: grade,
anneeThese: anneeThese,
directeurThese: directeurThese,
ced: ced,
etablissement: etablissement,
departement: departement,
entiteRecherche: entiteRecherche,
respoEntite: respoEntiteRecherche,
type: selectedValue,
//Soutien

 nature: natureSoutien,
 mTitreTransport: mTransport,
mFraisInscription: mInscription,
 mHebergement: mHebergement,
 mAutre: mAutre,

	}
	


	const handleSave = (e) => {
		e.preventDefault();
		setMessage("");
		setLoading(true);
		form.current.validateAll();
	
		if (checkBtn.current.context._errors.length === 0) {
		ManifestationService.saveManifestationByUserId(currentUser.id, manifestationHolder).then(

			() => {
			 navigate("/historique/manifestations");
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

	}

    return(
		<div>
			
      {currentUser ? (
		<div>
             
		<section className="single-page-header">
<div className="container">
	<div className="row">
		<div className="col-md-12">
			<h2>Demande TYPE-A: Manifestation Scientifique</h2>
			<ol className="breadcrumb header-bradcrumb">
			  <li><Link to="/">Acceuil</Link></li>
			  <li className="active">Manifestation Scientifique</li>
			</ol>
		</div>
	</div>
</div>
</section>


<section className="contact-us" id="contact">
	<Form onSubmit={handleSave} ref={form}>
		
<div className="container">
	<div className="row">
		
		<PersoInfo/>
		<div className="proInfo">
		<div>

<div className="col-12">
			<div className="title text-center" >
				<h2>Informations Professionnelles</h2>
				
				<div className="border"></div>
			</div>
			</div>
            

            <div class="contact-form container " >
            
				<Form id="contact-form" role="form">
                
                <div className="row">
<div className="col-md-6">
<label>Vous êtes <span>*</span></label>
                  <select value={selectedValue} onChange={handleChange} className="form-control">
                      <option value="" selected="selected"></option>
                      <option value="enseignant">Enseignant Chercheur</option>
                      <option value="doctorant">Doctorant</option>
                  </select>
</div>
<div className="col-md-6">
{renderSelectedForm(selectedValue)}
</div>
                </div>

        <div className="row">
        <div className="col-md-6">
<label>Etablissement <span>*</span></label>
                  <select className="form-control" required value={etablissement} onChange={onChangeEtablissement}>
                      <option value="" selected="selected"></option>
                      <option value="fssm">FSSM</option>
                      <option value="fsjesm">FSJESM</option>
					  <option value="fstg">FSTG</option>
                      <option value="flshm">FLSHM</option>
                      <option value="fmpm">FMPM</option>
                      <option value="ensam">ENSAM</option>
                      <option value="encgm">ENCGM</option>
                      <option value="ests">ESTS</option>
                      <option value="este">ESTE</option>
                      <option value="ensas">ENSAS</option>
                      <option value="fac poly safi">Fac Poly Safi</option>
                      <option value="fstbm">FSTBM</option>
                      <option value="flshbm">FLSHBM</option>
                      <option value="fac poly bm">Fac Poly BM</option>
                  </select>
</div>
        <div className="col-md-6 form-group">
<label htmlFor="departement">Département <span>*</span></label>
<Input type="text" name="departement" id="departement" className="form-control" value={departement} onChange={onChangeDepartement} validations={[required]}></Input>
	    </div>

        </div>

        <div className="row">
        <div className="col-md-6 form-group">
<label htmlFor="entite_recherche">Entité de Recherche(Centres, Laboratoire ou équipe …) <span>*</span></label>
<Input type="text" name="entite_recherche" id="entite_recherche" className="form-control" value={entiteRecherche} onChange={onChangeEntiteRecherche} validations={[required]}></Input>
	    </div>

        <div className="col-md-6 form-group">
<label htmlFor="respo_eRecherche">Responsable de l’entité de recherche <span>*</span></label>
<Input type="text" name="respo_eRecherche" id="respo_eRecherche" className="form-control" value={respoEntiteRecherche} onChange={onChangeRespoEntiteRecherche} validations={[required]}></Input>
       
	    </div>
        </div>
          </Form>

        </div>
        </div>
		</div>
		
		<div className="col-12">
		<div className="title text-center" >
			<h2>Informations générales sur la Manifestation Scientifique</h2>
			
			<div className="border"></div>
		</div>
		</div>

		<div class="contact-form container " >
			
				<div className="row">
<div className="col-md-6 form-group">
<label htmlFor="title_manifestation">Intitulé de la manifestation <span>*</span></label>
<Input type="text" name="title_manifestation" id="title_manifestation" className="form-control" value={intituleManifest} onChange={onChangeIntituleManifest} validations={[required]}></Input>
</div>

<div className="col-md-6 form-group">
<label htmlFor="title_participation">Intitulé de la participation <span>*</span></label>
<Input type="text" name="title_participation" id="title_participation" className="form-control" value={intitulePaticipation} onChange={onChangeIntituleParticipation} validations={[required]}></Input>
</div>
				</div>

				<div className="row">
<div className="col-md-6 form-group">
<label htmlFor="pays">Pays <span>*</span></label>
<Input type="text" name="pays" id="pays" className="form-control" value={pays} onChange={onChangePays}  validations={[required]}></Input>
</div>

<div className="col-md-6 form-group">
<label htmlFor="ville">Ville <span>*</span></label>
<Input type="text" name="ville" id="ville" className="form-control" value={ville} onChange={onChangeVille} validations={[required]} ></Input>
</div>
				</div>

				<div className="row">
<div className="col-md-6 form-group">
<label htmlFor="date_debut">Date début <span>*</span></label>
<Input type="date" name="date_debut" id="date_debut" className="form-control" value={dateDebut} onChange={onChangeDateDebut} validations={[required]}></Input>
</div>

<div className="col-md-6 form-group">
<label htmlFor="date_fin">Date fin <span>*</span></label>
<Input type="date" name="date_fin" id="date_fin" className="form-control" value={dateFin} onChange={onChangeDateFin} validations={[required]} ></Input>
</div>
				</div>
				<div className="row">
<div className="col-md-6 form-group">
<label htmlFor="date_depart">Date départ <span>*</span></label>
<Input type="date" name="date_depart" id="date_depart" className="form-control" value={dateDepart} onChange={onChangeDateDepart} validations={[required]}></Input>
</div>

<div className="col-md-6 form-group">
<label htmlFor="date_retour">Date retour <span>*</span></label>
<Input type="date" name="date_retour" id="date_retour" className="form-control" value={dateRetour} onChange={onChangeDateRetour} validations={[required]} ></Input>
</div>
				</div>
	  <div className="row">
<div className="col-md-6 form-group">
<label>Nature de la participation <span>*</span></label>
			  <select className="form-control" validations={[required]} value={natureParticipation} onChange={onChangeNatureParticipation}>
				  <option value="" selected="selected" ></option>
				  <option value="conférence">Conférence</option>
				  <option value="communication orale">Communication Orale</option>
				  <option value="communication affichée">Communication affichée</option>
				  <option value="other">Autre...</option>
			  </select>
</div>
	  </div>
	  
	 

	</div>
	</div>
	</div>
	<div className="soutien">
	<div className="col-12">
			<div className="title text-center" >
				<h2>Informations sur le soutien</h2>
				
				<div className="border"></div>
			</div>
			</div>
            

            <div class="contact-form container " >
				
					<div className="row">
<div className="col-md-6 form-group">
<p>Avez-vous déja bénéficié d'un soutien Type A au cours de cette année ?</p>
</div>

<div className="col-md-6 form-group">
<form>
<div className="radio-buttons">
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="hasBenifited" id="inlineRadio1" value={true}  onChange={onChangeHasAlreadyBenifitedA}/>
  <label class="form-check-label" for="inlineRadio1">Oui</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="hasBenifited" id="inlineRadio2" value={false} onChange={onChangeHasAlreadyBenifitedA}/>
  <label class="form-check-label" for="inlineRadio2">Non</label>
</div>
</div>

</form>

</div>
                    </div>

                    <div className="row">
						<span> Si oui :</span>
<div className="col-md-6 form-group">
<label htmlFor="beni_montant">Préciser le montant année précédente<span>*</span></label>
<Input type="number" name="beni_montant" id="beni_montant" className="form-control" onChange={onChangeMBenfinitedAnPrd} value={mBenifitedAnPrd} validations={[required]} ></Input>
</div>

<div className="col-md-6 form-group">
<label htmlFor="beni_montant">Préciser le montant année en cours <span>*</span></label>
<Input type="number" name="beni_montant" id="beni_montant" className="form-control" onChange={onChangeMBenifitedEncours} value={mBenifitedEncours} validations={[required]} ></Input>
</div>
                    </div>


				

                    <div className="row">
<div className="col-md-6 form-group">
<p>Nature de soutien demandé</p>
</div>
<div className="col-md-6 form-group">
<form>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="natureSoutien" id="inlineRadio1" value="soutien total"  onChange={onchangeNatureSoutien}/>
  <label class="form-check-label" htmlFor="soutien_total">Soutien total</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="natureSoutien" id="inlineRadio2" value="soutien complémentaire" onChange={onchangeNatureSoutien}/>
  <label class="form-check-label" htmlFor="soutien_complementaire">Soutien complémentaire</label>
</div>
</form>

</div>

<div className="row">
						
<div className="col-md-6 form-group">
<label htmlFor="mTransport">Montant Titre Transport<span>*</span></label>
<Input type="number" name="mTransport" id="mTransport" className="form-control" onChange={onChangeMtransport} value={mTransport} validations={[required]} ></Input>
</div>

<div className="col-md-6 form-group">
<label htmlFor="mInscription">Montant Frais Inscription <span>*</span></label>
<Input type="number" name="mInscription" id="mInscription" className="form-control" onChange={onChangeMinscription} value={mInscription} validations={[required]} ></Input>
</div>
                    </div>

					<div className="row">
						
<div className="col-md-6 form-group">
<label htmlFor="mHebergement">Montant Hebergement<span>*</span></label>
<Input type="number" name="mHebergement" id="mHebergement" className="form-control" onChange={onChangeMhebergement} value={mHebergement} validations={[required]} ></Input>
</div>

<div className="col-md-6 form-group">
<label htmlFor="beni_montant">Montant Autre <span>*</span></label>
<Input type="number" name="mHebergement" id="beni_montant" className="form-control" onChange={onChangeMAutre} value={mAutre} validations={[required]} ></Input>
</div>
                    </div>	
                  


                    </div>
          
					<div className="form-group">
            <button className="btn btn-primary btn-block" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Valider</span>
            </button>
          </div>

        </div>

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

		</section>

   
	
	</div>
	  ):(
<div>
<Navigate to="/login" />
</div>
	  )}
</div>
    );
   }

export default Manifestation;