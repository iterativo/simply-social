import React from 'react';
import PropTypes from 'prop-types';
import ArrowDown from 'material-ui/svg-icons/navigation/arrow-drop-down';
import SearchIcon from 'material-ui/svg-icons/action/search';

// TODO Move to a separate file
const styles = {
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
        width: '26px',
        borderRadius: '3px',
    },
    arrowdown: {
        display: 'inline-block',
        marginBottom: '-8px',
        color: '#716f6f',
        height: '20px',
        width: '20px',
    }
};

const AppBar = ({ logo, bubblePlus, photo }) => (
    <div style={styles}>
        <div>
            <img src={logo} style={styles.icon} alt="Logo" />
            <span style={styles.title.simply}>simply</span>
            <span style={styles.title.social}>social</span>
        </div>
        <div>
            <img src={bubblePlus} style={styles.icon} alt="" />
            <div style={styles.search}>
                <input style={styles.search.field} />
                <SearchIcon style={styles.search.icon} />
            </div>
            <img src={photo} style={styles.photo} />
            <ArrowDown style={styles.arrowdown} />
        </div>
    </div>
);

AppBar.propTypes = {
    logo: PropTypes.string,
    bubblePlus: PropTypes.string,
    photo: PropTypes.string,
};

export default AppBar;
