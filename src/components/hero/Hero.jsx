import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm VNss</h1>
        <p className={styles.description}>
          I am a full-stack developer doing free lancing and expert of React and
          Node j.s{" "}
        </p>
        <a href="mailto:saisucharith@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>

      <img
        src={getImageUrl("hero/ppr.jpeg")}
        alt="Hero-img"
        className={styles.heroImg}
      />

      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
