import React from "react";

// import Phone from "@mui/icons-material/Phone";
// import WhatsApp from "@mui/icons-material/WhatsApp";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Slide from "@mui/material/Slide";
import Button from "@mui/material/Button";

import Check from "@mui/icons-material/Check";
// import PhoneForwarded from "@mui/icons-material/PhoneForwarded";
import Adjust from "@mui/icons-material/Adjust";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { ContactBtns } from "./contactBtns";
import { AuctionsPanel } from "./auctionsPanel";
import { Paper } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ActionsPanel({mode, phone, headline, seller }) {
  const [showInstructions, setShowInstructions] = React.useState(false);
  const [buttonContent, setButtonContent] = React.useState(false);
  const [counter, setCounter] = React.useState(0);

  const navigate = useNavigate();
  const changeButtonContent = (event) => {
    console.log(event.target.name);
    console.log(counter);
    setCounter((prev) => prev+1);
    if (counter + 1 < 2) return !buttonContent && setShowInstructions(true);

    event.target.name === "phone"
      ? navigate(`tel:${Number(phone)}`)
      : navigate(
          `https://wa.me/${phone}?text=Hello,+${seller}+I+am+interested+in+the+${headline}+you+posted+on+uniben+Marketplace.+Can+we+discuss?.`
        );
  };

  const handleClose = () => {
    setButtonContent(true);
    setShowInstructions(false);
  };
  return (
    <div style={{ position: "relative" }}>
      <Dialog
        open={showInstructions}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="instructions-for-buyers"
      >
        <DialogTitle sx={{ color: "tertiary.main" }}>
          Please Take Note of The Following:
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="instructions-for-buyers">
            <List dense={true}>
              <ListItem>
                <ListItemIcon>
                  <Adjust
                    sx={{
                      color: "tertiary.main",
                      fontSize: ".9rem",
                    }}
                  />
                </ListItemIcon>
                <ListItemText>
                  For security reasons do you agree not meet up with a seller
                  outside these specified locations:
                  <strong> Hall 2 Car Park</strong>,<strong> Green Park</strong>
                  ,<strong> June 12 </strong>
                  or <strong> Nadia Bakery</strong>?
                </ListItemText>
              </ListItem>
              {[
                `If you are to meet outside the specified locations, 
                do you agree to go with a third party/friend/family and to let other people know where you are going to?`,
                `Do not send money to the seller or pay for the product(s)
                until you have inspected the product(s) and are sure its in a 
                condition agreed to be 'good' by both you the buyer and the seller?`,
                `Once you agree to these terms you are herein identified as 'the buyer'`,
              ].map((item, index) => {
                return (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <Adjust
                        sx={{
                          color: "tertiary.main",
                          fontSize: ".9rem",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItem>
                );
              })}
            </List>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            {" "}
            <Check sx={{ fontSize: ".9rem" }} />
            {" I don hear (I Agree to all)"}
          </Button>
        </DialogActions>
      </Dialog>

{/* {console.log(mode)} */}

    {/* <Paper 
    elevation={10}
    sx={{padding: '1rem'}}
    > */}
        {mode === "auction"?
      <AuctionsPanel/>
      :<ContactBtns actionFunction={changeButtonContent} seller={seller}/>}

    {/* </Paper> */}
      
    </div>
  );
}
