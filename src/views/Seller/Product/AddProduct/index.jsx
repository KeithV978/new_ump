import * as React from "react";
// import { createStorem  } from 'redux'
// import { Provider } from "react-redux";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
// import Divider from "@mui/material/Divider";
import StoreRounded from "@mui/icons-material/StoreRounded";

// import Button from "@mui/material/Button";

import { useDocumentTitle, useScrollTop } from "../../../../hooks";

import { SelectInput } from "../../../../Components/Common";
import { FormControl } from "../../../../Components/Common/InputHelper";
import { useParams } from "react-router-dom";

import { AddProductFooter } from "./AddProductFooter";
// import { FormWizard } from "./FormWizard";

import { motion } from "framer-motion";
// import { FormStepper } from "./FormStepper";
// import { ImageUpload } from "./ImageUpload";

import addAnItem from "../../../../Assets/Images/addProductDoodlee.png";
import { ProductFormsLoader } from "./ProductFormsLoader";

const AddProduct = () => {
  const { mode } = useParams();
  const [category, setCategory] = React.useState("");
  // const [stepsTag, setStepstag] = React.useState([]);
  // const [toggleDisableCategoriesDropdown, setDisableCategoriesDropdown] =
  //   React.useState(false);

  // const categoriesDisabler = (val) => {
  //   setDisableCategoriesDropdown(val);
  // };
  const theme = useTheme();
  useScrollTop();
  useDocumentTitle(
    `${
      mode.charAt(0).toUpperCase() + mode.slice(1)
    }  A New Product | Uniben Marketplace`
  );

  const handleCategory = (event) => {
    setCategory(event.target.value);
    // dispatch(setCate)
  };

  // React.useEffect(() => {
  //   mode === "auction"
  //     ? setStepstag([
  //         "Item Details",
  //         "Photo Upload",
  //         "Auction Details (Finish)",
  //       ])
  //     : setStepstag(["Item Details", "Photo Upload (Finish)"]);
  // }, [mode]);

  return (
    <Box 
      sx={{
        marginTop: { sm: "-1rem", xs: "-1rem" },
        pb: { xs: 5, sm: 8 },
        backgroundColor: "#fefefe",
        backgroundImage: `url('${addAnItem}')`,
        backgroundSize: "25%",
        backgroundPosition: "left",
        // backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          padding: "1rem 0",
          backgroundColor: `${[theme.palette.primary.main]}`,
        }}
      >
        <Container>
          <Box sx={{ width: "100%", margin: "auto", padding: "1.2rem 0" }}>
            <Typography variant="h4" color="#fff" fontWeight={600}>
              {mode.charAt(0).toUpperCase() + mode.slice(1)} An Item
            </Typography>
            <span style={{ display: "flex", alignItems: "center" }}>
              <StoreRounded sx={{ color: "tertiary.main" }} />
              <Typography variant="body2" sx={{ color: "#fff" }}>
                {(() => {
                  switch (mode) {
                    case "swap":
                      return "Swap out the old for a new.";
                    case "sell":
                      return "Make other students happy.\n Sell what they need.";
                    case "auction":
                      return "Welcome to the auctions table.\n Upload details to proceed";
                    default:
                      break;
                  }
                })()}
              </Typography>
            </span>
          </Box>
        </Container>
      </Box>
      <Box sx={{ pt: { sm: 4, xs: 2 }, pb: 2 }}>
        <Container
          sx={{
            // width: { xs: "100%", sm: "55%" },
            padding: { sm: "", xs: 0 },
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <Box
                component={Paper}
                 elevation={10}
                borderRadius={3}
              >
                 <AddProductFooter />
                {/* Then a product card showing the details as they're being entered */}
              </Box>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Box
                // component={Paper}
                // elevation={2}
                // borderRadius={3}
                sx={{
                  // borderRadius: { xs: "4px", sm: "2px" },
                  // backgroundColor: "#f7f7f7",
                  p: {sm:2, xs: 0},
                }}
              >
                <Box sx={{ padding: { sm: "0 1rem", xs: "0 .5rem" } }}>
                  <Box
                    component={Paper}
                     elevation={10}
                    borderRadius={3}
                    sx={{width: '100%', p:2, }}
                  >
                    <FormControl>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "1rem",
                          color: "tertiary.main",
                          // color: "#282828",
                          fontWeight: "bold",
                        }}
                      >
                        Select a category
                      </Typography>
                      {/* <Divider sx={{ margin: " 1rem 0" }} /> */}

                      <SelectInput
                        name=""
                        // labelIcon={<CategoryRounded sx={{color: 'primary.light', fontSize: {xs: '1rem', sm: '.9rem'}}}/>}
                        id="category"
                        // label="Category"
                        // disable={toggleDisableCategoriesDropdown}
                        value={category}
                        onChangeHandler={(event) => handleCategory(event)}
                        options={
                          mode === "sell"
                            ? [
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
                              ]
                            : [
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
                              ]
                        }
                      />
                    </FormControl>
                  </Box>
                  <br />
                  {/* <Divider /> */}
                  <br />
                  <motion.div
                    initial={{ marginLeft: "-200px", opacity: 0 }}
                    animate={{ opacity: 1, marginLeft: 0 }}
                    exit={{ marginLeft: "-200px", opacity: 0 }}
                    transition={{ ease: "easeInOut" }}
                  >
                    {/* <FormWizard
                      category={category}
                      mode={mode}
                      setDisableCategoriesDropdown={categoriesDisabler}
                    /> */}
                    <ProductFormsLoader mode={mode} category={category} />
                  </motion.div>
                </Box>
                {/* {category && <Divider />} */}
                {/* {category && <AddProductFooter />} */}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};
export default AddProduct;
