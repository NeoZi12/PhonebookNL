import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  data,
} from "react-router-dom";

import { useEffect, useState } from "react";
import classes from "../app/app.module.css";

import Login from "./login/Login";
import Home from "./home/Home";
import Contacts from "./contacts/Contacts";
import Groups from "./groups/Groups";
import Logout from "./logout/Logout";
import NotFound from "./NotFound";
import getRandomAvatar from "../functions/randomAvatar";
import getRandomGroup from "../functions/randomGruop";

export default function PageRouter({ links }) {
  // used to protected navigate
  const [isLoggedIn, setLoggedIn] = useState(true);

  // contacts list
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    if (!isLoggedIn)
      return (
        <div>
          <p>no contacts</p>
        </div>
      );
    fetch("https://fakerapi.it/api/v1/persons?_quantity=10")
      .then((res) => res.json())
      .then((data) => {
        setContacts((prev) => [
          ...prev,
          ...data.data.map((item) => ({
            ...item,
            src: getRandomAvatar(),
            group: getRandomGroup(),
          })),
        ]);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }, []);

  return (
    <section className={classes.app}>
      <Router>
        <Routes>
          {/* routes go here, as children. the order is not important except the last one */}
          {/* path is exact path to the component (router version 7 and up)*/}
          {/* you can add props to component as usual */}

          {/* Two separate routes for Home component */}
          <Route path="/" element={<Login onLogIn={setLoggedIn} />} />
          <Route
            path="/home"
            element={
              isLoggedIn ? (
                <Home contacts={contacts} links={links} />
              ) : (
                <Navigate to={"/"} />
              )
            }
          />
          <Route
            path="/contacts"
            element={
              isLoggedIn ? (
                <Contacts
                  links={links}
                  contacts={contacts}
                  setContacts={setContacts}
                />
              ) : (
                <Navigate to={"/"} />
              )
            }
          />

          {/* <Route path="/about" element={<About links={props.links} />} /> */}
          <Route
            path="/groups"
            element={
              isLoggedIn ? (
                <Groups links={links} contacts={contacts} />
              ) : (
                <Navigate to={"/"} />
              )
            }
          />
          {
            <Route
              path="/logout"
              element={
                isLoggedIn ? (
                  <Logout func={setLoggedIn} />
                ) : (
                  <Navigate to={"/"} />
                )
              }
            />
          }

          {/* if nothing was found, show NotFound */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </section>
  );
}
