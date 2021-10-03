import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import { useDispatch } from "react-redux";
import LoginForm from "./LoginForm";
// import { setVerified } from "../redux/userSlice";

const useStyles = makeStyles((theme) => ({
  Background: {
    background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(pictures/204.png)`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    height: "100%",
    [`@media (min-height: 650px)`]: {
      height: "100vh",
    },
  },
  homePage: {
    position: "relative",
    color: "white",
    "font-size": "72px",
    "font-weight": "600",
  },

  itemFormat: {
    display: "flex",
    alignItems: "center",
    height: "100%",
  },

  titleTEXT: {
    width: "365px",
    minWidth: "365px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  formTEXT: {
    height: "90%",
    maxWidth: "90%",
  },

  pageSetting: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "675px",
    overflow: "hidden",
  },

  spaceControl: {
    width: "10%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export default function SignUpPage({}) {
  const classes = useStyles();
  // const dispatch = useDispatch();

  return <div className={classes.Background}></div>;
}
