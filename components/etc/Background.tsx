import Image from "next/image";
import styles from "../../styles/etc/background.module.css";

interface Props {
  src: string;
  layout: string;
  objectFit: string;
  alt: string;
}

const Background = (props: Props): JSX.Element => {
  return (
    <>
      <div className={styles.background}>
        <Image
          src={props.src}
          alt={props.alt}
          layout={props.layout}
          objectFit={props.objectFit}
        />
      </div>
    </>
  );
};

export default Background;
