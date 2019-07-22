import axios from 'axios';


export function addArticle(payload) {
    return { type: "ADD_ARTICLE", payload}
  };

export function deleteJob(payload) {
  return { type: "DELETE_JOB", payload}
};

export function  deleteDepartment(payload){
    return { type: "DELETE_DEPARTMENT", payload}
};

export function  updateDepartment(payload){
    return { type: "UPDATE_DEPARTMENT", payload}
};

export function  addDepartment(payload){
    return { type: "ADD_DEPARTMENT", payload}
};

export function  newJob(payload){
    return { type: "NEW_JOB", payload}
};

export function  getAllUsers(payload){
    return { type: "GET_ALL_USERS", payload}
};

export function  getJob(payload){
    return { type: "GET_JOB", payload}
};
export function getData() {
    return function(dispatch){
        axios.get("https://istanbul.design/craftweek/public/api/crafts")
        .then((response)=>{
            dispatch({type: "DATA_LOADED", payload: response.data.crafts})
        })
        .catch((err)=>{
            //dispatch({type: "FETCH_CRAFTS_REJECTED",payload:err})
            console.log('data loaded errror')
        })
    }
}