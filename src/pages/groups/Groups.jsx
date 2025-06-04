import PersonList from "../../components/contactsList/PersonList";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import NavBar from "../../components/navbar/NavBar";
import classes from "../page.module.css";
import groupClasses from "./group.module.css";
import { useState } from "react";
import SearchBar from "../../components/searchBar/searchBar";

export default function Groups(props) {
  const [activeTab, setActiveTab] = useState("all");

  const [selectedGroup, setSelectedGroup] = useState("family");

  const [filterContacts, setFilterContacts] = useState(props.contacts);

  // sorting contacts by group
  function handleClick(group) {
    setActiveTab(group);

    if (group === "all") {
      setFilterContacts(props.contacts);
      return;
    }
    // setting the select
    setSelectedGroup(group);
    //create new list
    let filtered = props.contacts.filter(
      (el) => el.group.toLowerCase() === selectedGroup
    );
    setFilterContacts(filtered);
  }

  // this function remove the person. the props way is -> contacts -> personList -> person
  function removeContact(personId) {
    const res = props.contacts.filter((el) => el.id !== personId);
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

  return (
    <div className={classes.page}>
      <Header />
      <NavBar links={props.links} />
      <h2>Groups</h2>
      <div className={groupClasses.groupWrap}>
        <div>
          <button
            onClick={() => handleClick("all")}
            style={
              activeTab === "all" ? { backgroundColor: "grey" } : undefined
            }
          >
            All
          </button>
        </div>
        <div>
          <button
            style={
              activeTab === "family" ? { backgroundColor: "grey" } : undefined
            }
            onClick={() => handleClick("family")}
          >
            Family
          </button>
        </div>
        <div>
          <button
            style={
              activeTab === "work" ? { backgroundColor: "grey" } : undefined
            }
            onClick={() => handleClick("work")}
          >
            Work
          </button>
        </div>
        <div>
          <button
            style={
              activeTab === "school" ? { backgroundColor: "grey" } : undefined
            }
            onClick={() => handleClick("school")}
          >
            School
          </button>
        </div>
      </div>
      <main>
        <SearchBar contacts={props.contacts} setContacts={setFilterContacts} />

        <PersonList contacts={filterContacts} />
      </main>
      <Footer />
    </div>
  );
}
