import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { useState, useEffect } from "react";
import {
  Toolbar,
  Button,
  IconButton,
  Typography,
  Grid,
} from "@material-ui/core";
import FeaturedPost from "../components/FeaturedPost";
import { useContext } from "react";
import CardItem from "../components/CardItem";
import styles from "../styles/CardStyle.module.css";
import { getPostMeta, getPostsName } from "../utils/RetrievePost";
export function getStaticProps() {
  const posts = getPostsName();
  const postMetas = posts.map((pname) => getPostMeta(pname));
  return { props: { postMetas } };
}
export default function App({ postMetas, pnames }) {
  //console.log("postMetas", postMetas);
  const try_login = async () => {
    // const ret = await axios.post(
    //       CONCAT_SERVER_URL("/login"),
    //       personalInfo,
    //       config
    //     )
    // if(ret.data === "login success"){
    //   setUserInfo(personalInfo);
    // }
  };
  const sections = [
    //{ title: '台', url: '/classFeedBack', text:'222', imgSrc:'https://source.unsplash.com/random' },
    {
      title: "作業死線產生器",
      url: "/todolist",
      text: "333",
      imgSrc: "https://source.unsplash.com/random",
    },
    {
      title: "課程成績分佈查詢",
      url: "/search",
      text: "444",
      imgSrc: "https://source.unsplash.com/random",
    },
    // { title: '我的文章', url: '/post', text:'555', imgSrc:'https://source.unsplash.com/random'}
  ];
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <div style={{ padding: "0rem 15rem 0rem 15rem" }}>
            {/* <h2 style={{ textAlign: "Center", paddingTop: "3rem" }}>
              NTU課程小工具
            </h2>
            <Grid
              container
              spacing={3}
              justifyContent="space-around"
              style={{ padding: "1rem 0rem 1rem 0rem" }}
            >
              {sections.map((section) => (
                <Grid key={section} item xs={4} md={4}>
                  <CardItem section={section} />
                </Grid>
              ))}
            </Grid> */}
            <div style={{ padding: "3rem 0rem 3rem 0rem" }}>
              <h2 style={{ textAlign: "Center" }}>Blog熱門文章</h2>
              {postMetas.map((meta) => (
                <FeaturedPost key={meta} meta={meta} />
              ))}
            </div>
          </div>
        </main>
      </Container>
    </>
  );
}
