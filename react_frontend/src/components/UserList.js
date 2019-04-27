import React, {Component} from 'react';
import User from "./User";
import axios from "axios";

class UserList extends Component {
    constructor(props){
        super(props);
        this.state={
            user : []
        }
    }
    handleRemove = (id) =>{
            console.log("yha aagya");
            axios.delete("http://localhost:8000/data.json/" +id);
            // this.setState({
            //     students : this.state.students.filter(item => item.ID !== this.state.students.ID)
            // })
    }
    componentDidMount() {
        console.log("qqqqqqsasdasd21212");
        fetch('http://localhost:8000/data.json')
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(result => {
                console.log("result",result);
                this.setState({
                    user : result,
                })
            })
    }
    render() {
        const { user } = this.state;
        console.log(this.state.user);
        return (
            <div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Remove</th>
                    </tr>
                {
                    user.map(item => {
                        return(
                            <User data={item} key={item.id} handleRemove={this.handleRemove}/>
                        )
                    })
                }
                </table>
            </div>
        );
    }
}

export default UserList;