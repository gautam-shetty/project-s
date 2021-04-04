import React from 'react';
import { Toolbar, IconButton, Typography, Grid, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle'
import TV from './views/TV'

function App() {

  // const classes = useStyles()

  return (
    <div className="App">
        <Grid container direction="column" justify="flex-start" alignItems="stretch" style={{color: 'white', backgroundColor: '#e91e63'}}>
          <Grid item>
              <Toolbar>
                <Typography color="inherit">
                  projectS
                </Typography>
                <div>
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                </div>
              </Toolbar>
          </Grid>
          <Grid item style={{color: 'white', backgroundColor: 'green'}}>
            Base
          </Grid>
        </Grid>
      {/* <TV /> */}
    </div>
  );
}

export default App;
