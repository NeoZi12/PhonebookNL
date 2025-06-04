import React from "react";
import classes from "./sortBar.module.css";

export default function SortBar({ handleSort }) {
  function handleSelect(sortType) {
    handleSort(sortType);
  }

  return (
    <div className={classes.sortBar}>
      <h2 className={classes.title}>Sort by:</h2>
      <div className={classes.buttons}>
        <button onClick={() => handleSelect("bigToSmall")}>Big → Small</button>
        <button onClick={() => handleSelect("smallToBig")}>Small → Big</button>
        <button onClick={() => handleSelect("email")}>Email</button>
        <button onClick={() => handleSelect("phone")}>Phone Number</button>
        <button onClick={() => handleSelect("favorite")}>Favorite</button>
      </div>
    </div>
  );
}
