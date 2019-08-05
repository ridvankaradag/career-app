import React, {Fragment, useState} from "react";
import {Link} from "react-router-dom";
import Header from "../../../components/Header/Header";
import Layout from "../../../components/Layout/Layout";
import { connect } from "react-redux"
import { deleteDepartment } from "../../../js/actions/index";
import { updateDepartment } from "../../../js/actions/index";
import { addDepartment } from "../../../js/actions/index";
import Avatar from "../../../assets/images/avatar.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenAlt } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

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
            <Header headerColor="#d1d8e0">
                <Layout>
                    <div style={{height:`6rem`,position: 'relative', padding: `0 1.5rem`,}}>
                        <div className="header_content">
                            <div className="header_left"><Link to="/dashboard"><h4 style={{ color: '#f50057',marginTop:'inherit', fontSize: '3rem'}}>Departments</h4></Link></div>
                            <div className="header_right">
                                <ul>
                                    <li className="icon">
                                        <a className="user_info">
                                            <img src={Avatar}></img>
                                            <span>Elif Çilingir</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="navbar" >
                        <ul className="menu">
                            <li className="menu_item">
                             <Link to="/dashboard/departments">Departments</Link>
                            </li>
                            <li className="menu_item">
                                <Link to="/dashboard/jobs">Jobs</Link>
                            </li>
                            <li className="menu_item">
                                <Link to="/dashboard/jobs/create">Post a Job</Link>
                            </li>
                            <li className="menu_item">
                                <Link  to="/dashboard/users">Users</Link>
                            </li>
                        </ul>
                    </div>
                </Layout>
            </Header>
            <div style={{    marginTop: `-1.5rem`,marginLeft: `0` }}>
                <div style={{
                    width: `100%`,
                    padding: `1.5rem 3rem 0`,
                    marginRight: `auto`,
                    marginLeft: `auto`,
                }}>
                    <div className="row">
                        <div className="col-lg-12 col-xxl-12 col-xl-5">
                            <div className="row">
                                <div className="col-xl-12 col-sm-6 col-xxl-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 style={{marginBottom:20}}>New Department</h4>
                                            <form onSubmit={handleSubmit}>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="form-group">
                                                            <input type="text"  className="form-control bg-white text-muted"  placeholder="Department Name" value={value} onChange={e => setValue(e.target.value)}  required/>
                                                        </div>
                                                        <div class="text-right">
                                                            <button class="btn btn-primary btn-sl-lg"  type="submit" value={update === null ? 'Save' : 'Update'} >Save</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-12 col-xxl-12">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card transparent-card">
                                        <div className="card-body p-0">
                                        {
                                            departments.length > 0 &&
                                            <table>
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
                                                                <span className="action_icon" onClick={() => editDepartment(department)}><FontAwesomeIcon icon={faPenAlt} /> </span> 
                                                                <span className="action_icon ml-2" onClick={() => removeDepartment(department.id)}> <FontAwesomeIcon icon={faTrash} /></span>
                                                            </td>
                                                        </tr>
                                                    ))
                                                }
                                                </tbody>
                                            </table>
                                        }
                                        {
                                         departments.length <= 0 &&
                                             <p>You have not added any department yet.</p>
                                        }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            { /* <Layout>
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
            </Layout>*/}
        </Fragment>
    );

}

export default connect(mapStateToProps,mapDispatchToProps)(Departments);