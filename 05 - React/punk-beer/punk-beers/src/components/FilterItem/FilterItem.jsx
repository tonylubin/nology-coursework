import React from "react";
import styles from "./FilterItem.module.scss";

function FilterItem (props) {
  const { name, type, id, checkboxFunc, description } = props;

  return (
    <div className={styles.filterItem}>
      <label htmlFor={name}>{description}</label>
      <input onChange={checkboxFunc} type={type} id={id} name={name}></input>
    </div>
  );
}

export default FilterItem;
