import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Share from 'mui-icons/cmdi/reply';
import Heart from 'mui-icons/cmdi/heart';

import profilePhoto from '../images/profile-photo.jpeg';

// TODO Provide via data provider
const content = {
    posts: [
        {
            id: 1,
            by: {
                name: 'Jimmy Fallon',
                profilePhotoUrl: profilePhoto,
            },
            text: 'Back to work!',
            timeAgo: '20d',
            liked: true,
        },
        {
            id: 2,
            by: {
                name: 'Jimmy Fallon',
                profilePhotoUrl: profilePhoto,
            },
            text: 'On vacation!',
            timeAgo: '30d',
            liked: false,
        },
    ],
};

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

const Content = () => (
    <div>
        {content.posts.map(p => (
            <Card key={p.id} style={styles.card}>
                <div style={styles.main}>
                    <Avatar
                        src={profilePhoto}
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

export default Content;
