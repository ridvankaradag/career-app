import { ADD_ARTICLE } from "../constants/action-types";
import { DATA_LOADED } from "../constants/action-types";
import { DELETE_JOB } from "../constants/action-types";
import { DELETE_DEPARTMENT } from "../constants/action-types";
import { UPDATE_DEPARTMENT } from "../constants/action-types";
import { ADD_DEPARTMENT } from "../constants/action-types";
import { NEW_JOB } from "../constants/action-types";
import { GET_ALL_USERS } from "../constants/action-types";
import { GET_JOB } from "../constants/action-types";

const initialState = {
  articles: [ {title: "React Redux Tutorial for Beginners", id: 1}],
  remoteArticles: [],
  jobsList: [
  {id: 1, position: 'Software engineer', job_type: 'full_time', department: 'Engineering', company_website: 'https://www.loopcv.pro/', company_twitter: '@loopcv', company_email:'info@loopcv.pro',salary:`Not disclosed`, company_name: 'LOOPCV',location: 'Barcelona', description: '<p>Loopcv, is a new saas startup providing services in the growing tech recruiting industry. Our company offers automation and customization as a service to power the job search of both individuals and businesses.We are in search of a great individual to help us make our product even better!</p>' },
  {id: 2, position: 'Fullstack Developer', job_type: 'full_time', department: 'Engineering', company_website: 'https://www.honestly.com/', company_twitter: '@honestlyhq', company_email:'hr@company.com',salary:`14 000$`, company_name: 'HONESTLY', location: 'Cologne, Germany', description: '<p>This goes out to all of you who want to find a purpose in what they are doing. Honestly is a fast growing SaaS tech company that specializes in employee engagement. Working together with top brands all over the world, Honestly aims to shake up the business world by embracing the human side of business and developing meaningful relationships between companies and its employees and customers. Only by putting people first and emphasizing the relationship a business has with its employees and customers, organizations can create real value based on feedback. Therefore, we are profoundly convinced of our vision to create a world where people trust organizations as they would their best friend.</p>' },
  {id: 3, position: 'Frontend Developer', job_type: 'full_time', department: 'Engineering', company_website: 'https://www.penni.io/', company_twitter: '', company_email:'hr@company.com',salary:``, company_name: 'PENNI.IO', location: ' København, Denmark', description: '<p>In Penni.io our ambition is to make the insurance sector more transparent. We are looking for talented frontend developers to join our growing company in Copenhagen.You will be working along very skilled colleagues and you will have high degree of responsibility. You will be part of our core team developing advanced solutions that solves relevant problems in the insurance space. You will have fun!</p>' },
  {id: 4, position: 'Vue JS Developer', job_type: 'full_time', department: 'Engineering', company_website: 'https://helloprint.com/', company_twitter: '@HelloprintUK', company_email:'hr@company.com',salary:``, company_name: 'HELLOPRINT', location: 'Rotterdam, Netherlands', description: '<p>As a Vue JS Developer at Helloprint you work on making our platform the easiest and biggest one on earth by making sure our customers have the best user experience they can imagine!Our team consists of several Frontend Developers already but can use more development capacity to further fuel our rapid growth. You will be working on imagining and building the world"s most disruptive print platform. Balancing the business need for fast growth with a sustainable & scalable frontend, with the ability to deliver high-quality code at a fast pace within a very dynamic environment and of course while working in great cooperation with the other developers.</p>' },
  {id: 5, position: 'Senior Front End Engineer', job_type: 'full_time', department: 'Engineering', company_website: 'https://www.homesnap.com/', company_twitter: '@Homesnap', company_email:'hr@company.com',salary:`14 000$`, company_name: 'HOMESNAP', location: 'Bethesda, MD, USA', description: '<p>We are looking for a Senior Front End Engineer who is motivated to combine the art of design with the art of programming. Responsibilities will include implementing visual elements and their behaviors with user interactions. You will work with both front-end and back-end web developers to build all client-side logic. You will also be bridging the gap between the visual elements and the server-side infrastructure, taking an active role on both sides, and defining how the application looks and functions.</p>' }],
  jobsDeleted: [],
  departments: [{id:1, name: 'Engineering'},{id:2, name: 'Product'}],
  departmentsDeleted:[],
  users: [{id:1, name: "elif", surname:"çilingir", address: "Istanbul", phone:"5065065555"}],
  job:[],

};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  if(action.type === DATA_LOADED){
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload)
    });
  }
  if(action.type === DELETE_JOB){
    return Object.assign({}, state, {
      jobsDeleted: state.jobsDeleted.concat(action.payload),
      jobsList: state.jobsList.filter(item => item.id !== action.payload)
    });
  }
  if(action.type === DELETE_DEPARTMENT){ 
    return Object.assign({}, state,{
      departmentsDeleted: state.departmentsDeleted.concat(action.payload),
      departments: state.departments.filter(item => item.id !== action.payload)
    });
  }
  if(action.type === UPDATE_DEPARTMENT){ 
    return Object.assign({}, state,{
        departments: state.departments.map(item => {
          if (item.id === action.payload.id) {
            item.name = action.payload.name;
            return item;
          }
          return item;
        }),
    });
  }
  if(action.type === ADD_DEPARTMENT){
    return Object.assign({}, state,{
      departments: state.departments.concat(action.payload)
    })
  }
  if(action.type === NEW_JOB){
    return Object.assign({}, state,{
      jobsList: state.jobsList.concat(action.payload)
    });
  }
  if(action.type === GET_ALL_USERS){
    console.log("reducer get all user");
  }
  if(action.type === GET_JOB){ 
    console.log("reducer GET_JOB");
  }
  return state;
}
export default rootReducer;