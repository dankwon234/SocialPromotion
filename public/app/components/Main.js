import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Home from '../components/pages/Home'
import Posts from '../components/pages/Posts'

class Main extends React.Component {

	initialState(){
		return {

		}
	}

	defaultProps(){
		return {

		}
	}

	render(){
		var content = null;

		if (this.props.page == 'home'){
			content = <Home />;
		} 
		if (this.props.page == 'posts'){
			content = <Posts />;
		} 


		return (
			<div>
				<Nav />

				{content}

				<Footer />
			</div>
		)
	}
}

export default Main;