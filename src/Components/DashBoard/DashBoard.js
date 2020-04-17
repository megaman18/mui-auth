import React from "react";
import {
  Typography,
  Paper,
  Avatar,
  CircularProgress,
  Button,
} from "@material-ui/core";

import firebase from "../firebase";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Dashboard(props) {
  const classes = useStyles();

  if (!firebase.getCurrentUserName()) {
    // not logged in
    alert("Please login first");
    props.history.replace("/login");
    return null;
  }

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              News
            </Typography>
            <Button onClick={logout} color="inherit">
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </div>
      <Typography component="h1" variant="h5">
        Hello {firebase.getCurrentUserName()}
      </Typography>
    </div>
  );

  async function logout() {
    await firebase.logout();
    props.history.push("/");
  }
}

export default withRouter(Dashboard);
