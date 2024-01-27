import * as React from "react";
import * as yup from "yup";
import PropType from "prop-types";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import CategoryRounded from "@mui/icons-material/CategoryRounded";
import DescriptionRounded from "@mui/icons-material/DescriptionRounded";
import LocationCityRounded from "@mui/icons-material/LocationCityRounded";
import OnDeviceTrainingRounded from "@mui/icons-material/OnDeviceTrainingRounded";
import PaymentRounded from "@mui/icons-material/PaymentRounded";
import TitleRounded from "@mui/icons-material/TitleRounded";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomButton from "../CustomButton";
import { FormControl } from "../../common/InputHelper";
import { FormErrorMessage } from "../../common";
import { useFileHandler } from "../../../hooks";
import { TextAreaInput } from "../../common";

const schema = yup
  .object({
    sub_category: yup.string().required("Property Category is required"),
    newness: yup.string().required("How new is the property?"),
    headline: yup.string().max(20).required("Property headline is required"),
    location: yup.string().required("Location is required"),
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

const RealEstate = ({ product, onSubmit, isLoading }) => {
  const [amenities, setAmenities] = React.useState({
    water_in: "",
    water_out: "",
    electricity: "",
    generator: "",
    transformer: "",
    tiled: "",
    pvc_ceiling: "",
    pop_ceiling: "",
  });

  const handleCheck = (event) => {
    switch (event.target.name) {
      case "waterIn":
        amenities.water_in === ""
          ? setAmenities({ ...amenities, water_in: "Water runs in apertment" })
          : setAmenities({ ...amenities, water_in: "" });
        break;
      case "waterOut":
        amenities.water_out === ""
          ? setAmenities({
              ...amenities,
              water_out: "Water runs in the compound",
            })
          : setAmenities({ ...amenities, water_out: "" });
        break;
      case "electricity":
        amenities.electricity === ""
          ? setAmenities({ ...amenities, electricity: "Has electricity" })
          : setAmenities({ ...amenities, electricity: "" });
        break;
      case "Hostel Generator":
        amenities.generator === ""
          ? setAmenities({ ...amenities, generator: "Has hostel generator" })
          : setAmenities({ ...amenities, generator: "" });
        break;
      case "Hostel Transformer":
        amenities.transformer === ""
          ? setAmenities({
              ...amenities,
              transformer: "Has its own transformer",
            })
          : setAmenities({ ...amenities, transformer: "" });
        break;
      case "Tiled floors":
        amenities.tiled === ""
          ? setAmenities({ ...amenities, tiled: "Has tiled floors" })
          : setAmenities({ ...amenities, tiled: "" });
        break;
      case "POP Ceiling":
        amenities.pop_ceiling === ""
          ? setAmenities({ ...amenities, pop_ceiling: "Has POP ceiling" })
          : setAmenities({ ...amenities, pop_ceiling: "" });
        break;
      case "PVC Ceiling":
        amenities.pvc_ceiling === ""
          ? setAmenities({ ...amenities, pvc_ceiling: "Has PVC ceiling" })
          : setAmenities({ ...amenities, pvc_ceiling: "" });
        break;
      default:
        break;
    }
  };
  const [amenitiesInitState, setAmenitiesInitState] = React.useState();
  const [amenitiesError, setAmenitiesError] = React.useState(false);

  React.useEffect(() => {
    setAmenitiesInitState(amenities);
  }, [amenities]);

  const handleOnSubmit = (data) => {
    if (amenitiesInitState === amenities) {
      setAmenitiesError(true);
    }
    setAmenitiesError(false);

    let { tags } = product;
    let headline = data.headline.split(" ");
    let sub_category = data.sub_category;
    let location = data.location;

    if (imageFile.image.file || product.imageUrl) {
      onSubmit({
        ...product,
        ...data,
        tags: [...headline, location, sub_category, ...tags],
        amenities: amenities,
      });
    } else {
      // eslint-disable-next-line no-alert
      alert("Product thumbnail image is required.");
    }

    setAmenities({
      water_in: "",
      water_out: "",
      electricity: "",
      generator: "",
      transformer: "",
      tiled: "",
      pvc_ceiling: "",
      pop_ceiling: "",
    });
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

  const watchSubCategory = watch("sub_category");

  React.useEffect(() => {
    watchSubCategory ? register("sub_category") : unregister("sub_category");
  }, [watchSubCategory, register, unregister]);

  console.log(watchSubCategory);

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <FormControl>
              <TextField
                select
                id="sub_category"
                label="Property Category*"
                labelIcon={
                  <CategoryRounded
                    sx={{
                      color: "tertiary.main",
                      fontSize: { xs: "1rem", sm: ".9rem" },
                    }}
                  />
                }
                reg={{ ...register("sub_category") }}
                defaultValue={
                  product?.sub_category !== "" ? product.sub_category : ""
                }
                options={[
                  "Male Roommate",
                  "Female Roommate",
                  "Single Room",
                  "Self-contained",
                  "Room & Parlour",
                  "Two Bedrooms Flat",
                  "Three Bedrooms Flat",
                  "Four Bedrooms Flat",
                  "Duplex",
                  "Shops/Store",
                  "Land",
                  "Other",
                ]}
              />
              {errors.sub_category?.message && (
                <FormErrorMessage role="alert">
                  {errors.sub_category?.message}
                </FormErrorMessage>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl>
              <TextField
                select
                id="newness"
                label="Newness*"
                labelIcon={
                  <OnDeviceTrainingRounded
                    sx={{
                      color: "tertiary.main",
                      fontSize: { xs: "1rem", sm: ".9rem" },
                    }}
                  />
                }
                reg={{ ...register("newness") }}
                defaultValue={product?.newness !== "" ? product.newness : ""}
                options={[
                  "does not apply",
                  "newly built",
                  "used",
                  "newly renovated",
                ]}
              />
              {errors.newness?.message && (
                <FormErrorMessage role="alert">
                  {errors.newness?.message}
                </FormErrorMessage>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl>
              <TextField
                label="Item Headline*"
                reg={{
                  ...register("headline"),
                }}
                labelIcon={
                  <TitleRounded
                    sx={{
                      color: "tertiary.main",
                      fontSize: { xs: "1rem", sm: ".9rem" },
                    }}
                  />
                }
                placeholder="e.g male roommate needed in Osasogie"
                id="headline"
                defaultValue={product?.headline !== "" ? product.headline : ""}
              />
              {errors.headline?.message && (
                <FormErrorMessage role="alert">
                  {errors.headline?.message}
                </FormErrorMessage>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl>
              <TextField
                select
                id="location"
                label="Location*"
                labelIcon={
                  <LocationCityRounded
                    sx={{
                      color: "tertiary.main",
                      fontSize: { xs: "1rem", sm: ".9rem" },
                    }}
                  />
                }
                reg={{ ...register("location") }}
                defaultValue={product?.location !== "" ? product.location : ""}
                options={[
                  "Hall 1",
                  "Hall 2",
                  "Hall 3",
                  "Hall 4",
                  "Hall 5",
                  "Hall 6",
                  "Hall 7",
                  "NDDC",
                  "Keystone",
                  "SSQ",
                  "JSQ",
                  "UBTH Nursing Hostel",
                  "Ekosodin",
                  "Isihor",
                  "BDPA",
                  "Uwasota",
                  "Adolor",
                  "Osasogie",
                  "Evbuomore",
                  "Adolor",
                  "Uselu",
                  "GRA",
                ]}
              />
              {errors.location?.message && (
                <FormErrorMessage role="alert">
                  {errors.location?.message}
                </FormErrorMessage>
              )}
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl>
              <label htmlFor="amenities">
                <TitleRounded
                  sx={{
                    color: "tertiary.main",
                    fontSize: { xs: "1rem", sm: ".9rem" },
                  }}
                />{" "}
                Amenities*
              </label>
              <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      size="small"
                      name="waterIn"
                      checked={amenities.water_in}
                      onChange={handleCheck}
                      inputProps={{ "aria-label": "controlled" }}
                      color="tertiary"
                    />
                  }
                  label="Water running inside"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      size="small"
                      name="waterOut"
                      checked={amenities.water_out}
                      onChange={handleCheck}
                      inputProps={{ "aria-label": "controlled" }}
                      color="tertiary"
                    />
                  }
                  label="Water running outside"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      size="small"
                      name="electricity"
                      checked={amenities.electricity}
                      onChange={handleCheck}
                      inputProps={{ "aria-label": "controlled" }}
                      color="tertiary"
                    />
                  }
                  label="Electricity"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      size="small"
                      name="Hostel Generator"
                      checked={amenities.generator}
                      onChange={handleCheck}
                      inputProps={{ "aria-label": "controlled" }}
                      color="tertiary"
                    />
                  }
                  label="Hostel Generator"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      size="small"
                      name="Hostel Transformer"
                      checked={amenities.transformer}
                      onChange={handleCheck}
                      inputProps={{ "aria-label": "controlled" }}
                      color="tertiary"
                    />
                  }
                  label="Hostel Transformer"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      size="small"
                      name="Tiled floors"
                      checked={amenities.tiled}
                      onChange={handleCheck}
                      inputProps={{ "aria-label": "controlled" }}
                      color="tertiary"
                    />
                  }
                  label="Tiled floors"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      size="small"
                      name="POP Ceiling"
                      checked={amenities.pop_ceiling}
                      onChange={handleCheck}
                      inputProps={{ "aria-label": "controlled" }}
                      color="tertiary"
                    />
                  }
                  label="POP Ceiling"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      size="small"
                      name="PVC Ceiling"
                      checked={amenities.pvc_ceiling}
                      onChange={handleCheck}
                      inputProps={{ "aria-label": "controlled" }}
                      color="tertiary"
                    />
                  }
                  label="PVC Ceiling"
                />
              </FormGroup>
              {amenitiesError ? (
                <FormErrorMessage role="alert">
                  {" "}
                  Select One or more options from here.
                </FormErrorMessage>
              ) : null}
            </FormControl>
          </Grid>

          <Grid item xs={12}>
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
          </Grid>

          <Grid item xs={12}>
            <FormControl>
              <TextField
                label="Price*"
                labelIcon={
                  <PaymentRounded
                    sx={{
                      color: "tertiary.main",
                      fontSize: { xs: "1rem", sm: "1rem" },
                    }}
                  />
                }
                reg={{ ...register("price") }}
                placeholder=""
                id="price"
                unit="N"
                // typ="number"
                defaultValue={product?.price !== "" ? product.price : ""}
              />
              {errors.price?.message && (
                <FormErrorMessage role="alert">
                  {errors.price.message}
                </FormErrorMessage>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomButton isLoading={isLoading} />
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
};
RealEstate.propTypes = {
  product: PropType.shape({
    location: PropType.string,
    sub_category: PropType.string,
    headline: PropType.string,
    price: PropType.number,
    imageUrls: PropType.arrayOf(PropType.object),
  }).isRequired,
  onSubmit: PropType.func.isRequired,
  isLoading: PropType.bool.isRequired,
};
export default RealEstate;
