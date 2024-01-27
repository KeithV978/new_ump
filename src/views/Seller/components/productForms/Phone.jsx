import * as React from "react";
import Grid from "@mui/material/Grid";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import PropType from "prop-types";
import {
  ErrorMessage,
  ImageLoader,
  ImageUploader,
  TextAreaInput,
} from "../../../../Components/Common";
import { FormControl } from "../../../../Components/Common/InputHelper";

// import { TextInput, SelectInput } from "../../../../Components/Common";
import AspectRatioRounded from "@mui/icons-material/AspectRatioRounded";
import BatteryStdRounded from "@mui/icons-material/BatteryStdRounded";
import CameraAltOutlined from "@mui/icons-material/CameraAltOutlined";
import CameraAltRounded from "@mui/icons-material/CameraAltRounded";
import CategoryRounded from "@mui/icons-material/CategoryRounded";
import DonutLargeRounded from "@mui/icons-material/DonutLargeRounded";
import OnDeviceTrainingRounded from "@mui/icons-material/OnDeviceTrainingRounded";
import PaletteOutlined from "@mui/icons-material/PaletteOutlined";
import PaymentRounded from "@mui/icons-material/PaymentRounded";
import RadioButtonCheckedRounded from "@mui/icons-material/RadioButtonCheckedRounded";
import SdCardRounded from "@mui/icons-material/SdCardRounded";
import TitleRounded from "@mui/icons-material/TitleRounded";

import AddAPhotoRounded from "@mui/icons-material/AddAPhotoRounded";
import CloseRounded from "@mui/icons-material/CloseRounded";
import CloudUploadRounded from "@mui/icons-material/CloudUploadRounded";
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
import { styled } from "@mui/system";
// import { AuctionsDetails } from "../AuctionsDetails";

