import * as React from "react";

import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Divider from "@mui/material/Divider";
import { SearchBody } from "../searchBody";


function CustomTabPanel(props){
    const { children, value, index} = props;
    
    return(
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`tab-${index}`}
        aria-labelledby={`tab-panel-${index}`}
        >
            {value === index && (
                <Box sx={{pt: 3}}>
                    {children}
                </Box>
            )}
        </div>
    )
}

function a11yProps(index){
    return{
        id: `tab-panel-${index}`,
        'aria-controls': `tab-${index}`
    }
}

export const ResponseTab = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => setValue(newValue);

  return (
    <Box sx={{ width: "100%", marginTop: '.7rem'}}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{textTransform: 'capitalize', backgroundColor: 'secondary'}} 
        >
            <Tab sx={{textTransform: 'inherit', backgroundColor: 'inherit'}} label="All" {...a11yProps(0)}/>
            <Tab sx={{textTransform: 'inherit', backgroundColor: 'inherit'}} label="Products" {...a11yProps(1)}/>
            <Tab sx={{textTransform: 'inherit', backgroundColor: 'inherit'}} label="Sellers" {...a11yProps(2)}/>
            <Tab sx={{textTransform: 'inherit', backgroundColor: 'inherit'}} label="Swaps" {...a11yProps(3)}/>
            <Tab sx={{textTransform: 'inherit', backgroundColor: 'inherit'}} label="Sales" {...a11yProps(4)}/>
            <Tab sx={{textTransform: 'inherit', backgroundColor: 'inherit'}} label="Auction" {...a11yProps(5)}/>
            <Tab sx={{textTransform: 'inherit', backgroundColor: 'inherit'}} label="Most liked" {...a11yProps(6)}/>
            <Tab sx={{textTransform: 'inherit', backgroundColor: 'inherit'}} label="Most Viewed" {...a11yProps(7)}/>
        </Tabs>
      </Box>
      <Divider/>
      <CustomTabPanel value={value} index={0}>
        <SearchBody value={"all"} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <SearchBody value={'products'} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <SearchBody value={'sellers'} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <SearchBody value={'swaps'} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <SearchBody value={value} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <SearchBody value={value} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
        <SearchBody value={value} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={7}>
        <SearchBody value={value} />
      </CustomTabPanel>
    </Box>
  );
};
