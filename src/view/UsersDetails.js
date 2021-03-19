import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import UserService from '../service/user.service';

export default class UserDetails extends Component{

    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }

    async componentDidMount() {
        let {id} = this.props.match.params;
        let response = await UserService.detail(id);
        this.setState({user: response.data});
    }

    async handleDelete(){
        let {user} = this.state;
        await UserService.delete(user.id);
        this.props.history.push('/utilisateurs');
    }

    render() {
        let {user} = this.state;
        return <div className="container">
            <h1>Utilisateur - {user && user.name}</h1>
            <h2>Pseudo : {user.username}</h2>
            <h2>Email : {user.email}</h2>
            <button className="btn btn-danger" onClick={() => this.handleDelete()}>Supprimer</button>
        </div>
    }
}