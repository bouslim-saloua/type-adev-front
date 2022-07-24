import axios from "axios";
const API_URL = "http://localhost:8090/api/document/";

const uploadFileManifestation = (libelle, file,idManifestation) =>{
    let formData = new FormData();
    formData.append("file", file);
    return axios.post(API_URL+"upload/manifestation/"+{libelle}  +"/"+{idManifestation}, 
        libelle,
        formData,
        idManifestation );
}

const DocumentService = {
    uploadFileManifestation
   }
 
   export default DocumentService;
 
