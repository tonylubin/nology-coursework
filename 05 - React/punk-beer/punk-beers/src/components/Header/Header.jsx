import React from "react";
import styles from "./Header.module.scss";
import image from "../../../src/BrewDog-logo.jpg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__imgContainer}>
        <img src={image} alt="Brewdog Logo" />
      </div>
      <div className={styles.header__heading}>
        <h1>BrewDog</h1>
        <p>" A Beer Finder for searching for a BrewDog beer that quenches that cold beer thirst..."</p>
      </div>
    </header>
  );
};

export default Header;
