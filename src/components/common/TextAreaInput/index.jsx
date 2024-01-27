import * as React from "react";
import { InputWrapper } from "../InputHelper";
import { styled } from "@mui/material";

const StyledTextArea = styled("textarea")(() => ({
  width: "100%",
  borderRadius: "16px",
  padding: ".2rem 1rem",
  backgroundColor: "transparent",
  border: "none",
  outline: "none",
  color: "#333333",
  margin: "1rem 0"
}));
const TextAreaInput = (props) => {
  const { label, id, labelIcon } = props;
  return (
    <React.Fragment>
      <label htmlFor={id} style={{ color: "#999999" }}>
        {labelIcon} {label}
      </label>
      <InputWrapper>
        <StyledTextArea
          id={id}
        //   defaultValue={defaultValue}
          {...props}
        //   onChange={onChangeHandler}
          rows="8"
          cols="50"
        ></StyledTextArea>
      </InputWrapper>
    </React.Fragment>
  );
};
export default TextAreaInput;
