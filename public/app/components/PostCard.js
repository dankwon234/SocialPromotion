import React from 'react'

class PostCard extends React.Component {

	truncateText(text, limit){
		if (text.length < limit)
			return text;

		text = text.substring(0, limit);
		return text+'...'
	}

	render(){
		var tags = this.props.post.tags.map(function(tag){
			return <span key={tag} className="tag">{tag}</span>;

		});

		return (
	        <div className="panel panel-default" style={{paddingTop:24, background:'#fff'}}>
	            <div id="collapse-three-link1" className="panel-collapse collapse in">
	                <div className="panel-body">
	                    <div className="col-md-2 col-sm-2 col-xs-6 no-padding xs-margin-bottom-five">
	                    	<img src={'/images/'+this.props.post.image} alt="" style={{border:'1px solid #ddd'}} className="white-round-border spa-packages-img"/>
	                    </div>
	                    <div className="col-md-9 col-sm-9 col-xs-12 sm-pull-right col-md-offset-1 no-padding">
	                    	<h2>{ this.props.post.title }</h2>
	                        <p>
		                        { this.props.post.location }
		                        { (this.props.post.company.length > 0) ? ' | '+this.props.post.company : '' }
	                        </p>
	                        <p>{ this.truncateText(this.props.post.description, 160) }</p>
	                        {tags}
	                    </div>
	                </div>
	            </div>
	        </div>

		);
	}
}

export default PostCard;