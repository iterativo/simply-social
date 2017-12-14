// A single reducer for now

import { INITIALIZE } from './actions';
import logo from '../images/logo.png';
import bubblePlus from '../images/bubblePlus.png';
import profilePhoto from '../images/profile-photo.jpeg';

const initialState = {
    profile: {},
};

// Eventually should come from the server
const stubbedInitializationData = {
    profile: {
        logo: logo,
        bubblePlus: bubblePlus,
        photo: profilePhoto,
    }
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case INITIALIZE:
            return stubbedInitializationData;
        default:
            return state;
    }
};

export default reducer;
