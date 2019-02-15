import React, {Fragment} from "react";
import Header from "../../../components/Header/Header";
import Layout from "../../../components/Layout/Layout";
import HeaderText from "../../../components/HeaderText/HeaderText";
import Column from "../../../components/Column/Column";
import FlexWrapper from "../../../components/FlexWrapper/FlexWrapper";

function Departments() {

    return (
        <Fragment>
            <Header headerColor="#2c3e50">
                <Layout>
                    <HeaderText to="/">
                        Departments
                    </HeaderText>
                </Layout>
            </Header>
            <Layout>
                <FlexWrapper>
                    <Column gap="4"/>
                    <Column gap="8"/>
                </FlexWrapper>
            </Layout>
        </Fragment>
    );

}

export default Departments;