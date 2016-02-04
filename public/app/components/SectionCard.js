import React from 'react'

class SectionCard extends React.Component {

	render(){
		return (
	        <div className="panel panel-default" style={{paddingTop:24, background:'#fff'}}>
	            <div id="collapse-three-link1" className="panel-collapse collapse in">
	                <div className="panel-body">
	                    <div className="col-md-2 col-sm-2 col-xs-6 no-padding xs-margin-bottom-five">
	                    	<img src={'/images/'+this.props.section.image} alt="" className="white-round-border no-border spa-packages-img"/>
	                    </div>
	                    <div className="col-md-9 col-sm-9 col-xs-12 sm-pull-right col-md-offset-1 no-padding">
	                    	<h4>{this.props.section.title}</h4>
	                        <p>{this.props.section.description}</p>
	                    </div>
	                </div>
	            </div>
	        </div>
		);
	}
}

export default SectionCard;