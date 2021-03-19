import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class User extends Component{

    render() {
        let {user} = this.props;

        return  <tr>
                <td><Link to={`/utilisateurs/${user.id}`} style={{textDecoration: 'none', color: 'black', fontWeight: 'bold'}}>{user.name} {user.username}</Link></td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.nbrTodos}</td>
        </tr>
                
    }

}