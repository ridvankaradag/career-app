import React, {Component, Fragment} from "react";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import HeaderTextLink from "../../components/HeaderTextLink/HeaderTextLink";
import PageHeader from "../../components/PageHeader/PageHeader";
import PageTitle from "../../components/PageTitle/PageTitle";
import PageSubTitle from "../../components/PageSubTitle/PageSubTitle";
import PageContent from "../../components/PageContent/PageContent";
import PageFooter from "../../components/PageFooter/PageFooter";
import Button from "../../components/Button/Button";
import { connect } from "react-redux";
import { getJob } from "../../js/actions/index";
import Column from "../../components/Column/Column";



function mapDispatchToProps(dispatch) {
    return {
        getJob : id => dispatch(getJob(id))
    };
}
class JobDetail extends Component {
    componentDidMount(){
        const { getJob } = this.props;
        getJob(this.props.match.params.id);
      }
    render(props) {
        const jobData  = this.props.location.jobParams.job;
        console.log(jobData)
        return (
            <Fragment>
                <Header>
                    <Layout> 
                        
                            <HeaderTextLink to="/">
                                { jobData.company_name }
                            </HeaderTextLink>
                    
                    
                    </Layout>
                </Header>
                <Layout>
                    <PageHeader>
                        <div style={{    
                            backgroundPosition: '50%',
                            backgroundSize: 'contain',
                            width: '8.125rem',
                            height: '8.125rem',
                            overflow: 'hidden',
                            borderRadius: '0.625rem',
                            margin: 'auto',
                            marginBottom: '1.875rem',
                            marginTop: '3.75rem',
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: '#fff',
                            }}></div>
                        <PageTitle>{ jobData.position }</PageTitle>
                        <h6 style={{
                            opacity: '.5',
                            fontSize: '1.5rem',
                            letterSpacing: '.1125rem',
                            marginBottom: '3.75rem',
                            textAlign: 'center',
                            textTransform: 'uppercase',
                            fontWeight: '700',
                            }}>
                                { jobData.company_name }
                            </h6>
                        <PageSubTitle>{ jobData.location }</PageSubTitle>
                    </PageHeader>
                    <PageContent>
                        <div className="row" style={{flexDirection: 'row'}}>
                        <div className="col-md-12 col-lg-4">
                                <div style={{
                                        lineHeight: '1.6em'
                                    }}>
                                        <div style={{
                                            backgroundColor: '#fff',
                                            boxShadow: '0 0.125rem 0.9375rem 0 rgba(0,0,0,.1)',
                                            padding: '1.25rem',
                                            marginBottom: '1.125rem',
                                        }}>
                                            <div style={{display:'flex',flexDirection:'column', alignItems: 'center'}}>
                                                <h6>Company</h6>
                                                <div style={{marginBottom: 15}}>{jobData.company_name}</div>
                                                <h6>Location</h6>
                                                <div  style={{marginBottom: 15}}>{jobData.location}</div>
                                                <h6>Type of Position</h6>
                                                <div>{jobData.job_type ==='full_time' && 'Full Time'}</div>

                                            </div>
                                        </div>
                                        <Button href={"mailto:" + jobData.company_email} >Apply</Button>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-8">
                                <div style={{
                                    lineHeight: '1.6em'
                                }}>
                                    <div style={{
                                        backgroundColor: '#fff',
                                        boxShadow: '0 0.125rem 0.9375rem 0 rgba(0,0,0,.1)',
                                        
                                        padding: '3.125rem',
                                        marginBottom: '1.875rem',
                              
                                    }}>
                                     <div className="job-emcasa" dangerouslySetInnerHTML={{__html: jobData.description}}></div>

                                    </div>
                                </div>
                            </div>
                            
                    </div>
                    </PageContent>
                    <PageFooter>
                        
                    </PageFooter>
                </Layout>
            
            </Fragment>
        )
    }
}

export default connect (null, mapDispatchToProps)(JobDetail);