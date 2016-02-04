import React from 'react'

class Nav extends React.Component {

	render(){
		return (
	        <nav className="navbar navbar-default navbar-fixed-top nav-transparent overlay-nav sticky-nav nav-white nav-dark-transparent static-sticky" role="navigation">
	            <div className="container">
	                <div className="row">
	                    <div className="col-md-2 pull-left">
	                    	<a className="logo-light" href="/">
		                    	<img style={{maxWidth:200}} alt="" src="/images/logo-white.png" />
	                    	</a>
	                    </div>

	                    <div className="navbar-header col-sm-8 col-xs-2 pull-right">
	                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
	                    </div>

	                    <div className="col-md-10 no-padding-right accordion-menu text-right">
	                        <div className="navbar-collapse collapse">
		                            <ul id="accordion" className="nav navbar-nav navbar-right panel-group">
		                                <li className="dropdown panel">
		                                    <a href="/about" className="dropdown-toggle collapsed">About</a>
		                                </li>
		                                <li className="dropdown panel">
		                                    <a href="/join" className="dropdown-toggle collapsed">Join</a>
		                                </li>
		                                <li className="dropdown panel">
		                                    <a onClick={this.openModal} href="#" className="dropdown-toggle collapsed">Login</a>
		                                </li>
		                            </ul>

	                        </div>
	                    </div>
	                </div>
	            </div>


	        </nav>		
	    )
	}

}

export default Nav;