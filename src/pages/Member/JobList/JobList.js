import React, {Fragment, useState} from "react";
import {Link} from "react-router-dom";
import Layout from "../../../components/Layout/Layout";
import Header from "../../../components/Header/Header";
import { connect } from "react-redux";
import { deleteJob } from "../../../js/actions/index";
import Avatar from "../../../assets/images/avatar.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faPenAlt } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const mapStateToProps = state => {
 //   console.log(state.jobsList);
    return { 
        jobsList: state.jobsList 
    };
};


function mapDispatchToProps(dispatch) {
    return {
        deleteJob: id => dispatch(deleteJob(id))
    };
}

function JobList(props) {
    const { jobsList, deleteJob } = props;
    const [jobs, setJobs] = useState(jobsList);
    const [search,setSearch] = useState('');
   // const [jobsDeleted,setJobsDeleted] = useState([]);

    const removeJob = (id) => {
        if (id) {
            deleteJob(id);
           setJobs(jobs.filter((x) => x.id !== id))
            //console.log(jobsDeleted);
        }
    };

    let filteredJobs = jobs.filter(
        (job) => {
            return job.position.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        }
    );

    return (
        <Fragment>
              <Header headerColor="#d1d8e0">
                <Layout>
                    <div style={{height:`6rem`,position: 'relative', padding: `0 1.5rem`,}}>
                        <div className="header_content">
                            <div className="header_left"><Link to="/dashboard"><h4 style={{ color: '#f50057',marginTop:'inherit', fontSize: '3rem'}}>Jobs</h4></Link></div>
                            <div className="header_right">
                                <ul>
                                    <li className="icon">
                                        <a className="user_info">
                                            <img src={Avatar}></img>
                                            <span>Elif Çilingir</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="navbar" >
                        <ul className="menu">
                            <li className="menu_item">
                             <Link to="/dashboard/departments">Departments</Link>
                            </li>
                            <li className="menu_item">
                                <Link to="/dashboard/jobs">Jobs</Link>
                            </li>
                            <li className="menu_item">
                                <Link to="/dashboard/jobs/create">Post a Job</Link>
                            </li>
                            <li className="menu_item">
                                <Link  to="/dashboard/users">Users</Link>
                            </li>
                        </ul>
                    </div>
                </Layout>
            </Header>
            <div style={{    marginTop: `-1.5rem`,marginLeft: `0` }}>
                <div style={{
                    width: `100%`,
                    padding: `1.5rem 3rem 0`,
                    marginRight: `auto`,
                    marginLeft: `auto`,
                }}>
                    <div className="row">
                        <div className="col-auto">
                            <label className="sr-only" htmlFor="inlineFormInputGroup">Username</label>
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <FontAwesomeIcon icon={ faSearch }/> 
                                    </div>
                                </div>
                            <input className="form-control text-muted" id="inlineFormInputGroup"  type="text" value={search}  onChange={e => setSearch(e.target.value.substr(0,20))} placeholder="Search"/>    
                            </div>
                        </div>
                        <div className="col-lg-12">
                                <div className="card transparent-card">
                                    <div className="card-body p-0">
                                    {
                                        jobs.length > 0 &&
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Title</th>
                                                    <th>Department</th>
                                                    <th>Company Name</th>
                                                    <th>Company Email</th>
                                                    <th>Job Type</th>
                                                    <th>Salary</th>
                                                    <th>Website</th>
                                                    <th>Twitter</th>
                                                    <th></th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                filteredJobs.map((job) =>{
                                                    return <tr key={job.id}>
                                                    <td>{job.id}</td>
                                                    <td>{job.position}</td>
                                                    <td>{job.department}</td>
                                                    <td>{job.company_name}</td>
                                                    <td>{job.company_email}</td>
                                                    <td>{job.job_type}</td>
                                                    <td>{job.salary}</td>
                                                    <td>{job.company_website}</td>
                                                    <td>{job.company_twitter}</td>
                                                    <td><Link to={{pathname: "/", job: job}}><FontAwesomeIcon icon={faPenAlt} /></Link></td>
                                                    <td className="trash" onClick={() => removeJob(job.id)}><FontAwesomeIcon icon={faTrash} /></td>
                                                </tr>
                                                })
                                            }
                                            </tbody>
                                        </table>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );

}

export default connect(mapStateToProps, mapDispatchToProps)(JobList);