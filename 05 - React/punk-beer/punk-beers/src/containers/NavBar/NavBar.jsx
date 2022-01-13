import React from "react";
import FiltersList from "../../components/FiltersList";
import SearchBox from "../../components/SearchBox";
import styles from "./NavBar.module.scss";

const NavBar = ({
  setSearchItem,
  setBeersFiltered,
  beersFiltered,
  allBeers,
}) => {
  return (
    <nav className={styles.nav}>
      <SearchBox setSearchItem={setSearchItem} />
      <FiltersList
        setBeersFiltered={setBeersFiltered}
        beersFiltered={beersFiltered}
        allBeers={allBeers}
      />
      <p className={styles.info}>Hover over Beer for more information</p>
    </nav>
  );
};

export default NavBar;
