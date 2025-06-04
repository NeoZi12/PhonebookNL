import classes from "../page.module.css";

// this funciton logout from the page by changing the state of logged to false
export default function Logout({ func }) {
  func(false);

  return <div className={classes.page}></div>;
}
