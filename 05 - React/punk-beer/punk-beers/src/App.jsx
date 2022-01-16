import styles from "./App.module.scss";
import Main from "./containers/Main";
import NavBar from "./containers/NavBar";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";

function App() {
  const [allBeers, setAllBears] = useState([]);
  const [beersFiltered, setBeersFiltered] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    const getBeerData = async () => {
      const fetchBeers = await fetch(
        "https://api.punkapi.com/v2/beers?page=1&per_page=50"
      );
      const beersResults = await fetchBeers.json();
      setAllBears(beersResults);
    };
    getBeerData();
  }, []);

  // run search function on searchItem change & populate beer database
  useEffect(() => {
    const beerSearch = () => {
      let searchResults = allBeers.filter(
        (beer) => beer.name.toLowerCase().includes(searchItem) //  returns all beers due to "" characters
      );
      return searchResults;
    };
    setBeersFiltered(beerSearch);
  }, [searchItem, allBeers]);

  //  filtering condition functions
  const abvFilter = () => beersFiltered.filter((beer) => beer.abv > 6);

  const classicFilter = () =>
    beersFiltered.filter(
      (beer) => parseInt(beer.first_brewed.substring(3)) < 2010
    );

  const acidityFilter = () => beersFiltered.filter((beer) => beer.ph < 4);

  return (
    <div className={styles.appContainer}>
      <Header />
      <NavBar
        setSearchItem={setSearchItem}
        setBeersFiltered={setBeersFiltered}
        allBeers={allBeers}
        abvFilter={abvFilter}
        acidityFilter={acidityFilter}
        classicFilter={classicFilter}
      />
      {allBeers && <Main beersSearched={beersFiltered} />}
    </div>
  );
}

export default App;
