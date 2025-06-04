import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import NavBar from "../../components/navbar/NavBar";
import classes from "../page.module.css";

import PersonList from "../../components/contactsList/PersonList";
import SearchBar from "../../components/searchBar/searchBar";
import { useEffect, useState } from "react";

import AddForm from "../../components/modal/formToadd/addForm";
import SortBar from "../../components/sortBar/sortBar";
import sortContacts from "../../functions/sortContacts";
export default function Contacts(props) {
  // used to add contact to favorite list
  const [favoriteList, setFavoriteList] = useState([]);

  const [filteredContacts, setFilteredContacts] = useState(props.contacts);

  //use state for add contact form
  const [showAddContact, setShowAddContact] = useState(false);

  // this function remove the person. the props way is -> contacts -> personList -> person
  function removeContact(personId) {
    const res = props.contacts.filter((el) => el.id !== personId);
    setFilteredContacts(res);
    props.setContacts(res);
  }

  // this fucction edit contacts
  function editContact(contactId, contactDetails) {
    const selectedContact = props.contacts.find((el) => el.id === contactId);

    if (!selectedContact) console.log("Contact not found");
    else {
      // if the user id dosnt match, the map function return the orginal obj.
      // but if the user id equal that mean we want to override the exists obj with the new
      const updatedContacts = props.contacts.map((el) =>
        el.id === contactId ? { ...el, ...contactDetails } : el
      );
      // update the prime contacts
      props.setContacts(updatedContacts);
    }
  }

  // this funciton adding new contact to contacts list from addContacts component
  function addNewContact(contactObj) {
    console.log(contactObj);
    props.setContacts((prev) => [...prev, contactObj]);
  }

  // this function handle with sort contacts by user select
  function handleSort(sortSelect) {
    // calling helper function from /functions/sortContacts
    // the function return sorted list
    const res = sortContacts(props.contacts, sortSelect);

    setFilteredContacts(res);
  }

  return (
    <div className={classes.page}>
      <Header />
      <NavBar links={props.links} />
      <h2>contacts</h2>
      <button
        onClick={() => setShowAddContact(true)}
        style={{ width: "30%", margin: "auto" }}
      >
        Add new Contact
      </button>

      <main>
        <SearchBar
          setContacts={setFilteredContacts}
          contacts={props.contacts}
        />
        <SortBar handleSort={handleSort} />

        <PersonList
          contacts={filteredContacts}
          func={removeContact}
          edit={editContact}
          addFavorite={setFavoriteList}
        />
      </main>

      {showAddContact && (
        <AddForm addfunc={addNewContact} setForm={setShowAddContact} />
      )}
      <Footer />
    </div>
  );
}
