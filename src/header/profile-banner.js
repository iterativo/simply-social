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
    },
    name: {
        textAlign: 'center',
    },
    headline: {
        textAlign: 'center',
    },
    website: {
        textAlign: 'center',
    },
    links: {
        textAlign: 'center',
    },
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
                <a href={profile.website.url}>{profile.website.text}</a>
            </div>
            <div style={styles.links}>
                <span>{`${profile.firstName}'s feed`}</span>
                <span>{`${profile.followers} followers`}</span>
                <span>{`${profile.following} following`}</span>
            </div>
        </div>
    </div>
);

export default ProfileBanner;
