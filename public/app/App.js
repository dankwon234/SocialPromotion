import React from 'react'
import ReactDOM from 'react-dom'
import Main from './components/Main'

var path = window.location.pathname.replace('/', ''); // http://localhost:3000/
// var page = (path.length == 0) ? 'home' : path.split('/')[0];

var page = 'home';
var slug = null;
if (path.length > 0){
	var parts = path.split('/');
	page = parts[0];
	if (parts.length > 1)
		slug = parts[1];
}


class App extends React.Component {
	render(){
		return (
			<Main page={page} />
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))