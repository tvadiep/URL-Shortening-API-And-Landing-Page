import React, { useState } from "react";
// import "./App.css";
import { Box, Typography } from "@mui/material";
// import InputBase from "@mui/material/InputBase";
// import TextField from "@mui/material/TextField";
import { FormUrl } from "./components/FormUrl";

function App() {
  const [shortenURL, setShortenURL] = useState();
  return (
    <Box
      sx={{
        width: "60%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "rgb(255, 255, 255)",
      }}
    >
      <Box sx={{}}>
        <Box>
          <Typography
            variant="h2"
            fontWeight="semibold"
            sx={{ textAlign: "center", m: "30px 0px" }}
          >
            URL SHORTENER
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
        >
          <Box>
            <Typography variant="h4" sx={{ p: "10px" }}>
              Paste the URL to be shortened
            </Typography>
          </Box>
          <Box
            sx={{
              width: "80%",
            }}
          >
            <FormUrl setShortenURL={setShortenURL} />
          </Box>
          <Box sx={{ m: "20px 0px", width: "80%" }}>
            <Typography variant="h6">
              ShortURL is a free tool to shorten URLs and generate short links
              URL shortener allows to create a shortened link making it easy to
              share
            </Typography>
          </Box>
          {shortenURL && typeof (shortenURL !== "Objects") && (
            <Box sx={{ m: "20px 0px", width: "80%" }}>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Your shorten url is:{" "}
              </Typography>
              <Typography variant="h6">{shortenURL}</Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default App;
