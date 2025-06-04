import { useState } from "react";
import classes from "./Person.module.css";
import EditForm from "../modal/formToEdit/editForm";
import { IoIosStarOutline } from "react-icons/io";
import { IoIosStar } from "react-icons/io";

// person components used for each contact in phone book
export default function Person(props) {
  console.log(props);
  // state for edit form
  const [showEdit, setShowEdit] = useState(false);

  const [favorite, setFavorite] = useState(false);

  // this function adding contact to favorite list or remove if already exists
  function handleClick() {
    setFavorite((prev) => !prev);

    // find if user exists:

    props.setFavoriteList((prev) => [...prev], props.id);
  }
  return (
    <div className={classes.person}>
      {!favorite && (
        <IoIosStarOutline
          onClick={() => handleClick()}
          style={{ fontSize: "2rem" }}
        />
      )}
      {favorite && (
        <IoIosStar onClick={() => handleClick()} style={{ fontSize: "2rem" }} />
      )}
      <h2> {props.fname + " " + props.lname}</h2>
      <img src={props.src} alt="avatar" />

      <p> {props.email}</p>
      <p>{props.phone}</p>
      <div className={classes.actions}>
        <button
          onClick={(prev) => setShowEdit((prev) => !prev)}
          className={`${classes.button} ${classes.edit}`}
        >
          Edit
        </button>
        <button
          className={`${classes.button} ${classes.delete}`}
          //activate the removeContacts func from contacts page
          onClick={() => props.func(props.id)}
        >
          Delete
        </button>
      </div>
      {showEdit && (
        <EditForm
          contact={props}
          func={setShowEdit}
          editContact={props.editContact}
        />
      )}
    </div>
  );
}
