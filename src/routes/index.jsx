import * as React from "react";
// import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Header, Footer } from "../components/common";

import { PrivateRoutes } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";

import {
  HOME,
  PROFILE,
  AUTH,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  HELP_DESK,
  SEARCH,
  CONFIRM_EMAIL,
} from "../constants/routes";

import { Loader } from "../components/loader";

import { useSelector } from "react-redux";
import ScrollToTop from "../components/scrollToTop";
import { styled } from "@mui/material";

export const history = createBrowserHistory(); // Used in the sagas. Learn More

const Home = React.lazy(() => import("../views/Home"));
const Profile = React.lazy(() => import("../views/Profile"));
const Search = React.lazy(() => import("../views/Search"));

const Auth = React.lazy(() => import("../views/Auth"));
const ForgotPassword = React.lazy(() => import("../views/Auth/ForgotPassword"));
const ConfirmEmail = React.lazy(() => import("../views/Auth/ConfirmEmail"));
const ResetPassword = React.lazy(() => import("../views/Auth/ResetPassword"));

const PageNotFound = React.lazy(() => import("../views/PageNotFound"));
const HelpDesk = React.lazy(() => import("../views/HelpDesk"));

const PageWrapper = styled("div")(({ theme }) => ({
  width: "85%",
  margin: "auto",
  // height: '70vh',
  [theme.breakpoints.down("xs")]: {
    width: "95%",
  },
}));

const IndexRouter = () => {
  const { username, role } = useSelector((state) => ({
    username: state,
    role: state,
  }));
  console.log(username, role);

  return (
    <Router history={history}>
      <React.Suspense fallback={<Loader />}>
        <Header />
        <Routes>
          {/* Home route */}
          <Route
            exact
            path={HOME}
            element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            }
          />

          {/* Store route */}
          <Route
            exact
            path={PROFILE}
            element={
              <React.Suspense fallback={<Loader />}>
                <PrivateRoutes username={username}>
                  <PageWrapper>
                    <Profile />
                  </PageWrapper>
                </PrivateRoutes>
              </React.Suspense>
            }
          />

          {/* Search route */}
          <Route
            exact
            path={SEARCH}
            element={
              <React.Suspense fallback={<Loader />}>
                <PageWrapper>
                  <Search />
                </PageWrapper>
              </React.Suspense>
            }
          />

          {/* Auth route */}
          <Route
            exact
            path={AUTH}
            element={
              <React.Suspense fallback={<Loader />}>
                <RestrictedRoute username={username} role={role}>
                  <Auth />
                </RestrictedRoute>
              </React.Suspense>
            }
          />
          {/* Confirm Email Route */}
          <Route
            exact
            path={CONFIRM_EMAIL}
            element={
              <React.Suspense fallback={<Loader />}>
                <RestrictedRoute username={username} role={role}>
                  <ForgotPassword />
                </RestrictedRoute>
              </React.Suspense>
            }
          />
          {/* Forgot Password Route */}
          <Route
            exact
            path={FORGOT_PASSWORD}
            element={
              <React.Suspense fallback={<Loader />}>
                <RestrictedRoute username={username} role={role}>
                  <ForgotPassword />
                </RestrictedRoute>
              </React.Suspense>
            }
          />
          {/* Reset Password Route */}
          <Route
            exact
            path={RESET_PASSWORD}
            element={
              <React.Suspense fallback={<Loader />}>
                <RestrictedRoute username={username} role={role}>
                  <PageWrapper>
                    <ResetPassword />
                  </PageWrapper>
                </RestrictedRoute>
              </React.Suspense>
            }
          />
          {/* Page Not Found Route */}
          <Route
            path="*"
            element={
              <React.Suspense fallback={<Loader />}>
                <PageWrapper>
                  <PageNotFound />
                </PageWrapper>
              </React.Suspense>
            }
          />
          {/* Help Desk Route  */}
          <Route
            path={HELP_DESK}
            element={
              <React.Suspense fallback={<Loader />}>
                <PageWrapper>
                  <HelpDesk />
                </PageWrapper>
              </React.Suspense>
            }
          />
        </Routes>
        <Footer />
        <ScrollToTop />
      </React.Suspense>
    </Router>
  );
};

export default IndexRouter;
