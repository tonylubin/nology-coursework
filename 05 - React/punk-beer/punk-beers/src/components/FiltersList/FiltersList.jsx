import React, {useState} from "react";
import FilterItem from "../FilterItem/FilterItem";

const FiltersList = ({ setBeersFiltered, classicFilter, abvFilter, acidityFilter, allBeers }) => {
  const [checkedCondition, setCheckedCondition] = useState({
    id: "",
    isChecked: false,
  });

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
