import React from "react";
import FiltersList from "../../components/FiltersList";
import SearchBox from "../../components/SearchBox";
import styles from "./NavBar.module.scss";

const NavBar = ({
  setSearchItem,
  setBeersFiltered,
  abvFilter,
  classicFilter,
  acidityFilter,
  allBeers,
}) => {
  return (
    <nav className={styles.nav}>
      <SearchBox setSearchItem={setSearchItem} />
      <FiltersList
        setBeersFiltered={setBeersFiltered}
        abvFilter={abvFilter}
        acidityFilter={acidityFilter}
        classicFilter={classicFilter}
        allBeers={allBeers}
      />
      <p className={styles.info}>Hover over Beer for more information</p>
    </nav>
  );
};

export default NavBar;
