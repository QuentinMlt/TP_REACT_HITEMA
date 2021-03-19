import React, {Component} from 'react';
/**Import la classe component de react */
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './Home';
/**Import les classes BrowserRouter, Route de react-router-dom */


export default class App extends Component{

  /**Systeme de routing */
  render(){
    return <BrowserRouter>

      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>

    </BrowserRouter>
  }
}