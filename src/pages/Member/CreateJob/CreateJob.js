import React, { Fragment, useState } from "react";
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '../member.css'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Header from "../../../components/Header/Header";
import Layout from "../../../components/Layout/Layout";
import HeaderTextLink from "../../../components/HeaderTextLink/HeaderTextLink";

function CreateJob() {

    const [jobs, setJobs] = useState([]);
    const [location, setLocation] = useState('');
    const [position, setPosition] = useState('');
    const [salary, setSalary] = useState('');
    const [department, setDepartment] = useState('');
    const [company_name, setCompanyName] = useState('');
    const [company_web, setCompanyWebsite] = useState('');
    const [company_twitter, setCompanyTwitter] = useState('');
    const [company_email, setCompanyEmail] = useState('');
    const [detail, setDetail] = useState(EditorState.createEmpty());

    const handleSubmit = (e) => {
        e.preventDefault();
        setJobs([...jobs,
            {   
                id: jobs.length + 1,
                location: location,
                position: position,
                salary: salary, 
                department: department,
                company_name: company_name, 
                company_web: company_web, 
                company_twitter: company_twitter, 
                company_email: company_email
            }
        ]);
        console.log(jobs);
    };

    const editorChange = (editorState) => {
        setDetail(editorState);
        //console.log(detail);
       // console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    };

    return (
        <Fragment>
            <Header headerColor="#2c3e50">
                <Layout>
                    <HeaderTextLink to="/dashboard">
                        Post a Job
                    </HeaderTextLink>
                </Layout>
            </Header>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 col-lg-8">
                            <div className="card" style={{marginTop:10}}>
                                <div className="card-body">
                                    <h5 className="card-title">The Job</h5>
                                    <div className="form-group">
                                        <div className="form-check form-check-inline">
                                            <input type="radio" name="job_type" value="full-time"/>
                                            <label className="form-check-label">Full-time</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input type="radio" name="job_type" value="part-time"/>
                                            <label className="form-check-label">Part-time</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input type="radio" name="job_type" value="contractor"/>
                                            <label className="form-check-label">Contractor</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input type="radio" name="job_type" value="internship"/>
                                            <label className="form-check-label">Internship</label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                      <label>Position*</label>
                                      <input type="text" className="form-control" value={position}  onChange={e => setPosition(e.target.value)} placeholder="ex. Front-end Developer" required/>
                                    </div>
                                    <div className="form-group">
                                      <label>Location</label>
                                      <input type="text" className="form-control" value={location} onChange={e => setLocation(e.target.value)} placeholder="ex. Paris, France"/>
                                    </div>
                                    <div className="form-group">
                                      <label>Salary</label>
                                      <input type="text" className="form-control"  value={salary}  onChange={e => setSalary(e.target.value)} placeholder="80.000 - 120.000$ /year" />
                                    </div>
                                    <div className="form-group">
                                        <label>Department*</label>
                                        <select className="form-control" defaultValue={department} onChange={e => setDepartment(e.target.value)} required>
                                          <option  value={0}>Choose Department</option>
                                          <option  value={1}>Engineering</option>
                                          <option  value={2}>Product</option>
                                          <option  value={3}>Sales & Marketing</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Description*</label>
                                        <Editor
                                            editorState={detail}
                                            toolbarClassName="draft_editor_toolbar"
                                            wrapperClassName="draft_editor_wrapper"
                                            editorClassName="draft_editor_text_area"
                                            onEditorStateChange={editorChange}
                                            toolbar={{
                                                options: ['inline', 'blockType', 'list', 'textAlign', 'link', 'emoji'],
                                            }}
                                            stripPastedStyles={true}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="card" style={{marginTop:10}}>
                                <div className="card-body">
                                    <h5 className="card-title">The Company</h5>
                                    <div className="form-group">
                                      <label>Name*</label>
                                      <input type="text" className="form-control" value={company_name} onChange={e => setCompanyName(e.target.value)} placeholder="ex. Glovo" required/>
                                    </div>
                                    <div className="form-group">
                                      <label>Website*</label>
                                      <input type="text" className="form-control" value={company_web} onChange={e => setCompanyWebsite(e.target.value)} placeholder="https://company.com" required/>
                                    </div>
                                    <div className="form-group">
                                      <label>Twitter</label>
                                      <input type="text" className="form-control" value={company_twitter} onChange={e => setCompanyTwitter(e.target.value)} placeholder="@company_com"/>
                                    </div>
                                    <div className="form-group">
                                      <label>E-Mail*</label>
                                      <input type="email" className="form-control" value={company_email} onChange={e => setCompanyEmail(e.target.value)} placeholder="hr@company.com" required/>
                                    </div>
                                </div>
                            </div>
                            <input type="submit" value='Create' className="btn btn-success btn-lg btn-block mt-5 mb-5" />
                        </div>
                    </div>
                </div>
            </form>
        </Fragment>
    );

}

export default CreateJob;