import { Box, CircularProgress } from "@material-ui/core";
import * as React from "react";

export default function Loader() {
  return (
    <Box
      tyle={{
        width: "200px",
        height: "100px",
        margin: "500px",
        display: "block",
      }}
    >
      <CircularProgress color="success" />
    </Box>
  );
}
