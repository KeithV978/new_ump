import * as React from "react";

import { SearchOutlined } from "@ant-design/icons";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { styled, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Wrapper = styled(Box)(({ theme }) => ({
  width: "40%",
  backgroundColor: "rgba(205,125,220,0.12)",
  padding: ".2rem .2rem .2rem 1rem",
  borderRadius: "25px",
  overflow: "hidden",
  display: "flex",
  flexDirection: "row",
  [theme.breakpoints.down("xs")]: {
    width: "70%",
  },
}));
const StyledInput = styled("input")(() => ({
  width: "100%",
  backgroundColor: "transparent",
  border: "none",
  outline: "none",
  padding: ".6rem 0",
}));

export const SearchBar = () => {
  const [searchKey, setSearchKey] = React.useState("");
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search/?q=${searchKey}`);
    setSearchKey("");
    window.location.reload()
  };
  const theme = useTheme();
  return (
    <React.Fragment>
      <Wrapper component="form" noValidate onSubmit={handleSubmit}>
        <StyledInput
          required
          type="text"
          name="searchbar"
          id="searcbar"
          placeholder="search for products or sellers"
          onChange={(event) => setSearchKey(event.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          onClick={handleSubmit}
          sx={{
            borderRadius: "50px",
            padding: "auto 0",
            color: "#fff",
            backgroundColor: `${[theme.palette.secondary.main]}`,
          }}
        >
          <SearchOutlined />
        </Button>
      </Wrapper>
    </React.Fragment>
  );
};
