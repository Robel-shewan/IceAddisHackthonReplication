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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon style={{ fontSize: 40, marginLeft: 17, color: "white" }} />
        </IconButton>
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              thefutur
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
              <Button color="inherit " style={{ marginRight: 60 }}>
                <Link to="/login" className={classes.link}>
                  Login
                </Link>
              </Button>
            </div>
            <div>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </div>
            <Button autoFocus color="inherit" onClick={handleClose}>
              {!open && (
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                >
                  <MenuIcon style={{ fontSize: 40, marginLeft: 17 }} />
                </IconButton>
              )}
            </Button>
          </Toolbar>
        </AppBar>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid velit maiores nostrum eos ad saepe eius perspiciatis
                  corporis
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid velit maiores nostrum
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid velit maiores nostrum
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
      </Dialog>
    </div>
  );
}
