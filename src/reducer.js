// A single reducer for now

import { INITIALIZED } from './actions';

const initialState = {
    profile: {},
    posts: [],
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case INITIALIZED:
            return action.data;
        default:
            return state;
    }
};

export default reducer;
