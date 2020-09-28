import React, { useRef, useContext } from "react";
import classes from "./Cockpit.module.css";
import AuthContext from "../../context/auth-context";

const cockpit = (props) => {
  // const toggleBtnRef = useRef(null);
  // const authContext = useContext(AuthContext);
  // toggleBtnRef.current.click();
  const assignedClasses = [];

  if (props.people.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.people.length <= 1) {
    assignedClasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>I'm working here!</p>
      <button className={classes.Button} onClick={props.clicked}>
        toggle state
      </button>
      <AuthContext.Consumer>
        {(context) => (
          <button className={classes.Button} onClick={context.login}>
            Login
          </button>
        )}
      </AuthContext.Consumer>
    </div>
  );
};

export default cockpit;
