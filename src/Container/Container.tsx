import React from "react";
import { Contain, FormWrapper } from "./Container.style";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
// import SendIcon from "@mui/material/Icon";
import { StyleButton } from "./Container.style";
import { useState } from "react";

import InputForm from "../Components/InputForm";
export const Container = () => {
  const [submitted, setSubmitted] = useState(false);
  const toggle = (boolVal: Boolean) => !boolVal;
  return (
    <Contain>
      <FormWrapper>
        <InputForm />
        {submitted && (
          <div style={{ display: "block" }}>
            This is your link: https://facebook.com/vandiepat
          </div>
        )}
      </FormWrapper>
    </Contain>
  );
};
