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
    const [value, setValue] = useState('');
    const [update, setUpdate] = useState(null);


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return false;
        if (update === null) {
            setDepartments([...departments,{id: departments.length + 1, name: value}]);
        }else {
            const updatedDepartments = [...departments];
            updatedDepartments.filter((x) => x.id === update)[0].name = value;
            setDepartments(updatedDepartments);
            setUpdate(null);
        }
        setValue("");
    };

    const removeDepartment = (id) => {
        if (id) {
            setDepartments(departments.filter((x) => x.id !== id))
        }
    };

    const editDepartment = (department) => {
            setUpdate(department.id);
            setValue(department.name);
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
                        <FormDefault onSubmit={handleSubmit}>
                            <FlexWrapper>
                                <FormInputDefault type="text" placeholder="Department Name" value={value} onChange={e => setValue(e.target.value)} required/>
                            </FlexWrapper>
                            <FlexWrapper justifyContent="flex-end">
                                <FormInputButton type="submit" value={update === null ? 'Create' : 'Update'} />
                            </FlexWrapper>
                        </FormDefault>
                    </Column>
                    <Column gap="6">
                        <FlexWrapper flexDirection="row">
                            {
                                departments.length > 0 &&
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
                                                <td>
                                                    <span onClick={() => editDepartment(department)}>Edit</span> -
                                                    <span onClick={() => removeDepartment(department.id)}>Remove</span>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                    </tbody>
                                </TableDefault>
                            }
                            {
                                departments.length <= 0 &&
                                    <p>You have not added any department yet.</p>
                            }
                        </FlexWrapper>
                    </Column>
                </FlexWrapper>
            </Layout>
        </Fragment>
    );

}

export default Departments;