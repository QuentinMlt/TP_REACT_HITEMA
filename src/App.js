import React, {Component} from 'react';
/**Import la classe component de react */
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Footer from './component/Footer';
import Header from './component/Header';
import TodoList from './view/TodoList';
import Home from './Home';
import TodoAdd from './view/TodoAdd';
import TodoDetails from './view/TodoDetails';
import TodoModify from './view/TodoModify';
import UsersList from './view/UsersList';
import UserDetails from './view/UsersDetails';
/**Import les classes BrowserRouter, Route de react-router-dom */


export default class App extends Component{

  /**Systeme de routing */
  render(){
    return <BrowserRouter>


    <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/todos" component={TodoList} />
        <Route exact path="/todos/ajouter" component={TodoAdd} />
        <Route exact path="/todos/:id" component={TodoDetails} />
        <Route exact path="/todos/:id/modifier" component={TodoModify} />

        <Route exact path="/utilisateurs" component={UsersList} />
        <Route exact path="/utilisateurs/:id" component={UserDetails} />
      </Switch>
    <Footer />

    </BrowserRouter>
  }
}