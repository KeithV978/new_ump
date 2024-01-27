import * as React from "react";
import PropType from "prop-types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import CustomButton from "../CustomButton";
import { FormControl } from "../../../../Components/Common/InputHelper";
import {
  ErrorMessage,
  ImageLoader,
  ImageUploader,
  TextAreaInput,
} from "../../../../Components/Common";

import CategoryRounded from "@mui/icons-material/CategoryRounded";
import DataArrayRounded from "@mui/icons-material/DataArrayRounded";
import EditRounded from "@mui/icons-material/EditRounded";
import TitleRounded from "@mui/icons-material/TitleRounded";
import ViewStreamRounded from "@mui/icons-material/ViewStreamRounded";
import OnDeviceTrainingRounded from "@mui/icons-material/OnDeviceTrainingRounded";
import DescriptionRounded from "@mui/icons-material/DescriptionRounded";
import PaymentRounded from "@mui/icons-material/PaymentRounded";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import CloudUploadRounded from "@mui/icons-material/CloudUploadRounded";
import { useFileHandler } from "../../../../hooks";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import CloseRounded from "@mui/icons-material/CloseRounded";
import AddAPhotoRounded from "@mui/icons-material/AddAPhotoRounded";
import { styled } from "@mui/material";
import { AspectRatioRounded } from "@mui/icons-material";

