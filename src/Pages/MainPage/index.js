import React,{Component} from 'react';
import {connect} from 'react-redux';

class  MainPage extends Component{
	constructor(props){
		super(props);
	}
	handleBtnClick=()=>{
		console.log("btn click!");
		this.props.dispatch({type:'TEST_SYNC'});
	}
	render(){
		return (
            <div>
                 <button onClick={this.handleBtnClick}>test</button>
            </div>
	    )
	}
}
export default connect()(MainPage);