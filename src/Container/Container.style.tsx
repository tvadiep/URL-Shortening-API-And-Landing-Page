import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

export const Contain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* background-image: url(${`https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Church_of_light.jpg/1920px-Church_of_light.jpg`}); */
`;

export const InputForm = styled.div`
  margin: auto;
  /* background-color: #e5e5e6; */
  display: flex;
  justify-self: center;
  width: 50vw;
`;

export const ButtonWrapper = styled.div`
  margin-left: 10px;
  margin-top: -3px;
`;

export const StyleButton = styled(Button)`
  button {
    min-width: 200px;
    padding: 14px;
    font-size: 13pt;
    color: red;
  }
`;

export const InputLink = styled(TextField)``;

export const FormWrapper = styled.div`
  padding: 70px 40px;
  border-radius: 5px;
  border: solid gray 1px;
`;
