import React, {Component} from 'react';

class AddUser extends Component {
    render() {
        return (
            <div>
                <form action={"http://localhost:8000/add"} method={"POST"}>
                    <input type={'text'}  name={'name'} placeholder={'Name'} onChange={this.handleChange}/>
                    <input type={'text'}  name={'username'} placeholder={'UserName'} onChange={this.handleChange}/>
                    <input type={'email'}  name={'email'} placeholder={'Email'} onChange={this.handleChange}/>
                    <input type={'submit'} name={'Add User'} value={'Add User'}  className={"btn"}/>
                </form>
            </div>
        );
    }
}

export default AddUser;