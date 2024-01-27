import React from "react";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import { InputPanel } from "./InputPanel";

const Wrapper = styled(Box)(() => ({
  position: "relative",
  padding: "1rem 0",
  height: "100%",
}));

export const ChatArea = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
