import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const NoMatch = () => {
    return (
        <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
      
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh',position:'center' }}>
        <h2>404 Not Found</h2>
        </Typography>
        
      </Container>
    </React.Fragment>
    );
};

export default NoMatch;