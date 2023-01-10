import styles from "../../styles/home/homeNav.module.css";
import Image from "next/image";
import React from "react";
import Link from "next/link";
const Nav = (): JSX.Element => {
  const github = (): void => {
    window.open("https://www.github.com/septemblue");
  };
  const linkedin = (): void => {
    window.open("https://www.linkedin.com/in/raffhizz");
  };
  return (
    <>
      <div className={styles.profile}>
        <h1 className={styles.name}>Raffael Ali Maulana</h1>
        <h2 className={styles.job}>Undergraduate Android Developer</h2>
        <div className={styles.links}>
          <ul>
            <li>
              <a onClick={github}>
                <Image src="/github.png" alt="github" width={50} height={50} />
              </a>
            </li>
            <li>
              <a onClick={linkedin}>
                <Image
                  src="/linkedin.png"
                  alt="github"
                  width={50}
                  height={50}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