const schema = yup
  .object()
  .shape({
    sub_category: yup.string().required("Device category is required"),
    brand: yup.string().max(10).required('Brand is required'),
    headline: yup.string().max(20).required('Headline is required'),
    newness: yup.string().required('How new is the device?'),
    color: yup.string(),
    storage: yup.number('Must be a number'),
    ramsize: yup.number('Must be a number'),
    battery: yup.number().max(6).required('Battery is required'),
    screensize: yup.number().max(3, 'Can not exceed 3 digits'),
    frontcamera: yup.number().max(3, 'Can not exceed 3 digits'),
    backcamera: yup.number().max(5, 'Can not exceed 5 digits').required("Camera details is required"),
    simslot: yup.string().required('Does it use sime cards?'),
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

const Phone = ({ mode, product, onSubmit, isLoading }) => {
  const handleOnSubmit = (data) => {
    let { tags } = product;
    let headline = data.headline.split(" ");
    let brand = data.brand;

    const combinedData = {
      ...product,
      ...data,
      tags: [...headline, brand, ...tags],
    };
    // console.log(combinedData);

    
    if (imageFile.image.file || product.imageUrl) {
      onSubmit({
        ...combinedData,
        dateAdded: new Date().getTime(),
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
    // control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

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
                    label="Device Category*"
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
                    {["Phone", "Tablet", "Smart Watches"].map((option, index) => (
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
                    label="Item Headline*"
                    {...register("headline")}
                    // error={errors.headline ? "true" : "false"}
                    placeholder="e.g Samsung Galaxy A03s"
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
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  {/* <FormControl> */}
                  <TextField
                    fullWidth
                    variant="standard"
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
                  {/* </FormControl> */}
                </Grid>

                <Grid item xs={12} sm={6}>
                  {/* <FormControl> */}
                  <TextField
                    fullWidth
                    variant="standard"
                    label="Storage*"
                    // error={errors.storage ? "true" : "false"}
                    {...register("storage")}
                    placeholder="e.g 512"
                    id="storage"
                    // defaultValue={product?.storage !== "" ? product.storage : ""}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SdCardRounded
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
                  {/* </FormControl> */}
                </Grid>
                <Grid item xs={12} sm={6}>
                  {/* <FormControl> */}
                  <TextField
                    fullWidth
                    variant="standard"
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
                  {/* </FormControl> */}
                </Grid>

                <Grid item xs={12} sm={6}>
                  {/* <FormControl> */}
                  <TextField
                    fullWidth
                    variant="standard"
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
                  {/* </FormControl> */}
                </Grid>
              </Grid>
            </PaperWrapper>
          </Grid>

          <Grid item xs={12}>
            <PaperWrapper component={Paper} elevation={10}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  {/* <FormControl> */}
                  <TextField
                    fullWidth
                    variant="standard"
                    label="Front Camera*"
                    {...register("frontcamera")}
                    placeholder="e.g 512"
                    id="frontcamera"
                    // defaultValue={product?.frontcamera !== "" ? product.frontcamera : ""}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CameraAltRounded
                            sx={{
                              color: "tertiary.main",
                              fontSize: { xs: "1rem", sm: "1rem" },
                            }}
                          />
                        </InputAdornment>
                      ),
                    }}
                  />
                  {errors.frontcamera?.message && (
                    <ErrorMessage role="alert">
                      {errors.frontcamera?.message}
                    </ErrorMessage>
                  )}
                  {/* </FormControl> */}
                </Grid>
                <Grid item xs={12} sm={6}>
                  {/* <FormControl> */}
                  <TextField
                    fullWidth
                    variant="standard"
                    label="Back Camera*"
                    {...register("backcamera")}
                    placeholder="e.g 512"
                    id="backcamera"
                    defaultValue={
                      product?.backcamera !== "" ? product.backcamera : ""
                    }
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CameraAltOutlined
                            sx={{
                              color: "tertiary.main",
                              fontSize: { xs: "1rem", sm: "1rem" },
                            }}
                          />
                        </InputAdornment>
                      ),
                    }}
                  />
                  {errors.backcamera?.message && (
                    <ErrorMessage role="alert">
                      {errors.backcamera?.message}
                    </ErrorMessage>
                  )}
                  {/* </FormControl> */}
                </Grid>
                <Grid item xs={12}>
                  {/* <FormControl> */}
                  <TextField
                    fullWidth
                    variant="standard"
                    select
                    id="simslot"
                    label="Simslot*"
                    helperText=""
                    {...register("simslot")}
                    defaultValue={
                      product?.simslot !== "" ? product.simslot : ""
                    }
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <OnDeviceTrainingRounded
                            sx={{
                              color: "tertiary.main",
                              fontSize: { xs: "1rem", sm: ".9rem" },
                            }}
                          />
                        </InputAdornment>
                      ),
                    }}
                  >
                    {["Yes", "No"].map((option, index) => (
                      <MenuItem key={index} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                  {errors.simslot?.message && (
                    <ErrorMessage role="alert">
                      {errors.simslot?.message}
                    </ErrorMessage>
                  )}
                  {/* </FormControl> */}
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
              {/* <FormControl> */}
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
              {/* </FormControl> */}
            </PaperWrapper>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <PaperWrapper component={Paper} elevation={10} sx={{ p: 2 }}>
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

        {/* </Grid>  */}
      </form>
    </React.Fragment>
  );
};

Phone.propTypes = {
  product: PropType.shape({
    brand: PropType.string,
    sub_category: PropType.string,
    headline: PropType.string,
    color: PropType.string,
    newness: PropType.string,
    ramsize: PropType.string,
    storage: PropType.string,
    battery: PropType.string,
    screensize: PropType.string,
    frontcamera: PropType.string,
    backcamera: PropType.string,
    description: PropType.string,
    simslot: PropType.string,
    price: PropType.number,
    availableColors: PropType.arrayOf(PropType.string),
    imageUrls: PropType.arrayOf(PropType.object),
  }).isRequired,
  onSubmit: PropType.func.isRequired,
  isLoading: PropType.bool.isRequired,
};
export default Phone;
