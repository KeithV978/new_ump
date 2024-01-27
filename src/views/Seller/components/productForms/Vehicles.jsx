import * as React from "react";
import Grid from "@mui/material/Grid";
import CategoryRounded from "@mui/icons-material/CategoryRounded";
import DescriptionRounded from "@mui/icons-material/DescriptionRounded";
import PaymentRounded from "@mui/icons-material/PaymentRounded";
import TitleRounded from "@mui/icons-material/TitleRounded";
import RadioButtonCheckedRounded from "@mui/icons-material/RadioButtonCheckedRounded";
import CarCrashRounded from "@mui/icons-material/CarCrashRounded";
// import CarRentalTwoTone from "@mui/icons-material/CarRentalTwoTone";
import DateRangeRounded from "@mui/icons-material/DateRangeRounded";
import FormatPaintRounded from "@mui/icons-material/FormatPaintRounded";
import GradeRounded from "@mui/icons-material/GradeRounded";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PropType from "prop-types";
import {
  ImageLoader,
  ImageUploader, 
  TextAreaInput, 
} from "../../../../Components/Common";
import { ErrorMessage } from "../../../../Components/Common";
import { FormControl } from "../../../../Components/Common/InputHelper";
import { useFileHandler } from "../../../../hooks";
import CustomButton from "../CustomButton";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";
import AddAPhotoRounded  from "@mui/icons-material/AddAPhotoRounded";
import CloseRounded  from "@mui/icons-material/CloseRounded";
import CloudUploadRounded  from "@mui/icons-material/CloudUploadRounded";
import PaletteOutlined from "@mui/icons-material/PaletteOutlined";
// import { AuctionsDetails } from "../AuctionsDetails";
import { AspectRatioRounded } from "@mui/icons-material";

// import carBrands from '../../../devData/carBrands'

