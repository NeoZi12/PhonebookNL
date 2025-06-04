import React from "react";

import classes from "./actions.module.css";
import getRandomAvatar from "../../functions/randomAvatar";
export default function RecentContact(props) {
  console.log(props.recent);

  return (
    <div className={classes.actionsGrid}>
      {props.recent.map((item) => (
        <div className={classes.card} key={item.id}>
          <div className={classes.text}>
            <img src={item.src} alt="" />
          </div>
          <div className={classes.text}>
            {item.firstname + " " + item.lastname}
          </div>
          <div className={classes.text}>{item.email}</div>
          <div className={classes.text}>{item.group}</div>
        </div>
      ))}
    </div>
  );
}
