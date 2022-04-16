import { Grid, makeStyles, Paper } from "@material-ui/core";
import React from "react";
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

const footerSub = () => {
  return (
    <div style={{ backgroundColor: "#0d0e0e", height: "100vh" }}>
      <Grid
        container
        spacing={5}
        style={{ backgroundColor: "#0d0e0e", marginLeft: 40, marginRight: 40 }}
      >
        <Grid item xs={2}>
          <Paper style={{ backgroundColor: "#0d0e0e", color: "white" }}>
            <h4>Learn</h4>
            <h5>Lorem ipsum dolor</h5>
            <h5>Lorem ipsum dolor</h5>
            <h5>Lorem ipsum dolor</h5>
            <h5>Lorem ipsum dolor</h5>
            <h5>Lorem ipsum dolor</h5>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          ,color:"white"
          <Paper style={{ backgroundColor: "#0d0e0e" }}>
            <h4>shop</h4>
            <h5>Lorem ipsum dolor</h5>
            <h5>Lorem ipsum dolor</h5>
            <h5>Lorem ipsum dolor</h5>
            <h5>Lorem ipsum dolor</h5>
            <h5>Lorem ipsum dolor</h5>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper style={{ backgroundColor: "#0d0e0e", color: "white" }}>
            <h4>Expolre</h4>
            <h5>Lorem ipsum dolor</h5>
            <h5>Lorem ipsum dolor</h5>
            <h5>Lorem ipsum dolor</h5>
            <h5>Lorem ipsum dolor</h5>
            <h5>Lorem ipsum dolor</h5>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper style={{ backgroundColor: "#0d0e0e", color: "white" }}>
            <h4>Collbarator</h4>
            <h5>Lorem ipsum dolor</h5>
            <h5>Lorem ipsum dolor</h5>
            <h5>Lorem ipsum dolor</h5>
            <h5>Lorem ipsum dolor</h5>
            <h5>Lorem ipsum dolor</h5>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper style={{ backgroundColor: "#0d0e0e", color: "white" }}>
            <h4>Connect</h4>
            <h5>Lorem ipsum dolor</h5>
            <h5>Lorem ipsum dolor</h5>
            <h5>Lorem ipsum dolor</h5>
            <h5>Lorem ipsum dolor</h5>
            <h5>Lorem ipsum dolor</h5>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default footerSub;
