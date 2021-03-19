import React, {Component} from 'react';
import TodoService from '../service/todo.service';


export default class TodoModify extends Component{

    constructor(props) {
        super(props);
        this.state = {
            todo: {}, 
            title: "",
            completed: ""
        }
    }

    async componentDidMount() {
        let {id} = this.props.match.params; 
        let response = await TodoService.detail(id);
        this.setState({
            todo: response.data,
            title: response.data.title,
            completed: response.data.completed

        });

    }

    handleChange(e){
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    async handleSubmit(e){
        e.preventDefault();
        let {todo, title, completed} = this.state;

        let data = {
            title: title,
            completed: completed
        }

        await TodoService.update(todo.id, data)
        this.props.history.push(`/todos/${todo.id}`);
    }
    

    render() {
        let {todo, title} = this.state;
       return <div className="container">
           <h1>Modification de la tâche - {todo.title}</h1> {/* ne pas oublier le todo. car si on affiche le title simple le titre va changer quand nous changerons le input*/}

           <form onSubmit={(e) => this.handleSubmit(e)}>

                <div className="form-group">
                    <label>Titre</label>
                    <input type="text" className="form-control" id="title" required value={title} onChange={(e) => this.handleChange(e)}/>
                </div>

                <div className="form-group">
                    <label>Statut</label>
                    <select className="form-select" id="completed" required onChange={(e) => this.handleChange(e)}>
                        <option selected>Statut</option>
                        <option value="0">En cours</option>
                        <option value="1">Terminée</option>
                    </select>
                </div>

                <button className="btn btn-success mt-2" type="submit">Modifier</button>

           </form>
       </div>
    }
}