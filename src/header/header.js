import React from 'react';
import PropTypes from 'prop-types';

import AppBar from './app-bar';
import ProfileBanner from './profile-banner';

const Header = ({ profile }) => (
    <div>
        <AppBar {...profile} />
        <ProfileBanner />
    </div>
);

Header.propTypes = {
    profile: PropTypes.object,
};

export default Header;
