import React from "react";
import {
  ButtonWrapper,
  Contain,
  FormWrapper,
  InputForm,
} from "./Container.style";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
// import SendIcon from "@mui/material/Icon";
import { StyleButton } from "./Container.style";

export const Container = () => {
  return (
    <Contain>
      <FormWrapper>
        <InputForm>
          <TextField fullWidth label="Enter your link" id="link" />
          <ButtonWrapper>
            <StyleButton
              variant="contained"
              disableElevation
              onClick={() => console.log("Oh hi mark")}
            >
              Shorten It!
            </StyleButton>
          </ButtonWrapper>
        </InputForm>
      </FormWrapper>
    </Contain>
  );
};
