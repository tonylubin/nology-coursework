import React from "react";
import Card from "../../components/Card";
import styles from "./Main.module.scss";

const Main = ({ beersSearched }) => {
  return (
    <main className={styles.mainContainer}>
      <Card beersSearched={beersSearched} />
    </main>
  );
};

export default Main;
