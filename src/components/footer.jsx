import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import MenuIcon from "@material-ui/icons/Menu";

import Header from "./Header";
import { Grid, Paper } from "@material-ui/core";
import FooterSub from "./footerSub";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    backgroundColor: "#0d0e0e",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  paper: {
    height: 150,
    backgroundColor: "#0d0e0e",
  },
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
  },
  col: {
    marginLeft: 70,
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <div style={{ marginTop: 100 }}>
      <div style={{ backgroundColor: "#0d0e0e", height: 300 }}>
        <Grid
          container
          spacing={3}
          style={{
            marginTop: 50,
            backgroundColor: "#0d0e0e",
            height: "100%",
            marginLeft: 50,
            marginRight: 50,
          }}
        >
          <Grid item xs style={{ backgroundColor: "#0d0e0e" }}>
            <Paper className={classes.paper}>
              <Typography
                style={{
                  fontSize: 26,
                  fontStyle: "bold",
                  color: "white",
                  marginBottom: 15,
                  paddingLeft: 10,
                }}
              >
                BootCamp
              </Typography>
              <Typography
                style={{ fontSize: 17, color: "white", marginBottom: 15 }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                velit maiores nostrum eos ad saepe eius perspiciatis corporis
              </Typography>
              <Typography style={{ fontSize: 17, color: "white" }}>
                <Link
                  to="/bootcamp"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Scale your Bussiness{" "}
                  <ArrowForwardIcon style={{ marginLeft: 25 }} />
                </Link>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <Typography
                style={{
                  fontSize: 26,
                  fontStyle: "bold",
                  color: "white",
                  marginBottom: 15,
                }}
              >
                BootCamp
              </Typography>
              <Typography
                style={{ fontSize: 17, color: "white", marginBottom: 15 }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                velit maiores nostrum
              </Typography>
              <Typography
                style={{ fontSize: 17, color: "white", marginBottom: 15 }}
              >
                <Link
                  to="/bootcamp"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Scale your Bussiness{" "}
                  <ArrowForwardIcon style={{ marginLeft: 25 }} />
                </Link>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <Typography
                style={{
                  fontSize: 26,
                  fontStyle: "bold",
                  color: "white",
                  marginBottom: 15,
                }}
              >
                Join the Group
              </Typography>
              <Typography
                style={{ fontSize: 17, color: "white", marginBottom: 15 }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                velit maiores nostrum
              </Typography>
              <Typography style={{ fontSize: 17, color: "white" }}>
                <Link
                  to="/bootcamp"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Enroll now <ArrowForwardIcon style={{ marginLeft: 25 }} />
                </Link>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Divider
          style={{
            color: "#fff",
            backgroundColor: "#0d0e0e",
            margin: 30,
            width: "100%",
          }}
        />
      </div>
      <FooterSub />
    </div>
  );
};

export default Footer;
