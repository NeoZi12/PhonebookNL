import React, { useState } from "react";
import classes from "./searchBar.module.css";
import { CiSearch } from "react-icons/ci";

export default function SearchBar(props) {
  // save the contacts

  function handleChange(e) {
    // if empty need to show all contacts.
    if (e.target.value === "") {
      props.setContacts(props.contacts);
      console.log("got here");
    } else {
      // return contacts that starts with user input using filter function
      // props.setContacts is a function
      props.setContacts((prev) =>
        prev.filter((prev) => {
          if (
            prev.firstname
              .toLowerCase()
              .startsWith(e.target.value.toLowerCase()) ||
            prev.lastname.toLowerCase().startsWith(e.target.value.toLowerCase())
          )
            return prev;
        })
      );
    }
  }
  return (
    <div className={classes.search}>
      <input
        type="text"
        placeholder="search contact"
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}
