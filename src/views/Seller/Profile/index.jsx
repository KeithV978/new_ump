import React, { Fragment, lazy, Suspense, useState } from "react";
// import { useNavigate } from 'react-router-dom'
import PropType from "prop-types";
// import { useSelector } from "react-redux";
import { Container, Paper, Box, Tabs, Tab } from "@mui/material";

// import ProductTable from './productTable';
import { useDocumentTitle, useScrollTop } from "../../../hooks";
import { LoadingOutlined } from "@ant-design/icons";

const Account = lazy(() => import("./components/Account"));
const Products = lazy(() => import("./components/Products"));
const RequestPool = lazy(()=> import("./components/RequestPool"))

const Loader = () => {
  return (
    <div style={{position: 'relative'}}>
      <div
        style={{
          position: "absolute",
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        <LoadingOutlined />
      </div>
    </div>
  );
};
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`seller-dashboard-${index}`}
      aria-labelledby={`seller-dashboard-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { sm: 3, xs: 0 } }}>
          <Fragment>{children}</Fragment>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropType.object.isRequired,
  index: PropType.number.isRequired,
  value: PropType.number.isRequired,
};

function alliedProps(index) {
  return {
    id: `seller-dashboard-${index}`,
    "aria-controls": `seller-dashboard-${index}`,
  };
}
const Profile = () => {
  const [index, setIndex] = useState(0);
  useScrollTop();
  useDocumentTitle("Seller Dashboard | uniben Marketplace");

  // const { user: isLoggedIn, user } = useSelector((state) => state.auth);

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setIndex(newValue);
  };

  return (
    <Box sx={{ mt: { sm: 9, xs: 13 }, pb:{xs:3,sm:5} }}>
      <Container>
        <Box sx={{ width: { xs: "90%", sm: "75%" }, margin: "auto" }}>
          <Paper elevation={3}>
            <Box
              sx={{
                borderBottom: 1,
                backgroundColor: "#f6f6f2",
                borderColor: "#f6f6f6",
              }}
            >
              <Tabs
                value={index}
                onChange={handleChange}
                aria-label="sellers-dashboard"
              >
                <Tab
                  label="Account"
                  sx={
                    index === 0
                      ? { backgroundColor: "#fff", borderColor: "transparent" }
                      : { borderColor: "transparent" }
                  }
                />
                <Tab
                  label="Products"
                  sx={
                    index === 1
                      ? { backgroundColor: "#fff", borderColor: "transparent" }
                      : { borderColor: "transparent" }
                  }
                />
                  <Tab
                  label="Request Pool"
                  sx={
                    index === 2
                      ? { backgroundColor: "#fff", borderColor: "transparent" }
                      : { borderColor: "transparent" }
                  }
                />
              </Tabs>
            </Box>
            <Box>
              <TabPanel value={index} index={0} {...alliedProps(0)}>
                <Suspense fallback={<Loader />}>
                  <Account />
                </Suspense>
              </TabPanel>
              <TabPanel value={index} index={1} {...alliedProps(1)}>
                <Suspense fallback={<Loader />}>
                  <Products />
                </Suspense>
              </TabPanel>
              <TabPanel value={index} index={2} {...alliedProps(2)}>
                <Suspense fallback={<Loader />}>
                  <RequestPool />
                </Suspense>
              </TabPanel>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};
export default Profile;
