import React from "react";
import classes from "./sortBar.module.css";

//Funtion that handle with sort bar, by phone mail ....
export default function SortBar({ handleSort, setCompactView, setRefreshKey }) {
  // This fucntion handle with minimal view of contact
  function handleMinimal() {
    setCompactView((prev) => {
      const state = !prev;
      setRefreshKey((num) => num + 1);
      return state;
    });
  }

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
        <button
          onClick={() => handleSelect("favorite")}
          style={{ backgroundColor: "orange" }}
        >
          Favorite
        </button>
        <button onClick={() => handleMinimal()}>Minimal View</button>
      </div>
    </div>
  );
}
