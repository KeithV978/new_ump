import * as React from "react";
import PropType from "prop-types";
import Grid from "@mui/material/Grid";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { FormControl } from "../../../../Components/Common/InputHelper";
import {
  ErrorMessage,
  ImageLoader,
  ImageUploader,
  TextAreaInput,
} from "../../../../Components/Common";
// import { TextInput, SelectInput } from "../../../../Components/Common";
import BusinessRounded from "@mui/icons-material/BusinessRounded";
import DesignServicesRounded from "@mui/icons-material/DesignServicesRounded";
import LocationCity from "@mui/icons-material/LocationCity";
import PhoneRounded from "@mui/icons-material/PhoneRounded";
import DescriptionRounded from "@mui/icons-material/DescriptionRounded";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { useFileHandler } from "../../../../hooks";

import CustomButton from "../CustomButton";

import { styled } from "@mui/material";
import {
  AddAPhotoRounded,
  CloseRounded,
  CloudUploadRounded,
} from "@mui/icons-material";

const schema = yup
  .object({
    service: yup.string().required("Service is required"),
    headline: yup.string().max(20).required("Headline is required"),
    contact_number: yup.number(11).required("Contact is required"),
    address: yup.string().max(20).required("Address is required"),
    description: yup.string().max(40, 'Description should not exceed 40 characters'),
    isFeatured: yup.boolean(),
    isRecommended: yup.boolean(),
  })
  .required();

const PaperWrapper = styled(Box)(() => ({
  padding: "1rem 1.5rem",
  margin: ".5rem 0",
}));

