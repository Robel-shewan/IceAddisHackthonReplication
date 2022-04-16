import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const Enrollement = () => {
  return (
    <div style={{ color: "black", backgroundColor: "white" }}>
      <div style={{ width: "100%", height: 200 }}>
        <h4 style={{ fontSize: 60, fontWeight: 300, marginLeft: 50 }}>
          OUR COURSES
        </h4>
        <h2
          style={{
            fontSize: 40,
            fontWeight: 200,
            marginLeft: 50,
            marginBottom: 12,
          }}
        >
          {" "}
          Open For Enrollment
        </h2>
      </div>
      <div style={{ color: "black", backgroundColor: "white" }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <img
              src="https://assets-global.website-files.com/5d816b07d269382588dbcab1/624dd73668692e47a90abfb8_Instagram%20Carousel%20Design%20Thumbnail%2016x9.png"
              alt="Instagram Carousel Design"
              sizes="(max-width: 479px) 100vw, (max-width: 991px) 97vw, 57vw"
              style={{ width: "100%" }}
              srcset="https://assets-global.website-files.com/5d816b07d269382588dbcab1/624dd73668692e47a90abfb8_Instagram%20Carousel%20Design%20Thumbnail%2016x9-p-500.png 500w, https://assets-global.website-files.com/5d816b07d269382588dbcab1/624dd73668692e47a90abfb8_Instagram%20Carousel%20Design%20Thumbnail%2016x9-p-800.png 800w, https://assets-global.website-files.com/5d816b07d269382588dbcab1/624dd73668692e47a90abfb8_Instagram%20Carousel%20Design%20Thumbnail%2016x9-p-1080.png 1080w, https://assets-global.website-files.com/5d816b07d269382588dbcab1/624dd73668692e47a90abfb8_Instagram%20Carousel%20Design%20Thumbnail%2016x9-p-1600.png 1600w, https://assets-global.website-files.com/5d816b07d269382588dbcab1/624dd73668692e47a90abfb8_Instagram%20Carousel%20Design%20Thumbnail%2016x9.png 1920w"
            />
          </Grid>
          <Grid item xs={6}>
            <h2 style={{ fontSize: 40, fontWeight: 500, marginLeft: 20 }}>
              Instagram Carsouel Design
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
              recusandae nulla, obcaecati vero iusto ipsam maxime asperiores
              officia eos dolores porro? Ipsa fugiat adipisci ad velit. Saepe
              eveniet sunt earum.
            </p>
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
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Enrollement;
