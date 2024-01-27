import { Prelaunch } from "../Views/Prelaunch"
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const IndexRouter = () =>(
    <div>
      <Prelaunch/>
    </div>
  )


// import * as React from "react";
// import { useSelector } from "react-redux";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Header, Footer } from "../Components/Common";

// import { styled } from "@mui/system";
// import Snackbar from "@mui/material/Snackbar";
// import Alert from "@mui/material/Alert";

// import PublicRoute from "./PublicRoute";
// // import SellerRoute from "./SellerRoute";

// import {
//   HOME,
//   SEARCH,
//   SELLER_DASHBOARD,
//   SELLER_PRODUCTS,
//   SIGNIN,
//   SIGNUP,
//   FORGOT_PASSWORD,
//   ADD_PRODUCT,
//   VIEW_PRODUCT,
//   EDIT_PRODUCT,
//   ACCOUNT_EDIT,
//   REQUEST_FORM,
//   HELP_DESK,
// } from "../constants/routes";

// import { motion } from "framer-motion";
// import { Loader as LoadingOutlined } from "../Components";

// const Prelaunch = React.lazy(() => import("../Views/Prelaunch"))

// const Home = React.lazy(() => import("../Views/Home"));
// const Search = React.lazy(() => import("../Views/Search"));
// const SellerProducts = React.lazy(() => import("../Views/Seller/SellerStore"));
// const SignIn = React.lazy(() => import("../Views/Auth/Signin"));
// const SignUp = React.lazy(() => import("../Views/Auth/Signup"));
// const ForgotPassword = React.lazy(() => import("../Views/Auth/ForgotPassword"));
// const EditAccount = React.lazy(() => import("../Views/Seller/Profile/EditAccount"));
// const EditProduct = React.lazy(() => import("../Views/Seller/Product/EditProduct"));
// const AddProduct = React.lazy(() => import("../Views/Seller/Product/AddProduct"));
// const ViewProduct = React.lazy(() => import("../Views/Seller/Product/ViewProduct"));
// const RequestForm = React.lazy(() => import("../Views/Request"));
// // const RequestPage = React.lazy(() => import("../Views/Request/RequestPool"));
// const Dashboard = React.lazy(() => import("../Views/Seller/Profile"));
// const PageNotFound = React.lazy(() => import("../Views/Error/PageNotFound"));
// const HelpDesk = React.lazy(() => import("../Views/HelpDesk"));

// // const ViewAuctions = React.lazy(() => import("../Views/Auctions/ViewAuctions"));

// export const history = createBrowserHistory();

// const PageWrapper = styled(motion.div)(({ theme }) => ({
//   minHeight: "150vh",
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "space-between",
//   paddingTop: "3.5rem",

//   [theme.breakpoints.up("sm")]: {
//     paddingTop: "5rem",
//   },
// }));
// const IndexRouter = () => {
//   const { alert } = useSelector((state) => ({
//     alert: state.app.alert,
//   }));

//   const PageVariant = {
//     invisible: {
//       y: "-100vh",
//       opacity: 0,
//     },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         delay: 1.3,
//         ease: "easeIn",
//         type: "spring",
//       },
//     },
//   };
//   return (
//     <Router history={history}>
//       <Header />
//       {alert && (
//         <Snackbar>
//           <Alert>{alert}</Alert>
//         </Snackbar>
//       )}
//       <Routes>
//         <Route
//           exact
//           path={HOME}
//           element={
//             <React.Suspense fallback={<LoadingOutlined />}>
//               <PageWrapper
//                 variants={PageVariant}
//                 initial="invisible"
//                 animate="visible"
//               >
//                 <Home />
//                 <Footer />
//               </PageWrapper>
//             </React.Suspense>
//           }
//         />
//         <Route
//           element={
//             <React.Suspense fallback={<LoadingOutlined />}>
//               <PageWrapper
//                 variants={PageVariant}
//                 initial="invisible"
//                 animate="visible"
//               >
//                 <Search />
//                 <Footer />
//               </PageWrapper>
//             </React.Suspense>
//           }
//           exact
//           path={SEARCH}
//         />

