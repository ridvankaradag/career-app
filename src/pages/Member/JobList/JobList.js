import React, {Fragment, useState} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HeaderText from "../../../components/HeaderText/HeaderText";
import Layout from "../../../components/Layout/Layout";
import Header from "../../../components/Header/Header";
import FlexWrapper from "../../../components/FlexWrapper/FlexWrapper";
import Column from "../../../components/Column/Column";
import TableDefault from "../../../components/TableDefault/TableDefault";


function JobList() {
    const [jobs, setJobs] = useState([{id: 1, title: 'Data Engineer', department: 'Engineering', companyTitle: 'Company Title', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' },
                                      {id: 2, title: 'Data Engineer', department: 'Engineering', companyTitle: 'Company Title', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' },
                                      {id: 3, title: 'Data Engineer', department: 'Engineering', companyTitle: 'Company Title', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' },
                                      {id: 4, title: 'Data Engineer', department: 'Engineering', companyTitle: 'Company Title', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' },
                                      {id: 5, title: 'Data Engineer', department: 'Engineering', companyTitle: 'Company Title', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' },
                                      {id: 6, title: 'Data Engineer', department: 'Engineering', companyTitle: 'Company Title', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' },
                                      {id: 7, title: 'Data Engineer', department: 'Engineering', companyTitle: 'Company Title', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' },
                                      {id: 8, title: 'Data Engineer', department: 'Engineering', companyTitle: 'Company Title', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' },
                                      {id: 9, title: 'Data Engineer', department: 'Engineering', companyTitle: 'Company Title', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' },
                                      {id: 10, title: 'Data Engineer', department: 'Engineering', companyTitle: 'Company Title', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'},
                                      {id: 11, title: 'Data Engineer', department: 'Engineering', companyTitle: 'Company Title', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'},
                                      {id: 12, title: 'Data Engineer', department: 'Engineering', companyTitle: 'Company Title', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'},
                                      {id: 13, title: 'Data Engineer', department: 'Engineering', companyTitle: 'Company Title', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'},
                                    ]);

    const removeJob = (id) => {
        if (id) {
            setJobs(jobs.filter((x) => x.id !== id))
        }
    };

    return (
        <Fragment>
            <Header headerColor="#2c3e50">
                <Layout>
                    <HeaderText to="/">
                        Jobs
                    </HeaderText>
                </Layout>
            </Header>
            <Layout>
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
                                            jobs.map((job) =>(
                                                <tr key={job.id}>
                                                    <td>{job.id}</td>
                                                    <td>{job.title}</td>
                                                    <td>{job.department}</td>
                                                    <td>{job.companyTitle}</td>
                                                    <td>{job.description}</td>
                                                    <td><Link to={{pathname: "/", job: job}}>Edit</Link></td>
                                                    <td className="btn-delete" onClick={() => removeJob(job.id)}>Delete</td>
                                                </tr>
                                            ))
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