import * as React from "react";

import { useForm } from "react-hook-form";

import { FormControl } from "../../../../Components/Common/InputHelper";
import { ErrorMessage } from "../../../../Components/Common";
// import { SelectInput, TextInput } from "../../../../Components/Common";
 
import Grid from "@mui/material/Grid"; 

export const AuactionsDetails = ({ isLoading, back, next }) => {
  // bids: [{ bidder: "08152038183", bid: 0 }],
  //       expiry_date,

  const { 
    formState: { errors }, 
  } = useForm();
 
  return (
    <React.Fragment>
      <Grid container spacing={2}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl>
                {errors.sub_category?.type === "required" && (
                  <ErrorMessage role="alert">
                    *Choose the actual category of the food item?
                  </ErrorMessage>
                )}
              </FormControl>
            </Grid>
          </Grid>
      </Grid>
    </React.Fragment>
  );
};
