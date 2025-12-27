import axios from "axios";
const API_URL ="http://localhost:8080/api/feedback";
export const addFeedback =(feedback)=>{
    return axios.post(API_URL, feedback);
};
export const getFeedback =()=>{
    return axios.get(API_URL);
};