import React, {useState} from "react";
import FilterItem from "../FilterItem/FilterItem";

const FiltersList = ({ setBeersFiltered, beersFiltered, allBeers }) => {
  const [checkedCondition, setCheckedCondition] = useState({
    id: "",
    isChecked: false,
  });

  //  filtering condition functions
  const abvFilter = () => beersFiltered.filter((beer) => beer.abv > 6);

  const classicFilter = () =>
    beersFiltered.filter(
      (beer) => parseInt(beer.first_brewed.substring(3)) < 2010
    );

  const acidityFilter = () => beersFiltered.filter((beer) => beer.ph < 4);

  // object for filter function variable name targeting
  const filterFuncs = {
    classic: classicFilter,
    abv: abvFilter,
    acidity: acidityFilter,
  };

  const getCheckboxId = (e) => {
    if (checkedCondition.id.length > 0) {
      setCheckedCondition({ id: "", isChecked: e.target.checked });
      setBeersFiltered(allBeers);
    } else {
      setCheckedCondition({ id: e.target.id, isChecked: e.target.checked });
      setBeersFiltered(filterFuncs[e.target.id]);
    }
  };

  return (
    <>
      <FilterItem
        name={"abv"}
        description={"High Abv"}
        checkboxFunc={getCheckboxId}
        type={"checkbox"}
        id={"abv"}
      />
      <FilterItem
        name={"classic"}
        description={"Classic Range"}
        checkboxFunc={getCheckboxId}
        type={"checkbox"}
        id={"classic"}
      />
      <FilterItem
        name={"acidity"}
        description={"High Acidity"}
        checkboxFunc={getCheckboxId}
        type={"checkbox"}
        id={"acidity"}
      />
    </>
  );
};

export default FiltersList;
