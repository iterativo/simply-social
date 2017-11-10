import React from 'react';

import profilePhoto from '../images/profile-photo.jpeg';

// TODO Provide via data provider
const content = {
    posts: [{
        id: 1,
        by: {
            name: 'Jimmy Fallon',
            profilePhotoUrl: profilePhoto,
        },
        content: 'On vacation!',
        timeAgo: '30d',
    }]
};

const Content = () => (
    <div className="container">
        {content.posts.map(p => (
            <div key={p.id} className="row">
                <div className="col-md-4 col-md-offset-4">
                    <img src={p.by.profilePhotoUrl} />
                </div>
            </div>
        ))}
    </div>
);

export default Content;
