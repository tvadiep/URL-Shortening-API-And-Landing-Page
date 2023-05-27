import React from "react";
import logo from "./logo.svg";
import { Container } from "./Container/Container";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Container />
    </RecoilRoot>
  );
};

export default App;
