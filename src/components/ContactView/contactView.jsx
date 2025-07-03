import React, { useState } from "react";
import NavBar from "../navbar/NavBar";
import SearchBar from "../searchBar/searchBar";
import SortBar from "../sortBar/sortBar";
import PersonList from "../contactsList/PersonList";
import AddForm from "../modal/formToadd/addForm";
import sortContacts from "../../functions/sortContacts";
import GroupBar from "../../components/GroupBar/GroupBar";
import validateUser from "../../functions/validateUser";
import classes from "./contactView.module.css";

export default function ContactView({
  links,
  contacts,
  setContacts,
  setFavorite,
  favorite,
  showGruopBar,
  isAdmin,
}) {
  // use state for add contact form
  const [showAddContact, setShowAddContact] = useState(false);

  // use state for compact view
  const [compactView, setCompactView] = useState(false);

  // used to refresh the contact view after user select to compact view
  const [refreshKey, setRefreshKey] = useState(0);

  // used to display contact with small change like sort,search...
  const [filteredContacts, setFilteredContacts] = useState(contacts);

  const [errNewContact, setErrNewContact] = useState(false);

  // this function remove the person. the props way is -> contacts -> personList -> person
  function removeContact(personId) {
    //Alert before delete contact!
    const res = window.confirm("Are you sure you want delete this contact?");
    if (!res) return;
    const updated = contacts.filter((el) => el.id !== personId);
    setContacts(updated);
    setFilteredContacts(updated);
  }

  // this fucction edit contacts
  function editContact(contactId, contactDetails) {
    const selectedContact = contacts.find((el) => el.id === contactId);

    if (!selectedContact) console.log("Contact not found");
    else {
      const updatedContacts = contacts.map((el) =>
        el.id === contactId ? { ...el, ...contactDetails } : el
      );

      setContacts(updatedContacts);
      setFilteredContacts(updatedContacts);
    }
  }

  // this funciton adding new contact to contacts list from addContacts component
  function addNewContact(contactObj) {
    // if user exist return true
    const validate = validateUser(
      contactObj.firstname,
      contactObj.lastname,
      contacts
    );

    if (validate) {
      setErrNewContact(true);
      setTimeout(() => setErrNewContact(false), 3000);
      return;
    }
    const updated = [...contacts, contactObj];
    setContacts(updated);
    setFilteredContacts(updated);
  }

  // this function handle with sort contacts by user select
  function handleSort(sortSelect) {
    const res = sortContacts(contacts, sortSelect, favorite);
    setFilteredContacts(res);
  }

  // this function remove all contacts from the page
  function handleDelete() {
    const res = window.confirm("Are you sure to delete all users?!!");
    if (!res) return;
    setContacts([]);
  }

  return (
    <div>
      <main>
        <NavBar links={links} />

        <div className={classes.mainContainer}>
          <h2>Contacts</h2>

          {isAdmin && (
            <button
              onClick={() => setShowAddContact(true)}
              className={`${classes.button} ${classes.addButton}`}
            >
              Add new Contact
            </button>
          )}

          {errNewContact && (
            <p className={classes.errorMessage}>User already exists!</p>
          )}

          {isAdmin && (
            <button
              onClick={handleDelete}
              className={`${classes.button} ${classes.deleteAllButton}`}
            >
              Delete all users
            </button>
          )}
        </div>

        <SearchBar setContacts={setFilteredContacts} contacts={contacts} />
        <SortBar
          handleSort={handleSort}
          setCompactView={setCompactView}
          setRefreshKey={setRefreshKey}
        />
        {showGruopBar && (
          <GroupBar
            setFilteredContacts={setFilteredContacts}
            contacts={contacts}
          />
        )}

        <PersonList
          key={refreshKey}
          contacts={contacts}
          func={removeContact}
          edit={editContact}
          filterContacts={filteredContacts}
          setFavorite={setFavorite}
          favorite={favorite}
          compactView={compactView}
          isAdmin={isAdmin}
        />

        {showAddContact && isAdmin && (
          <AddForm addfunc={addNewContact} setForm={setShowAddContact} />
        )}
      </main>
    </div>
  );
}
