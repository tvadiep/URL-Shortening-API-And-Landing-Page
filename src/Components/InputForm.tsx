import { TextField } from "@mui/material";
import React from "react";
import { ButtonWrapper, StyleButton } from "../Container/Container.style";

const InputForm = () => {
  return (
    <form>
      <TextField fullWidth label="Enter your link" id="input-link" />
      <ButtonWrapper>
        <StyleButton
          variant="contained"
          disableElevation
          onClick={() => setSubmitted(toggle(submitted))}
        >
          Shorten It!
        </StyleButton>
      </ButtonWrapper>
    </form>
  );
};

export default InputForm;
