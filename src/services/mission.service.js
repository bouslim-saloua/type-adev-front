/**
 * MissionStage service
 * 
*/

import axios from "axios";
const API_URL = "http://localhost:8090/api/mission/";

const saveMissionByUserId = (userId, missionStageHolder) =>{
    return axios.post(API_URL + "save/" + userId,
        missionStageHolder
    );
}

const getAll = () =>{
    return axios.get(API_URL+ "missions")
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
const generateReport = (manifestationId) =>{
    return axios.get(API_URL + 'id/'+manifestationId);
}


const getMissionsByUserId = (id) =>{
    return axios.get(API_URL + 'missionsByUser/'+id);
}

const MissionService={
    getMissionsByUserId,
    saveMissionByUserId,
    getAll,
    generateReport,
    getCountAll,
    getCountAllAccepted,
    getCountAllRefused,
    getAllAccepted,
    getAllRefused,
    getAllInProgress,
    getCountAllInProgress
    
}

export default MissionService;