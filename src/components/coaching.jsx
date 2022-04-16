import { Divider, Grid, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import AddIcon from "@material-ui/icons/Add";

const coaching = () => {
  return (
    <div style={{ backgroundColor: "gold", marginTop: 20 }}>
      <div style={{ marginLeft: 30 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography
              style={{ fontSize: 79, marginTop: 90, marginBottom: 60 }}
            >
              Premium Coaching Like No Other
            </Typography>
            <Typography style={{ fontSize: 28, marginBottom: 20 }}>
              Accelerate your business growth and gain access to a business
              advisory board of experts.
            </Typography>
            <Typography style={{ fontSize: 28 }}>
              Access weekly, live group coaching from Chris Do and his team of
              subject-matter leaders along with other like-minded creatives and
              entrepreneurs from around the globe in our community-backed
              learning portal.
            </Typography>
            <div style={{ marginLeft: 90, marginTop: 60 }}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography
                    style={{ fontSize: 80, marginLeft: 15, fontWeight: 500 }}
                  >
                    <AddIcon
                      style={{ fontSize: 80, marginLeft: 15, fontWeight: 500 }}
                    />
                    <CountUp end={650} start={0} duration={9} />
                  </Typography>
                  <Divider
                    style={{
                      color: "white",
                      backgroundColor: "white",
                      marginBottom: 10,
                    }}
                  />
                  <Typography>Pro Group Members</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    style={{ fontSize: 80, marginLeft: 15, fontWeight: 500 }}
                  >
                    <AddIcon
                      style={{ fontSize: 80, marginLeft: 15, fontWeight: 500 }}
                    />
                    <CountUp end={354} start={0} duration={9} />
                  </Typography>
                  <Divider
                    style={{
                      color: "white",
                      backgroundColor: "white",
                      marginBottom: 10,
                    }}
                  />
                  <Typography>Pro Group Members</Typography>
                </Grid>
              </Grid>
              <Typography></Typography>
              <Typography></Typography>
            </div>
            <Typography
              style={{
                backgroundColor: "#1a27c9",
                width: 200,
                padding: 18,
                paddingLeft: 50,
                color: "#fff",
                marginTop: 75,
                marginLeft: 90,
                marginBottom: 35,
              }}
            >
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                JOIN THE PRO GROUP
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <img src="./image1.png" alt=".." />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default coaching;
