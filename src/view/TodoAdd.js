import React, {Component} from 'react';
import TodoService from '../service/todo.service';

export default class TodoAdd extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            title:null,
        }
    }

    handleChange(e){
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    async handleSubmit(e){
        e.preventDefault();

        let {title} = this.state;

        let data = {
            title: title,
            completed: 0, // Chaque tâche ajouté aura un statut : En cours
            userId: 5
        }

        //ajout de la tâche
        await TodoService.create(data);
        //redirection vers /todos
        this.props.history.push('/todos');

    }

    render() {
        return <div className="container">
            <h1>Ajouter une tâche</h1>

            <form onSubmit={(event) => this.handleSubmit(event)}>

                <div className="form-group">
                    <label>Titre</label>
                    <input type="text" id="title" className="form-control" required
                        onChange={(event) => this.handleChange(event)}/>
                </div>
                <button type="submit" className="btn btn-success mt-2">Ajouter</button>
            </form>

        </div>
    }

}
