import {
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: 170,
    height: 380,
    width: 390,
    backgroundColor: "white",
    marginLeft: 20,
    marginBottom: 130,
    "&:hover": {
      boxShadow: 1,
      shadowColor: "gold",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
    },
  },
}));

const Feature = () => {
  const classes = useStyles();
  return (
    <div style={{ backgroundColor: "whitesmoke", marginBottom: 0 }}>
      <Container style={{ marginBottom: 50 }}>
        <Grid container spacing={3}>
          <Grid xs={4}>
            <Paper className={classes.paper}>
              <AccountTreeIcon style={{ fontSize: 40, borderRadius: 50 }} />
              <Typography
                style={{
                  marginLeft: 20,
                  fontSize: 30,
                  fontWeight: 600,
                  marginBottom: 30,
                }}
              >
                Level up Your Skill
              </Typography>
              <Typography
                variant="p"
                component="p"
                style={{
                  marginLeft: 20,
                  fontSize: 20,
                  marginBottom: 37,
                }}
              >
                The Design Career Kickstarter track is here to help you master
                all the essential skills clients and agency are looking to hire-
                and then some!
              </Typography>
              <Typography
                style={{
                  backgroundColor: "black",
                  width: 200,
                  padding: 15,
                  paddingLeft: 50,
                  color: "#fff",
                  marginTop: 75,
                  marginLeft: 40,
                }}
              >
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  LEARN DESIGN
                </Link>
              </Typography>
            </Paper>
          </Grid>
          <Grid xs={4}>
            <Paper className={classes.paper}>
              <AccountTreeIcon style={{ fontSize: 40, borderRadius: 50 }} />
              <Typography
                style={{
                  marginLeft: 20,
                  fontSize: 30,
                  fontWeight: 600,
                  marginBottom: 30,
                }}
              >
                Launch Your Creative Business
              </Typography>
              <Typography
                variant="p"
                component="p"
                style={{
                  marginLeft: 20,
                  fontSize: 20,
                  marginBottom: 37,
                }}
              >
                The Entrepreneur Launchpad track has everything you need to get
                your creative business up and running.
              </Typography>
              <Typography
                style={{
                  backgroundColor: "black",
                  width: 200,
                  padding: 15,
                  paddingLeft: 50,
                  color: "#fff",
                  marginTop: 75,
                  marginLeft: 40,
                }}
              >
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  LEARN DESIGN
                </Link>
              </Typography>
            </Paper>
          </Grid>
          <Grid xs={4}>
            <Paper className={classes.paper}>
              <AccountTreeIcon style={{ fontSize: 40, borderRadius: 50 }} />
              <Typography
                style={{
                  marginLeft: 20,
                  fontSize: 30,
                  fontWeight: 600,
                  marginBottom: 30,
                }}
              >
                Skyrocket Your Agency
              </Typography>
              <Typography
                variant="p"
                component="p"
                style={{
                  marginLeft: 20,
                  fontSize: 20,
                  marginBottom: 37,
                }}
              >
                All the resources you need to land bigger clients and scale are
                waiting for you in our Agency Accelerator track.
              </Typography>
              <Typography
                style={{
                  backgroundColor: "black",
                  width: 200,
                  padding: 15,
                  paddingLeft: 50,
                  color: "#fff",
                  marginTop: 75,
                  marginLeft: 40,
                }}
              >
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  LEARN DESIGN
                </Link>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Feature;
