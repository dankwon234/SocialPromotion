import React from 'react'

class Footer extends React.Component {

	render(){
		return (
	        <footer>

	            <div className="container-fluid bg-dark-gray footer-bottom">
	                <div className="container">
	                    <div className="row margin-three">
	                        <div className="col-md-6 col-sm-6 col-xs-12 copyright text-left letter-spacing-1 xs-text-center xs-margin-bottom-one">
	                            Copyright 2016 The Grid Media, LLC.
	                        </div>
	                        <div className="col-md-6 col-sm-6 col-xs-12 footer-logo text-right xs-text-center">
	                            <a href="/">
	                            	<img src="/images/logo-light-gray.png" alt=""/>
	                            </a>
	                        </div>
	                    </div>
	                </div>
	            </div>

	        </footer>			
		)

	}

}

export default Footer;