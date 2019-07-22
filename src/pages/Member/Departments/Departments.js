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
import { deleteDepartment } from "../../../js/actions/index";
import { updateDepartment } from "../../../js/actions/index";
import { addDepartment } from "../../../js/actions/index";


const mapStateToProps = state => {
    return { 
         departments_list: state.departments 
    };
};

function mapDispatchToProps(dispatch) {
    return {
        deleteDepartment: id => dispatch(deleteDepartment(id)),
        updateDepartment: updatedDepartment => dispatch(updateDepartment(updatedDepartment)),
        addDepartment : newDept => dispatch(addDepartment(newDept))
    };
}

function Departments(props) {
    const { departments_list, deleteDepartment, updateDepartment, addDepartment, addJob } = props;
    const departments = departments_list;
    
 

    //const [departments, setDepartments] = useState(departments_list);
    const [value, setValue] = useState('');
    const [update, setUpdate] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return false;
        if (update === null) {
            const newDept = {};
            newDept.id = departments.length + 1;
            newDept.name = value;

            addDepartment(newDept);
           //setDepartments([...departments,{id: departments.length + 1, name: value}]);
       }
       else 
       {
            const updatedDepartment = {};
            updatedDepartment.id = update.id;
            updatedDepartment.name = value;

            updateDepartment(updatedDepartment);

            //const a = [...departments];
            //a.filter((x) => x.id === update)[0].name = value;
            //setDepartments(a);

            setUpdate(null);
       }
      setValue("");
    };

    const removeDepartment = (id) => {
        if (id) {  
            deleteDepartment(id);
            //setDepartments(departments.filter((x) => x.id !== id))
        }
    };

    const editDepartment = (department) => {
        setUpdate(department);
        setValue(department.name);
    };

    return (
        <Fragment>
            <Header headerColor="#2c3e50">
                <Layout>
                    <HeaderTextLink to="/dashboard">
                        Departments
                    </HeaderTextLink>
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

export default connect(mapStateToProps,mapDispatchToProps)(Departments);