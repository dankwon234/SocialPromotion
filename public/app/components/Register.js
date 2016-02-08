import React from 'react'
import SPActionCreator from '../actions/SPActionCreator'
import AccountStore from '../stores/AccountStore'

class Register extends React.Component {

	constructor(props, context) {
		super(props, context);
		this.updateVisitor = this.updateVisitor.bind(this);
		this.signUp = this.signUp.bind(this);
		this.refreshData = this.refreshData.bind(this);
		this.selectLocation = this.selectLocation.bind(this);
		this.state = {
			visitor: {
				name: '',
				email: '',
				city: 'new york'
			}
		};
	}

	componentDidMount(){
//		console.log('componentDidMount')
		AccountStore.addChangeListener(this.refreshData);
	}

	refreshData(){
		var currentUser = AccountStore.getCurrentUser();
		console.log('REFRESH DATA: '+JSON.stringify(currentUser));
		if (currentUser.id != null)
			window.location.href = '/posts';
		
	}

	signUp(event){
		event.preventDefault();
//		console.log('Sign Up: '+JSON.stringify(this.state.visitor));
		if (this.state.visitor.name.length == 0){
			alert('Please enter your NAME')
			return
		}

		if (this.state.visitor.email.length == 0){
			alert('Please enter your EMAIL')
			return
		}

		SPActionCreator.registerProfile(this.state.visitor);
	}

	selectLocation(event){
		this.state.visitor['location'] = event.target.value;
//		console.log('Select Location: '+JSON.stringify(this.state.visitor));
	}

	updateVisitor(event){
		this.state.visitor[event.target.id] = event.target.value;
	}

	render(){
		return (
			<div className="front-panel">
				<h2>Apply</h2>
				<hr />
				Apply for our beta and be among the first on the platform when we launch in Spring.
				<input onChange={this.updateVisitor} id="name" type="text" placeholder="Name" style={{background:'#f9f9f9', borderRadius:3, marginTop:14}} className="form-control" />
				<input onChange={this.updateVisitor} id="email" type="text" placeholder="Email" style={{background:'#f9f9f9', borderRadius:3, marginTop:9}} className="form-control" />
				<select onChange={this.selectLocation} className="form-control" style={{background:'#f9f9f9', height:36, marginBottom:32}}>
					<option>New York</option>
					<option>Boston</option>
					<option>San Francisco</option>
				</select>
				<a onClick={this.signUp} href="#" className="btn-primary btn btn-small button btn-round xs-margin-bottom-five">Submit</a>
			</div>

		);
	}

}

export default Register;