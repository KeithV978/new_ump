import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import review from "../../Assets/Images/landing/review.svg";
import { Button, styled, useTheme } from "@mui/material";
import {
  ErrorMessage,
  TextAreaInput,
  TextInput,
} from "../../Components/Common";
import { useForm } from "react-hook-form";

const InputWrapper = styled("div")(() => ({
  padding: "1rem 0",
}));

export const Feedback = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleOnSubmit = (event) => {};

  const theme = useTheme();
  return (
    <div style={{ backgroundColor: "whitesmoke", padding: "1rem .5rem" }}>
      <Container>
        <Box>
          <Typography
            color={[theme.palette.primary.main]}
            fontWeight="bold"
            variant="h5"
            marginBottom="1.5rem"
            marginTop="2rem"
          >
            We want to know how you feel about us.
            <br /> Write us a review...
          </Typography>
          <div style={{ display: "flex" }}>
            <Box
              sx={{
                display: { xs: "none", sm: "block" },
                width: "100%",
                padding: "2rem",
                backgroundColor: '#fff',
                marginRight: '.5rem',
                borderRadius: "15px",
              }}
            >
              <img
                src={review}
                alt="review"
                style={{ display: "inline-block", width: "100%" }}
              />
            </Box>
            <Box sx={{ width: "100%" }}>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit(handleOnSubmit)}
                sx={{
                    backgroundColor: "#fff",
                    borderRadius: "15px",
                    padding: "1rem",
                    marginLeft: '.5rem',
                }}
              >
                <div>
                  <InputWrapper>Stars</InputWrapper>
                  <InputWrapper>
                    <TextInput
                      label="Full Name"
                      //  labelIcon={
                      //    <CameraAltOutlined
                      //      sx={{
                      //        color: "tertiary.main",
                      //        fontSize: { xs: "1rem", sm: "1rem" },
                      //      }}
                      //    />
                      //  }
                      reg={{
                        ...register("fullname", { required: true }),
                      }}
                      error={errors.fullname ? "true" : "false"}
                      placeholder="e.g. Cinderella"
                      id="fullname"
                    />
                    {errors.headline?.type === "required" && (
                      <ErrorMessage role="alert">
                        *Name is required
                      </ErrorMessage>
                    )}
                  </InputWrapper>
                  <InputWrapper>
                    <TextInput
                      label="Phone"
                      reg={{
                        ...register("phone", { required: true }),
                      }}
                      error={errors.phone ? "true" : "false"}
                      id="phone"
                      placeholder="081xxxxxxx"
                    />
                    {errors.headline?.type === "required" && (
                      <ErrorMessage role="alert">
                        *Phone number is required
                      </ErrorMessage>
                    )}
                  </InputWrapper>
                  <InputWrapper>
                    <TextAreaInput
                      label="Your Message"
                      reg={{ ...register("feedback") }}
                      error={errors.feedback ? "true" : "false"}
                      id="feedback"
                      //    labelIcon={
                      //      <DescriptionRounded
                      //        sx={{
                      //          color: "tertiary.main",
                      //          fontSize: { xs: "1rem", sm: ".9rem" },
                      //        }}
                      //      />
                      //    }
                    />
                  </InputWrapper>
                </div>
                <div>
                  <Button
                    variant="contained"
                    fullWidth
                    // color={}
                    sx={{
                      backgroundColor: `${[theme.palette.tertiary.main]}`,
                      color: "#fff",
                      padding: ".6rem 0",
                      fontSize: "1rem",
                      fontWeight: "bold",
                    }}
                  >
                    Send
                  </Button>
                </div>
              </Box>
            </Box>
          </div>
        </Box>
      </Container>
    </div>
  );
};
