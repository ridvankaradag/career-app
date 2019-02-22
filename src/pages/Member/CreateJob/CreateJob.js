import React, { Fragment } from "react";
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

    const handleSubmit = (e) => {
        e.preventDefault();
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
                                <FormInputDefault type="text" placeholder="Title" required/>
                            </FlexWrapper>
                            <FlexWrapper>
                                <FormInputSelect>
                                    <FormInputOption>Choose Department</FormInputOption>
                                    <FormInputOption>Engineering</FormInputOption>
                                    <FormInputOption>Product</FormInputOption>
                                    <FormInputOption>Sales & Marketing</FormInputOption>
                                </FormInputSelect>
                            </FlexWrapper>
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