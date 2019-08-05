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
  {id: 5, position: 'Vue JS Developer', job_type: 'full_time', department: 'Engineering', company_website: 'https://helloprint.com/', company_twitter: '@HelloprintUK', company_email:'hr@company.com',salary:``, company_name: 'HELLOPRINT', location: 'Rotterdam, Netherlands', description: '<p><strong>Medior &amp; Senior Vue JS Developer</strong></p> <p>As a Vue JS Developer at Helloprint you work on making our platform the easiest and biggest one on earth by making sure our customers have the best user experience they can imagine!</p> <p>Our team consists of several Frontend Developers already but can use more development capacity to further fuel our rapid growth. You will be working on imagining and building the world"s most disruptive print platform.Balancing the business need for fast growth with a sustainable &amp; scalable frontend, with the ability to deliver high-quality code at a fast pace within a very dynamic environment and of course while working in great cooperation with the other developers.</p> <h2>What you do</h2> <ul><li>You will be working with a modern technology stack: Vue.js, HTML, CSS / SASS, PHP, etc.</li> <li>Developing in JavaScript, no matter what framework - you fully understand the fundamentals and principles of JavaScript;</li> <li>Applying the best tech stack for the given situation;</li> <li>You will be working in close collaboration with other developers, team members and colleagues;</li> <li>Our way of doing stuff is the SCRUM way: a product owner, Scrum Master, one week sprint, a code review system, a daily stand-up at 10:00 AM</li></ul> <h2>What we are looking for</h2> <ul><li>You are able to develop a complete frontend implementation on a modern stack;</li> <li>At least 5 years of frontend programming experience (senior);</li> <li>At least 3 years of proven experience with JavaScript and JavaScript frameworks, including Vue.js (other frameworks are a plus);</li> <li>You are eager to learn and expand your &amp; the team"s knowledge. Be a team player - the SCRUM way;</li> <li>You speak and write English fluently;</li> <li>It’s a plus if you are experienced with e-commerce environments.</li></ul> <h2>What we offer</h2> <ul><li>A competitive compensation, including a bonus arrangement for exceptional outperformance. Because when we win, we win together;</li> <li>Unique opportunity to work on the architecture and development of the next big platform;</li> <li>A unique challenge at one of Europe’s fastest growing e-commerce companies;</li> <li>A fast-paced learning curve: you get big challenges instead of tasks to work on, which makes you learn faster;</li> <li>A unique culture with 21 nationalities, the average age of 28 and an environment where freedom and responsibility are central;</li> <li>The most beautiful office in Rotterdam, right on the Witte de Withstraat, the best street in Rotterdam it’s just 5 minutes from Rotterdam Central Station;Compensation for travel costs;</li> <li>Don"t worry about food, that"s on us; not only lunch, but also breakfast and dinner. Enough to keep you going all day;</li> <li>24/7 access to our gym;</li> <li>Opportunities to grow, even into our Leadership Team. We don’t look for age or background. If you are excellent, you will improve quickly;</li> <li>The opportunity to make yourself better: Courses, events and more, if you want to develop, you have that opportunity;</li> <li>The best hardware and software to work with, and a laptop of your preference (Apple or Windows);</li> <li>Seriously: The best business bubbles, Team Events, our HelloSkybar™, do we need to say more?</li></ul>' },
  {id: 6, position: 'Front End Architect', job_type: 'full_time', department: 'Engineering', company_website: 'https://careers.upwork.com/homepage', company_twitter: '@Upwork', company_email:'hr@company.com',salary:`14 000$`, company_name: 'UPWORK', location: 'Santa Clara or San Francisco', description: '<p>Upwork ($UPWK) is the world"s largest freelancing website. Each year $1.7 billion of work happens through Upwork, allowing businesses to get more done and helping professionals break free of traditional time and place boundaries and work anytime, anywhere on projects they love. At Upwork, you"ll help build on this momentum. Together, we"ll create economic and social value on a global scale, providing a trusted online workplace for businesses to connect with extraordinary talent and work without limits. </p> <p>Are you a software architect who is passionate about designing and building a highly performant, robust framework for developers to create amazing user experiences on and helping impact the professional lives of millions of freelancers and clients around the world? Do you relish solving challenging problems? Do you enjoy identifying potential scalability issues, implementing engineering standard methodologies, and coming up with creative solutions to both technical and organizational challenges? If so, we’d love to hear from you.</p> <p>We’re looking for an extraordinary Front end Architect to drive the design and evolve our front end platform for all our web applications across the company. As the Front End Architect, you will work with our platform and application engineering teams, spanning key domains (Search, Visitor Site, Job Applications,  Messaging, Time Tracking, &amp; Monetization are just a few of them) to develop the front end stack for building these applications. You need to have a consistent track record of delivering highly performant web applications. </p> <h4>Your responsibilities</h4> <ul><li>Define the vision and strategy to develop our frontend platform for application teams.</li> <li>Work closely with backend, applications and design teams to design and evolve our frontend platform, core platform features, and reusable components.</li> <li>Collaborate with feature and component teams during both design and development phases to ensure adherence to UI architectural standards and best practices.</li> <li>Define and drive adoption of design patterns, coding and quality standards and software development processes.</li> <li>Drive a culture of quality, technical curiosity, continuous improvement, and data-driven decision-making.</li> <li>Act in a technical leadership capacity: Identify new and emerging technologies for adoption; Mentor junior engineers, new team members, perform code reviews and applying technical expertise to challenging programming and design problems.</li> <li>Champion and lead key multi-functional initiatives.Provide technical guidance and coaching to engineers to continuously improve design quality.</li></ul> <p><strong>What it takes to catch our eye:</strong></p> <ul><li>10+ years of software development experience. </li> <li>7+ years hands-on experience with cutting web technologies (HTML5, CSS, JavaScript), application servers and tooling (npm, Webpack, Jenkins, GraphQL, etc.)</li> <li>3+ years of hands-on experience building applications on Node.js.</li> <li>Experience creating a front end testing infrastructure and CI workflow</li> <li>Excellent written and verbal interpersonal skills. Our teams are widely distributed, and you will be required to communicate with technical and non-technical audiences across different cultures. </li> <li>Ability to serve as a technical lead of multiple software development teams, if required.</li> <li>Polished communication skills and track record advocating for compelling product design and the underpinning methodologies that deliver great design.</li> <li>Ability to practice in a fast-moving, data-driven, collaborative environment that has a bias towards delivery and MVP approaches.</li> <li>Desire to roll up the sleeves and write code for critical company projects.</li></ul> <p><strong>How to really knock our socks off:</strong></p> <ul><li>You don’t need to rely on any frameworks, like Vue or React, because you can build one from scratch.</li> <li>You have built many responsive sites, but also created adaptive components or pages, when needed. You have built sites that met WCAG requirements.</li> <li>Strong focus on the customer and the business, coupled with a burning desire to learn, respond to feedback and grow. We’re looking for people who thrive on learning new technologies and don’t believe in one-size-fits-all solutions.</li></ul> <p><strong>Come change how the world works.</strong></p> <p>At Upwork you’ll help shape the future of work. From our offices in San Francisco, Mountain View and Chicago, together we’re creating exciting new opportunities for a world of professionals. You’ll be part of a vibrant culture built on shared values: Inspire a boundless future of work, Put our community first, Have a bias towards action, and Build amazing teams. Along the way you’ll have fun and enjoy the perks of a people-first company: Work from Home Wednesday"s, daily breakfast and lunch, regular in-office happy hours, top-notch benefits … and more. Check out <a href="https://www.themuse.com/companies/upwork">Upwork’s spotlight on The Muse</a> for a glimpse of our daily work/life balance.</p> <p>Upwork is proudly committed to recruiting and retaining a diverse and inclusive workforce. As an Equal Opportunity Employer, we never discriminate based on race, religion, color, national origin, gender (including pregnancy, childbirth, or related medical condition), sexual orientation, gender identity, gender expression, age, status as a protected veteran, status as an individual with a disability, or other applicable legally protected characteristics.</p>' }],
  jobsDeleted: [],
  departments: [{id:1, name: 'Engineering'},{id:2, name: 'Product'}],
  departmentsDeleted:[],
  users: [{id:1, name: "elif", surname:"çilingir", address: "Istanbul", phone:"5065065555"}],
  job:
  {id: 1, position: '', job_type: '', department: '', company_website: '', company_twitter: '', company_email:'',salary:``, company_name: '',location: '', description: '' },

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
    return Object.assign({}, state,{
      job: state.jobsList.map(item => {
        if (item.id === parseInt(action.payload) ) {
          return item;
        }
      }),
    });

  }
  return state;
}
export default rootReducer;