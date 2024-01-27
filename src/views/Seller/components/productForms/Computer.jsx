import * as React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Grid from "@mui/material/Grid";
import CategoryRounded from "@mui/icons-material/CategoryRounded";
import DonutLargeRounded from "@mui/icons-material/DonutLargeRounded";
import DescriptionRounded from "@mui/icons-material/DescriptionRounded";
import PaymentRounded from "@mui/icons-material/PaymentRounded";
import BatteryStdRounded from "@mui/icons-material/BatteryStdRounded";
import AspectRatioRounded from "@mui/icons-material/AspectRatioRounded";
import PaletteOutlined from "@mui/icons-material/PaletteOutlined";
import TitleRounded from "@mui/icons-material/TitleRounded";
import RadioButtonCheckedRounded from "@mui/icons-material/RadioButtonCheckedRounded";
import StorageRounded from "@mui/icons-material/StorageRounded";

import PropType from "prop-types";

import { FormControl } from "../../../../Components/Common/InputHelper";
import {
  ErrorMessage,
  ImageLoader,
  ImageUploader,
  TextAreaInput,
} from "../../../../Components/Common";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material";
import CustomButton from "../CustomButton";
import AddAPhotoRounded from "@mui/icons-material/AddAPhotoRounded";
import CloseRounded from "@mui/icons-material/CloseRounded";
import CloudUploadRounded from "@mui/icons-material/CloudUploadRounded";

import { useFileHandler } from "../../../../hooks";
// import { AuctionsDetails } from "../AuctionsDetails";

const schema = yup
  .object({
    sub_category: yup.string().required("Device category is required"),
    headline: yup.string().max(20, "Can not exceed 20 characters").required("A headline is required."),
    brand: yup.string().max(10, "Can not exceed 10 characters").required("What's the brand?"),
    newness: yup.string().required("How new is it?"),
    color: yup.string(),
    ramsize: yup.number().required("What's the size of the RAM?"),
    storage: yup.number(4, "Can not exceed 4 characters").required("What's the storage capacity?"),
    battery: yup.number().max(6, "Can not exceed 6 characters").required("What's the battery capacity?"),
    screensize: yup.number().max(3, "Can not exceed 3 characters"),
    price: yup.number().positive('Price is invalid').integer('Must be a number').required('Price is required'),
    description: yup.string().max(40, 'Description should not exceed 40 characters'),
    isFeatured: yup.boolean(),
    isRecommended: yup.boolean(),
  })
  .required();

const PaperWrapper = styled(Box)(() => ({
  padding: "1rem",
  margin: ".5rem 0",
}));

const Computer = ({ onSubmit, product, isLoading, mode }) => {
  const handleOnSubmit = (data) => {
    let { tags } = product;
    let headline = data.headline.split(" ");
    let sub_category = data.sub_category;
    let brand = data.brand;

    
    if (imageFile.image.file || product.imageUrl) {
      onSubmit({
        ...product,
        ...data,
        tags: [...headline, brand, sub_category, ...tags],
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
                    select
                    id="sub_category"
                    label="Computer Category*"
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
                    {["Laptop", "Desktop", "CPU", "Laptop Accessories"].map(
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
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Item Headline*"
                    {...register("headline")}
                    // error={errors.headline ? "true" : "false"}
                    placeholder="e.g Asus Zenbook"
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
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Brand*"
                    {...register("brand")}
                    placeholder="e.g Asus"
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
              </Grid>
            </PaperWrapper>
          </Grid>

          <Grid item xs={12}>
            <PaperWrapper component={Paper} elevation={10}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
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
                    select
                    id="color"
                    label="Color*"
                    helperText=""
                    labelIcon={
                      <PaletteOutlined
                        sx={{
                          color: "tertiary.main",
                          fontSize: { xs: "1rem", sm: ".9rem" },
                        }}
                      />
                    }
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
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Ram Size"
                    {...register("ramsize")}
                    // error={errors.ramsize ? "true" : "false"}
                    // placeholder="e.g"
                    placeholder="e.g. 4"
                    id="ramsize"
                    defaultValue={
                      product?.ramsize !== "" ? product.ramsize : ""
                    }
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <DonutLargeRounded
                            sx={{
                              color: "tertiary.main",
                              fontSize: { xs: "1rem", sm: "1rem" },
                            }}
                          />
                        </InputAdornment>
                      ),
                    }}
                  />
                  {errors.ramsize?.message && (
                    <ErrorMessage role="alert">
                      {errors.ramsize?.message}
                    </ErrorMessage>
                  )}
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Storage*"
                    // error={errors.storage ? "true" : "false"}
                    {...register("storage")}
                    placeholder="e.g 512"
                    id="storage"
                    // defaultValue={product?.storage !== "" ? product.storage : ""}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <StorageRounded
                            sx={{
                              color: "tertiary.main",
                              fontSize: { xs: "1rem", sm: "1rem" },
                            }}
                          />
                        </InputAdornment>
                      ),
                    }}
                  />

                  {errors.storage?.message && (
                    <ErrorMessage role="alert">
                      {errors.storage?.message}
                    </ErrorMessage>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Battery"
                    {...register("battery")}
                    placeholder="e.g 512"
                    id="battery"
                    // defaultValue={product?.battery !== "" ? product.battery : ""}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <BatteryStdRounded
                            sx={{
                              color: "tertiary.main",
                              fontSize: { xs: "1rem", sm: "1rem" },
                            }}
                          />
                        </InputAdornment>
                      ),
                    }}
                  />

                  {errors.battery?.message && (
                    <ErrorMessage role="alert">
                      {errors.battery?.message}
                    </ErrorMessage>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Screen Size"
                    {...register("screensize")}
                    placeholder="e.g 5'"
                    id="screensize"
                    // defaultValue={product?.screensize !== "" ? product.screensize : ""}
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
                  {errors.screensize?.message && (
                    <ErrorMessage role="alert">
                      {errors.screensize?.message}
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
              <Grid container spacing={3}>
                <Grid item xs={12}>
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
                    <ErrorMessage role="alert">
                      {errors.price?.message}
                    </ErrorMessage>
                  )}
                </Grid>
              </Grid>
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

Computer.propTypes = {
  product: PropType.shape({
    sub_category: PropType.string,
    brand: PropType.string,
    headline: PropType.string,
    product_title: PropType.string,
    newness: PropType.string,
    color: PropType.string,
    ramsize: PropType.string,
    storage: PropType.string,
    battery: PropType.string,
    screensize: PropType.string,
    price: PropType.number,
    imageUrls: PropType.arrayOf(PropType.object),
  }).isRequired,
  onSubmit: PropType.func.isRequired,
  isLoading: PropType.bool.isRequired,
};
export default Computer;
