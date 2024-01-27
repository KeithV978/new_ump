import { Send } from "@mui/icons-material";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

const Wrapper = styled(Box)(() => ({
  position: "fixed",
  bottom: "0",
  width: "100%",
  padding: "1rem 0",
  display: "flex",
  flexDirection: "row",
}));
const Input = styled("input")(() => ({
  border: "none",
  outline: "none",
  width: "100%",
  backgroundColor: "#fff",
  borderTopRightRadius: "30px",
  borderBottomRightRadius: "30px",
  marginRight: ".5rem",
  padding: ".5rem 1rem",
  boxShadow: "8px 7px 15px 2px #e6e6e6",
}));

export const InputPanel = () => {
  return (
    <Wrapper>
      <Input type="text" placeholder="Message" />
      <IconButton
        sx={{ backgroundColor: "#fff", boxShadow: "8px 7px 15px 2px #e6e6e6" }}
      >
        <Send sx={{ color: "secondary.main" }} />
      </IconButton>
    </Wrapper>
  );
};
