import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Todo extends Component{

    render() {
        let {todo} = this.props;
        if (todo.completed === false) {
            todo.completed = "En cours";
        }
        if(todo.completed === true){
            todo.completed = "Terminée"
        }
        return <div className="card mt-2 bg-dark text-white mb-1">
                    <div className="card-body">
                    <h5 className="card-title" style={{color: '#1abc9c'}}>{todo.title}</h5>
                    <p className="card-text" style={{fontWeight: 'bold'}}>Statut : {todo.completed}</p>
                    <p className="card-text" style={{color: '#2ecc71'}}>Appartient à {todo.user.name}</p>
                    <Link to={`/todos/${todo.id}`} className="btn btn-success me-2">Détails</Link>
                    </div>
                </div>
    }

}