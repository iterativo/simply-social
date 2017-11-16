import React from 'react';
import AppBar from 'material-ui/AppBar';

import logo from '../images/logo.png';
import profileBackground from '../images/profile-background2.jpg';
import profilePhoto from '../images/profile-photo.jpeg';

// TODO Provide via data provider
const profile = {
    logo: logo,
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

// TODO Move to a separate file
const styles = {
    appbar: {
        title: {
            simply: {
                color: '#716f6f',
                fontSize: '0.75em',
            },
            social: {
                color: '#bfbfbf',
                fontSize: '0.75em',
            },
        },
        background: {
            backgroundColor: '#262728',
        },
        logo: {
            height: '30px',
            position: 'relative',
            transform: 'translateY(28%)',
        },
    },
    profile:{
        photo: {
            width: '80px',
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

const Header = () => (
    <div>
        <AppBar
            title={
                <div>
                    <span style={styles.appbar.title.simply}>simply</span>
                    <span style={styles.appbar.title.social}>social</span>
                </div>
            }
            style={styles.appbar.background}
            iconElementLeft={<img src={profile.logo} style={styles.appbar.logo} alt="Logo" />}
        />
        <div className="jumbotron" style={styles.profile.background}>
            <div className="container">
                <div className="row">
                    <img
                        className="center-block"
                        style={styles.profile.photo}
                        src={profile.profilePhotoUrl}
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
    </div>
);

export default Header;
