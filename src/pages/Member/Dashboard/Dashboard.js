import React, { Fragment } from "react";
import Layout from "../../../components/Layout/Layout";
import HeaderText from "../../../components/HeaderText/HeaderText";
import Header from "../../../components/Header/Header";
import FlexWrapper from "../../../components/FlexWrapper/FlexWrapper";
import BoxWrapper from "../../../components/BoxWrapper/BoxWrapper";
import Box from "../../../components/Box/Box";
import BoxTitle from "../../../components/BoxTitle/BoxTitle";

function Dashboard() {


    return (
        <Fragment>
            <Header headerColor="#2c3e50">
                <Layout>
                    <HeaderText to="/">
                        Dashboard
                    </HeaderText>
                </Layout>
            </Header>
            <Layout>
                <FlexWrapper>
                    <BoxWrapper>
                        <Box to="/dashboard/departments">
                            <BoxTitle>Departments</BoxTitle>
                        </Box>
                        <Box to="/dashboard/jobs">
                            <BoxTitle>Jobs</BoxTitle>
                        </Box>
                        <Box to="/dashboard/jobs/create">
                            <BoxTitle>Post a Job</BoxTitle>
                        </Box>
                    </BoxWrapper>
                </FlexWrapper>
            </Layout>
        </Fragment>
    );
}

export default Dashboard;