import { useState } from "react";
import classes from "./addForm.module.css";
import { use } from "react";

// Add contact form
export default function AddForm({ addfunc, setForm }) {
  // person details
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    group: "family",
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

    // make sure all the fields are filled
    if (!formData.firstname || !formData.email || !formData.phone) {
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
    addfunc(newContact);
    setForm(false);
  }

  return (
    <div className={classes.overlay}>
      <div className={classes.content}>
        <span className={classes.close} onClick={() => setForm(false)}>
          X
        </span>
        <h2>Add contact</h2>
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
          <button type="submit">Add contact</button>
          {showErr && <p style={{ color: "red" }}>All fields are required.</p>}
        </form>
      </div>
    </div>
  );
}
