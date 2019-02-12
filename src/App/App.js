import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header';
import Layout from '../components/Layout'
import DepartmentArea from  '../components/DepartmentArea';
import DepartmentHeader from '../components/DepartmentHeader';
import JobList from '../components/JobList';
import Job from '../components/Job';
import JobHeader from '../components/JobHeader';
import JobPlace from '../components/JobPlace';
import CompanyHeader from '../components/CompanyHeader';
import CompanyDescription from '../components/CompanyDescription';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header headerColor="blue" backgroundImage="https://jobs.emcasa.com/static/team-bb9f0ac327b6b8e2a6036003840f6c55.jpg">
          <Layout>
            <CompanyHeader>Trabalhe na EmCasa</CompanyHeader>
            <CompanyDescription>
              Estamos revolucionando o mercado de real estate no Brasil. Temos oportunidades para trabalho remoto ou nas nossas sedes no RJ e SP. Conheça mais:
            </CompanyDescription>
          </Layout>
        </Header>
        <Layout>
            <DepartmentArea>
              <DepartmentHeader>Product</DepartmentHeader>
              <JobList>
                <Job href="/data-engineer">
                  <JobHeader>Data Engineer</JobHeader>
                  <JobPlace>Remote</JobPlace>
                </Job>
                <Job href="/data-engineer">
                  <JobHeader>Data Engineer</JobHeader>
                  <JobPlace>Remote</JobPlace>
                </Job>
                <Job href="/data-engineer">
                  <JobHeader>Data Engineer</JobHeader>
                  <JobPlace>Remote</JobPlace>
                </Job>
              </JobList>
            </DepartmentArea>
            <DepartmentArea>
              <DepartmentHeader>Product</DepartmentHeader>
              <JobList>
                <Job href="/data-engineer">
                  <JobHeader>Data Engineer</JobHeader>
                  <JobPlace>Remote</JobPlace>
                </Job>
              </JobList>
            </DepartmentArea>
            <DepartmentArea>
              <DepartmentHeader>Product</DepartmentHeader>
              <JobList>
                <Job href="/data-engineer">
                  <JobHeader>Data Engineer</JobHeader>
                  <JobPlace>Remote</JobPlace>
                </Job>
                <Job href="/data-engineer">
                  <JobHeader>Data Engineer</JobHeader>
                  <JobPlace>Remote</JobPlace>
                </Job>
                <Job href="/data-engineer">
                  <JobHeader>Data Engineer</JobHeader>
                  <JobPlace>Remote</JobPlace>
                </Job>
                <Job href="/data-engineer">
                  <JobHeader>Data Engineer</JobHeader>
                  <JobPlace>Remote</JobPlace>
                </Job>
              </JobList>
            </DepartmentArea>
        </Layout>
      </div>
    );
  }
}

export default App;
