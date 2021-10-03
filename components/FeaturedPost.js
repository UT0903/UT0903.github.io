import * as React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import MyLink from "../components/MyLink";
import Image from "next/image";
const useStyles = makeStyles({
  card: {
    display: "flex",
    marginTop: 20,
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

export default function FeaturedPost({ meta }) {
  const classes = useStyles();
  return (
    <>
      <CardActionArea component="div" style={{ borderTop: "10px" }}>
        <MyLink href={meta.url}>
          <Card className={classes.card}>
            <div className={classes.cardDetails}>
              <CardContent>
                <Typography component="h2" variant="h5">
                  {meta.title}
                </Typography>
                <Typography variant="subtitle1" style={{ color: "#696969" }}>
                  {meta.date}
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  {meta.description}
                </Typography>
                <Typography variant="subtitle1" style={{ color: "#0000CD" }}>
                  Continue reading...
                </Typography>
              </CardContent>
            </div>
            <Hidden smDown>
              <CardMedia
                className={classes.cardMedia}
                image={meta.img}
                title={meta.title}
              />
            </Hidden>
          </Card>
        </MyLink>
      </CardActionArea>
    </>
  );
}
