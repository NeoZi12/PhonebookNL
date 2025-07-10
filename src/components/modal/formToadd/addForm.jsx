import { useState } from "react";
import classes from "./addForm.module.css";
import { use } from "react";

// Add contact form
export default function AddForm({
  addNewContactFun,
  editAction,
  setForm,
  contact,
  editContact,
  setShowEdit,
}) {
  // person details
  const [formData, setFormData] = useState({
    firstname: contact?.firstname || "",
    lastname: contact?.lastname || "",
    email: contact?.email || "",
    phone: contact?.phone || "",
    group: contact?.group || "family",
  });

  const [showErr, setShowErr] = useState(false);

  // set the contact details
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // any change that mean user typing...
    // no need to show err message
    setShowErr(false);
  }

  // add new contact
  function handleSubmit(e) {
    e.preventDefault();

    // in case user want to edit
    if (editAction) {
      editContact(contact.id, formData);
      setShowEdit(false);
      return;
    }
    if (!formData.firstname || !formData.email || !formData.phone) {
      // make sure all the fields are filled
      setShowErr(true);
      return;
    }

    // adding id and avatar to new contact
    const newContact = {
      // copy form data and adding id and avatar
      ...formData,
      id: Date.now(),
      // random img
      src: `/avatars/avatar${Math.floor(Math.random() * 10) + 1}.png`,
    };

    // calling the function from contacts
    addNewContactFun(newContact);
    setForm(false);
  }

  // this fucntion close the add form
  function closeForm() {
    if (editAction) {
      setShowEdit(false);
      return;
    }
    setForm(false);
  }

  return (
    <div className={classes.overlay}>
      <div className={classes.content}>
        <span className={classes.close} onClick={() => closeForm()}>
          X
        </span>
        {editAction ? <h2>Edit contact</h2> : <h2>Add contact</h2>}
        <form onSubmit={handleSubmit} autoComplete="off">
          <p>
            first Name:
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
            />
          </p>
          <p>
            Last Name:
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
            />
          </p>
          <p>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </p>
          <p>
            Phone:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </p>
          <p>
            Group:
            <select name="group" value={formData.group} onChange={handleChange}>
              <option value="family">Family</option>
              <option value="work">Work</option>
              <option value="school">School</option>
            </select>
          </p>
          {!editAction && <button type="submit">Add contact</button>}
          {editAction && <button type="submit">Edit contact</button>}

          {showErr && <p style={{ color: "red" }}>All fields are required.</p>}
        </form>
      </div>
    </div>
  );
}
