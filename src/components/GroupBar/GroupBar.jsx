import React, { useState } from "react";
import classes from "./GroupBar.module.css";

// Group bar help to class the contacts by group (Work,Home,School....)
export default function GroupBar({ contacts, setFilteredContacts }) {
  const [activeTab, setActiveTab] = useState("all");

  function handleClick(group) {
    setActiveTab(group);

    if (group === "all") {
      // return the original list
      setFilteredContacts(contacts);
    } else {
      //create new group
      const filtered = contacts.filter(
        (contact) => contact.group?.toLowerCase() === group
      );
      // update the contacts list
      setFilteredContacts(filtered);
    }
  }

  return (
    <div>
      <div className={classes.groupWrap}>
        {"all family work school".split(" ").map((group) => (
          <button
            key={group}
            onClick={() => handleClick(group)}
            style={activeTab === group ? { backgroundColor: "grey" } : {}}
          >
            {group.charAt(0).toUpperCase() + group.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}
