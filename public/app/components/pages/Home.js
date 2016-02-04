import React from 'react'
import SectionCard from '../../components/SectionCard'

class Home extends React.Component {

	constructor(props, context) {
//		console.log('Home: constructor');
		super(props, context);
		this.updateVisitor = this.updateVisitor.bind(this);
		this.state = {
			sections: [
				{title:'First Section', description:'This is the description', image:'node.png'},
				{title:'Second Section', description:'This is the description', image:'ios.jpg'},
				{title:'Third Section', description:'This is the description', image:'node.png'}
			],
			visitor: {
				name: '',
				email: '',
				city: ''
			}
		};
	}

	signUp(event){
		event.preventDefault();
		console.log('Sign Up');
	}

	updateVisitor(event){
		console.log('updateVisitor: '+event.target.value)
		this.state.visitor[event.target.id] = event.target.value;
	}


	render(){

		var sections = this.state.sections.map(function(section){
			return (
				<SectionCard section={section}/>
			)

		});

		return(
		    <div className="bg-gray">
		        <div style={{background:'url(/images/bg-city.jpg)', backgroundRepeat:'no-repeat', paddingBottom:12}}>

		        	<div className="container" style={{paddingTop:140}}>
			        	<div className="row">
				        	<div className="col-md-5">
				        		<div style={{padding:36, textAlign:'center'}}>
				        			<h2 style={{color:'#fff'}}>iOS Development Immersive</h2>
				        		</div>
				        	</div>

				        	<div className="col-md-4 col-md-push-3">
				        		<div className="front-panel">
				        			<h2>Sign Up</h2>
									The Full Stack 10-week coding bootcamp builds real projects for launch 
				        			<input onChange={this.updateVisitor} id="name" type="text" placeholder="Name" style={{background:'#f9f9f9', borderRadius:3, marginTop:9}} className="form-control" />
				        			<input type="text" placeholder="Email" style={{background:'#f9f9f9', borderRadius:3, marginTop:9}} className="form-control" />
				        			<select className="form-control" style={{background:'#f9f9f9', height:36}}>
				        				<option>New York</option>
				        				<option>Boston</option>
				        				<option>San Francisco</option>
				        			</select>
				        			<h3 style={{marginBottom:12}}>Next Cohort Begins March 7th</h3>
									<a onClick={this.signUp} href="#" className="btn-primary btn btn-small button btn-round xs-margin-bottom-five">Learn More</a>

				        		</div>
				        	</div>
			        	</div>
		        	</div>
		        </div>

		        <section className="bg-gray">
		            <div className="container">
		                <div className="row">
		                    <div className="col-md-4">
		                        <span className="title-large text-uppercase letter-spacing-1 font-weight-600 black-text">Cutting Edge Courses</span>
		                        <div className="separator-line-thick bg-fast-pink no-margin-lr"></div>
		                        <p>
		                        	The Full Stack conducts development courses that are relevant in the startup and 
		                        	tech world today. We focus on the most up-to-date frameworks and libraries such as React, 
		                        	Angular, and Node JS. Our students are always prepared for rapid changes in the 
		                        	industry and are ready to work in tech after a course.
		                        </p>
		                        <p>
		                        	Our courses come in three varieties: part time, online, and immersive. The part time courses are designed for 
		                        	busy professionals who are looking to become more well-versed in technology. The online courses are for those
		                        	who learn at their own pace. The immersive courses are for those who aim to change careers and become 
		                        	professional programmers.
		                        </p>
								<a href="/courses" className="btn-success btn btn-small button btn-round xs-margin-bottom-five">View All Courses</a>
		                    </div>

		                    <div className="col-md-7 col-md-offset-1">

		                        <div className="tab-style1">

		                            <div className="tab-content">

		                                <div className="tab-pane med-text fade in active" id="tab_sec1">
		                                    <div className="row">
		                                        <div className="col-md-12 col-sm-12">
							                        <div className="panel-group toggles-style3">

							                        	{sections}

							                        </div>
				                                </div>
		                                    </div>
		                                </div>


		                            </div>
		                        </div>



		                    </div>
		                </div>
		            </div>
		        </section>



		    </div>


		)
	}
}

export default Home;