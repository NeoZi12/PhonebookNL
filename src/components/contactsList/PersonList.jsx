import classes from "./PersonList.module.css";
import Contact from "../person/Person";
import Person from "../person/Person";
import { useState } from "react";

// this component return list of contacts that given from DB
export default function PersonList(props) {
  if (props.contacts.length === 0) {
    return (
      <div>
        <h2>No contacts</h2>
      </div>
    );
  }
  // this action create list of persons
  const persons = props.filterContacts.map((el) => {
    return (
      <Person
        key={el.key}
        firstname={el.firstname}
        lastname={el.lastname}
        email={el.email}
        phone={el.phone}
        src={el.src}
        id={el.id}
        group={el.group}
        func={props.func}
        editContact={props.edit}
        setFavoriteList={props.setFavoriteList}
        setFavorite={props.setFavorite}
        favorite={props.favorite}
        compactView={props.compactView}
        isAdmin={props.isAdmin}
      />
    );
  });

  return <div className={classes.contactsList}>{persons}</div>;
}
