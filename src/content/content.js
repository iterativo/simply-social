import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Share from 'mui-icons/cmdi/reply';
import Heart from 'mui-icons/cmdi/heart';

// TODO Move to styles file
const styles = {
    card: {
        width: '60%',
        margin: '20px auto',
        border: '1px solid #dfdfdf',
        borderRadius: '3px',
        boxShadow: 'none',
        liked: {
            icon: {
                fill: 'none',
                stroke: '#27c59a',
            },
            color: '#27c59a',
        },
    },
    main: {
        display: 'flex',
        margin: '20px',
    },
    header: {
        display: 'flex',
        margin: '0',
        avatar: {
            borderRadius: '3px',
        },
        actions: {
            position: 'relative',
            top: '-15px',
            color: '#ababab',
            icon: {
                height: '18px',
                width: '18px',
                fill: 'none',
                stroke: '#ababab',
            },
        }
    },
};

const Content = ({ posts }) => (
    <div>
        {posts.map(p => (
            <Card key={p.id} style={styles.card}>
                <div style={styles.main}>
                    <Avatar
                        src={p.by.profilePhotoUrl}
                        style={styles.header.avatar}
                    />
                    <div>
                        <CardHeader
                            title={p.by.name}
                            style={styles.header}
                            children={
                                <div style={styles.header.actions}>
                                    <IconButton iconStyle={styles.header.actions.icon}>
                                        <Share />
                                    </IconButton>
                                    <IconButton iconStyle={styles.header.actions.icon}>
                                        <Heart />
                                    </IconButton>
                                    <span>{p.timeAgo}</span>
                                </div>
                            }
                        />
                        <CardText>
                            {p.text}
                        </CardText>
                        {
                            p.liked &&
                            <div>
                                <IconButton iconStyle={styles.card.liked.icon}>
                                    <Heart />
                                </IconButton>
                                <span style={styles.card.liked}>Liked</span>
                            </div>
                        }
                    </div>
                </div>
            </Card>
        ))}
    </div>
);

Content.propTypes = {
    posts: PropTypes.array,
};

export default Content;
