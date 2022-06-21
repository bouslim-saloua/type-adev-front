import axios from "axios";
const API_URL = "http://localhost:8090/api/soutien/";


const saveSoutien=(soutien)=>{
return axios.post(API_URL+"save", {
    soutien
});
}

const modifierSoutien=(soutien) =>{
    return axios.put(API_URL+ "update", {
        soutien
    });
}

const getAll=()=>{
    return axios.get(API_URL + "soutiens");
}

const deleteSoutien =(id)=>{
    return axios.delete(API_URL+ {id})
}


const getSommeTotal=()=>{
    return axios.get(API_URL+"sommeTotal")
}

const SoutienService={
saveSoutien,
modifierSoutien,
getAll,
deleteSoutien,
getSommeTotal
}

export default SoutienService;
