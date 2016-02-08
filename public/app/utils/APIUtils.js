import Promise from 'bluebird'
import superagent from 'superagent'
import SPServerActionCreator from '../actions/SPServerActionCreator'

function urlRequest(method, path, params){
    return new Promise(function (resolve, reject){

    	if (method.toLowerCase() == 'get'){
			superagent
				.get(path)
				.query(params)
				.set('Accept', 'application/json')
				.end(function(err, res){
					if (err){ reject(err); }
					else { resolve(res.body); }
				});
    	}

    	if (method.toLowerCase() == 'post'){
			superagent
				.post(path)
				.send(params)
				.set('Accept', 'application/json')
				.end(function(err, res){
					if (err){ reject(err); }
					else { resolve(res.body); }
				});
    	}
    });
}

export default {

	registerProfile(profile) {
//		console.log('APIUtils - registerProfile: '+JSON.stringify(profile));
		urlRequest('post', '/api/profile', profile)
		.then(function(response){
			console.log('API UTILS - RESPONSE: '+JSON.stringify(response));
			SPServerActionCreator.profileRegistered(response.profile);
		})
		.catch(function(err){
			console.log('ERROR: '+err.message);
		});

	}
}