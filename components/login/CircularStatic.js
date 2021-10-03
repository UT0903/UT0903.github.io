import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(() => ({
  root: {
    position: "absolute",
    size: "70px",
    color: "#C0C0C0",
  },
}));

export default function CircularStatic(props) {
  const { value } = props;
  const classes = useStyles();
  return (
    <CircularProgress
      variant="static"
      size={105}
      thickness={1.5}
      className={classes.root}
      value={value}
    />
  );
}
