import axios from "axios";


//I'm gonna create a service that uses axios object above to send HTTP requests

const UTILISATEUR_API_BASE_URL ="http://localhost:8090/api/utilisateur/"
class UtilisateurDataService{
getUtilisateurByEmail(email){
    return axios.get(UTILISATEUR_API_BASE_URL+"/email/"+email);
}
}



export default new UtilisateurDataService();