//         {/* this should be a public route */}
//         <Route
//           element={
//             <React.Suspense fallback={<LoadingOutlined />}>
//               <PublicRoute path={SIGNUP}>
//                 <PageWrapper
//                   variants={PageVariant}
//                   initial="invisible"
//                   animate="visible"
//                 >
//                   <SignUp />
//                   <Footer />
//                 </PageWrapper>
//               </PublicRoute>
//             </React.Suspense>
//           }
//           exact
//           path={SIGNUP}
//         />
//         <Route
//           element={
//             <React.Suspense fallback={<LoadingOutlined />}>
//               <PublicRoute path={SIGNIN}>
//                 <PageWrapper
//                   variants={PageVariant}
//                   initial="invisible"
//                   animate="visible"
//                 >
//                   <SignIn />
//                   <Footer />
//                 </PageWrapper>
//               </PublicRoute>
//             </React.Suspense>
//           }
//           exact
//           path={SIGNIN}
//         />
//         <Route
//           element={
//             <React.Suspense fallback={<LoadingOutlined />}>
//               <PublicRoute path={FORGOT_PASSWORD}>
//                 <PageWrapper
//                   variants={PageVariant}
//                   initial="invisible"
//                   animate="visible"
//                 >
//                   <ForgotPassword />
//                   <Footer />
//                 </PageWrapper>
//               </PublicRoute>
//             </React.Suspense>
//           }
//           exact
//           path={FORGOT_PASSWORD}
//         />
//         <Route
//           element={
//             <React.Suspense fallback={<LoadingOutlined />}>
//               {/* <SellerRoute> */}
//               <PageWrapper
//                 variants={PageVariant}
//                 initial="invisible"
//                 animate="visible"
//               >
//                 <EditProduct />
//                 <Footer />
//               </PageWrapper>
//               {/* </SellerRoute> */}
//             </React.Suspense>
//           }
//           exact
//           path={EDIT_PRODUCT}
//         />

//         <Route
//           element={
//             <React.Suspense fallback={<LoadingOutlined />}>
//               {/* <SellerRoute> */}
//               <PageWrapper
//                 variants={PageVariant}
//                 initial="invisible"
//                 animate="visible"
//               >
//                 <EditAccount />
//                 <Footer />
//               </PageWrapper>
//               {/* </SellerRoute> */}
//             </React.Suspense>
//           }
//           exact
//           path={ACCOUNT_EDIT}
//         />

//         <Route
//           element={
//             <React.Suspense fallback={<LoadingOutlined />}>
//               {/* <SellerRoute> */}
//               <PageWrapper
//                 variants={PageVariant}
//                 initial="invisible"
//                 animate="visible"
//               >
//                 <Dashboard />
//                 <Footer />
//               </PageWrapper>
//               {/* </SellerRoute>  */}
//             </React.Suspense>
//           }
//           exact
//           path={SELLER_DASHBOARD}
//         />

//         {/* these should also be public */}
//         <Route
//           element={
//             <React.Suspense fallback={<LoadingOutlined />}>
//               {/* <PublicRoute> */}
//               <PageWrapper
//                 variants={PageVariant}
//                 initial="invisible"
//                 animate="visible"
//               >
//                 <AddProduct />
//                 <Footer />
//               </PageWrapper>
//               {/* </PublicRoute> */}
//             </React.Suspense>
//           }
//           exact
//           path={ADD_PRODUCT}
//         />
//         <Route
//           element={
//             <React.Suspense fallback={<LoadingOutlined />}>
//               {/* <PublicRoute> */}
//               <PageWrapper
//                 variants={PageVariant}
//                 initial="invisible"
//                 animate="visible"
//               >
//                 <ViewProduct />
//                 <Footer />
//               </PageWrapper>
//               {/* </PublicRoute> */}
//             </React.Suspense>
//           }
//           exact
//           path={VIEW_PRODUCT}
//         />
//         <Route
//           element={
//             <React.Suspense fallback={<LoadingOutlined />}>
//               <PageWrapper
//                 variants={PageVariant}
//                 initial="invisible"
//                 animate="visible"
//               >
//                 <SellerProducts />
//                 <Footer />
//               </PageWrapper>
//             </React.Suspense>
//           }
//           exact
//           path={`${SELLER_PRODUCTS}/:id`}
//         />

//         <Route
//           element={
//             <React.Suspense fallback={<LoadingOutlined />}>
//               <PageWrapper
//                 variants={PageVariant}
//                 initial="invisible"
//                 animate="visible"
//               >
//                 <RequestForm />
//                 <Footer />
//               </PageWrapper>
//             </React.Suspense>
//           }
//           exact
//           path={REQUEST_FORM}
//         />
//         <Route
//           path="*"
//           element={
//             <React.Suspense fallback={<LoadingOutlined />}>
//               <PageWrapper
//                 variants={PageVariant}
//                 initial="invisible"
//                 animate="visible"
//               >
//                 <PageNotFound />
//                 <Footer />
//               </PageWrapper>
//             </React.Suspense>
//           }
//         />
//         <Route
//           path={HELP_DESK}
//           element={
//             <React.Suspense fallback={<LoadingOutlined />}>
//               <PageWrapper
//                 variants={PageVariant}
//                 initial="invisible"
//                 animate="visible"
//               >
//                 <HelpDesk />
//                 <Footer />
//               </PageWrapper>
//             </React.Suspense>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// };
export default IndexRouter;
