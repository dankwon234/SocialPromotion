import Dispatcher from '../dispatcher/Dispatcher'

export default {

	profileRegistered(profile){
		Dispatcher.dispatch({
		    type: 'PROFILE_REGISTERED',
		    rawUser: profile
		});
	}

	


}