import React from 'react';

// TODO Move to styles file
const styles = {
    footer: {
        marginTop: '50px',
    },
    links: {
        a: { color: '#27c59a' },
        textTransform: 'uppercase',
        display: 'flex',
        justifyContent: 'space-between',
        width: '45%',
        margin: 'auto',
        fontSize: '9px',
    },
};

const Footer = () => (
    <footer style={styles.footer}>
        <hr />
        <div style={styles.links}>
            <a href="#" style={styles.links.a}>about us</a>
            <a href="#" style={styles.links.a}>support</a>
            <a href="#" style={styles.links.a}>privacy</a>
            <a href="#" style={styles.links.a}>terms</a>
            <span>&#64; 2017 simplysocial</span>
        </div>
    </footer>
);

export default Footer;
