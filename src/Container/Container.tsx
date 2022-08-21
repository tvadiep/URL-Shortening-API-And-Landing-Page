import React from "react";
import { Contain, FormWrapper } from "./Container.style";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
// import SendIcon from "@mui/material/Icon";
import InputForm from "../Components/InputForm";

import { useRecoilValue } from "recoil";
import { submitted } from "../shared/globalStates";

export const Container = () => {
  const isSubmitted = useRecoilValue(submitted);
  const toggle = (boolVal: Boolean) => !boolVal;
  return (
    <Contain>
      <FormWrapper>
        <InputForm />
        {isSubmitted && (
          <div style={{ display: "block" }}>
            This is your link: https://facebook.com/vandiepat
          </div>
        )}
      </FormWrapper>
    </Contain>
  );
};
