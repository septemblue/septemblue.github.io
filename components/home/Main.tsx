import Image from "next/image";
import styles from "../../styles/home/homeMain.module.css";
import Porto from "./Porto";
import DataPortos from "../data/DataPortos";

const Main = (): JSX.Element => {
  const portos = DataPortos.map((porto) => (
    <Porto
      key={porto.id}
      title={porto.title}
      mainText={porto.text}
      image={porto.image}
      soruceCode={porto.sourceCode}
    />
  ));

  return (
    <>
      <div className={styles.kotakMain}>{portos}</div>
    </>
  );
};
export default Main;
