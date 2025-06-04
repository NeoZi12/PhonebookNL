import React from "react";
import classes from "./actions.module.css";

const webActions = [
  {
    icon: "👥",
    text: "Add new contacts with personalized avatars",
  },
  {
    icon: "✏️",
    text: "Edit existing contact details",
  },
  {
    icon: "🗑️",
    text: "Delete contacts you no longer need",
  },
  {
    icon: "🔍",
    text: "Search and filter your contact list instantly",
  },
  {
    icon: "📊",
    text: "View summaries by group",
  },
];

export default function Actions() {
  return (
    <div className={classes.actionsGrid}>
      {webActions.map((item, index) => (
        <div className={classes.card} key={index}>
          <div className={classes.icon}>{item.icon}</div>
          <div className={classes.text}>{item.text}</div>
        </div>
      ))}
    </div>
  );
}
