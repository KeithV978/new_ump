import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
// ButtonGroup,
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { LoadingOutlined } from "@ant-design/icons";
import { FormControl } from "../../Components/Common/InputHelper";
import {
  ErrorMessage,
  //  TitleBar
} from "../../Components/Common";
import { TextInput, SelectInput, DatePicker } from "../../Components/Common";
import { useDispatch } from "react-redux";
import { addRequest } from "../../Redux/actions/request_action";

import CategoryRounded from "@mui/icons-material/CategoryRounded";
// import ChevronRightRounded from "@mui/icons-material/ChevronRightRounded";
import ContactPhone from "@mui/icons-material/ContactPhone";
// import FiberNewRounded from "@mui/icons-material/FiberNewRounded";
import PermIdentityRounded from "@mui/icons-material/PermIdentityRounded";
// import PublishRounded from "@mui/icons-material/PublishRounded";
import RequestPageRounded from "@mui/icons-material/RequestPageRounded";
import ViewHeadlineRounded from "@mui/icons-material/ViewHeadlineRounded";
// import { DatePicker } from "@mui/x-date-pickers";
// import dayjs from "dayjs";
// import ProductGrid from "../../Components/Product/ProductGrid";
// import productsData from "../../devData/productData";
import { TextField, useTheme } from "@mui/material";

const RequestForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  // const [expiry_date, setExpiryDate] = useState(new Date().toLocaleDateString());

  const dispatch = useDispatch();

  const handleOnSubmit = (data) => {
    if (data.expiry_date !== "") {
      setIsLoading(true);
      const mergedData = { ...data, expiary_date: data.expiry_date };

      console.log(data);
      dispatch(addRequest(mergedData));
    }
    setIsLoading(false);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const theme = useTheme();
  return (
    <Fragment>
      <Box
        sx={{
          marginTop: { sm: "-1rem", xs: "-.1rem" },
          pb: { xs: 5, sm: 8 },
          backgroundImage: `linear-gradient(180deg, ${[
            theme.palette.primary.main,
          ]}  50%,  #f9f9f9 50%)`,
        }}
      >
        <Box sx={{ margin: "1rem 0" }}>
          <Container>
            {/* <Box component={Paper} elevation={1}> */}
            <Box sx={{ width: "90%", margin: "auto", p: "1rem" }}>
              <Typography variant="h4" fontWeight={600} color="#fff">
                Pre-order an Item
              </Typography>
              <span style={{ display: "flex", alignItems: "center" }}>
                <RequestPageRounded
                  sx={{ color: `${[theme.palette.tertiary.main]}` }}
                />{" "}
                <Typography variant="body2" sx={{ color: "#fff" }}>
                  {`Place a request on any item you need. And sellers would get across to you.`}
                </Typography>
              </span>
            </Box>
            {/* </Box> */}
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box
                  component={Paper}
                  elevation={4}
                  sx={{
                    width: { xs: "100%", sm: "70%" },
                    margin: "auto",
                    borderRadius: "12px",
                    borderTopWidth: "3px",
                    borderTopStyle: "solid",
                    borderTopColor: "primary.light",
                    borderBottomWidth: "3px",
                    borderBottomStyle: "solid",
                    borderBottomColor: "primary.light",
                    marginTop: { xs: "", sm: "2rem" },
                    padding: "2rem",
                    // margin: "3rem 0",
                  }}
                >
                  <Box
                    sx={{
                      alignItems: "center",
                      pb: 1,
                      // backgroundColor: 'tertiary.main'
                    }}
                  >
                    <Typography variant="h6" color="primary.light">
                      {/* <span>{"Request Form"}</span> */}
                    </Typography>
                    <Typography
                      variant="p"
                      sx={{ fontSize: "1rem", color: "primary.light" }}
                    >
                      Tell Sellers what you need
                    </Typography>
                  </Box>
                  <Divider />
                  <form onSubmit={handleSubmit(handleOnSubmit)}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <FormControl>
                          {/* <TextField
                            margin="normal"
                            // disabled={isAuthenticating}
                            fullWidth
                            id="headline"
                            label="Seller's Name"
                            autoComplete="Full Name"
                            autoFocus
                            {...register("headline", { required: true })}
                            aria-invalid={errors.headline ? "true" : "false"}
                          /> */}
                          <TextInput
                            label="Item Headline"
                            labelIcon={
                              <ViewHeadlineRounded
                                sx={{
                                  color: "primary.light",
                                  fontSize: { sm: ".9rem", xs: "1rem" },
                                }}
                              />
                            }
                            reg={{
                              ...register("headline", {
                                required: true,
                                maxLength: 20,
                              }),
                            }}
                            error={errors.headline ? "true" : "false"}
                            placeholder="e.g Self contained in Ekosodin"
                            id="headline"
                          />
                          {errors.headline?.type === "required" && (
                            <ErrorMessage role="alert">
                              *The product headline is required
                            </ErrorMessage>
                          )}
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FormControl>
                          <TextInput
                            label="Your Name"
                            labelIcon={
                              <PermIdentityRounded
                                sx={{
                                  color: "primary.light",
                                  fontSize: { sm: ".9rem", xs: "1rem" },
                                }}
                              />
                            }
                            reg={{
                              ...register("name", {
                                required: true,
                                maxLength: 20,
                              }),
                            }}
                            error={errors.name ? "true" : "false"}
                            placeholder="e.g Kelvin"
                            id="name"
                          />
                          {errors.name?.type === "required" && (
                            <ErrorMessage role="alert">
                              *Your name is required
                            </ErrorMessage>
                          )}
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FormControl>
                          <TextInput
                            label="Your Phone"
                            labelIcon={
                              <ContactPhone
                                sx={{
                                  color: "primary.light",
                                  fontSize: { sm: ".9rem", xs: "1rem" },
                                }}
                              />
                            }
                            reg={{
                              ...register("phone", {
                                required: true,
                                maxLength: 20,
                              }),
                            }}
                            error={errors.phone ? "true" : "false"}
                            id="phone"
                          />
                          {errors.phone?.type === "required" && (
                            <ErrorMessage role="alert">
                              *Your contact number is required
                            </ErrorMessage>
                          )}
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FormControl>
                          <SelectInput
                            reg={{
                              ...register("category", { required: true }),
                            }}
                            error={errors.category ? "true" : "false"}
                            id="category"
                            label="Category"
                            labelIcon={
                              <CategoryRounded
                                sx={{
                                  color: "primary.light",
                                  fontSize: { sm: ".9rem", xs: "1rem" },
                                }}
                              />
                            }
                            options={[
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
                            ]}
                          />
                          {errors.category?.type === "required" && (
                            <ErrorMessage role="alert">
                              *Please Specify Category
                            </ErrorMessage>
                          )}
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FormControl>
                          <FormControl>
                            <DatePicker minDate="" maxDate="" />

                            {errors.expiry_date?.type === "required" && (
                              <ErrorMessage role="alert">
                                *Expiriy Date?
                              </ErrorMessage>
                            )}
                            {errors.expiry_date?.type === "required" && (
                              <ErrorMessage role="alert">
                                *This Field is Required
                              </ErrorMessage>
                            )}
                          </FormControl>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="Submit"
                          disabled={isLoading}
                          // onClick={() => setIsLoading(true)}
                          variant="contained"
                          sx={{ mt: 3, mb: 2, p: 1 }}
                        >
                          {isLoading && <LoadingOutlined />}
                          &nbsp;
                          {isLoading ? "Pre-ordering" : "Pre-order"}
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Box>
              </Grid>
              {/* <Grid item xs={12}>
                <Divider sx={{ borderColor: "tertiary.main" }} />
                <br />
                <Box>
                  <TitleBar>
                    <Typography sx={{ fontWeight: "" }}>
                      Recently Added{" "}
                      <FiberNewRounded sx={{ fontSize: ".9rem" }} />{" "}
                    </Typography>
                    <Typography
                      sx={{ fontWeight: "" }}
                      component="a"
                      href="https://unibenmarketplace.com/search"
                    >
                      See More{" "}
                      <ChevronRightRounded sx={{ fontSize: ".9rem" }} />
                    </Typography>
                  </TitleBar>
                </Box>{" "}
                <ProductGrid products={productsData} gap={2} />
              </Grid> */}
            </Grid>
          </Container>
        </Box>
      </Box>
    </Fragment>
  );
};

export default RequestForm;
