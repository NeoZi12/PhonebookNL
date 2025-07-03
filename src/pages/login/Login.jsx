import classes from "../page.module.css";
import classesLogIn from "./login.module.css";

import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { users } from "../../data/users";

import { useNavigate } from "react-router-dom";

// log in function
export default function Login(props) {
  const [showPass, setShowPass] = useState("password");
  const navigate = useNavigate();

  // use state for all form details
  const [userDetails, setUserDetails] = useState({
    userName: "",
    password: "",
    conPassword: "",
  });

  // err msg
  const [errMsg, setErrMsg] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    // cheking if the user Exists and also if the password the same

    if (userDetails.password !== userDetails.conPassword) {
      setErrMsg("password not match");
      return;
    }

    let vertify = users.find(
      (el) =>
        el.userName === userDetails.userName &&
        el.password === userDetails.password
    );

    // Check if user is admin
    if (vertify.rule === "admin") props.setIsAdmin(true);

    if (vertify) {
      props.onLogIn(() => true);

      navigate("/home");
    } else {
      setErrMsg("password or user name is invalid");
      return;
    }
    return;
  }

  // change function -> when user typing
  function handleChange(e) {
    setUserDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    // setting the err msg
    setErrMsg("");
  }

  return (
    <div className={classes.page}>
      <main>
        <h2>Log in</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className={classesLogIn.container}>
            <div>
              <label>User Name</label>
              <input
                type="text"
                name="userName"
                minLength={6}
                pattern="[A-za-z1-9]{6,8}"
                required
                onChange={(e) => handleChange(e)}
                value={userDetails.userName}
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type={showPass}
                required
                name="password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]({6,10}))"
                onChange={(e) => handleChange(e)}
              />
              <FaEyeSlash
                onClick={() =>
                  setShowPass((prev) => (prev === "text" ? "password" : "text"))
                }
              />
            </div>

            <div>
              <label>confirm Password</label>
              <input
                type={showPass}
                required
                name="conPassword"
                onChange={(e) => handleChange(e)}
              />
              {errMsg && <p style={{ color: "red" }}>{errMsg}</p>}
            </div>

            <div>
              <button type="submit" onClick={() => handleSubmit()}>
                Submit
              </button>
              <p>Admin:</p>
              <p>user name: leonleon</p>
              <p>Password: Leon1996</p>
              <p>user:</p>
              <p>user name: testtest</p>
              <p>Password : testtest</p>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
