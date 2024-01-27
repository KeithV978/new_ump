import { styled } from "@mui/material";

const Wrapper = styled("div")(() => ({
  // marginTop: '.5rem',
  // marginBottom: '.5rem',
  color: "#464646ed",
  fontSize: "inherit",
}));

export default function Label({ children }) {
  return (
    <Wrapper>
      {/* <span style={{borderTop: '1px solid #ffc3c3'}}> */}
      {children}
      {/* </span> */}
    </Wrapper>
  );
}
