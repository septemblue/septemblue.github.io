import styles from "../../styles/home/homePorto.module.css";
import Image from "next/image";
import internal from "stream";
import React from "react";
import Link from "next/link";

interface DemoImage {
  src: string;
  alt: string;
  gif: string;
  width: number;
  height: number;
}
interface Props {
  mainText: string;
  title: string;
  image: DemoImage;
  soruceCode: string;
}

const Porto = (props: Props): JSX.Element => {
  let [images, setImages] = React.useState(props.image.src);

  let imagePlay = (): void => {
    if (props.image.gif == "/") return;
    setImages(props.image.gif);
  };
  let imageStop = (): void => {
    setImages(props.image.src);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.productDetails}>
          <div>
            <h1 className={styles.title}>{props.title}</h1>
            <p>{props.mainText}</p>
          </div>
          <div className={styles.sourceCode}>
            <a href={props.soruceCode}>Source Code</a>
          </div>
        </div>

        <div className={styles.productImage}>
          <Image
            className={styles.image}
            src={images}
            alt={props.image.alt}
            width={props.image.width}
            height={props.image.height}
            onMouseOver={imagePlay}
            onMouseLeave={imageStop}
          />
        </div>
      </div>
    </>
  );
};

export default Porto;
