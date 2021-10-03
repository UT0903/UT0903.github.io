/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import styles from "../styles/CardStyle.module.css";
import MyLink from "./MyLink";
const ItemCard = ({ section }) => {
  console.log("section", section);
  const {
    url = "/todolist",
    title = "title",
    text = "card-text",
    imgSrc = "https://source.unsplash.com/random",
  } = section;
  return (
    <div className={styles["card"] + " text-center shadow "}>
      <MyLink href={url}>
        <div className={styles["overflow"]}>
          <img src={imgSrc} alt="" className={styles["card-img-top"]} />
        </div>
        <div className={styles["card-body"] + " text-dark"}>
          <h4 className="card-title">{title}</h4>
          <p className={styles["card-text"] + " text-secondary"}>{text}</p>
        </div>
      </MyLink>
    </div>
  );
};
export default ItemCard;
