
import axios from "axios";
const API_URL = "http://localhost:8090/api/donneePro/";

const saveDonneePro = (donneePro) =>{
    return axios.post(API_URL+"save", {
        donneePro
    });
}

const update =(donneePro) =>{
    return axios.put(API_URL + "update", {
        donneePro
    })
}

const getAll = () =>{
    return axios.get(API_URL + "donneePros");
}

const deleteDonneePro= (id) =>{
    return axios.delete(API_URL + {id})
}

const DonneeProService = {
   saveDonneePro,
   update,
   getAll, 
   deleteDonneePro
  }

  export default DonneeProService;
