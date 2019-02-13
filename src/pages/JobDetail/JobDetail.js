import React, { Component } from "react";

class JobDetail extends Component {
    render(props) {
        console.log(this.props.match.params.id);
        return (
            <h2>Hello Detail</h2>
        )
    }
}

export default JobDetail;