import React,{ useState} from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { Link,useNavigate , Navigate } from "react-router-dom";
import { useRef } from "react";
import PersoInfo from "./PersoInfo";
import AuthService from "../services/auth.service";
import CheckButton from "react-validation/build/button";



const required = (value) => {
	if (!value) {
	  return (
		<div className="invalid-feedback d-block">
		  Che champ est obligatoire !
		</div>
	  );
	}
  };

const Mission =()=> {
	
	const [selectedValue, setSelectedValue] = useState("");
      
  
	const renderSelectedForm = (param) =>{
	   switch(param) {
		 case 'enseignant':
		  return(
			<div>
				<label htmlFor="grade">Grade <span>*</span></label>
		   <Form id="contact-form" role="form">
		  <div className="radio-buttons">
		  <div class="form-check">
			 <Input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="pes" checked onChange={onChangeGrade}/>
			 <label class="form-check-label" for="flexRadioDefault1">
			   PES
			 </label>
		   </div>
		   <div class="form-check">
			 <Input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="ph" onChange={onChangeGrade} />
			 <label class="form-check-label" for="flexRadioDefault2">
			   PH
			 </label>
		   </div>
		   <div class="form-check">
			 <Input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="pa" onChange={onChangeGrade} />
			 <label class="form-check-label" for="flexRadioDefault2">
			  PA
			 </label>
		   </div>
		   <div class="form-check">
			 <Input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="autre" onChange={onChangeGrade} />
			 <label class="form-check-label" for="flexRadioDefault2">
			 Autre
			 </label>
		   </div>
		  </div>
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
   </div>
   </div>
   
   <div className="form-group">
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
	
	const [pays, setPays] = useState("");
	const [ville, setVille] = useState("");
	const [dateDebut, setDateDebut] = useState("");
	const [dateFin, setDateFin] = useState("");
	const [dateDepart, setDateDepart] = useState("");
	const [dateRetour, setDateRetour] = useState("");
	const [m_autre, setMAutre] =useState("");
	const [m_hebergement, setMhebergement] = useState("");
	const [m_inscription, setMinscription] = useState("");
	const [m_transport, setMtransport] = useState("");
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
	 const [objet, setObjet] = useState("");
	 const [cadre , setCadre] = useState("");
	 const [intituleProjet, setIntituleProjet] = useState("");
	 const [responsableMarocain, setResponsableMarocain] = useState("");
	 const [responsableEtrange, setResponsableEtrange] = useState("");
   const [typeDoctorant, setTypeDoctorant] = useState("");
   const [anneeThese, setAnneeThese] = useState("");
   const [directeurThese, setDirecteurThese] = useState("");
   const [ced, setCed] = useState("");
   
   const navigate = useNavigate();
  const form = useRef();
  const checkBtn = useRef();
  
  const onChangeObjet = (e) =>{
	const objet = e.target.value;
	setObjet(objet);
}
const onChangeCadre = (e) =>{
	const cadre = e.target.value;
	setCadre(cadre);
}
const onChangeIntituleProjet = (e) =>{
	const intituleProjet = e.target.value;
	setIntituleProjet(intituleProjet);
}
const onChangeResponsableMarocain = (e) =>{
	const responsableMarocain = e.target.value;
	setResponsableMarocain(responsableMarocain);
}
const onChangeResponsableEtrange = (e) =>{
	const responsableEtrange = e.target.value;
	setResponsableEtrange(responsableEtrange);
}
 
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
const onChangeTypeDoctorant = (e) =>{
	const typeDoctorant = e.target.value;
	setTypeDoctorant(typeDoctorant);
}
const onChangeAnneeThese = (e) =>{
	const anneeThese = e.target.value;
	setAnneeThese(anneeThese);
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
	
	
	const onChangeMAutre = (e) =>{
		const m_autre = e.target.value;
		setMAutre(m_autre);
	}
	
	const onChangeMhebergement = (e) =>{
		const m_hebergement = e.target.value;
		setMhebergement(m_hebergement);
	}
	const onChangeMinscription = (e) =>{
		const m_inscription = e.target.value;
		setMinscription(m_inscription);
	}
	const onChangeMtransport = (e) =>{
		const m_transport = e.target.value;
		setMtransport(m_transport);
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

	const soutien={
		natureSoutien: natureSoutien,
		m_transport: m_transport,
		m_inscription: m_inscription,
		m_hebergement: m_hebergement,
		m_autre:m_autre,
		mission: mission
	}
	const mission={


	}

	const donneePro={

	}

	const handleSave = (e) => {}

    return(
		<div>
			
      {currentUser ? (
		<div>
             
		<section className="single-page-header">
<div className="container">
	<div className="row">
		<div className="col-md-12">
			<h2>Demande TYPE-A: Mission ou Stage</h2>
			<ol className="breadcrumb header-bradcrumb">
			  <li><Link to="/">Acceuil</Link></li>
			  <li className="active">Mission ou Stage</li>
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
			<h2>Informations générales sur la mission ou stage</h2>
			
			<div className="border"></div>
		</div>
		</div>

		<div class="contact-form container " >
			
				<div className="row">
<div className="col-md-6 form-group">
<label htmlFor="title_manifestation">Objet de la mission ou stage <span>*</span></label>
<Input type="text" name="title_manifestation" id="title_manifestation" className="form-control" onChange={onChangeObjet} value={objet} validations={[required]}></Input>
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
	  
	 
	</div>
	</div>
	</div>
	<div className="soutien">
	<div className="col-12">
			<div className="title text-center" >
				<h2>Cadre de la mission ou de stage</h2>
				
				<div className="border"></div>
			</div>
			</div>
            

            <div class="contact-form container " >
				
					<div className="row">
				<form>
				<div class="form-check">
	 <Input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="true"  />
	 <label class="form-check-label" for="flexRadioDefault2">
	 Ce projet de coopération financé, mais le titre de transport ne fait pas partie de l'enveloppe budgétaire allouée
	 </label>
   </div>
   <div class="form-check">
	 <Input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="false" />
	 <label class="form-check-label" for="flexRadioDefault2">
	 Ce n'est pas dans le cadre d'un projet de Recherche financé
	 </label>
	 </div>
					</form>		
</div>

<div className="row">
<div className="col-md-6 form-group">
<label htmlFor="date_retour">Préciser le cadre  <span>*</span></label>
<Input type="text"  className="form-control" validations={[required]} onChange={onChangeCadre} value={cadre} ></Input>
</div>

<div className="col-md-6 form-group">
<label htmlFor="date_retour">Intitulé du projet de coopération  <span>*</span></label>
<Input type="text"  className="form-control" validations={[required]} onChange={onChangeIntituleProjet} value={intituleProjet}></Input>
</div>
</div>


<div className="row">
<div className="col-md-6 form-group">
<label htmlFor="date_retour">Responsable marocain du projet <span>*</span></label>
<Input type="text"  className="form-control" validations={[required]} onChange={onChangeResponsableMarocain} value={responsableMarocain}></Input>
</div>

<div className="col-md-6 form-group">
<label htmlFor="date_retour">Partenair étrangé impliqué <span>*</span></label>
<Input type="text"  className="form-control" validations={[required]} onChange={onChangeResponsableEtrange} value={responsableEtrange}></Input>
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
<div className="radio-buttons">
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked onChange={onChangeHasAlreadyBenifitedA}/>
  <label class="form-check-label" for="inlineRadio1">Oui</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" onChange={onChangeHasAlreadyBenifitedA}/>
  <label class="form-check-label" for="inlineRadio2">Non</label>
</div>
</div>
</div>
                    </div>

                    <div className="row">
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
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="soutien total" checked onChange={onchangeNatureSoutien}/>
  <label class="form-check-label" htmlFor="soutien_total">Soutien total</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="soutien complémentaire" onChange={onchangeNatureSoutien}/>
  <label class="form-check-label" htmlFor="soutien_complementaire">Soutien complémentaire</label>
</div>
</form>
</div>
<div className="row">
<div className="col-md-6 form-group">
<label htmlFor="m_transport">Montant Titre Transport <span>*</span></label>
<Input type="text" name="m_transport" id="m_transport" className="form-control"  validations={[required]} value={m_transport} onChange={onChangeMtransport}></Input>
</div>

<div className="col-md-6 form-group">
<label htmlFor="m_inscription">Montant Frais D'inscription <span>*</span></label>
<Input type="text" name="m_inscription" id="m_inscription" className="form-control" validations={[required]} value={m_inscription} onChange={onChangeMinscription}></Input>
</div>
                    </div>

                    <div className="row">
<div className="col-md-6 form-group">
<label htmlFor="m_hebergement">Montant Hébergement <span>*</span></label>
<Input type="text" name="m_hebergement" id="m_hebergement" className="form-control" validations={[required]} value={m_hebergement} onChange={onChangeMhebergement} ></Input>
</div>

<div className="col-md-6 form-group">
<label htmlFor="m_autre">Autre <span>*</span></label>
<Input type="text" name="m_autre" id="m_autre" className="form-control" validations={[required]} value={m_autre} onChange={onChangeMAutre}></Input>
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

export default Mission;