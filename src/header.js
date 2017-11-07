import React from 'react';

import profileBackground from '../images/profile-background2.jpg';
import profilePhoto from '../images/profile-photo.jpeg';

// TODO Provide via data provider
const profile = {
    backgroundImageUrl: `url(${profileBackground})`,
    profilePhotoUrl: profilePhoto,
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

// TODO Move this to scss
const profileBackgroundStyle = {
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 300px',
    backgroundImage: profile.backgroundImageUrl,
    color: '#ffffff',
};

// TODO Move this to scss
const profilePhotoStyle = {
    width: '80px',
    height: '80px',
    borderRadius: '4px',
};

const Header = () => (
    <header className="navbar">
        <div className="container">
            <div className="navbar-header">
                <a href="/" className="navbar-brand">simplysocial</a>
            </div>
        </div>
        <div className="jumbotron" style={profileBackgroundStyle}>
            <div className="container">
                <div className="row">
                    <img
                        className="center-block"
                        style={profilePhotoStyle}
                        src={profile.profilePhotoUrl}
                    />
                </div>
                <div className="row">
                    <div className="span12 text-center">
                        {`${profile.firstName} ${profile.lastName}`}
                    </div>
                </div>
                <div className="row">
                    <div className="span12 text-center">
                        {profile.headline}
                    </div>
                </div>
                <div className="row">
                    <div className="span12 text-center">
                        <a href={profile.website.url}>{profile.website.text}</a>
                    </div>
                </div>
                <div className="row">
                    <div className="span3"></div>
                    <div className="span6 text-center">
                        <span>{`${profile.firstName}'s feed`}</span>
                        <span>{`${profile.followers} followers`}</span>
                        <span>{`${profile.following} following`}</span>
                    </div>
                    <div className="span3"></div>
                </div>
            </div>
        </div>
    </header>
);

export default Header;
