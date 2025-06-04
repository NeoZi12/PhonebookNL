import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navbar/NavBar";
import Actions from "../../components/compForHome/actions";
import RecentContact from "../../components/compForHome/recentContact";

import { useEffect, useState } from "react";
import classes from "../page.module.css";
import homeClasses from "./home.module.css";

export default function Home(props) {
  const recentContacts = props.contacts.slice(-3);

  const fullText = "Welcome to Your Personal Contact Manager!";
  const [displayedText, setDisplayedText] = useState("");
  const [showContacts, setShowContacts] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index = index + 1;
      if (index >= fullText.length) {
        clearInterval(interval);
        setShowContacts(true);
      }
    }, 70);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.page}>
      <Header />
      <NavBar links={props.links} />
      <main>
        <h3 className={homeClasses.typewriter}>{displayedText}</h3>
        <Actions />
        {showContacts && (
          <section className={homeClasses["fade-in"]}>
            <div>
              <h2>recent contacts that added</h2>
              <RecentContact recent={recentContacts} />
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
