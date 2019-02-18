import React, { Fragment } from "react";
import Header from "../../../components/Header/Header";
import Layout from "../../../components/Layout/Layout";
import HeaderText from "../../../components/HeaderText/HeaderText";

function CreateJob() {

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
            </Layout>
        </Fragment>
    );

}

export default CreateJob;