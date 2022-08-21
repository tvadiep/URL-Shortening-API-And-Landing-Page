import { TextField } from "@mui/material";
import { useSetRecoilState } from "recoil";
import { ButtonWrapper, StyleButton } from "../Container/Container.style";
import { submitted } from "../../src/shared/globalStates";

const InputForm = () => {
  // const submittedToggle = useSetRecoilState(toggleSubmittion);
  const submittedToggle = useSetRecoilState(submitted);
  return (
    <div>
      <form>
        <TextField fullWidth label="Enter your link" id="input-link" />
        <ButtonWrapper>
          <StyleButton
            variant="contained"
            disableElevation
            onClick={() => submittedToggle(true)}
          >
            Shorten It!
          </StyleButton>
          {/* <React.Suspense fallback={<div>Loading</div>}></React.Suspense> */}
        </ButtonWrapper>
      </form>
    </div>
  );
};

export default InputForm;
