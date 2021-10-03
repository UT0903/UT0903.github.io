import React, { useState, useEffect, useContext } from "react";
// import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
// import { useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import { setVerified, setId } from "../redux/userSlice";
import Loading from "../Loading";
// import { setCookie } from "../cookieHelper";
//import { CONCAT_SERVER_URL } from "../utils";
//import { tidyUpData } from "../component/Data";
import axio from "../../contexts/axios";
import Router from "next/router";
import AuthContext from "../../contexts/AuthContext";
const config = {
  headers: {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};

const useStyles = makeStyles((theme) => ({
  root: {
    '"& > *"': {
      margin: theme.spacing(1),
      width: '"25ch"',
    },
  },
  centerMargin: {
    margin: "0px auto 0px",
  },
  controlSpace: {
    marginTop: "10px",
    width: "300px",
    [`@media (max-width: 400px)`]: {
      width: "80%",
    },
  },
  controlButton: {
    marginTop: "30px",
    width: "200px",
    [`@media (max-width: 400px)`]: {
      width: "170px",
    },
  },
  visitorHref: {
    display: "block",
    marginTop: "80px",
    color: "gray",
  },
}));

export default function LoginFormInfo() {
  const classes = useStyles();
  const {setUserInfo, setModalShow} = useContext(AuthContext);
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const [state, setState] = useState({
    isError: false,
    nowLoading: false,
    errorMes: ["", ""],
  });

  const handleChangeEmail = (e) => {
    setInfo({
      ...info,
      email: e.target.value,
    });
  };

  const handleChangePassword = (e) => {
    setInfo({
      ...info,
      password: e.target.value,
    });
  };

  const handleSubmit = async () => {
    setState({
      isError: state.isError,
      nowLoading: true,
      errorMes: state.errorMes,
    });
    const acc = info.email
    const pwd = info.password
    const {err, res} = await axio.post('/api/login', {acc, pwd})
    if (err) {
      setState({
        isError: true,
        nowLoading: false,
        errorMes: ["", res.data],
      });
    } else {
      setUserInfo({acc, pwd, JWT:res.data})
      setState({ isError: false, nowLoading: true, errorMes: "" });
      setModalShow(false)
    }
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className={classes.centerMargin}>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          value={info.email}
          label="帳號"
          variant="outlined"
          required
          error={state.isError}
          helperText={state.errorMes[0]}
          placeholder="enter your email"
          color="primary"
          className={classes.controlSpace}
          InputProps={{ style: { borderRadius: "50px" } }}
          onChange={handleChangeEmail}
        />

        <TextField
          type="password"
          value={info.password}
          label="密碼"
          variant="outlined"
          required
          error={state.isError}
          helperText={state.errorMes[1]}
          placeholder="enter your password"
          color="primary"
          className={classes.controlSpace}
          InputProps={{ style: { borderRadius: "50px" } }}
          onChange={handleChangePassword}
          onKeyUp={handleSearch}
        />

        {state.nowLoading ? (
          <Loading />
        ) : (
          <Button
            variant="contained"
            component="span"
            className={classes.controlButton}
            onClick={handleSubmit}
          >
            登入
          </Button>
        )}
      </form>
    </div>
  );
}
