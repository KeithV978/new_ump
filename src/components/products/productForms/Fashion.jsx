import * as React from "react";

import Grid from "@mui/material/Grid";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PropType from "prop-types";

import CustomButton from "../CustomButton";
import { FormControl } from "../../common/InputHelper";
import { FormErrorMessage } from "../../common";
import { ImageLoader } from "../../ImageLoader";
import ImageUploader from "../../ImageUploader";
import { useFileHandler } from "../../../hooks";
import { TextAreaInput } from "../../common";

// import CategoryRounded from "@mui/icons-material/CategoryRounded";
import FormatSizeRounded from "@mui/icons-material/FormatSizeRounded";
import MaleTwoTone from "@mui/icons-material/MaleTwoTone";
// import OnDeviceTrainingRounded from "@mui/icons-material/OnDeviceTrainingRounded";
import ProductionQuantityLimitsRounded from "@mui/icons-material/ProductionQuantityLimitsRounded";
import TitleRounded from "@mui/icons-material/TitleRounded";
// import CustomButton from "../CustomButton";
import PaymentRounded from "@mui/icons-material/PaymentRounded";
import DescriptionRounded from "@mui/icons-material/DescriptionRounded";

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
import PaletteOutlined from "@mui/icons-material/PaletteOutlined";
import RadioButtonCheckedRounded from "@mui/icons-material/RadioButtonCheckedRounded";

const schema = yup
  .object({
    sub_category: yup.string().required("What's the fashion category?"),
    headline: yup
      .string()
      .max(20)
      .required("Give the product a headline for buyers to see"),
    newness: yup.string().required("How new is it (or are they)?"),
    gender: yup.string().required("Male or female, what gender?"),
    quantity: yup.number().max(3).required("How many are there?"),
    size: yup.number().max(4).required("What's the size of it?"),
    material: yup.string(),
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

const Fashion = ({ mode, product, onSubmit, isLoading }) => {
  const handleOnSubmit = (data) => {
    let { tags } = product;
    let headline = data.headline.split(" ");
    let sub_category = data.sub_category;
    let brand = data.brand;
    let gender = data.gender;

    if (data.gender === "Hermaphrodite")
      return alert(
        "In not more than 6000 words explain with evidence, how e take be for hermaphrodite? If not I no go let you pass"
      );

    if (imageFile.image.file || product.imageUrl) {
      onSubmit({
        ...product,
        ...data,
        tags: [...headline, gender, brand, sub_category, ...tags],
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
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    variant="standard"
                    select
                    id="sub_category"
                    label="Clothing Category*"
                    helperText=""
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
                    {...register("sub_category")}
                    // error={errors.sub_category ? "true" : "false"}
                    defaultValue={
                      product?.sub_category !== "" ? product.sub_category : ""
                    }
                  >
                    {["Clothing", "Underwear"].map((option, index) => (
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
                    label="Brand*"
                    {...register("brand")}
                    // error={errors.headline ? "true" : "false"}
                    placeholder="e.g Gucci"
                    id="brand"
                    defaultValue={product?.brand !== "" ? product.brand : ""}
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
                  />
                  {errors.brand?.message && (
                    <FormErrorMessage role="alert">
                      {errors.brand?.message}
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
              </Grid>
            </PaperWrapper>
          </Grid>

          <Grid item xs={12}>
            <PaperWrapper component={Paper} elevation={10}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    variant="standard"
                    select
                    id="color"
                    label="Color*"
                    helperText=""
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PaletteOutlined
                            sx={{
                              color: "tertiary.main",
                              fontSize: { xs: "1rem", sm: ".9rem" },
                            }}
                          />
                        </InputAdornment>
                      ),
                    }}
                    {...register("color")}
                    // error={errors.color ? "true" : "false"}
                    defaultValue={product?.color !== "" ? product.color : ""}
                  >
                    {[
                      "black",
                      "red",
                      "green",
                      "red",
                      "white",
                      "grey",
                      "emrald",
                      "skyblue",
                      "redorange",
                      "orange",
                      "wine",
                      "maroon",
                    ].map((option, index) => (
                      <MenuItem key={index} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    variant="standard"
                    select
                    id="gender"
                    label="Gender*"
                    helperText=""
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <MaleTwoTone
                            sx={{
                              color: "tertiary.main",
                              fontSize: { xs: "1rem", sm: ".9rem" },
                            }}
                          />
                        </InputAdornment>
                      ),
                    }}
                    {...register("gender")}
                    // error={errors.gender ? "true" : "false"}
                    defaultValue={product?.gender !== "" ? product.gender : ""}
                  >
                    {["female", "male", "Hermaphrodite"].map(
                      (option, index) => (
                        <MenuItem key={index} value={option}>
                          {option}
                        </MenuItem>
                      )
                    )}
                  </TextField>
                  {errors.gender?.message && (
                    <FormErrorMessage role="alert">
                      {errors.gender?.message}
                    </FormErrorMessage>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  {/* <FormControl> */}
                  <TextField
                    fullWidth
                    variant="standard"
                    label="Quantity"
                    {...register("quantity")}
                    // error={errors.quantity ? "true" : "false"}
                    // placeholder="e.g"
                    placeholder="e.g. 4"
                    id="quantity"
                    defaultValue={
                      product?.quantity !== "" ? product.quantity : ""
                    }
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <ProductionQuantityLimitsRounded
                            sx={{
                              color: "tertiary.main",
                              fontSize: { xs: "1rem", sm: ".9rem" },
                            }}
                          />
                        </InputAdornment>
                      ),
                    }}
                  />
                  {errors.quantity?.message && (
                    <FormErrorMessage role="alert">
                      {errors.quantity?.message}
                    </FormErrorMessage>
                  )}
                  {/* </FormControl> */}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    select
                    variant="standard"
                    id="material"
                    label="Material*"
                    helperText=""
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
                    {...register("material")}
                    // error={errors.material ? "true" : "false"}
                    defaultValue={
                      product?.material !== "" ? product.material : ""
                    }
                  >
                    {[
                      "leather",
                      "cotton",
                      "plastic",
                      "rubber",
                      "wood",
                      "copper",
                      "brass",
                      "iron",
                    ].map((option, index) => (
                      <MenuItem key={index} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                  {errors.material?.message && (
                    <FormErrorMessage role="alert">
                      {errors.material?.message}
                    </FormErrorMessage>
                  )}
                </Grid>
              </Grid>
            </PaperWrapper>
          </Grid>

          <Grid item xs={12}>
            <PaperWrapper component={Paper} elevation={10}>
              <TextField
                fullWidth
                variant="standard"
                label="Size*"
                {...register("size")}
                // error={errors.headline ? "true" : "false"}
                placeholder="e.g 18 or XXL"
                id="size"
                defaultValue={product?.size !== "" ? product.size : ""}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FormatSizeRounded
                        sx={{
                          color: "tertiary.main",
                          fontSize: { xs: "1rem", sm: ".9rem" },
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
              {errors.size?.message && (
                <FormErrorMessage role="alert">
                  {errors.size?.message}
                </FormErrorMessage>
              )}
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
              {errors.price?.messagrae && (
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

Fashion.propTypes = {
  product: PropType.shape({
    sub_category: PropType.string,
    headline: PropType.string,
    gender: PropType.string,
    price: PropType.number,
    size: PropType.string,
    quantity: PropType.string,
    material: PropType.string,
    availableColors: PropType.arrayOf(PropType.string),
    imageUrls: PropType.arrayOf(PropType.object),
  }).isRequired,
  onSubmit: PropType.func.isRequired,
  isLoading: PropType.bool.isRequired,
};

export default Fashion;
