import React, { Fragment, useState } from "react";
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '../member.css'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import draftToMarkdown from 'draftjs-to-markdown';
import Header from "../../../components/Header/Header";
import Layout from "../../../components/Layout/Layout";
import HeaderTextLink from "../../../components/HeaderTextLink/HeaderTextLink";
import { connect } from "react-redux";
import { newJob } from "../../../js/actions/index";


function mapDispatchToProps(dispatch) {
    return {
        newJob: addedJob => dispatch(newJob(addedJob))
    };
}

function CreateJob(props) {
    const { newJob } = props;
    const [jobs, setJobs] = useState([]);
    const [location, setLocation] = useState('');
    const [position, setPosition] = useState('');
    const [salary, setSalary] = useState('');
    const [job_type, setJobType] = useState('');
    const [department, setDepartment] = useState('');
    const [company_name, setCompanyName] = useState('');
    const [company_web, setCompanyWebsite] = useState('');
    const [company_twitter, setCompanyTwitter] = useState('');
    const [company_email, setCompanyEmail] = useState('');
    const [detail, setDetail] = useState(EditorState.createEmpty());
    const [edit, setEdit] = useState('');
    const [flag, setFlag] = useState(0);
    const [job_count, setJobCount] = useState(5);



    const handleSubmit = (e) => {
        e.preventDefault();
    
        if(department === ""){
            alert("Please choose a department!");
        } else if(job_type === ""){
            alert("Please choose a job type: Full-time, Part-time, Contractor or Internshsip.")
        }else{
            if(flag){

                let description = "";
                description = draftToHtml(convertToRaw(edit.getCurrentContent()));
                let endOfParagraph = description.substring(3,7);
                if(endOfParagraph === "</p>"){
                    alert("Please add a description!");
                }else
                {
                    const addedJob = {
                     id: job_count + 1,
                     position: position,
                     job_type: job_type,
                     department: department,
                     company_website: company_web, 
                     company_twitter: company_twitter, 
                     company_email: company_email,
                     salary: salary, 
                     company_name: company_name, 
                     location: location,
                     detail: description,
                    };
                    
                    newJob(addedJob);
                    setJobCount(job_count + 1)
             
                }
            }else{
                alert("Please add a description!");
            }
        }
    };

    const editorChange = (editorState) => {
        setDetail(editorState);
        setEdit(editorState);
        setFlag(1);
      //console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
      
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
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-12 col-lg-8">
                            <div className="card" style={{marginTop:10}}>
                                <div className="card-body">
                                    <h5 className="card-title">The Job</h5>
                                    <div className="form-group">
                                        <div className="form-check form-check-inline">
                                            <input type="radio" name="job_type" value="full_time" onChange={e => setJobType(e.target.value)}/>
                                            <label className="form-check-label ml-1">Full-time</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input type="radio" name="job_type" value="part_time" onChange={e => setJobType(e.target.value)} />
                                            <label className="form-check-label ml-1">Part-time</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input type="radio" name="job_type" value="contractor" onChange={e => setJobType(e.target.value)} />
                                            <label className="form-check-label ml-1">Contractor</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input type="radio" name="job_type"  value="internship" onChange={e => setJobType(e.target.value)}/>
                                            <label className="form-check-label ml-1">Internship</label>
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
                                      <input type="text" className="form-control"  value={salary}  onChange={e => setSalary(e.target.value)} placeholder="ex. 80.000 - 120.000$ / year" />
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
                            <input type="submit" value='Post your job' className="btn btn-success btn-lg btn-block mt-5 mb-5" />
                        </div>
                    </div>
                </div>
            </form>
        </Fragment>
    );

}

export default connect(null,mapDispatchToProps)(CreateJob);