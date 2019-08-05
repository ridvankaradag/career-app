import React, {Component, Fragment } from 'react';
import Header from '../../components/Header/Header';
import Layout from '../../components/Layout/Layout'
import CategoryWrapper from '../../components/CategoryWrapper/CategoryWrapper';
import CategoryHeader from '../../components/CategoryHeader/CategoryHeader';
import BoxWrapper from '../../components/BoxWrapper/BoxWrapper';
import Box from '../../components/Box/Box';
import BoxTitle from '../../components/BoxTitle/BoxTitle';
import BoxSubTitle from '../../components/BoxSubtitle/BoxSubTitle';
import HeaderText from '../../components/HeaderText/HeaderText';
import HeaderDescription from '../../components/HeaderDescription/HeaderDescription';

import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        jobs : state.jobsList
    };
};

class Home extends Component {
    render() { 
 
        const { jobs } = this.props;
        return (
            <Fragment>
                <Header>
                    <Layout>
                        <HeaderText>Trabalhe na EmCasa</HeaderText>
                        <HeaderDescription>
                            Estamos revolucionando o mercado de real estate no Brasil. Temos oportunidades para trabalho remoto ou nas nossas sedes no RJ e SP. Conheça mais:
                        </HeaderDescription>
                    </Layout>
                </Header>
                <Layout>
                    <CategoryWrapper>
                        <CategoryHeader>Product</CategoryHeader>
                        <BoxWrapper>
                            {
                                jobs.map((job,key)=>{
                                    let newTo = { 
                                        pathname: `job/${ job.id }`, 
                                        jobParams: {job} 
                                      }
                                      return <Box  to={newTo} key={key} >
                                                <BoxTitle>{job.position}</BoxTitle>
                                                <BoxSubTitle>{job.company_name}</BoxSubTitle>
                                                </Box>
                                                ;
                                })
                            }
                        
                        </BoxWrapper>
                    </CategoryWrapper>
                  
                </Layout>
            </Fragment>
        );
    }
}

export default connect(mapStateToProps)(Home);
