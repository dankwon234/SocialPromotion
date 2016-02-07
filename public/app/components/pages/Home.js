import React from 'react'
import SectionCard from '../../components/SectionCard'
import PostCard from '../../components/PostCard'
import SPActionCreator from '../../actions/SPActionCreator'

class Home extends React.Component {

	constructor(props, context) {
//		console.log('Home: constructor');
		super(props, context);
		this.updateVisitor = this.updateVisitor.bind(this);
		this.signUp = this.signUp.bind(this);
		this.selectLocation = this.selectLocation.bind(this);
		this.state = {
			posts: [
				{id:1, type:'Job', title:'Hiring Software Intern', company:'Bedrocket Media', description:'This is the description. This is the description. This is the description. This is the description. This is the description.', location:'NYC', tags:['programming', 'Angular JS'], image:'catherine.png'},
				{id:2, type:'Rental', title:'Apartment Available', company:'', description:'This is the description. This is the description. This is the description. This is the description. This is the description.', location:'NYC', tags:['programming', 'Angular JS'], image:'catherine.png'},
				{id:3, type:'Event', title:'Startup Investing Workshop', company:'Bedrocket Media', description:'This is the description. This is the description. This is the description. This is the description. This is the description.', location:'NYC', tags:['programming', 'Angular JS'], image:'catherine.png'},
				{id:4, type:'General', title:'Software Intern', company:'Bedrocket Media', description:'This is the description. This is the description. This is the description. This is the description. This is the description.', location:'NYC', tags:['programming', 'Angular JS'], image:'catherine.png'}
			],
			visitor: {
				name: '',
				email: '',
				city: 'new york'
			}
		};
	}

	signUp(event){
		event.preventDefault();
		console.log('Sign Up: '+JSON.stringify(this.state.visitor));
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
		console.log('Select Location: '+JSON.stringify(this.state.visitor));
	}

	updateVisitor(event){
		this.state.visitor[event.target.id] = event.target.value;
	}


	render(){

		var sections = this.state.posts.map(function(post){
			return (
				<PostCard key={post.id} post={post}/>
			)

		});

		return(
		    <div className="bg-gray">
		        <div style={{background:'url(/images/bg-city.jpg)', backgroundRepeat:'no-repeat', paddingBottom:12}}>

		        	<div className="container" style={{paddingTop:140}}>
			        	<div className="row">
				        	<div className="col-md-5">
				        		<div style={{padding:36, textAlign:'center'}}>
				        			<h2 style={{color:'#fff', fontSize:36}}>Curated Professional Network</h2>
				        			<hr />
				        			<p style={{color:'#fff', marginTop:12, fontSize:14}}>
										Social Promotion is a curated platform for young professionals, creatives,
										and high performing students. Find your next job, business partner, apartment,
										and more on Social Promotion.
				        			</p>
				        		</div>
				        	</div>

				        	<div className="col-md-4 col-md-push-3">
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
				        	</div>
			        	</div>
		        	</div>
		        </div>

		        <section className="bg-gray">
		            <div className="container">
		                <div className="row">
		                    <div className="col-md-4">
		                        <h1 style={{color:'#444'}}>Exclusive Opportunities</h1>
		                        <hr />
		                        <p>
		                        	Social Promotion will be a closed platform for exclusive job listings, business
		                        	partnerships, events, rentals and more. By curating our membership, we ensure that 
		                        	all content on SP is a legitimate opportunity with high performing individuals.
		                        </p>
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