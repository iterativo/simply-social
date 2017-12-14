import React from 'react';
import PropTypes from 'prop-types';

import AppBar from './app-bar';
import ProfileBanner from './profile-banner';

const Header = props => (
    <div>
        <AppBar {...props.viewModel} />
        <ProfileBanner />
    </div>
);

Header.propTypes = {
    viewModel: PropTypes.object,
};

export default Header;
