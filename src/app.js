import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './header';
import Content from './content';
import Footer from './footer';
import { actions } from './actions';

class App extends React.Component {
    static propTypes = {
        initialize: PropTypes.func.isRequired,
        data: PropTypes.object,
    }

    componentDidMount() {
        this.props.initialize();
    }

    render() {
        const { data } = this.props;
        return (
            <MuiThemeProvider>
                <div>
                    <Header viewModel={data.profile} />
                    <Content />
                    <Footer />
                </div>
            </MuiThemeProvider>
        );
    };
};

const mapStateToProps = state => {
    return {
        data: state,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        initialize: () => dispatch(actions.initialize()),
    };
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;
