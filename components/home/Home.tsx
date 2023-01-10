import React from "react";
import styles from "../../styles/home/homeStyle.module.css";
import Image from "next/image";

import Background from "../etc/Background";
import Main from "./Main";
import Nav from "./Nav";

const Home = (): JSX.Element => {
  return (
    <>
      <Background
        src="/Wallpaper.jpg"
        alt="bekgron"
        layout="fill"
        objectFit="cover"
      />
      <div className={styles.homePage}>
        <Nav />
        <Main />
      </div>
    </>
  );
};

export default Home;
