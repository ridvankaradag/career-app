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



function mapDispatchToProps(dispatch) {
    return {
        getJob : id => dispatch(getJob(id))
    };
}
class JobDetail extends Component {
    componentDidMount(){
        const { getJob  } = this.props;
        getJob(this.props.match.params.id);
        console.log(this.props)
       
  
      }
    render(props) {

        return (
            <Fragment>
                <Header>
                    <Layout>
                        <HeaderTextLink to="/">
                            Company Title
                        </HeaderTextLink>
                    </Layout>
                </Header>
                <Layout>
                    <PageHeader>
                        <PageTitle>Back-End Engineer</PageTitle>
                        <PageSubTitle>Product - Remote</PageSubTitle>
                    </PageHeader>
                    <PageContent>
                        <div className="job-emcasa">
                            <p>A EmCasa nasceu para <strong>transformar a experiência de comprar
                            e vender um imóvel no Brasil. </strong>Nós usamos tecnologia, inteligência de dados e um
                            modelo de negócio inovador para redefinir o mercado brasileiro de Real Estate em favor dos
                            compradores e vendedores.</p><p>Consumidores precisam lidar com serviços de baixa qualidade,
                            falta de transparência, documentação complexa, burocracia, problemas de segurança e diversos
                            outros. Além disso, devem pagar altas taxas de 5% a 6% sobre o valor do imóvel.</p><p>Todos
                            os dias, tempo e dinheiro são desperdiçados por causa das ineficiências atuais, o que é
                            péssimo para o país - A EmCasa surgiu para resolver este problema e transformar o setor
                            através da tecnologia, produto e um modelo de negócios inovador.</p>
                            <h3>Responsabilidades</h3>
                            <p>Como Back-End engineer você será responsável pelo desenvolvimento das nossas APIs e
                                serviços internos
                                que atendem as aplicações dos nossos clientes e times internos.</p>
                            <p>Nosso stack é composto por Elixir, Phoenix, Absinthe (GraphQL), PostgreSQL &amp; ELK.
                                Além das aplicações, você também será responsável por manter em conjunto com o time
                                nossa infra-estrutura,
                                desde a arquitetura até a manutenção.</p>
                            <h3>Requisitos</h3>
                            <ul>
                                <li>Conhecimento em Elixir e/ou linguagens funcionais;</li>
                                <li>Conhecer PostgreSQL (ou similar);</li>
                                <li>Experiência com webapps &amp; seu foundation: HTTP, TCP/IP, segurança, browser e
                                    outros clientes;
                                </li>
                                <li>Conhecer testes unitários &amp; end-to-end da aplicação;</li>
                                <li>Ter conhecimento de boas práticas de arquitetura de aplicação e organização de
                                    código;
                                </li>
                                <li>Ter comprometimento e ownership em organizar o seu próprio tempo e entregas, não
                                    fazemos micromanagement;
                                </li>
                                <li>Acreditar em decisões orientadas a dados - e ser responsável por ajudar a coletar,
                                    planejar e mantê-los;
                                </li>
                            </ul>
                            <h3>Diferenciais</h3>
                            <ul>
                                <li>Experiência com ELK (ElasticSearch + Logstash + Kibana);</li>
                                <li>Experiência com ferramentas de monitoramento;</li>
                                <li>Experiência com data-pipelines e/ou aplicações com machine learning;</li>
                                <li>Experiência com infra-estrutura na AWS (ou similar);</li>
                                <li>Experiência em startups e times de produto;</li>
                            </ul>
                            <p>Somos open-source! Cheque nosso repositório</p>
                        </div>
                    </PageContent>
                    <PageFooter>
                        <Button href="mailto:a@b.com">Apply</Button>
                    </PageFooter>
                </Layout>
            </Fragment>
        )
    }
}

export default connect (null, mapDispatchToProps)(JobDetail);