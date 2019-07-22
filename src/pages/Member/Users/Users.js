import React, {Fragment, useState} from "react";
import Header from "../../../components/Header/Header";
import Layout from "../../../components/Layout/Layout";
import HeaderTextLink from "../../../components/HeaderTextLink/HeaderTextLink";
import Column from "../../../components/Column/Column";
import FlexWrapper from "../../../components/FlexWrapper/FlexWrapper";
import FormInputDefault from "../../../components/FormInputDefault/FormInputDefault";
import FormInputButton from "../../../components/FormInputButton/FormInputButton";
import FormDefault from "../../../components/FormDefault/FormDefault";
import TableDefault from "../../../components/TableDefault/TableDefault";
import { connect } from "react-redux"
import { getAllUsers } from "../../../js/actions/index";

function mapDispatchToProps(dispatch) {
    return {
        getAllUsers: user => dispatch(getAllUsers(user)),
    };
}

const mapStateToProps = state => {
    return { 
         users: state.users 
    };
};
function Users(props) {
    const { users }= props;
    return (
        <Fragment>
        <Header headerColor="#2c3e50">
            <Layout>
                <HeaderTextLink to="/dashboard">
                    Users
                </HeaderTextLink>
            </Layout>
        </Header>
        <Layout>
            <FlexWrapper>
              
                <Column gap="12">
                    <FlexWrapper flexDirection="row">
                        {
                            users.length > 0 &&
                            <TableDefault>
                                <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Surname</th>
                                    <th>Address</th>
                                    <th>Phone number</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    users.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.surname}</td>
                                            <td>{item.address}</td>
                                            <td>{item.phone}</td>
                                            <td>
                                                <span>Edit</span> -
                                                <span> Remove</span>
                                            </td>
                                        </tr>
                                    ))
                                }
                                </tbody>
                            </TableDefault>
                            }
                        {
                            users.length <= 0 &&
                                <p>You have not added any users yet.</p>
                        }
                    </FlexWrapper>
                </Column>
            </FlexWrapper>
        </Layout>
    </Fragment>
    );

}
export default connect(mapStateToProps,mapDispatchToProps)(Users);