import axios from "axios";
const API_URL = "http://localhost:8090/api/document/";
///api/document/upload/manifestation/{libelle}/{idManifestation}
const uploadFileManifestation = (libelle, file,idManifestation) =>{
    let formData = new FormData();
    formData.append("file", file);
    return axios.post(API_URL+"upload/manifestation/"+{libelle}  +"/"+{idManifestation},{
        libelle,
        formData,
        idManifestation,} );
}

const uploadFileMission = (libelle, file,idMission) =>{
    let formData = new FormData();
    formData.append("file", file);
    return axios.post(API_URL+"upload/mission/"+{libelle}  +"/"+{idMission},{
        libelle,
        formData,
        idMission,} );
}
const DocumentService = {
    uploadFileManifestation,
    uploadFileMission
   }
 
   export default DocumentService;
 
