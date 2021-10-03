import { useRouter } from "next/router";
import Grid from "@material-ui/core/Grid";
import Markdown from "markdown-to-jsx";
import { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import axio from "../../contexts/axios";
import {
  getPostContent,
  getPostMeta,
  getPostsName,
} from "../../utils/RetrievePost";
// import { getPostContent, getPostMeta, getPostsName } from '../../utils/RetrievePost';
const useStyles = makeStyles((theme) => ({
  listItem: {
    marginTop: theme.spacing(1),
  },
}));
function MarkdownListItem(props) {
  const classes = useStyles();
  return (
    <li className={classes.listItem}>
      <Typography component="span" {...props} />
    </li>
  );
}

export function getStaticPaths() {
  // Call an external API endpoint to get posts
  //console.log('getPost', posts)
  const pnames = getPostsName();
  const paths = pnames.map((fname) => ({
    params: { pid: fname.replace('.md', '') },
  }));
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const fname = params.pid + '.md'
  const meta = getPostMeta(fname);
  const content = getPostContent(fname);
  return { props: { meta, content } };
}
const Post = ({ meta, content }) => {
  const options = {
    forceBlock: false,
    overrides: {
      h1: {
        component: Typography,
        props: {
          gutterBottom: true,
          variant: "h4",
          style: { padding: "0.5rem 0rem 0.5rem 0rem" },
        },
      },
      h2: {
        component: Typography,
        props: {
          gutterBottom: true,
          variant: "h5",
          style: { padding: "0.3rem 0rem 0.3rem 0rem" },
        },
      },
      h3: {
        component: Typography,
        props: {
          gutterBottom: true,
          variant: "h6",
          style: { padding: "0.1rem 0rem 0.1rem 0rem" },
        },
      },
      h4: {
        component: Typography,
        props: {
          gutterBottom: true,
          variant: "h6",
          paragraph: true,
          style: { padding: "0rem 0rem 0rem 0rem" },
        },
      },
      p: {
        component: Typography,
        props: {
          paragraph: true,
          // style:{padding:"0.5rem 0rem 0.5rem 0rem"}
        },
      },
      a: {
        component: Link,
        props: {
          style: { padding: "0.5rem 0rem 0.5rem 0rem" },
        },
      },
      li: {
        component: MarkdownListItem,
        props: {
          style: { padding: "0.5rem 0rem 0.5rem 0rem" },
        },
      },
      img: {
        props: {
          style: {
            width: "100%",
            // left: "50%",
            // marginLeft: "-47vw",
            // marginRight: "-47vw",
            // maxWidth: "94vw",
            // position: "relative",
            // right: "50%",
            // width: "94vw"
          },
        },
      },
      table: {
        props: {
          style: { padding: "0.5rem 0rem 0.5rem 0rem" },
        },
      },
    },
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ margin: "64px", maxWidth: "680px", width: "100%" }}>
        <Typography variant="h3" style={{ fontWeight: "bold" }}>
          {meta.title}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {meta.description}
        </Typography>
        <div></div>
        <Markdown options={options}>{content}</Markdown>
      </div>
    </div>
  );
};

export default Post;
