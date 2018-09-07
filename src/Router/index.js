import {HashRouter,Route,Switch,Redirect} from 'react-router-dom';
import React,{Component} from 'react';

import MainPage from '../Pages/MainPage/index.js';
class Router extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
           <HashRouter>
               <Switch>
                   <Route path="/mainpage" component={MainPage}></Route>
                   <Redirect to="/mainpage"/>
               </Switch>
           </HashRouter>
		)
	}
}

export default Router;
