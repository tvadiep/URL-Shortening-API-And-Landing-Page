import React, { useRef } from "react";
import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import axios from "axios";

// curl -X POST -H "Content-Type: application/json" https://7dvr3wyaudr3rrckvmlmz4jvpu0lzlhf.lambda-url.us-east-1.on.aws
const lambdaURL =
  "https://uhafutsz5hhvdpqsy3bubgt4cm0cybtj.lambda-url.us-east-1.on.aws/";

export const FormUrl = ({ setShortenURL }) => {
  const inputRef = useRef();
  const handleSumbit = async (event) => {
    event.preventDefault();
    const formData = { url: inputRef.current.value };

    axios
      .get(lambdaURL, {
        params: {
          url: formData.url,
        },
      })
      .then((response) => {
        console.log(response.data.originalUrl); // Accessing the original URL from the Lambda response
        console.log(response.data.shortenedUrl); // Accessing the shortened URL from the Lambda response
        // Now you can use the data as needed
        setShortenURL(response.data.shortenedUrl);
      });
  };

  return (
    <form onSubmit={handleSumbit} action="">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            width: "100%",
            flex: "1 1 70%",
            minHeight: "100% !important",
            m: 0,
          }}
        >
          <TextField
            variant="outlined"
            label="Enter your super long URL"
            fullWidth
            sx={{}}
            type="text"
            inputRef={inputRef}
          />
        </Box>
        <Button
          variant="outlined"
          type="submit"
          sx={{ backgroundColor: "lightcyan" }}
        >
          Shorten
        </Button>
      </Box>
    </form>
  );
};
