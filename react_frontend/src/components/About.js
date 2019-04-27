import React, {Component} from 'react';
import axios from 'axios';

class About extends Component {
    state={
        about:""
    }
    componentDidMount() {
        fetch("http://localhost:8000/about.json")
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(result => {
                this.setState({
                    about : result,
                })
            })
    }

    render() {
        return (
            <div>
                <h3>{this.state.about}</h3>
            </div>
        );
    }
}

export default About;