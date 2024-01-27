import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import {useState, Fragment, useEffect } from "react"; 


export const displayDate = (timestamp) => {
  const date = new Date(timestamp);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  // return day + ' ' + monthNames[monthIndex] + ' ' + year;
  return `${monthNames[monthIndex]} ${day}, ${year}`;
};

export const displayMoney = (price) => {
  if(price === "" || typeof(price * 1) !== "number") return 0;
  return `${Number(price).toLocaleString("en-US")}`;
};


export const DisplayActionMessage = (msg, status = 'info') => {
  // status:
    // info,
    // error,
    // warning,
    // success

    const [displayMessage, setDisplayMessage] = useState({
      open: false,
      vertical: 'top',
      horizontal: 'right'
    });

    const {open, vertical, horizontal} = displayMessage;

    // const handleOpen = () => setDisplayMessage({...displayMessage, open: true })
    const handleClose = () => setDisplayMessage({ ...displayMessage, open: false})
     
     useEffect(() => {
      if(msg){
        setDisplayMessage({...displayMessage, open: true })
      }
     },[msg, displayMessage])
     
     return(
      <Fragment>
        <div>
          <Snackbar
            anchorOrigin={{vertical, horizontal}}
            open={{open}}
            onClose={handleClose}
            key={vertical + horizontal}
            autoHideDuration={10000}
            >
              <Alert onClose={handleClose} severity={status}>{msg}</Alert>
            </Snackbar>
        </div>
      </Fragment>
     )
  
   
  };
  