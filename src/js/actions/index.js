import axios from 'axios';
export function addArticle(payload) {
    return { type: "ADD_ARTICLE", payload}
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