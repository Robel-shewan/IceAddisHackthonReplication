import { Button, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";

const Hero = () => {
  return (
    <div style={{ marginTop: 50 }}>
      <Grid
        container
        spacing={5}
        style={{
          backgroundColor: "#0d0e0e",
          marginLeft: 40,
          marginRight: 40,
          color: "white",
        }}
      >
        <Grid item xs={8}>
          <Typography style={{ fontSize: 85, fontWeight: 600 }}>
            Courses, Coaching, and Community for Creatives
          </Typography>
          <Typography
            variant="p"
            component="p"
            style={{ fontSize: 25, marginTop: 50 }}
          >
            Courses, Coaching, and Community for Creatives On a mission to help
            one billion people make a living doing what they love (without
            losing their soul). We’re like a private art school - minus the
            crippling debt.
          </Typography>
          <Typography
            style={{
              backgroundColor: "gold",
              width: 200,
              padding: 15,
              paddingLeft: 50,
              marginTop: 90,
              color: "black",
            }}
          >
            Shopping Course
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <video
            style={{ width: 500, height: 700 }}
            src="https://media.videoask.com/transcoded/ada270b1-d76e-42a3-9b59-46e2bc81054d/video.mp4?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJtZWRpYV9pZCI6ImFkYTI3MGIxLWQ3NmUtNDJhMy05YjU5LTQ2ZTJiYzgxMDU0ZCIsImV4cCI6MTY1MDM3Njg2M30.IRYWJBlf5g87kxu9a0JSxFxf3kOuQffz95MEDhRYWDI0czTHzbCFnPGFB33asXu9B0aTISUK3d8VjCyIFHZOVuT4BjAaapK2MKUHTtIa-Qy-hFHXMhJO8_X5ufpSVN7TNXUJmcdPccutrc1GApZxQzdPJruCybtiwC_eZwCZekWcgQDCQ67lrBJqN1fguVVofCubxAyS78CY9A2Nc4-DeI9perqNgS8vjSSWaMmuSykrrMcBmrBIuC8HpopSQhOFmCXdq3cmleyjhKvB9Lnmb6p_zXAkHkDBMg_RRgjnUxcdt6t24SyLqhcTd2S3Y4inJD8_RMa_vXIPLbg2kx2N2Tk_QkkOY56BCrhEApiUhNrnligC29oqWsBq4OeeKOzGH5qtzI6QAmF03HzIXf9X_-AtRIuQySJ41PaqWwEqBsirnLFPLKeZWyMmNU11oSXWPGt1P4_aC_yqOF2FHMT3oryMYUZuSpou-qSajadQLOWQ4QQVSFkQHG7XKw_Y6SvxRabO1Fe9HFj066rgtjPnezOFB7ffbqX39AhHbatK_fr38HJYmKtldkyNOzGIEJtULcIz6-ioS8UseBtadCnkPhmT4xjVrGkB1F0Luu-7m_cw-NpMX6njhQEN3HjK-lcUThlTnfjuMrRehCmWgEpu0kQniv17MJukB1GkfMSgp3w"
          ></video>
        </Grid>
      </Grid>
    </div>
  );
};

export default Hero;
