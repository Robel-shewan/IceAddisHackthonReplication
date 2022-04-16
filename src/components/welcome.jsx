import { Grid, Paper, TextField, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./welcome.css";

const welcome = () => {
  return (
    <div
      style={{
        backgroundColor: "#1a27c9",
        height: "100vh",
        width: "100%",
        marginTop: 30,
        color: "white",
        marginBottom: 70,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <div style={{ marginLeft: 15 }}>
            <h1 style={{ fontSize: 79 }}>Welcome to the School of Tomorrow</h1>
            <p style={{ fontSize: 28 }}>
              The #1BMinusOne project is an ambitious undertaking to change the
              way we learn and teach. And the march to one billion begins with
              you.
            </p>
            <p style={{ fontSize: 28 }}>
              Enter your email address and you’ll be assigned a permanent
              number—you’ll be one in a billion, officially. You'll also be
              added to our email newsletter, of which you can opt out any time.
            </p>
          </div>
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={5}>
            <Grid item xs={2}>
              <Paper
                style={{
                  width: 100,
                  height: 150,
                  backgroundColor: "black",
                  borderRadius: 19,
                  color: "white",
                  marginLeft: 15,
                }}
              >
                <h1
                  style={{
                    fontSize: 80,
                    fontWeight: 500,
                    padding: 15,
                    paddingBottom: 13,
                    paddingLeft: 30,
                  }}
                >
                  2
                </h1>
              </Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper
                style={{
                  width: 100,
                  height: 150,
                  backgroundColor: "black",
                  borderRadius: 19,
                  color: "white",
                  marginLeft: 15,
                }}
              >
                <h1
                  style={{
                    fontSize: 80,
                    fontWeight: 500,
                    padding: 15,
                    paddingBottom: 13,
                    paddingLeft: 30,
                  }}
                >
                  2
                </h1>
              </Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper
                style={{
                  width: 100,
                  height: 150,
                  backgroundColor: "black",
                  borderRadius: 19,
                  color: "white",
                  marginLeft: 15,
                }}
              >
                <h1
                  style={{
                    fontSize: 80,
                    fontWeight: 500,
                    padding: 15,
                    paddingBottom: 13,
                    paddingLeft: 30,
                  }}
                >
                  9
                </h1>
              </Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper
                style={{
                  width: 100,
                  height: 150,
                  backgroundColor: "black",
                  borderRadius: 19,
                  color: "white",
                  marginLeft: 15,
                }}
              >
                <h1
                  style={{
                    fontSize: 80,
                    fontWeight: 500,
                    padding: 15,
                    paddingBottom: 13,
                    paddingLeft: 30,
                  }}
                >
                  1
                </h1>
              </Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper
                style={{
                  width: 100,
                  height: 150,
                  backgroundColor: "black",
                  borderRadius: 19,
                  color: "white",
                }}
              >
                <h1
                  style={{
                    fontSize: 80,
                    fontWeight: 500,
                    padding: 15,
                    paddingBottom: 13,
                    paddingLeft: 20,
                    marginLeft: 25,
                  }}
                >
                  4
                </h1>
              </Paper>
            </Grid>
          </Grid>
          <h1 style={{ fontSize: 50, fontWeight: 200 }}>Get your Number</h1>
          <form style={{ marginLeft: 37 }} noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              label="FirsName"
              style={{ backgroundColor: "#1a27c9", color: "white" }}
            />

            <TextField
              id="standard-basic"
              label="LastName"
              style={{
                marginLeft: 25,
                marginBottom: 13,
                borderBottomColor: "white",
              }}
            />
            <br />
            <TextField id="standard-basic" label="Email Address" />
          </form>
          <h2 style={{ marginTop: 10 }}> Can you we contact you ? </h2>
          <Typography
            style={{
              backgroundColor: "gold",
              width: 200,
              padding: 15,
              paddingLeft: 50,
              color: "black",
              marginTop: 75,
              marginLeft: 40,
            }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Get Your Number
            </Link>
          </Typography>
        </Grid>
        <img
          src="https://assets-global.website-files.com/5d816b07d269385f68dbcab0/61c342d3ac87b60821752852_Teamphoto03_2021-12-16.png"
          sizes="(max-width: 479px) 100vw, (max-width: 991px) 94vw, 80vw"
          srcset="https://assets-global.website-files.com/5d816b07d269385f68dbcab0/61c342d3ac87b60821752852_Teamphoto03_2021-12-16-p-500.png 500w, https://assets-global.website-files.com/5d816b07d269385f68dbcab0/61c342d3ac87b60821752852_Teamphoto03_2021-12-16-p-800.png 800w, https://assets-global.website-files.com/5d816b07d269385f68dbcab0/61c342d3ac87b60821752852_Teamphoto03_2021-12-16-p-1080.png 1080w, https://assets-global.website-files.com/5d816b07d269385f68dbcab0/61c342d3ac87b60821752852_Teamphoto03_2021-12-16.png 1250w"
          alt="Futur Team photo"
          class="wiz-b-image-progroup"
          style={{ width: "70%", height: 290 }}
        ></img>
      </Grid>
    </div>
  );
};

export default welcome;
