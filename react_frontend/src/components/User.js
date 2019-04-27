import React, {Component} from 'react';

class User extends Component {
    render() {
        const { data, handleRemove } = this.props;
        return (
            <tr>
                <td>{data.name}</td>
                <td>{data.username}</td>
                <td>{data.email}</td>
                <td className={"btn-t"}><button onClick={e => handleRemove(data.id)}className={"btn-2"}>Delete</button></td>
            </tr>
        );
    }
}

export default User;