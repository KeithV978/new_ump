import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { ProductFormsLoader } from "./ProductFormsLoader";
import { addProduct } from "../../../../Redux/actions/product_actions";
import { ImageUpload } from "./ImageUpload";
import { AuactionsDetails } from "./AuactionsDetails";

export const FormWizard = ({
  mode,
  category,
  setDisableCategoriesDropdown,
}) => {
  // const [list, setList] = React.useState([]);
  const [step, setStep] = React.useState("Item Details");
  const { handleSubmit, formState, getValues, setValue, trigger } = useForm();
  const dispatch = useDispatch();
  //   const [step, setStep] = React.useState(1);
  // const totalSteps = 3
  const isLoading = useSelector((state) => state.app.loading);

  const onSubmit = (data) => {
    return console.log(data);

    dispatch(addProduct(data));
  };

  const nextStep = () => {
    if (mode === "auction") {
      if (step === "Item Details") {
        setDisableCategoriesDropdown(true);
        setStep("Upload Image(s)");
      }
      if (step === "Upload Image(s)") setStep("Auctions Details");
      return;
    }
    if (step === "Item Details") {
      setDisableCategoriesDropdown(true);
      setStep("Upload Image(s)");
    }
  };

  const prevStep = () => {
    if (mode === "auction") {
      if (step === "Upload Image(s)") {
        setDisableCategoriesDropdown(false);
        setStep("Item Details");
      }
      if (step === "Auctions Details") setStep("Upload Image(s)");
      return;
    }
    if (step === "Upload Image(s)") {
      setDisableCategoriesDropdown(false);
      setStep("Item Details");
    }
  };

  // const UpdateList = (newlist) => setList(newlist)

  const validateStep = async (list) => {
    // const currentStep = getValues(`step${step}`);
    const valid = await trigger(list);
    if (valid) {
      nextStep();
    }
  };

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      sx={{ mt: 3, backgroundColor:"#fffffbf" }}
    >
      <div style={{ overflow: "hidden", paddingTop: '.3rem' }}>
        {step === "Item Details" && (
          <motion.div
            initial={{ marginLeft: "-200px", opacity: 0 }}
            animate={{ opacity: 1, marginLeft: 0 }}
            exit={{ marginLeft: "-200px", opacity: 0 }}
            transition={{ ease: "easeInOut" }}
          >
            {category && (
              <div>
                <ProductFormsLoader validateStep={validateStep} category={category} isLoading={isLoading} />
              </div>
            )}
          </motion.div>
        )}
        {step === "Upload Image(s)" && (
          <motion.div
            initial={{ marginLeft: "-200px", opacity: 0 }}
            animate={{ opacity: 1, marginLeft: 0 }}
            exit={{ marginLeft: "-200px", opacity: 0 }}
            transition={{ ease: "easeInOut" }}
          >
            <ImageUpload />
            <Button
              sx={{
                backgroundColor: "tertiary.main",
                margin: "10px 10px 10px 0",
                padding: ".5rem 1rem",
                color: "#fff",
              }}
              variant="contained"
              onClick={prevStep}
            >
              Previous
            </Button>
            <Button
              sx={{
                backgroundColor: "tertiary.main",
                margin: "10px 10px 10px 0",
                padding: ".5rem 1rem",
                color: "#fff",
              }}
              onClick={validateStep}
            >
              {mode === "auction" ? "Next" : "Upload"}
            </Button>
          </motion.div>
        )}
        {step === "Auctions Details" && (
          <motion.div
            initial={{ marginLeft: "-200px", opacity: 0 }}
            animate={{ opacity: 1, marginLeft: 0 }}
            exit={{ marginLeft: "-200px", opacity: 0 }}
            transition={{ ease: "easeInOut" }}
          >
            <AuactionsDetails />
            <Button
              sx={{
                backgroundColor: "tertiary.main",
                margin: "10px 10px 10px 0",
                padding: ".5rem 1rem",
                color: "#fff",
              }}
              variant="contained"
              onClick={prevStep}
            >
              Previous
            </Button>
            <Button
              sx={{
                backgroundColor: "tertiary.main",
                margin: "10px 10px 10px 0",
                padding: ".5rem 1rem",
                color: "#fff",
              }}
              onClick={onSubmit}
            >
              Upload
            </Button>
          </motion.div>
        )}
      </div>
    </Box>
  );
};
