import React from "react";

import {
  Avatar,
  Box,
  Button,
  Checkbox,
  createTheme,
  CssBaseline,
  FormControlLabel,
  Grid,
  makeStyles,
  TextField,
  ThemeProvider,
  Typography,
} from "@material-ui/core";

import { LockOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const handleSubmit = () => {
    console.log("clg");
  };
  return (
    <div style={{ backgroundColor: "white" }}>
      <div style={{ marginLeft: 740 }}>
        <Grid item md={5}>
          <Box
            style={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar style={{ margin: "10px" }}>
              <LockOutlined style={{ backgroundColor: "dodgerblue" }} />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{ marginTop: "30px", marginBottom: "30px" }}
              >
                Sign In
              </Button>
            </Box>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </div>
    </div>
  );
};

export default LoginPage;
