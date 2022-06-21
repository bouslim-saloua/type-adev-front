/*
*******Manifestation Service
This service allows retreiving data from the server
*/ 

import axios from "axios";
const API_URL = "http://localhost:8090/api/manifestation/";

/*const saveManifestation =(manifestation)=>{
return axios.post(API_URL+ "enregistrer",{
manifestation
});
}*/

const saveManifestationByUserId = (userId, manifestationHolder) =>{
    return axios.post(API_URL  + userId,
        manifestationHolder
    );
}

const getAll = () =>{
    return axios.get(API_URL+ "manifestations")
}

const getAllRefused=() =>{
    return axios.get(API_URL+ "allRefused")
}

const getAllAccepted = ()=>{
    return axios.get(API_URL+ "allAccepted")
}

const getAllInProgress = () =>{
    return axios.get(API_URL+ "allInProgress")
}

const getCountAll = () =>{
    return axios.get(API_URL + "countAll")
}

const getCountAllRefused = () =>{
    return axios.get(API_URL + "cAllRefused")
}

const getCountAllAccepted = () =>{
    return axios.get(API_URL + "cAllAccepted");
}

const getCountAllInProgress = ()=>{
    return axios.get(API_URL + "cAllInProgress");
}
const generateReport = (id) =>{
    return axios.get(API_URL + 'id/'+id);
}

const getManifestationsByUserId = (id) =>{
    return axios.get(API_URL + 'manifestationsByUser/'+id);
}
/*const validerManifestation = ()=>*/
const ManifestationService={
saveManifestationByUserId,
getAll,
getAllAccepted,
getAllRefused,
getAllInProgress,
getCountAll,
getCountAllAccepted,
getCountAllInProgress,
getCountAllRefused,
generateReport,
getManifestationsByUserId
}

export default ManifestationService;
