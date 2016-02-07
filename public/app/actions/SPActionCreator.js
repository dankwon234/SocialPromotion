import Dispatcher from '../dispatcher/Dispatcher'
import APIUtils from '../utils/APIUtils'

export default {

	registerProfile(profile){
//		console.log('registerProfile: '+JSON.stringify(profile));
		APIUtils.registerProfile(profile)
	}



}