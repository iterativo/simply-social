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
    photo: {
        height: '80px',
        borderRadius: '3px',
        display: 'block',
        margin: '0 auto',
    },
    background: {
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 300px',
        backgroundImage: profile.backgroundImageUrl,
        color: '#ffffff',
        padding: '48px 0',
        marginBottom: '30px',
        display: 'flex',
        justifyContent: 'center',
    },
    name: {
        textAlign: 'center',
        marginTop: '15px',
        fontSize: '20px',
    },
    headline: {
        textAlign: 'center',
    },
    website: {
        textAlign: 'center',
        link: {
            color: '#fbbc40',
        },
    },
    links: {
        display: 'flex',
        textAlign: 'center',
        transform: 'translateY(212%)',
        fontSize: '9px',
        textTransform: 'uppercase',
    },
    link: {
        margin: '0 45px',
        paddingRight: '10px',
        paddingLeft: '10px',
    },
    linkActive: {
        margin: '0 55px',
        paddingBottom: '7px',
        paddingRight: '10px',
        paddingLeft: '10px',
        borderBottom: '3px solid #0acc8f',
    }
};

const ProfileBanner = () => (
    <div style={styles.background}>
        <div>
            <div>
                <img style={styles.photo} src={profile.photo} />
            </div>
            <div style={styles.name}>
                {`${profile.firstName} ${profile.lastName}`}
            </div>
            <div style={styles.headline}>
                {profile.headline}
            </div>
            <div style={styles.website}>
                <a
                    style={styles.website.link}
                    href={profile.website.url}
                >
                    {profile.website.text}
                </a>
            </div>
            <div style={styles.links}>
                <div style={styles.linkActive}>{`${profile.firstName}'s feed`}</div>
                <div style={styles.link}>{`${profile.followers} followers`}</div>
                <div style={styles.link}>{`${profile.following} following`}</div>
            </div>
        </div>
    </div>
);

export default ProfileBanner;
