import React, { useState } from "react";

import classes from "./editForm.module.css";

export default function EditForm(props) {
  const [formData, setFormData] = useState({
    firstname: props.contact.firstname,
    lastname: props.contact.lastname,
    phone: props.contact.phone,
    email: props.contact.email,
    group: props.contact.group,
  });

  const handleChange = (e) => {
    // variables from on change function -> used to set the formData
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // sending to function the parametrs
    props.editContact(props.contact.id, formData);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <label>
        First Name:
        <input
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
        />
      </label>

      <label>
        Last name:
        <input
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
        />
      </label>

      <label>
        Phone:
        <input name="phone" value={formData.phone} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Group:
        <input name="group" value={formData.group} onChange={handleChange} />
      </label>
      <button type="submit">Save</button>
    </form>
  );
}
