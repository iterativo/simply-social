import logo from '../images/logo.png';
import bubblePlus from '../images/bubblePlus.png';
import profilePhoto from '../images/profile-photo.jpeg';

export const INITIALIZED = 'INITIALIZED';

// Eventually should come from the server
const stubbedInitializationData = {
    profile: {
        logo: logo,
        bubblePlus: bubblePlus,
        photo: profilePhoto,
    },
    posts: [
        {
            id: 1,
            by: {
                name: 'Jimmy Fallon',
                profilePhotoUrl: profilePhoto,
            },
            text: 'Back to work!',
            timeAgo: '20d',
            liked: true,
        },
        {
            id: 2,
            by: {
                name: 'Jimmy Fallon',
                profilePhotoUrl: profilePhoto,
            },
            text: 'On vacation!',
            timeAgo: '30d',
            liked: false,
        },
    ],
};

const initialize = () => {
    // Eventually perform server api call here and return a thunk
    return {
        type: INITIALIZED,
        data: stubbedInitializationData,
    };
};

export const actions = {
    initialize,
};
