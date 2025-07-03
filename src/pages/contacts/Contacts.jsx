import { useState } from "react";

import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import classes from "../page.module.css";

import ContactView from "../../components/ContactView/contactView";
export default function Contacts(props) {
  console.log(props.isAdmin);
  return (
    <div className={classes.page}>
      <Header />
      <ContactView
        links={props.links}
        contacts={props.contacts}
        setContacts={props.setContacts}
        setFavorite={props.setFavorite}
        favorite={props.favorite}
        showGruopBar={false}
        isAdmin={props.isAdmin}
      />
      <Footer />
    </div>
  );
}
