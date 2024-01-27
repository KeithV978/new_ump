import { Fragment } from "react";
import { InputWrapper } from "../InputHelper";
import { styled } from "@mui/material";

const StyledSelect = styled("select")(() => ({
  width: "100%",
  borderRadius: "40px",
  padding: ".2rem 1rem",
  backgroundColor: "transparent",
  // backgroundColor: "#fff",
  border: "none",
  outline: "none",
  color: "#505050",
}));
const StyledOptions = styled("option")(() => ({
  padding: "1rem 0",
}));
const SelectInput = (props) => {
  const {
    label,
    options = [],
    id,
    // defaultValue,
    // reg,
    onChangeHandler,
    labelIcon,
    disable
  } = props;
  return (
    <Fragment>
      <label htmlFor={id}>
        {labelIcon} {label}
      </label>
      <InputWrapper>
        <StyledSelect
          id={id}
        //   defaultValue={defaultValue}
          {...props}
          onChange={onChangeHandler}
        //   required
        disabled={disable}
        >
          <StyledOptions>{"-"}</StyledOptions>
          {options.map((item, index) => {
            return (
              <StyledOptions key={index} value={item}>
                {item}
              </StyledOptions>
            );
          })}
        </StyledSelect>
      </InputWrapper>
    </Fragment>
  );
};

export default SelectInput;
