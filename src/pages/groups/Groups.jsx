import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import classes from "../page.module.css";
import { useState } from "react";
import ContactView from "../../components/ContactView/contactView";

//Page group -> show contacts and group bar
export default function Groups(props) {
  return (
    <div className={classes.page}>
      <Header />
      <main>
        <ContactView
          links={props.links}
          contacts={props.contacts}
          setContacts={props.setContacts}
          setFavorite={props.setFavorite}
          favorite={props.favorite}
          showGruopBar={true}
          isAdmin={props.isAdmin}
        />
      </main>
      <Footer />
    </div>
  );
}