const schema = yup
  .object({
    sub_category: yup.string().required("Vehicle category is required."),
    headline: yup
      .string()
      .max(20, "Can not exceed 20 characters")
      .required("What's the vehicle headline"),
    brand: yup
      .string()
      .max(10, "Can not exceed 10 characters")
      .required("What's the brand of the vehicle?"),
    model: yup
      .string()
      .max(15, "Can not exceed 15 characters")
      .required("What's the model of the vehicle?"),
    color: yup.string().required("What's the color?"),
    year: yup.string().required("What year was it manufactured?"),
    interior: yup.string().required("What's the interior made of?"),
    grade: yup.string().required("What's the grade of the vehicle?"),
    accidented: yup
      .string()
      .max(3, "Can not exceed 3 characters")
      .required("Has it ever been in an accident?"),
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

const Vehicles = ({ mode, onSubmit, product, isLoading }) => {
  const handleOnSubmit = (data) => {
    let { tags } = product;
    let headline = data.headline.split(" ");
    let model = data.model;
    let brand = data.brand;

    if (imageFile.image.file || product.imageUrl) {
      onSubmit({
        ...product,
        ...data,
        tags: [...headline, brand, model, ...tags],
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

  // const Calc_years = () => {
  //   let num = [];
  //   for (let i = 0; i < 30; i++) {
  //     num.push(new Date().getFullYear() - i);
  //   }
  //   return num;
  // };
  // const Years = Calc_years();
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
                    label="Vehicle Category*"
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
                    {["Car", "SUV", "Bus", "Keke (Tricycle)", "Others"].map(
                      (option, index) => (
                        <MenuItem key={index} value={option}>
                          {option}
                        </MenuItem>
                      )
                    )}
                  </TextField>
                  {errors.sub_category?.message && (
                    <ErrorMessage role="alert">
                      {errors.sub_category?.message}
                    </ErrorMessage>
                  )}
                  {/* </FormControl> */}
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    variant="standard"
                    label="Item Headline*"
                    {...register("headline")}
                    placeholder="e.g Toyota Corrola"
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
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    variant="standard"
                    label="Brand*"
                    {...register("brand")}
                    // error={errors.headline ? "true" : "false"}
                    placeholder="e.g Toyota"
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
                    <ErrorMessage role="alert">
                      {errors.brand?.message}
                    </ErrorMessage>
                  )}
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    variant="standard"
                    label="Model*"
                    {...register("model")}
                    placeholder="e.g Toyota"
                    id="model"
                    defaultValue={product?.model !== "" ? product.model : ""}
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
                  {errors.model?.message && (
                    <ErrorMessage role="alert">
                      {errors.model?.message}
                    </ErrorMessage>
                  )}
                </Grid>

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
                          <FormatPaintRounded
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
                      "Red",
                      "Gold",
                      "Black",
                      "Silver",
                      "Grey",
                      "Blue",
                      "Violet",
                      "Wine",
                      "White",
                      "Others",
                    ].map((option, index) => (
                      <MenuItem key={index} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                  {errors.color?.message && (
                    <ErrorMessage role="alert">
                      {errors.color?.message}
                    </ErrorMessage>
                  )}
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    variant="standard"
                    label="Year*"
                    {...register("year")}
                    placeholder="e.g Toyota"
                    id="year"
                    defaultValue={product?.year !== "" ? product.year : ""}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <DateRangeRounded
                            sx={{
                              color: "tertiary.main",
                              fontSize: { xs: "1rem", sm: ".9rem" },
                            }}
                          />
                        </InputAdornment>
                      ),
                    }}
                  />
                  {errors.year?.message && (
                    <ErrorMessage role="alert">
                      {errors.year?.message}
                    </ErrorMessage>
                  )}
                </Grid>
              </Grid>
            </PaperWrapper>
          </Grid>

          {/* <Grid item xs={12}>
            <PaperWrapper component={Paper} elevation={10}>
              <Grid container spacing={3}>
               
              </Grid>
            </PaperWrapper>
          </Grid> */}

          <Grid item xs={12}>
            <PaperWrapper component={Paper} elevation={10}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    variant="standard"
                    select
                    id="interior"
                    label="Interior*"
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
                    {...register("interior")}
                    // error={errors.interior ? "true" : "false"}
                    defaultValue={
                      product?.interior !== "" ? product.interior : ""
                    }
                  >
                    {["Clothe", "Leather"].map((option, index) => (
                      <MenuItem key={index} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                  {errors.interior?.message && (
                    <ErrorMessage role="alert">
                      {errors.interior?.message}
                    </ErrorMessage>
                  )}
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    variant="standard"
                    select
                    id="grade"
                    label="Grade*"
                    helperText=""
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <GradeRounded
                            sx={{
                              color: "tertiary.main",
                              fontSize: { xs: "1rem", sm: ".9rem" },
                            }}
                          />
                        </InputAdornment>
                      ),
                    }}
                    {...register("grade")}
                    // error={errors.grade ? "true" : "false"}
                    defaultValue={product?.grade !== "" ? product.grade : ""}
                  >
                    {["new", "nigerian used", "tokunbo", "refurbished"].map(
                      (option, index) => (
                        <MenuItem key={index} value={option}>
                          {option}
                        </MenuItem>
                      )
                    )}
                  </TextField>
                  {errors.grade?.message && (
                    <ErrorMessage role="alert">
                      {errors.grade?.message}
                    </ErrorMessage>
                  )}
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    variant="standard"
                    select
                    id="accidented"
                    label="Accidented*"
                    helperText=""
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CarCrashRounded
                            sx={{
                              color: "tertiary.main",
                              fontSize: { xs: "1rem", sm: ".9rem" },
                            }}
                          />
                        </InputAdornment>
                      ),
                    }}
                    {...register("accidented")}
                    // error={errors.accidented ? "true" : "false"}
                    defaultValue={
                      product?.accidented !== "" ? product.accidented : ""
                    }
                  >
                    {["yes", "no"].map((option, index) => (
                      <MenuItem key={index} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                  {errors.accidented?.message && (
                    <ErrorMessage role="alert">
                      {errors.accidented?.message}
                    </ErrorMessage>
                  )}
                </Grid>
              </Grid>
            </PaperWrapper>
          </Grid>

          {/* <Grid item xs={12}>
            <PaperWrapper component={Paper} elevation={10}>
              <Grid container spacing={3}>
               
              </Grid>
            </PaperWrapper>
          </Grid> */}

          <Grid item xs={12}>
            <PaperWrapper component={Paper} elevation={10}>
              <FormControl>
                <TextAreaInput
                  label="Additional Description* (max 40 characters)"
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
                <ErrorMessage role="alert">
                  {errors.price?.message}
                </ErrorMessage>
              )}
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
              </Grid>
            </PaperWrapper>
          </Grid>
          {mode === "auction" && (
          <Grid item xs={12}>
            <PaperWrapper component={Paper} elevation={10} sx={{border: '1px solid #E91E63'}}>
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
                    <ErrorMessage role="alert">
                      {errors.expiry_date?.message}
                    </ErrorMessage>
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

Vehicles.propTypes = {
  product: PropType.shape({
    sub_category: PropType.string,
    headline: PropType.string,
    brand: PropType.string,
    model: PropType.string,
    color: PropType.string,
    interior: PropType.string,
    year: PropType.string,
    grade: PropType.string,
    accidented: PropType.string,
    price: PropType.number,
    imageUrls: PropType.arrayOf(PropType.object),
  }).isRequired,
  onSubmit: PropType.func.isRequired,
  isLoading: PropType.bool.isRequired,
};
export default Vehicles;
