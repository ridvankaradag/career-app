import React, {Component, Fragment } from 'react';
import ListTest from '../../../components/ListTest/ListTest';
import Post from '../../../components/Post/Post';
import { connect } from "react-redux";

import uuidv1 from "uuid";
import { addArticle } from "../../../js/actions/index";




  function mapDispatchToProps(dispatch) {
    return {
      addArticle: article => dispatch(addArticle(article))
    };
  }
class Home extends Component {
    constructor() {
        super();
        this.state = {
          title: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
      }
      handleSubmit(event) {
        event.preventDefault();
        const { title } = this.state;
        const id = uuidv1();
        this.props.addArticle({ title, id });
        this.setState({ title: "" });
      }
    render() { 
        const { title } = this.state;
        return (
            <Fragment>
            
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="title">Title</label>
                            <input
                              type="text"
                              id="title"
                              value={title}
                              onChange={this.handleChange}
                            />
                        </div>
                        <button type="submit" >
                          SAVE
                        </button>
                      </form>
                      <h2>Articles</h2>
                        <ListTest />
                        <h2>Post API</h2>
                        <Post />

            
            </Fragment>
        );
    }
}

export default connect(null, mapDispatchToProps) (Home);
