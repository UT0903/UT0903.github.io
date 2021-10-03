import * as React from "react";
import {
  Toolbar,
  Button,
  IconButton,
  Typography,
  Grid,
} from "@material-ui/core";

import MyLink from "../components/MyLink";
import { useRouter } from "next/router";
import AuthContext from "../contexts/AuthContext";
import { useContext, useState, useEffect } from "react";
import LoginForm from "../components/login/LoginForm";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";

export default function Header() {
  const { setModalShow, userInfo, setUserInfo } = useContext(AuthContext);
  const siteTitle = "UT的部落格 | UT's Blog";
  return (
    <React.Fragment >
      <Toolbar
        style={{
          justifyContent: "center",
          borderBottom: "1px solid",
          borderColor: "rgba(200, 200, 200, 100)",
          position: "sticky",
          top: 0,
          background: "rgba(240, 240, 240, 255)",
          zIndex: 1000,
        }}
      >
        <MyLink
          // display="block"
          // variant="body1"
          href={"."}
          // key={network.name}
          // sx={{ mb: 0.5 }}
        >
          <HomeRoundedIcon fontSize="large" />
          {/* <span>{network.name}</span> */}
        </MyLink>
        <Typography
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          style={{ flex: 1 }}
        >
          {siteTitle}
        </Typography>
        {!userInfo? (
          <>
            <Typography
              style={{
                fontSize: "13px",
                backgroundColor: "rgba(0, 0, 0, 0)",
                marginRight: "10px",
                color: "red",
              }}
              gutterBottom
            >
              尚未登入
            </Typography>
            <Button
              size="small"
              style={{ border: "2px solid", color: "blue" }}
              onClick={() => {
                setModalShow(true);
              }}
            >
              登入
            </Button>
          </>
        ) : (
          <>
            <Typography
              style={{
                fontSize: "13px",
                backgroundColor: "rgba(0, 0, 0, 0)",
                marginRight: "10px",
              }}
              gutterBottom
            >
              {userInfo.acc} 已登入
            </Typography>
            <Button
              size="small"
              style={{ border: "2px solid", color: "green" }}
              onClick={() => {
                setUserInfo(null)
              }}
            >
              登出
            </Button>
          </>
        )}
      </Toolbar>
      {/* <Toolbar
          component="nav"
          variant="dense"
          style={{ justifyContent: 'space-around', flexWrap:"wrap" }}
        >
          {sections.map((section) => (
            <MyLink
              href={section.url}
              key={section.title}
              color='textPrimary'
              style={{fontSize:"15px", flexShrink:"0"}}
              xs={12}
              md={2}
            >
              {section.title}
            </MyLink>
          ))}
        </Toolbar> */}
      <LoginForm />
    </React.Fragment>
  );
}
