import React, {Fragment} from "react";
import HeaderText from "../../../components/HeaderText/HeaderText";
import Layout from "../../../components/Layout/Layout";
import Header from "../../../components/Header/Header";


function JobList() {

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
            </Layout>
        </Fragment>
    );

}

export default JobList;