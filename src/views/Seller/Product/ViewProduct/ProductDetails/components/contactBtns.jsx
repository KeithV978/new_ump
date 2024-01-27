import { Phone, WhatsApp } from "@mui/icons-material"
import { Box, Button } from "@mui/material"


export const ContactBtns = ({actionFunction, seller}) => {
    return(
        <Box
        sx={{
          // position: { sm: "relative", xs: "absolute" },
          // bottom: ".5rem",
          width: { xs: "100%", sm: "70%" },
          // color: 'darkcyan'
          // backgroundColor: "#fff",
          // border: ".1rem solid #ffedb9",
          padding: ".5rem .3rem",
          margin: "1rem 0",
          justifyContent: "space-between",
          display: "flex",
          gap: ".8rem",
          flexDirection: { sm: "row", xs: "column" },
        //   width: {xs:"100%", sm: '70%'},
        }}
      >
        <Button
          variant="contained"
          name="phone"
          onClick={(event) => actionFunction(event)}
          sx={{
            fontSize:'.9rem',
            textTransform: 'capitalize',
            width: {xs:"100%", sm: '50%'},
            alignItems: "center",
            // backgroundColor: "#fff",
          }}
        >
          {/* <PhoneForwarded /> */}
          <Phone 
            fontSize="inherit"
            color="inherit"
          />
          Call {seller} 
        </Button>

        <Button
          onClick={(event) => actionFunction(event)}
          name="message"
          variant="contained"
          sx={{
            fontSize:'.9rem',
            textTransform: 'capitalize',
            backgroundColor: "#26d366",
            padding: { sm: ".7rem auto", xs: "1rem auto" },
            width: {xs:"100%", sm: '50%'},
          }}
        >
          <WhatsApp
          sx={{fontSize: '.8rem'}}
          />
          {` Message ${seller}`}
        </Button>
      </Box>
    )
}