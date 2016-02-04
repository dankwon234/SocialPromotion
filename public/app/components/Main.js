import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Home from '../components/pages/Home'

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