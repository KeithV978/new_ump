import * as React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import { ProductFormsLoader } from "../ProductFormsLoader";
import StoreRounded from "@mui/icons-material/StoreRounded";
import CategoryRounded from "@mui/icons-material/CategoryRounded";

export const AddProduct = () => {
  const [category, handleCategory] = React.useState("");
  const [categoryOptions, handleCategoryOptions] = React.useState();
  const [mode, setMode] = React.useState("");

  //   React.useEffect(() => {
  //     if (mode === "swap")

  //   }, [mode]);
  const handleModeChange = (event) => {
    if (event.target.value === "swap") {
      setMode(event.target.value);
      handleCategoryOptions([
        "mobile_devices",
        "gadgets",
        "fashion",
        "fashion_accessories",
        "real_estate",
        "furnitures",
        "books",
        "home_appliances",
        "computers",
        "vehicles",
      ]);
    } else {
      setMode(event.target.value);
      handleCategoryOptions([
        "mobile_devices",
        "foods",
        "gadgets",
        "fashion",
        "fashion_accessories",
        "real_estate",
        "furnitures",
        "books",
        "home_appliances",
        "computers",
        "vehicles",
        "services",
        "Sell an event ticket"
      ]);
    }
  };

  return (
    <React.Fragment>
      <Box sx={{ pt: { sm: 4, xs: 2 }, pb: 2 }}>
        <Container
          sx={{
            // width: { xs: "100%", sm: "55%" },
            padding: { sm: "", xs: 0 },
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={9}>
              <Box
                // component={Paper}
                // elevation={2}
                // borderRadius={3}
                sx={{
                  // borderRadius: { xs: "4px", sm: "2px" },
                  // backgroundColor: "#f7f7f7",
                  p: { sm: 2, xs: 0 },
                }}
              >
                <Box sx={{ padding: { sm: "0 1rem", xs: "0 .5rem" } }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "1rem",
                      color: "tertiary.main",
                      // color: "#282828",
                      fontWeight: "bold",
                    }}
                  >
                    Product Details
                  </Typography>

                  <Box
                    // component={Paper}
                    //  elevation={10}
                    borderRadius={1}
                    sx={{ width: "100%", p: 2, marginTop: ".5rem" }}
                  >
                    <TextField
                      fullWidth
                      variant="standard"
                      select
                      id="mode"
                      label="Transaction Type*"
                      onChange={(event) => handleModeChange(event)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <StoreRounded
                              sx={{
                                color: "tertiary.main",
                                fontSize: { xs: "1rem", sm: ".9rem" },
                              }}
                            />
                          </InputAdornment>
                        ),
                      }}
                    >
                      {["sell", "swap"].map((option, index) => (
                        <MenuItem key={index} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Box>

                  {mode && (
                    <Box
                      // component={Paper}
                      //  elevation={10}
                      borderRadius={1}
                      sx={{ width: "100%", p: 2, marginTop: ".5rem" }}
                    >
                      <TextField
                        fullWidth
                        variant="standard"
                        select
                        id="category"
                        label="Select Category*"
                        onChange={(event) => handleCategory(event.target.value)}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <CategoryRounded
                                sx={{
                                  color: "tertiary.main",
                                  fontSize: { xs: "1rem", sm: ".9rem" },
                                }}
                              />
                            </InputAdornment>
                          ),
                        }}
                      >
                        {categoryOptions.map((option, index) => (
                          <MenuItem key={index} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Box>
                  )}
                  <br />
                  {/* <Divider /> */}
                  <br />
                  <ProductFormsLoader mode={mode} category={category} />
                </Box>
                {/* {category && <Divider />} */}
                {/* {category && <AddProductFooter />} */}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
};
