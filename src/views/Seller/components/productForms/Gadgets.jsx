import * as React from "react";

import PropType from "prop-types";
import Grid from "@mui/material/Grid";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { 
  ErrorMessage,
  ImageLoader,
  ImageUploader,
  TextAreaInput,
} from "../../../../Components/Common";

import { FormControl } from "../../../../Components/Common/InputHelper";
// import OnDeviceTrainingRounded from "@mui/icons-material/OnDeviceTrainingRounded";
import CategoryRounded from "@mui/icons-material/CategoryRounded";
import RadioButtonCheckedRounded from "@mui/icons-material/RadioButtonCheckedRounded";
import TitleRounded from "@mui/icons-material/TitleRounded";
import PaletteOutlined from "@mui/icons-material/PaletteOutlined";
import PaymentRounded from "@mui/icons-material/PaymentRounded";
import CustomButton from "../CustomButton";
import { AddAPhotoRounded, AspectRatioRounded, CloseRounded, CloudUploadRounded, DescriptionRounded } from "@mui/icons-material";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { useFileHandler } from "../../../../hooks";
import { styled } from "@mui/material";
// import { AuctionsDetails } from "../AuctionsDetails";



const schema = yup
  .object({
    sub_category: yup.string().required('What category is the gadget?'),
    brand: yup.string().max(10).required('What brand is the gadget?'),
    headline: yup.string().max(20).required('Gadget headline is required'),
    newness: yup.string().required('How new is the gadget?'),
    color: yup.string().required("What's the color?"),
    price: yup.number().positive('Price is invalid').integer('Must be a number').required('Price is required'),
    description: yup.string().max(40, 'Description should not exceed 40 characters'),
    isFeatured: yup.boolean(),
    isRecommended: yup.boolean(),
  })
  .required();

  const PaperWrapper = styled(Box)(() => ({
  padding: "1rem 1.5rem",
  margin: ".5rem 0",
}));

const Gadgets = ({mode, onSubmit, product, isLoading }) => {
  const handleOnSubmit = (data) => {
    let { tags } = product;
    let headline = data.headline.split(" ");
    let brand = data.brand;

    
    if (imageFile.image.file || product.imageUrl) {
      onSubmit({
        ...product,
        ...data,
        tags: [...headline, brand, ...tags],
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
  } = useForm({resolver: yupResolver(schema)});

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
                    label="Gadget Category*"
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
                    {[ "Phone Charger",
                  "Laptop Charger",
                  "Earpiece",
                  "Headphone",
                  "Airpods",
                  "smart watch",
                  "Others",].map((option, index) => (
                      <MenuItem key={index} value={option}>
                        {option}
                      </MenuItem>
                    ))}
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
                    label="Brand*"
                    {...register("brand")}
                    // error={errors.headline ? "true" : "false"}
                    placeholder="e.g Samsung"
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

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    variant="standard"
                    label="Product Name*"
                    {...register("headline")}
                    // error={errors.headline ? "true" : "false"}
                    placeholder="e.g Samsung Type C Charger"
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
                    select
                    id="newness"
                    label="Newness*"
                    helperText=""
                    labelIcon={
                      <CategoryRounded
                        sx={{
                          color: "tertiary.main",
                          fontSize: { xs: "1rem", sm: ".9rem" },
                        }}
                      />
                    }
                    {...register("newness")}
                    // error={errors.newness ? "true" : "false"}
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
                    <ErrorMessage role="alert">
                      {errors.newness?.message}
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
                      "Red",
                      "Gold",
                      "Black",
                      "Silver",
                      "Grey",
                      "Blue",
                      "Violet",
                      "Wine",
                      "White",
                    ].map((option, index) => (
                      <MenuItem key={index} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
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
          </Grid>
            
          </Grid>
          </PaperWrapper>
          </Grid> 

          <Grid item xs={12}>
            <PaperWrapper component={Paper} elevation={10} sx={{p:2}}>
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

Gadgets.propTypes = {
  product: PropType.shape({
    brand: PropType.string,
    headline: PropType.string,
    sub_category: PropType.string,
    color: PropType.string,
    newness: PropType.string,
    price: PropType.number,
    availableColors: PropType.arrayOf(PropType.string),
    imageUrls: PropType.arrayOf(PropType.object),
  }).isRequired,
  onSubmit: PropType.func.isRequired,
  isLoading: PropType.bool.isRequired,
};

export default Gadgets;
