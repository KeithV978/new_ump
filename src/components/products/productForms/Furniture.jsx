import * as React from "react";
import * as yup from "yup";
import PropType from "prop-types";

import Grid from "@mui/material/Grid";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import CustomButton from "../CustomButton";
import { FormControl } from "../../common/InputHelper";
import { FormErrorMessage } from "../../common";
import { ImageLoader } from "../../ImageLoader";
import ImageUploader from "../../ImageUploader";
import { useFileHandler } from "../../../hooks";
import { TextAreaInput } from "../../common";

import CategoryRounded from "@mui/icons-material/CategoryRounded";
import DescriptionRounded from "@mui/icons-material/DescriptionRounded";
// import OnDeviceTrainingRounded from "@mui/icons-material/OnDeviceTrainingRounded";
import PaymentRounded from "@mui/icons-material/PaymentRounded";
import TitleRounded from "@mui/icons-material/TitleRounded";
import NumbersRounded from "@mui/icons-material/NumbersRounded";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";

import AddAPhotoRounded from "@mui/icons-material/AddAPhotoRounded";
import AspectRatioRounded from "@mui/icons-material/AspectRatioRounded";
import CloseRounded from "@mui/icons-material/CloseRounded";
import CloudUploadRounded from "@mui/icons-material/CloudUploadRounded";
import RadioButtonCheckedRounded from "@mui/icons-material/RadioButtonCheckedRounded";

const schema = yup
  .object({
    sub_category: yup.string().required("Furniture category is required"),
    headline: yup
      .string()
      .max(20)
      .required("Furniture headline is required, don't you think?"),
    newness: yup.string().required("How new is the furniture?"),
    set: yup.string().max(10).required("How many in a set?"),
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

const Furniture = ({ mode, product, onSubmit, isLoading }) => {
  const handleOnSubmit = (data) => {
    let { tags } = product;
    let headline = data.headline.split(" ");
    let sub_category = data.sub_category;

    if (imageFile.image.file || product.imageUrl) {
      onSubmit({
        ...product,
        ...data,
        tags: [...headline, sub_category, ...tags],
        dateAdded: new Date().getTime(),
      });
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
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    variant="standard"
                    select
                    id="sub_category"
                    label="Furniture Category*"
                    helperText=""
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
                    {...register("sub_category")}
                    // error={errors.sub_category ? "true" : "false"}
                    defaultValue={
                      product?.sub_category !== "" ? product.sub_category : ""
                    }
                  >
                    {[
                      "Chair",
                      "Bed Frame",
                      "Mattress",
                      "Beddings",
                      "Others",
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
                    variant="standard"
                    label="Item Headline*"
                    {...register("headline")}
                    placeholder="e.g 6x6 bed frame"
                    id="headline"
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
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    variant="standard"
                    select
                    id="newness"
                    label="Newness*"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <RadioButtonCheckedRounded
                            sx={{
                              color: "tertiary.main",
                              fontSize: { xs: "1rem", sm: ".9rem" },
                            }}
                          />
                        </InputAdornment>
                      ),
                    }}
                    {...register("newness")}
                    defaultValue={
                      product?.newness !== "" ? product.newness : ""
                    }
                  >
                    {[
                      "new",
                      "nigerian Used",
                      "foreign Used",
                      "refurbished",
                    ].map((option, index) => (
                      <MenuItem key={index} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>

                  {errors.newness?.message && (
                    <FormErrorMessage role="alert">
                      {errors.newness?.message}
                    </FormErrorMessage>
                  )}
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    variant="standard"
                    select
                    id="set"
                    label="How many in a set?*"
                    helperText=""
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <NumbersRounded
                            sx={{
                              color: "tertiary.main",
                              fontSize: { xs: "1rem", sm: ".9rem" },
                            }}
                          />
                        </InputAdornment>
                      ),
                    }}
                    {...register("sub_category")}
                    // error={errors.sub_category ? "true" : "false"}
                    defaultValue={
                      product?.sub_category !== "" ? product.sub_category : ""
                    }
                  >
                    {["1", "2", "3", "4", "5", "6", "7", "8", "9", ">10"].map(
                      (option, index) => (
                        <MenuItem key={index} value={option}>
                          {option}
                        </MenuItem>
                      )
                    )}
                  </TextField>
                  {errors.sub_category?.message && (
                    <FormErrorMessage role="alert">
                      {errors.sub_category?.message}
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
                variant="standard"
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

          {mode === "auction" && (
            <Grid item xs={12}>
              <PaperWrapper
                component={Paper}
                elevation={10}
                sx={{ border: "1px solid #E91E63" }}
              >
                <TextField
                  fullWidth
                  variant="standard"
                  label="Auction Expiry Date"
                  {...register("expiry_date")}
                  // placeholder="e.g 5'"
                  id="expiry_date"
                  type="date"
                  // defaultValue={product?.expiry_date !== "" ? product.expiry_date : ""}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AspectRatioRounded
                          sx={{
                            color: "tertiary.main",
                            fontSize: { xs: "1rem", sm: "1rem" },
                          }}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
                {errors.expiry_date?.message && (
                  <FormErrorMessage role="alert">
                    {errors.expiry_date?.message}
                  </FormErrorMessage>
                )}
              </PaperWrapper>
            </Grid>
          )}
          <Grid item xs={12} sm={3}>
            <CustomButton isLoading={isLoading} />
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
};
Furniture.propTypes = {
  product: PropType.shape({
    sub_category: PropType.string,
    headline: PropType.string,
    price: PropType.number,
    imageUrls: PropType.arrayOf(PropType.object),
  }).isRequired,
  onSubmit: PropType.func.isRequired,
  isLoading: PropType.bool.isRequired,
};
export default Furniture;
