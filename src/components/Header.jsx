import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import DialogNavigation from "../components/DialogNavigation";
import "./header.css";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#0d0e0e",
    "& .MuiAppBar-root": {
      backgroundColor: "#0d0e0e",
    },
  },

  title: {
    // flexGrow: 1,
    fontSize: 35,
  },
  link: {
    textDecoration: "none",
    color: "#fff",
    fontSize: 20,
    marginRight: 10,
  },
  col: {
    marginLeft: 70,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              thefutur
            </Link>
          </Typography>
          <Typography variant="h4" component="h1" className={classes.col} />
          <Link to="/shop" className={classes.link}>
            {" "}
            Course and Tools
          </Link>

          <Typography />
          <Typography variant="h4" component="h1" className={classes.col} />
          <Link to="/learn" className={classes.link}>
            {" "}
            Content
          </Link>

          <Typography />
          <Typography variant="h4" component="h1" className={classes.col} />
          <Link to="/our-story" className={classes.link}>
            {" "}
            Our Missions
          </Link>

          <Typography />
          <div style={{ marginLeft: 900 }}>
            <Button
              color="inherit "
              style={{ marginRight: 30, paddingTop: 15 }}
            >
              <Link to="/login" className={classes.link}>
                Login
              </Link>
            </Button>
          </div>
          <div style={{ marginLeft: 80, marginTop: 20 }}>
            <DialogNavigation />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
