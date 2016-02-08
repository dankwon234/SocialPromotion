import React from 'react'
import PostCard from '../../components/PostCard'


class Posts extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			posts: [
				{id:1, type:'Job', title:'Hiring Software Intern', company:'Bedrocket Media', description:'This is the description. This is the description. This is the description. This is the description. This is the description.', location:'NYC', tags:['programming', 'Angular JS'], image:'catherine.png'},
				{id:2, type:'Rental', title:'Apartment Available', company:'', description:'This is the description. This is the description. This is the description. This is the description. This is the description.', location:'NYC', tags:['programming', 'Angular JS'], image:'catherine.png'},
				{id:3, type:'Event', title:'Startup Investing Workshop', company:'Bedrocket Media', description:'This is the description. This is the description. This is the description. This is the description. This is the description.', location:'NYC', tags:['programming', 'Angular JS'], image:'catherine.png'},
				{id:4, type:'Misc', title:'Software Intern', company:'Bedrocket Media', description:'This is the description. This is the description. This is the description. This is the description. This is the description.', location:'NYC', tags:['programming', 'Angular JS'], image:'catherine.png'}
			]
		};
	}


	render(){
		var sections = this.state.posts.map(function(post){
			return (
				<PostCard key={post.id} post={post}/>
			)

		});

		return (
	        <section>
	            <div className="container">
	                <div className="row">

	                    <div className="col-md-4 col-sm-6 bg-gray career-form xs-margin-top-ten">

	                    	<div style={{textAlign:'center'}}>
		                        <p className="title-small text-uppercase black-text"><strong>Instructor</strong></p>
		                        <img style={{width:120, borderRadius:60, marginBottom:24, border:'1px solid #ddd'}} src={'/images/dankwon.jpg'} />
				                <p className="text-large black-text letter-spacing-2 no-margin-bottom">Dan Kwon</p>
                                <p className="margin-one" style={{textAlign:'left'}}>
	                                This is the bio
                                </p>
	                    	</div>
	                    </div>

	                    <div className="col-md-7 col-md-offset-1">

	                        <div className="tab-style1">
	                            <div className="row">
	                                <div className="col-md-12 col-sm-12">
	                                    <ul className="nav nav-tabs nav-tabs-light text-left">
	                                        <li className="active"><a href="#tab_sec1" data-toggle="tab">Opportunities</a></li>
	                                        <li><a href="#tab_sec2" data-toggle="tab">Marketplace</a></li>
	                                        <li><a href="#tab_sec3" data-toggle="tab">Events</a></li>
	                                    </ul>
	                                </div>
	                            </div>
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

	                                <div className="tab-pane fade in" id="tab_sec2">
	                                    <div className="row">
	                                        <div className="col-md-12 col-sm-12">
						                        <div className="panel-group toggles-style3">

						                        </div>
	                                        </div>
	                                    </div>
	                                </div>

	                                <div className="tab-pane fade in" id="tab_sec3">
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
		)
	}

}

export default Posts;