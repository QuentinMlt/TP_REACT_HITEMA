import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import User from '../component/User';
import UserService from '../service/user.service';


export default class UsersList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    async componentDidMount() {
        let response = await UserService.list();
        this.setState({users: response});
    }

    render() {
        let {users} = this.state;
        return <div className="container">
                    <h1>Liste des utilisateurs</h1>

                    <div className="row">
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">Nom</th>
                            <th scope="col">Email</th>
                            <th scope="col">Téléphone</th>
                            <th scope="col">Nb. tâches</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => {
                                return <User user={user} />
                            })}
                        </tbody>
                        </table>
                    </div>
                </div>
    }
}
