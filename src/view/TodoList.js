import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Todo from '../component/Todo';
import TodoService from '../service/todo.service';



export default class TodosList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        }
    }

    async componentDidMount() {
        let todos = await TodoService.list();
        console.log(todos);
        this.setState({todos: todos});
        
    }

    render() {
        let {todos} = this.state;
        return <div className="container">
            <h1>Listes des Tâches</h1>

            <Link className="btn btn-success" to="/todos/ajouter">Ajouter une Tâche</Link>

            <div className="row">
            {todos.map(todo => {
                return <div className="col-md-4">
                <Todo todo={todo}/>
            </div>
            })}
        </div>
    </div>
    }
}
