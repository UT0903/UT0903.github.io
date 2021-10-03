import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import { useSelector } from "react-redux";
//import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@material-ui/core/Button";
// import { selectUser } from "../redux/userSlice";
import LoginFormInfo from "./LoginFormInfo";
import useCountDown from "./useCountDown";
import CircularStatic from "./CircularStatic";
// import VerificationPage from "../VerificationPage/VerificationPage";
import CustomModal from "../CustomModal";
import styles from "../../styles/Login.module.css";
import Image from "next/image";
import AuthContext from "../../contexts/AuthContext";

const useStyles = makeStyles(() => ({
  formFrame: {
    backgroundColor: `rgb(255, 255, 255)`,
    borderRadius: "25px",
    textAlign: "center",
    width: "420px",
    minHeight: "600px",
    boxShadow: `rgba(0, 0, 0, 0.45) 0px 2px 10px`,
  },
  jumpFrame: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "25px",
    textAlign: "center",
    margin: "auto",
    height: "600px",
    overflow: "hidden",
    width: "84%",
    [`@media (min-width: 500px)`]: {
      width: "420px",
    },
  },
  signUpFrame: {
    height: "48px",
    width: "100%",
    color: "#111",
    borderRadius: "0 0 25px 25px",
  },
  controlCenter: {
    height: "100%",
  },
  signUpText: {
    fontSize: "16px",
    fontWeight: "700",
    color: "#111",
  },
  outerFrame: {
    padding: "20px 10px 24px",
    height: "552px",
  },
  mainText: {
    fontSize: "50px",
    fontWeight: "bold",
  },
  subText: {
    letterSpacing: "2px",
    color: "gray",
    fontSize: "15px",
    fontWeight: "bold",
    // margin: "0",
    marginBottom: "15px",
  },
  contentPosition: {
    margin: "30px auto 0px",
  },
  textPosition: {
    margin: "0px auto 0px",
  },
  imgUrl: {
    margin: "0px auto 0px",
    width: "70px",
    height: "70px",
    color: "red",
  },
}));

export default function LoginForm() {
  const verified = null;
  const { setModalShow } = useContext(AuthContext);
  const [isWait, setIsWait] = useState(false);
  const [count, setCount] = useCountDown();
  const classes = useStyles();
  return (
    <CustomModal jumpFrame={classes.jumpFrame}>
      <div>
        <div className={classes.outerFrame}>
          {isWait ? (
            <div className="centerImage">
              <Image
                src="/pictures/logo.svg"
                className={styles.AppLogo}
                alt="logo"
                width={100}
                height={100}
              />
              <CircularStatic value={count * 5} />
            </div>
          ) : (
            <Image
              className={classes.imgUrl}
              src="/pictures/logo.svg"
              alt=""
              width={100}
              height={100}
            />
          )}
          <div style={{ height: "10px" }} />
          <div className={classes.textPosition}>
            <h1 className={classes.mainText}>歡迎</h1>
            <h1 className={classes.subText}>
              僅限台大學生使用ceiba帳號登入以使用功能
            </h1>
          </div>
          <div className={classes.formPosition}>
            {verified === null ? <LoginFormInfo /> : <></>}
          </div>
          <h1 className={classes.subText} style={{ borderTop: "10px" }}>
            聲明：本網站會存取個人帳密資訊
          </h1>
          <h1 className={classes.subText}>
            網站方有義務保護帳密資訊並不得轉做其他使用
          </h1>
        </div>
        <Button
          variant="contained"
          component="span"
          className={classes.signUpFrame}
          onClick={() => {
            setModalShow(false);
          }}
        >
          <div className={classes.signUpText}>取消</div>
        </Button>
      </div>
    </CustomModal>
  );
}
