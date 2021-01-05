import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root:{flexGlow: 1},
  menuButton: { marginRight: theme.spacing(2)
  },
  title: {
    flexGLow: 1
  }
}));
export interface  HeaderProps {}
export const Header = (props: HeaderProps) => {
  const classes = useStyles();
  return(
    <AppBar position="static">
      <ToolBar>
        <Typography variant="h6" className={classes.title}>
          Welcome to Healthy Wages
        </Typography>
      </ToolBar>
    </AppBar>
  );
};

export default Header;

