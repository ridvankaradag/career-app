import React, {Fragment, useState} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HeaderTextLink from "../../../components/HeaderTextLink/HeaderTextLink";
import Layout from "../../../components/Layout/Layout";
import Header from "../../../components/Header/Header";
import FlexWrapper from "../../../components/FlexWrapper/FlexWrapper";
import Column from "../../../components/Column/Column";
import TableDefault from "../../../components/TableDefault/TableDefault";


function JobList() {
    const [jobs, setJobs] = useState([{id: 1, title: 'Frontend Engineer – Customer Solutions', department: 'Engineering', companyTitle: 'glovo',location: 'Barcelona', typeOfPosition:'full-time', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' },
                                      {id: 2, title: 'Front-End Developer (HTML, CSS, Vue.js, Animation)', department: 'Engineering', companyTitle: 'limesharp', location: 'London, UK', typeOfPosition:'full-time', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' },
                                      {id: 3, title: 'Remote Senior VueJS Engineer', department: 'Engineering', companyTitle: 'codelitt', location: 'Mami, Florida', typeOfPosition:'full-time', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' },
                                      {id: 4, title: 'Senior Software Engineer / Architect', department: 'Engineering', companyTitle: 'grain', location: 'Singapore', typeOfPosition:'full-time', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' },
                                      {id: 5, title: 'Software Engineer', department: 'Engineering', companyTitle: 'smartpath', location: 'Atlanta, GA', typeOfPosition:'full-time', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' },
                                    ]);
    const [search,setSearch] = useState('');

    const removeJob = (id) => {
        if (id) {
            setJobs(jobs.filter((x) => x.id !== id))
        }
    };

    let filteredJobs = jobs.filter(
        (job) => {
            return job.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
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
                                            <th>Company Title</th>
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
                                                <td>{job.title}</td>
                                                <td>{job.department}</td>
                                                <td>{job.companyTitle}</td>
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

export default JobList;