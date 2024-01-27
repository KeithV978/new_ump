import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { styled, alpha, Button, useTheme } from "@mui/material";
import { TitleBar } from "../../Components/Common";


const StyledForm = styled(Box)(({theme}) => ({
  input: {
    border: "none",
    outline: "none",
    borderRadius: "15px",
    backgroundColor: alpha(theme.palette.primary.light, 0.24),
    color: "#333333",
    padding: ".5rem 1rem",
    marginTop: '.5rem',
    width: '100%'
  },
  select: {
    border: "none",
    outline: "none",
    borderRadius: "15px",
    backgroundColor: alpha(theme.palette.primary.light, 0.24),
    color: "#333333",
    padding: ".5rem 1rem",
    marginTop: '.5rem',
    width: '100%'
  },
}));
export const Request = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something
  };

  const theme = useTheme();
  return (
    <Box
      component={Paper}
      elevation={5}
      sx={{ padding: "1rem", borderRadius: "5px" }}
    >
      <TitleBar>{" Request "}</TitleBar>
      <Typography variant="body2" sx={{margin: '.5rem 0'}}>
        Selers want to hear from you. <br/>Tell them what you need.
      </Typography>
      <Divider />
      <StyledForm component="form" noValidate onSubmit={handleSubmit}>
        <input type="text" placeholder="what do you need?" />
        <input type="text" placeholder="your name" />
        <select name="category" id="category" placeholder="" style={{padding: '.3rem .5rem'}}>
          <option value="">Select Category</option>
          {[
            "phones",
            "foods",
            "fashion",
            "gadgets",
            "real estate",
            "furnitures",
            "books",
            "home appliances",
            "computers",
            "vehicles",
            "services",
            "fashion_accessories",
          ].map((category, index) => {
            return <option key={index} value={category}>{category}</option>;
          })}
        </select>
        <Button fullWidth sx={{fontSize: '.7rem',marginTop: '.5rem', backgroundColor: `${[theme.palette.tertiary.main]}`}} variant="contained">Pre-order</Button>
      </StyledForm>
    </Box>
  );
};
