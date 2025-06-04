import React, { useState } from "react";

import classes from "./editForm.module.css";

export default function EditForm(props) {
  console.log(props);
  const [formData, setFormData] = useState({
    fname: props.contact.fname,
    lname: props.contact.lname,
    phone: props.contact.phone,
    email: props.contact.email,
    group: props.contact.group,
  });

  const handleChange = (e) => {
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
        <input name="name" value={formData.fname} onChange={handleChange} />
      </label>

      <label>
        Last name:
        <input name="name" value={formData.lname} onChange={handleChange} />
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