const Services = ({ product, onSubmit, isLoading, mode }) => {
  const handleOnSubmit = (data) => {
    let { tags } = product;
    let headline = data.headline.split(" ");
    let sub_category = data.sub_category;
    let service = data.service;

    
    if (imageFile.image.file || product.imageUrl) {
    onSubmit({
      ...product,
      ...data,
      tags: [...headline, service, sub_category, ...tags],
    });
      
      
    } else {
      // eslint-disable-next-line no-alert
      alert('Product thumbnail image is required.');
    }
  };

  const { imageFile, isFileLoading, onFileChange, removeImage } =
    useFileHandler({ imageCollection: [] });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <PaperWrapper component={Paper} elevation={10}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    variant="standard"
                    select
                    id="services"
                    label="Device Category*"
                    helperText=""
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <DesignServicesRounded
                            sx={{
                              color: "tertiary.main",
                              fontSize: { xs: "1rem", sm: ".9rem" },
                            }}
                          />
                        </InputAdornment>
                      ),
                    }}
                    {...register("services")}
                    // error={errors.services ? "true" : "false"}
                    defaultValue={
                      product?.services !== "" ? product.services : ""
                    }
                  >
                    {[
                      "Dry Cleaner",
                      "Painter",
                      "Graphics Designer",
                      "Cooking gas",
                      "Electrician",
                      "Plumber",
                      "A/C Specialist",
                      "Mechanic",
                      "Photographer",
                      "Live Band",
                      "Hair Stylist",
                      "Makeup Artist",
                      "Barber",
                      "Logistics",
                      "Fashion Designer",
                      "Interior Decorator",
                      "Event Planner",
                      "Caterer",
                      "Taxi/Cab Hailing",
                      "Artist",
                      "SPA",
                      "Shoemaker",
                    ].map((option, index) => (
                      <MenuItem key={index} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                  {errors.services?.message && (
                    <ErrorMessage role="alert">
                      {errors.services?.message}
                    </ErrorMessage>
                  )}
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    variant="standard"
                    label="Business Name*"
                    {...register("headline")}
                    // error={errors.headline ? "true" : "false"}
                    placeholder="e.g ABC shoemakers"
                    id="headline"
                    defaultValue={
                      product?.headline !== "" ? product.headline : ""
                    }
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <BusinessRounded
                            sx={{
                              color: "tertiary.main",
                              fontSize: { xs: "1rem", sm: ".9rem" },
                            }}
                          />
                        </InputAdornment>
                      ),
                    }}
                  />
                  {errors.headline?.message && (
                    <ErrorMessage role="alert">
                      {errors.headline?.message}
                    </ErrorMessage>
                  )}
                </Grid>
              </Grid>
            </PaperWrapper>
          </Grid>

          <Grid item xs={12}>
            <PaperWrapper component={Paper} elevation={10}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    variant="standard"
                    label="Your Phone Contact*"
                    {...register("contact_number")}
                    // error={errors.phone ? "true" : "false"}
                    placeholder="e.g 080124xxxx24"
                    id="contact_number"
                    defaultValue={
                      product?.contact_number !== ""
                        ? product.contact_number
                        : ""
                    }
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PhoneRounded
                            sx={{
                              color: "tertiary.main",
                              fontSize: { xs: "1rem", sm: ".9rem" },
                            }}
                          />
                        </InputAdornment>
                      ),
                    }}
                  />
                  {errors.contact_number?.message && (
                    <ErrorMessage role="alert">
                      {errors.contact_number?.message}
                    </ErrorMessage>
                  )}
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    variant="standard"
                    label="Business Address*"
                    {...register("address")}
                    // error={errors.address ? "true" : "false"}
                    // placeholder="e.g Samsung Galaxy A03s"
                    id="address"
                    defaultValue={
                      product?.address !== "" ? product.address : ""
                    }
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LocationCity
                            sx={{
                              color: "tertiary.main",
                              fontSize: { xs: "1rem", sm: ".9rem" },
                            }}
                          />
                        </InputAdornment>
                      ),
                    }}
                  />
                  {errors.address?.message && (
                    <ErrorMessage role="alert">
                      {errors.address?.message}
                    </ErrorMessage>
                  )}
                </Grid>
              </Grid>
            </PaperWrapper>
          </Grid>

          <Grid item xs={12}>
            <PaperWrapper component={Paper} elevation={10}>
              <FormControl>
                <TextAreaInput
                  label="Business Description* (max 40 characters)"
                  {...register("description")}
                  placeholder="e.g"
                  id="description"
                  labelIcon={
                    <DescriptionRounded
                      sx={{
                        color: "tertiary.main",
                        fontSize: { xs: "1rem", sm: ".9rem" },
                      }}
                    />
                  }
                  defaultValue={
                    product?.description !== "" ? product.description : ""
                  }
                />
                {errors.description?.message && (
                  <ErrorMessage role="alert">
                    {errors.description.message}
                  </ErrorMessage>
                )}
              </FormControl>
            </PaperWrapper>
          </Grid>
          <Grid item xs={12}>
            <PaperWrapper component={Paper} elevation={10}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <div>
                    <div>
                      {/* {console.log(imageFile.imageCollection[0].file.name)} */}
                      {imageFile.imageCollection.length >= 1 &&
                        imageFile.imageCollection.map((image) => (
                          <div
                            key={image.id}
                            style={{
                              display: "flex",
                              width: "min-content",
                              backgroundColor: "#f6f6f6",
                              margin: ".5rem 0",
                            }}
                          >
                            <ImageLoader
                              alt=""
                              src={image.url}
                              fileName={image.file.name}
                              size={image.size}
                            />
                            <IconButton
                              onClick={() =>
                                removeImage({
                                  id: image.id,
                                  name: "imageCollection",
                                })
                              }
                            >
                              <CloseRounded sx={{ fontSize: ".8rem" }} />
                            </IconButton>
                          </div>
                        ))}
                    </div>
                  </div>
                </Grid>

                <Grid item xs={12}>
                  <FormControl>
                    <label>
                      <AddAPhotoRounded
                        sx={{
                          color: "tertiary.main",
                          fontSize: { xs: "1rem", sm: "1rem" },
                        }}
                      />{" "}
                      {"Product Photo*"}
                    </label>
                    <div>
                      {!isFileLoading && (
                        <ImageUploader htmlFor="product-image">
                          <input
                            type="file"
                            disabled={isLoading}
                            hidden
                            id="product-image"
                            onChange={(event) =>
                              onFileChange(event, {
                                name: "imageCollection",
                                type: "multiple",
                              })
                            }
                            readOnly={isLoading}
                          />
                          <Typography variant="p" sx={{ alignItems: "center" }}>
                            <CloudUploadRounded
                              sx={{
                                color: "tertiary.main",
                                padding: 0,
                                fontSize: "1rem",
                              }}
                            />
                            &nbsp; &nbsp;
                            {/* {'Drag and Drop or Cick here.'} */}
                            {"Select Photos"}
                          </Typography>
                        </ImageUploader>
                      )}
                      <Typography variant="body2" sx={{ mt: 2 }}>
                        <i>{"*Each Image cannot exceed 500kb in size"}</i>
                      </Typography>
                    </div>
                  </FormControl>
                </Grid>
              </Grid>
            </PaperWrapper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomButton isLoading={isLoading} />
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
};
Services.propTypes = {
  product: PropType.shape({
    service: PropType.string,
    businessName: PropType.string,
    phone: PropType.string,
    address: PropType.string,
    imageUrls: PropType.arrayOf(PropType.object),
  }).isRequired,
  onSubmit: PropType.func.isRequired,
  isLoading: PropType.bool.isRequired,
};
export default Services;
