import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './app.scss';
import Header from './header';
import Content from './content';
import Footer from './footer';

const App = () => (
    <MuiThemeProvider>
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    </MuiThemeProvider>
);

export default App;
