import React, {Fragment, useState} from "react";
import {Link} from "react-router-dom";
import Avatar from "../../../assets/images/avatar.jpg";
import Header from "../../../components/Header/Header";
import Layout from "../../../components/Layout/Layout";
import { connect } from "react-redux"
import { getAllUsers } from "../../../js/actions/index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenAlt } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

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
                <Header headerColor="#d1d8e0">
                <Layout>
                    <div style={{height:`6rem`,position: 'relative', padding: `0 1.5rem`,}}>
                        <div className="header_content">
                            <div className="header_left">
                                <Link to="/dashboard">
                                    <h4 style={{ color: '#f50057',marginTop:'inherit', fontSize: '3rem'}}>Users</h4>
                                    </Link>
                                </div>
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
                        <div className="col-lg-12">
                                <div className="card transparent-card">
                                    <div className="card-body p-0">
                                    {
                                    users.length > 0 &&
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Name</th>
                                                    <th>Surname</th>
                                                    <th>Address</th>
                                                    <th>Phone number</th>
                                                    <th>Actions</th>
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
                                                            <span><FontAwesomeIcon icon={faPenAlt} /></span>
                                                            <span className="ml-2"><FontAwesomeIcon icon={faTrash} /></span>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                            </tbody>
                                        </table>
                                    }
                                    {
                                        users.length <= 0 &&
                                            <p>You have not added any users yet.</p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </Fragment>
    );

}
export default connect(mapStateToProps,mapDispatchToProps)(Users);