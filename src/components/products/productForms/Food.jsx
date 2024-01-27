import * as React from "react";
import * as yup from "yup";
import PropType from "prop-types";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Grid from "@mui/material/Grid";

import CustomButton from "../CustomButton";
import { FormControl } from "../../common/InputHelper";
import { FormErrorMessage } from "../../common";
import { ImageLoader } from "../../ImageLoader";
import ImageUploader from "../../ImageUploader";
import { useFileHandler } from "../../../hooks";
import { TextAreaInput } from "../../common";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";

import CategoryRounded from "@mui/icons-material/CategoryRounded";
import DescriptionRounded from "@mui/icons-material/DescriptionRounded";
import PaymentRounded from "@mui/icons-material/PaymentRounded";
import TitleRounded from "@mui/icons-material/TitleRounded";

import AddAPhotoRounded from "@mui/icons-material/AddAPhotoRounded";
import CloseRounded from "@mui/icons-material/CloseRounded";
import CloudUploadRounded from "@mui/icons-material/CloudUploadRounded";

const schema = yup
  .object({
    sub_category: yup.string().required("What's the category of the food?"),
    headline: yup
      .string()
      .max(20)
      .required("Give it a headline for buyers to see."),
    price: yup
      .number()
      .positive("Price is invalid")
      .integer("Must be a number")
      .required("Price is required"),
    description: yup
      .string()
      .max(40, "Description should not exceed 40 characters"),
    isFeatured: yup.boolean(),
    isRecommended: yup.boolean(),
  })
  .required();

const PaperWrapper = styled(Box)(() => ({
  padding: "1rem 1.5rem",
  margin: ".5rem 0",
}));

const Food = ({ product, onSubmit, isLoading }) => {
  const handleOnSubmit = (data) => {
    let { tags } = product;
    let headline = data.headline.split(" ");
    let sub_category = data.sub_category;

    const combinedData = {
      ...product,
      ...data,
      tags: [...headline, sub_category, ...tags],
    };

    if (imageFile.image.file || product.imageUrl) {
      onSubmit(...combinedData);
    } else {
      // eslint-disable-next-line no-alert
      alert("Product thumbnail image is required.");
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
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    select
                    id="sub_category"
                    label="Food Category*"
                    helperText=""
                    labelIcon={
                      <CategoryRounded
                        sx={{
                          color: "tertiary.main",
                          fontSize: { xs: "1rem", sm: ".9rem" },
                        }}
                      />
                    }
                    {...register("sub_category")}
                    // error={errors.sub_category ? "true" : "false"}
                    defaultValue={
                      product?.sub_category !== "" ? product.sub_category : ""
                    }
                  >
                    {[
                      "Cakes",
                      "Bread",
                      "Perfaits",
                      "Ice cream",
                      "Yoghurt",
                      "Juice",
                      "Pizza",
                      "African Dish",
                      "Snack",
                      "Drinks",
                      "Fresh Vegetables",
                      "Raw Food",
                    ].map((option, index) => (
                      <MenuItem key={index} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                  {errors.sub_category?.message && (
                    <FormErrorMessage role="alert">
                      {errors.sub_category?.message}
                    </FormErrorMessage>
                  )}
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Food Name*"
                    {...register("headline")}
                    id="headline"
                    placeholder="e.g Amala and Ewedu"
                    defaultValue={
                      product?.headline !== "" ? product.headline : ""
                    }
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <TitleRounded
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
                    <FormErrorMessage role="alert">
                      {errors.headline?.message}
                    </FormErrorMessage>
                  )}
                </Grid>
              </Grid>
            </PaperWrapper>
          </Grid>

          <Grid item xs={12}>
            <PaperWrapper component={Paper} elevation={10}>
              <FormControl>
                <TextAreaInput
                  label="Additional Description"
                  labelIcon={
                    <DescriptionRounded
                      sx={{
                        color: "tertiary.main",
                        fontSize: { xs: "1rem", sm: ".9rem" },
                      }}
                    />
                  }
                  reg={{ ...register("description") }}
                  placeholder="e.g"
                  id="description"
                  defaultValue={
                    product?.description !== "" ? product.description : ""
                  }
                />
                {errors.description?.message && (
                  <FormErrorMessage role="alert">
                    {errors.description.message}
                  </FormErrorMessage>
                )}
              </FormControl>
            </PaperWrapper>
          </Grid>

          <Grid item xs={12}>
            <PaperWrapper component={Paper} elevation={10}>
              <TextField
                fullWidth
                label={`Price*`}
                {...register("price")}
                placeholder=""
                defaultValue={product?.price !== "" ? product.price : ""}
                id="price"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PaymentRounded
                        sx={{
                          color: "tertiary.main",
                          fontSize: { xs: "1rem", sm: "1rem" },
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
              {errors.price?.message && (
                <FormErrorMessage role="alert">
                  {errors.price?.message}
                </FormErrorMessage>
              )}
            </PaperWrapper>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <PaperWrapper component={Paper} elevation={10} sx={{ p: 2 }}>
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
                            <Typography
                              variant="p"
                              sx={{ alignItems: "center" }}
                            >
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
                </PaperWrapper>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={3}>
            <CustomButton isLoading={isLoading} />
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
};
Food.propTypes = {
  product: PropType.shape({
    sub_category: PropType.string,
    headline: PropType.string,
    price: PropType.number,
    imageUrls: PropType.arrayOf(PropType.object),
  }).isRequired,
  onSubmit: PropType.func.isRequired,
  isLoading: PropType.bool.isRequired,
};
export default Food;
