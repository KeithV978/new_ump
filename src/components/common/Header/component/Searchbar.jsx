import SearchRounded from "@mui/icons-material/SearchRounded";
import { Box, IconButton, InputBase, alpha, styled } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  padding: "0 .5rem",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.primary.light, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
}));

const SearchIconWrapper = styled("div")(() => ({
  position: "relative",
  display: "flex",
  padding: "0 .5rem",
  alignItems: "center",
  justifyContent: "space-between",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: ".5rem",
    paddingLeft: `.5rem`,
    transition: theme.transitions.create("width"),
      width: "35ch",
      [theme.breakpoints.down("sm")]: {
        width: "100%"
      },
    },
  // [theme.breakpoints.up("sm")]: {
  //   "&:focus": {
  //     width: "50ch",
  //   },
  // },
}));
export const Searchbar = () => {
  const [searchKey, setSearchKey] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault()
    
    navigate(`/search/${searchKey}`)
    setSearchKey("")
    window.location.reload();
  }

  return (
    <Search>
      <Box component="form" noValidate onSubmit={handleSubmit}>
        <SearchIconWrapper>
          <StyledInputBase
            onChange={(event) => setSearchKey(event.target.value)}
            placeholder="Search: 'self con in ekosodin'"
            inputProps={{ "aria-label": "search" }}
          />
          <IconButton
            sx={{ backgroundColor: "#fff", padding: ".3rem", margin: ".3rem" }}
          >
            <SearchRounded fontSize="inherit" sx={{ color: "primary.light" }} />
          </IconButton>
        </SearchIconWrapper>
      </Box>
    </Search>
  );
};
