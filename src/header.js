import React from 'react';
import ArrowDown from 'material-ui/svg-icons/navigation/arrow-drop-down';
import SearchIcon from 'material-ui/svg-icons/action/search';

import logo from '../images/logo.png';
import bubblePlus from '../images/bubblePlus.png';
import profileBackground from '../images/profile-background2.jpg';
import profilePhoto from '../images/profile-photo.jpeg';

// TODO Provide via data provider
const profile = {
    logo: logo,
    bubblePlus: bubblePlus,
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
    appbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#262728',
        height: '40px',
        verticalAlign: 'center',
        padding: '0 50px',
        title: {
            simply: {
                color: '#716f6f',
                fontSize: '0.9em',
            },
            social: {
                color: '#bfbfbf',
                fontSize: '0.9em',
            },
        },
        icon: {
            height: '25px',
            position: 'relative',
            transform: 'translateY(10%)',
            marginRight: '10px',
        },
        search: {
            display: 'inline-block',
            field: {
                backgroundColor: 'inherit',
                border: '1px solid #716f6f',
                color: '#716f6f',
                borderRadius: '3px',
                transform: 'translateY(7%)',
            },
            icon: {
                color: '#716f6f',
                position: 'relative',
                height: '18px',
                width: '18px',
                right: '23px',
                top: '6px',
            }
        },
        photo: {
            height: '25px',
            borderRadius: '3px',
        },
        arrowdown: {
            display: 'inline-block',
            marginBottom: '-8px',
            color: '#716f6f',
            height: '20px',
            width: '20px',
        }
    },
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

const Header = () => (
    <div>
        <div style={styles.appbar}>
            <div>
                <img src={profile.logo} style={styles.appbar.icon} alt="Logo" />
                <span style={styles.appbar.title.simply}>simply</span>
                <span style={styles.appbar.title.social}>social</span>
            </div>
            <div>
                <img src={profile.bubblePlus} style={styles.appbar.icon} alt="" />
                <div style={styles.appbar.search}>
                    <input style={styles.appbar.search.field} />
                    <SearchIcon style={styles.appbar.search.icon} />
                </div>
                <img src={profile.photo} style={styles.appbar.photo} />
                <ArrowDown style={styles.appbar.arrowdown} />
            </div>

        </div>
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
    </div>
);

export default Header;
