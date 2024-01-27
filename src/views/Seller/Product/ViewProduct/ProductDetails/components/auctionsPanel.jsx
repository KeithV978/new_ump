import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import { Button, useTheme } from "@mui/material";
// import { BackHandRounded } from "@mui/icons-material";

const StyledInput = styled("input")(() => ({
  margin: ".3rem .5rem",
  width: "100%",
  border: "none",
  outline: "none",
  borderRadius: "5px",
  padding: ".7rem",
  // paddingLeft: "1rem",
  color: "#787878",
  backgroundColor: "#fff",
  "&:focus": {
    backgroundColor: "#fff",
  },
}));

// const Pulse = styled("div")(() => ({
//   backgroundColor: '#57E55B',
//   border: 'none',
//   width: "10px",
//   height: "10px",
//   borderRadius: "50%",
//   boxShadow: "0px 0px 1px 1px #0000001a",
//   animation: "",
// }));

export const AuctionsPanel = () => {
  //   const addBid = () => {};
  //   const countDownTimer = () => {};

  const theme = useTheme()
  return (
    <Box
      sx={{
        width: "100%",
        border: `.1rem solid ${[theme.palette.tertiary.main]}`,
        padding: ".7rem",
        borderRadius: "7px",
        backgroundColor: "#fff",
      }}
    >
      <div style={{ display: "flex" }}>
        <Box sx={{ width: "100%" }}>
          <div
            style={{
              backgroundColor: "#EFEFEF",
              borderRadius: "10px",
              padding: "0.7rem 1rem",
              marginRight: ".5rem",
            }}
          >
             <Typography variant="body2" sx={{ justifyContent: "space-between",
              fontWeight: "bold", padding: ".6rem 0",  display: "flex",}}>
              <span style={{ color: "#787878" }}>{"Expires In: 00:02:59"}</span>
              <span style={{ color: "#57E55B", display: "flex" }}> Active</span>
            </Typography>
            <Typography
              sx={{
                alignItems: "center",               
                fontWeight: 'bold',
                color: "#787878" 
              }}
            >
                {"Current Bid: N50,000"}             
            </Typography>

            {/* <Typography sx={{ color: "#828282", fontWeight: "bold", paddingBottom: ".6rem", fontSize: '1.1rem'}}>
            </Typography> */}

            <span style={{display: 'flex', }}>
            <StyledInput type="phone" placeholder="Your phone number" />
            <StyledInput type="text" placeholder="Your price" />
            {/* <br /> */}
            <Button
              fullWidth
              variant="contained"
              sx={{
                // display: "block",
                backgroundColor: "#E91E63",
                // padding: '1rem 0',
                // height: "100%",
                borderRadius: "5px",
                fontSize: "1rem",
                // fontWeight: "bold",
                boxShadow: "none",
              }}
              >
              Bid Now
              {/* <BackHandRounded /> */}
            </Button>
              </span>
          </div>
        </Box>
        {/* <Box sx={{ width: "50%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
           
          </div>
        </Box> */}
      </div>
    </Box>
  );
};

// 1. Text area/textbox
// 2. Big Bid Button
// 3. User's Bid must not be lesser than current Bid
// 4. Count down timer for expiry
// 5. Button must be disabled until a higer value than the current bid is inputed