const schema = yup
  .object({
    sub_category: yup.string().required("Book category is required"),
    headline: yup.string().max(20).required("Headline is required"),
    newness: yup.string().required("How new is it?"),
    course_title: yup.string().max(20, "Can not exceed 20 characters"),
    author: yup.string().max(20, "Can not exceed 20 characters").required("Who authored it?"),
    course_code: yup.string().max(6, "Can not exceed 6 characters"),
    year_written: yup.string().max(5, "Can not exceed 5 characters").required("What year was it written?"),
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

const Book = ({ onSubmit, product, isLoading, mode }) => {
  const Year = new Date().getFullYear();

  const handleOnSubmit = (data) => {
    let { tags } = product;
    let headline = data.headline.split(" ");
    let sub_category = data.sub_category;
    let course_code = data.course_code;

    if(mode === "auction"){
      var auctionDetails = {
        currentBid: [{ bidder: "0", bid: 0 }],
        expiry_date: new Date().getTime(), 
        status: "Active",
      }
      data = {...data, auctionDetails}
    }
    
    if (imageFile.image.file || product.imageUrl) {
      onSubmit({
        ...product,
        ...data,
        tags: [...headline, course_code, sub_category, ...tags],
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
    unregister,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({ resolver: yupResolver(schema) });
  
  React.useEffect(() => {
    if(mode === "auction"){
      register('expiry_date')
    } else {
      unregister('expiry_date')
    }
   
  }, [mode, register, unregister])
  
  // React.useEffect(() => {
  //   console.log(watch());
  // }, [watch]);

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <PaperWrapper component={Paper} elevation={10}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  {/* <FormControl> */}
                  <TextField
                    fullWidth
                    variant="standard"
                    select
                    id="sub_category"
                    label="Book Category*"
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
                    {["Text Book", "Class Note"].map((option, index) => (
                      <MenuItem key={index} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                  {errors.sub_category?.message && (
                    <ErrorMessage role="alert">
                      {errors.sub_category.message}
                    </ErrorMessage>
                  )}
                  {/* </FormControl> */}
                </Grid>
                <Grid item xs={12} sm={6}>
                  {/* <FormControl> */}
                  <TextField
                    fullWidth
                    variant="standard"
                    label="Item Headline*"
                    {...register("headline")}
                    // error={errors.headline ? "true" : "false"}
                    // placeholder="e.g"
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
                      {errors.headline.message}
                    </ErrorMessage>
                  )}
                  {/* </FormControl> */}
                </Grid>
                <Grid item xs={12} sm={6}>
                  {/* <FormControl> */}
                  <TextField
                    fullWidth
                    variant="standard"
                    select
                    id="newness"
                    label="Newness*"
                    helperText=""
                    {...register("newness")}
                    // error={errors.newness ? "true" : "false"}
                    defaultValue={
                      product?.newness !== "" ? product.newness : ""
                    }
                    labelIcon={
                      <OnDeviceTrainingRounded
                        sx={{
                          color: "tertiary.main",
                          fontSize: { xs: "1rem", sm: ".9rem" },
                        }}
                      />
                    }
                  >
                    {["new", "nigerian Used", "foreign Used"].map(
                      (option, index) => (
                        <MenuItem key={index} value={option}>
                          {option}
                        </MenuItem>
                      )
                    )}
                  </TextField>
                  {errors.newness?.message && (
                    <ErrorMessage role="alert">
                      {errors.newness.message}
                    </ErrorMessage>
                  )}
                  {/* </FormControl> */}
                </Grid>

                <Grid item xs={12} sm={6}>
                  {/* <FormControl> */}
                  <TextField
                    fullWidth
                    variant="standard"
                    label="Course Title*"
                    {...register("course_title")}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <ViewStreamRounded
                            sx={{
                              color: "tertiary.main",
                              fontSize: { xs: "1rem", sm: ".9rem" },
                            }}
                          />
                        </InputAdornment>
                      ),
                    }}
                    placeholder="e.g Introduction to..."
                    id="CourseTitle"
                    defaultValue={
                      product?.course_title !== "" ? product.course_title : ""
                    }
                  />
                  {errors.course_title?.message && (
                    <ErrorMessage role="alert">
                      {errors.course_title.message}
                    </ErrorMessage>
                  )}
                  {/* </FormControl> */}
                </Grid>
                <Grid item xs={12} sm={6}>
                  {/* <FormControl> */}
                  <TextField
                    fullWidth
                    variant="standard"
                    label="Author*"
                    {...register("author")}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <ViewStreamRounded
                            sx={{
                              color: "tertiary.main",
                              fontSize: { xs: "1rem", sm: ".9rem" },
                            }}
                          />
                        </InputAdornment>
                      ),
                    }}
                    placeholder="e.g just write 'self' if you wrote it"
                    id="author"
                    defaultValue={product?.author !== "" ? product.author : ""}
                  />
                  {errors.author?.message && (
                    <ErrorMessage role="alert">
                      {errors.author.message}
                    </ErrorMessage>
                  )}
                  {/* {console.log(errors)} */}
                  {/* </FormControl> */}
                </Grid>

                <Grid item xs={12} sm={6}>
                  {/* <FormControl> */}
                  <TextField
                    fullWidth
                    variant="standard"
                    label="Course Code"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <DataArrayRounded
                            sx={{
                              color: "tertiary.main",
                              fontSize: { xs: "1rem", sm: ".9rem" },
                            }}
                          />
                        </InputAdornment>
                      ),
                    }}
                    {...register("course_code")}
                    // error={errors.course_code ? "true" : "false"}
                    placeholder="e.g ABC123"
                    id="course_code"
                    defaultValue={
                      product?.course_code !== "" ? product.course_code : ""
                    }
                  />
                  {errors.course_code?.message && (
                    <ErrorMessage role="alert">
                      {errors.course_code.message}
                    </ErrorMessage>
                  )}
                  {/* </FormControl> */}
                </Grid>

                {watch("sub_category") === "Class Note" ? (
                  <Grid item xs={12} sm={6}>
                    {/* <FormControl> */}
                    <TextField
                      select
                      fullWidth
                      variant="standard"
                      id="year_written"
                      label="Year Written*"
                      helperText=""
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EditRounded
                              sx={{
                                color: "tertiary.main",
                                fontSize: { xs: "1rem", sm: ".9rem" },
                              }}
                            />
                          </InputAdornment>
                        ),
                      }}
                      {...register("year_written")}
                      // error={errors.year_written ? "true" : "false"}
                      defaultValue={
                        product?.year_written !== "" ? product.year_written : ""
                      }
                    >
                      {[`${Year}`, `${Year - 1}`, `${Year - 2}`].map(
                        (option, index) => (
                          <MenuItem key={index} value={option}>
                            {option}
                          </MenuItem>
                        )
                      )}
                    </TextField>
                    {errors.year_written?.message && (
                      <ErrorMessage role="alert">
                        {errors.price.message}
                      </ErrorMessage>
                    )}
                    {/* </FormControl> */}
                  </Grid>
                ) : null}
              </Grid>
            </PaperWrapper>
          </Grid>

          <Grid item xs={12}>
            <PaperWrapper component={Paper} elevation={10}>
              <Grid item xs={12}>
                {/* <FormControl> */}
                <TextAreaInput
                  label="Additional Description* (max 40 characters)"
                  {...register("description")}
                  // error={errors.description ? "true" : "false"}
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
                {/* </FormControl> */}
              </Grid>
            </PaperWrapper>
          </Grid>

          <Grid item xs={12}>
            <PaperWrapper component={Paper} elevation={10}>
              <Grid item xs={12}>
                {/* <FormControl> */}
                <TextField
                  fullWidth
                  variant="standard"
                  label="Price*"
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
                  {...register("price")}
                  placeholder="10000"
                  id="price"
                  // typ="number"
                  unit="N"
                  defaultValue={product?.price !== "" ? product.price : ""}
                />
                {errors.price?.message && (
                  <ErrorMessage role="alert">
                    *{errors.price.message}
                  </ErrorMessage>
                )}
                {/* </FormControl> */}
              </Grid>
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

          {mode === "auction" && (
          <Grid item xs={12}>
            <PaperWrapper component={Paper} elevation={20} sx={{border: '1px solid #E91E63'}}>
            {/* <Grid item xs={12} sm={3}> */}
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
                {/* </Grid> */}
            </PaperWrapper>
          </Grid>
          )}

          <Grid item xs={12} sm={3}>
            {/* <PaperWrapper component={Paper}> */}
              <CustomButton isLoading={isLoading} />
            {/* </PaperWrapper> */}
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
};

Book.propTypes = {
  product: PropType.shape({
    sub_category: PropType.string,
    headline: PropType.string,
    course_title: PropType.string,
    course_code: PropType.string,
    year_written: PropType.string,
    price: PropType.number,
    // imageUrls: PropType.arrayOf(PropType.object),
  }).isRequired,
  onSubmit: PropType.func.isRequired,
  isLoading: PropType.bool.isRequired,
};
export default Book;
