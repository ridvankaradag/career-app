import React, {Fragment, useState} from "react";
import { BrowserRouter as Link } from "react-router-dom";
import HeaderTextLink from "../../../components/HeaderTextLink/HeaderTextLink";
import Layout from "../../../components/Layout/Layout";
import Header from "../../../components/Header/Header";
import FlexWrapper from "../../../components/FlexWrapper/FlexWrapper";
import Column from "../../../components/Column/Column";
import TableDefault from "../../../components/TableDefault/TableDefault";
import { connect } from "react-redux";
import { deleteJob } from "../../../js/actions/index";

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
            <Header headerColor="#2c3e50">
                <Layout>
                    <HeaderTextLink to="/dashboard">
                        Jobs
                    </HeaderTextLink>
                </Layout>
            </Header>
            <Layout>
                <input className="input_search" type="text" value={search}  onChange={e => setSearch(e.target.value.substr(0,20))} placeholder="Search..."/>
                <FlexWrapper>
                    <Column gap="12">
                        <FlexWrapper flexDirection="row">
                            {
                                jobs.length > 0 &&
                                <TableDefault>
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
                                            <th>Description</th>
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
                                                <td>{job.description}</td>
                                                <td><Link to={{pathname: "/", job: job}}>Edit</Link></td>
                                                <td className="btn-delete" onClick={() => removeJob(job.id)}>Delete</td>
                                            </tr>
                                            })
                                        }
                                        
                                    </tbody>
                                </TableDefault>
                            }

                        </FlexWrapper>
                    </Column>
                </FlexWrapper>
            </Layout>
        </Fragment>
    );

}

export default connect(mapStateToProps, mapDispatchToProps)(JobList);