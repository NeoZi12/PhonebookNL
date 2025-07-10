import { useState } from "react";
import classes from "./Person.module.css";
import { IoIosStarOutline } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import AddForm from "../modal/formToadd/addForm";

// person components used for each contact in phone book
export default function Person(props) {
  const compactView = props.compactView;
  const isAdmin = props.isAdmin;

  // for edit form
  const [showEdit, setShowEdit] = useState(false);

  // check if the user is in favorite list
  const isFavorite = props.favorite.includes(props.id);

  // used to show the favorite symbol
  const [showFavorite, setShowFavorite] = useState(false);

  // This function add user id to favorite list.
  // if the userID is already exists the function will remove the id.

  function handleFavorite(userId) {
    //Change the symbol
    setShowFavorite((prev) => !prev);
    // Adding user id into the list only if not exist,
    // if exists that mean remove user id from the list
    props.setFavorite((prev) => {
      const flag = prev.find((id) => id === userId);
      // add
      if (!flag) return [...prev, userId];
      // remove
      return prev.filter((el) => el !== userId);
    });
  }
  return (
    <>
      <div className={classes.person}>
        {isFavorite ? (
          <IoIosStar
            onClick={() => handleFavorite(props.id)}
            style={{ fontSize: "2rem", color: "gold" }}
          />
        ) : (
          <IoIosStarOutline
            onClick={() => handleFavorite(props.id)}
            style={{ fontSize: "2rem", color: "gray" }}
          />
        )}
        <h2> {props.firstname + " " + props.lastname}</h2>
        {!compactView && <img src={props.src} alt="avatar" />}

        {!compactView && <p> {props.email}</p>}
        <p>{props.phone}</p>
        <div className={classes.actions}>
          {isAdmin && (
            <button
              onClick={(prev) => setShowEdit((prev) => !prev)}
              className={`${classes.button} ${classes.edit}`}
            >
              Edit
            </button>
          )}
          {isAdmin && (
            <button
              className={`${classes.button} ${classes.delete}`}
              //activate the removeContacts func from contacts page
              onClick={() => props.func(props.id)}
            >
              Delete
            </button>
          )}
        </div>
      </div>
      {showEdit && isAdmin && (
        <AddForm
          editAction={true}
          contact={props}
          editContact={props.editContact}
          setShowEdit={setShowEdit}
        />
      )}
    </>
  );
}
