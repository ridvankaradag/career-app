import React, { Fragment, useState } from "react";
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import '../member.css'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Header from "../../../components/Header/Header";
import Layout from "../../../components/Layout/Layout";
import HeaderText from "../../../components/HeaderText/HeaderText";
import FlexWrapper from "../../../components/FlexWrapper/FlexWrapper";
import Column from "../../../components/Column/Column";
import FormDefault from "../../../components/FormDefault/FormDefault";
import FormInputDefault from "../../../components/FormInputDefault/FormInputDefault";
import FormInputButton from "../../../components/FormInputButton/FormInputButton";
import FormInputSelect from "../../../components/FormInputSelect/FormInputSelect";
import FormInputOption from "../../../components/FormInputOption/FormInputOption";

function CreateJob() {

    const [jobs, setJobs] = useState([]);
    const [title, setTitle] = useState('');
    const [department, setDepartment] = useState('');
    const [detail, setDetail] = useState(EditorState.createEmpty());

    const handleSubmit = (e) => {
        //console.log(jobs);
        e.preventDefault();
        setJobs([...jobs,{id: jobs.length + 1, title: title, department: department}]);
        //console.log(jobs);
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
                    <HeaderText to="/">
                        Post a Job
                    </HeaderText>
                </Layout>
            </Header>
            <Layout>
                <FlexWrapper>
                    <Column gap={12} rightSpace={'5px'}>
                        <FormDefault onSubmit={handleSubmit}>
                            <FlexWrapper>
                                <FormInputDefault type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required/>
                            </FlexWrapper>
                            <FlexWrapper>
                                <FormInputSelect defaultValue={department} onChange={e => setDepartment(e.target.value)} required>
                                    <FormInputOption value={0}>Choose Department</FormInputOption>
                                    <FormInputOption value={1}>Engineering</FormInputOption>
                                    <FormInputOption value={2}>Product</FormInputOption>
                                    <FormInputOption value={3}>Sales & Marketing</FormInputOption>
                                </FormInputSelect>
                            </FlexWrapper>
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
                            <FlexWrapper justifyContent="flex-end">
                                <FormInputButton type="submit" value={null === null ? 'Create' : 'Update'} />
                            </FlexWrapper>
                        </FormDefault>
                    </Column>
                </FlexWrapper>
            </Layout>
        </Fragment>
    );

}

export default CreateJob;