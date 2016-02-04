import React from 'react'

class SectionCard extends React.Component {

	render(){
		var interests = this.props.profile.interests.map(function(interest){
			return <span className="tag">{interest}</span>;

		});


		return (
	        <div className="panel panel-default" style={{paddingTop:24, background:'#fff'}}>
	            <div id="collapse-three-link1" className="panel-collapse collapse in">
	                <div className="panel-body">
	                    <div className="col-md-2 col-sm-2 col-xs-6 no-padding xs-margin-bottom-five">
	                    	<img src={'/images/'+this.props.profile.image} alt="" style={{border:'1px solid #ddd'}} className="white-round-border spa-packages-img"/>
	                    </div>
	                    <div className="col-md-9 col-sm-9 col-xs-12 sm-pull-right col-md-offset-1 no-padding">
	                    	<h2>{this.props.profile.name}</h2>
	                        <p>NYC | Angular JS Developer</p>
	                        {interests}
	                    </div>
	                </div>
	            </div>
	        </div>
		);
	}
}

export default SectionCard;