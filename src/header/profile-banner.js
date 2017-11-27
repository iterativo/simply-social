import React from 'react';

import profileBackground from '../../images/profile-background2.jpg';
import profilePhoto from '../../images/profile-photo.jpeg';

// TODO Provide via data provider
const profile = {
    backgroundImageUrl: `url(${profileBackground})`,
    photo: profilePhoto,
    firstName: 'Jimmy',
    lastName: 'Fallon',
    headline: 'Late Night Show Host living in Los Angeles, CA',
    website: {
        text: 'jimmyfallon.com',
        url: 'http://www.jimmyfallon.com/',
    },
    followers: '2,542',
    following: '517',
};

// TODO Move to a separate file
const styles = {
    profile:{
        photo: {
            height: '80px',
            borderRadius: '3px',
        },
        background: {
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 300px',
            backgroundImage: profile.backgroundImageUrl,
            color: '#ffffff',
        },
    },
};

const ProfileBanner = () => (
    <div className="jumbotron" style={styles.profile.background}>
        <div className="container">
            <div className="row">
                <img
                    className="center-block"
                    style={styles.profile.photo}
                    src={profile.photo}
                />
            </div>
            <div className="row text-center">
                {`${profile.firstName} ${profile.lastName}`}
            </div>
            <div className="row text-center">
                {profile.headline}
            </div>
            <div className="row text-center">
                <a href={profile.website.url}>{profile.website.text}</a>
            </div>
            <div className="row text-center">
                <span>{`${profile.firstName}'s feed`}</span>
                <span>{`${profile.followers} followers`}</span>
                <span>{`${profile.following} following`}</span>
            </div>
        </div>
    </div>
);

export default ProfileBanner;
