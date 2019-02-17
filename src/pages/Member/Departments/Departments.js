import React, {Fragment, useState} from "react";
import Header from "../../../components/Header/Header";
import Layout from "../../../components/Layout/Layout";
import HeaderText from "../../../components/HeaderText/HeaderText";
import Column from "../../../components/Column/Column";
import FlexWrapper from "../../../components/FlexWrapper/FlexWrapper";
import FormInputDefault from "../../../components/FormInputDefault/FormInputDefault";
import FormInputButton from "../../../components/FormInputButton/FormInputButton";
import FormDefault from "../../../components/FormDefault/FormDefault";
import TableDefault from "../../../components/TableDefault/TableDefault";

function Departments() {

    const [departments, setDepartments] = useState([{id: 1, name: 'Engineering' }, {id: 2, name: 'Product'}]);

    const addDepartment = (event) => {
        event.preventDefault();
        console.log(event);
    };

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
                    <Column gap="5" rightSpace="1">
                        <FormDefault onSubmit={event => addDepartment()}>
                            <FlexWrapper>
                                <FormInputDefault type="text" placeholder="Department Name"/>
                            </FlexWrapper>
                            <FlexWrapper justifyContent="flex-end">
                                <FormInputButton type="submit" value="Create" />
                            </FlexWrapper>
                        </FormDefault>
                    </Column>
                    <Column gap="6">
                        <FlexWrapper flexDirection="row">
                            <TableDefault>
                                <thead>
                                    <tr>
                                        <th>Department</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    departments.map((department) => (
                                        <tr key={department.id}>
                                            <td>{department.name}</td>
                                            <td><span>Edit</span> - <span>Remove</span></td>
                                        </tr>
                                    ))
                                }
                                </tbody>
                            </TableDefault>
                        </FlexWrapper>
                    </Column>
                </FlexWrapper>
            </Layout>
        </Fragment>
    );

}

export default Departments;