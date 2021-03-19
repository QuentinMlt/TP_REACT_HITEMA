import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import TodoService from '../service/todo.service';


export default class TodoDetails extends Component{

    constructor(props) {
        super(props);
        this.state = {
            todo: {}
        }
    }

    async componentDidMount() {
        let {id} = this.props.match.params;
        let response = await TodoService.detail(id);
        this.setState({todo: response.data});
    }

    async handleDelete(){
        let {todo} = this.state;
        await TodoService.delete(todo.id);
        // redirection
        this.props.history.push('/todos');
    }

    render() {
        let {todo} = this.state;
        if (todo.completed === false) {
            todo.completed = "En cours";
        }
        if(todo.completed === true){
            todo.completed = "Terminée"
        }
        return <div className="container">
            <h1>Nom de la tâche - {todo && todo.title}</h1>
            <p>Statut : {todo.completed}</p>
            <Link to={`/todos/${todo.id}/modifier`} className="btn btn-success me-2">Modifier l'annonce</Link>
            <button className="btn btn-danger" onClick={() => this.handleDelete()}>Supprimer</button>
        </div>
    }
}