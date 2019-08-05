import React, { Fragment } from "react";
import {Link} from "react-router-dom";
import Layout from "../../../components/Layout/Layout";
import Header from "../../../components/Header/Header";
import FlexWrapper from "../../../components/FlexWrapper/FlexWrapper";
import BoxWrapper from "../../../components/BoxWrapper/BoxWrapper";
import Box from "../../../components/Box/Box";
import BoxTitle from "../../../components/BoxTitle/BoxTitle";
import Avatar from "../../../assets/images/avatar.jpg";
function Dashboard() {
    return (
        <Fragment>
            <Header headerColor="#d1d8e0">
                <Layout>
                    <div style={{height:`6rem`,position: 'relative', padding: `0 1.5rem`,}}>
                        <div className="header_content">
                            <div className="header_left"><h4 style={{ color: '#f50057',marginTop:'inherit', fontSize: '3rem'}}>Dashboard</h4></div>
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
                        <Box to="/dashboard/users">
                            <BoxTitle>Users</BoxTitle>
                        </Box>
                    
                    </BoxWrapper>
                </FlexWrapper>
            </Layout>
        </Fragment>
    );
}

export default Dashboard;